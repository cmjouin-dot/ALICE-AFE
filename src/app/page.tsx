import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { EluCard } from "@/components/EluCard";
import { Logo } from "@/components/Logo";
import { PrincipleCard } from "@/components/PrincipleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/actualites";
import { actions } from "@/data/actions";
import { elus } from "@/data/elus";
import { methodeIntro, principes } from "@/data/principes";
import {
  priorites,
  prioritesIntro,
  prioritesStatut,
} from "@/data/priorites";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const latestArticles = articles.slice(0, 3);
  const featuredElus = elus.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(65,110,172,0.07)_40%,rgba(0,151,112,0.05)_70%,rgba(25,52,81,0.08)_100%)] lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--alice-green)_0%,var(--alice-blue)_50%,var(--alice-coral)_100%)] opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-alice-border"
          aria-hidden
        />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <div className="animate-fade-up">
            <Logo size="hero" priority />
          </div>
          <p className="animate-fade-up animate-delay-1 mt-6 max-w-xl text-sm text-alice-muted sm:text-base">
            {siteConfig.fullName}
          </p>
          <p className="animate-fade-up animate-delay-1 mt-4 max-w-2xl text-base font-medium text-alice-navy sm:text-lg">
            {siteConfig.tagline}
          </p>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-8 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-alice-navy sm:text-5xl lg:text-6xl">
            Ensemble, au service des Français de l&apos;étranger.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-8 max-w-2xl text-lg text-alice-muted sm:text-xl">
            ALICE rassemble des élus de l&apos;Assemblée des Français de
            l&apos;étranger autour d&apos;une méthode de travail fondée sur le
            dialogue, la collégialité et la recherche de solutions concrètes.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-4">
            <Button href="/engagements">Découvrir nos engagements</Button>
            <Button href="/#nos-priorites" variant="secondary">
              Nos priorités
            </Button>
          </div>
        </Container>
      </section>

      {/* Notre méthode */}
      <section
        className="border-y border-alice-border bg-alice-gray py-20 sm:py-24"
        aria-labelledby="notre-methode"
      >
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="notre-methode"
              eyebrow="Notre méthode"
              title="Une autre manière de travailler ensemble"
              description={methodeIntro}
            />
            <Link
              href="/engagements"
              className="shrink-0 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Nos engagements
            </Link>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {principes.map((principe, i) => (
              <PrincipleCard key={principe.id} principe={principe} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Nos priorités */}
      <section
        id="nos-priorites"
        className="scroll-mt-24 py-20 sm:py-24"
        aria-labelledby="nos-priorites-title"
      >
        <Container>
          <SectionHeading
            id="nos-priorites-title"
            eyebrow="Nos priorités"
            title="Des priorités concrètes pour les Français de l'étranger"
            description={prioritesIntro}
          />
          <DraftNotice className="mt-8">{prioritesStatut}</DraftNotice>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {priorites.map((priorite, index) => (
              <article
                key={priorite.id}
                className="border-t border-alice-border pt-6"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-alice-green">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-2xl font-medium text-alice-navy">
                  {priorite.title}
                </h3>
                <p className="mt-3 text-alice-muted">{priorite.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Qui sommes-nous */}
      <section
        className="border-y border-alice-border bg-alice-gray py-20 sm:py-24"
        aria-labelledby="qui-sommes-nous"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                id="qui-sommes-nous"
                eyebrow="Qui sommes-nous"
                title="Un groupe d'élus au sein de l'Assemblée des Français de l'étranger"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-alice-muted">
                ALICE rassemble dix élus de l&apos;{siteConfig.afeName}. Ses
                membres apportent des expériences, des ancrages géographiques et
                des sensibilités politiques variés. Le groupe valorise le
                jugement indépendant de chacun et le travail collectif.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-alice-muted">
                Notre vocation est de contribuer utilement aux délibérations de
                l&apos;Assemblée et d&apos;agir concrètement pour les Français
                établis hors de France, dans un esprit de dialogue avec
                l&apos;ensemble des groupes.
              </p>
              <Link
                href="/qui-sommes-nous"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                En savoir plus
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
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
              title="Dix représentants au sein de l'AFE"
              description="Les dix élus du groupe. Circonscriptions, photographies et biographies seront précisées dès validation des informations."
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
      <section
        className="border-y border-alice-border bg-alice-gray py-20 sm:py-24"
        aria-labelledby="nos-actions"
      >
        <Container>
          <SectionHeading
            id="nos-actions"
            eyebrow="Nos travaux"
            title="Nos travaux et nos actions"
            description="Une structure claire pour présenter, lorsqu'ils seront disponibles, nos contributions, travaux en commission et résultats documentés."
          />
          <DraftNotice className="mt-8">
            Contenu en cours de constitution — aucune action ou résultat n&apos;est
            inventé ici.
          </DraftNotice>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {actions.slice(0, 3).map((action) => (
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
              Voir nos travaux
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
              title="Suivre les travaux du groupe"
              description="Communiqués et points d'actualité — exemples de démonstration en attendant les publications validées."
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
      <section
        className="border-t border-alice-border bg-alice-navy py-20 text-white sm:py-24"
        aria-labelledby="contact-teaser"
      >
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
              Une question sur nos travaux ou une demande d&apos;information ?
              Nous sommes à votre écoute.
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
