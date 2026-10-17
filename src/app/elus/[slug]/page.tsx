import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, UserRound } from "lucide-react";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import { elus, getEluBySlug } from "@/data/elus";

export function generateStaticParams() {
  return elus.map((elu) => ({ slug: elu.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/elus/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const elu = getEluBySlug(slug);
  if (!elu) return { title: "Élu introuvable" };
  return {
    title: elu.displayName,
    description: `Profil de ${elu.displayName} — groupe ALICE à l'AFE.`,
  };
}

export default async function EluProfilePage({
  params,
}: PageProps<"/elus/[slug]">) {
  const { slug } = await params;
  const elu = getEluBySlug(slug);
  if (!elu) notFound();

  return (
    <>
      <Container className="pt-10 sm:pt-12">
        <Link
          href="/elus"
          className="inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
        >
          <ArrowLeft size={16} aria-hidden />
          Retour aux élus
        </Link>
      </Container>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div
              className="flex aspect-[4/5] items-center justify-center bg-alice-gray"
              aria-hidden
            >
              <div className="flex flex-col items-center gap-2 text-alice-muted">
                <UserRound size={48} strokeWidth={1.25} />
                <span className="text-xs tracking-wide">Photo à venir</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alice-coral">
              Élu · ALICE
            </p>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl">
              {elu.displayName}
            </h1>
            <p className="mt-4 text-lg text-alice-muted">{elu.circonscription}</p>

            <DraftNotice className="mt-8" />

            <section className="mt-10" aria-labelledby="responsabilites">
              <h2
                id="responsabilites"
                className="font-display text-2xl font-medium text-alice-navy"
              >
                Responsabilités
              </h2>
              <ul className="mt-4 space-y-2">
                {elu.responsabilites.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-alice-border pl-4 text-alice-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="prose-alice mt-10" aria-labelledby="biographie">
              <h2
                id="biographie"
                className="font-display text-2xl font-medium text-alice-navy"
              >
                Biographie
              </h2>
              {elu.biographie.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
