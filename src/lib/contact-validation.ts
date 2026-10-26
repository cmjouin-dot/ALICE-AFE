export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
  constituency: 120,
} as const;

const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
  constituency?: string;
};

export type ContactDraft = {
  name: unknown;
  email: unknown;
  subject: unknown;
  message: unknown;
  constituency: unknown;
  honeypot: unknown;
  hasNonStringValue: boolean;
};

function cleanLine(value: string, max: number): string | null {
  const cleaned = value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned || cleaned.length > max) return null;
  return cleaned;
}

function cleanMessage(value: string): string | null {
  const cleaned = value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
  if (!cleaned || cleaned.length > CONTACT_LIMITS.message) return null;
  return cleaned;
}

export function isValidEmail(value: string): boolean {
  if (value.length > CONTACT_LIMITS.email) return false;
  if (/[\s<>"'`]/.test(value)) return false;
  return EMAIL_PATTERN.test(value);
}

export function parseContactDraft(
  draft: ContactDraft,
): { ok: true; fields: ContactFields } | { ok: false } {
  if (draft.hasNonStringValue) return { ok: false };
  if (typeof draft.honeypot === "string" && draft.honeypot.trim() !== "") {
    return { ok: false };
  }
  if (typeof draft.honeypot !== "string" && draft.honeypot != null) {
    return { ok: false };
  }

  if (typeof draft.name !== "string") return { ok: false };
  if (typeof draft.email !== "string") return { ok: false };
  if (typeof draft.subject !== "string") return { ok: false };
  if (typeof draft.message !== "string") return { ok: false };

  const name = cleanLine(draft.name, CONTACT_LIMITS.name);
  const email = draft.email.trim();
  const subject = cleanLine(draft.subject, CONTACT_LIMITS.subject);
  const message = cleanMessage(draft.message);
  if (!name || !subject || !message || !isValidEmail(email)) return { ok: false };

  let constituency: string | undefined;
  if (typeof draft.constituency === "string" && draft.constituency.trim() !== "") {
    const cleaned = cleanLine(draft.constituency, CONTACT_LIMITS.constituency);
    if (!cleaned) return { ok: false };
    constituency = cleaned;
  } else if (
    draft.constituency != null &&
    typeof draft.constituency !== "string"
  ) {
    return { ok: false };
  }

  return {
    ok: true,
    fields: { name, email, subject, message, constituency },
  };
}
