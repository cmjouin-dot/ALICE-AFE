import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "ALICE est un groupe d'élus au sein de l'Assemblée des Français de l'étranger, réunis autour d'une méthode de travail collective et constructive.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Un groupe d'élus au service des Français de l'étranger"
        description="ALICE est un groupe d'élus au sein de l'Assemblée des Français de l'étranger. Nous y travaillons de manière collégiale, dans le respect du pluralisme et la recherche de solutions concrètes."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-display text-3xl font-medium tracking-tight text-alice-navy">
              Notre place dans l&apos;Assemblée
            </h2>
            <div className="prose-alice mt-6">
              <p className="text-lg leading-relaxed">
                {siteConfig.name} ({siteConfig.fullName}) regroupe des élus
                siégeant à l&apos;{siteConfig.afeName}. Le groupe n&apos;est
                pas un parti politique ni un mouvement électoral&nbsp;: il
                constitue un cadre de travail institutionnel pour contribuer
                aux travaux de l&apos;Assemblée.
              </p>
              <p className="text-lg leading-relaxed">
                Notre objectif est d&apos;agir utilement pour les Français
                établis hors de France&nbsp;: faire remonter leurs réalités,
                participer aux délibérations et formuler des propositions
                concrètes, dans un esprit de responsabilité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium tracking-tight text-alice-navy">
              Une diversité d&apos;expériences et de sensibilités
            </h2>
            <div className="prose-alice mt-6">
              <p className="text-lg leading-relaxed">
                Les membres d&apos;ALICE apportent des parcours, des ancrages
                géographiques et des sensibilités politiques différents. Cette
                diversité est une richesse&nbsp;: elle nourrit le débat interne
                et élargit la compréhension des situations vécues par nos
                compatriotes à travers le monde.
              </p>
              <p className="text-lg leading-relaxed">
                Le groupe ne prétend pas que tous ses élus partagent des
                positions identiques sur chaque sujet. Il privilégie le jugement
                indépendant de chacun, tout en recherchant des positions
                collectives lorsque cela est utile et possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-medium tracking-tight text-alice-navy">
              Une méthode avant une idéologie
            </h2>
            <div className="prose-alice mt-6">
              <p className="text-lg leading-relaxed">
                Ce qui nous rassemble, c&apos;est d&apos;abord une manière de
                travailler&nbsp;: dialogue, collégialité, professionnalisme et
                transparence. Nous recherchons la coopération avec l&apos;ensemble
                des groupes de l&apos;Assemblée lorsque cela sert l&apos;intérêt
                des Français de l&apos;étranger, sans renoncer à notre
                indépendance.
              </p>
              <p className="text-lg leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>
          </section>

          <aside className="border-t border-alice-border pt-10">
            <h2 className="font-display text-2xl font-medium text-alice-navy">
              Rencontrer nos élus
            </h2>
            <p className="mt-4 max-w-2xl text-alice-muted">
              Découvrez les profils des élus du groupe. Les informations
              individuelles — circonscriptions, responsabilités et biographies —
              sont complétées au fur et à mesure de leur validation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/elus">Voir nos élus</Button>
              <Link
                href="/engagements"
                className="inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
              >
                Nos engagements
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
