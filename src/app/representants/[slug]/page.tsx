import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { elus, getEluBySlug, informationNonVerifiee } from "@/data/elus";

export function generateStaticParams() {
  return elus.map((elu) => ({ slug: elu.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/representants/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const elu = getEluBySlug(slug);
  if (!elu) return { title: "Élu introuvable" };
  return {
    title: elu.displayName,
    description: `${elu.displayName}, élu du groupe ALICE à l'Assemblée des Français de l'étranger.`,
  };
}

function Fact({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="border-t border-alice-border py-5">
      <dt className="text-sm font-semibold text-alice-navy">{label}</dt>
      {values.length > 0 ? (
        <dd className="mt-2 text-alice-muted">
          <ul className="space-y-1">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </dd>
      ) : (
        <dd className="mt-2 text-alice-muted">{informationNonVerifiee}</dd>
      )}
    </div>
  );
}

export default async function RepresentantPage({
  params,
}: PageProps<"/representants/[slug]">) {
  const { slug } = await params;
  const elu = getEluBySlug(slug);
  if (!elu) notFound();

  return (
    <>
      <Container className="pt-10 sm:pt-12">
        <Link
          href="/representants"
          className="inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
        >
          <ArrowLeft size={16} aria-hidden />
          Retour aux représentants
        </Link>
      </Container>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            {elu.photo ? (
              <Image
                src={elu.photo}
                alt={`Portrait de ${elu.displayName}`}
                width={480}
                height={600}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <p className="text-sm text-alice-muted">Photographie non fournie.</p>
            )}
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alice-blue">
              Élu · ALICE
            </p>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl">
              {elu.displayName}
            </h1>
            <p className="mt-4 text-lg text-alice-muted">
              Membre du groupe à l&apos;Assemblée des Français de
              l&apos;étranger.
            </p>

            <dl className="mt-10">
              <Fact
                label="Circonscription"
                values={elu.circonscription ? [elu.circonscription] : []}
              />
              <Fact label="Commissions" values={elu.commissions} />
              <Fact label="Vice-présidences" values={elu.vicePresidences} />
              <Fact
                label="Responsabilités institutionnelles"
                values={elu.responsabilites}
              />
            </dl>

            <div className="mt-10">
              <Button href="/contact#porter-votre-voix">
                Porter une question à l&apos;AFE
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
