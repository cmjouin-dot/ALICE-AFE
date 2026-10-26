import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { EluCard } from "@/components/EluCard";
import { PageHero } from "@/components/PageHero";
import { elus } from "@/data/elus";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Nos représentants à l'AFE",
  description: `Élus du groupe ${siteConfig.name} siégeant à l'Assemblée des Français de l'étranger.`,
};

const etapes = [
  {
    title: "Identifier un élu",
    text: "La liste ci-dessous présente les membres du groupe, par ordre alphabétique.",
  },
  {
    title: "Consulter son profil",
    text: "Chaque page rassemble les informations de mandat déjà confirmées.",
  },
  {
    title: "Transmettre une question",
    text: "La section « Porter votre voix à l'AFE » accueillera la question. L'envoi n'est pas encore activé.",
  },
];

export default function RepresentantsPage() {
  return (
    <>
      <PageHero
        title="Nos représentants à l'AFE"
        description="Les élus du groupe ALICE siégeant à l'Assemblée des Français de l'étranger."
      />

      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-lg leading-relaxed text-alice-muted">
            <p>
              Les membres d&apos;ALICE sont des élus de l&apos;
              {siteConfig.afeName}. Ils peuvent être sollicités par les
              conseillers des Français de l&apos;étranger qui souhaitent
              comprendre le travail du groupe ou faire remonter une question.
            </p>
            <p>
              Un conseiller peut s&apos;adresser à un élu, ou au groupe dans son
              ensemble. Les élus peuvent contribuer à relayer une difficulté ou
              une proposition dans le cadre des travaux de l&apos;Assemblée.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {etapes.map((etape, index) => (
              <li key={etape.title} className="border-t border-alice-border pt-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-alice-green">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display mt-3 text-xl font-medium text-alice-navy">
                  {etape.title}
                </h2>
                <p className="mt-2 text-sm text-alice-muted">{etape.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-12 max-w-3xl border-l-2 border-alice-border pl-4 text-sm text-alice-muted">
          Seuls les noms sont vérifiés. Les circonscriptions, commissions,
          vice-présidences et responsabilités institutionnelles seront
          publiées lorsqu&apos;elles seront confirmées. Aucune information
          manquante n&apos;est complétée.
        </p>

        <ul className="mx-auto mt-8 grid max-w-5xl gap-x-12 sm:grid-cols-2">
          {elus.map((elu) => (
            <li key={elu.slug}>
              <EluCard elu={elu} />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-alice-muted">
          Pour écrire au groupe sans choisir un élu, utilisez le{" "}
          <Link
            href="/contact#porter-votre-voix"
            className="font-semibold text-alice-blue underline-offset-4 hover:underline"
          >
            formulaire de contact
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
