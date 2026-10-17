type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-alice-coral">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl font-medium tracking-tight text-alice-navy sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-alice-muted">{description}</p>
      ) : null}
    </div>
  );
}
