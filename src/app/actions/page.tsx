import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { PageHero } from "@/components/PageHero";
import { actions, actionsIntro } from "@/data/actions";

export const metadata: Metadata = {
  title: "Nos actions",
  description:
    "Travaux, contributions et actions du groupe ALICE au sein de l'Assemblée des Français de l'étranger.",
};

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos travaux"
        title="Nos travaux et nos actions"
        description={actionsIntro}
      >
        <DraftNotice>
          Structure éditoriale en place. Aucune proposition, vote, résultat ou
          prise de position n&apos;est inventé sur cette page.
        </DraftNotice>
      </PageHero>

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-16">
          {actions.map((action, index) => (
            <article
              key={action.id}
              id={action.id}
              className="scroll-mt-28 border-t border-alice-border pt-12 first:border-0 first:pt-0"
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-alice-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-alice-blue">
                  {action.category}
                </span>
              </div>
              <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-alice-navy sm:text-4xl">
                {action.title}
              </h2>
              <p className="mt-4 text-xl text-alice-muted">{action.summary}</p>
              <div className="prose-alice mt-8">
                {action.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="mx-auto mt-20 max-w-3xl border-t border-alice-border pt-10">
          <h2 className="font-display text-2xl font-medium text-alice-navy">
            Actualités associées
          </h2>
          <p className="mt-4 text-alice-muted">
            Les publications validées du groupe seront également accessibles
            dans la rubrique{" "}
            <Link
              href="/actualites"
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Actualités
            </Link>
            .
          </p>
        </aside>
      </Container>
    </>
  );
}
