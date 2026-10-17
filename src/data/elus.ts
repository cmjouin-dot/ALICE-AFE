export type Elu = {
  slug: string;
  displayName: string;
  /** Circonscription AFE — placeholder jusqu'à fourniture des données */
  circonscription: string;
  /** Responsabilités au sein de l'AFE / du groupe — placeholder */
  responsabilites: string[];
  /** Biographie provisoire */
  biographie: string[];
  /** Chemin photo ; null = placeholder visuel */
  photo: string | null;
  ordre: number;
};

/**
 * Dix élus du groupe ALICE — ordre alphabétique par nom de famille.
 * Circonscriptions, responsabilités et biographies restent à compléter.
 */
export const elus: Elu[] = [
  {
    slug: "geoffroy-bunetel",
    displayName: "Geoffroy Bunetel",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 1,
  },
  {
    slug: "alexandre-col",
    displayName: "Alexandre Col",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 2,
  },
  {
    slug: "patricia-connell",
    displayName: "Patricia Connell",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élue ou le groupe.",
    ],
    photo: null,
    ordre: 3,
  },
  {
    slug: "remy-cregut",
    displayName: "Remy Cregut",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 4,
  },
  {
    slug: "jean-herve-fraslin",
    displayName: "Jean-Hervé Fraslin",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 5,
  },
  {
    slug: "christophe-jouin",
    displayName: "Christophe Jouin",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 6,
  },
  {
    slug: "sophie-lartilleux-suberville",
    displayName: "Sophie Lartilleux-Suberville",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élue ou le groupe.",
    ],
    photo: null,
    ordre: 7,
  },
  {
    slug: "stephanie-le-vailant-vignancour",
    displayName: "Stéphanie Le Vailant Vignancour",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élue ou le groupe.",
    ],
    photo: null,
    ordre: 8,
  },
  {
    slug: "frederic-shauli",
    displayName: "Frédéric Shauli",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 9,
  },
  {
    slug: "matthias-vazquez",
    displayName: "Matthias Vazquez",
    circonscription: "[Circonscription AFE à préciser]",
    responsabilites: [
      "[Responsabilité AFE à préciser]",
      "[Rôle au sein du groupe ALICE à préciser]",
    ],
    biographie: [
      "Biographie à compléter. Ce profil sera enrichi dès que les informations officielles seront fournies par l'élu ou le groupe.",
    ],
    photo: null,
    ordre: 10,
  },
];

export function getEluBySlug(slug: string): Elu | undefined {
  return elus.find((e) => e.slug === slug);
}
