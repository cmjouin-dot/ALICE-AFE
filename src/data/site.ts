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
      "Notre identité, nos engagements et nos principes d'action.",
  },
  {
    href: "/representants",
    label: "Nos représentants à l'AFE",
    description:
      "Les élus ALICE et leurs responsabilités au sein de l'Assemblée.",
  },
  {
    href: "/priorites",
    label: "Nos priorités",
    description: "Les sujets que nous souhaitons porter à l'Assemblée.",
  },
  {
    href: "/nos-travaux",
    label: "Nos travaux",
    description: "Rapports, comptes rendus et interventions de nos élus.",
  },
  {
    href: "/contact",
    label: "Contactez-nous",
    description:
      "Faites remonter une question, une difficulté ou une proposition à l'AFE.",
  },
] as const;

export const navigation = sections.map(({ href, label }) => ({ href, label }));

export const footerLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
