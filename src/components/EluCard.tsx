import Image from "next/image";
import Link from "next/link";
import type { Elu } from "@/data/elus";

type EluCardProps = {
  elu: Elu;
};

function commissionsToShow(elu: Elu) {
  return elu.commissions.filter((commission) => {
    const detail = commission.replace(/^Commission\s+/i, "").toLowerCase();
    return !elu.fonctionsAfe.some((fonction) =>
      fonction.toLowerCase().includes(detail),
    );
  });
}

export function EluCard({ elu }: EluCardProps) {
  const commissions = commissionsToShow(elu);

  return (
    <article className="h-full">
      <Link
        href={`/representants/${elu.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-md border border-alice-border bg-white transition-colors hover:border-alice-blue"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-alice-gray">
          <Image
            src={elu.photo}
            alt={`Portrait de ${elu.displayName}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: elu.photoPosition }}
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="font-display text-2xl font-medium leading-snug text-alice-navy">
            {elu.displayName}
          </h2>
          {elu.roleAlice ? (
            <p
              className={`mt-2 text-sm ${
                elu.roleAlice === "Représentante ALICE au dispositif STAFE"
                  ? "font-normal text-black"
                  : "font-semibold text-alice-blue"
              }`}
            >
              {elu.roleAlice}
            </p>
          ) : null}
          {commissions.length > 0 ? (
            <ul className="mt-3 space-y-1 text-sm leading-snug text-alice-navy">
              {commissions.map((commission) => (
                <li key={commission}>{commission}</li>
              ))}
            </ul>
          ) : null}
          {elu.fonctionsAfe.length > 0 ? (
            <ul className="mt-2 space-y-1 text-sm leading-snug text-alice-muted">
              {elu.fonctionsAfe.map((fonction) => (
                <li key={fonction}>{fonction}</li>
              ))}
            </ul>
          ) : null}
          {elu.email ? (
            <p className="mt-3 text-sm text-alice-blue">{elu.email}</p>
          ) : null}
          <p className="mt-auto pt-4 text-sm text-alice-muted">
            {elu.circonscription ?? "Circonscription à confirmer"}
          </p>
        </div>
      </Link>
    </article>
  );
}
