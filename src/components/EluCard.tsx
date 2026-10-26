import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Elu } from "@/data/elus";

type EluCardProps = {
  elu: Elu;
};

export function EluCard({ elu }: EluCardProps) {
  return (
    <Link
      href={`/representants/${elu.slug}`}
      className="group flex items-center justify-between gap-4 border-t border-alice-border py-5 transition-colors hover:border-alice-blue"
    >
      <span>
        <span className="font-display block text-2xl font-medium text-alice-navy transition-colors group-hover:text-alice-blue">
          {elu.displayName}
        </span>
        <span className="mt-1 block text-sm text-alice-muted">
          {elu.circonscription ?? "Membre du groupe ALICE"}
        </span>
      </span>
      <ArrowRight className="shrink-0 text-alice-blue" size={18} aria-hidden />
    </Link>
  );
}
