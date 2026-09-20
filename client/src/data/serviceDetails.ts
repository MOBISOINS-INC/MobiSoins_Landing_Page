/**
 * Longer explanations for each service detail page: two paragraphs per service
 * (what the care is and when it helps, then how the visit itself goes).
 *
 * Same ground rules as `services.ts`: general, non-clinical explanations, not
 * medical advice. Nothing here states a price, a guaranteed duration or a
 * clinical outcome. Keyed by service slug; a missing slug simply renders the
 * page without the extra paragraphs.
 */
export interface ServiceDetail {
  fr: string[];
  en: string[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  // ───────────── Nursing care ─────────────
  pansements: {
    fr: [
      'Une plaie qui guérit bien est une plaie nettoyée, protégée et surveillée régulièrement. Ce soin s’adresse aux personnes qui sortent d’une chirurgie, qui vivent avec un ulcère ou une plaie chronique, ou qui ont une brûlure mineure ou une coupure demandant plus qu’un pansement maison. Il évite des allers-retours répétés à la clinique, souvent pénibles quand on se déplace difficilement.',
      'À chaque visite, l’infirmière retire l’ancien pansement, évalue la plaie, la nettoie selon les protocoles cliniques et applique le pansement adapté, avec du matériel stérile qu’elle apporte. Elle surveille les signes d’infection, note l’évolution d’une visite à l’autre et vous explique quoi surveiller entre-temps. Si la plaie évolue mal, elle vous oriente vers votre médecin.',
    ],
    en: [
      'A wound heals well when it is cleaned, protected and checked regularly. This care is for people recovering from surgery, living with an ulcer or a chronic wound, or dealing with a minor burn or cut that needs more than a home bandage. It spares you repeated trips to the clinic, which are hard when getting around is difficult.',
      'At each visit your nurse removes the old dressing, assesses the wound, cleans it following clinical protocols and applies the right dressing, using sterile supplies she brings with her. She watches for signs of infection, records how healing is progressing from one visit to the next, and explains what to look out for in between. If the wound is not healing as expected, she refers you to your doctor.',
    ],
  },
  'retrait-points': {
    fr: [
      'Après une chirurgie ou une suture faite à l’urgence, les points ou les agrafes doivent être retirés au bon moment, une fois la plaie refermée. C’est un geste court, mais qui oblige souvent à prendre rendez-vous et à se déplacer. Ici, il se fait chez vous, selon le délai indiqué par le médecin qui a fait la suture.',
      'L’infirmière examine d’abord la cicatrice pour confirmer que la plaie est bien fermée. Elle retire ensuite les points ou les agrafes en douceur, avec des instruments stériles, nettoie la zone et protège la cicatrice si nécessaire. Elle termine par des conseils pour la suite : soins de la cicatrice, signes à surveiller et moment où reprendre vos activités habituelles.',
    ],
    en: [
      'After surgery or stitches done in the emergency room, the stitches or staples need to come out at the right time, once the wound has closed. It is a short procedure, but it usually means booking an appointment and travelling. Here it happens in your home, on the timeline given by the doctor who placed them.',
      'Your nurse first examines the scar to confirm the wound has closed properly. She then gently removes the stitches or staples with sterile instruments, cleans the area and protects the scar if needed. She finishes with aftercare advice: how to look after the scar, which signs to watch for, and when you can return to your usual activities.',
    ],
  },
  catheters: {
    fr: [
      'Un cathéter, qu’il soit intraveineux ou urinaire, demande des soins réguliers et une technique rigoureuse pour rester sécuritaire. Ce service couvre la pose, l’entretien et le retrait du cathéter, toujours selon votre prescription. Il convient aux personnes qui reçoivent un traitement à domicile ou qui vivent avec une sonde sur une période prolongée.',
      'L’infirmière travaille selon des normes d’asepsie strictes, avec du matériel stérile. Elle vérifie le site d’insertion, recherche tout signe d’irritation ou d’infection, change les pansements et s’assure que tout fonctionne comme prévu. Elle prend aussi le temps de vous montrer, à vous ou à un proche, comment prendre soin du cathéter entre les visites et quand demander de l’aide.',
    ],
    en: [
      'A catheter, whether intravenous or urinary, needs regular care and careful technique to stay safe. This service covers inserting, maintaining and removing a catheter, always according to your prescription. It suits people receiving treatment at home or living with a catheter over a longer period.',
      'Your nurse works to strict aseptic standards with sterile supplies. She checks the insertion site, looks for any sign of irritation or infection, changes the dressings and makes sure everything is working as it should. She also takes the time to show you, or someone close to you, how to care for the catheter between visits and when to ask for help.',
    ],
  },
  'medication-im-sc': {
    fr: [
      'Certains médicaments se donnent par injection intramusculaire (dans le muscle) ou sous-cutanée (sous la peau). Quand on ne peut ou ne veut pas se les administrer soi-même, chaque dose devient un déplacement. Ce service permet de recevoir vos injections prescrites à la maison, qu’il s’agisse d’un traitement ponctuel ou d’injections à intervalles réguliers.',
      'L’infirmière vérifie votre prescription et le médicament, prépare la dose, choisit le site d’injection et administre le produit en respectant les règles de sécurité. Elle reste attentive à votre réaction, élimine les aiguilles de façon sécuritaire et note le soin effectué. Pour un traitement récurrent, les visites se planifient selon le calendrier prévu par votre prescripteur.',
    ],
    en: [
      'Some medications are given by intramuscular injection (into the muscle) or subcutaneous injection (under the skin). When you cannot or would rather not give them to yourself, every dose becomes a trip. This service lets you receive your prescribed injections at home, whether it is a single treatment or injections at regular intervals.',
      'Your nurse checks your prescription and the medication, prepares the dose, chooses the injection site and gives the injection following safety rules. She pays attention to how you react, disposes of the needles safely and records the care given. For a recurring treatment, visits are planned around the schedule set by your prescriber.',
    ],
  },
  'lavage-oreilles': {
    fr: [
      'Le cérumen protège l’oreille, mais il peut s’accumuler et former un bouchon. On remarque alors une sensation d’oreille bouchée, une baisse de l’audition ou un inconfort, parfois plus marqué chez les personnes qui portent des appareils auditifs. Le lavage d’oreilles retire cet excès en douceur, sans coton-tige, qui risque au contraire de repousser le bouchon.',
      'L’infirmière examine d’abord le conduit auditif pour confirmer la présence d’un bouchon et s’assurer que le lavage est approprié. Elle procède ensuite à une irrigation douce à l’eau tiède, puis vérifie le résultat. Le soin est rapide et généralement sans douleur. Si elle observe autre chose qu’un simple bouchon, elle vous recommande de consulter.',
    ],
    en: [
      'Earwax protects the ear, but it can build up and form a plug. You then notice a blocked-ear feeling, duller hearing or discomfort, sometimes more so for people who wear hearing aids. Ear irrigation removes the excess gently, without cotton swabs, which tend to push the plug further in.',
      'Your nurse first looks into the ear canal to confirm there is a plug and that irrigation is appropriate. She then performs a gentle irrigation with warm water and checks the result. The procedure is quick and usually painless. If she sees anything other than a simple wax plug, she recommends that you see a doctor.',
    ],
  },

  // ───────────── Vaccination ─────────────
  grippe: {
    fr: [
      'Le vaccin contre la grippe saisonnière réduit le risque d’attraper la grippe et d’en subir les complications. Il est particulièrement utile pour les aînés, les personnes vivant avec une maladie chronique et leur entourage. À la maison, toute la famille peut être vaccinée lors d’une même visite, sans salle d’attente en pleine saison des virus.',
      'L’infirmière passe en revue quelques questions de santé pour confirmer que le vaccin vous convient, répond à vos questions, puis administre la dose. Elle reste sur place quelques minutes pour s’assurer que tout va bien et vous explique les réactions possibles et bénignes des jours suivants. La vaccination est inscrite à votre dossier.',
    ],
    en: [
      'The seasonal flu vaccine lowers the risk of catching the flu and of its complications. It matters most for seniors, people living with a chronic condition and those around them. At home, the whole family can be vaccinated in one visit, without a waiting room in the middle of virus season.',
      'Your nurse goes through a few health questions to confirm the vaccine is right for you, answers your questions, then gives the dose. She stays for a few minutes to make sure all is well and explains the mild reactions that can appear over the following days. The vaccination is recorded in your file.',
    ],
  },
  covid: {
    fr: [
      'La vaccination contre la COVID-19, qu’il s’agisse d’une première dose ou d’un rappel, reste recommandée pour certaines personnes selon leur âge et leur état de santé. Les critères d’admissibilité évoluent avec les recommandations de santé publique. Recevoir sa dose à domicile est une option pratique pour les personnes à mobilité réduite ou plus vulnérables.',
      'L’infirmière vérifie votre admissibilité selon les recommandations en vigueur et votre historique vaccinal, s’assure qu’il n’y a pas de contre-indication, puis administre le vaccin. Elle demeure quelques minutes avec vous après l’injection et vous indique les effets possibles et quoi faire s’ils surviennent. La dose est consignée à votre dossier vaccinal.',
    ],
    en: [
      'COVID-19 vaccination, whether a first dose or a booster, is still recommended for some people depending on age and health. Eligibility criteria change with public health recommendations. Getting your dose at home is a practical option for people with reduced mobility or who are more vulnerable.',
      'Your nurse checks your eligibility against current recommendations and your vaccination history, makes sure there is no contraindication, then gives the vaccine. She stays with you for a few minutes after the injection and explains possible effects and what to do if they occur. The dose is entered in your vaccination record.',
    ],
  },
  voyage: {
    fr: [
      'Selon la destination, la durée du séjour et le type de voyage, certains vaccins sont recommandés avant le départ, par exemple contre l’hépatite A ou la typhoïde. Plusieurs doivent être donnés quelques semaines à l’avance pour être efficaces, et certains demandent plus d’une dose. Mieux vaut donc s’y prendre tôt dans la préparation du voyage.',
      'L’infirmière fait le point avec vous sur votre itinéraire, vos activités prévues, votre état de santé et les vaccins déjà reçus. Elle vous explique les vaccins recommandés pour votre destination, administre ceux qui conviennent et planifie les doses suivantes au besoin. Elle partage aussi des conseils de prévention utiles sur place, comme l’eau, les aliments et les piqûres d’insectes.',
    ],
    en: [
      'Depending on your destination, how long you are staying and the kind of trip, some vaccines are recommended before you leave, for example against hepatitis A or typhoid. Several must be given a few weeks ahead to be effective, and some need more than one dose. It is best to start early in your trip planning.',
      'Your nurse reviews your itinerary, planned activities, health and the vaccines you have already had. She explains the vaccines recommended for your destination, gives the ones that apply and schedules follow-up doses if needed. She also shares prevention advice that is useful once you are there, such as water, food and insect bites.',
    ],
  },
  'carnet-vaccinal': {
    fr: [
      'Avec les années, les déménagements et les changements de clinique, il est courant de ne plus savoir où l’on en est dans ses vaccins. Certains rappels se font à l’âge adulte et sont faciles à oublier. Ce service sert à remettre votre carnet à jour, pour vous ou pour toute la famille, à tout âge.',
      'L’infirmière examine vos preuves de vaccination disponibles, carnet papier ou dossier, et les compare au calendrier recommandé pour votre âge et votre situation. Elle vous indique clairement ce qui est à jour et ce qui manque, administre les vaccins de rattrapage qui conviennent et planifie les doses suivantes. Votre dossier est mis à jour à la fin de la visite.',
    ],
    en: [
      'With the years, moves and changes of clinic, it is common to lose track of where you stand with your vaccines. Some boosters are due in adulthood and are easy to forget. This service brings your record up to date, for you or for the whole family, at any age.',
      'Your nurse reviews the proof of vaccination you have, paper booklet or file, and compares it to the schedule recommended for your age and situation. She tells you clearly what is up to date and what is missing, gives the catch-up vaccines that apply and schedules the next doses. Your record is updated at the end of the visit.',
    ],
  },

  // ───────────── Chronic disease follow-up ─────────────
  'suivi-diabete': {
    fr: [
      'Vivre avec le diabète demande une attention régulière : surveiller la glycémie, comprendre l’effet des repas et des médicaments, et repérer tôt les signes de complication. Entre deux rendez-vous médicaux, un suivi infirmier à domicile aide à garder le cap, surtout après un nouveau diagnostic, un changement de traitement ou lorsque les déplacements sont difficiles.',
      'À chaque visite, l’infirmière mesure votre glycémie, regarde vos résultats récents avec vous et vérifie que vous êtes à l’aise avec votre lecteur et votre traitement. Elle examine aussi les zones à risque, comme les pieds, et répond à vos questions sur l’alimentation et le quotidien. Si quelque chose l’inquiète, elle vous recommande de contacter votre médecin.',
    ],
    en: [
      'Living with diabetes takes regular attention: watching blood sugar, understanding the effect of meals and medication, and spotting signs of complications early. Between medical appointments, nursing follow-up at home helps you stay on track, especially after a new diagnosis, a change in treatment, or when getting around is difficult.',
      'At each visit your nurse measures your blood sugar, goes over your recent results with you and checks that you are comfortable with your meter and your treatment. She also examines at-risk areas such as the feet, and answers your questions about food and daily life. If something concerns her, she recommends that you contact your doctor.',
    ],
  },
  'suivi-tension': {
    fr: [
      'L’hypertension ne donne souvent aucun symptôme, mais elle augmente le risque de problèmes cardiaques et d’AVC. La mesurer régulièrement, dans de bonnes conditions, permet de savoir si le traitement fonctionne. Des mesures prises à la maison, au calme, reflètent souvent mieux la réalité que celles prises dans un contexte stressant.',
      'L’infirmière prend votre tension selon la technique recommandée, après quelques minutes de repos, et compare les valeurs à vos mesures précédentes. Elle vérifie avec vous la prise de vos médicaments et vos habitudes de vie, et vous montre comment bien mesurer votre tension vous-même si vous avez un appareil. Des valeurs préoccupantes sont signalées pour que vous consultiez votre médecin.',
    ],
    en: [
      'High blood pressure often causes no symptoms, yet it raises the risk of heart problems and stroke. Measuring it regularly, in the right conditions, tells you whether treatment is working. Readings taken at home, when you are calm, often reflect reality better than those taken in a stressful setting.',
      'Your nurse takes your blood pressure using the recommended technique, after a few minutes of rest, and compares the values with your earlier readings. She goes over how you take your medication and your lifestyle habits, and shows you how to measure your own blood pressure properly if you have a monitor. Concerning values are flagged so that you can see your doctor.',
    ],
  },

  // ───────────── Health check-up ─────────────
  'bilan-complet': {
    fr: [
      'Le bilan complet donne un portrait d’ensemble de votre santé, sans passer par la clinique. Il est utile quand on n’a pas fait le point depuis longtemps, qu’on veut un point de départ avant de changer ses habitudes, ou qu’on souhaite préparer une consultation médicale avec des informations claires.',
      'L’infirmière mesure vos signes vitaux, dont la tension artérielle, le pouls, la température et la saturation en oxygène, et revoit avec vous vos antécédents, vos médicaments et vos habitudes de vie. Elle vous remet ensuite ses observations et ses recommandations. Si un élément mérite un suivi médical, elle vous l’indique et vous oriente vers la ressource appropriée.',
    ],
    en: [
      'The complete check-up gives an overall picture of your health without a clinic visit. It is useful when you have not taken stock in a long time, want a starting point before changing habits, or want to prepare for a medical appointment with clear information.',
      'Your nurse measures your vital signs, including blood pressure, pulse, temperature and oxygen saturation, and reviews your history, medications and lifestyle habits with you. She then shares her observations and recommendations. If something deserves medical follow-up, she tells you and points you to the right resource.',
    ],
  },
  'prise-sang': {
    fr: [
      'Une prise de sang prescrite par votre médecin veut souvent dire se lever tôt, être à jeun et faire la file au centre de prélèvement. À domicile, l’infirmière vient à vous à l’heure prévue. C’est particulièrement apprécié des personnes âgées, des parents de jeunes enfants et de celles et ceux pour qui se déplacer à jeun est difficile.',
      'L’infirmière confirme votre identité et votre prescription, vérifie les consignes à respecter, comme le jeûne, puis effectue le prélèvement avec du matériel stérile à usage unique. Les tubes sont identifiés devant vous, puis acheminés au laboratoire. Les résultats sont transmis selon le circuit prévu par votre prescription.',
    ],
    en: [
      'A blood test ordered by your doctor often means getting up early, fasting and lining up at the collection centre. At home, the nurse comes to you at the scheduled time. It is especially appreciated by seniors, parents of young children and anyone for whom travelling while fasting is hard.',
      'Your nurse confirms your identity and your prescription, checks the instructions to follow, such as fasting, then draws the blood with sterile single-use supplies. The tubes are labelled in front of you, then taken to the laboratory. Results are sent through the channel set out by your prescription.',
    ],
  },

  // ───────────── Sexual health ─────────────
  'depistage-its': {
    fr: [
      'Plusieurs infections transmissibles sexuellement ne causent aucun symptôme. Le dépistage est la seule façon de savoir, et il fait partie d’un suivi de santé normal. Le faire à domicile enlève une bonne part de la gêne : pas de salle d’attente, pas de crainte de croiser quelqu’un, et une conversation qui se déroule en privé.',
      'L’infirmière discute avec vous, sans jugement, pour déterminer quels tests sont pertinents dans votre situation. Elle effectue ensuite les prélèvements nécessaires, qui peuvent être sanguins, urinaires ou par écouvillon, et les envoie au laboratoire. Vos résultats vous sont communiqués de façon confidentielle, avec les explications et la marche à suivre au besoin.',
    ],
    en: [
      'Many sexually transmitted infections cause no symptoms at all. Screening is the only way to know, and it is part of normal health care. Doing it at home removes much of the awkwardness: no waiting room, no worry about running into someone, and a conversation that stays private.',
      'Your nurse talks with you, without judgment, to work out which tests make sense in your situation. She then takes the necessary samples, which may be blood, urine or a swab, and sends them to the laboratory. Your results are shared with you confidentially, with explanations and next steps if needed.',
    ],
  },
  'consultation-conseil': {
    fr: [
      'Il n’est pas toujours facile de trouver où poser ses questions sur la santé sexuelle. Cette consultation est un moment d’échange avec une infirmière, en toute confidentialité, sur les sujets qui vous préoccupent : prévention, contraception, dépistage, relations ou changements que vous observez. Aucune question n’est déplacée.',
      'L’infirmière vous écoute, vous donne une information claire et à jour, et vous aide à y voir plus clair dans vos options. Selon vos besoins, elle peut proposer un dépistage, un suivi de contraception ou vous orienter vers un autre professionnel. Vous repartez avec des réponses et, s’il y a lieu, un plan pour la suite.',
    ],
    en: [
      'It is not always easy to find somewhere to ask questions about sexual health. This consultation is time with a nurse, in complete confidence, to talk about whatever is on your mind: prevention, contraception, screening, relationships or changes you have noticed. No question is out of place.',
      'Your nurse listens, gives you clear and current information, and helps you make sense of your options. Depending on your needs, she may suggest screening, contraception follow-up, or refer you to another professional. You leave with answers and, where relevant, a plan for what comes next.',
    ],
  },
  'suivi-contraception': {
    fr: [
      'Il existe plusieurs méthodes de contraception, et celle qui convient dépend de votre santé, de votre mode de vie et de vos projets. Ce suivi sert à faire un choix éclairé, puis à vérifier avec le temps que la méthode vous convient toujours, par exemple après des effets indésirables ou un changement de situation.',
      'L’infirmière fait le point sur vos besoins et votre état de santé, vous présente les options, leur fonctionnement, leur efficacité et leurs effets possibles. Elle assure ensuite le suivi de la méthode choisie et répond à vos questions en cours de route. Tout se fait de façon confidentielle, dans le respect des protocoles en vigueur et de votre prescription.',
    ],
    en: [
      'There are several contraception methods, and the right one depends on your health, lifestyle and plans. This follow-up helps you make an informed choice, then check over time that the method still suits you, for example after side effects or a change in your situation.',
      'Your nurse reviews your needs and your health, and walks you through the options, how they work, how effective they are and their possible effects. She then follows up on the method you choose and answers your questions along the way. Everything is confidential and follows the protocols in force and your prescription.',
    ],
  },

  // ───────────── Pediatrics ─────────────
  'vaccins-enfant': {
    fr: [
      'Le calendrier de vaccination de l’enfance protège contre plusieurs maladies graves, à condition que les doses soient données aux bons âges. Pour un tout-petit, la clinique peut être une source de stress : bruit, attente, autres enfants malades. À la maison, l’enfant reste dans un environnement qu’il connaît, avec ses jouets et ses parents.',
      'L’infirmière vérifie le carnet de votre enfant et les vaccins prévus à son âge, s’assure qu’il est en état de les recevoir et répond à vos questions. Elle administre ensuite les vaccins en douceur, en prenant le temps qu’il faut pour rassurer l’enfant, puis reste quelques minutes pour l’observer. Le carnet est mis à jour sur place.',
    ],
    en: [
      'The childhood vaccination schedule protects against several serious diseases, as long as doses are given at the right ages. For a little one, a clinic can be stressful: noise, waiting, other sick children. At home, your child stays somewhere familiar, with their toys and their parents.',
      'Your nurse checks your child’s record and the vaccines due at their age, makes sure they are well enough to receive them and answers your questions. She then gives the vaccines gently, taking the time needed to reassure your child, and stays a few minutes to observe. The record is updated on the spot.',
    ],
  },
  'suivi-bebe': {
    fr: [
      'Les premières semaines avec un bébé amènent beaucoup de questions : prend-il assez de poids, boit-il suffisamment, dort-il normalement? Un suivi à domicile permet d’y répondre sans sortir avec un nouveau-né, à un moment où la fatigue est bien réelle. Il s’adresse aussi aux parents qui veulent simplement être rassurés.',
      'L’infirmière pèse et mesure votre bébé, suit sa croissance et observe son état général. Elle aborde avec vous l’alimentation, que ce soit l’allaitement ou le biberon, le sommeil, les soins du quotidien et votre propre récupération. Elle vous donne des repères concrets et vous indique les situations qui méritent une consultation médicale.',
    ],
    en: [
      'The first weeks with a baby bring many questions: is she gaining enough weight, feeding enough, sleeping normally? Follow-up at home answers them without going out with a newborn, at a time when fatigue is very real. It is also for parents who simply want reassurance.',
      'Your nurse weighs and measures your baby, tracks growth and observes how they are doing overall. She talks with you about feeding, whether breast or bottle, sleep, everyday care and your own recovery. She gives you practical reference points and tells you which situations call for a medical visit.',
    ],
  },
  'bilan-pediatrique': {
    fr: [
      'Le bilan pédiatrique fait le point sur la santé de votre enfant : sa croissance, son développement et les étapes propres à son âge. Il est utile pour suivre l’évolution entre deux visites médicales, ou quand une question vous trotte dans la tête sans justifier, à vos yeux, un rendez-vous chez le médecin.',
      'L’infirmière mesure la taille et le poids de votre enfant, observe son développement et prend le temps d’échanger avec vous sur l’alimentation, le sommeil, le comportement et vos préoccupations. Le tout se fait à son rythme, dans un cadre rassurant. Elle vous remet ses observations et vous oriente vers un médecin si un élément demande une évaluation plus poussée.',
    ],
    en: [
      'The pediatric check-up takes stock of your child’s health: growth, development and the milestones for their age. It is useful for tracking progress between medical visits, or when a question is on your mind that does not seem to you to justify a doctor’s appointment.',
      'Your nurse measures your child’s height and weight, observes their development and takes time to talk with you about eating, sleep, behaviour and your concerns. It all happens at the child’s pace, in a reassuring setting. She shares her observations and refers you to a doctor if something needs a closer look.',
    ],
  },

  // ───────────── Seniors ─────────────
  'soins-domicile-aines': {
    fr: [
      'Rester chez soi le plus longtemps possible est le souhait de bien des aînés. Des soins infirmiers réguliers à domicile y contribuent : ils permettent de surveiller l’état de santé, de prévenir les complications et d’éviter des déplacements fatigants. Ils apportent aussi une présence rassurante, pour la personne comme pour ses proches.',
      'Les soins sont adaptés à chaque personne : surveillance des signes vitaux, soins de plaies, gestion des médicaments, suivi d’une maladie chronique ou évaluation de l’état général. L’infirmière prend le temps d’écouter, observe les changements d’une visite à l’autre et peut tenir la famille informée avec l’accord de la personne. Elle signale tout ce qui mérite l’attention du médecin.',
    ],
    en: [
      'Staying in their own home as long as possible is what many seniors want. Regular nursing care at home supports that: it keeps an eye on health, helps prevent complications and avoids tiring trips. It also brings a reassuring presence, for the person and for their family.',
      'Care is tailored to each person: monitoring vital signs, wound care, medication management, follow-up for a chronic condition or a general assessment. Your nurse takes time to listen, notices changes from one visit to the next and, with the person’s consent, can keep the family informed. She flags anything that deserves the doctor’s attention.',
    ],
  },
  'suivi-tension-aines': {
    fr: [
      'Avec l’âge, la tension artérielle demande une surveillance plus étroite, et les variations peuvent causer des étourdissements ou des chutes. Se rendre à la clinique seulement pour une mesure est souvent disproportionné. Un suivi à domicile permet des mesures régulières, dans le calme, sans effort de déplacement.',
      'L’infirmière mesure la tension en position assise, et debout au besoin, consigne les valeurs et les compare aux précédentes. Elle vérifie que les médicaments sont pris comme prévu et reste attentive aux signes comme les étourdissements, la fatigue ou l’enflure. Avec l’accord de la personne, elle peut partager un résumé avec un proche et recommande de consulter si les valeurs l’inquiètent.',
    ],
    en: [
      'With age, blood pressure needs closer monitoring, and swings can cause dizziness or falls. Travelling to a clinic for a single reading is often out of proportion. Follow-up at home allows regular readings, taken calmly, with no travel effort.',
      'Your nurse measures blood pressure sitting, and standing if needed, records the values and compares them with earlier ones. She checks that medications are being taken as planned and stays alert to signs such as dizziness, fatigue or swelling. With the person’s consent she can share a summary with a relative, and she recommends a medical visit if the values concern her.',
    ],
  },
  'aide-medication': {
    fr: [
      'Quand on prend plusieurs médicaments à différentes heures, les erreurs arrivent facilement : dose oubliée, prise en double, confusion entre deux comprimés. Ce service aide les personnes qui ont du mal à gérer seules leur médication, et soulage les proches qui s’en inquiètent.',
      'L’infirmière passe en revue l’ensemble de vos médicaments, prépare le pilulier selon vos prescriptions et vérifie que les prises se font correctement. Elle repère les doses oubliées, observe les effets indésirables possibles et vous explique à quoi sert chaque médicament. En cas de doute ou d’incohérence, elle communique avec votre pharmacien ou votre médecin.',
    ],
    en: [
      'When you take several medications at different times of day, mistakes happen easily: a missed dose, a double dose, confusing two pills. This service helps people who struggle to manage their medication alone, and eases the worry of those close to them.',
      'Your nurse reviews all of your medications, fills the pill organiser according to your prescriptions and checks that doses are being taken correctly. She spots missed doses, watches for possible side effects and explains what each medication is for. If something is unclear or does not add up, she contacts your pharmacist or doctor.',
    ],
  },

  // ───────────── Laboratory tests ─────────────
  'prise-sang-labo': {
    fr: [
      'Lorsque votre médecin vous prescrit des analyses sanguines, le prélèvement peut se faire chez vous plutôt qu’au centre de prélèvement. Vous évitez la file d’attente du matin et le déplacement à jeun, ce qui compte beaucoup pour les personnes âgées, à mobilité réduite ou sujettes aux malaises.',
      'L’infirmière vérifie votre prescription et les consignes de préparation, puis effectue le prélèvement avec du matériel stérile à usage unique. Les tubes sont étiquetés devant vous, conservés selon les exigences et livrés au laboratoire. Vos résultats suivent ensuite le circuit habituel et sont transmis à votre prescripteur.',
    ],
    en: [
      'When your doctor orders blood tests, the sample can be taken at home instead of at a collection centre. You skip the morning lineup and the trip while fasting, which matters a great deal for seniors, people with reduced mobility or anyone prone to feeling faint.',
      'Your nurse checks your prescription and the preparation instructions, then draws the blood with sterile single-use supplies. The tubes are labelled in front of you, stored as required and delivered to the laboratory. Your results then follow the usual path and are sent to your prescriber.',
    ],
  },
  'analyse-urine': {
    fr: [
      'Une analyse d’urine aide à dépister une infection urinaire, à suivre la fonction rénale ou à compléter un bilan de santé. Quand elle est prescrite, il faut normalement apporter soi-même l’échantillon au laboratoire dans un délai précis. Ce service s’en occupe pour vous, de façon discrète.',
      'L’infirmière vous remet un contenant stérile et vous explique la façon de recueillir l’échantillon pour qu’il soit valide. Elle l’identifie, le conserve dans les conditions requises et le livre au laboratoire avec votre prescription. Les résultats sont ensuite transmis selon le circuit prévu par votre prescripteur.',
    ],
    en: [
      'A urine test helps detect a urinary infection, follow kidney function or round out a health assessment. When one is ordered, you normally have to bring the sample to the laboratory yourself within a set time. This service takes care of that for you, discreetly.',
      'Your nurse gives you a sterile container and explains how to collect the sample so that it is valid. She labels it, keeps it in the required conditions and delivers it to the laboratory with your prescription. Results are then sent through the channel set out by your prescriber.',
    ],
  },
  'prelevement-biologique': {
    fr: [
      'Certaines analyses demandent un autre type d’échantillon que le sang ou l’urine : un prélèvement de gorge, du nez, d’une plaie ou de sécrétions, par exemple pour identifier une infection. Ces prélèvements sont prescrits par un médecin et doivent être faits selon une technique précise pour que le résultat soit fiable.',
      'L’infirmière confirme votre prescription, vous explique le déroulement, puis effectue le prélèvement avec le matériel stérile approprié. Le geste est rapide, parfois un peu inconfortable mais bref. L’échantillon est identifié, conservé dans les conditions requises et acheminé au laboratoire. Les résultats sont transmis selon le circuit prévu par votre prescription.',
    ],
    en: [
      'Some tests need a different kind of sample than blood or urine: a swab from the throat, nose or a wound, or a sample of secretions, for example to identify an infection. These samples are ordered by a doctor and must be taken with precise technique for the result to be reliable.',
      'Your nurse confirms your prescription, explains what will happen, then takes the sample with the appropriate sterile supplies. It is quick, sometimes slightly uncomfortable but brief. The sample is labelled, kept in the required conditions and taken to the laboratory. Results are sent through the channel set out by your prescription.',
    ],
  },

  // ───────────── Corporate ─────────────
  'medecine-travail': {
    fr: [
      'La santé au travail touche autant la prévention que le suivi : postes de travail, gestes répétitifs, exposition à certains risques, retour après une absence. Faire venir une infirmière sur place permet d’offrir ces services à vos employés sans qu’ils aient à s’absenter, et d’adapter les interventions à la réalité de votre milieu.',
      'Nous planifions avec vous les besoins de votre organisation, puis une infirmière se rend dans vos locaux pour réaliser des évaluations de santé, assurer des suivis et mener des activités de prévention. Les échanges avec chaque employé sont confidentiels. Les informations personnelles de santé ne sont pas transmises à l’employeur, qui ne reçoit que des données générales lorsque c’est prévu.',
    ],
    en: [
      'Occupational health covers both prevention and follow-up: workstations, repetitive movements, exposure to certain risks, returning after an absence. Bringing a nurse on site lets you offer these services to your employees without them having to take time away, and tailors the work to the reality of your workplace.',
      'We plan your organization’s needs with you, then a nurse comes to your premises to carry out health assessments, provide follow-up and run prevention activities. Conversations with each employee are confidential. Personal health information is not passed on to the employer, who receives only general data where that has been agreed.',
    ],
  },
  'vaccination-collective': {
    fr: [
      'Organiser une campagne de vaccination au travail, contre la grippe par exemple, facilite la vie de vos employés et peut réduire l’absentéisme en saison. La difficulté tient surtout à la logistique. Nous nous en occupons de bout en bout, pour que vous n’ayez qu’à mettre un local à disposition.',
      'Nous convenons avec vous des dates, du nombre de participants et du déroulement, puis une ou plusieurs infirmières s’installent dans vos locaux le jour venu. Chaque employé répond à un court questionnaire de santé, reçoit son vaccin et reste quelques minutes en observation. Chaque vaccination est consignée, et la participation de chacun demeure volontaire et confidentielle.',
    ],
    en: [
      'Running a vaccination campaign at work, against the flu for instance, makes life easier for your employees and can reduce absences during the season. The hard part is mostly logistics. We take care of it from start to finish, so all you need to provide is a room.',
      'We agree with you on dates, number of participants and how the day will run, then one or more nurses set up in your premises on the day. Each employee answers a short health questionnaire, receives the vaccine and stays a few minutes for observation. Every vaccination is recorded, and each person’s participation remains voluntary and confidential.',
    ],
  },
  'bilan-sante-entreprise': {
    fr: [
      'Une journée de bilans de santé permet à vos employés de faire le point sur leur santé sans quitter le bureau. C’est un avantage concret, apprécié des équipes, qui encourage la prévention : bien des gens découvrent à cette occasion une tension élevée ou un facteur de risque dont ils ignoraient l’existence.',
      'Nous organisons la journée avec vous : horaire, local et plages de rendez-vous individuelles. Sur place, l’infirmière rencontre chaque employé en privé, mesure ses signes vitaux, dont la tension artérielle et le pouls, fait le point sur ses habitudes de vie et lui remet ses observations et ses recommandations. Les résultats individuels appartiennent à l’employé et ne sont jamais transmis à l’employeur.',
    ],
    en: [
      'A health-check day lets your employees take stock of their health without leaving the office. It is a tangible benefit that teams appreciate, and it encourages prevention: many people discover high blood pressure or a risk factor they did not know about.',
      'We organize the day with you: schedule, room and individual appointment slots. On site, the nurse meets each employee in private, measures vital signs including blood pressure and pulse, reviews lifestyle habits and shares her observations and recommendations. Individual results belong to the employee and are never passed on to the employer.',
    ],
  },
};
