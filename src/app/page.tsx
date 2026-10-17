import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ConvictionPillar } from "@/components/ConvictionPillar";
import { DraftNotice } from "@/components/DraftNotice";
import { EluCard } from "@/components/EluCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/actualites";
import { actions } from "@/data/actions";
import { convictions } from "@/data/convictions";
import { elus } from "@/data/elus";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const latestArticles = articles.slice(0, 3);
  const featuredElus = elus.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-alice-gray">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(77,115,165,0.08)_45%,rgba(25,52,81,0.12)_100%)] lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-alice-border"
          aria-hidden
        />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-alice-blue">
            {siteConfig.name}
          </p>
          <p className="animate-fade-up animate-delay-1 mt-3 max-w-xl text-sm text-alice-muted sm:text-base">
            {siteConfig.fullName}
          </p>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-8 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-alice-navy sm:text-5xl lg:text-6xl">
            Des convictions communes.
            <br />
            Des voix libres.
            <br />
            Une ambition collective.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-8 max-w-2xl text-lg text-alice-muted sm:text-xl">
            ALICE rassemble des élus centristes, indépendants et progressistes,
            unis par la volonté de défendre les Français de l&apos;étranger dans
            un esprit de dialogue, de responsabilité et de liberté.
          </p>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-2xl text-base font-medium text-alice-navy sm:text-lg">
            Notre engagement&nbsp;: une représentation équitable, une action
            constructive et une indépendance politique sans compromis sur nos
            valeurs.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-4">
            <Button href="/convictions">Découvrir ALICE</Button>
            <Button href="/actions" variant="secondary">
              Nos actions
            </Button>
          </div>
        </Container>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-20 sm:py-24" aria-labelledby="qui-sommes-nous">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                id="qui-sommes-nous"
                eyebrow="Qui sommes-nous"
                title="Un groupe d'élus à l'Assemblée des Français de l'étranger"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-alice-muted">
                ALICE rassemble dix élus de l&apos;
                {siteConfig.afeName}, réunis autour d&apos;une sensibilité
                centriste, libérale et progressiste. Nous agissons pour les
                Français établis hors de France avec indépendance, sens du
                collectif et rejet clair des extrêmes.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-alice-muted">
                Notre méthode repose sur le dialogue, la transparence et la
                concertation. Nous recherchons la coopération utile au sein de
                l&apos;institution, sans renoncer à notre identité politique ni
                à la liberté de jugement de chacun.
              </p>
              <Link
                href="/elus"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                Rencontrer nos élus
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Convictions */}
      <section className="border-y border-alice-border bg-alice-gray py-20 sm:py-24" aria-labelledby="nos-convictions">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="nos-convictions"
              eyebrow="Nos convictions"
              title="Cinq principes pour une représentation exigeante"
              description="Indépendance, centre progressiste, gouvernance collective, équité et dialogue au service de l'action."
            />
            <Link
              href="/convictions"
              className="shrink-0 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Lire nos convictions
            </Link>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {convictions.map((c, i) => (
              <ConvictionPillar key={c.id} conviction={c} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Élus */}
      <section className="py-20 sm:py-24" aria-labelledby="nos-elus">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="nos-elus"
              eyebrow="Nos élus"
              title="Dix représentants engagés"
              description="Les dix élus du groupe. Circonscriptions, photographies et biographies seront précisées prochainement."
            />
            <Link
              href="/elus"
              className="shrink-0 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Voir tous les élus
            </Link>
          </div>
          <DraftNotice className="mt-8" />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredElus.map((elu) => (
              <EluCard key={elu.slug} elu={elu} />
            ))}
          </div>
        </Container>
      </section>

      {/* Actions */}
      <section className="border-y border-alice-border bg-alice-gray py-20 sm:py-24" aria-labelledby="nos-actions">
        <Container>
          <SectionHeading
            id="nos-actions"
            eyebrow="Nos actions"
            title="Un travail institutionnel au service des Français de l'étranger"
            description="Commissions, initiatives et représentation : une présentation sobre de notre méthode de travail."
          />
          <DraftNotice className="mt-8">
            Contenu brouillon — aucune réalisation inventée n&apos;est présentée
            ici.
          </DraftNotice>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {actions.map((action) => (
              <article
                key={action.id}
                className="border-t border-alice-border pt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-alice-blue">
                  {action.category}
                </p>
                <h3 className="font-display mt-3 text-2xl font-medium text-alice-navy">
                  {action.title}
                </h3>
                <p className="mt-3 text-alice-muted">{action.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/actions" variant="secondary">
              Découvrir nos actions
            </Button>
          </div>
        </Container>
      </section>

      {/* Actualités */}
      <section className="py-20 sm:py-24" aria-labelledby="actualites">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="actualites"
              eyebrow="Actualités"
              title="Dernières publications"
              description="Articles, déclarations et points d'actualité — exemples de démonstration pour l'instant."
            />
            <Link
              href="/actualites"
              className="shrink-0 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Toutes les actualités
            </Link>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact teaser */}
      <section className="border-t border-alice-border bg-alice-navy py-20 text-white sm:py-24" aria-labelledby="contact-teaser">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alice-coral">
              Contact
            </p>
            <h2
              id="contact-teaser"
              className="font-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Écrire au groupe ALICE
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Une question, une remarque, une demande d&apos;information ? Nous
              serons heureux d&apos;échanger avec vous.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-[0.95rem] font-semibold text-alice-navy transition-colors hover:bg-alice-gray"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
