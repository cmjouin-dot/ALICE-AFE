import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { methodeIntro, principes } from "@/data/principes";

export const metadata: Metadata = {
  title: "Nos engagements",
  description:
    "Les engagements d'ALICE au sein de l'Assemblée des Français de l'étranger : méthode de travail, collégialité, dialogue et responsabilité.",
};

export default function EngagementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos engagements"
        title="Nos engagements au sein de l'Assemblée"
        description="Six principes institutionnels guident notre manière de travailler au sein de l'Assemblée des Français de l'étranger. Ils décrivent une méthode collective, non un manifeste idéologique."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-alice-muted sm:text-xl">
            {methodeIntro}
          </p>

          <div className="mt-16 space-y-20">
            {principes.map((principe, index) => (
              <article
                key={principe.id}
                id={principe.id}
                className="scroll-mt-28"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-alice-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-alice-navy sm:text-4xl">
                  {principe.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-alice-muted">
                  {principe.summary}
                </p>
                <div className="prose-alice mt-8">
                  <p className="font-medium text-alice-navy">
                    Comment ce principe guide notre action&nbsp;:
                  </p>
                  {principe.applications.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-20 space-y-10 border-t border-alice-border pt-10">
            <section>
              <h2 className="font-display text-2xl font-medium text-alice-navy">
                Dans nos décisions internes
              </h2>
              <p className="mt-4 text-alice-muted">
                Les arbitrages du groupe privilégient la concertation, le partage
                des responsabilités et le respect du jugement indépendant de
                chaque élu. Aucune position n&apos;est présentée comme
                unanime lorsqu&apos;elle ne l&apos;est pas.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-medium text-alice-navy">
                Dans les commissions de l&apos;AFE
              </h2>
              <p className="mt-4 text-alice-muted">
                Nos élus y apportent des contributions préparées avec rigueur,
                orientées vers des solutions applicables, et ouvertes au débat
                avec les autres sensibilités représentées.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-medium text-alice-navy">
                Dans la coopération avec les autres groupes
              </h2>
              <p className="mt-4 text-alice-muted">
                Nous recherchons les convergences utiles dès lors qu&apos;elles
                servent l&apos;intérêt des Français de l&apos;étranger, sans
                logique d&apos;alignement systématique ni d&apos;opposition de
                principe.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-medium text-alice-navy">
                Sur la gouvernance de l&apos;Assemblée
              </h2>
              <p className="mt-4 text-alice-muted">
                Nous défendons un fonctionnement respectueux du pluralisme, de
                la représentation des sensibilités et de la place légitime des
                minorités dans les instances de l&apos;Assemblée.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-medium text-alice-navy">
                Dans notre communication
              </h2>
              <p className="mt-4 text-alice-muted">
                Nous nous engageons à rendre compte de nos travaux de manière
                claire et factuelle, en distinguant ce qui est validé pour
                publication de ce qui relève encore de discussions internes.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </>
  );
}
