'use client';

import { LegalLayout } from './LegalLayout';
import type { LegalContent } from './LegalLayout';
import { useLanguage } from '../../contexts/LanguageContext';

const CONTENT: { FR: LegalContent; EN: LegalContent } = {
  FR: {
    title: 'Politique relative aux témoins (cookies)',
    lastUpdated: '13 septembre 2026',
    sections: [
      {
        heading: '1. Qu’est-ce qu’un témoin?',
        paragraphs: [
          'Un témoin (cookie) est un petit fichier texte déposé sur votre appareil (ordinateur, tablette ou téléphone) lors de la visite d’un site web. Il permet de conserver certaines données afin de faciliter la navigation et d’activer certaines fonctionnalités. Nous utilisons aussi le stockage local de votre navigateur à la même fin.',
        ],
      },
      {
        heading: '2. Votre consentement',
        paragraphs: [
          'Conformément à la Loi 25, seuls les témoins essentiels sont actifs par défaut. Les témoins d’analyse et de marketing ne sont déposés qu’après votre consentement explicite, donné dans le panneau affiché lors de votre première visite. Si votre navigateur envoie un signal Global Privacy Control (GPC) ou « Ne pas me suivre », les témoins non essentiels sont refusés par défaut.',
          'Vous pouvez modifier ou retirer votre consentement en tout temps en cliquant sur « Gérer les témoins » au bas de chaque page. Votre choix est conservé six mois, après quoi nous vous le redemandons.',
        ],
      },
      {
        heading: '3. Témoins que nous utilisons',
        list: [
          'Essentiels — ms_consent (votre choix de consentement, 6 mois) et la préférence de langue (stockage local, sans expiration). Ils ne servent à aucun suivi.',
          'Analytiques — mesure d’audience pour comprendre l’utilisation du site et l’améliorer. Aucun outil d’analyse n’est actif pour l’instant; s’il en est ajouté un, il ne se chargera qu’avec votre consentement.',
          'Marketing — publicité et réseaux sociaux. Aucun témoin de marketing n’est utilisé pour l’instant; le cas échéant, il ne se chargera qu’avec votre consentement.',
        ],
      },
      {
        heading: '4. Gestion par votre navigateur',
        paragraphs: [
          'Vous pouvez aussi configurer votre navigateur pour accepter, refuser ou supprimer les témoins. La désactivation des témoins essentiels pourrait nuire à votre utilisation de certaines parties du site.',
        ],
      },
      {
        heading: '5. Nous joindre',
        paragraphs: ['Pour toute question sur les témoins ou vos renseignements personnels : info@mobisoins.com.'],
      },
    ],
  },
  EN: {
    title: 'Cookie Policy',
    lastUpdated: 'September 13, 2026',
    sections: [
      {
        heading: '1. What is a cookie?',
        paragraphs: [
          'A cookie is a small text file placed on your device (computer, tablet or phone) when you visit a website. It stores certain data to make browsing easier and to enable some features. We also use your browser’s local storage for the same purpose.',
        ],
      },
      {
        heading: '2. Your consent',
        paragraphs: [
          'In line with Quebec’s Law 25, only essential cookies are active by default. Analytics and marketing cookies are set only after your explicit consent, given in the panel shown on your first visit. If your browser sends a Global Privacy Control (GPC) or “Do Not Track” signal, non-essential cookies are refused by default.',
          'You can change or withdraw your consent at any time by clicking “Manage cookies” at the bottom of every page. Your choice is kept for six months, after which we ask again.',
        ],
      },
      {
        heading: '3. Cookies we use',
        list: [
          'Essential — ms_consent (your consent choice, 6 months) and your language preference (local storage, no expiry). They are not used for tracking.',
          'Analytics — audience measurement to understand how the site is used and improve it. No analytics tool is active at the moment; if one is added, it will only load with your consent.',
          'Marketing — advertising and social media. No marketing cookies are used at the moment; if any are added, they will only load with your consent.',
        ],
      },
      {
        heading: '4. Browser controls',
        paragraphs: [
          'You can also configure your browser to accept, refuse or delete cookies. Disabling essential cookies may affect your use of some parts of the site.',
        ],
      },
      {
        heading: '5. Contact',
        paragraphs: ['For any question about cookies or your personal information: info@mobisoins.com.'],
      },
    ],
  },
};

export const CookiePolicy = () => {
  const { language } = useLanguage();
  return <LegalLayout content={CONTENT[language]} />;
};
