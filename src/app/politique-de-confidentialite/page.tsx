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
              uniquement pour permettre aux élus du groupe {siteConfig.name} de
              répondre à votre demande, dans le cadre de leur mandat de
              conseiller des Français de l&apos;étranger.
            </p>
            <p>
              Vos coordonnées ne sont utilisées ni à des fins commerciales, ni
              pour constituer un fichier de sympathisants, ni pour l&apos;envoi
              de communications politiques non sollicitées.
            </p>
          </section>

          <section>
            <h2>Transmission</h2>
            <p>
              Le site ne constitue aucune base de données de contacts. Les
              messages sont transmis par courrier électronique aux représentants
              habilités du groupe, à{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              , par l&apos;intermédiaire du prestataire Resend. Le formulaire
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
