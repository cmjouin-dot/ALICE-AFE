import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { convictions } from "@/data/convictions";

export const metadata: Metadata = {
  title: "Nos convictions",
  description:
    "Les principes qui guident ALICE : indépendance, centre progressiste, gouvernance collective, représentation équitable et dialogue au service de l'action.",
};

export default function ConvictionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos convictions"
        title="Des principes durables pour une représentation libre"
        description="Cinq orientations structurent l'identité politique d'ALICE. Elles expriment ce que nous sommes et la manière dont nous entendons travailler au sein de l'Assemblée des Français de l'étranger."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-20">
          {convictions.map((conviction, index) => (
            <article
              key={conviction.id}
              id={conviction.id}
              className="scroll-mt-28"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-alice-coral">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-alice-navy sm:text-4xl">
                {conviction.title}
              </h2>
              <div className="prose-alice mt-8">
                {conviction.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="mx-auto mt-20 max-w-3xl border-t border-alice-border pt-10">
          <h2 className="font-display text-2xl font-medium text-alice-navy">
            Une méthode collective
          </h2>
          <p className="mt-4 max-w-2xl text-alice-muted">
            Ces principes guident notre action. Ils ne préjugent pas des
            décisions concrètes à venir au sein de l&apos;AFE : chaque
            proposition sera examinée sur son mérite, dans le respect du
            pluralisme et de la liberté de jugement de nos élus.
          </p>
        </aside>
      </Container>
    </>
  );
}
