import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { elus } from "@/data/elus";
import { principes } from "@/data/principes";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Notre groupe",
  description: `${siteConfig.fullName}. Groupe d'élus au sein de l'Assemblée des Français de l'étranger.`,
};

export default function NotreGroupePage() {
  return (
    <>
      <PageHero
        title="Notre groupe"
        description={siteConfig.fullName}
      />

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-lg leading-relaxed text-alice-muted">
            <p>
              ALICE rassemble des élus siégeant à l&apos;{siteConfig.afeName}.
              Le groupe est un cadre de travail pour contribuer aux délibérations
              de l&apos;Assemblée.
            </p>
            <p>
              Ses membres ont des expériences, des ancrages géographiques et des
              sensibilités politiques différents. Cette diversité nourrit le
              travail collectif, sans exiger que chacun partage la même position
              sur tous les sujets.
            </p>
            <p>
              Au sein de l&apos;Assemblée, notre façon de travailler repose sur
              les principes suivants. Ils décrivent une méthode, et non un
              manifeste.
            </p>
          </div>

          <section className="mt-12" aria-labelledby="membres-du-groupe">
            <h2
              id="membres-du-groupe"
              className="font-display text-3xl font-medium tracking-tight text-alice-navy"
            >
              Les membres
            </h2>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {elus.map((elu) => (
                <li key={elu.slug} className="border-t border-alice-border">
                  <Link
                    href={`/representants/${elu.slug}`}
                    className="block py-3 font-medium text-alice-navy underline-offset-4 hover:text-alice-blue hover:underline"
                  >
                    {elu.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <h2 className="font-display mt-14 text-3xl font-medium tracking-tight text-alice-navy">
            Principes d&apos;action
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2">
            {principes.map((principe, index) => (
              <li
                key={principe.id}
                id={principe.id}
                className="scroll-mt-28 border-t border-alice-border pt-5"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-alice-green">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-3 text-2xl font-medium leading-snug text-alice-navy">
                  {principe.title}
                </h2>
                <p className="mt-3 text-alice-muted">{principe.summary}</p>
              </li>
            ))}
          </ol>

          <p className="mt-14 border-t border-alice-border pt-8 text-alice-muted">
            Les élus du groupe sont présentés dans{" "}
            <Link
              href="/representants"
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Nos représentants à l&apos;AFE
            </Link>
            . Une question se prépare dans{" "}
            <Link
              href="/contact#porter-votre-voix"
              className="font-semibold text-alice-blue underline-offset-4 hover:underline"
            >
              Porter votre voix à l&apos;AFE
            </Link>
            . L&apos;envoi n&apos;est pas encore activé.
          </p>
        </div>
      </Container>
    </>
  );
}
