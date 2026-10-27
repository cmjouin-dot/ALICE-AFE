"use client";

import { Info } from "lucide-react";
import { useActionState } from "react";
import Link from "next/link";
import { sendContactMessage } from "@/app/contact/actions";
import { CONTACT_LIMITS } from "@/lib/contact-validation";
import { siteConfig } from "@/data/site";

type PreparedField = {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
};

type PreparedFormProps = {
  id: string;
  fields: PreparedField[];
};

const inputClass =
  "mt-2 w-full border border-alice-border bg-alice-gray px-4 py-3 text-alice-navy";

const SUCCESS_MESSAGE =
  "Votre message a bien été envoyé. Merci de nous avoir contactés. Nous reviendrons vers vous dans les meilleurs délais.";

const ERROR_MESSAGE =
  "Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer ou de nous contacter directement à";

function fieldLimit(id: string): number {
  if (id === "nom") return CONTACT_LIMITS.name;
  if (id === "courriel") return CONTACT_LIMITS.email;
  if (id === "objet") return CONTACT_LIMITS.subject;
  if (id === "circonscription") return CONTACT_LIMITS.constituency;
  return CONTACT_LIMITS.message;
}

export function PreparedForm({ id, fields }: PreparedFormProps) {
  const [state, formAction, pending] = useActionState(sendContactMessage, null);

  if (state?.status === "sent") {
    return (
      <p className="text-lg leading-relaxed text-alice-navy" role="status">
        {SUCCESS_MESSAGE}
      </p>
    );
  }

  return (
    <form id={id} action={formAction} className="relative scroll-mt-28" noValidate>
      <div className="grid gap-6">
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={`${id}-${field.id}`}
              className="text-sm font-semibold text-alice-navy"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={`${id}-${field.id}`}
                name={field.id}
                rows={6}
                required
                maxLength={fieldLimit(field.id)}
                disabled={pending}
                className={inputClass}
              />
            ) : (
              <input
                id={`${id}-${field.id}`}
                name={field.id}
                type={field.type === "email" ? "email" : "text"}
                required={field.id !== "circonscription"}
                maxLength={fieldLimit(field.id)}
                autoComplete={
                  field.id === "nom"
                    ? "name"
                    : field.id === "courriel"
                      ? "email"
                      : "off"
                }
                disabled={pending}
                className={inputClass}
              />
            )}
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden">
        <label htmlFor={`${id}-hp`}>Ne pas remplir</label>
        <input
          id={`${id}-hp`}
          name="hp_field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {state?.status === "error" ? (
        <p className="mt-8 text-sm leading-relaxed text-alice-navy" role="alert">
          {ERROR_MESSAGE}{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-alice-blue underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}

      <div className="mt-8 flex gap-3 bg-alice-gray px-4 py-3.5 text-sm leading-relaxed text-alice-muted">
        <Info
          size={18}
          strokeWidth={1.75}
          className="mt-0.5 shrink-0 text-alice-blue"
          aria-hidden
        />
        <div>
          <p className="font-semibold text-alice-navy">
            Confidentialité de vos échanges
          </p>
          <p className="mt-1">
            Pour toute demande nécessitant un échange confidentiel, vous pouvez
            contacter directement notre représentant à l&apos;adresse{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            . Merci de ne pas transmettre de documents sensibles via ce
            formulaire.
          </p>
          <p className="mt-2">
            Les informations transmises via ce formulaire sont utilisées
            exclusivement pour traiter votre demande et vous répondre. Elles
            sont accessibles aux seuls représentants habilités du groupe ALICE
            et à ses prestataires techniques, dans la limite de leurs missions.
            Elles ne sont pas utilisées à des fins de prospection politique
            sans votre accord.
          </p>
          <p className="mt-2">
            Pour en savoir plus sur le traitement de vos données et
            l&apos;exercice de vos droits, consultez notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="mt-4 inline-flex items-center justify-center bg-alice-navy px-6 py-3 text-[0.95rem] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-alice-blue disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? (
          <span className="inline-flex items-center gap-2">
            <span
              className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
              aria-hidden
            />
            Envoi en cours…
          </span>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
