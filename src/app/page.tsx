import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { sections } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--alice-green)_0%,var(--alice-blue)_50%,var(--alice-coral)_100%)] opacity-80"
          aria-hidden
        />
        <Container className="relative py-10 sm:py-14 lg:py-16">
          <div className="animate-fade-up">
            <Logo size="hero" priority />
          </div>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-8 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-alice-navy sm:text-5xl lg:text-[3.25rem]">
            ALICE — Ensemble, au service des Français de l&apos;étranger
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-2xl text-lg text-alice-muted sm:text-xl">
            Un groupe d&apos;élus à l&apos;Assemblée des Français de
            l&apos;étranger, engagé dans un travail collectif, constructif et
            transparent, au service des conseillers des Français de
            l&apos;étranger et des communautés qu&apos;ils représentent.
          </p>

          <h2 className="sr-only">Sections du site</h2>
          <ul className="animate-fade-up animate-delay-3 mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sections.map((section, index) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className="group flex h-full flex-col border border-alice-border bg-white p-6 transition-colors hover:border-alice-blue"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-alice-green">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-4 text-2xl font-medium leading-snug text-alice-navy transition-colors group-hover:text-alice-blue">
                    {section.label}
                  </h3>
                  <p className="mt-3 flex-1 text-alice-muted">
                    {section.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-alice-blue">
                    Consulter
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="border-t border-alice-border bg-alice-navy py-12 text-white sm:py-16"
        aria-labelledby="question-afe"
      >
        <Container>
          <div className="max-w-2xl">
            <h2
              id="question-afe"
              className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Une question à porter à l&apos;AFE ?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Vous êtes conseiller des Français de l&apos;étranger et souhaitez
              faire remonter une question, une difficulté ou une proposition ?
              Les élus du groupe ALICE peuvent contribuer à relayer vos
              préoccupations dans le cadre des travaux de l&apos;Assemblée.
            </p>
            <div className="mt-6">
              <Link
                href="/contact#porter-votre-voix"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-[0.95rem] font-semibold tracking-wide text-alice-navy transition-colors duration-200 hover:bg-alice-gray"
              >
                Soumettre une question
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
