export type Conviction = {
  id: string;
  title: string;
  summary: string;
  body: string[];
};

/**
 * Principes structurants d'ALICE.
 * Formulés à partir des orientations collectives du groupe.
 * Distingués des discussions préparatoires internes : seuls les principes
 * durables sont présentés ici.
 */
export const convictions: Conviction[] = [
  {
    id: "independance-liberte",
    title: "Indépendance et liberté",
    summary:
      "Une représentation libre, fondée sur nos convictions et notre responsabilité envers les Français de l'étranger.",
    body: [
      "Nous défendons une représentation politique libre, fondée sur nos convictions et notre responsabilité envers les Français de l'étranger. Notre indépendance nous permet de juger chaque proposition sur son mérite, sans logique d'alignement systématique.",
    ],
  },
  {
    id: "centre-progressiste",
    title: "Un centre progressiste et humaniste",
    summary:
      "Une vision ouverte, libérale et progressiste, attachée aux libertés et au rejet des extrêmes.",
    body: [
      "Nous partageons une vision ouverte, libérale et progressiste de la société, attachée aux libertés individuelles, au respect des différences et aux principes démocratiques. Le rejet des extrêmes constitue un fondement de notre engagement.",
    ],
  },
  {
    id: "gouvernance-collective",
    title: "Une gouvernance collective",
    summary:
      "La force du collectif, la diversité des expériences et la confrontation constructive des idées.",
    body: [
      "Nous croyons à la force du collectif, à la diversité des expériences et à la confrontation constructive des idées. Le dialogue, la transparence et la concertation doivent guider nos décisions.",
    ],
  },
  {
    id: "representation-equitable",
    title: "Une représentation juste et équitable",
    summary:
      "Une représentation respectueuse du pluralisme démocratique au sein de l'Assemblée.",
    body: [
      "Nous défendons une représentation respectueuse du pluralisme démocratique. Les responsabilités au sein de l'Assemblée doivent refléter équitablement la diversité des sensibilités et la légitimité des élus.",
    ],
  },
  {
    id: "dialogue-action",
    title: "Le dialogue au service de l'action",
    summary:
      "Coopération et solutions concrètes, sans renoncer à notre identité politique.",
    body: [
      "Nous privilégions la coopération et la recherche de solutions concrètes. Nous sommes ouverts aux échanges et aux rapprochements utiles, sans renoncer à notre identité politique ni à la liberté de jugement de chacun.",
    ],
  },
];
