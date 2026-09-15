'use client';

import { LegalLayout } from './LegalLayout';
import type { LegalContent } from './LegalLayout';
import { useLanguage } from '../../contexts/LanguageContext';

const CONTENT: { FR: LegalContent; EN: LegalContent } = {
  FR: {
    title: 'Politique de confidentialité',
    lastUpdated: '13 septembre 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'Chez MobiSoins, la protection de vos renseignements personnels est une priorité. La présente politique décrit comment nous recueillons, utilisons et protégeons vos informations lorsque vous utilisez nos services.',
        ],
      },
      {
        heading: '2. Collecte des données',
        paragraphs: ['Nous recueillons les renseignements nécessaires à la prestation de nos services de soins à domicile, notamment :'],
        list: [
          'Renseignements d’identification (nom, adresse, coordonnées)',
          'Données de santé liées aux soins',
          'Renseignements de paiement (traités de manière sécurisée)',
          'Données de navigation et d’utilisation de l’application',
        ],
      },
      {
        heading: '3. Utilisation des données',
        paragraphs: ['Vos données sont utilisées exclusivement pour :'],
        list: [
          'Coordonner et fournir les soins infirmiers',
          'Communiquer avec vous au sujet de vos rendez-vous',
          'Améliorer nos services et votre expérience',
          'Respecter nos obligations légales et réglementaires',
        ],
      },
      {
        heading: '4. Protection des données',
        paragraphs: [
          'Nous appliquons des mesures de sécurité avancées pour protéger vos renseignements, dont le chiffrement des données, des contrôles d’accès stricts et des audits de sécurité réguliers. Vos données de santé sont traitées dans la plus stricte confidentialité.',
        ],
      },
      {
        heading: '5. Vos droits',
        paragraphs: [
          'Vous avez le droit d’accéder à vos renseignements personnels, de les corriger ou d’en demander la suppression. Pour exercer ces droits, communiquez avec notre service à la clientèle.',
        ],
      },
      {
        heading: '6. Témoins et technologies de suivi',
        paragraphs: [
          'Seuls les témoins essentiels sont actifs par défaut. Toute technologie permettant de vous identifier, de vous localiser ou d’établir votre profil n’est activée qu’avec votre consentement explicite, que vous pouvez retirer en tout temps via « Gérer les témoins » au bas de chaque page. Voir notre politique relative aux témoins.',
        ],
      },
      {
        heading: '7. Conservation',
        paragraphs: [
          'Nous conservons vos renseignements uniquement le temps nécessaire aux fins décrites ci-dessus ou exigé par la loi, puis nous les détruisons ou les anonymisons de façon sécuritaire.',
        ],
      },
      {
        heading: '8. Responsable de la protection des renseignements personnels',
        paragraphs: [
          'MobiSoins a désigné une personne responsable de la protection des renseignements personnels. Pour exercer vos droits, poser une question ou signaler un incident : info@mobisoins.com. Si vous n’êtes pas satisfait de notre réponse, vous pouvez déposer une plainte auprès de la Commission d’accès à l’information du Québec.',
        ],
      },
    ],
  },
  EN: {
    title: 'Privacy Policy',
    lastUpdated: 'September 13, 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'At MobiSoins, protecting your personal information is a priority. This policy describes how we collect, use and protect your information when you use our services.',
        ],
      },
      {
        heading: '2. Data collection',
        paragraphs: ['We collect the information needed to deliver our home-care services, including:'],
        list: [
          'Identification details (name, address, contact information)',
          'Health information relevant to your care',
          'Payment information (processed securely)',
          'Browsing and app-usage data',
        ],
      },
      {
        heading: '3. Use of data',
        paragraphs: ['Your data is used exclusively to:'],
        list: [
          'Coordinate and deliver nursing care',
          'Communicate with you about your appointments',
          'Improve our services and your experience',
          'Meet our legal and regulatory obligations',
        ],
      },
      {
        heading: '4. Data protection',
        paragraphs: [
          'We apply advanced security measures to protect your information, including data encryption, strict access controls and regular security audits. Your health data is handled with the strictest confidentiality.',
        ],
      },
      {
        heading: '5. Your rights',
        paragraphs: [
          'You have the right to access your personal information, to correct it, or to request its deletion. To exercise these rights, contact our customer service team.',
        ],
      },
      {
        heading: '6. Cookies and tracking technologies',
        paragraphs: [
          'Only essential cookies are active by default. Any technology that can identify you, locate you or build a profile is enabled only with your explicit consent, which you can withdraw at any time via “Manage cookies” at the bottom of every page. See our cookie policy.',
        ],
      },
      {
        heading: '7. Retention',
        paragraphs: [
          'We keep your information only as long as needed for the purposes described above or as required by law, then securely destroy or anonymize it.',
        ],
      },
      {
        heading: '8. Privacy officer',
        paragraphs: [
          'MobiSoins has designated a person in charge of the protection of personal information. To exercise your rights, ask a question or report an incident: info@mobisoins.com. If you are not satisfied with our response, you may file a complaint with the Commission d’accès à l’information du Québec.',
        ],
      },
    ],
  },
};

export const PrivacyPolicy = () => {
  const { language } = useLanguage();
  return <LegalLayout content={CONTENT[language]} />;
};
