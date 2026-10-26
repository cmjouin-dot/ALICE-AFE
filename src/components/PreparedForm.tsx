import { Info } from "lucide-react";
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

export function PreparedForm({ id, fields }: PreparedFormProps) {
  return (
    <form
      id={id}
      className="scroll-mt-28"
      aria-describedby={`${id}-statut`}
      encType="application/x-www-form-urlencoded"
    >
      <p id={`${id}-statut`} className="text-sm font-semibold text-alice-navy">
        Formulaire inactif. L&apos;envoi n&apos;est pas branché.
      </p>
      <fieldset disabled className="mt-6">
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
                  className={inputClass}
                />
              ) : (
                <input
                  id={`${id}-${field.id}`}
                  name={field.id}
                  type={field.type === "email" ? "email" : "text"}
                  className={inputClass}
                />
              )}
            </div>
          ))}
        </div>
      </fieldset>
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
            « Pour protéger vos données personnelles, merci de ne pas
            transmettre de documents confidentiels, d&apos;informations
            sensibles ou de données personnelles concernant des tiers via ce
            formulaire. Pour toute demande nécessitant un échange
            confidentiel, contactez-nous directement à{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            . »
          </p>
        </div>
      </div>
      <button
        type="submit"
        disabled
        className="mt-4 inline-flex cursor-not-allowed items-center justify-center border border-alice-border bg-alice-gray px-6 py-3 text-[0.95rem] font-semibold tracking-wide text-alice-muted"
      >
        Envoi non activé
      </button>
    </form>
  );
}
