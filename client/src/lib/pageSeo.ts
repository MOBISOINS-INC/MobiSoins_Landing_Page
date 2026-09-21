import type { Metadata } from 'next';
import { pageMetadata } from './seo';
import type { Language } from './i18n';

/** Titles and descriptions for the fixed pages, in both languages. */
const PAGES = {
  home: {
    path: '/',
    FR: ['Soins infirmiers à domicile à Montréal, Québec', 'Soins infirmiers à domicile au Québec par des infirmières membres de l’OIIQ. Lancement à Montréal, Laval et Longueuil. Inscrivez-vous à la liste d’attente.'],
    EN: ['Home Nursing Care in Montreal, Quebec', 'Home nursing care in Quebec by OIIQ-licensed nurses. Launching in Montreal, Laval and Longueuil. Join the waitlist to book your first visit.'],
  },
  apropos: {
    path: '/apropos',
    FR: ['À propos', 'Qui est derrière MobiSoins : une équipe québécoise qui prépare des soins infirmiers à domicile offerts par des infirmières membres de l’OIIQ.'],
    EN: ['About Us', 'Who is behind MobiSoins: a Quebec team preparing home nursing care delivered by OIIQ-licensed nurses in Greater Montreal.'],
  },
  contact: {
    path: '/contact',
    FR: ['Contact', 'Une question sur MobiSoins, un partenariat ou les soins à domicile ? Écrivez à notre équipe, nous vous répondons rapidement.'],
    EN: ['Contact', 'A question about MobiSoins, a partnership or home nursing care? Write to our team and we will get back to you quickly.'],
  },
  faq: {
    path: '/faq',
    FR: ['Questions fréquentes', 'Réservation, infirmières OIIQ, secteurs desservis, reçus d’assurance, confidentialité : les réponses aux questions fréquentes sur MobiSoins.'],
    EN: ['Frequently Asked Questions', 'Booking, OIIQ nurses, service areas, insurance receipts, privacy: answers to the most common questions about MobiSoins home nursing.'],
  },
  services: {
    path: '/services',
    FR: ['Services de soins infirmiers à domicile', 'Prises de sang, pansements, vaccins, suivi du diabète et de la tension, soins aux aînés et services aux entreprises, à domicile dans le Grand Montréal.'],
    EN: ['Home Nursing Services', 'Blood draws, dressings, vaccines, diabetes and blood-pressure follow-up, senior care and corporate services, at home in Greater Montreal.'],
  },
  articles: {
    path: '/articles',
    FR: ['Articles et guides santé', 'Guides pratiques sur les soins infirmiers à domicile, la télésanté et le soutien aux aînés au Québec, rédigés par l’équipe MobiSoins.'],
    EN: ['Health Articles and Guides', 'Practical guides on home nursing care, telehealth and supporting seniors in Quebec, written by the MobiSoins team.'],
  },
  confidentialite: {
    path: '/confidentialite',
    FR: ['Politique de confidentialité', 'Comment MobiSoins recueille, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec.'],
    EN: ['Privacy Policy', 'How MobiSoins collects, uses and protects your personal information, in compliance with Quebec’s Law 25.'],
  },
  conditions: {
    path: '/conditions',
    FR: ['Conditions d’utilisation', 'Les conditions qui encadrent l’utilisation du site et des services MobiSoins.'],
    EN: ['Terms of Service', 'The terms that govern the use of the MobiSoins website and services.'],
  },
  cookies: {
    path: '/cookies',
    FR: ['Politique relative aux témoins', 'Les témoins (cookies) utilisés sur le site MobiSoins et comment gérer vos préférences.'],
    EN: ['Cookie Policy', 'The cookies used on the MobiSoins website and how to manage your preferences.'],
  },
} as const;

export type StaticPage = keyof typeof PAGES;

export function staticPageMetadata(page: StaticPage, lang: Language): Metadata {
  const entry = PAGES[page];
  const [title, description] = entry[lang];
  return pageMetadata({ title, description, path: entry.path, lang });
}
