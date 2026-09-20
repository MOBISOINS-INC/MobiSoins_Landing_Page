'use client';

import { ArticleLayout } from '../../../components/articles/ArticleLayout';
import type { ArticleData } from '../../../components/articles/ArticleLayout';

const SOURCES_URLS = {
  infoway: 'https://www.infoway-inforoute.ca/en/what-we-do/other-initiatives/virtual-care',
  statcanReport: 'https://www150.statcan.gc.ca/n1/pub/82-003-x/2026006/article/00002-eng.htm',
  statcanPlus: 'https://www.statcan.gc.ca/o1/en/plus/8851-virtual-health-care-post-pandemic-canada-checkup',
  cihi: 'https://www.cihi.ca/en/virtual-care-a-major-shift-for-physicians-in-canada',
  rqt: 'https://telesantequebec.ca/professionnel/faq-reglement/',
  rqtFiche: 'https://telesantequebec.ca/wp-content/uploads/fiches_informatives/02-avantage_points_vigilance_072024.pdf',
  netendances:
    'https://transformation-numerique.ulaval.ca/enquetes-et-mesures/netendances/personnes-ainees-connectees-2024/',
  er: 'https://www.quebec.ca/nouvelles/actualites/details/sante-quebec-fait-le-point-sur-la-situation-des-urgences-au-quebec-60741',
};

const article: { FR: ArticleData; EN: ArticleData } = {
  FR: {
    slug: 'telesante',
    tag: 'Innovation santé',
    date: 'Mai 2026',
    title: 'Comment la télésanté transforme le suivi médical',
    subtitle:
      'En quelques années, consulter par téléphone ou par vidéo est passé de l’exception à l’habitude. La télésanté a réglé une partie du problème d’accès aux soins au Québec — mais pas tout. Car aucun écran ne peut faire une prise de sang, changer un pansement ou prendre une tension fiable. Portrait d’une révolution, de ses limites, et du chaînon qui manque.',
    readTime: '9 min',
    image: '/images/articles/telesante.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'Plus d’un Canadien sur deux a déjà eu une consultation virtuelle, et environ huit patients sur dix s’en disent satisfaits.',
      'Près de 78 % des rendez-vous virtuels en première ligne se font… par simple téléphone.',
      'Depuis le 26 septembre 2024, un règlement québécois encadre la télésanté : ce qui exige un examen physique doit se faire en personne.',
      'La télésanté ne peut ni prélever, ni panser, ni injecter, ni vacciner : le soin « avec les mains » reste indispensable.',
      'L’avenir est hybride : la consultation à l’écran, le geste clinique à la maison.',
    ],
    keyFacts: [
      { value: '54 %', label: 'des Canadiens ont déjà eu une consultation virtuelle (Inforoute Santé du Canada, 2023)' },
      { value: '8 sur 10', label: 'patients satisfaits de leur dernier rendez-vous virtuel (Statistique Canada, 2023)' },
      { value: '78 %', label: 'des rendez-vous virtuels en première ligne se font uniquement par téléphone (Statistique Canada, 2023)' },
    ],
    sections: [
      {
        title: 'Le point de départ : un accès aux soins sous pression',
        content: [
          'Pour comprendre le succès de la télésanté, il faut partir du problème qu’elle tente de résoudre. Au Québec, obtenir un rendez-vous médical rapidement demeure un défi pour une grande partie de la population, en particulier pour les personnes qui n’ont pas de médecin de famille. Faute d’option, beaucoup se tournent vers l’urgence pour des problèmes qui n’en relèvent pas.',
          'Or les urgences débordent. Selon le bilan publié par Santé Québec en janvier 2025, la durée moyenne de séjour à l’urgence était de 18,8 heures, avec un taux d’occupation de 115 % à l’échelle provinciale et de 141 % à Montréal. Près de 9 600 visites y étaient enregistrées chaque jour.',
          'Dans ce contexte, toute solution qui permet d’obtenir un avis professionnel sans se déplacer ni attendre des heures est accueillie à bras ouverts. C’est exactement la promesse de la télésanté.',
        ],
      },
      {
        title: 'Une adoption fulgurante, accélérée par la pandémie',
        content: [
          'Avant 2020, la consultation à distance restait marginale. La pandémie a tout changé en quelques semaines. L’Institut canadien d’information sur la santé (ICIS) a mesuré qu’entre avril 2020 et mars 2021, dans cinq provinces canadiennes, 32 % des services médicaux avaient été offerts virtuellement — et jusqu’à 42 % en médecine de famille.',
          'L’usage s’est depuis stabilisé, mais il ne reviendra pas en arrière. Selon le sondage canadien sur la santé numérique 2023 d’Inforoute Santé du Canada, 54 % des Canadiens ont déjà eu une consultation virtuelle et 82 % se disent intéressés par cette option. Statistique Canada rapporte qu’en 2023, plus de quatre utilisateurs de soins de santé sur dix avaient eu au moins un rendez-vous virtuel dans l’année.',
          'Fait révélateur : la « télésanté » réelle est beaucoup moins technologique qu’on l’imagine. Toujours selon Statistique Canada, 77,9 % des rendez-vous virtuels avec un médecin de famille ou une infirmière praticienne se déroulaient uniquement par téléphone.',
        ],
      },
      {
        title: 'Ce que la télésanté fait vraiment bien',
        content: [
          'Les patients l’apprécient, et les données le confirment. Environ huit patients sur dix se disent satisfaits ou très satisfaits de leur dernier rendez-vous virtuel, selon Statistique Canada ; au Québec, près de 47 % se disent même très satisfaits. Et 85 % des utilisateurs sondés par Inforoute estiment que leur problème de santé a été pris en charge lors de leur dernière visite virtuelle.',
          'Les raisons sont faciles à comprendre. Pas de transport, pas de stationnement, pas de congé à prendre, pas de salle d’attente où côtoyer d’autres malades. Pour les personnes en région éloignée, à mobilité réduite ou sans voiture, la différence est majeure.',
          'La télésanté excelle dans plusieurs situations : renouveler une ordonnance, discuter de résultats d’examens, ajuster un traitement déjà en cours, assurer un suivi en santé mentale, obtenir un premier avis pour savoir s’il faut consulter en personne. Elle rend aussi les suivis plus fréquents, donc plus proactifs : un court appel toutes les deux semaines vaut souvent mieux qu’un long rendez-vous tous les six mois.',
        ],
        quote: 'Un court appel toutes les deux semaines vaut souvent mieux qu’un long rendez-vous tous les six mois.',
      },
      {
        title: 'Un cadre légal québécois désormais en place',
        content: [
          'Longtemps pratiquée dans une zone grise, la télésanté est maintenant encadrée au Québec. Depuis le 26 septembre 2024, un règlement précise quels services de santé et services sociaux peuvent être offerts à distance, et à quelles conditions.',
          'Trois principes méritent d’être connus des patients. Premièrement, les services qui exigent un examen physique sont exclus : ils doivent avoir lieu en personne. Deuxièmement, un suivi qui se prolonge doit comporter au moins une rencontre en présence. Troisièmement, le professionnel doit obtenir votre consentement éclairé, ce qui comprend une explication des limites de la consultation à distance.',
          'Autrement dit, le législateur lui-même reconnaît que la télésanté est un complément aux soins en personne — pas un substitut.',
        ],
      },
      {
        title: 'Les limites : ce qu’un écran ne pourra jamais faire',
        content: [
          'C’est le point aveugle du virage numérique. Une grande partie des décisions médicales reposent sur des données qu’il faut bien aller chercher sur le patient : une prise de sang, un prélèvement, une tension artérielle fiable, une glycémie, l’aspect réel d’une plaie. Aucune de ces données ne voyage par téléphone.',
          'Le scénario est devenu classique. Le médecin vous parle dix minutes au téléphone, puis conclut : « Je vous envoie une requête pour une prise de sang. » Et vous voilà revenu à la case départ : trouver un rendez-vous au centre de prélèvement, vous déplacer, attendre. La consultation était virtuelle ; le parcours, lui, ne l’était pas.',
          'Même chose pour tous les soins qui se font avec les mains : changer un pansement, retirer des points de suture, administrer une injection ou un vaccin, installer ou entretenir un cathéter, faire un lavage d’oreilles. La télésanté peut les prescrire ; elle ne peut pas les réaliser.',
        ],
        list: [
          'Prises de sang, analyses d’urine et autres prélèvements',
          'Pansements, soins de plaies et retrait de points',
          'Injections, vaccins et médication intramusculaire ou sous-cutanée',
          'Mesure fiable de la tension, de la glycémie et des signes vitaux',
          'Évaluation physique : plaie, œdème, respiration, état général',
        ],
        links: [
          { label: 'Prise de sang à domicile', href: '/services/prise-sang' },
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Médication IM/SC', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'La fracture numérique : le risque d’oublier les plus vulnérables',
        content: [
          'Le second angle mort concerne ceux qui ont le plus besoin de soins. Les aînés québécois sont bien plus branchés qu’on le croit : selon l’enquête NETendances 2024 de l’Académie de la transformation numérique de l’Université Laval, 85 % des 65 ans et plus disposent d’une connexion Internet à la maison et 66 % possèdent un téléphone intelligent.',
          'Mais ces moyennes cachent des écarts. Une partie des aînés n’est toujours pas branchée, et 12 % des internautes aînés jugent eux-mêmes leurs compétences numériques faibles. Ajoutez une baisse d’audition, une vision diminuée, des troubles cognitifs ou une barrière de langue, et la consultation vidéo devient une épreuve plutôt qu’un service.',
          'Ce n’est sans doute pas un hasard si la vaste majorité des rendez-vous « virtuels » se font encore par téléphone. Or, au téléphone, le professionnel ne voit rien : ni le teint, ni la plaie, ni la démarche, ni le milieu de vie.',
        ],
        callout: {
          label: 'Conseil pratique',
          text: 'Pour un parent âgé, préparez la consultation à distance avec lui : liste de médicaments sous la main, questions notées, tension ou glycémie récentes si possible, et un proche à ses côtés pour entendre les consignes.',
        },
      },
      {
        title: 'Le chaînon manquant : des mains à la maison',
        content: [
          'La suite logique de la télésanté n’est pas davantage d’écrans. C’est un modèle hybride : l’avis médical à distance lorsque c’est suffisant, et le geste clinique apporté à domicile lorsque c’est nécessaire.',
          'C’est précisément la place qu’occupent les soins infirmiers à domicile. Votre médecin vous remet une requête lors d’une téléconsultation ? Une infirmière vient faire le prélèvement chez vous, et les résultats sont acheminés au prescripteur. Votre traitement contre l’hypertension vient d’être ajusté au téléphone ? Une infirmière mesure votre tension dans de bonnes conditions et documente l’évolution. Vous sortez d’une chirurgie d’un jour ? Le pansement est refait à la maison, et la plaie est évaluée par une professionnelle.',
          'Ensemble, la consultation virtuelle et la visite infirmière à domicile bouclent la boucle : le patient n’a plus à se déplacer ni pour la consultation, ni pour le geste qui en découle.',
        ],
        quote: 'La consultation à l’écran, le geste clinique à la maison : c’est ensemble que les deux bouclent la boucle.',
        links: [
          { label: 'Suivi de la tension artérielle', href: '/services/suivi-tension' },
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
          { label: 'Bilan complet', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'Une nouvelle relation patient-soignant',
        content: [
          'Au-delà de la technologie, la télésanté a changé une chose plus profonde : le patient n’attend plus que le système vienne à lui, il choisit comment et quand il y accède. Il consulte ses résultats en ligne, prépare ses questions, mesure sa tension à la maison. Il devient un acteur de sa santé.',
          'Les soins à domicile prolongent ce mouvement. Lorsqu’une infirmière se déplace chez vous, le rapport s’inverse : le soin s’adapte à votre vie, et non l’inverse. Le temps passé ensemble sert à comprendre, à poser des questions, à apprendre à surveiller les bons signes.',
          'C’est la vision qui anime MobiSoins : des soins infirmiers planifiés, offerts à domicile par des infirmières membres de l’OIIQ, réservés en quelques minutes. Nous préparons nos premières visites au Québec — la liste d’attente est ouverte.',
        ],
      },
    ],
    faq: [
      {
        q: 'La télésanté peut-elle remplacer une consultation en personne ?',
        a: 'Pas toujours. Elle convient bien aux suivis, aux renouvellements et à la discussion de résultats. Tout ce qui exige un examen physique ou un geste technique doit se faire en personne — le règlement québécois en vigueur depuis septembre 2024 le prévoit d’ailleurs explicitement.',
      },
      {
        q: 'Mon médecin m’a remis une requête de prise de sang lors d’une téléconsultation. Dois-je me rendre au centre de prélèvement ?',
        a: 'Pas nécessairement. Une infirmière peut effectuer le prélèvement à votre domicile à partir de votre requête. C’est l’un des services que MobiSoins prépare pour ses premières visites.',
      },
      {
        q: 'MobiSoins offre-t-il des consultations vidéo ?',
        a: 'Non. MobiSoins se consacre aux soins infirmiers en personne, à domicile — précisément ceux qu’une consultation à distance ne peut pas offrir.',
      },
      {
        q: 'La télésanté est-elle adaptée aux personnes âgées ?',
        a: 'Souvent, oui, surtout par téléphone et avec l’aide d’un proche. Mais les troubles de l’audition, de la vision ou de la mémoire peuvent la compliquer. Une visite à domicile permet une évaluation beaucoup plus complète.',
      },
      {
        q: 'Que faire si mon état s’aggrave après une téléconsultation ?',
        a: 'En cas d’urgence, composez le 911. Pour un conseil non urgent, Info-Santé 811 est accessible en tout temps. N’attendez pas votre prochain rendez-vous si de nouveaux symptômes inquiétants apparaissent.',
      },
    ],
    sources: [
      { label: 'Inforoute Santé du Canada — Soins virtuels : Sondage canadien sur la santé numérique 2023', url: SOURCES_URLS.infoway },
      { label: 'Statistique Canada, Rapports sur la santé, 2026 — Satisfaction à l’égard des soins virtuels (Enquête sociale canadienne, 2023)', url: SOURCES_URLS.statcanReport },
      { label: 'Statistique Canada — Les soins de santé virtuels après la pandémie', url: SOURCES_URLS.statcanPlus },
      { label: 'Institut canadien d’information sur la santé (ICIS) — Soins virtuels : un virage majeur pour les médecins au Canada', url: SOURCES_URLS.cihi },
      { label: 'Réseau québécois de la télésanté — FAQ sur le règlement encadrant les services à distance', url: SOURCES_URLS.rqt },
      { label: 'Télésanté Québec, 2024 — Avantages et points de vigilance', url: SOURCES_URLS.rqtFiche },
      { label: 'Académie de la transformation numérique, Université Laval — NETendances 2024 : les personnes aînées connectées', url: SOURCES_URLS.netendances },
      { label: 'Santé Québec, 31 janvier 2025 — Situation des urgences au Québec', url: SOURCES_URLS.er },
    ],
    conclusion: {
      title: 'Ce qu’il faut retenir',
      content: [
        'La télésanté ne remplace pas les soins en personne — elle les complète. Et ce qu’elle ne peut pas faire à distance, une infirmière peut le faire chez vous.',
        'Consultation à l’écran, prélèvement, pansement ou suivi à la maison : c’est ce modèle hybride qui épargne réellement aux patients les déplacements et l’attente. MobiSoins prépare ses premières visites au Québec.',
      ],
    },
  },
  EN: {
    slug: 'telesante',
    tag: 'Health Innovation',
    date: 'May 2026',
    title: 'How Telehealth Is Transforming Medical Monitoring',
    subtitle:
      'In just a few years, seeing a clinician by phone or video went from exception to habit. Telehealth has solved part of Quebec’s access-to-care problem — but not all of it. No screen can draw blood, change a dressing, or take a reliable blood-pressure reading. A look at a revolution, its limits, and the missing link.',
    readTime: '9 min',
    image: '/images/articles/telesante.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'More than one in two Canadians has had a virtual visit, and about eight in ten patients say they were satisfied.',
      'Nearly 78% of virtual primary-care appointments happen… by plain telephone.',
      'Since September 26, 2024, a Quebec regulation governs telehealth: anything requiring a physical exam must happen in person.',
      'Telehealth cannot draw blood, dress a wound, inject, or vaccinate: hands-on care remains essential.',
      'The future is hybrid: the consultation on screen, the clinical care at home.',
    ],
    keyFacts: [
      { value: '54%', label: 'of Canadians have had a virtual visit (Canada Health Infoway, 2023)' },
      { value: '8 in 10', label: 'patients satisfied with their last virtual appointment (Statistics Canada, 2023)' },
      { value: '78%', label: 'of virtual primary-care appointments are by telephone only (Statistics Canada, 2023)' },
    ],
    sections: [
      {
        title: 'The starting point: access to care under pressure',
        content: [
          'To understand why telehealth took off, start with the problem it is trying to solve. In Quebec, getting a timely medical appointment remains a challenge for a large part of the population, particularly people without a family doctor. With no other option, many turn to the emergency room for problems that do not belong there.',
          'And emergency rooms are overflowing. According to the update published by Santé Québec in January 2025, the average ER length of stay was 18.8 hours, with occupancy at 115% province-wide and 141% in Montreal. Nearly 9,600 visits were being recorded every day.',
          'In that context, any solution that offers professional advice without travelling or waiting for hours is welcomed with open arms. That is exactly the promise of telehealth.',
        ],
      },
      {
        title: 'Lightning-fast adoption, accelerated by the pandemic',
        content: [
          'Before 2020, remote consultations were marginal. The pandemic changed everything in a matter of weeks. The Canadian Institute for Health Information (CIHI) found that between April 2020 and March 2021, across five Canadian provinces, 32% of physician services were delivered virtually — and as much as 42% in family medicine.',
          'Usage has since levelled off, but there is no going back. According to Canada Health Infoway’s 2023 Canadian Digital Health Survey, 54% of Canadians have had a virtual visit and 82% are interested in the option. Statistics Canada reports that in 2023, more than four in ten health-care users had at least one virtual appointment during the year.',
          'A telling detail: real-world “telehealth” is far less high-tech than people imagine. Also according to Statistics Canada, 77.9% of virtual appointments with a family doctor or nurse practitioner took place by telephone only.',
        ],
      },
      {
        title: 'What telehealth does really well',
        content: [
          'Patients like it, and the data bears that out. About eight in ten patients report being satisfied or very satisfied with their last virtual appointment, according to Statistics Canada; in Quebec, nearly 47% say they were very satisfied. And 85% of users surveyed by Infoway felt their health concern was addressed at their last virtual visit.',
          'The reasons are easy to grasp. No transport, no parking, no time off work, no waiting room shared with other sick people. For those in remote regions, with reduced mobility, or without a car, the difference is huge.',
          'Telehealth excels in several situations: renewing a prescription, discussing test results, adjusting an ongoing treatment, mental-health follow-up, getting an initial opinion on whether an in-person visit is needed. It also makes follow-ups more frequent, and therefore more proactive: a short call every two weeks is often better than a long appointment every six months.',
        ],
        quote: 'A short call every two weeks is often better than a long appointment every six months.',
      },
      {
        title: 'A Quebec legal framework now in place',
        content: [
          'Long practised in a grey zone, telehealth is now regulated in Quebec. Since September 26, 2024, a regulation specifies which health and social services may be provided remotely, and under what conditions.',
          'Three principles are worth knowing as a patient. First, services that require a physical examination are excluded: they must take place in person. Second, ongoing follow-up must include at least one in-person encounter. Third, the professional must obtain your informed consent, which includes explaining the limits of a remote consultation.',
          'In other words, lawmakers themselves recognize that telehealth complements in-person care — it does not replace it.',
        ],
      },
      {
        title: 'The limits: what a screen will never do',
        content: [
          'This is the blind spot of the digital shift. A large share of medical decisions rest on data that has to be collected from the patient: a blood draw, a specimen, a reliable blood-pressure reading, a glucose level, what a wound actually looks like. None of that travels over the phone.',
          'The scenario has become a classic. The doctor talks with you for ten minutes by phone, then concludes: “I’m sending you a requisition for blood work.” And you are back to square one: find a slot at the test centre, travel there, wait. The consultation was virtual; the journey was not.',
          'The same goes for all hands-on care: changing a dressing, removing sutures, giving an injection or vaccine, inserting or maintaining a catheter, ear irrigation. Telehealth can prescribe them; it cannot perform them.',
        ],
        list: [
          'Blood draws, urine tests, and other specimen collection',
          'Dressings, wound care, and suture removal',
          'Injections, vaccines, and intramuscular or subcutaneous medication',
          'Reliable measurement of blood pressure, blood glucose, and vital signs',
          'Physical assessment: wound, swelling, breathing, general condition',
        ],
        links: [
          { label: 'Blood draw at home', href: '/services/prise-sang' },
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'IM/SC medication', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'The digital divide: the risk of leaving the most vulnerable behind',
        content: [
          'The second blind spot concerns the people who need care most. Quebec seniors are far more connected than many assume: according to the 2024 NETendances survey by Université Laval’s Académie de la transformation numérique, 85% of people 65 and over have a home internet connection and 66% own a smartphone.',
          'But those averages hide gaps. Some seniors are still not connected, and 12% of senior internet users rate their own digital skills as low. Add hearing loss, reduced vision, cognitive impairment, or a language barrier, and a video consultation becomes an ordeal rather than a service.',
          'It is probably no coincidence that the vast majority of “virtual” appointments still happen by phone. And over the phone, the professional sees nothing: not the complexion, not the wound, not the gait, not the living environment.',
        ],
        callout: {
          label: 'Practical tip',
          text: 'For an elderly parent, prepare the remote consultation together: medication list at hand, questions written down, recent blood-pressure or glucose readings if possible, and a family member alongside to hear the instructions.',
        },
      },
      {
        title: 'The missing link: hands at home',
        content: [
          'The logical next step for telehealth is not more screens. It is a hybrid model: medical advice at a distance when that is enough, and clinical care brought to the home when it is needed.',
          'That is precisely where home nursing fits. Your doctor gives you a requisition during a teleconsultation? A nurse comes to your home to draw the sample, and the results go to the prescriber. Your blood-pressure treatment was just adjusted over the phone? A nurse measures your pressure under proper conditions and documents the trend. Just home from day surgery? The dressing is redone at home and the wound assessed by a professional.',
          'Together, the virtual consultation and the home nursing visit close the loop: the patient no longer has to travel — not for the consultation, and not for the care that follows from it.',
        ],
        quote: 'The consultation on screen, the clinical care at home: together, the two close the loop.',
        links: [
          { label: 'Blood-pressure follow-up', href: '/services/suivi-tension' },
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
          { label: 'Complete check-up', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'A new patient–caregiver relationship',
        content: [
          'Beyond the technology, telehealth changed something deeper: patients no longer wait for the system to come to them — they choose how and when to access it. They view results online, prepare their questions, measure their blood pressure at home. They become active participants in their own health.',
          'Home care extends that shift. When a nurse travels to you, the relationship flips: care adapts to your life, not the other way around. Time together is spent understanding, asking questions, and learning which signs to watch for.',
          'That is the vision behind MobiSoins: planned nursing care, delivered at home by OIIQ-registered nurses, booked in minutes. We are preparing our first visits in Quebec — the waitlist is open.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can telehealth replace an in-person consultation?',
        a: 'Not always. It works well for follow-ups, renewals, and discussing results. Anything that requires a physical exam or a hands-on procedure must happen in person — the Quebec regulation in force since September 2024 says so explicitly.',
      },
      {
        q: 'My doctor gave me a blood-work requisition during a teleconsultation. Do I have to go to a test centre?',
        a: 'Not necessarily. A nurse can draw the sample at your home based on your requisition. It is one of the services MobiSoins is preparing for its first visits.',
      },
      {
        q: 'Does MobiSoins offer video consultations?',
        a: 'No. MobiSoins focuses on in-person nursing care at home — precisely the care a remote consultation cannot provide.',
      },
      {
        q: 'Is telehealth suitable for older adults?',
        a: 'Often, yes — especially by phone and with a family member’s help. But hearing, vision, or memory difficulties can complicate it. A home visit allows a far more complete assessment.',
      },
      {
        q: 'What if my condition worsens after a teleconsultation?',
        a: 'In an emergency, call 911. For non-urgent advice, Info-Santé 811 is available around the clock. Do not wait for your next appointment if worrying new symptoms appear.',
      },
    ],
    sources: [
      { label: 'Canada Health Infoway — Virtual care: 2023 Canadian Digital Health Survey', url: SOURCES_URLS.infoway },
      { label: 'Statistics Canada, Health Reports, 2026 — Satisfaction with virtual care (Canadian Social Survey, 2023)', url: SOURCES_URLS.statcanReport },
      { label: 'Statistics Canada — Virtual health care: a post-pandemic Canada checkup', url: SOURCES_URLS.statcanPlus },
      { label: 'Canadian Institute for Health Information (CIHI) — Virtual care: a major shift for physicians in Canada', url: SOURCES_URLS.cihi },
      { label: 'Réseau québécois de la télésanté — FAQ on the regulation governing remote services', url: SOURCES_URLS.rqt },
      { label: 'Télésanté Québec, 2024 — Advantages and points of vigilance', url: SOURCES_URLS.rqtFiche },
      { label: 'Académie de la transformation numérique, Université Laval — NETendances 2024: connected seniors', url: SOURCES_URLS.netendances },
      { label: 'Santé Québec, January 31, 2025 — Update on the situation in Quebec emergency rooms', url: SOURCES_URLS.er },
    ],
    conclusion: {
      title: 'Key takeaway',
      content: [
        'Telehealth does not replace in-person care — it complements it. And what it cannot do at a distance, a nurse can do in your home.',
        'Consultation on screen; blood draw, dressing, or follow-up at home: it is this hybrid model that truly spares patients the travel and the wait. MobiSoins is preparing its first visits in Quebec.',
      ],
    },
  },
};

export default function TelesantePage() {
  return <ArticleLayout article={article} />;
}
