export type ArticleCategory =
  | "Communiqué"
  | "Déclaration"
  | "Point d'actualité"
  | "Événement";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string; // ISO date
  author: string;
  /** Contenu de démonstration explicitement marqué */
  isDemo: true;
  content: string[];
};

/**
 * Articles de démonstration — clairement identifiés comme tels.
 * Structure prête pour une future intégration CMS.
 */
export const articles: Article[] = [
  {
    slug: "lancement-site-alice",
    title: "Lancement du site institutionnel d'ALICE",
    excerpt:
      "Le groupe ALICE ouvre un espace numérique pour présenter ses convictions, ses élus et ses travaux à l'AFE.",
    category: "Communiqué",
    publishedAt: "2026-10-01",
    author: "Groupe ALICE",
    isDemo: true,
    content: [
      "[Contenu de démonstration] Ce communiqué est un exemple éditorial destiné à illustrer la rubrique Actualités. Il ne constitue pas une publication officielle validée.",
      "Le site ALICE a vocation à devenir le point d'entrée clair et accessible pour comprendre le positionnement du groupe, découvrir ses élus et suivre ses travaux au sein de l'Assemblée des Français de l'étranger.",
      "Les pages seront enrichies au fur et à mesure que les informations définitives — noms, photographies, biographies, textes validés — seront fournies par le groupe.",
    ],
  },
  {
    slug: "representation-constructive",
    title: "Pour une représentation constructive des Français de l'étranger",
    excerpt:
      "ALICE affirme une méthode : écouter, proposer, travailler avec sérieux au sein de l'institution.",
    category: "Déclaration",
    publishedAt: "2026-09-15",
    author: "Groupe ALICE",
    isDemo: true,
    content: [
      "[Contenu de démonstration] Cette déclaration est un texte d'exemple. Sa formulation définitive devra être approuvée par les élus du groupe.",
      "Nous croyons à une représentation qui allie indépendance de jugement et sens du collectif. Les Français de l'étranger méritent des élus capables de dialoguer sans renoncer à leurs principes.",
      "Dans les semaines à venir, cette rubrique accueillera des prises de position, des comptes rendus de travaux et des informations utiles aux concitoyens.",
    ],
  },
  {
    slug: "travaux-afe-automne",
    title: "Suivi des travaux de l'AFE — automne",
    excerpt:
      "Point d'actualité sur le calendrier institutionnel et la manière dont le groupe entend rendre compte de ses travaux.",
    category: "Point d'actualité",
    publishedAt: "2026-08-28",
    author: "Groupe ALICE",
    isDemo: true,
    content: [
      "[Contenu de démonstration] Ce point d'actualité est fictif et sert uniquement à tester la mise en page éditoriale.",
      "L'Assemblée des Français de l'étranger travaille selon un calendrier de sessions et de commissions. ALICE souhaite rendre compte de manière claire et sobre de sa participation.",
      "Aucun détail opérationnel inventé n'est présenté ici. Les comptes rendus réels seront publiés lorsqu'ils seront disponibles et validés.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDateFr(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}
