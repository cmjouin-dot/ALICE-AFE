import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import type { Elu } from "@/data/elus";

type EluCardProps = {
  elu: Elu;
};

export function EluCard({ elu }: EluCardProps) {
  return (
    <Link
      href={`/elus/${elu.slug}`}
      className="group flex flex-col border-t border-alice-border pt-6 transition-colors hover:border-alice-blue"
    >
      <div
        className="mb-5 flex aspect-[4/5] w-full items-center justify-center bg-alice-gray"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-alice-muted">
          <UserRound size={40} strokeWidth={1.25} />
          <span className="text-xs tracking-wide">Photo à venir</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-medium text-alice-navy transition-colors group-hover:text-alice-blue">
            {elu.displayName}
          </h3>
          <p className="mt-2 text-sm text-alice-muted">{elu.circonscription}</p>
        </div>
        <ArrowUpRight
          className="mt-1 shrink-0 text-alice-blue opacity-0 transition-opacity group-hover:opacity-100"
          size={18}
          aria-hidden
        />
      </div>
      <p className="mt-3 text-sm text-alice-muted">{elu.responsabilites[0]}</p>
    </Link>
  );
}
