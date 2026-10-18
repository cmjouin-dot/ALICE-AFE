export const siteConfig = {
  name: "ALICE",
  fullName:
    "Alliance des Libéraux, Indépendants, Centristes de l'Étranger",
  shortDescription:
    "Groupe d'élus à l'Assemblée des Français de l'étranger",
  tagline:
    "Des élus engagés, une méthode collective, des résultats concrets pour les Français de l'étranger.",
  description:
    "ALICE rassemble des élus de l'Assemblée des Français de l'étranger autour d'une méthode de travail fondée sur le dialogue, la collégialité et la recherche de solutions concrètes.",
  email: "contact@alice-afe.fr",
  afeName: "Assemblée des Français de l'étranger",
  afeShort: "AFE",
  url: "https://alice-afe.fr",
  locale: "fr_FR",
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/engagements", label: "Nos engagements" },
  { href: "/elus", label: "Nos élus" },
  { href: "/actions", label: "Nos actions" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegal = [
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
