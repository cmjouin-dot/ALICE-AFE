import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter le groupe ${siteConfig.name} à l'Assemblée des Français de l'étranger.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Écrire au groupe ALICE"
        description="Pour toute question relative au groupe, à ses élus ou à ses travaux à l'Assemblée des Français de l'étranger."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <DraftNotice>
            Adresse e-mail provisoire. Remplacez-la par l&apos;adresse
            officielle du groupe lorsqu&apos;elle sera disponible. Aucun
            formulaire d&apos;envoi n&apos;est implémenté à ce stade.
          </DraftNotice>

          <div className="mt-12 border-t border-alice-border pt-10">
            <h2 className="font-display text-2xl font-medium text-alice-navy">
              Courriel
            </h2>
            <p className="mt-4 text-alice-muted">
              Vous pouvez nous joindre à l&apos;adresse suivante :
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              <Mail size={22} strokeWidth={1.75} aria-hidden />
              {siteConfig.email}
            </a>
          </div>

          <div className="mt-14 border-t border-alice-border pt-10">
            <h2 className="font-display text-2xl font-medium text-alice-navy">
              Cadre
            </h2>
            <p className="mt-4 text-alice-muted">
              {siteConfig.name} est un groupe politique indépendant au sein de
              l&apos;{siteConfig.afeName}. Ce site n&apos;est pas un site
              officiel du gouvernement français.
            </p>
          </div>

          <div className="mt-14 border-t border-alice-border pt-10">
            <h2 className="font-display text-2xl font-medium text-alice-navy">
              Accessibilité de la prise de contact
            </h2>
            <p className="mt-4 text-alice-muted">
              Le contact se fait par e-mail afin de rester simple et accessible.
              Si vous avez besoin d&apos;un autre format d&apos;échange,
              indiquez-le dans votre message.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
