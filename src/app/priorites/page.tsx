import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos priorités",
  description:
    "Les priorités du groupe ALICE à l'Assemblée des Français de l'étranger seront publiées prochainement.",
};

export default function PrioritesPage() {
  return (
    <>
      <PageHero title="Nos priorités" />

      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-alice-muted">
            Cette rubrique sera prochainement enrichie avec les priorités et
            les sujets de travail portés par notre groupe au sein de
            l&apos;Assemblée des Français de l&apos;étranger.
          </p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-alice-muted">
            Contenu à venir
          </p>
        </div>
      </Container>
    </>
  );
}
