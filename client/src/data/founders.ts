/**
 * Founder profiles for the About page.
 *
 * To fill in a founder: drop a portrait at `public/founders/<slug>.jpg`
 * (4:5 portrait, ~1200px tall works well) and set `photo` to that path,
 * then replace the bracketed placeholders below. Bracketed text renders
 * as-is, so it is visible on the page until replaced.
 */
export interface Founder {
  slug: string;
  name: string;
  /** Portrait path under /public. Leave undefined to show the initials tile. */
  photo?: string;
  role: { fr: string; en: string };
  origin: { fr: string; en: string };
  previously: { fr: string; en: string };
  bio: { fr: string; en: string };
}

export const FOUNDERS: Founder[] = [
  {
    slug: 'josue-kenge',
    name: 'Josue Kenge',
    role: { fr: 'Cofondateur', en: 'Co-founder' },
    origin: { fr: '[Ville, pays d’origine]', en: '[City, country of origin]' },
    previously: { fr: '[Parcours et expériences précédentes]', en: '[Past roles and experience]' },
    bio: {
      fr: '[Courte biographie : ce qui l’a mené à MobiSoins, son rôle dans l’équipe et ce qui le motive.]',
      en: '[Short bio: what led him to MobiSoins, his role on the team and what drives him.]',
    },
  },
  {
    slug: 'gercia-pierre',
    name: 'Gercia Pierre',
    role: { fr: 'Cofondatrice', en: 'Co-founder' },
    origin: { fr: '[Ville, pays d’origine]', en: '[City, country of origin]' },
    previously: { fr: '[Parcours et expériences précédentes]', en: '[Past roles and experience]' },
    bio: {
      fr: '[Courte biographie : ce qui l’a menée à MobiSoins, son rôle dans l’équipe et ce qui la motive.]',
      en: '[Short bio: what led her to MobiSoins, her role on the team and what drives her.]',
    },
  },
  {
    slug: 'astrid-kenge',
    name: 'Astrid Kenge',
    role: { fr: 'Cofondatrice', en: 'Co-founder' },
    origin: { fr: '[Ville, pays d’origine]', en: '[City, country of origin]' },
    previously: { fr: '[Parcours et expériences précédentes]', en: '[Past roles and experience]' },
    bio: {
      fr: '[Courte biographie : ce qui l’a menée à MobiSoins, son rôle dans l’équipe et ce qui la motive.]',
      en: '[Short bio: what led her to MobiSoins, her role on the team and what drives her.]',
    },
  },
  {
    slug: 'moise-kenge',
    name: 'Moise Kenge',
    role: { fr: 'Cofondateur', en: 'Co-founder' },
    origin: { fr: '[Ville, pays d’origine]', en: '[City, country of origin]' },
    previously: { fr: '[Parcours et expériences précédentes]', en: '[Past roles and experience]' },
    bio: {
      fr: '[Courte biographie : ce qui l’a mené à MobiSoins, son rôle dans l’équipe et ce qui le motive.]',
      en: '[Short bio: what led him to MobiSoins, his role on the team and what drives him.]',
    },
  },
];
