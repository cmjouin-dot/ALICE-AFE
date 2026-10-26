import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { elus, getEluBySlug } from "@/data/elus";

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

function Fact({
  label,
  values,
  valueClassName = "text-alice-muted",
}: {
  label: string;
  values: string[];
  valueClassName?: string;
}) {
  if (values.length === 0) return null;
  return (
    <div className="border-t border-alice-border py-5">
      <dt className="text-sm font-semibold text-alice-navy">{label}</dt>
      <dd className={`mt-2 ${valueClassName}`}>
        <ul className="space-y-1">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </dd>
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-alice-gray">
              <Image
                src={elu.photo}
                alt={`Portrait de ${elu.displayName}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
                style={{ objectPosition: elu.photoPosition }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alice-blue">
              Élu · ALICE
            </p>
            <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl">
              {elu.displayName}
            </h1>

            <dl className="mt-10">
              <Fact
                label="Responsabilité au sein du groupe ALICE"
                values={elu.roleAlice ? [elu.roleAlice] : []}
                valueClassName={
                  elu.roleAlice === "Représentante ALICE au dispositif STAFE"
                    ? "text-black"
                    : "text-alice-muted"
                }
              />
              <Fact
                label="Fonctions et mandats au sein de l'AFE"
                values={elu.fonctionsAfe}
              />
              <Fact label="Commission" values={elu.commissions} />
              <Fact
                label="Circonscription"
                values={[elu.circonscription ?? "À confirmer"]}
              />
            </dl>

            {elu.email ? (
              <p className="mt-6">
                <a
                  href={`mailto:${elu.email}`}
                  className="font-semibold text-alice-blue underline-offset-4 hover:underline"
                >
                  {elu.email}
                </a>
              </p>
            ) : null}

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
