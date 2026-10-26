export type Elu = {
  slug: string;
  displayName: string;
  photo: string;
  /** Réglage object-position pour un cadrage 4:5 centré sur le visage. */
  photoPosition: string;
  /** Responsabilité au sein du groupe ALICE. Null si aucune n'est indiquée. */
  roleAlice: string | null;
  commissions: string[];
  /** Fonctions et mandats à l'AFE, distincts du rôle dans le groupe. */
  fonctionsAfe: string[];
  /** Null lorsque la circonscription n'est pas encore confirmée. */
  circonscription: string | null;
  /** Null lorsqu'aucune adresse professionnelle AFE n'a été fournie. */
  email: string | null;
};

/**
 * Dix élus du groupe. Jean-Hervé Fraslin est placé avant Christophe Jouin.
 * Aucun courriel AFE n'a été fourni. La circonscription de Stéphanie Le Vaillant
 * Vignancour reste à confirmer.
 */
export const elus: Elu[] = [
  {
    slug: "stephanie-le-vaillant-vignancour",
    displayName: "Stéphanie Le Vaillant Vignancour",
    photo: "/images/members/stephanie-le-vaillant-vignancour.jpeg",
    photoPosition: "center 40%",
    roleAlice: "Présidente du groupe ALICE",
    commissions: ["Commission des finances et de la fiscalité"],
    fonctionsAfe: [],
    circonscription: null,
    email: null,
  },
  {
    slug: "jean-herve-fraslin",
    displayName: "Jean-Hervé Fraslin",
    photo: "/images/members/jean-herve-fraslin.jpg",
    photoPosition: "center 12%",
    roleAlice: "Vice-président du groupe ALICE",
    commissions: ["Commission de l'enseignement"],
    fonctionsAfe: [],
    circonscription: "Afrique centrale, australe et orientale, Tanzanie",
    email: null,
  },
  {
    slug: "christophe-jouin",
    displayName: "Christophe Jouin",
    photo: "/images/members/christophe-jouin.jpg",
    photoPosition: "center 45%",
    roleAlice: "Vice-président du groupe ALICE",
    commissions: ["Commission des lois, règlements et affaires consulaires"],
    fonctionsAfe: [],
    circonscription: "États-Unis, Los Angeles",
    email: null,
  },
  {
    slug: "matthias-vazquez",
    displayName: "Matthias Vazquez",
    photo: "/images/members/matthias-vazquez.jpg",
    photoPosition: "center 35%",
    roleAlice: "Secrétaire général du groupe ALICE",
    commissions: ["Commission des affaires sociales"],
    fonctionsAfe: ["Vice-président de la commission des affaires sociales"],
    circonscription: "Asie-Océanie, Phnom Penh",
    email: null,
  },
  {
    slug: "patricia-connell",
    displayName: "Patricia Connell",
    photo: "/images/members/patricia-connell.jpg",
    photoPosition: "center 22%",
    roleAlice: null,
    commissions: ["Commission de la sécurité et des urgences écologiques"],
    fonctionsAfe: [
      "Membre du Bureau de l'AFE",
      "Membre du Bureau de vote électronique",
      "Présidente du Prix du développement durable",
    ],
    circonscription: "Europe du Nord, Londres",
    email: null,
  },
  {
    slug: "frederic-schauli",
    displayName: "Frédéric Schauli",
    photo: "/images/members/frederic-schauli.png",
    photoPosition: "center 35%",
    roleAlice: null,
    commissions: ["Commission des lois, règlements et affaires consulaires"],
    fonctionsAfe: [
      "Vice-président de la commission des lois, règlements et affaires consulaires",
      "Mandat auprès du Conseil national de l'aide juridique",
    ],
    circonscription: "Benelux, Luxembourg",
    email: null,
  },
  {
    slug: "sophie-lartilleux-suberville",
    displayName: "Sophie Lartilleux-Suberville",
    photo: "/images/members/sophie-lartilleux-suberville.jpeg",
    photoPosition: "center 40%",
    roleAlice: "Représentante ALICE au dispositif STAFE",
    commissions: ["Commission des affaires sociales"],
    fonctionsAfe: [],
    circonscription: "États-Unis, San Francisco",
    email: null,
  },
  {
    slug: "geoffroy-bunelet",
    displayName: "Geoffroy Bunelet",
    photo: "/images/members/geoffroy-bunelet.jpg",
    photoPosition: "center 30%",
    roleAlice: null,
    commissions: ["Commission du commerce extérieur"],
    fonctionsAfe: ["Mandat auprès de France Titres"],
    circonscription: "Asie centrale et Moyen-Orient, Dubaï",
    email: null,
  },
  {
    slug: "remy-cregut",
    displayName: "Rémy Crégut",
    photo: "/images/members/remy-cregut.png",
    photoPosition: "center 30%",
    roleAlice: null,
    commissions: ["Commission du commerce extérieur"],
    fonctionsAfe: ["Suppléant au Bureau de l'AFE"],
    circonscription:
      "Allemagne, Autriche, Slovaquie, Slovénie, Suisse, Genève",
    email: null,
  },
  {
    slug: "alexandre-col",
    displayName: "Alexandre Col",
    photo: "/images/members/alexandre-col.jpg",
    photoPosition: "42% 48%",
    roleAlice: null,
    commissions: ["Commission de l'enseignement"],
    fonctionsAfe: [],
    circonscription:
      "Allemagne, Autriche, Slovaquie, Slovénie, Suisse, Zurich",
    email: null,
  },
];

export function getEluBySlug(slug: string): Elu | undefined {
  return elus.find((elu) => elu.slug === slug);
}
