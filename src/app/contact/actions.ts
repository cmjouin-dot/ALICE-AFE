"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { processContactSubmission } from "@/lib/contact-delivery";
import { consumeContactRateLimit } from "@/lib/contact-rate-limit";

export type ContactFormState = { status: "sent" } | { status: "error" };

function textValue(value: FormDataEntryValue | null): unknown {
  return typeof value === "string" ? value : value;
}

export async function sendContactMessage(
  _previous: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const apiKey = process.env.RESEND_API_KEY;
  let hasNonStringValue = false;
  for (const value of formData.values()) {
    if (typeof value !== "string") hasNonStringValue = true;
  }

  const message = formData.get("message");
  const question = formData.get("question");
  const body =
    typeof message === "string" && message.trim() !== "" ? message : question;

  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "";

  return processContactSubmission(
    {
      name: textValue(formData.get("nom")),
      email: textValue(formData.get("courriel")),
      subject: textValue(formData.get("objet")),
      message: body,
      constituency: textValue(formData.get("circonscription")),
      honeypot: textValue(formData.get("hp_field")),
      hasNonStringValue,
    },
    {
      apiKey,
      rateLimit: () => consumeContactRateLimit(ip),
      send: async (email) => {
        if (!apiKey) return false;
        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
          from: email.from,
          to: email.to,
          replyTo: email.replyTo,
          subject: email.subject,
          text: email.text,
        });
        return !error && Boolean(data?.id);
      },
    },
  );
}
