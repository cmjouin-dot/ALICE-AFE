import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos travaux",
  description:
    "Rapports, propositions, comptes rendus et interventions du groupe ALICE à l'Assemblée des Français de l'étranger.",
};

const documentHref = "/documents/alice-communique-45e-session.pdf";

const sessionDocument = {
  title: "Bilan de la 45e session de l'AFE",
  type: "Communiqué du groupe ALICE",
  date: "Octobre 2026",
  description:
    "Retour sur la 45e session de l'Assemblée des Français de l'étranger, tenue à Paris du 12 au 16 octobre 2026 : constitution du groupe ALICE, installation des instances, positions du groupe et principales annonces concernant les Français de l'étranger.",
  href: documentHref,
};

const placeholders = [
  {
    title: "Rapports et propositions",
    description:
      "Les rapports auxquels nos membres contribuent, ainsi que les propositions et recommandations que nous portons au sein de l'Assemblée.",
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

        <div className="mt-12 space-y-6">
          <article className="border border-alice-border p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-alice-muted">
              Prochainement
            </p>
            <h2 className="font-display mt-4 text-2xl font-medium leading-snug text-alice-navy">
              {placeholders[0].title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-alice-muted">
              {placeholders[0].description}
            </p>
          </article>

          <article className="border border-alice-border p-6 sm:p-7">
            <h2 className="font-display text-2xl font-medium leading-snug text-alice-navy">
              Comptes rendus des sessions
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-alice-muted">
              Les synthèses des travaux de l&apos;Assemblée, les principales
              décisions et les avancées obtenues au cours des différentes
              sessions.
            </p>

            <div className="mt-8 border-t border-alice-border pt-6 sm:flex sm:gap-6">
              <FileText
                size={28}
                strokeWidth={1.5}
                className="shrink-0 text-alice-navy"
                aria-hidden
              />
              <div className="mt-4 min-w-0 flex-1 sm:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-alice-muted">
                  {sessionDocument.type}
                </p>
                <h3 className="font-display mt-2 text-2xl font-medium leading-snug text-alice-navy">
                  {sessionDocument.title}
                </h3>
                <p className="mt-2 text-sm text-alice-muted">
                  {sessionDocument.date}
                </p>
                <p className="mt-3 max-w-3xl leading-relaxed text-alice-muted">
                  {sessionDocument.description}
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={sessionDocument.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-alice-navy px-6 py-3 text-[0.95rem] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-alice-blue"
                  >
                    Consulter le document
                  </a>
                  <a
                    href={sessionDocument.href}
                    download
                    className="text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
                  >
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="border border-alice-border p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-alice-muted">
              Prochainement
            </p>
            <h2 className="font-display mt-4 text-2xl font-medium leading-snug text-alice-navy">
              {placeholders[1].title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-alice-muted">
              {placeholders[1].description}
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}
