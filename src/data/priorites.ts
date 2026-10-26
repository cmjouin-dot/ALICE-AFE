export type PrioriteStatut = "proposee" | "adoptee";

export type Priorite = {
  id: string;
  title: string;
  summary: string;
  statut: PrioriteStatut;
};

export const statutLabel: Record<PrioriteStatut, string> = {
  proposee: "Priorité proposée",
  adoptee: "Position adoptée",
};

/**
 * Axes proposés au groupe. Aucun n'est une position officiellement adoptée.
 */
export const prioritesStatut =
  "Ces priorités sont proposées. Aucune n'est, à ce stade, une position officiellement adoptée par le groupe.";

export const prioritesIntro =
  "Sujets concrets suivis pour les Français établis hors de France. Un conseiller des Français de l'étranger peut demander que le groupe en porte un dans les travaux de l'Assemblée.";

export const priorites: Priorite[] = [
  {
    id: "equite-fiscale",
    title: "Équité fiscale",
    summary:
      "Fiscalité plus juste pour les Français de l'étranger, en particulier en cas de double imposition ou d'inégalité de traitement.",
    statut: "proposee",
  },
  {
    id: "interets-economiques",
    title: "Intérêts économiques",
    summary:
      "Entrepreneurs français à l'international, échanges économiques et contribution des communautés au commerce extérieur.",
    statut: "proposee",
  },
  {
    id: "education",
    title: "Éducation",
    summary:
      "Enseignement français à l'étranger, bourses scolaires et dispositifs adaptés aux familles.",
    statut: "proposee",
  },
  {
    id: "culture-francophonie",
    title: "Culture et francophonie",
    summary:
      "Rayonnement culturel, transmission du français et vie associative francophone.",
    statut: "proposee",
  },
  {
    id: "services-consulaires",
    title: "Services consulaires",
    summary:
      "Accès, simplicité et qualité des démarches administratives et consulaires.",
    statut: "proposee",
  },
  {
    id: "protection-sociale",
    title: "Protection sociale",
    summary:
      "Retraite, protection sociale et accès aux droits des Français de l'étranger.",
    statut: "proposee",
  },
];
