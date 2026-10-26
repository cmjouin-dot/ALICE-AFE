export type Elu = {
  slug: string;
  displayName: string;
  /** Null tant que la circonscription n'est pas vérifiée. */
  circonscription: string | null;
  commissions: string[];
  vicePresidences: string[];
  responsabilites: string[];
  photo: string | null;
};

/**
 * Membres du groupe ALICE, par ordre alphabétique.
 * Seuls les noms sont vérifiés. Aucune circonscription, commission,
 * vice-présidence ou responsabilité n'est renseignée tant qu'elle n'est pas confirmée.
 */
export const elus: Elu[] = [
  {
    slug: "geoffroy-bunetel",
    displayName: "Geoffroy Bunetel",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "alexandre-col",
    displayName: "Alexandre Col",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "patricia-connell",
    displayName: "Patricia Connell",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "remy-cregut",
    displayName: "Remy Cregut",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "jean-herve-fraslin",
    displayName: "Jean-Hervé Fraslin",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "christophe-jouin",
    displayName: "Christophe Jouin",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "sophie-lartilleux-suberville",
    displayName: "Sophie Lartilleux-Suberville",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "stephanie-le-vailant-vignancour",
    displayName: "Stéphanie Le Vailant Vignancour",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "frederic-shauli",
    displayName: "Frédéric Shauli",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
  {
    slug: "matthias-vazquez",
    displayName: "Matthias Vazquez",
    circonscription: null,
    commissions: [],
    vicePresidences: [],
    responsabilites: [],
    photo: null,
  },
];

export function getEluBySlug(slug: string): Elu | undefined {
  return elus.find((elu) => elu.slug === slug);
}

export const informationNonVerifiee = "Information non encore vérifiée.";
