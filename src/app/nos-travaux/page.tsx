import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos travaux",
  description:
    "Rapports, propositions, comptes rendus et interventions du groupe ALICE à l'Assemblée des Français de l'étranger.",
};

const categories = [
  {
    title: "Rapports et propositions",
    description:
      "Les rapports auxquels nos membres contribuent, ainsi que les propositions et recommandations que nous portons au sein de l'Assemblée.",
  },
  {
    title: "Comptes rendus des sessions",
    description:
      "Les synthèses des travaux de l'Assemblée, les principales décisions et les avancées obtenues au cours des différentes sessions.",
  },
  {
    title: "Questions et interventions",
    description:
      "Les questions et interventions portées par notre groupe, notamment à l'initiative des conseillers des Français de l'étranger, ainsi que les réponses obtenues.",
  },
] as const;

export default function NosTravauxPage() {
  return (
    <>
      <PageHero title="Nos travaux" />

      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-alice-muted">
          <p>
            Retrouvez les rapports, propositions, comptes rendus et
            interventions des membres du groupe ALICE à l&apos;Assemblée des
            Français de l&apos;étranger.
          </p>
          <p>
            Cette rubrique a vocation à partager nos travaux avec l&apos;ensemble
            des conseillers des Français de l&apos;étranger, dans un esprit de
            transparence et de dialogue.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.title} className="h-full">
              <article className="flex h-full flex-col border border-alice-border p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-alice-muted">
                  Prochainement
                </p>
                <h2 className="font-display mt-4 text-2xl font-medium leading-snug text-alice-navy">
                  {category.title}
                </h2>
                <p className="mt-3 leading-relaxed text-alice-muted">
                  {category.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
