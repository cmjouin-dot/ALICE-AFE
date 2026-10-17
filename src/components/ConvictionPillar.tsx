import type { Conviction } from "@/data/convictions";

type ConvictionPillarProps = {
  conviction: Conviction;
  index: number;
};

export function ConvictionPillar({ conviction, index }: ConvictionPillarProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-alice-border pt-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-alice-coral">
        {number}
      </p>
      <h3 className="font-display mt-3 text-2xl font-medium text-alice-navy">
        {conviction.title}
      </h3>
      <p className="mt-3 text-alice-muted">{conviction.summary}</p>
    </article>
  );
}
