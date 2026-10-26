import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Mentions légales"
        description="Informations relatives à l'éditeur du site et à son statut."
      />

      <Container className="py-16 sm:py-20">
        <div className="prose-alice mx-auto max-w-3xl space-y-10">
          <section>
            <h2>Éditeur</h2>
            <p>
              Le présent site est édité par le groupe d&apos;élus{" "}
              {siteConfig.name} ({siteConfig.fullName}), regroupement d&apos;élus
              siégeant à l&apos;{siteConfig.afeName}.
            </p>
            <p>
              Contact :{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Statut du site</h2>
            <p>
              Ce site présente le groupe {siteConfig.name}. Il ne constitue pas
              un site officiel du gouvernement français, ni le site institutionnel
              de l&apos;Assemblée des Français de l&apos;étranger.
            </p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              [À compléter] Préciser ici l&apos;hébergeur (par exemple Vercel)
              lors du déploiement en production.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              Les contenus publiés sur ce site sont protégés. Toute reproduction
              non autorisée est interdite, sauf usage privé ou citation courte
              avec mention de la source.
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>
            <p>
              Les formulaires de contact sont affichés mais inactifs. Ils ne
              transmettent aucun message et ne collectent aucune donnée. Lorsque
              l&apos;envoi sera branché, cette page précisera les données
              conservées et leur destinataire.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
