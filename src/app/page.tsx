import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { sections } from "@/data/site";

const latestPublication = {
  label: "Lire notre premier communiqué",
  href: "/documents/alice-communique-45e-session.pdf",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--alice-green)_0%,var(--alice-blue)_50%,var(--alice-coral)_100%)] opacity-80"
          aria-hidden
        />
        <Container className="relative pt-16 pb-0">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-16">
            <div>
              <h1 className="animate-fade-up font-display text-[2rem] font-medium leading-[1.2] tracking-tight text-alice-navy sm:text-[2.35rem] lg:text-[3rem] lg:leading-[1.2] lg:tracking-[-0.03em]">
                Des solutions concrètes pour les Français de l&apos;étranger
              </h1>
              <p className="animate-fade-up animate-delay-1 mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-alice-muted lg:text-[1.125rem]">
                Un groupe d&apos;élus à l&apos;Assemblée des Français de
                l&apos;étranger, engagé dans un travail collectif, constructif
                et transparent, au service des conseillers des Français de
                l&apos;étranger et des communautés qu&apos;ils représentent.
              </p>
              <a
                href={latestPublication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-up animate-delay-2 mt-8 inline-flex max-w-full items-center justify-center bg-alice-navy px-6 py-3 text-center text-[0.95rem] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-alice-blue"
              >
                {latestPublication.label}
              </a>
            </div>
            <Image
              src="/images/hero-afe-45e.jpg"
              alt="Photo des élus de l'Assemblée des Français de l'étranger lors de la 45e session, octobre 2026"
              width={1417}
              height={757}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="animate-fade-up animate-delay-2 aspect-[1417/757] h-auto w-full object-cover"
              style={{ objectPosition: "center 50%" }}
            />
          </div>

          <h2 className="sr-only">Sections du site</h2>
          <ul className="animate-fade-up animate-delay-3 mt-8 border-t border-alice-border sm:mt-10">
            {sections.map((section, index) => (
              <li key={section.href} className="border-b border-alice-border">
                <Link
                  href={section.href}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-x-3 py-4 transition-colors hover:bg-alice-gray sm:gap-x-5 sm:py-5"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-alice-green">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 md:grid md:grid-cols-[17.5rem_minmax(0,1fr)] md:items-baseline md:gap-8 lg:grid-cols-[22rem_minmax(0,1fr)]">
                    <span className="font-display block text-xl font-medium leading-snug text-alice-navy sm:text-2xl">
                      {section.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-alice-muted md:mt-0 md:text-base">
                      {section.description}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-alice-navy/70 transition-transform group-hover:translate-x-0.5 group-hover:text-alice-navy"
                    aria-hidden
                  />
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
              faire remonter une question, une difficulté ou une proposition à
              l&apos;Assemblée ? Les élus ALICE peuvent relayer vos
              préoccupations et contribuer à les porter dans les travaux de
              l&apos;AFE.
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
