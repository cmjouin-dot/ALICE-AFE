import {
  parseContactDraft,
  type ContactDraft,
  type ContactFields,
} from "./contact-validation";

export const CONTACT_FROM = "ALICE <contact@alice-fde.org>";
export const CONTACT_TO = "c.jouin@assemblee-afe.fr";

export type ContactStatus = { status: "sent" } | { status: "error" };

export type ContactEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};

export type RateLimitResult = "ok" | "limited" | "unconfigured" | "unavailable";

type ContactDeps = {
  apiKey: string | undefined;
  rateLimit: () => Promise<RateLimitResult>;
  send: (email: ContactEmail) => Promise<boolean>;
};

export function buildContactEmail(fields: ContactFields): ContactEmail {
  const lines = [
    `Nom : ${fields.name}`,
    `Courriel : ${fields.email}`,
    `Objet : ${fields.subject}`,
  ];
  if (fields.constituency) {
    lines.push(`Circonscription : ${fields.constituency}`);
  }
  lines.push("", "Message :", fields.message);

  return {
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: fields.email,
    subject: `[ALICE Contact] - ${fields.subject}`,
    text: lines.join("\n"),
  };
}

export async function processContactSubmission(
  draft: ContactDraft,
  deps: ContactDeps,
): Promise<ContactStatus> {
  const parsed = parseContactDraft(draft);
  if (!parsed.ok) return { status: "error" };

  const limit = await deps.rateLimit();
  if (limit === "limited" || limit === "unavailable") {
    return { status: "error" };
  }

  if (!deps.apiKey) return { status: "error" };

  try {
    const accepted = await deps.send(buildContactEmail(parsed.fields));
    return accepted ? { status: "sent" } : { status: "error" };
  } catch {
    return { status: "error" };
  }
}
