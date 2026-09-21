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
    date: 'Mis à jour en septembre 2026',
    title: 'Les avantages des soins à domicile pour les aînés',
    subtitle:
      'Le Québec vieillit plus vite que son réseau de la santé ne s’adapte. Entre les listes d’attente du soutien à domicile, les urgences qui débordent et des proches aidants à bout de souffle, vieillir chez soi est devenu à la fois le souhait de la majorité et un véritable parcours du combattant. Ce guide complet explique ce que disent les chiffres, où se situent les vrais risques à la maison (chutes, médicaments, maladies chroniques, isolement), comment soutenir un parent sans s’épuiser, ce que coûtent les soins et comment réduire la facture, et ce que des soins infirmiers à domicile peuvent concrètement changer.',
    readTime: '35 min',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'En 2031, un Québécois sur quatre aura 65 ans ou plus. La grande majorité des aînés vivent, et veulent rester, à domicile.',
      'Selon la Commissaire à la santé et au bien-être, le réseau public ne répondait qu’à 10,7 % des besoins en soutien à domicile en 2023.',
      'Un aîné sur trois vivant à domicile chute chaque année : la prévention et la surveillance clinique à la maison comptent.',
      'La médication, les maladies chroniques et les retours d’hôpital sont les moments où une visite infirmière à domicile change le plus la donne.',
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
          'Contrairement à une idée tenace, vieillir ne signifie pas entrer en établissement. L’INSPQ rappelle que la plupart des aînés vivent à domicile de façon relativement autonome, et que c’est encore le cas de 62 % des personnes de 85 ans et plus. La maison n’est pas une solution de rechange : c’est le lieu où se vit, de très loin, la plus grande part du vieillissement.',
          'Ce vieillissement à domicile prend des formes très variées. Il y a le couple de retraités qui habite encore la maison familiale en banlieue, la veuve qui vit seule dans un appartement de Montréal, le père qui s’est installé dans le logement intergénérationnel aménagé chez sa fille, ou la personne qui a choisi une résidence privée pour aînés tout en demeurant chez elle. Chacune de ces situations appelle des soins différents, mais toutes ont un point commun : c’est à la maison que la santé se gère au quotidien.',
          'Cela a une conséquence directe sur la façon d’organiser les soins. Un système pensé pour que le patient se rende à l’hôpital, à la clinique ou au centre de prélèvement fonctionne mal pour une population dont une part croissante a de la difficulté à se déplacer, ne conduit plus ou vit loin des services. Plus la population vieillit, plus il devient logique que les soins, eux, se déplacent.',
          'La vraie question n’est donc pas « faut-il soigner les aînés à domicile ? » mais « comment s’assurer que les soins s’y rendent ? ». Et c’est là que le bât blesse.',
        ],
      },
      {
        title: 'Pourquoi la maison compte autant',
        content: [
          'Pour beaucoup d’aînés, la maison n’est pas qu’un toit. C’est un lieu chargé d’histoire, où l’on a élevé ses enfants, reçu ses petits-enfants, planté un jardin et construit des habitudes. Le quitter, surtout de façon précipitée après une hospitalisation, est souvent vécu comme une perte majeure, parfois comparable à un deuil.',
          'Rester chez soi, c’est aussi garder la maîtrise de sa journée : se lever à l’heure qui nous convient, manger ce que l’on aime, recevoir qui l’on veut, garder son animal de compagnie. Ces petites libertés pèsent lourd dans la qualité de vie et dans le sentiment de rester soi-même malgré la maladie ou la perte de mobilité.',
          'Il y a enfin une dimension pratique que les familles connaissent bien. À la maison, la personne connaît ses repères : où se trouvent les interrupteurs, combien de marches mènent à la chambre, où est rangé chaque objet. Cette familiarité réduit la confusion et, dans bien des cas, le risque de chute. Un environnement inconnu, au contraire, peut désorienter même une personne encore très autonome.',
          'Soigner à domicile, c’est donc respecter un choix de vie, pas seulement offrir une commodité. Mais ce choix n’est réaliste que si la maison reste un lieu sécuritaire et si les soins nécessaires peuvent y être donnés avec la même rigueur qu’ailleurs.',
        ],
        quote: 'Soigner à domicile, c’est respecter un choix de vie, pas seulement offrir une commodité.',
      },
      {
        title: 'Le soutien à domicile public : des besoins loin d’être comblés',
        content: [
          'En janvier 2024, la Commissaire à la santé et au bien-être (CSBE) a publié le dernier tome de son rapport « Bien vieillir chez soi ». Son diagnostic est sévère : l’écosystème québécois du soutien à domicile est jugé inadapté aux besoins actuels, « complexe, peu intégré et peu performant ». Le rapport formule 16 recommandations pour le transformer.',
          'Le chiffre qui a le plus marqué les esprits : en 2023, le réseau public n’aurait fourni que 25,4 millions d’heures de services sur les 234 millions nécessaires, soit 10,7 % des besoins. Le reste repose sur les proches, sur le privé, ou n’est tout simplement pas comblé. Au 31 mars 2024, quelque 16 500 personnes étaient encore inscrites sur la liste d’attente pour un premier service de soutien à domicile.',
          'Derrière ces nombres, des situations très concrètes : un pansement qui devrait être changé trois fois par semaine mais ne l’est que deux ; une prise de sang de suivi qui exige un transport adapté et une longue attente ; un retour de chirurgie sans personne pour surveiller la plaie les premiers jours.',
          'Il serait injuste d’en blâmer les équipes du réseau, qui font souvent des miracles avec les moyens dont elles disposent. Le problème est structurel : la demande augmente plus vite que les ressources, et les priorités vont, avec raison, aux situations les plus lourdes. Les besoins plus ponctuels ou moins complexes attendent, et c’est justement dans cet espace que bien des familles se retrouvent seules.',
        ],
        quote: 'Le réseau public ne comblait que 10,7 % des besoins en soutien à domicile en 2023.',
      },
      {
        title: 'Comment fonctionne le soutien à domicile du CLSC',
        content: [
          'Beaucoup de familles découvrent le soutien à domicile public au moment d’une crise, souvent à la sortie de l’hôpital. Mieux vaut en comprendre le fonctionnement à l’avance. Au Québec, la porte d’entrée est généralement le CLSC de votre territoire, qui fait partie du réseau public. Une demande peut venir de la personne elle-même, d’un proche, d’un médecin ou d’une équipe hospitalière.',
          'La demande mène à une évaluation des besoins par une intervenante ou un intervenant du réseau. Cette évaluation porte sur l’autonomie de la personne, sa santé, son entourage et son environnement. Elle sert ensuite à déterminer quels services peuvent être offerts, à quelle fréquence, et dans quel ordre de priorité par rapport aux autres demandes.',
          'Les services publics peuvent inclure des soins infirmiers, de l’aide à l’hygiène, de la réadaptation (physiothérapie, ergothérapie), du soutien psychosocial ou du répit pour les proches. Ils sont gratuits, ce qui est un avantage considérable. En contrepartie, les délais varient selon la région, l’urgence de la situation et la disponibilité du personnel.',
          'Notre conseil est simple : faites la demande au CLSC même si vous envisagez aussi des services privés. Être inscrit dans le réseau permet d’être évalué, d’avoir un dossier et d’accéder aux services publics dès qu’ils deviennent disponibles. Les soins privés peuvent ensuite combler les délais ou les besoins que le réseau ne couvre pas.',
        ],
        callout: {
          label: 'Conseil pratique',
          text: 'Lorsque vous appelez le CLSC, ayez sous la main la carte d’assurance maladie de la personne, la liste de ses médicaments, le nom de son médecin et une description précise de ce qui a changé récemment. Plus la description est concrète, plus l’évaluation est juste.',
        },
      },
      {
        title: 'La plus grande crainte : l’urgence, puis la perte d’autonomie',
        content: [
          'Demandez à un aîné ce qu’il redoute le plus, et la réponse revient presque toujours : « perdre mon autonomie » et « finir à l’hôpital ». Les deux sont liés. Pour une personne âgée fragile, un long séjour sur civière est loin d’être anodin : immobilité, sommeil perturbé, risque de confusion, de déconditionnement et d’infection.',
          'Or les urgences québécoises sont sous pression constante. Selon le bilan publié par Santé Québec en janvier 2025, la durée moyenne de séjour à l’urgence était de 18,8 heures et le taux d’occupation atteignait 115 % à l’échelle du Québec, et 141 % à Montréal. Pour un soin simple et planifiable, c’est rarement le bon endroit.',
          'À l’échelle canadienne, l’Institut canadien d’information sur la santé (ICIS) estime qu’environ un nouveau résident en soins de longue durée sur dix aurait pu demeurer à domicile avec le soutien approprié. Le Québec ne participe pas à cet indicateur, mais le message vaut partout : une partie des hébergements est évitable quand les soins se rendent à la maison à temps.',
          'Le mécanisme est connu des soignants. Une petite complication non détectée (une infection urinaire, une déshydratation, une plaie qui s’infecte, un médicament mal pris) mène à une visite à l’urgence. L’hospitalisation qui suit affaiblit la personne. Au retour, elle est moins autonome qu’avant, ce qui augmente le risque de la prochaine complication. Chaque visite infirmière qui interrompt ce cercle a donc une valeur qui dépasse largement le soin lui-même.',
        ],
      },
      {
        title: 'Préserver l’autonomie… réellement',
        content: [
          'L’autonomie ne se préserve pas avec de bonnes intentions, mais avec de la régularité. Une tension artérielle suivie chaque semaine, une glycémie bien contrôlée, des médicaments pris correctement, une plaie surveillée avant qu’elle ne s’infecte : ce sont ces gestes discrets qui permettent de rester chez soi.',
          'À domicile, l’infirmière adapte les soins aux habitudes de la personne plutôt que l’inverse. Le soin a lieu dans la cuisine ou le salon, à une heure qui respecte la routine, sans transport ni salle d’attente. Pour une personne à mobilité réduite, éviter un seul déplacement, c’est éviter la fatigue d’une journée entière, et un risque de chute de plus.',
          'Surtout, l’infirmière voit le milieu de vie réel. Elle remarque le pilulier mal rempli, le réfrigérateur vide, les souliers inadéquats, la perte de poids que personne n’avait notée. Ces observations, impossibles en quinze minutes de clinique, sont souvent celles qui préviennent la prochaine hospitalisation.',
          'Préserver l’autonomie, c’est aussi éviter de trop en faire. Une bonne infirmière à domicile ne fait pas à la place de la personne ce qu’elle peut encore faire elle-même. Elle enseigne, encourage, ajuste. L’objectif n’est pas de rendre l’aîné dépendant des visites, mais de lui donner les moyens de rester en contrôle de sa santé le plus longtemps possible.',
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
          'Il faut aussi parler de la peur de tomber. Après une première chute, même sans blessure, bien des aînés réduisent leurs activités, sortent moins, marchent moins. Cette prudence compréhensible affaiblit pourtant les muscles et l’équilibre, ce qui augmente le risque de la chute suivante. Reconnaître cette peur, en parler et proposer des solutions concrètes fait partie intégrante de la prévention.',
        ],
        callout: {
          label: 'À surveiller',
          text: 'Étourdissements au lever, chute récente même sans blessure, peur de tomber qui limite les sorties, nouveau médicament : parlez-en à une infirmière ou à votre médecin. Après une chute avec coup à la tête, douleur intense ou incapacité de se relever, composez le 911.',
        },
      },
      {
        title: 'Aménager la maison pour prévenir les chutes',
        content: [
          'La bonne nouvelle, c’est que plusieurs causes de chutes à domicile se corrigent simplement, souvent sans rénovations majeures. Il suffit parfois de faire le tour de la maison avec un regard neuf, idéalement accompagné d’une professionnelle, pour repérer ce qui pose problème.',
          'La salle de bain est souvent la pièce la plus à risque : surfaces mouillées, baignoire à enjamber, toilette trop basse. Les escaliers viennent ensuite, surtout s’ils sont mal éclairés ou sans rampe des deux côtés. La chambre compte aussi, en particulier la nuit, quand on se lève à moitié endormi pour aller aux toilettes.',
          'Pour les modifications plus importantes, comme l’installation d’un banc de bain, de barres d’appui ou d’un siège de toilette surélevé, une évaluation en ergothérapie est précieuse. L’ergothérapeute recommande l’équipement adapté à la personne et à son logement, plutôt qu’une solution générique. L’infirmière peut aider à reconnaître ce besoin et à orienter vers la bonne ressource.',
          'Enfin, n’oubliez pas les chaussures et les vêtements. Des pantoufles sans talon arrière, des bas qui glissent sur le plancher ou une robe de chambre trop longue sont des causes de chute aussi fréquentes que discrètes.',
        ],
        list: [
          'Retirer ou fixer les tapis qui glissent et dégager les fils électriques des passages',
          'Ajouter des veilleuses entre la chambre et la salle de bain',
          'Installer des barres d’appui près de la toilette et dans la douche',
          'Vérifier que les escaliers ont une rampe solide et un bon éclairage',
          'Ranger les objets du quotidien à hauteur de main, sans escabeau',
          'Porter des chaussures fermées, antidérapantes et bien ajustées, même à l’intérieur',
          'Garder un téléphone ou un bouton d’alerte accessible en tout temps',
        ],
      },
      {
        title: 'La médication : le défi silencieux',
        content: [
          'Avec l’âge, le nombre de médicaments a tendance à augmenter. Il n’est pas rare qu’une personne âgée prenne plusieurs médicaments prescrits par des médecins différents, auxquels s’ajoutent des produits en vente libre et des suppléments. Chaque ajout peut interagir avec les autres, et le corps âgé réagit parfois différemment aux mêmes doses.',
          'Les erreurs sont rarement spectaculaires. Ce sont des doses oubliées, des comprimés pris deux fois parce qu’on ne se souvenait plus, un ancien médicament qui n’a pas été retiré de l’armoire, une nouvelle posologie mal comprise après un appel avec le médecin. Pris isolément, ces petits écarts semblent anodins ; accumulés, ils peuvent causer des étourdissements, de la confusion, une chute ou une hospitalisation.',
          'À domicile, l’infirmière voit ce qui se passe réellement. Elle compare la liste officielle avec ce qu’il y a dans le pilulier et dans l’armoire, vérifie que la personne comprend à quoi sert chaque médicament et comment le prendre, et repère les signes d’effets indésirables. Elle ne modifie pas le traitement de sa propre initiative : elle documente, informe le pharmacien et le médecin, et fait le lien.',
          'Le pharmacien communautaire est un allié important dans cette démarche. Il peut préparer les médicaments en piluliers scellés, réviser l’ensemble de la médication et signaler les interactions. Une visite infirmière à domicile complète ce travail en s’assurant que ce qui a été prévu en pharmacie est bien appliqué à la maison.',
        ],
        list: [
          'Garder une liste à jour de tous les médicaments, y compris les produits naturels',
          'Apporter tous les contenants lors d’une révision de médication',
          'Utiliser un pilulier ou des piluliers préparés en pharmacie',
          'Rapporter à la pharmacie les médicaments périmés ou cessés',
          'Signaler tout nouvel étourdissement, somnolence ou confusion après un changement de traitement',
        ],
        links: [
          { label: 'Aide à la médication', href: '/services/aide-medication' },
          { label: 'Médication IM/SC', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'Maladies chroniques : la force du suivi régulier',
        content: [
          'L’hypertension, le diabète, l’insuffisance cardiaque ou les maladies pulmonaires chroniques ont un point commun : elles se gèrent dans la durée, pas en une consultation. Ce qui fait la différence, c’est la régularité du suivi et la capacité de réagir tôt quand quelque chose change.',
          'Prenons la tension artérielle. Une mesure prise au bureau du médecin, après un trajet stressant et une attente, ne reflète pas toujours la réalité. Mesurée à la maison, au repos, dans de bonnes conditions et avec un appareil vérifié, elle donne une image plus fiable. Répétée dans le temps, elle permet au médecin d’ajuster le traitement en connaissance de cause.',
          'Pour le diabète, le suivi touche plusieurs aspects : glycémies, prises de sang périodiques, soins des pieds, surveillance de petites plaies qui guérissent mal, compréhension de l’alimentation et des médicaments. Une infirmière à domicile peut vérifier la technique de mesure, inspecter les pieds, faire les prélèvements prescrits et répondre aux questions, le tout sans que la personne ait à sortir.',
          'Le suivi régulier a aussi une vertu moins visible : il crée une relation. Une infirmière qui voit la même personne à intervalles réguliers remarque les changements subtils, comme un essoufflement nouveau, des chevilles plus enflées ou une fatigue inhabituelle, qu’un professionnel qui la rencontre pour la première fois pourrait ne pas percevoir.',
        ],
        quote: 'Une maladie chronique se gère dans la durée, pas en une consultation.',
        links: [
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
          { label: 'Suivi de la tension artérielle', href: '/services/suivi-tension' },
          { label: 'Bilan complet', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'Nutrition et hydratation : des signaux à ne pas négliger',
        content: [
          'On y pense rarement, mais l’alimentation et l’hydratation sont au cœur du maintien à domicile. Avec l’âge, la sensation de soif diminue, l’appétit peut baisser, et préparer des repas complets devient plus exigeant, surtout pour une personne qui vit seule ou qui a de la difficulté à faire ses courses.',
          'Les conséquences peuvent être importantes. Une déshydratation, même légère, peut causer de la fatigue, des étourdissements, de la confusion et augmenter le risque de chute. Une alimentation insuffisante entraîne une perte de masse musculaire, ralentit la guérison des plaies et affaiblit la résistance aux infections. Ces problèmes s’installent lentement, ce qui les rend difficiles à remarquer pour l’entourage.',
          'Lors d’une visite à domicile, l’infirmière peut repérer ces signaux : vêtements devenus trop grands, réfrigérateur presque vide, bouche sèche, repas sautés, difficulté à mastiquer ou à avaler. Elle en discute avec la personne, informe le médecin au besoin et peut suggérer de consulter une nutritionniste ou de faire appel à des services de repas livrés à domicile offerts dans plusieurs régions du Québec.',
          'Pour les proches, quelques gestes simples aident beaucoup : garder une bouteille d’eau visible, proposer de petites collations nutritives, partager un repas lors des visites et noter tout changement de poids ou d’appétit. Ces informations, transmises à l’infirmière ou au médecin, orientent le suivi.',
        ],
      },
      {
        title: 'Plaies, pansements et retour d’hôpital',
        content: [
          'Le retour à la maison après une hospitalisation ou une chirurgie est une période délicate. La personne est souvent plus faible qu’avant, sa médication a pu changer, et elle rentre parfois avec une plaie, des points de suture, un cathéter ou des injections à recevoir. C’est exactement le moment où un soutien infirmier à domicile a le plus d’impact.',
          'Les plaies chez les aînés méritent une attention particulière. La peau devient plus fine et plus fragile avec l’âge, la circulation peut être moins bonne et certaines maladies, comme le diabète, ralentissent la guérison. Une petite blessure à la jambe ou une plaie de pression peut s’aggraver rapidement si elle n’est pas surveillée par un œil exercé.',
          'À domicile, l’infirmière change le pansement selon l’ordonnance, évalue l’évolution de la plaie à chaque visite et documente ce qu’elle observe. Elle reconnaît les signes d’infection ou de complication et sait quand il faut aviser le médecin. Elle peut aussi retirer les points ou les agrafes au moment prévu, évitant un déplacement supplémentaire.',
          'Pour les familles, cette présence est rassurante. Plutôt que de se demander seules si « c’est normal que ce soit rouge », elles ont une professionnelle qui regarde, explique et prend le relais.',
        ],
        callout: {
          label: 'À surveiller',
          text: 'Rougeur qui s’étend, chaleur, écoulement qui change d’aspect ou d’odeur, douleur qui augmente au lieu de diminuer, fièvre : ces signes autour d’une plaie doivent être signalés rapidement à un professionnel. En cas de malaise important, composez le 911.',
        },
        links: [
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Retrait de points', href: '/services/retrait-points' },
          { label: 'Soins de cathéters', href: '/services/catheters' },
        ],
      },
      {
        title: 'Prises de sang et prélèvements sans déplacement',
        content: [
          'Pour bien des aînés, la prise de sang de routine est l’un des rendez-vous les plus pénibles. Il faut souvent être à jeun, se lever tôt, trouver un transport, affronter parfois l’hiver et attendre, le ventre vide, dans une salle bondée. Pour une personne fragile ou diabétique, cette combinaison peut même être risquée.',
          'Or une grande partie de ces prélèvements peuvent être faits à la maison, à partir de la requête du médecin. L’infirmière se présente avec le matériel stérile, fait le prélèvement dans de bonnes conditions, puis veille à ce que les échantillons soient acheminés au laboratoire selon les règles de conservation et de transport.',
          'La même logique s’applique à d’autres prélèvements : analyses d’urine, cultures ou autres échantillons biologiques. Pour un aîné, éviter ce déplacement, c’est éviter une demi-journée de fatigue, et souvent éviter à un proche de prendre congé pour l’accompagner.',
          'Le prélèvement à domicile a aussi un avantage clinique. La personne est détendue, dans son environnement, et l’infirmière en profite pour prendre ses signes vitaux, poser quelques questions et remarquer tout changement depuis la dernière visite. Un simple rendez-vous de laboratoire devient une occasion de suivi.',
        ],
        links: [
          { label: 'Prise de sang à domicile', href: '/services/prise-sang' },
          { label: 'Prélèvements en laboratoire', href: '/services/prise-sang-labo' },
          { label: 'Analyse d’urine', href: '/services/analyse-urine' },
          { label: 'Prélèvement biologique', href: '/services/prelevement-biologique' },
        ],
      },
      {
        title: 'La vaccination des aînés, à la maison',
        content: [
          'La vaccination reste l’un des moyens les plus simples de protéger la santé des aînés. Avec l’âge, le système immunitaire répond moins vigoureusement, et certaines infections respiratoires, comme la grippe ou la COVID-19, peuvent entraîner des complications plus graves. C’est pourquoi les autorités de santé publique recommandent certains vaccins de façon particulière aux personnes âgées.',
          'Le problème, encore une fois, est souvent l’accès. Se rendre à une clinique de vaccination en pleine saison froide, faire la file et attendre ensuite la période de surveillance n’est pas simple pour une personne à mobilité réduite. Résultat : certaines personnes remettent à plus tard, puis oublient.',
          'Une infirmière à domicile peut administrer les vaccins indiqués, vérifier le carnet vaccinal, répondre aux inquiétudes et assurer la surveillance après l’injection. Elle peut aussi profiter de la visite pour vacciner le conjoint ou le proche aidant qui vit sous le même toit, ce qui protège toute la maisonnée.',
          'Pour savoir quels vaccins sont recommandés selon votre âge et votre état de santé, référez-vous au Protocole d’immunisation du Québec, à votre pharmacien ou à votre médecin. L’infirmière pourra ensuite vous aider à mettre votre carnet à jour.',
          'Une visite de vaccination à domicile est aussi un bon moment pour faire le point plus largement : revoir la liste des médicaments, prendre la tension, vérifier l’état de la peau ou d’une plaie, et répondre aux questions que la personne n’a pas osé poser à son médecin. Profiter de chaque visite pour regarder l’ensemble de la situation, plutôt qu’un seul geste isolé, est au cœur de l’approche que nous voulons offrir.',
        ],
        links: [
          { label: 'Vaccin contre la grippe', href: '/services/grippe' },
          { label: 'Vaccin contre la COVID-19', href: '/services/covid' },
          { label: 'Carnet vaccinal', href: '/services/carnet-vaccinal' },
        ],
      },
      {
        title: 'Un impact direct sur la santé mentale',
        content: [
          'Rester chez soi, c’est conserver ses repères : son fauteuil, son quartier, ses voisins, son animal de compagnie, ses souvenirs. Pour une personne âgée, et plus encore pour une personne vivant avec des troubles cognitifs, cet environnement familier est un facteur de stabilité.',
          'L’isolement demeure toutefois un risque réel chez les aînés qui vivent seuls. La visite régulière d’une même infirmière devient alors plus qu’un acte de soin : c’est un contact humain prévisible, une personne de confiance qui remarque un changement d’humeur, une perte d’appétit, un désintérêt inhabituel, et qui peut orienter vers les bonnes ressources.',
          'Se sentir soigné sans se sentir « placé » change profondément le rapport à la maladie. On demeure une personne chez elle, et non un patient dans un lit.',
          'La santé mentale des aînés est parfois négligée parce que ses signes sont confondus avec « l’âge ». Pourtant, la tristesse persistante, le repli sur soi ou l’anxiété ne sont pas des conséquences normales du vieillissement. En parler, les nommer et orienter vers un médecin ou un service psychosocial fait partie d’un bon suivi à domicile.',
        ],
      },
      {
        title: 'Troubles cognitifs : soigner dans un environnement familier',
        content: [
          'Pour une personne qui vit avec la maladie d’Alzheimer ou un autre trouble neurocognitif, chaque changement d’environnement peut être déstabilisant. Une salle d’attente bruyante, un visage inconnu, un trajet inhabituel peuvent provoquer de l’anxiété, de l’agitation ou de la confusion qui durent bien au-delà du rendez-vous.',
          'Les soins à domicile limitent ces bouleversements. Le soin se déroule là où la personne se sent en sécurité, entourée de ses objets et, idéalement, en présence d’un proche qu’elle connaît. Lorsque c’est possible, voir la même infirmière d’une visite à l’autre aide aussi à créer un climat de confiance.',
          'L’infirmière adapte sa façon de communiquer : phrases courtes, gestes expliqués un à un, patience, attention au non-verbal. Elle observe aussi l’évolution : difficultés nouvelles avec les médicaments, perte de poids, changements de comportement, signes d’épuisement chez le proche aidant. Ces observations sont précieuses pour l’équipe médicale qui suit la personne.',
          'Il faut toutefois être honnête : les soins infirmiers ponctuels ne remplacent pas la surveillance continue qu’exigent certains stades avancés de la maladie. Lorsque la sécurité de la personne n’est plus assurée à la maison, une discussion avec l’équipe du CLSC et le médecin s’impose pour envisager d’autres options.',
        ],
      },
      {
        title: 'Un répit pour les proches aidants',
        content: [
          'Derrière presque chaque aîné qui vit à domicile, il y a un proche qui tient le système à bout de bras. Selon l’Institut de la statistique du Québec, environ 1,5 million de Québécois de 15 ans et plus, soit plus d’une personne sur cinq, étaient proches aidants en 2018. Près de 60 % d’entre eux occupaient un emploi en même temps.',
          'Conduire un parent à ses rendez-vous, gérer ses médicaments, surveiller une plaie sans formation : la charge est lourde, et l’inquiétude constante. « Est-ce que je fais bien les choses ? Est-ce que c’est normal que ce soit rouge ? »',
          'Confier les soins cliniques à une infirmière ne remplace pas le proche aidant ; cela lui redonne son rôle de fils, de fille ou de conjoint. L’infirmière prend en charge le geste technique, enseigne ce qu’il faut surveiller et devient une interlocutrice à qui poser ses questions. Pour bien des familles, c’est la différence entre tenir le coup et s’épuiser.',
          'L’épuisement des proches aidants est un risque réel, et il s’installe souvent sans bruit : fatigue, irritabilité, sommeil perturbé, sentiment de culpabilité, abandon de ses propres rendez-vous médicaux. Reconnaître ces signes chez soi n’est pas un échec. C’est le signal qu’il faut partager la charge, que ce soit avec le réseau public, des organismes communautaires, d’autres membres de la famille ou des services privés.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Au Québec, plusieurs organismes communautaires et services régionaux offrent de l’écoute, de l’information et du répit aux proches aidants. Votre CLSC peut vous orienter vers les ressources de votre région.',
        },
      },
      {
        title: 'Proche aidant à distance : coordonner les soins d’un parent',
        content: [
          'De plus en plus d’enfants adultes vivent loin de leurs parents : dans une autre ville, une autre région, parfois une autre province. Ils veulent aider, mais ne peuvent pas être présents pour chaque rendez-vous. Cette situation génère beaucoup d’inquiétude et un sentiment d’impuissance.',
          'La première étape est d’organiser l’information. Rassemblez dans un même document la liste des médicaments, les coordonnées du médecin, de la pharmacie et du CLSC, les diagnostics connus, les allergies et les noms des personnes à joindre. Ce document sera utile à chaque professionnel qui interviendra, et vous évitera de tout répéter.',
          'La deuxième étape est de clarifier les rôles et le consentement. Parlez avec votre parent de ce qu’il accepte que vous sachiez et fassiez en son nom. Selon sa situation, certaines démarches légales, comme une procuration ou un mandat de protection, peuvent être utiles ; un notaire pourra vous conseiller.',
          'Enfin, appuyez-vous sur des services qui facilitent la coordination à distance. Avec MobiSoins, un proche pourra réserver une visite pour un parent, indiquer les consignes importantes et recevoir la confirmation du rendez-vous. Avec l’accord du parent, il sera possible d’être tenu informé du déroulement de la visite. La distance ne disparaît pas, mais l’inquiétude diminue.',
        ],
        list: [
          'Un document partagé avec médicaments, allergies, diagnostics et contacts',
          'Un accord clair avec le parent sur ce que vous pouvez faire en son nom',
          'Un proche ou un voisin de confiance joignable sur place',
          'Des rendez-vous planifiés à l’avance plutôt qu’en situation de crise',
        ],
      },
      {
        title: 'Trois parcours pour comprendre',
        content: [
          'Pour rendre tout cela plus concret, voici trois situations fictives, mais représentatives de ce que vivent de nombreuses familles québécoises. Les noms et les détails sont inventés ; les défis, eux, sont bien réels.',
          'Premier parcours : Gisèle, 81 ans, vit seule dans un appartement à Québec. Elle a fait une chute légère le mois dernier et a depuis moins envie de sortir. Son fils habite à Montréal. Lors d’une visite à domicile, l’infirmière mesure sa tension couchée puis debout, remarque que Gisèle se sent étourdie en se levant, et découvre qu’un nouveau médicament a été ajouté récemment. Elle en informe le pharmacien et le médecin, recommande une évaluation en ergothérapie et suggère de fixer le tapis du corridor.',
          'Deuxième parcours : Robert, 76 ans, sort de l’hôpital après une chirurgie à la jambe. Il a un pansement à changer régulièrement et des points à retirer. Sa conjointe, elle-même âgée, ne conduit pas. Plutôt que d’organiser plusieurs transports, une infirmière vient refaire le pansement à la maison, surveille la cicatrisation et retire les points au moment prévu.',
          'Troisième parcours : Louise, 72 ans, vit avec le diabète et s’occupe de son mari atteint de troubles cognitifs. Elle reporte ses propres prises de sang parce qu’elle ne peut pas le laisser seul. Une infirmière vient faire le prélèvement de Louise à domicile, vérifie ses pieds et prend le temps de parler avec elle de sa fatigue. Pour la première fois depuis longtemps, Louise a l’impression que quelqu’un s’occupe aussi d’elle.',
          'Dans les trois cas, ce n’est pas un geste spectaculaire qui change les choses, mais une visite bien placée, au bon moment, par une professionnelle qui regarde l’ensemble de la situation.',
        ],
        links: [
          { label: 'Suivi de la tension (aînés)', href: '/services/suivi-tension-aines' },
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
        ],
      },
      {
        title: 'Reconnaître le moment de demander de l’aide',
        content: [
          'Beaucoup de familles attendent la crise avant d’organiser des soins à domicile. Pourtant, les signaux sont souvent là bien avant. Les repérer tôt permet d’agir de façon planifiée, dans le calme, plutôt que dans l’urgence d’une sortie d’hôpital.',
          'Certains signes concernent la santé : une perte de poids, une plaie qui ne guérit pas, des étourdissements, un essoufflement nouveau, des médicaments qui s’accumulent ou manquent. D’autres concernent le quotidien : un réfrigérateur vide, du courrier non ouvert, une maison moins entretenue qu’avant, des vêtements inadaptés à la saison.',
          'Il y a aussi les signes plus subtils : un parent qui annule ses sorties, qui semble plus confus au téléphone, qui répète les mêmes questions, ou qui minimise systématiquement ce qui ne va pas pour ne pas inquiéter ses enfants. Ces changements méritent une conversation franche et bienveillante.',
          'Aborder le sujet avec un parent n’est pas toujours facile. Mieux vaut présenter l’aide comme un moyen de rester chez soi plus longtemps, et non comme un premier pas vers la perte d’autonomie. Impliquer la personne dans les décisions, respecter ses préférences et commencer par un service ciblé rendent souvent la transition beaucoup plus acceptable.',
        ],
        list: [
          'Chute récente ou peur de tomber qui limite les déplacements',
          'Erreurs ou oublis dans la prise des médicaments',
          'Perte de poids, perte d’appétit ou repas sautés',
          'Plaie, rougeur ou enflure qui ne s’améliore pas',
          'Rendez-vous médicaux reportés faute de transport',
          'Proche aidant visiblement épuisé',
        ],
      },
      {
        title: 'Combien ça coûte ? Le crédit d’impôt que trop d’aînés ignorent',
        content: [
          'Le coût est souvent la première objection aux soins privés à domicile, et il est légitime d’en parler franchement. Les soins infirmiers privés ne sont généralement pas couverts par la RAMQ. En revanche, plusieurs mécanismes allègent la facture.',
          'Le principal est le crédit d’impôt pour maintien à domicile des aînés, offert par le gouvernement du Québec aux personnes de 70 ans et plus. C’est un crédit remboursable (il est versé même si vous ne payez pas d’impôt) dont le taux est bonifié graduellement : 38 % des dépenses admissibles en 2024, 39 % en 2025 et 40 % en 2026, jusqu’à un plafond annuel qui varie selon votre degré d’autonomie. Les services infirmiers figurent parmi les services admissibles.',
          'À cela peuvent s’ajouter le remboursement par une assurance collective ou privée, ainsi que les crédits d’impôt pour frais médicaux, au fédéral comme au provincial. Les règles comportent des conditions : conservez tous vos reçus et validez votre situation auprès de Revenu Québec ou d’un spécialiste en fiscalité.',
          'Il est utile de comparer le coût d’une visite avec ce qu’elle évite réellement : un transport adapté ou un taxi aller-retour, une journée de congé pour le proche qui accompagne, le stationnement, et surtout les complications qui auraient pu mener à une hospitalisation. Ce calcul ne se fait pas qu’en dollars, mais il aide à voir la dépense autrement.',
          'Chez MobiSoins, nous voulons que le prix soit clair avant la réservation, sans surprise. Nous publierons nos tarifs au moment du lancement de nos premières visites, et nos reçus seront conçus pour faciliter vos démarches de crédit d’impôt et de remboursement.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Le crédit d’impôt pour maintien à domicile peut être demandé par versements anticipés, en cours d’année, plutôt que d’attendre la déclaration de revenus. Renseignez-vous auprès de Revenu Québec.',
        },
      },
      {
        title: 'Choisir un service de soins à domicile : les bonnes questions',
        content: [
          'Faire entrer une professionnelle chez un parent âgé demande de la confiance. Avant de choisir un service privé de soins à domicile, prenez le temps de poser quelques questions simples. Un service sérieux y répondra sans hésiter.',
          'La première concerne les qualifications. Au Québec, une infirmière doit être membre de l’Ordre des infirmières et infirmiers du Québec (OIIQ) pour exercer, et le public peut vérifier qu’elle est bien inscrite. Demandez aussi comment le service sélectionne son personnel, s’il vérifie les références et comment il encadre la qualité des soins.',
          'La deuxième porte sur l’organisation : comment se fait la réservation, qui révise la demande, combien de temps à l’avance il faut réserver, que se passe-t-il en cas d’annulation, et comment les résultats ou observations sont transmis au médecin. Un bon service doit aussi être clair sur ce qu’il ne fait pas, notamment les situations urgentes.',
          'La troisième concerne le prix et la transparence : le coût total est-il connu d’avance, y a-t-il des frais de déplacement, les reçus sont-ils détaillés ? Enfin, fiez-vous à votre impression. La personne âgée doit se sentir respectée, écoutée et en sécurité.',
        ],
        list: [
          'L’infirmière est-elle membre de l’OIIQ ?',
          'Qui révise la demande avant la visite et vérifie qu’elle convient au domicile ?',
          'Le prix est-il connu avant la réservation, et les reçus sont-ils détaillés ?',
          'Comment les résultats et observations sont-ils transmis au médecin ?',
          'Que fait le service en cas de situation urgente pendant ou après la visite ?',
        ],
      },
      {
        title: 'Comment fonctionnera une visite MobiSoins pour un aîné',
        content: [
          'MobiSoins est conçu pour que les soins viennent aux aînés, et non l’inverse. Voici, étape par étape, comment se dérouleront les visites que nous préparons au Québec.',
          'Tout commence par une demande en ligne, qui prend quelques minutes. L’aîné lui-même ou un proche indique le type de soin, l’adresse, le moment souhaité et, si nécessaire, la requête ou l’ordonnance du médecin. Il est aussi possible de préciser des informations utiles : mobilité réduite, trouble auditif, présence d’un proche, code d’accès de l’immeuble.',
          'Une infirmière coordonnatrice révise ensuite chaque demande. Elle s’assure que le soin peut être donné à domicile en toute sécurité, vérifie les documents, et communique avec vous si des précisions sont nécessaires. Si la situation relève plutôt de l’urgence ou d’un autre service, elle vous le dira clairement.',
          'Le jour de la visite, une infirmière membre de l’OIIQ se présente avec le matériel stérile nécessaire. Elle prend le temps de se présenter, de vérifier l’identité de la personne, d’expliquer chaque étape et de répondre aux questions. Après le soin, les prélèvements sont acheminés au laboratoire, les observations pertinentes sont documentées et les consignes sont laissées, par écrit au besoin.',
        ],
        list: [
          'Réservation en ligne en quelques minutes, par l’aîné ou un proche',
          'Révision de chaque demande par une infirmière coordonnatrice',
          'Visite par une infirmière membre de l’OIIQ, avec matériel stérile à usage unique',
          'Acheminement des prélèvements et transmission des informations au prescripteur',
          'Consignes claires et possibilité de planifier un suivi régulier',
        ],
        links: [
          { label: 'Soins à domicile pour aînés', href: '/services/soins-domicile-aines' },
          { label: 'Consultation-conseil infirmière', href: '/services/consultation-conseil' },
        ],
      },
      {
        title: 'Où MobiSoins s’inscrit dans ce portrait',
        content: [
          'MobiSoins ne prétend pas remplacer le CLSC, le médecin de famille ou l’urgence. Notre rôle est de combler l’espace entre les trois : des soins infirmiers planifiés, donnés à la maison par des infirmières membres de l’OIIQ, sans liste d’attente de plusieurs mois et sans déplacement.',
          'Concrètement : prises de sang et prélèvements, pansements et soins de plaies, suivi de la tension et du diabète, aide à la médication, vaccination, injections prescrites. Vous réserverez en quelques minutes, pour vous-même ou pour un parent, et vous saurez à l’avance qui vient et quand.',
          'Nous croyons que les soins à domicile doivent être simples à obtenir, transparents dans leur prix et rigoureux dans leur pratique. Nous croyons aussi qu’une infirmière qui entre dans la maison d’un aîné doit prendre le temps : le temps d’expliquer, d’écouter et de remarquer ce qui a changé.',
          'Nous préparons actuellement nos premières visites au Québec. En vous inscrivant à la liste d’attente, vous nous indiquez les soins dont votre famille a besoin et la région où vous habitez : c’est ce qui guide notre déploiement.',
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
        a: 'Oui. Un proche pourra s’occuper de la réservation pour un parent. Il est recommandé qu’une personne de confiance soit présente lors de la première visite si l’aîné le souhaite, et que le parent soit d’accord avec la démarche.',
      },
      {
        q: 'Les soins à domicile sont-ils aussi sécuritaires qu’en clinique ?',
        a: 'Pour les soins qui s’y prêtent, oui : l’infirmière applique les mêmes protocoles cliniques, utilise du matériel stérile à usage unique et repart avec les déchets biomédicaux. Les situations urgentes ou instables relèvent toutefois de l’hôpital.',
      },
      {
        q: 'Faut-il une ordonnance pour recevoir des soins infirmiers à domicile ?',
        a: 'Cela dépend du soin. Une prise de sang, un pansement prescrit ou une injection nécessitent généralement une requête ou une ordonnance. D’autres services, comme certains vaccins ou une consultation-conseil, peuvent ne pas en exiger. L’infirmière coordonnatrice vous le précisera lors de la révision de votre demande.',
      },
      {
        q: 'Mon parent a des troubles de mémoire. Peut-il recevoir des soins à domicile ?',
        a: 'Oui, et le domicile est souvent l’endroit le plus rassurant pour lui. Nous recommandons qu’un proche soit présent pendant la visite et que les informations importantes (médicaments, consignes du médecin) soient disponibles. L’infirmière adaptera sa communication à la situation.',
      },
      {
        q: 'Les soins privés à domicile sont-ils remboursés par les assurances ?',
        a: 'Certaines assurances collectives ou privées remboursent une partie des soins infirmiers, selon les conditions du contrat. Vérifiez votre couverture auprès de votre assureur et conservez vos reçus, qui peuvent aussi servir pour les crédits d’impôt.',
      },
      {
        q: 'Que faire en cas d’urgence ?',
        a: 'MobiSoins offre des soins planifiés et non urgents. En cas d’urgence, composez le 911. Pour un conseil de santé non urgent, appelez Info-Santé au 811.',
      },
    ],
    sources: [
      { label: 'Institut de la statistique du Québec : Vitrine statistique sur le vieillissement, effectifs et proportions par groupe d’âge', url: SOURCES_URLS.isq },
      { label: 'Institut national de santé publique du Québec (INSPQ) : Le vieillissement au Québec', url: SOURCES_URLS.inspqAging },
      { label: 'INSPQ : Chutes chez les aînés', url: SOURCES_URLS.inspqFalls },
      { label: 'Commissaire à la santé et au bien-être (CSBE), janvier 2024 : Bien vieillir chez soi, tome 4, une transformation qui s’impose', url: SOURCES_URLS.csbe },
      { label: 'Radio-Canada, 2024 : Soutien à domicile, données du rapport du CSBE et liste d’attente', url: SOURCES_URLS.rc },
      { label: 'Institut canadien d’information sur la santé (ICIS) : Nouveaux résidents en soins de longue durée qui auraient pu recevoir des soins à domicile', url: SOURCES_URLS.cihi },
      { label: 'Institut de la statistique du Québec : Portrait de la proche aidance en 2018', url: SOURCES_URLS.caregivers },
      { label: 'Santé Québec, 31 janvier 2025 : Situation des urgences au Québec', url: SOURCES_URLS.er },
      { label: 'Chaire en fiscalité et en finances publiques, Université de Sherbrooke : Crédit d’impôt pour maintien à domicile des aînés', url: SOURCES_URLS.credit },
    ],
    conclusion: {
      title: 'Ce qu’il faut retenir',
      content: [
        'Vieillir chez soi n’est pas un luxe : c’est ce que souhaitent la plupart des aînés, et ce qui devient possible lorsque les soins se rendent jusqu’à eux.',
        'Le réseau public ne suffit pas à la demande, et les familles ne peuvent pas tout porter. Des soins infirmiers réguliers à domicile préservent l’autonomie, préviennent les chutes et les complications, sécurisent la médication et redonnent du souffle aux proches.',
        'Le meilleur moment pour organiser ces soins n’est pas après la crise, mais avant. Faites la demande au CLSC, parlez-en avec votre parent, préparez l’information utile, et appuyez-vous sur des services qui complètent le réseau. MobiSoins prépare ses premières visites au Québec, et nous serons heureux de vous accompagner.',
      ],
    },
  },
  EN: {
    slug: 'soins-aines',
    tag: 'Seniors',
    date: 'Updated September 2026',
    title: 'The Benefits of Home Care for Seniors',
    subtitle:
      'Quebec is aging faster than its health network can adapt. Between home-support waitlists, overflowing emergency rooms, and exhausted family caregivers, aging at home has become both what most people want and a genuine obstacle course. This complete guide explains what the numbers say, where the real risks at home lie (falls, medications, chronic illness, isolation), how to support a parent without burning out, what care costs and how to reduce the bill, and what home nursing care can concretely change.',
    readTime: '35 min',
    image: '/images/articles/soins-aines.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'By 2031, one in four Quebecers will be 65 or older. The vast majority of seniors live, and want to stay, at home.',
      'According to Quebec’s Health and Welfare Commissioner, the public network met only 10.7% of home-support needs in 2023.',
      'One in three seniors living at home falls each year: prevention and clinical monitoring at home matter.',
      'Medications, chronic illness and returning home from hospital are the moments when a home nursing visit makes the biggest difference.',
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
        title: 'A Quebec that is aging, and aging at home',
        content: [
          'The figures from the Institut de la statistique du Québec are unambiguous: in 2021, 1.7 million Quebecers were 65 or older, or 20% of the population. That share will reach 25% by 2031. Within a generation, Quebec has gone from one person in six to one in four in this age group.',
          'Contrary to a stubborn belief, aging does not mean moving into a facility. The INSPQ points out that most seniors live at home with relative independence, and that this is still true of 62% of people aged 85 and over. Home is not the fallback option: it is where, by far, most aging actually happens.',
          'Aging at home takes many forms. There is the retired couple still living in the family house in the suburbs, the widow living alone in a Montreal apartment, the father who has moved into the in-law suite built at his daughter’s home, and the person who has chosen a private seniors’ residence while still living in their own unit. Each situation calls for different care, but they all share one thing: health is managed day to day at home.',
          'This has a direct consequence for how care is organized. A system designed around the patient travelling to the hospital, the clinic or the specimen collection centre works poorly for a population in which a growing share has trouble getting around, no longer drives, or lives far from services. The older the population gets, the more sense it makes for care to do the travelling.',
          'So the real question is not “should seniors be cared for at home?” but “how do we make sure care actually gets there?” And that is where things break down.',
        ],
      },
      {
        title: 'Why home matters so much',
        content: [
          'For many seniors, home is more than a roof. It is a place full of history, where they raised their children, welcomed their grandchildren, planted a garden and built their routines. Leaving it, especially abruptly after a hospital stay, is often experienced as a major loss, sometimes comparable to grief.',
          'Staying at home also means keeping control of your day: getting up when you want, eating what you like, having whomever you choose over, keeping your pet. These small freedoms weigh heavily on quality of life and on the feeling of remaining yourself despite illness or reduced mobility.',
          'Finally, there is a practical side that families know well. At home, a person knows their landmarks: where the light switches are, how many steps lead to the bedroom, where everything is kept. That familiarity reduces confusion and, in many cases, the risk of falling. An unfamiliar environment, by contrast, can disorient even a person who is still very independent.',
          'Caring for someone at home therefore means respecting a life choice, not just offering convenience. But that choice is only realistic if home remains a safe place and if the care needed can be delivered there with the same rigour as anywhere else.',
        ],
        quote: 'Caring for someone at home means respecting a life choice, not just offering convenience.',
      },
      {
        title: 'Public home support: needs far from being met',
        content: [
          'In January 2024, Quebec’s Health and Welfare Commissioner (CSBE) released the final volume of her report “Bien vieillir chez soi” (Aging Well at Home). The diagnosis is harsh: Quebec’s home-support ecosystem is deemed ill-suited to current needs, “complex, poorly integrated and underperforming.” The report makes 16 recommendations to transform it.',
          'The figure that made headlines: in 2023, the public network reportedly delivered only 25.4 million hours of service out of the 234 million needed, or 10.7% of needs. The rest falls to families, to the private sector, or simply goes unmet. As of March 31, 2024, some 16,500 people were still on the waitlist for a first home-support service.',
          'Behind these numbers are very concrete situations: a dressing that should be changed three times a week but only gets two; follow-up blood work that requires adapted transport and a long wait; a return home from surgery with no one to watch the wound during the first few days.',
          'It would be unfair to blame the network’s teams, who often work miracles with the means they have. The problem is structural: demand is growing faster than resources, and priority rightly goes to the most complex situations. More occasional or less complex needs wait, and that is precisely the space where many families find themselves on their own.',
        ],
        quote: 'The public network met only 10.7% of home-support needs in 2023.',
      },
      {
        title: 'How CLSC home support works',
        content: [
          'Many families discover public home support in the middle of a crisis, often at hospital discharge. It is better to understand how it works ahead of time. In Quebec, the entry point is generally the CLSC for your area, which is part of the public network. A request can come from the person, a family member, a physician or a hospital team.',
          'The request leads to a needs assessment by a member of the network’s staff. The assessment looks at the person’s autonomy, health, support network and environment. It is then used to determine which services can be offered, how often, and in what order of priority relative to other requests.',
          'Public services can include nursing care, help with hygiene, rehabilitation (physiotherapy, occupational therapy), psychosocial support or respite for caregivers. They are free, which is a considerable advantage. In return, wait times vary by region, by the urgency of the situation and by staff availability.',
          'Our advice is simple: apply to the CLSC even if you are also considering private services. Being registered in the network means being assessed, having a file and gaining access to public services as soon as they become available. Private care can then fill the delays or the needs the network does not cover.',
        ],
        callout: {
          label: 'Practical tip',
          text: 'When you call the CLSC, have the person’s health insurance card, their medication list, their doctor’s name and a precise description of what has changed recently at hand. The more concrete the description, the more accurate the assessment.',
        },
      },
      {
        title: 'The biggest fear: the ER, then losing independence',
        content: [
          'Ask an older adult what they dread most, and the answer is almost always the same: “losing my independence” and “ending up in hospital.” The two are linked. For a frail older person, a long stay on a stretcher is far from harmless: immobility, disrupted sleep, and a risk of confusion, deconditioning, and infection.',
          'Yet Quebec’s emergency rooms are under constant pressure. According to the update published by Santé Québec in January 2025, the average ER length of stay was 18.8 hours and the occupancy rate reached 115% province-wide, and 141% in Montreal. For simple care that can be scheduled, it is rarely the right place.',
          'Across Canada, the Canadian Institute for Health Information (CIHI) estimates that around one in ten new long-term-care residents could potentially have remained at home with the right support. Quebec does not take part in this indicator, but the message applies everywhere: some admissions are avoidable when care reaches the home in time.',
          'Care teams know the pattern well. A small undetected complication (a urinary tract infection, dehydration, an infected wound, a medication taken incorrectly) leads to an ER visit. The hospital stay that follows weakens the person. Back home, they are less independent than before, which raises the risk of the next complication. Every nursing visit that breaks this cycle is worth far more than the care itself.',
        ],
      },
      {
        title: 'Truly preserving independence',
        content: [
          'Independence is not preserved with good intentions but with consistency. Blood pressure checked every week, well-controlled blood sugar, medications taken correctly, a wound monitored before it becomes infected: these quiet routines are what allow a person to stay at home.',
          'At home, the nurse adapts care to the person’s habits rather than the other way around. Care happens in the kitchen or living room, at a time that respects their routine, with no transport and no waiting room. For someone with reduced mobility, avoiding a single outing means avoiding a full day of fatigue, and one more fall risk.',
          'Above all, the nurse sees the real living environment. She notices the badly filled pill organizer, the empty fridge, the unsuitable footwear, the weight loss no one had spotted. These observations, impossible in a fifteen-minute clinic slot, are often the ones that prevent the next hospital stay.',
          'Preserving independence also means not doing too much. A good home-care nurse does not do for the person what they can still do themselves. She teaches, encourages, adjusts. The goal is not to make the senior dependent on visits, but to give them the means to stay in control of their health for as long as possible.',
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
          'The INSPQ estimates that about one million seniors live at home in Quebec, and that one third of them will fall during the year. Falls lead to more than 21,000 hospitalizations a year in Quebec on average (71% of them among people 65 and over) and more than 1,000 deaths annually, overwhelmingly among seniors.',
          'A fall is rarely pure chance. It usually results from a combination of factors: medications that cause dizziness, blood pressure that drops on standing, dehydration, muscle weakness, poor lighting, loose rugs or trailing cords. Several of these can be spotted by a nurse during a home visit.',
          'Reviewing medications with the pharmacist and physician, measuring blood pressure lying down and then standing, teaching how to get back up, recommending an occupational-therapy assessment: fall prevention happens in the living environment, not in an office.',
          'We also need to talk about the fear of falling. After a first fall, even without injury, many seniors cut back on activities, go out less and walk less. This understandable caution weakens muscles and balance, which raises the risk of the next fall. Recognizing that fear, talking about it and offering concrete solutions is an integral part of prevention.',
        ],
        callout: {
          label: 'Watch for',
          text: 'Dizziness on standing, a recent fall even without injury, fear of falling that limits outings, a new medication: raise it with a nurse or your doctor. After a fall involving a blow to the head, severe pain, or inability to get up, call 911.',
        },
      },
      {
        title: 'Adapting the home to prevent falls',
        content: [
          'The good news is that many causes of falls at home are easy to fix, often without major renovations. Sometimes all it takes is walking through the house with fresh eyes, ideally alongside a professional, to spot what is causing problems.',
          'The bathroom is often the riskiest room: wet surfaces, a tub to step over, a toilet that is too low. Stairs come next, especially if they are poorly lit or lack a handrail on both sides. The bedroom matters too, particularly at night, when you get up half asleep to go to the bathroom.',
          'For larger changes, such as installing a bath bench, grab bars or a raised toilet seat, an occupational-therapy assessment is invaluable. The occupational therapist recommends equipment suited to the person and their home rather than a generic solution. The nurse can help recognize that need and refer to the right resource.',
          'Finally, do not forget footwear and clothing. Slippers without a back, socks that slide on the floor or a bathrobe that is too long are causes of falls that are as common as they are easy to overlook.',
        ],
        list: [
          'Remove or secure slippery rugs and clear electrical cords from walkways',
          'Add night lights between the bedroom and the bathroom',
          'Install grab bars near the toilet and in the shower',
          'Check that stairs have a sturdy handrail and good lighting',
          'Store everyday items within easy reach, with no step stool needed',
          'Wear closed, non-slip, well-fitted shoes, even indoors',
          'Keep a phone or alert button within reach at all times',
        ],
      },
      {
        title: 'Medications: the silent challenge',
        content: [
          'With age, the number of medications tends to grow. It is not unusual for an older person to take several medications prescribed by different doctors, plus over-the-counter products and supplements. Each addition can interact with the others, and an older body sometimes reacts differently to the same doses.',
          'Errors are rarely dramatic. They are missed doses, pills taken twice because the person could not remember, an old medication that was never cleared from the cupboard, a new dosage misunderstood after a phone call with the doctor. Taken one by one, these small slips seem harmless; added up, they can cause dizziness, confusion, a fall or a hospital stay.',
          'At home, the nurse sees what is really happening. She compares the official list with what is in the pill organizer and the cupboard, checks that the person understands what each medication is for and how to take it, and watches for signs of side effects. She does not change the treatment on her own initiative: she documents, informs the pharmacist and physician, and connects the dots.',
          'The community pharmacist is an important ally here. They can prepare medications in sealed blister packs, review the full medication list and flag interactions. A home nursing visit complements this work by making sure what was planned at the pharmacy is actually happening at home.',
        ],
        list: [
          'Keep an up-to-date list of all medications, including natural products',
          'Bring every container to a medication review',
          'Use a pill organizer or pharmacy-prepared blister packs',
          'Return expired or discontinued medications to the pharmacy',
          'Report any new dizziness, drowsiness or confusion after a treatment change',
        ],
        links: [
          { label: 'Medication assistance', href: '/services/aide-medication' },
          { label: 'IM/SC medication', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'Chronic illness: the power of regular follow-up',
        content: [
          'High blood pressure, diabetes, heart failure and chronic lung disease have one thing in common: they are managed over time, not in a single appointment. What makes the difference is the regularity of follow-up and the ability to react early when something changes.',
          'Take blood pressure. A reading taken in the doctor’s office, after a stressful trip and a wait, does not always reflect reality. Measured at home, at rest, under good conditions and with a verified device, it gives a more reliable picture. Repeated over time, it lets the doctor adjust treatment with real information.',
          'For diabetes, follow-up touches several areas: blood sugar, periodic blood tests, foot care, watching small wounds that heal poorly, and understanding diet and medications. A home-care nurse can check measurement technique, inspect the feet, take prescribed samples and answer questions, all without the person having to go out.',
          'Regular follow-up also has a less visible benefit: it builds a relationship. A nurse who sees the same person at regular intervals notices subtle changes, such as new shortness of breath, more swollen ankles or unusual fatigue, that a professional meeting them for the first time might miss.',
        ],
        quote: 'A chronic illness is managed over time, not in a single appointment.',
        links: [
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
          { label: 'Blood-pressure monitoring', href: '/services/suivi-tension' },
          { label: 'Full check-up', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'Nutrition and hydration: signals not to ignore',
        content: [
          'It rarely comes to mind, but nutrition and hydration are central to staying at home. With age, the sense of thirst weakens, appetite can decline, and preparing complete meals becomes harder, especially for someone who lives alone or has trouble getting groceries.',
          'The consequences can be significant. Dehydration, even mild, can cause fatigue, dizziness and confusion and raise the risk of falling. Inadequate nutrition leads to loss of muscle mass, slows wound healing and weakens resistance to infection. These problems develop slowly, which makes them hard for loved ones to notice.',
          'During a home visit, the nurse can spot these signals: clothes that have become too big, a nearly empty fridge, a dry mouth, skipped meals, difficulty chewing or swallowing. She discusses them with the person, informs the physician if needed and may suggest seeing a dietitian or using the meal-delivery services offered in many regions of Quebec.',
          'For family members, a few simple habits help a lot: keep a water bottle in sight, offer small nutritious snacks, share a meal during visits and note any change in weight or appetite. Passed on to the nurse or physician, this information guides follow-up.',
        ],
      },
      {
        title: 'Wounds, dressings and coming home from hospital',
        content: [
          'Returning home after a hospital stay or surgery is a delicate period. The person is often weaker than before, their medications may have changed, and they sometimes come home with a wound, stitches, a catheter or injections to receive. This is exactly when home nursing support has the greatest impact.',
          'Wounds in seniors deserve particular attention. Skin becomes thinner and more fragile with age, circulation may be poorer, and some conditions, such as diabetes, slow healing. A small leg injury or a pressure sore can worsen quickly if it is not watched by a trained eye.',
          'At home, the nurse changes the dressing as prescribed, assesses how the wound is progressing at each visit and documents what she sees. She recognizes signs of infection or complications and knows when the physician needs to be told. She can also remove stitches or staples at the scheduled time, avoiding another trip.',
          'For families, this presence is reassuring. Instead of wondering alone whether “it is normal for it to be this red,” they have a professional who looks, explains and takes over.',
        ],
        callout: {
          label: 'Watch for',
          text: 'Spreading redness, warmth, discharge that changes in appearance or smell, pain that increases instead of easing, fever: these signs around a wound should be reported promptly to a professional. If the person feels seriously unwell, call 911.',
        },
        links: [
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'Stitch removal', href: '/services/retrait-points' },
          { label: 'Catheter care', href: '/services/catheters' },
        ],
      },
      {
        title: 'Blood draws and samples without the trip',
        content: [
          'For many seniors, routine blood work is one of the most exhausting appointments. They often need to fast, get up early, find transportation, sometimes brave the winter, and wait on an empty stomach in a crowded room. For a frail or diabetic person, that combination can even be risky.',
          'Yet many of these samples can be taken at home, based on the physician’s requisition. The nurse arrives with sterile supplies, takes the sample under good conditions, then makes sure the specimens reach the laboratory according to storage and transport rules.',
          'The same logic applies to other samples: urine tests, cultures and other biological specimens. For a senior, skipping that trip means skipping half a day of fatigue, and often sparing a family member from taking time off to go with them.',
          'Home sampling also has a clinical advantage. The person is relaxed, in their own surroundings, and the nurse takes the opportunity to check vital signs, ask a few questions and notice any change since the last visit. A simple lab appointment becomes a chance for follow-up.',
        ],
        links: [
          { label: 'Blood draw at home', href: '/services/prise-sang' },
          { label: 'Laboratory blood work', href: '/services/prise-sang-labo' },
          { label: 'Urine test', href: '/services/analyse-urine' },
          { label: 'Biological sample', href: '/services/prelevement-biologique' },
        ],
      },
      {
        title: 'Vaccinating seniors, at home',
        content: [
          'Vaccination remains one of the simplest ways to protect seniors’ health. With age, the immune system responds less vigorously, and some respiratory infections, such as the flu or COVID-19, can lead to more serious complications. That is why public health authorities specifically recommend certain vaccines for older adults.',
          'The problem, once again, is often access. Getting to a vaccination clinic in the middle of the cold season, standing in line and then waiting through the observation period is not easy for someone with reduced mobility. As a result, some people put it off, then forget.',
          'A home-care nurse can administer the indicated vaccines, check the vaccination record, address concerns and monitor the person after the injection. She can also use the visit to vaccinate the spouse or caregiver living under the same roof, protecting the whole household.',
          'To find out which vaccines are recommended for your age and health, refer to the Quebec Immunization Protocol, your pharmacist or your physician. The nurse can then help bring your record up to date.',
          'A home vaccination visit is also a good time to take a broader look: review the medication list, check blood pressure, look at the skin or a wound, and answer the questions the person did not dare ask their physician. Using every visit to look at the whole situation, rather than a single isolated task, is at the heart of the approach we want to offer.',
        ],
        links: [
          { label: 'Flu vaccine', href: '/services/grippe' },
          { label: 'COVID-19 vaccine', href: '/services/covid' },
          { label: 'Vaccination record', href: '/services/carnet-vaccinal' },
        ],
      },
      {
        title: 'A direct impact on mental health',
        content: [
          'Staying at home means keeping your bearings: your armchair, your neighbourhood, your neighbours, your pet, your memories. For an older adult, and even more so for someone living with cognitive impairment, this familiar environment is a source of stability.',
          'Isolation nonetheless remains a real risk for seniors who live alone. A regular visit from the same nurse then becomes more than clinical care: it is predictable human contact, a trusted person who notices a change in mood, a loss of appetite, an unusual lack of interest, and who can point toward the right resources.',
          'Feeling cared for without feeling “placed” profoundly changes one’s relationship with illness. You remain a person in your own home, not a patient in a bed.',
          'Seniors’ mental health is sometimes overlooked because its signs are mistaken for “just getting older.” Yet persistent sadness, withdrawal or anxiety are not normal consequences of aging. Talking about them, naming them and referring to a physician or psychosocial service is part of good home follow-up.',
        ],
      },
      {
        title: 'Cognitive impairment: care in a familiar setting',
        content: [
          'For a person living with Alzheimer’s disease or another neurocognitive disorder, every change of environment can be unsettling. A noisy waiting room, an unfamiliar face or an unusual trip can trigger anxiety, agitation or confusion that lasts well beyond the appointment.',
          'Home care limits these upheavals. Care takes place where the person feels safe, surrounded by their belongings and, ideally, with a family member they know present. When possible, seeing the same nurse from one visit to the next also helps build trust.',
          'The nurse adapts how she communicates: short sentences, each step explained, patience, attention to non-verbal cues. She also watches how things evolve: new difficulties with medications, weight loss, behaviour changes, signs of exhaustion in the caregiver. These observations are valuable to the medical team following the person.',
          'We should be honest, though: occasional nursing care does not replace the continuous supervision that some advanced stages of the disease require. When the person’s safety at home can no longer be ensured, a conversation with the CLSC team and the physician is needed to consider other options.',
        ],
      },
      {
        title: 'Relief for family caregivers',
        content: [
          'Behind almost every senior living at home is a family member holding the system together. According to the Institut de la statistique du Québec, about 1.5 million Quebecers aged 15 and over, or more than one in five, were caregivers in 2018. Nearly 60% of them held a job at the same time.',
          'Driving a parent to appointments, managing medications, monitoring a wound with no training: the load is heavy and the worry constant. “Am I doing this right? Is it normal for it to be this red?”',
          'Entrusting clinical care to a nurse does not replace the caregiver; it gives them back their role as son, daughter, or spouse. The nurse handles the technical care, teaches what to watch for, and becomes someone to bring questions to. For many families, that is the difference between coping and burning out.',
          'Caregiver burnout is a real risk, and it often sets in quietly: fatigue, irritability, poor sleep, guilt, skipping your own medical appointments. Recognizing these signs in yourself is not a failure. It is the signal that the load needs to be shared, whether with the public network, community organizations, other family members or private services.',
        ],
        callout: {
          label: 'Good to know',
          text: 'In Quebec, many community organizations and regional services offer listening, information and respite to family caregivers. Your CLSC can direct you to the resources in your area.',
        },
      },
      {
        title: 'Caregiving from a distance: coordinating a parent’s care',
        content: [
          'More and more adult children live far from their parents: in another city, another region, sometimes another province. They want to help but cannot be there for every appointment. This situation creates a lot of worry and a sense of helplessness.',
          'The first step is to organize the information. Gather in one document the medication list, the contact details for the doctor, pharmacy and CLSC, known diagnoses, allergies and the names of people to contact. This document will be useful to every professional involved and will save you from repeating everything.',
          'The second step is to clarify roles and consent. Talk with your parent about what they agree to let you know and do on their behalf. Depending on the situation, certain legal steps, such as a power of attorney or a protection mandate, may be useful; a notary can advise you.',
          'Finally, lean on services that make remote coordination easier. With MobiSoins, a family member will be able to book a visit for a parent, note important instructions and receive the appointment confirmation. With the parent’s consent, it will be possible to stay informed about how the visit went. The distance does not disappear, but the worry eases.',
        ],
        list: [
          'A shared document with medications, allergies, diagnoses and contacts',
          'A clear agreement with your parent on what you can do on their behalf',
          'A trusted relative or neighbour who can be reached locally',
          'Appointments planned ahead of time rather than in a crisis',
        ],
      },
      {
        title: 'Three journeys to make it concrete',
        content: [
          'To make all this more concrete, here are three fictional situations that are nonetheless representative of what many Quebec families go through. The names and details are made up; the challenges are very real.',
          'First journey: Gisèle, 81, lives alone in an apartment in Quebec City. She had a minor fall last month and has since been less inclined to go out. Her son lives in Montreal. During a home visit, the nurse measures her blood pressure lying down and then standing, notices that Gisèle feels dizzy when she gets up, and discovers that a new medication was recently added. She informs the pharmacist and physician, recommends an occupational-therapy assessment and suggests securing the hallway rug.',
          'Second journey: Robert, 76, is coming home from hospital after leg surgery. He has a dressing to change regularly and stitches to remove. His wife, herself elderly, does not drive. Rather than arranging several rides, a nurse comes to redo the dressing at home, monitors healing and removes the stitches at the scheduled time.',
          'Third journey: Louise, 72, lives with diabetes and cares for her husband, who has cognitive impairment. She keeps postponing her own blood tests because she cannot leave him alone. A nurse comes to take Louise’s sample at home, checks her feet and takes time to talk with her about her fatigue. For the first time in a long while, Louise feels that someone is looking after her too.',
          'In all three cases, what changes things is not a dramatic intervention, but a well-timed visit by a professional who looks at the whole situation.',
        ],
        links: [
          { label: 'Blood-pressure follow-up (seniors)', href: '/services/suivi-tension-aines' },
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
        ],
      },
      {
        title: 'Recognizing when it is time to ask for help',
        content: [
          'Many families wait for a crisis before arranging home care. Yet the signals are often there long before. Spotting them early makes it possible to act in a planned, calm way rather than in the rush of a hospital discharge.',
          'Some signs relate to health: weight loss, a wound that will not heal, dizziness, new shortness of breath, medications piling up or running out. Others relate to daily life: an empty fridge, unopened mail, a home less well kept than before, clothing unsuited to the season.',
          'There are also subtler signs: a parent who cancels outings, seems more confused on the phone, repeats the same questions, or systematically downplays what is wrong so as not to worry their children. These changes deserve a frank and caring conversation.',
          'Raising the subject with a parent is not always easy. It helps to present support as a way to stay at home longer, not as a first step toward losing independence. Involving the person in decisions, respecting their preferences and starting with one targeted service often make the transition much more acceptable.',
        ],
        list: [
          'A recent fall or a fear of falling that limits getting around',
          'Mistakes or lapses in taking medications',
          'Weight loss, loss of appetite or skipped meals',
          'A wound, redness or swelling that is not improving',
          'Medical appointments postponed for lack of transportation',
          'A caregiver who is visibly exhausted',
        ],
      },
      {
        title: 'What does it cost? The tax credit too many seniors overlook',
        content: [
          'Cost is often the first objection to private home care, and it deserves a frank answer. Private nursing care is generally not covered by RAMQ. Several mechanisms, however, lighten the bill.',
          'The main one is Quebec’s tax credit for home-support services for seniors, available to people aged 70 and over. It is a refundable credit (paid even if you owe no tax) with a rate that is being raised gradually: 38% of eligible expenses in 2024, 39% in 2025, and 40% in 2026, up to an annual ceiling that depends on your level of autonomy. Nursing services are among the eligible services.',
          'On top of this, there may be reimbursement from group or private insurance, as well as federal and provincial medical-expense tax credits. The rules come with conditions: keep all your receipts and confirm your situation with Revenu Québec or a tax professional.',
          'It helps to compare the cost of a visit with what it actually avoids: adapted transport or a round-trip taxi, a day off for the family member who comes along, parking, and above all the complications that could have led to a hospital stay. The calculation is not only in dollars, but it helps put the expense in perspective.',
          'At MobiSoins, we want the price to be clear before you book, with no surprises. We will publish our rates when our first visits launch, and our receipts will be designed to make your tax-credit and reimbursement claims easier.',
        ],
        callout: {
          label: 'Good to know',
          text: 'The home-support tax credit can be claimed through advance payments during the year rather than waiting for your tax return. Ask Revenu Québec for details.',
        },
      },
      {
        title: 'Choosing a home-care service: the right questions',
        content: [
          'Letting a professional into an elderly parent’s home takes trust. Before choosing a private home-care service, take time to ask a few simple questions. A serious service will answer without hesitation.',
          'The first is about qualifications. In Quebec, a nurse must be a member of the Ordre des infirmières et infirmiers du Québec (OIIQ) to practise, and the public can check that she is registered. Also ask how the service selects its staff, whether it checks references and how it oversees the quality of care.',
          'The second is about organization: how booking works, who reviews the request, how far ahead you need to book, what happens if you cancel, and how results or observations are sent to the physician. A good service should also be clear about what it does not do, especially urgent situations.',
          'The third is about price and transparency: is the total cost known in advance, are there travel fees, are receipts itemized? Finally, trust your impression. The senior should feel respected, listened to and safe.',
        ],
        list: [
          'Is the nurse a member of the OIIQ?',
          'Who reviews the request before the visit and confirms it is suitable for the home?',
          'Is the price known before booking, and are receipts itemized?',
          'How are results and observations sent to the physician?',
          'What does the service do in an urgent situation during or after the visit?',
        ],
      },
      {
        title: 'How a MobiSoins visit for a senior will work',
        content: [
          'MobiSoins is designed so that care comes to seniors, not the other way around. Here, step by step, is how the visits we are preparing in Quebec will work.',
          'It all starts with an online request that takes a few minutes. The senior or a family member indicates the type of care, the address, the preferred time and, if needed, the physician’s requisition or prescription. You can also add useful information: reduced mobility, hearing difficulties, a family member being present, the building’s access code.',
          'A coordinating nurse then reviews every request. She makes sure the care can be delivered safely at home, checks the documents, and contacts you if anything needs clarifying. If the situation is better suited to the ER or another service, she will tell you clearly.',
          'On the day of the visit, an OIIQ-registered nurse arrives with the necessary sterile supplies. She takes the time to introduce herself, confirm the person’s identity, explain each step and answer questions. After the care, specimens are sent to the laboratory, relevant observations are documented, and instructions are left, in writing if needed.',
        ],
        list: [
          'Online booking in a few minutes, by the senior or a family member',
          'Every request reviewed by a coordinating nurse',
          'Visit by an OIIQ-registered nurse, with sterile single-use supplies',
          'Specimens forwarded and information shared with the prescriber',
          'Clear instructions and the option to plan regular follow-up',
        ],
        links: [
          { label: 'At-home care for seniors', href: '/services/soins-domicile-aines' },
          { label: 'Nurse advice consultation', href: '/services/consultation-conseil' },
        ],
      },
      {
        title: 'Where MobiSoins fits in',
        content: [
          'MobiSoins does not claim to replace the CLSC, the family doctor, or the emergency room. Our role is to fill the space between the three: planned nursing care, delivered at home by OIIQ-registered nurses, with no months-long waitlist and no travel.',
          'In practice: blood draws and specimen collection, dressings and wound care, blood-pressure and diabetes follow-up, medication assistance, vaccination, prescribed injections. You will book in minutes, for yourself or for a parent, and you will know in advance who is coming and when.',
          'We believe home care should be simple to get, transparent in its pricing and rigorous in its practice. We also believe that a nurse who enters a senior’s home should take her time: time to explain, to listen and to notice what has changed.',
          'We are currently preparing our first visits in Quebec. By joining the waitlist, you tell us which care your family needs and where you live: that is what guides our rollout.',
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
        a: 'Yes. A family member will be able to handle the booking for a parent. We recommend that a trusted person be present for the first visit if the senior wishes, and that the parent agrees with the arrangement.',
      },
      {
        q: 'Is home care as safe as care in a clinic?',
        a: 'For care that is suited to it, yes: the nurse follows the same clinical protocols, uses sterile single-use supplies, and takes biomedical waste away with her. Urgent or unstable situations, however, belong in hospital.',
      },
      {
        q: 'Do I need a prescription to receive nursing care at home?',
        a: 'It depends on the care. A blood draw, a prescribed dressing or an injection generally requires a requisition or prescription. Other services, such as some vaccines or an advice consultation, may not. The coordinating nurse will tell you when she reviews your request.',
      },
      {
        q: 'My parent has memory problems. Can they receive care at home?',
        a: 'Yes, and home is often the most reassuring place for them. We recommend that a family member be present during the visit and that key information (medications, physician’s instructions) be available. The nurse will adapt her communication to the situation.',
      },
      {
        q: 'Is private home care covered by insurance?',
        a: 'Some group or private insurance plans reimburse part of nursing care, depending on the terms of the policy. Check your coverage with your insurer and keep your receipts, which can also be used for tax credits.',
      },
      {
        q: 'What should I do in an emergency?',
        a: 'MobiSoins provides planned, non-urgent care. In an emergency, call 911. For non-urgent health advice, call Info-Santé at 811.',
      },
    ],
    sources: [
      { label: 'Institut de la statistique du Québec: Aging showcase, population counts and shares by age group', url: SOURCES_URLS.isq },
      { label: 'Institut national de santé publique du Québec (INSPQ): Aging in Quebec', url: SOURCES_URLS.inspqAging },
      { label: 'INSPQ: Falls among seniors', url: SOURCES_URLS.inspqFalls },
      { label: 'Commissaire à la santé et au bien-être (CSBE), January 2024: Bien vieillir chez soi, volume 4', url: SOURCES_URLS.csbe },
      { label: 'Radio-Canada, 2024: Home support, CSBE report data and waitlist', url: SOURCES_URLS.rc },
      { label: 'Canadian Institute for Health Information (CIHI): New long-term care residents who potentially could have been cared for at home', url: SOURCES_URLS.cihi },
      { label: 'Institut de la statistique du Québec: Portrait of informal caregiving in 2018', url: SOURCES_URLS.caregivers },
      { label: 'Santé Québec, January 31, 2025: Update on the situation in Quebec emergency rooms', url: SOURCES_URLS.er },
      { label: 'Chaire en fiscalité et en finances publiques, Université de Sherbrooke: Tax credit for home-support services for seniors', url: SOURCES_URLS.credit },
    ],
    conclusion: {
      title: 'Key takeaway',
      content: [
        'Aging at home is not a luxury: it is what most seniors want, and what becomes possible when care comes to them.',
        'The public network cannot keep up with demand, and families cannot carry everything. Regular nursing care at home preserves independence, prevents falls and complications, makes medications safer, and gives caregivers room to breathe.',
        'The best time to arrange this care is not after the crisis, but before. Apply to the CLSC, talk it over with your parent, prepare the useful information, and lean on services that complement the network. MobiSoins is preparing its first visits in Quebec, and we will be glad to support you.',
      ],
    },
  },
};

export default function SoinsAinesPage() {
  return <ArticleLayout article={article} />;
}
