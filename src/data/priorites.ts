export type Priorite = {
  id: string;
  title: string;
  summary: string;
};

/**
 * Axes thématiques proposés — à valider par les élus du groupe.
 * Ne constituent pas des positions formellement adoptées.
 */
export const prioritesStatut =
  "Axes de travail proposés — en attente de validation par les élus d'ALICE. Ces thèmes ne constituent pas encore des engagements formellement adoptés par le groupe.";

export const prioritesIntro =
  "Notre action se concentre sur les sujets qui ont un impact direct sur la vie quotidienne, les droits et les opportunités de nos compatriotes établis hors de France.";

export const priorites: Priorite[] = [
  {
    id: "equite-fiscale",
    title: "Équité fiscale",
    summary:
      "Défendre une fiscalité plus juste et mieux adaptée aux réalités des Français établis à l'étranger, en particulier face aux situations de double imposition et aux inégalités de traitement.",
  },
  {
    id: "interets-economiques",
    title: "Intérêts économiques et commerce extérieur",
    summary:
      "Accompagner les entrepreneurs français à l'international, soutenir les échanges économiques et valoriser les contributions de nos communautés au rayonnement économique de la France.",
  },
  {
    id: "culture-francophonie",
    title: "Culture et francophonie",
    summary:
      "Soutenir le rayonnement culturel français, la transmission de notre langue et les initiatives associatives qui font vivre la francophonie à travers le monde.",
  },
  {
    id: "education-jeunesse",
    title: "Éducation et jeunesse",
    summary:
      "Défendre l'accès à l'enseignement français à l'étranger, les bourses scolaires et les dispositifs éducatifs adaptés aux besoins des familles.",
  },
  {
    id: "services-publics",
    title: "Services publics et démarches consulaires",
    summary:
      "Améliorer l'accessibilité, la simplicité et la qualité des services administratifs et consulaires, notamment grâce à une modernisation numérique centrée sur les usagers.",
  },
  {
    id: "protection-sociale",
    title: "Protection sociale et accès aux droits",
    summary:
      "Contribuer à une meilleure prise en compte des situations particulières des Français de l'étranger en matière de protection sociale, de retraite et d'accès aux droits.",
  },
];
