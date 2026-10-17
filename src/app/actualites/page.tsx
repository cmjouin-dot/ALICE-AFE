import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/data/actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Communiqués, déclarations et points d'actualité du groupe ALICE.",
};

export default function ActualitesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Suivre les travaux et prises de position d'ALICE"
        description="Une rubrique éditoriale sobre pour les communiqués, déclarations et mises à jour du groupe."
      >
        <DraftNotice>
          Les articles ci-dessous sont du contenu de démonstration,
          explicitement marqué comme tel.
        </DraftNotice>
      </PageHero>

      <Container className="py-16 sm:py-20">
        {featured ? (
          <div className="mb-16">
            <ArticleCard article={featured} featured />
          </div>
        ) : null}

        <div className="grid gap-12 lg:grid-cols-2">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}
