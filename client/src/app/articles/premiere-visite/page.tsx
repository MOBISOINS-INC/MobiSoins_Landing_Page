'use client';

import { ArticleLayout } from '../../../components/articles/ArticleLayout';
import type { ArticleData } from '../../../components/articles/ArticleLayout';

const article: { FR: ArticleData; EN: ArticleData } = {
  FR: {
    slug: 'premiere-visite',
    tag: 'Guide pratique',
    date: 'Mai 2026',
    title: 'Comment préparer votre première visite avec MobiSoins',
    subtitle:
      'Faire entrer une professionnelle de la santé chez soi pour la première fois soulève de vraies questions : qui vient, que va-t-elle faire, que dois-je préparer, combien de temps cela prend-il ? Voici le guide complet, étape par étape, pour que cette première visite soit simple, sécuritaire et réellement utile.',
    readTime: '8 min',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'Trois documents suffisent : carte d’assurance maladie, liste de médicaments à jour, ordonnance ou requête s’il y a lieu.',
      'Une chaise, une table dégagée et un bon éclairage : pas besoin de transformer votre salon en clinique.',
      'Vous pouvez vérifier le droit d’exercice de toute infirmière au Tableau de l’OIIQ, avant même qu’elle sonne à la porte.',
      'La première visite sert d’abord à vous écouter : vos symptômes, vos inquiétudes, vos objectifs.',
    ],
    sections: [
      {
        title: 'Pourquoi tant de Québécois attendent pour un soin simple',
        content: [
          'Une prise de sang, un changement de pansement, le retrait de points de suture, une injection mensuelle : ce sont des soins courts, que les infirmières réalisent tous les jours. Pourtant, au Québec, y accéder peut occuper une demi-journée — parfois bien davantage. Il faut obtenir un rendez-vous au centre de prélèvement, prendre congé, trouver du stationnement, patienter dans une salle d’attente, puis refaire le trajet en sens inverse.',
          'Pour une personne en pleine forme, c’est un irritant. Pour une personne âgée qui ne conduit plus, un parent seul avec un nourrisson, quelqu’un qui sort d’une chirurgie ou qui vit avec une maladie chronique, c’est un véritable obstacle. Résultat : des suivis reportés, des pansements changés trop tard, des bilans sanguins qu’on remet à « la semaine prochaine ».',
          'MobiSoins est né exactement de ce constat. L’un de nos fondateurs a vu sa mère passer deux journées entières à l’hôpital, à Montréal, pour un soin qui ne demandait que quelques minutes. L’idée est simple : si le soin peut être donné de façon sécuritaire à la maison, c’est l’infirmière qui se déplace — pas vous.',
        ],
        quote: 'Si le soin peut être donné de façon sécuritaire à la maison, c’est l’infirmière qui se déplace — pas vous.',
      },
      {
        title: 'Avant la visite : les documents à rassembler',
        content: [
          'Une première visite efficace commence par une information complète. Plus l’infirmière dispose d’un portrait fidèle de votre santé, plus son évaluation sera juste et moins vous aurez à répéter votre histoire. Prenez dix minutes, la veille, pour réunir les éléments suivants.',
        ],
        list: [
          'Votre carte d’assurance maladie (RAMQ) et, si vous en avez une, votre carte d’assurance collective ou privée.',
          'Votre liste de médicaments à jour, incluant les produits en vente libre, les vitamines et les produits naturels. Votre pharmacien peut vous en imprimer une en quelques minutes.',
          'Votre ordonnance ou votre requête de laboratoire, si le soin en exige une (prise de sang, injection, certains pansements).',
          'Vos résultats d’examens récents et le résumé de votre dernière hospitalisation, le cas échéant.',
          'La liste de vos allergies connues — médicaments, latex, adhésifs, aliments.',
          'Les coordonnées de votre médecin de famille, de votre IPS ou de votre clinique, si vous en avez une.',
        ],
        callout: {
          label: 'Conseil d’infirmière',
          text: 'Déposez tous vos contenants de médicaments dans un même sac et laissez-le sur la table. C’est la façon la plus fiable de vérifier ce que vous prenez réellement — et c’est souvent là que l’on découvre des doublons ou des produits périmés.',
        },
      },
      {
        title: 'Préparer l’espace : simple, propre, bien éclairé',
        content: [
          'Votre domicile n’a pas à ressembler à une clinique. L’infirmière apporte son matériel stérile et sait s’adapter à tous les milieux de vie, du studio au bungalow. Ce qui l’aide vraiment tient en quelques gestes.',
          'Choisissez une pièce calme, avec une chaise stable ou un fauteuil où vous êtes à l’aise, et une surface dégagée à proximité — un coin de table suffit. Un bon éclairage est essentiel pour un prélèvement ou un soin de plaie : ouvrez les rideaux ou approchez une lampe. Assurez-vous qu’un lavabo est accessible pour le lavage des mains.',
          'Si vous avez des animaux, placez-les dans une autre pièce le temps du soin : même le chien le plus doux peut s’agiter devant une inconnue, et un environnement propre réduit le risque d’infection. Enfin, portez des vêtements amples qui dégagent facilement la zone à traiter — des manches qui se relèvent pour une prise de sang, par exemple.',
        ],
      },
      {
        title: 'La grande inquiétude : « Qui entre chez moi ? »',
        content: [
          'C’est la question que l’on nous pose le plus souvent, et elle est parfaitement légitime. Ouvrir sa porte à quelqu’un que l’on ne connaît pas — a fortiori quand on est malade, âgé ou seul — demande de la confiance. Cette confiance doit reposer sur des faits vérifiables, pas sur des promesses.',
          'Au Québec, le titre d’infirmière est réservé par la loi. Pour l’utiliser et exercer, il faut être inscrite au Tableau de l’Ordre des infirmières et infirmiers du Québec (OIIQ), respecter un code de déontologie et détenir une assurance responsabilité professionnelle. Toutes les infirmières de MobiSoins sont membres de l’OIIQ.',
          'Mieux encore : vous pouvez le vérifier vous-même. L’OIIQ met à la disposition du public un outil en ligne, « Vérifier le droit d’exercice », qui confirme en quelques secondes qu’une personne est bel et bien autorisée à exercer. Avant la visite, vous connaîtrez le nom de votre infirmière ; rien ne vous empêche de faire la vérification.',
          'Si cela vous rassure, demandez à un proche d’être présent lors de la première visite. C’est courant, c’est bienvenu, et cela permet à votre proche aidant d’entendre les mêmes explications que vous.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Une professionnelle sérieuse ne s’offusquera jamais que vous lui demandiez de s’identifier. Au contraire : c’est un bon réflexe, que nous encourageons.',
        },
      },
      {
        title: 'Pendant la visite : à quoi vous attendre, minute par minute',
        content: [
          'La première visite est généralement un peu plus longue que les suivantes, parce qu’elle sert à établir le portrait de départ. Elle se déroule le plus souvent en quatre temps.',
          'D’abord, l’accueil et l’identification : l’infirmière se présente, confirme votre identité et le soin prévu, et se lave les mains. Ensuite vient l’évaluation : elle passe en revue vos antécédents, vos médicaments et vos allergies, prend vos signes vitaux au besoin et vous pose des questions sur vos symptômes et votre quotidien.',
          'Puis le soin lui-même — prélèvement, pansement, injection, vaccin, suivi de tension ou de glycémie — réalisé selon les mêmes protocoles cliniques qu’en établissement, avec du matériel stérile à usage unique. L’infirmière vous explique chaque geste avant de le poser et s’assure de votre consentement.',
          'Enfin, l’enseignement et la suite : ce qu’il faut surveiller, quand s’inquiéter, quand aura lieu la prochaine visite. Les déchets biomédicaux, comme les aiguilles, repartent avec elle dans un contenant sécurisé. Vous n’avez rien à nettoyer.',
        ],
        links: [
          { label: 'Prise de sang à domicile', href: '/services/prise-sang' },
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Retrait de points', href: '/services/retrait-points' },
        ],
      },
      {
        title: 'Exprimez vos besoins — tous vos besoins',
        content: [
          'En clinique, les rendez-vous sont minutés et bien des patients repartent sans avoir posé la question qui les préoccupait vraiment. À la maison, le rythme est différent. Profitez-en.',
          'Notez vos questions à l’avance, sur papier ou dans votre téléphone. Décrivez vos symptômes concrètement : depuis quand, à quelle fréquence, ce qui les soulage ou les aggrave. Parlez aussi de ce qui ne figure dans aucun dossier — la peur de tomber dans la douche, la difficulté à ouvrir un pilulier, le sommeil qui se dégrade, l’épuisement d’un conjoint aidant. Ces informations changent un plan de soins.',
          'Il n’y a pas de question trop simple. Comprendre votre traitement est l’un des meilleurs prédicteurs du fait que vous le suivrez.',
        ],
        list: [
          'Quel est l’objectif de ce soin, et comment saurai-je qu’il fonctionne ?',
          'Quels signes doivent m’amener à vous rappeler — ou à consulter en urgence ?',
          'Mes médicaments peuvent-ils interagir entre eux ?',
          'À quelle fréquence aurai-je besoin d’un suivi ?',
          'Qui reçoit mes résultats, et dans quel délai ?',
        ],
      },
      {
        title: 'Ce que fait réellement une infirmière à domicile',
        content: [
          'On réduit souvent le travail infirmier à des gestes techniques : piquer, panser, injecter. La réalité est beaucoup plus large. Au Québec, la Loi sur les infirmières et les infirmiers confie à l’infirmière l’évaluation de l’état de santé, la surveillance clinique et le suivi des personnes présentant des problèmes de santé complexes, parmi un ensemble d’activités qui lui sont réservées.',
          'Concrètement, à domicile, votre infirmière observe ce qu’aucune salle d’examen ne montre : comment vous vous déplacez dans votre propre cuisine, où sont rangés vos médicaments, si le tapis du couloir risque de vous faire trébucher, si vous mangez à votre faim. Elle détecte les signes précoces de complication — une plaie qui rougit, une tension qui grimpe, une confusion nouvelle — et sait quand il faut alerter votre médecin.',
          'C’est cette combinaison du geste technique et du jugement clinique, exercée dans votre milieu de vie réel, qui fait la valeur des soins à domicile.',
        ],
        links: [
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
          { label: 'Suivi de la tension artérielle', href: '/services/suivi-tension' },
          { label: 'Aide à la médication', href: '/services/aide-medication' },
        ],
      },
      {
        title: 'Après la visite : le suivi fait toute la différence',
        content: [
          'Un soin isolé règle un problème ponctuel ; un suivi construit une meilleure santé. À la fin de la visite, assurez-vous de savoir ce qui vient ensuite : la date de la prochaine visite s’il y a lieu, les consignes à suivre d’ici là, et la personne à joindre si quelque chose change.',
          'Conservez au même endroit vos consignes, votre liste de médicaments et vos résultats. Si vous avez un médecin de famille ou une IPS, informez-les des soins reçus : la continuité entre les professionnels est l’un des meilleurs remparts contre les erreurs et les examens en double.',
          'Enfin, conservez vos reçus. Les soins infirmiers privés ne sont généralement pas couverts par la RAMQ, mais plusieurs régimes d’assurance collective les remboursent en tout ou en partie, et les frais de soins infirmiers peuvent donner droit à des crédits d’impôt pour frais médicaux. Vérifiez votre contrat d’assurance et, au besoin, consultez Revenu Québec ou un comptable pour votre situation précise.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ai-je besoin d’une ordonnance pour recevoir une infirmière à domicile ?',
        a: 'Cela dépend du soin. Une évaluation de santé, un suivi de tension ou de l’enseignement n’exigent pas d’ordonnance. Une prise de sang, l’administration d’un médicament ou certains traitements en nécessitent une. En cas de doute, l’équipe vous le précisera au moment de la réservation.',
      },
      {
        q: 'Les soins de MobiSoins sont-ils couverts par la RAMQ ?',
        a: 'Non. Comme la plupart des soins infirmiers privés à domicile, ils ne sont pas couverts par le régime public. Plusieurs assurances collectives ou privées remboursent toutefois les soins infirmiers, et ces frais peuvent être admissibles aux crédits d’impôt pour frais médicaux. Conservez vos reçus et vérifiez votre contrat.',
      },
      {
        q: 'Comment savoir si mon infirmière est réellement autorisée à exercer ?',
        a: 'Toutes les infirmières de MobiSoins sont membres de l’OIIQ. Vous pouvez le confirmer vous-même grâce à l’outil public « Vérifier le droit d’exercice » sur le site de l’Ordre.',
      },
      {
        q: 'Un proche peut-il être présent pendant la visite ?',
        a: 'Oui, et c’est même recommandé lors d’une première visite, en particulier pour les personnes âgées ou lorsque le proche participe aux soins au quotidien.',
      },
      {
        q: 'MobiSoins remplace-t-il l’urgence ou mon médecin ?',
        a: 'Non. MobiSoins offre des soins infirmiers planifiés et non urgents. En cas d’urgence, composez le 911. Pour un conseil de santé non urgent, Info-Santé 811 est accessible en tout temps.',
      },
    ],
    sources: [
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) — Champ d’exercice et activités réservées',
        url: 'https://www.oiiq.org/pratique-professionnelle/exercice-infirmier/champ-exercice-activites-reservees',
      },
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) — Vérifier le droit d’exercice',
        url: 'https://www.oiiq.org/verifier-le-droit-d-exercice',
      },
    ],
    conclusion: {
      title: 'Ce qu’il faut retenir',
      content: [
        'Une première visite bien préparée, c’est dix minutes de préparation pour des mois de suivi plus simple, plus humain et centré sur vos besoins réels.',
        'Rassemblez vos documents, dégagez un coin de table, notez vos questions — et laissez l’infirmière venir à vous. MobiSoins prépare ses premières visites au Québec : inscrivez-vous pour être parmi les premiers servis.',
      ],
    },
  },
  EN: {
    slug: 'premiere-visite',
    tag: 'Practical Guide',
    date: 'May 2026',
    title: 'How to Prepare for Your First Visit with MobiSoins',
    subtitle:
      'Letting a health professional into your home for the first time raises real questions: who is coming, what will she do, what should I prepare, how long will it take? Here is the complete step-by-step guide to a first visit that is simple, safe, and genuinely useful.',
    readTime: '8 min',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'Three documents are enough: health insurance card, an up-to-date medication list, and a prescription or lab requisition if one applies.',
      'A chair, a clear table, and good lighting — there is no need to turn your living room into a clinic.',
      'You can verify any nurse’s right to practise on the OIIQ public register before she even rings the doorbell.',
      'The first visit is, above all, about listening to you: your symptoms, your worries, your goals.',
    ],
    sections: [
      {
        title: 'Why so many Quebecers wait for a simple procedure',
        content: [
          'A blood draw, a dressing change, suture removal, a monthly injection: these are short procedures nurses perform every day. Yet in Quebec, getting one can swallow half a day — sometimes far more. You book a slot at the test centre, take time off work, find parking, sit in a waiting room, then make the trip home again.',
          'For someone in good health, it is an annoyance. For an older adult who no longer drives, a single parent with a newborn, someone recovering from surgery, or a person living with a chronic illness, it is a real barrier. The result: follow-ups get postponed, dressings are changed too late, and blood work is pushed to “next week.”',
          'MobiSoins was born from exactly this. One of our founders watched his mother spend two full days in a Montreal hospital for care that took only minutes to deliver. The idea is simple: if care can be given safely at home, the nurse should travel — not you.',
        ],
        quote: 'If care can be given safely at home, the nurse should travel — not you.',
      },
      {
        title: 'Before the visit: documents to gather',
        content: [
          'An effective first visit starts with complete information. The more accurate the picture your nurse has of your health, the better her assessment — and the less you will have to repeat your story. Take ten minutes the evening before to gather the following.',
        ],
        list: [
          'Your health insurance (RAMQ) card and, if you have one, your group or private insurance card.',
          'An up-to-date medication list, including over-the-counter products, vitamins, and natural health products. Your pharmacist can print one for you in minutes.',
          'Your prescription or lab requisition, if the care requires one (blood draw, injection, certain dressings).',
          'Recent test results and your latest hospital discharge summary, if applicable.',
          'A list of known allergies — medications, latex, adhesives, foods.',
          'Contact details for your family doctor, nurse practitioner, or clinic, if you have one.',
        ],
        callout: {
          label: 'Nurse’s tip',
          text: 'Put all your medication containers in one bag and leave it on the table. It is the most reliable way to check what you actually take — and it is often how duplicates and expired products are discovered.',
        },
      },
      {
        title: 'Preparing the space: simple, clean, well lit',
        content: [
          'Your home does not need to look like a clinic. Your nurse brings her own sterile supplies and is used to every kind of living space, from a studio apartment to a bungalow. What truly helps comes down to a few things.',
          'Choose a quiet room with a stable chair or armchair you are comfortable in, and a clear surface nearby — the corner of a table is plenty. Good lighting matters for a blood draw or wound care: open the curtains or bring a lamp closer. Make sure a sink is accessible for handwashing.',
          'If you have pets, keep them in another room during the visit: even the gentlest dog can get restless around a stranger, and a clean environment lowers infection risk. Finally, wear loose clothing that makes the treatment area easy to reach — sleeves that roll up for a blood draw, for example.',
        ],
      },
      {
        title: 'The big worry: “Who is coming into my home?”',
        content: [
          'This is the question we hear most, and it is entirely legitimate. Opening your door to someone you do not know — especially when you are ill, elderly, or alone — takes trust. That trust should rest on verifiable facts, not promises.',
          'In Quebec, the title “nurse” is protected by law. To use it and to practise, a person must be registered with the Ordre des infirmières et infirmiers du Québec (OIIQ), follow a code of ethics, and carry professional liability insurance. Every MobiSoins nurse is an OIIQ member.',
          'Better still, you can check for yourself. The OIIQ offers the public an online tool, “Vérifier le droit d’exercice,” that confirms within seconds whether a person is authorized to practise. You will know your nurse’s name before the visit; nothing stops you from looking her up.',
          'If it puts you at ease, ask a family member to be present for the first visit. It is common, it is welcome, and it lets your caregiver hear the same explanations you do.',
        ],
        callout: {
          label: 'Good to know',
          text: 'A serious professional will never take offence at being asked to identify herself. Quite the opposite: it is a good habit, and one we encourage.',
        },
      },
      {
        title: 'During the visit: what to expect, minute by minute',
        content: [
          'The first visit usually runs a little longer than later ones, because it establishes your baseline. It generally unfolds in four stages.',
          'First, welcome and identification: your nurse introduces herself, confirms your identity and the planned care, and washes her hands. Next comes the assessment: she reviews your history, medications, and allergies, takes vital signs as needed, and asks about your symptoms and daily life.',
          'Then the care itself — blood draw, dressing, injection, vaccine, blood-pressure or glucose follow-up — performed under the same clinical protocols as in a facility, with sterile single-use supplies. Your nurse explains each step before doing it and makes sure she has your consent.',
          'Finally, teaching and next steps: what to watch for, when to worry, when the next visit will be. Biomedical waste such as needles leaves with her in a secure container. There is nothing for you to clean up.',
        ],
        links: [
          { label: 'Blood draw at home', href: '/services/prise-sang' },
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'Suture removal', href: '/services/retrait-points' },
        ],
      },
      {
        title: 'Voice your needs — all of them',
        content: [
          'In a clinic, appointments are timed to the minute, and many patients leave without asking the question that was really on their mind. At home, the pace is different. Make the most of it.',
          'Write your questions down ahead of time, on paper or on your phone. Describe symptoms concretely: since when, how often, what eases or worsens them. Mention what no chart captures, too — the fear of falling in the shower, trouble opening a pill organizer, worsening sleep, a spouse worn out from caregiving. This information changes a care plan.',
          'No question is too basic. Understanding your treatment is one of the best predictors that you will actually follow it.',
        ],
        list: [
          'What is the goal of this care, and how will I know it is working?',
          'Which signs should make me call you back — or go to the emergency room?',
          'Could my medications interact with each other?',
          'How often will I need follow-up?',
          'Who receives my results, and how soon?',
        ],
      },
      {
        title: 'What a home nurse actually does',
        content: [
          'Nursing is often reduced to technical acts: drawing blood, dressing wounds, giving injections. The reality is much broader. In Quebec, the Nurses Act entrusts nurses with assessing health status, clinical monitoring, and following people with complex health problems, among a set of activities reserved to them.',
          'At home, in practice, your nurse sees what no exam room ever shows: how you move around your own kitchen, where your medications are kept, whether the hallway rug is a tripping hazard, whether you are eating enough. She catches early signs of complications — a wound turning red, climbing blood pressure, new confusion — and knows when your doctor needs to be alerted.',
          'It is this combination of technical skill and clinical judgment, exercised in your real living environment, that makes home care so valuable.',
        ],
        links: [
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
          { label: 'Blood-pressure follow-up', href: '/services/suivi-tension' },
          { label: 'Medication assistance', href: '/services/aide-medication' },
        ],
      },
      {
        title: 'After the visit: follow-up makes all the difference',
        content: [
          'A single procedure solves a one-time problem; follow-up builds better health. Before your nurse leaves, make sure you know what comes next: the date of the next visit if there is one, the instructions to follow until then, and whom to contact if something changes.',
          'Keep your instructions, medication list, and results in one place. If you have a family doctor or nurse practitioner, let them know about the care you received: continuity between professionals is one of the best safeguards against errors and duplicate tests.',
          'Finally, keep your receipts. Private nursing care is generally not covered by RAMQ, but many group insurance plans reimburse it in whole or in part, and nursing fees may qualify for medical-expense tax credits. Check your insurance contract and, if needed, consult Revenu Québec or an accountant about your specific situation.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a prescription to have a nurse come to my home?',
        a: 'It depends on the care. A health assessment, blood-pressure follow-up, or health teaching does not require a prescription. A blood draw, medication administration, and certain treatments do. If in doubt, the team will tell you when you book.',
      },
      {
        q: 'Is MobiSoins care covered by RAMQ?',
        a: 'No. Like most private home nursing, it is not covered by the public plan. Many group or private insurance plans do reimburse nursing care, however, and these fees may be eligible for medical-expense tax credits. Keep your receipts and check your contract.',
      },
      {
        q: 'How do I know my nurse is really authorized to practise?',
        a: 'Every MobiSoins nurse is an OIIQ member. You can confirm it yourself using the public “Vérifier le droit d’exercice” tool on the Order’s website.',
      },
      {
        q: 'Can a family member be present during the visit?',
        a: 'Yes — it is even recommended for a first visit, especially for older adults or when a family member helps with day-to-day care.',
      },
      {
        q: 'Does MobiSoins replace the emergency room or my doctor?',
        a: 'No. MobiSoins provides planned, non-urgent nursing care. In an emergency, call 911. For non-urgent health advice, Info-Santé 811 is available around the clock.',
      },
    ],
    sources: [
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) — Scope of practice and reserved activities',
        url: 'https://www.oiiq.org/pratique-professionnelle/exercice-infirmier/champ-exercice-activites-reservees',
      },
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) — Verify the right to practise',
        url: 'https://www.oiiq.org/verifier-le-droit-d-exercice',
      },
    ],
    conclusion: {
      title: 'Key takeaway',
      content: [
        'A well-prepared first visit means ten minutes of preparation for months of simpler, more human follow-up centred on your real needs.',
        'Gather your documents, clear a corner of the table, write down your questions — and let the nurse come to you. MobiSoins is preparing its first visits in Quebec: sign up to be among the first served.',
      ],
    },
  },
};

export default function PremiereVisitePage() {
  return <ArticleLayout article={article} />;
}
