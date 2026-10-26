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
    id: "transparence",
    title: "Transparence",
    summary:
      "Rendre compte des travaux et expliquer les positions lorsqu'elles sont arrêtées.",
  },
  {
    id: "dialogue-constructif",
    title: "Dialogue constructif",
    summary:
      "Travailler avec l'ensemble des groupes et rechercher des solutions applicables.",
  },
  {
    id: "respect-minorites",
    title: "Respect des minorités",
    summary:
      "Reconnaître la place de l'opposition et des minorités dans le fonctionnement de l'Assemblée.",
  },
  {
    id: "independance",
    title: "Indépendance",
    summary:
      "Préserver la liberté de vote et le jugement propre de chaque élu.",
  },
];
