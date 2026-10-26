import type { Metadata } from "next";
import {
  Briefcase,
  GraduationCap,
  Landmark,
  Leaf,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nos priorités",
  description:
    "Services consulaires, éducation, protection sociale, emploi et transition écologique : les priorités du groupe ALICE.",
};

const priorites: { title: string; icon: LucideIcon; points: string[] }[] = [
  {
    title: "Services consulaires",
    icon: Landmark,
    points: [
      "Simplifier et moderniser les démarches administratives.",
      "Améliorer l'accessibilité et la qualité des services consulaires.",
      "Développer des solutions numériques centrées sur les usagers.",
    ],
  },
  {
    title: "Éducation et jeunesse",
    icon: GraduationCap,
    points: [
      "Défendre l'enseignement français à l'étranger.",
      "Faciliter l'accès aux bourses scolaires.",
      "Soutenir les programmes FLAM et l'enseignement bilingue.",
    ],
  },
  {
    title: "Protection sociale",
    icon: Shield,
    points: [
      "Défendre l'accès aux droits sociaux des Français de l'étranger.",
      "Améliorer l'accompagnement des personnes vulnérables.",
      "Favoriser la continuité des droits lors des changements de pays.",
    ],
  },
  {
    title: "Emploi et entrepreneuriat",
    icon: Briefcase,
    points: [
      "Soutenir les entrepreneurs français à l'international.",
      "Encourager le développement des réseaux économiques.",
      "Valoriser les compétences et les opportunités professionnelles.",
    ],
  },
  {
    title: "Transition écologique",
    icon: Leaf,
    points: [
      "Encourager les initiatives environnementales locales.",
      "Soutenir les projets durables des communautés françaises.",
      "Favoriser les échanges de bonnes pratiques.",
    ],
  },
];

export default function PrioritesPage() {
  return (
    <>
      <PageHero title="Nos priorités" />

      <Container className="py-14 sm:py-16">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {priorites.map((priorite, index) => {
            const Icon = priorite.icon;
            return (
              <li
                key={priorite.title}
                className={
                  index === priorites.length - 1
                    ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)]"
                    : undefined
                }
              >
                <article className="flex h-full flex-col border border-alice-border p-6 sm:p-7">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-alice-green"
                    aria-hidden
                  />
                  <h2 className="font-display mt-4 text-2xl font-medium leading-snug text-alice-navy">
                    {priorite.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-alice-muted">
                    {priorite.points.map((point) => (
                      <li key={point} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
