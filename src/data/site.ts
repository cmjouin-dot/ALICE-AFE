export const siteConfig = {
  name: "ALICE",
  fullName:
    "Alliance des Libéraux, Indépendants, Centristes de l'Étranger",
  shortDescription:
    "Groupe d'élus à l'Assemblée des Français de l'étranger",
  tagline:
    "Au service des conseillers des Français de l'étranger et des communautés qu'ils représentent.",
  description:
    "Groupe d'élus à l'Assemblée des Français de l'étranger. Les conseillers des Français de l'étranger peuvent y suivre le travail d'ALICE, joindre ses membres et leur soumettre une question.",
  email: "contact@alice-afe.fr",
  afeName: "Assemblée des Français de l'étranger",
  afeShort: "AFE",
  url: "https://alice-afe.fr",
  locale: "fr_FR",
} as const;

export const sections = [
  {
    href: "/notre-groupe",
    label: "Notre groupe",
    description:
      "Qui compose ALICE et comment le groupe travaille au sein de l'Assemblée.",
  },
  {
    href: "/representants",
    label: "Nos représentants à l'AFE",
    description: "Les élus du groupe et la façon de les solliciter.",
  },
  {
    href: "/priorites",
    label: "Nos priorités",
    description: "Les sujets suivis dans les travaux de l'Assemblée.",
  },
  {
    href: "/contact",
    label: "Contactez-nous",
    description:
      "Transmettre une question, une difficulté ou une proposition.",
  },
] as const;

const sectionNavigation = sections.map(({ href, label }) => ({ href, label }));

export const navigation = [
  ...sectionNavigation.slice(0, 3),
  { href: "/nos-travaux", label: "Nos travaux" },
  ...sectionNavigation.slice(3),
];

export const footerLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
