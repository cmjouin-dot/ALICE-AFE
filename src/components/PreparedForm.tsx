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
    <form id={id} className="scroll-mt-28" aria-describedby={`${id}-statut`}>
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
                  type={field.type ?? "text"}
                  className={inputClass}
                />
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-8 inline-flex cursor-not-allowed items-center justify-center border border-alice-border bg-alice-gray px-6 py-3 text-[0.95rem] font-semibold tracking-wide text-alice-muted"
        >
          Envoi non activé
        </button>
      </fieldset>
    </form>
  );
}
