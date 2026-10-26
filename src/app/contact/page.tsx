import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PreparedForm } from "@/components/PreparedForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Contacter le groupe ALICE ou préparer une question à porter à l'Assemblée des Français de l'étranger.",
};

const activation =
  "Pour activer l'envoi, il faut l'adresse officielle qui recevra les messages, un service d'envoi côté serveur (messagerie transactionnelle ou SMTP), et une action serveur Next.js qui valide les champs puis transmet le message. Les mentions légales devront alors préciser la conservation des données. Tant que ce branchement n'est pas en place, les champs restent inactifs et aucun message n'est envoyé.";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contactez-nous" />

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-16">
          <p className="border-l-2 border-alice-coral pl-4 text-sm leading-relaxed text-alice-muted">
            {activation}
          </p>

          <section aria-labelledby="contact-general-titre">
            <h2
              id="contact-general-titre"
              className="font-display text-3xl font-medium tracking-tight text-alice-navy"
            >
              Contact général
            </h2>
            <p className="mt-4 text-alice-muted">
              Pour une demande d&apos;information sur le groupe, ses élus ou ses
              travaux à l&apos;{siteConfig.afeName}.
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-8">
              <PreparedForm
                id="contact-general"
                fields={[
                  { id: "nom", label: "Nom" },
                  { id: "courriel", label: "Courriel", type: "email" },
                  { id: "objet", label: "Objet" },
                  { id: "message", label: "Message", type: "textarea" },
                ]}
              />
            </div>
          </section>

          <section aria-labelledby="porter-votre-voix-titre">
            <h2
              id="porter-votre-voix-titre"
              className="font-display text-3xl font-medium tracking-tight text-alice-navy"
            >
              Porter votre voix à l&apos;AFE
            </h2>
            <div className="mt-4 space-y-4 text-alice-muted">
              <p>
                Vous êtes conseiller des Français de l&apos;étranger. Vous
                pouvez préparer ici une question, une difficulté ou une
                proposition que les élus d&apos;ALICE pourraient relayer dans
                les travaux de l&apos;Assemblée.
              </p>
              <p className="border-l-2 border-alice-border pl-4 text-sm">
                Le dépôt d&apos;une question ne garantit pas qu&apos;elle sera
                formellement présentée, ni qu&apos;elle sera inscrite à
                l&apos;ordre du jour de l&apos;Assemblée des Français de
                l&apos;étranger.
              </p>
            </div>
            <div id="porter-votre-voix" className="mt-8 scroll-mt-28">
              <PreparedForm
                id="question-afe"
                fields={[
                  { id: "nom", label: "Nom du conseiller" },
                  { id: "courriel", label: "Courriel", type: "email" },
                  { id: "circonscription", label: "Circonscription" },
                  { id: "objet", label: "Objet" },
                  { id: "question", label: "Question", type: "textarea" },
                ]}
              />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
