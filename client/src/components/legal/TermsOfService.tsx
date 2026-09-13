'use client';

import { LegalLayout } from './LegalLayout';
import type { LegalContent } from './LegalLayout';
import { useLanguage } from '../../contexts/LanguageContext';

const CONTENT: { FR: LegalContent; EN: LegalContent } = {
  FR: {
    title: 'Conditions générales d’utilisation',
    lastUpdated: '8 avril 2026',
    sections: [
      {
        heading: '1. Acceptation des conditions',
        paragraphs: [
          'En accédant aux services de MobiSoins et en les utilisant, vous acceptez d’être lié par les présentes conditions générales. Si vous ne les acceptez pas, veuillez ne pas utiliser nos services.',
        ],
      },
      {
        heading: '2. Services',
        paragraphs: [
          'MobiSoins agit à titre d’intermédiaire technologique qui met en relation des patients et des professionnels de la santé indépendants. Nous ne fournissons pas directement de services médicaux; nous facilitons l’accès à des soins infirmiers à domicile.',
        ],
      },
      {
        heading: '3. Engagements de l’utilisateur',
        paragraphs: [
          'Vous vous engagez à fournir des renseignements exacts et complets lors de votre inscription et de la réservation de soins. Vous vous engagez également à offrir un environnement sécuritaire aux professionnels de la santé lors des visites à domicile.',
        ],
      },
      {
        heading: '4. Annulation et remboursement',
        paragraphs: [
          'Les annulations effectuées plus de 24 heures avant le rendez-vous sont entièrement remboursables. Des frais peuvent s’appliquer en cas d’annulation tardive ou d’absence au rendez-vous.',
        ],
      },
      {
        heading: '5. Limitation de responsabilité',
        paragraphs: [
          'MobiSoins s’efforce de vérifier les qualifications de tous les professionnels partenaires, mais ne peut être tenue responsable des actes médicaux posés. La responsabilité professionnelle incombe au professionnel de la santé.',
        ],
      },
    ],
  },
  EN: {
    title: 'Terms of Use',
    lastUpdated: 'April 8, 2026',
    sections: [
      {
        heading: '1. Acceptance of the terms',
        paragraphs: [
          'By accessing and using MobiSoins services, you agree to be bound by these terms of use. If you do not accept them, please do not use our services.',
        ],
      },
      {
        heading: '2. Services',
        paragraphs: [
          'MobiSoins acts as a technology intermediary connecting patients with independent healthcare professionals. We do not provide medical services directly; we facilitate access to home nursing care.',
        ],
      },
      {
        heading: '3. User commitments',
        paragraphs: [
          'You agree to provide accurate and complete information when you register and when you book care. You also agree to provide a safe environment for healthcare professionals during home visits.',
        ],
      },
      {
        heading: '4. Cancellation and refunds',
        paragraphs: [
          'Cancellations made more than 24 hours before the appointment are fully refundable. Fees may apply for late cancellations or missed appointments.',
        ],
      },
      {
        heading: '5. Limitation of liability',
        paragraphs: [
          'MobiSoins makes every effort to verify the qualifications of all partner professionals, but cannot be held liable for the medical acts performed. Professional liability rests with the healthcare professional.',
        ],
      },
    ],
  },
};

export const TermsOfService = () => {
  const { language } = useLanguage();
  return <LegalLayout content={CONTENT[language]} />;
};
