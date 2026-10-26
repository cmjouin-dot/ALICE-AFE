export type Principe = {
  id: string;
  title: string;
  summary: string;
};

/**
 * Méthode de travail d'ALICE au sein de l'AFE.
 * Ces principes décrivent une façon de siéger, non un manifeste idéologique.
 */
export const principes: Principe[] = [
  {
    id: "proportionnalite",
    title: "Proportionnalité",
    summary:
      "Veiller à ce que les instances de l'Assemblée reflètent la diversité des élus.",
  },
  {
    id: "collegialite",
    title: "Collégialité",
    summary:
      "Préparer les décisions ensemble et partager les responsabilités.",
  },
  {
    id: "travail-constructif",
    title: "Travail avec tous et esprit constructif",
    summary:
      "Travailler avec l'ensemble des groupes, dans un esprit constructif, et rechercher des solutions applicables.",
  },
  {
    id: "respect-opposition",
    title: "Respect de l'opposition et des minorités",
    summary:
      "Reconnaître la place de l'opposition et des minorités dans le fonctionnement de l'Assemblée.",
  },
  {
    id: "professionnalisme",
    title: "Professionnalisme",
    summary:
      "Appuyer les contributions sur des faits et un travail préparé.",
  },
  {
    id: "transparence",
    title: "Transparence",
    summary:
      "Rendre compte des travaux et expliquer les positions lorsqu'elles sont arrêtées.",
  },
];
