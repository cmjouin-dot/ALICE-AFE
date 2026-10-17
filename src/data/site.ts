export const siteConfig = {
  name: "ALICE",
  fullName:
    "Alliance des Libéraux, Indépendants, Centristes de l'Étranger",
  shortDescription:
    "Groupe d'élus à l'Assemblée des Français de l'étranger",
  description:
    "ALICE rassemble des élus centristes, indépendants et progressistes, unis pour défendre les Français de l'étranger dans un esprit de dialogue, de responsabilité et de liberté.",
  email: "contact@alice-afe.fr",
  afeName: "Assemblée des Français de l'étranger",
  afeShort: "AFE",
  url: "https://alice-afe.fr",
  locale: "fr_FR",
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/convictions", label: "Nos convictions" },
  { href: "/elus", label: "Nos élus" },
  { href: "/actions", label: "Nos actions" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
