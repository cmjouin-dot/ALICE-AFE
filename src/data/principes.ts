export type Principe = {
  id: string;
  title: string;
  summary: string;
  /** Application concrète au sein de l'Assemblée — pour la page Engagements */
  applications: string[];
  icon:
    | "scale"
    | "users"
    | "messages"
    | "landmark"
    | "briefcase"
    | "eye";
};

export const methodeIntro =
  "Nous sommes convaincus que l'efficacité de notre Assemblée repose sur le respect de sa diversité, le dialogue entre ses membres et la capacité à construire des solutions au-delà des appartenances politiques.";

/**
 * Principes institutionnels de travail d'ALICE au sein de l'AFE.
 * Ils décrivent une méthode, non un manifeste idéologique.
 */
export const principes: Principe[] = [
  {
    id: "representation-proportionnelle",
    title: "Représentation proportionnelle",
    summary:
      "Respecter la représentation de toutes les sensibilités au sein des instances de l'Assemblée, conformément à ses principes de fonctionnement.",
    applications: [
      "Veiller, dans nos positions sur la gouvernance de l'Assemblée, à ce que la composition des instances reflète la diversité des élus.",
      "Refuser les logiques d'exclusion ou de captation des responsabilités au détriment du pluralisme.",
    ],
    icon: "scale",
  },
  {
    id: "collegialite",
    title: "Collégialité",
    summary:
      "Privilégier les décisions collectives, le partage des responsabilités et la participation active de chaque élu.",
    applications: [
      "Préparer les décisions du groupe de manière concertée, en associant l'ensemble des élus concernés.",
      "Partager les responsabilités et les portefeuilles thématiques plutôt que de les concentrer.",
    ],
    icon: "users",
  },
  {
    id: "dialogue-cooperation",
    title: "Dialogue et coopération",
    summary:
      "Travailler avec l'ensemble des groupes et des élus, dans un esprit constructif, sans renoncer à notre indépendance.",
    applications: [
      "Rechercher des convergences utiles avec d'autres groupes lorsque cela sert l'intérêt des Français de l'étranger.",
      "Conserver la liberté de jugement de chaque élu et l'indépendance du groupe dans ses arbitrages.",
    ],
    icon: "messages",
  },
  {
    id: "respect-pluralisme",
    title: "Respect du pluralisme",
    summary:
      "Reconnaître la légitimité de l'opposition et des minorités, et garantir leur place dans le fonctionnement démocratique de l'Assemblée.",
    applications: [
      "Défendre des règles de fonctionnement qui protègent l'expression des sensibilités minoritaires.",
      "Refuser de présenter la diversité des points de vue comme un obstacle à l'action.",
    ],
    icon: "landmark",
  },
  {
    id: "professionnalisme",
    title: "Professionnalisme",
    summary:
      "Préparer nos travaux avec rigueur, privilégier les propositions documentées et rechercher des solutions réalistes et applicables.",
    applications: [
      "Appuyer nos contributions en commission sur des éléments factuels et des analyses sérieuses.",
      "Privilégier des propositions applicables plutôt que des déclarations générales.",
    ],
    icon: "briefcase",
  },
  {
    id: "transparence-responsabilite",
    title: "Transparence et responsabilité",
    summary:
      "Rendre compte de nos actions, expliquer nos positions et permettre aux Français de l'étranger de suivre nos travaux.",
    applications: [
      "Communiquer de manière claire sur nos travaux et nos positions, lorsqu'elles sont validées.",
      "Assumer nos responsabilités collectives et individuelles devant les citoyens que nous représentons.",
    ],
    icon: "eye",
  },
];
