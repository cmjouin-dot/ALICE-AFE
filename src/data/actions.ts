export type ActionItem = {
  id: string;
  title: string;
  category: "Commission" | "Initiative" | "Représentation";
  summary: string;
  body: string[];
  status: "brouillon";
};

/**
 * Contenu de démonstration / brouillon — ne constitue pas un bilan officiel.
 */
export const actions: ActionItem[] = [
  {
    id: "commissions-afe",
    title: "Travail en commissions de l'AFE",
    category: "Commission",
    summary:
      "Participation active aux travaux des commissions de l'Assemblée des Français de l'étranger.",
    body: [
      "Les élus du groupe ALICE prennent part aux débats et travaux des commissions de l'AFE, dans le respect du règlement et des priorités collectives.",
      "[Brouillon] La liste précise des commissions, mandats et contributions sera publiée après validation du groupe.",
      "Cette section servira à documenter, de manière transparente, l'implication parlementaire des élus.",
    ],
    status: "brouillon",
  },
  {
    id: "initiatives-politiques",
    title: "Initiatives et propositions",
    category: "Initiative",
    summary:
      "Construction d'un agenda de propositions au service des Français de l'étranger.",
    body: [
      "ALICE souhaite formuler des propositions claires sur les sujets qui concernent la vie quotidienne, administrative et démocratique des Français établis hors de France.",
      "[Brouillon] Aucune réalisation n'est revendiquée ici. Les axes d'initiative seront publiés après concertation interne.",
      "L'objectif est d'offrir une lecture accessible des priorités du groupe, distincte d'un catalogue de promesses.",
    ],
    status: "brouillon",
  },
  {
    id: "representation-citoyens",
    title: "Représentation des Français de l'étranger",
    category: "Représentation",
    summary:
      "Une présence attentive aux réalités locales et aux attentes des concitoyens.",
    body: [
      "Représenter les Français de l'étranger, c'est écouter des situations très diverses selon les pays, les parcours professionnels et les configurations familiales.",
      "[Brouillon] Les modalités de contact, de permanence et de remontée d'information seront précisées ultérieurement.",
      "Cette page évoluera pour refléter le travail réel de représentation, sans inventer d'actions non réalisées.",
    ],
    status: "brouillon",
  },
];
