import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { principes } from "@/data/principes";

const groupName =
  "Alliance des Libéraux, Indépendants et Centristes de l'Étranger";

export const metadata: Metadata = {
  title: "Notre groupe",
  description: `${groupName}. Groupe d'élus au sein de l'Assemblée des Français de l'étranger.`,
};

export default function NotreGroupePage() {
  return (
    <>
      <PageHero title="Notre groupe" description={groupName} />

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-lg leading-relaxed text-alice-muted">
            <p>
              ALICE – Alliance des Libéraux, Indépendants et Centristes de
              l&apos;Étranger rassemble des élus issus de diverses sensibilités
              du centre et de la droite républicaine, unis par leur volonté de
              servir les Français de l&apos;étranger.
            </p>
            <p>
              Fidèles aux valeurs républicaines, libérales, humanistes et
              européennes, nous défendons une politique de responsabilité, de
              solidarité et de progrès.
            </p>
            <p>
              Notre démarche repose sur l&apos;écoute du terrain, le dialogue
              avec les conseillers des Français de l&apos;étranger et la
              recherche de solutions concrètes, loin des logiques d&apos;appareil
              et des clivages partisans.
            </p>
            <p>
              Au sein de l&apos;Assemblée des Français de l&apos;étranger, nous
              entendons travailler avec toutes celles et tous ceux qui
              souhaitent faire avancer les dossiers, dans un esprit constructif,
              indépendant et respectueux de la diversité des opinions.
            </p>
            <p className="text-alice-navy">
              Notre ambition est simple : privilégier le travail collectif, la
              constance et les résultats au service des Français de
              l&apos;étranger.
            </p>
          </div>

          <h2 className="font-display mt-12 text-3xl font-medium tracking-tight text-alice-navy">
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
