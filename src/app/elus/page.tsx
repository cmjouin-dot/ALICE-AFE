import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { EluCard } from "@/components/EluCard";
import { PageHero } from "@/components/PageHero";
import { elus } from "@/data/elus";

export const metadata: Metadata = {
  title: "Nos élus",
  description:
    "Les dix élus du groupe ALICE à l'Assemblée des Français de l'étranger.",
};

export default function ElusPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos élus"
        title="Les élus du groupe ALICE"
        description="Dix élus siégeant à l'Assemblée des Français de l'étranger. Chaque profil dispose d'une page individuelle. Les circonscriptions, responsabilités et biographies restent à compléter."
      >
        <DraftNotice>
          Liste classée par ordre alphabétique. Photos, circonscriptions et
          biographies seront ajoutées dès validation des informations. Aucun
          mandat inventé n&apos;est présenté ici.
        </DraftNotice>
      </PageHero>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {elus.map((elu) => (
            <EluCard key={elu.slug} elu={elu} />
          ))}
        </div>
      </Container>
    </>
  );
}
