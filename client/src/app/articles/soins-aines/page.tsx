'use client';

import { ArticleLayout } from '../../../components/articles/ArticleLayout';
import type { ArticleData } from '../../../components/articles/ArticleLayout';

const SOURCES_URLS = {
  isq: 'https://statistique.quebec.ca/vitrine/vieillissement/themes/population/effectifs-proportions-groupes-age',
  inspqAging: 'https://www.inspq.qc.ca/le-vieillissement-au-quebec',
  inspqFalls:
    'https://www.inspq.qc.ca/securite-prevention-de-la-violence-et-des-traumatismes/prevention-des-traumatismes-non-intentionnels/dossiers/chutes-chez-les-aines',
  csbe: 'https://www.csbe.gouv.qc.ca/salle-de-presse/communique/bien-vieillir-chez-soi-transformation-simpose.html',
  rc: 'https://ici.radio-canada.ca/nouvelle/2071097/soutien-domicile-aines-sommet',
  cihi: 'https://www.cihi.ca/en/indicators/new-long-term-care-residents-who-potentially-could-have-been-cared-for-at-home',
  caregivers:
    'https://statistique.quebec.ca/en/communique/portrait-of-informal-caregiving-in-2018-more-than-1-in-5-people-in-quebec-were-caregivers',
  er: 'https://www.quebec.ca/nouvelles/actualites/details/sante-quebec-fait-le-point-sur-la-situation-des-urgences-au-quebec-60741',
  credit: 'https://cffp.recherche.usherbrooke.ca/outils-ressources/guide-mesures-fiscales/credit-maintien-domicile-aines/',
};

const article: { FR: ArticleData; EN: ArticleData } = {
  FR: {
    slug: 'soins-aines',
    tag: 'Aînés',
    date: 'Mai 2026',
    title: 'Les avantages des soins à domicile pour les aînés',
    subtitle:
      'Le Québec vieillit plus vite que son réseau de la santé ne s’adapte. Entre les listes d’attente du soutien à domicile, les urgences qui débordent et des proches aidants à bout de souffle, vieillir chez soi est devenu à la fois le souhait de la majorité et un véritable parcours du combattant. Voici ce que disent les chiffres — et ce que des soins infirmiers à domicile peuvent concrètement changer.',
    readTime: '10 min',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'En 2031, un Québécois sur quatre aura 65 ans ou plus. La grande majorité des aînés vivent — et veulent rester — à domicile.',
      'Selon la Commissaire à la santé et au bien-être, le réseau public ne répondait qu’à 10,7 % des besoins en soutien à domicile en 2023.',
      'Un aîné sur trois vivant à domicile chute chaque année : la prévention et la surveillance clinique à la maison comptent.',
      'Les soins infirmiers privés à domicile ne remplacent pas le CLSC : ils comblent les trous, sans liste d’attente.',
      'Dès 70 ans, un crédit d’impôt remboursable peut couvrir une part importante des dépenses de maintien à domicile.',
    ],
    keyFacts: [
      { value: '1 sur 4', label: 'Québécois aura 65 ans ou plus en 2031 (ISQ)' },
      { value: '10,7 %', label: 'des besoins en soutien à domicile comblés par le réseau public en 2023 (CSBE)' },
      { value: '1 sur 3', label: 'aîné vivant à domicile chute au cours d’une année (INSPQ)' },
    ],
    sections: [
      {
        title: 'Un Québec qui vieillit, et qui vieillit à la maison',
        content: [
          'Les chiffres de l’Institut de la statistique du Québec sont sans équivoque : en 2021, 1,7 million de Québécois avaient 65 ans ou plus, soit 20 % de la population. Cette proportion atteindra 25 % dès 2031. En une génération, le Québec est passé d’une personne sur six à une personne sur quatre dans ce groupe d’âge.',
          'Contrairement à une idée tenace, vieillir ne signifie pas entrer en établissement. L’INSPQ rappelle que la plupart des aînés vivent à domicile de façon relativement autonome — et que c’est encore le cas de 62 % des personnes de 85 ans et plus. La maison n’est pas une solution de rechange : c’est le lieu où se vit, de très loin, la plus grande part du vieillissement.',
          'La vraie question n’est donc pas « faut-il soigner les aînés à domicile ? » mais « comment s’assurer que les soins s’y rendent ? ». Et c’est là que le bât blesse.',
        ],
      },
      {
        title: 'Le soutien à domicile public : des besoins loin d’être comblés',
        content: [
          'En janvier 2024, la Commissaire à la santé et au bien-être (CSBE) a publié le dernier tome de son rapport « Bien vieillir chez soi ». Son diagnostic est sévère : l’écosystème québécois du soutien à domicile est jugé inadapté aux besoins actuels, « complexe, peu intégré et peu performant ». Le rapport formule 16 recommandations pour le transformer.',
          'Le chiffre qui a le plus marqué les esprits : en 2023, le réseau public n’aurait fourni que 25,4 millions d’heures de services sur les 234 millions nécessaires — soit 10,7 % des besoins. Le reste repose sur les proches, sur le privé, ou n’est tout simplement pas comblé. Au 31 mars 2024, quelque 16 500 personnes étaient encore inscrites sur la liste d’attente pour un premier service de soutien à domicile.',
          'Derrière ces nombres, des situations très concrètes : un pansement qui devrait être changé trois fois par semaine mais ne l’est que deux ; une prise de sang de suivi qui exige un transport adapté et quatre heures d’attente ; un retour de chirurgie sans personne pour surveiller la plaie les premiers jours.',
        ],
        quote: 'Le réseau public ne comblait que 10,7 % des besoins en soutien à domicile en 2023.',
      },
      {
        title: 'La plus grande crainte : l’urgence, puis la perte d’autonomie',
        content: [
          'Demandez à un aîné ce qu’il redoute le plus, et la réponse revient presque toujours : « perdre mon autonomie » et « finir à l’hôpital ». Les deux sont liés. Pour une personne âgée fragile, un long séjour sur civière est loin d’être anodin : immobilité, sommeil perturbé, risque de confusion, de déconditionnement et d’infection.',
          'Or les urgences québécoises sont sous pression constante. Selon le bilan publié par Santé Québec en janvier 2025, la durée moyenne de séjour à l’urgence était de 18,8 heures et le taux d’occupation atteignait 115 % à l’échelle du Québec — 141 % à Montréal. Pour un soin simple et planifiable, c’est rarement le bon endroit.',
          'À l’échelle canadienne, l’Institut canadien d’information sur la santé (ICIS) estime qu’environ un nouveau résident en soins de longue durée sur dix aurait pu demeurer à domicile avec le soutien approprié. Le Québec ne participe pas à cet indicateur, mais le message vaut partout : une partie des hébergements est évitable quand les soins se rendent à la maison à temps.',
        ],
      },
      {
        title: 'Préserver l’autonomie… réellement',
        content: [
          'L’autonomie ne se préserve pas avec de bonnes intentions, mais avec de la régularité. Une tension artérielle suivie chaque semaine, une glycémie bien contrôlée, des médicaments pris correctement, une plaie surveillée avant qu’elle ne s’infecte : ce sont ces gestes discrets qui permettent de rester chez soi.',
          'À domicile, l’infirmière adapte les soins aux habitudes de la personne plutôt que l’inverse. Le soin a lieu dans la cuisine ou le salon, à une heure qui respecte la routine, sans transport ni salle d’attente. Pour une personne à mobilité réduite, éviter un seul déplacement, c’est éviter la fatigue d’une journée entière — et un risque de chute de plus.',
          'Surtout, l’infirmière voit le milieu de vie réel. Elle remarque le pilulier mal rempli, le réfrigérateur vide, les souliers inadéquats, la perte de poids que personne n’avait notée. Ces observations, impossibles en quinze minutes de clinique, sont souvent celles qui préviennent la prochaine hospitalisation.',
        ],
        links: [
          { label: 'Soins à domicile pour aînés', href: '/services/soins-domicile-aines' },
          { label: 'Suivi de la tension', href: '/services/suivi-tension-aines' },
          { label: 'Aide à la médication', href: '/services/aide-medication' },
        ],
      },
      {
        title: 'Les chutes : le risque numéro un à la maison',
        content: [
          'L’INSPQ estime qu’environ un million d’aînés vivent à domicile au Québec, et que le tiers d’entre eux chutera au cours de l’année. Les chutes entraînent en moyenne plus de 21 000 hospitalisations par an au Québec, dont 71 % concernent des personnes de 65 ans et plus, ainsi que plus de 1 000 décès annuels, très majoritairement chez les aînés.',
          'Une chute est rarement le fruit du hasard. Elle résulte souvent d’une combinaison de facteurs : médicaments qui causent des étourdissements, tension trop basse au lever, déshydratation, faiblesse musculaire, éclairage insuffisant, tapis ou fils qui traînent. Plusieurs de ces facteurs peuvent être repérés par une infirmière lors d’une visite à domicile.',
          'Revoir la médication avec le pharmacien et le médecin, mesurer la tension couché puis debout, enseigner comment se relever, recommander une évaluation en ergothérapie : la prévention des chutes se joue dans le milieu de vie, pas dans un bureau.',
        ],
        callout: {
          label: 'À surveiller',
          text: 'Étourdissements au lever, chute récente même sans blessure, peur de tomber qui limite les sorties, nouveau médicament : parlez-en à une infirmière ou à votre médecin. Après une chute avec coup à la tête, douleur intense ou incapacité de se relever, composez le 911.',
        },
      },
      {
        title: 'Un impact direct sur la santé mentale',
        content: [
          'Rester chez soi, c’est conserver ses repères : son fauteuil, son quartier, ses voisins, son animal de compagnie, ses souvenirs. Pour une personne âgée, et plus encore pour une personne vivant avec des troubles cognitifs, cet environnement familier est un facteur de stabilité.',
          'L’isolement demeure toutefois un risque réel chez les aînés qui vivent seuls. La visite régulière d’une même infirmière devient alors plus qu’un acte de soin : c’est un contact humain prévisible, une personne de confiance qui remarque un changement d’humeur, une perte d’appétit, un désintérêt inhabituel — et qui peut orienter vers les bonnes ressources.',
          'Se sentir soigné sans se sentir « placé » change profondément le rapport à la maladie. On demeure une personne chez elle, et non un patient dans un lit.',
        ],
      },
      {
        title: 'Un répit pour les proches aidants',
        content: [
          'Derrière presque chaque aîné qui vit à domicile, il y a un proche qui tient le système à bout de bras. Selon l’Institut de la statistique du Québec, environ 1,5 million de Québécois de 15 ans et plus — plus d’une personne sur cinq — étaient proches aidants en 2018. Près de 60 % d’entre eux occupaient un emploi en même temps.',
          'Conduire un parent à ses rendez-vous, gérer ses médicaments, surveiller une plaie sans formation : la charge est lourde, et l’inquiétude constante. « Est-ce que je fais bien les choses ? Est-ce que c’est normal que ce soit rouge ? »',
          'Confier les soins cliniques à une infirmière ne remplace pas le proche aidant ; cela lui redonne son rôle de fils, de fille ou de conjoint. L’infirmière prend en charge le geste technique, enseigne ce qu’il faut surveiller et devient une interlocutrice à qui poser ses questions. Pour bien des familles, c’est la différence entre tenir le coup et s’épuiser.',
        ],
      },
      {
        title: 'Combien ça coûte ? Le crédit d’impôt que trop d’aînés ignorent',
        content: [
          'Le coût est souvent la première objection aux soins privés à domicile, et il est légitime d’en parler franchement. Les soins infirmiers privés ne sont généralement pas couverts par la RAMQ. En revanche, plusieurs mécanismes allègent la facture.',
          'Le principal est le crédit d’impôt pour maintien à domicile des aînés, offert par le gouvernement du Québec aux personnes de 70 ans et plus. C’est un crédit remboursable — il est versé même si vous ne payez pas d’impôt — dont le taux est bonifié graduellement : 38 % des dépenses admissibles en 2024, 39 % en 2025 et 40 % en 2026, jusqu’à un plafond annuel qui varie selon votre degré d’autonomie. Les services infirmiers figurent parmi les services admissibles.',
          'À cela peuvent s’ajouter le remboursement par une assurance collective ou privée, ainsi que les crédits d’impôt pour frais médicaux, au fédéral comme au provincial. Les règles comportent des conditions : conservez tous vos reçus et validez votre situation auprès de Revenu Québec ou d’un spécialiste en fiscalité.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Le crédit d’impôt pour maintien à domicile peut être demandé par versements anticipés, en cours d’année, plutôt que d’attendre la déclaration de revenus. Renseignez-vous auprès de Revenu Québec.',
        },
      },
      {
        title: 'Où MobiSoins s’inscrit dans ce portrait',
        content: [
          'MobiSoins ne prétend pas remplacer le CLSC, le médecin de famille ou l’urgence. Notre rôle est de combler l’espace entre les trois : des soins infirmiers planifiés, donnés à la maison par des infirmières membres de l’OIIQ, sans liste d’attente de plusieurs mois et sans déplacement.',
          'Concrètement : prises de sang et prélèvements, pansements et soins de plaies, suivi de la tension et du diabète, aide à la médication, vaccination, injections prescrites. Vous réservez en quelques minutes, pour vous-même ou pour un parent, et vous savez à l’avance qui vient et quand.',
          'Nous préparons actuellement nos premières visites au Québec. En vous inscrivant à la liste d’attente, vous nous indiquez les soins dont votre famille a besoin et la région où vous habitez — c’est ce qui guide notre déploiement.',
        ],
        links: [
          { label: 'Prise de sang à domicile', href: '/services/prise-sang' },
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
          { label: 'Vaccin contre la grippe', href: '/services/grippe' },
        ],
      },
    ],
    faq: [
      {
        q: 'Quelle est la différence entre le soutien à domicile du CLSC et des soins infirmiers privés ?',
        a: 'Le soutien à domicile du CLSC est public et gratuit, mais offert selon une évaluation des besoins et la disponibilité des ressources, ce qui peut entraîner des délais. Les soins infirmiers privés sont payants, mais accessibles rapidement et au moment qui vous convient. Les deux peuvent se compléter.',
      },
      {
        q: 'À partir de quel âge a-t-on droit au crédit d’impôt pour maintien à domicile ?',
        a: 'À partir de 70 ans. Il s’agit d’un crédit remboursable du gouvernement du Québec, dont le taux atteint 40 % des dépenses admissibles en 2026, sous réserve de plafonds. Vérifiez votre admissibilité auprès de Revenu Québec.',
      },
      {
        q: 'Puis-je réserver une infirmière pour mon parent si j’habite une autre ville ?',
        a: 'Oui. Un proche peut s’occuper de la réservation pour un parent. Il est recommandé qu’une personne de confiance soit présente lors de la première visite si l’aîné le souhaite.',
      },
      {
        q: 'Les soins à domicile sont-ils aussi sécuritaires qu’en clinique ?',
        a: 'Pour les soins qui s’y prêtent, oui : l’infirmière applique les mêmes protocoles cliniques, utilise du matériel stérile à usage unique et repart avec les déchets biomédicaux. Les situations urgentes ou instables relèvent toutefois de l’hôpital.',
      },
      {
        q: 'Que faire en cas d’urgence ?',
        a: 'MobiSoins offre des soins planifiés et non urgents. En cas d’urgence, composez le 911. Pour un conseil de santé non urgent, appelez Info-Santé au 811.',
      },
    ],
    sources: [
      { label: 'Institut de la statistique du Québec — Vitrine statistique sur le vieillissement : effectifs et proportions par groupe d’âge', url: SOURCES_URLS.isq },
      { label: 'Institut national de santé publique du Québec (INSPQ) — Le vieillissement au Québec', url: SOURCES_URLS.inspqAging },
      { label: 'INSPQ — Chutes chez les aînés', url: SOURCES_URLS.inspqFalls },
      { label: 'Commissaire à la santé et au bien-être (CSBE), janvier 2024 — Bien vieillir chez soi, tome 4 : une transformation qui s’impose', url: SOURCES_URLS.csbe },
      { label: 'Radio-Canada, 2024 — Soutien à domicile : données du rapport du CSBE et liste d’attente', url: SOURCES_URLS.rc },
      { label: 'Institut canadien d’information sur la santé (ICIS) — Nouveaux résidents en soins de longue durée qui auraient pu recevoir des soins à domicile', url: SOURCES_URLS.cihi },
      { label: 'Institut de la statistique du Québec — Portrait de la proche aidance en 2018', url: SOURCES_URLS.caregivers },
      { label: 'Santé Québec, 31 janvier 2025 — Situation des urgences au Québec', url: SOURCES_URLS.er },
      { label: 'Chaire en fiscalité et en finances publiques, Université de Sherbrooke — Crédit d’impôt pour maintien à domicile des aînés', url: SOURCES_URLS.credit },
    ],
    conclusion: {
      title: 'Ce qu’il faut retenir',
      content: [
        'Vieillir chez soi n’est pas un luxe : c’est ce que souhaitent la plupart des aînés, et ce qui devient possible lorsque les soins se rendent jusqu’à eux.',
        'Le réseau public ne suffit pas à la demande, et les familles ne peuvent pas tout porter. Des soins infirmiers réguliers à domicile préservent l’autonomie, préviennent les complications et redonnent du souffle aux proches. MobiSoins prépare ses premières visites au Québec.',
      ],
    },
  },
  EN: {
    slug: 'soins-aines',
    tag: 'Seniors',
    date: 'May 2026',
    title: 'The Benefits of Home Care for Seniors',
    subtitle:
      'Quebec is aging faster than its health network can adapt. Between home-support waitlists, overflowing emergency rooms, and exhausted family caregivers, aging at home has become both what most people want and a genuine obstacle course. Here is what the numbers say — and what home nursing care can concretely change.',
    readTime: '10 min',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'By 2031, one in four Quebecers will be 65 or older. The vast majority of seniors live — and want to stay — at home.',
      'According to Quebec’s Health and Welfare Commissioner, the public network met only 10.7% of home-support needs in 2023.',
      'One in three seniors living at home falls each year: prevention and clinical monitoring at home matter.',
      'Private home nursing does not replace the CLSC: it fills the gaps, with no waitlist.',
      'From age 70, a refundable tax credit can cover a significant share of home-support expenses.',
    ],
    keyFacts: [
      { value: '1 in 4', label: 'Quebecers will be 65 or older by 2031 (ISQ)' },
      { value: '10.7%', label: 'of home-support needs met by the public network in 2023 (CSBE)' },
      { value: '1 in 3', label: 'seniors living at home falls in a given year (INSPQ)' },
    ],
    sections: [
      {
        title: 'A Quebec that is aging — and aging at home',
        content: [
          'The figures from the Institut de la statistique du Québec are unambiguous: in 2021, 1.7 million Quebecers were 65 or older — 20% of the population. That share will reach 25% by 2031. Within a generation, Quebec has gone from one person in six to one in four in this age group.',
          'Contrary to a stubborn belief, aging does not mean moving into a facility. The INSPQ points out that most seniors live at home with relative independence — and that this is still true of 62% of people aged 85 and over. Home is not the fallback option: it is where, by far, most aging actually happens.',
          'So the real question is not “should seniors be cared for at home?” but “how do we make sure care actually gets there?” And that is where things break down.',
        ],
      },
      {
        title: 'Public home support: needs far from being met',
        content: [
          'In January 2024, Quebec’s Health and Welfare Commissioner (CSBE) released the final volume of her report “Bien vieillir chez soi” (Aging Well at Home). The diagnosis is harsh: Quebec’s home-support ecosystem is deemed ill-suited to current needs — “complex, poorly integrated and underperforming.” The report makes 16 recommendations to transform it.',
          'The figure that made headlines: in 2023, the public network reportedly delivered only 25.4 million hours of service out of the 234 million needed — 10.7% of needs. The rest falls to families, to the private sector, or simply goes unmet. As of March 31, 2024, some 16,500 people were still on the waitlist for a first home-support service.',
          'Behind these numbers are very concrete situations: a dressing that should be changed three times a week but only gets two; follow-up blood work that requires adapted transport and a four-hour wait; a return home from surgery with no one to watch the wound during the first few days.',
        ],
        quote: 'The public network met only 10.7% of home-support needs in 2023.',
      },
      {
        title: 'The biggest fear: the ER, then losing independence',
        content: [
          'Ask an older adult what they dread most, and the answer is almost always the same: “losing my independence” and “ending up in hospital.” The two are linked. For a frail older person, a long stay on a stretcher is far from harmless: immobility, disrupted sleep, and a risk of confusion, deconditioning, and infection.',
          'Yet Quebec’s emergency rooms are under constant pressure. According to the update published by Santé Québec in January 2025, the average ER length of stay was 18.8 hours and the occupancy rate reached 115% province-wide — 141% in Montreal. For simple care that can be scheduled, it is rarely the right place.',
          'Across Canada, the Canadian Institute for Health Information (CIHI) estimates that around one in ten new long-term-care residents could potentially have remained at home with the right support. Quebec does not take part in this indicator, but the message applies everywhere: some admissions are avoidable when care reaches the home in time.',
        ],
      },
      {
        title: 'Truly preserving independence',
        content: [
          'Independence is not preserved with good intentions but with consistency. Blood pressure checked every week, well-controlled blood sugar, medications taken correctly, a wound monitored before it becomes infected: these quiet routines are what allow a person to stay at home.',
          'At home, the nurse adapts care to the person’s habits rather than the other way around. Care happens in the kitchen or living room, at a time that respects their routine, with no transport and no waiting room. For someone with reduced mobility, avoiding a single outing means avoiding a full day of fatigue — and one more fall risk.',
          'Above all, the nurse sees the real living environment. She notices the badly filled pill organizer, the empty fridge, the unsuitable footwear, the weight loss no one had spotted. These observations — impossible in a fifteen-minute clinic slot — are often the ones that prevent the next hospital stay.',
        ],
        links: [
          { label: 'At-home care for seniors', href: '/services/soins-domicile-aines' },
          { label: 'Blood-pressure follow-up', href: '/services/suivi-tension-aines' },
          { label: 'Medication assistance', href: '/services/aide-medication' },
        ],
      },
      {
        title: 'Falls: the number-one risk at home',
        content: [
          'The INSPQ estimates that about one million seniors live at home in Quebec, and that one third of them will fall during the year. Falls lead to more than 21,000 hospitalizations a year in Quebec on average — 71% of them among people 65 and over — and more than 1,000 deaths annually, overwhelmingly among seniors.',
          'A fall is rarely pure chance. It usually results from a combination of factors: medications that cause dizziness, blood pressure that drops on standing, dehydration, muscle weakness, poor lighting, loose rugs or trailing cords. Several of these can be spotted by a nurse during a home visit.',
          'Reviewing medications with the pharmacist and physician, measuring blood pressure lying down and then standing, teaching how to get back up, recommending an occupational-therapy assessment: fall prevention happens in the living environment, not in an office.',
        ],
        callout: {
          label: 'Watch for',
          text: 'Dizziness on standing, a recent fall even without injury, fear of falling that limits outings, a new medication: raise it with a nurse or your doctor. After a fall involving a blow to the head, severe pain, or inability to get up, call 911.',
        },
      },
      {
        title: 'A direct impact on mental health',
        content: [
          'Staying at home means keeping your bearings: your armchair, your neighbourhood, your neighbours, your pet, your memories. For an older adult — and even more so for someone living with cognitive impairment — this familiar environment is a source of stability.',
          'Isolation nonetheless remains a real risk for seniors who live alone. A regular visit from the same nurse then becomes more than clinical care: it is predictable human contact, a trusted person who notices a change in mood, a loss of appetite, an unusual lack of interest — and who can point toward the right resources.',
          'Feeling cared for without feeling “placed” profoundly changes one’s relationship with illness. You remain a person in your own home, not a patient in a bed.',
        ],
      },
      {
        title: 'Relief for family caregivers',
        content: [
          'Behind almost every senior living at home is a family member holding the system together. According to the Institut de la statistique du Québec, about 1.5 million Quebecers aged 15 and over — more than one in five — were caregivers in 2018. Nearly 60% of them held a job at the same time.',
          'Driving a parent to appointments, managing medications, monitoring a wound with no training: the load is heavy and the worry constant. “Am I doing this right? Is it normal for it to be this red?”',
          'Entrusting clinical care to a nurse does not replace the caregiver; it gives them back their role as son, daughter, or spouse. The nurse handles the technical care, teaches what to watch for, and becomes someone to bring questions to. For many families, that is the difference between coping and burning out.',
        ],
      },
      {
        title: 'What does it cost? The tax credit too many seniors overlook',
        content: [
          'Cost is often the first objection to private home care, and it deserves a frank answer. Private nursing care is generally not covered by RAMQ. Several mechanisms, however, lighten the bill.',
          'The main one is Quebec’s tax credit for home-support services for seniors, available to people aged 70 and over. It is a refundable credit — paid even if you owe no tax — with a rate that is being raised gradually: 38% of eligible expenses in 2024, 39% in 2025, and 40% in 2026, up to an annual ceiling that depends on your level of autonomy. Nursing services are among the eligible services.',
          'On top of this, there may be reimbursement from group or private insurance, as well as federal and provincial medical-expense tax credits. The rules come with conditions: keep all your receipts and confirm your situation with Revenu Québec or a tax professional.',
        ],
        callout: {
          label: 'Good to know',
          text: 'The home-support tax credit can be claimed through advance payments during the year rather than waiting for your tax return. Ask Revenu Québec for details.',
        },
      },
      {
        title: 'Where MobiSoins fits in',
        content: [
          'MobiSoins does not claim to replace the CLSC, the family doctor, or the emergency room. Our role is to fill the space between the three: planned nursing care, delivered at home by OIIQ-registered nurses, with no months-long waitlist and no travel.',
          'In practice: blood draws and specimen collection, dressings and wound care, blood-pressure and diabetes follow-up, medication assistance, vaccination, prescribed injections. You book in minutes, for yourself or for a parent, and you know in advance who is coming and when.',
          'We are currently preparing our first visits in Quebec. By joining the waitlist, you tell us which care your family needs and where you live — and that is what guides our rollout.',
        ],
        links: [
          { label: 'Blood draw at home', href: '/services/prise-sang' },
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
          { label: 'Flu vaccine', href: '/services/grippe' },
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between CLSC home support and private nursing care?',
        a: 'CLSC home support is public and free, but provided according to a needs assessment and available resources, which can mean delays. Private nursing care is paid, but available quickly and at a time that suits you. The two can complement each other.',
      },
      {
        q: 'At what age do you qualify for the home-support tax credit?',
        a: 'From age 70. It is a refundable Quebec government credit whose rate reaches 40% of eligible expenses in 2026, subject to ceilings. Check your eligibility with Revenu Québec.',
      },
      {
        q: 'Can I book a nurse for my parent if I live in another city?',
        a: 'Yes. A family member can handle the booking for a parent. We recommend that a trusted person be present for the first visit if the senior wishes.',
      },
      {
        q: 'Is home care as safe as care in a clinic?',
        a: 'For care that is suited to it, yes: the nurse follows the same clinical protocols, uses sterile single-use supplies, and takes biomedical waste away with her. Urgent or unstable situations, however, belong in hospital.',
      },
      {
        q: 'What should I do in an emergency?',
        a: 'MobiSoins provides planned, non-urgent care. In an emergency, call 911. For non-urgent health advice, call Info-Santé at 811.',
      },
    ],
    sources: [
      { label: 'Institut de la statistique du Québec — Aging showcase: population counts and shares by age group', url: SOURCES_URLS.isq },
      { label: 'Institut national de santé publique du Québec (INSPQ) — Aging in Quebec', url: SOURCES_URLS.inspqAging },
      { label: 'INSPQ — Falls among seniors', url: SOURCES_URLS.inspqFalls },
      { label: 'Commissaire à la santé et au bien-être (CSBE), January 2024 — Bien vieillir chez soi, volume 4', url: SOURCES_URLS.csbe },
      { label: 'Radio-Canada, 2024 — Home support: CSBE report data and waitlist', url: SOURCES_URLS.rc },
      { label: 'Canadian Institute for Health Information (CIHI) — New long-term care residents who potentially could have been cared for at home', url: SOURCES_URLS.cihi },
      { label: 'Institut de la statistique du Québec — Portrait of informal caregiving in 2018', url: SOURCES_URLS.caregivers },
      { label: 'Santé Québec, January 31, 2025 — Update on the situation in Quebec emergency rooms', url: SOURCES_URLS.er },
      { label: 'Chaire en fiscalité et en finances publiques, Université de Sherbrooke — Tax credit for home-support services for seniors', url: SOURCES_URLS.credit },
    ],
    conclusion: {
      title: 'Key takeaway',
      content: [
        'Aging at home is not a luxury: it is what most seniors want, and what becomes possible when care comes to them.',
        'The public network cannot keep up with demand, and families cannot carry everything. Regular nursing care at home preserves independence, prevents complications, and gives caregivers room to breathe. MobiSoins is preparing its first visits in Quebec.',
      ],
    },
  },
};

export default function SoinsAinesPage() {
  return <ArticleLayout article={article} />;
}
