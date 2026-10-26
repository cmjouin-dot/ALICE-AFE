import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EluCard } from "@/components/EluCard";
import { PageHero } from "@/components/PageHero";
import { elus } from "@/data/elus";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Les dix élus d'ALICE à l'Assemblée des Français de l'étranger : responsabilités, commissions et circonscriptions.",
};

export default function RepresentantsPage() {
  return (
    <>
      <PageHero title="Qui sommes-nous ?" />

      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-alice-muted">
          <p>
            ALICE rassemble dix élus à l&apos;Assemblée des Français de
            l&apos;étranger, représentant différentes circonscriptions à travers
            le monde. Notre diversité de parcours et d&apos;expériences
            constitue une richesse au service des conseillers des Français de
            l&apos;étranger.
          </p>
          <p>
            Présents dans plusieurs commissions et instances de l&apos;AFE, nous
            défendons une approche constructive, collégiale et transparente du
            travail de l&apos;Assemblée.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {elus.map((elu) => (
            <li key={elu.slug} className="h-full">
              <EluCard elu={elu} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
