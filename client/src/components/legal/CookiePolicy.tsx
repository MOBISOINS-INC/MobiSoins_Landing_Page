'use client';

import { LegalLayout } from './LegalLayout';
import type { LegalContent } from './LegalLayout';
import { useLanguage } from '../../contexts/LanguageContext';

const CONTENT: { FR: LegalContent; EN: LegalContent } = {
  FR: {
    title: 'Politique relative aux témoins (cookies)',
    lastUpdated: '8 avril 2026',
    sections: [
      {
        heading: '1. Qu’est-ce qu’un témoin?',
        paragraphs: [
          'Un témoin (cookie) est un petit fichier texte déposé sur votre appareil (ordinateur, tablette ou téléphone) lors de la visite d’un site web. Il permet de conserver certaines données afin de faciliter la navigation et d’activer certaines fonctionnalités.',
        ],
      },
      {
        heading: '2. Utilisation des témoins',
        paragraphs: ['Nous utilisons des témoins pour :'],
        list: [
          'Assurer le bon fonctionnement du site (témoins essentiels)',
          'Mémoriser vos préférences (langue, connexion)',
          'Analyser l’utilisation du site afin d’en améliorer les performances',
          'Vous offrir une expérience personnalisée',
        ],
      },
      {
        heading: '3. Types de témoins',
        list: [
          'Témoins essentiels : nécessaires au fonctionnement technique du site.',
          'Témoins analytiques : nous aident à comprendre comment les visiteurs interagissent avec le site.',
          'Témoins fonctionnels : permettent d’améliorer et de personnaliser les fonctionnalités du site.',
        ],
      },
      {
        heading: '4. Gestion des témoins',
        paragraphs: [
          'Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les témoins. Notez que la désactivation des témoins essentiels pourrait nuire à votre utilisation de certaines parties du site.',
        ],
      },
    ],
  },
  EN: {
    title: 'Cookie Policy',
    lastUpdated: 'April 8, 2026',
    sections: [
      {
        heading: '1. What is a cookie?',
        paragraphs: [
          'A cookie is a small text file placed on your device (computer, tablet or phone) when you visit a website. It stores certain data to make browsing easier and to enable some features.',
        ],
      },
      {
        heading: '2. How we use cookies',
        paragraphs: ['We use cookies to:'],
        list: [
          'Keep the site working properly (essential cookies)',
          'Remember your preferences (language, sign-in)',
          'Analyze how the site is used so we can improve its performance',
          'Offer you a personalized experience',
        ],
      },
      {
        heading: '3. Types of cookies',
        list: [
          'Essential cookies: required for the site to function technically.',
          'Analytics cookies: help us understand how visitors interact with the site.',
          'Functional cookies: improve and personalize the site’s features.',
        ],
      },
      {
        heading: '4. Managing cookies',
        paragraphs: [
          'You can configure your browser at any time to accept or refuse cookies. Note that disabling essential cookies may affect your use of some parts of the site.',
        ],
      },
    ],
  },
};

export const CookiePolicy = () => {
  const { language } = useLanguage();
  return <LegalLayout content={CONTENT[language]} />;
};
