export type ActionCategory =
  | "Propositions et contributions"
  | "Travaux en commission"
  | "Interventions et prises de position"
  | "Résultats obtenus"
  | "Actualités du groupe";

export type ActionItem = {
  id: string;
  title: string;
  category: ActionCategory;
  summary: string;
  body: string[];
  status: "placeholder";
};

/**
 * Structure éditoriale des travaux du groupe.
 * Aucune action, vote ou résultat inventé — placeholders explicites.
 */
export const actionsIntro =
  "Cette page accueillera, au fur et à mesure de leur validation, les contributions, travaux et positions publiques du groupe ALICE au sein de l'Assemblée des Français de l'étranger.";

export const actions: ActionItem[] = [
  {
    id: "propositions-contributions",
    title: "Propositions et contributions",
    category: "Propositions et contributions",
    summary:
      "Textes, amendements, contributions écrites et propositions formulées par les élus du groupe.",
    body: [
      "[À compléter] Aucune proposition n'est publiée à ce stade.",
      "Dès qu'une contribution aura été validée par le groupe, elle pourra être présentée ici de manière factuelle, avec sa date et son objet.",
    ],
    status: "placeholder",
  },
  {
    id: "travaux-commission",
    title: "Travaux en commission",
    category: "Travaux en commission",
    summary:
      "Participation des élus ALICE aux commissions et instances de travail de l'AFE.",
    body: [
      "[À compléter] Les mandats en commission et les contributions associées seront listés après vérification.",
      "Cette rubrique vise à rendre visible le travail institutionnel quotidien, sans en inventer le contenu.",
    ],
    status: "placeholder",
  },
  {
    id: "interventions-positions",
    title: "Interventions et prises de position",
    category: "Interventions et prises de position",
    summary:
      "Interventions en séance, déclarations et positions publiques du groupe ou de ses élus.",
    body: [
      "[À compléter] Aucune prise de position n'est présentée ici tant qu'elle n'a pas été validée pour publication.",
      "Les interventions publiées le seront avec le contexte institutionnel nécessaire à leur compréhension.",
    ],
    status: "placeholder",
  },
  {
    id: "resultats-obtenus",
    title: "Résultats obtenus",
    category: "Résultats obtenus",
    summary:
      "Avancées concrètes auxquelles le groupe a contribué, lorsqu'elles pourront être documentées.",
    body: [
      "[À compléter] Aucun résultat n'est revendiqué à ce stade.",
      "Les éventuels résultats seront décrits de façon mesurée, en distinguant ce qui relève d'une contribution du groupe et ce qui relève d'un travail collectif de l'Assemblée.",
    ],
    status: "placeholder",
  },
  {
    id: "actualites-groupe",
    title: "Actualités du groupe",
    category: "Actualités du groupe",
    summary:
      "Points d'information sur la vie du groupe et le suivi de ses travaux.",
    body: [
      "[À compléter] Les actualités validées seront également accessibles dans la rubrique Actualités du site.",
      "En l'absence de contenu officiel, aucun élément fictif n'est affiché ici.",
    ],
    status: "placeholder",
  },
];
