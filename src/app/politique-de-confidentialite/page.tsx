import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Traitement des informations envoyées via les formulaires du site ALICE.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Politique de confidentialité"
        description="Traitement des informations transmises via les formulaires du site."
      />

      <Container className="py-16 sm:py-20">
        <div className="prose-alice mx-auto max-w-3xl space-y-10">
          <section>
            <h2>Utilisation des informations</h2>
            <p>
              Les informations transmises via les formulaires sont utilisées
              exclusivement pour traiter votre demande et vous répondre. Elles
              sont accessibles aux seuls représentants habilités du groupe{" "}
              {siteConfig.name} et à ses prestataires techniques, dans la limite
              de leurs missions. Elles ne sont pas utilisées à des fins de
              prospection politique sans votre accord.
            </p>
          </section>

          <section>
            <h2>Transmission</h2>
            <p>
              Les messages envoyés depuis les formulaires de contact sont
              transmis par courriel à{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              , par l&apos;intermédiaire du prestataire Resend. Ils ne sont pas
              enregistrés dans une base de données du site. Le formulaire
              n&apos;accepte pas de pièce jointe.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Pour exercer vos droits sur les informations que vous avez
              transmises, écrivez à{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
