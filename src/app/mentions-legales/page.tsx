import type { Metadata } from "next";
import Link from "next/link";
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
            <p>
              La forme juridique et l&apos;adresse postale de l&apos;éditeur ne
              sont pas publiées : elles restent à confirmer. Le responsable du
              traitement des données personnelles est désigné dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                politique de confidentialité
              </Link>
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
              Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
              Covina, CA 91723, États-Unis. Cette adresse est celle que Vercel
              publie pour les demandes relatives à la protection des données.
              Le contrat applicable à ce site, et les garanties qu&apos;il
              prévoit pour d&apos;éventuels transferts, restent à confirmer.
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
              Les formulaires collectent le nom, l&apos;adresse électronique,
              l&apos;objet et le message. La circonscription n&apos;est
              recueillie que si la personne la renseigne. Les messages sont
              transmis par courriel à {siteConfig.email}, par
              l&apos;intermédiaire de Resend. Le site ne les enregistre pas
              dans une base de données et n&apos;accepte pas de pièce jointe.
            </p>
            <p>
              Les messages reçus sont conservés pendant une durée maximale de
              12 mois après le dernier échange, sauf nécessité justifiée de
              suivi ou obligation légale de conservation. Ils peuvent demeurer
              dans la boîte du destinataire. Aucun dispositif du site ne les
              supprime automatiquement. Le détail figure dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
