import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import {
  priorites,
  prioritesIntro,
  prioritesStatut,
  statutLabel,
} from "@/data/priorites";

export const metadata: Metadata = {
  title: "Nos priorités",
  description:
    "Axes de travail du groupe ALICE au sein de l'Assemblée des Français de l'étranger.",
};

export default function PrioritesPage() {
  return (
    <>
      <PageHero
        title="Nos priorités"
        description={prioritesIntro}
      />

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="border-l-2 border-alice-coral pl-4 text-sm text-alice-muted">
            {prioritesStatut}
          </p>

          <ol className="mt-12 space-y-10">
            {priorites.map((priorite, index) => (
              <li
                key={priorite.id}
                id={priorite.id}
                className="scroll-mt-28 border-t border-alice-border pt-8"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-alice-green">
                  {String(index + 1).padStart(2, "0")}
                  <span className="ml-3 tracking-[0.14em] text-alice-coral">
                    {statutLabel[priorite.statut]}
                  </span>
                </p>
                <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-alice-navy">
                  {priorite.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-alice-muted">
                  {priorite.summary}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-alice-border pt-8">
            <p className="text-alice-muted">
              Les contributions, travaux en commission et positions validées par
              le groupe seront publiés lorsqu&apos;ils seront disponibles.
            </p>
            <div className="mt-6">
              <Button href="/contact#porter-votre-voix">
                Soumettre une question
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
