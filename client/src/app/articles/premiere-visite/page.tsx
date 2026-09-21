'use client';

import { ArticleLayout } from '../../../components/articles/ArticleLayout';
import type { ArticleData } from '../../../components/articles/ArticleLayout';

const article: { FR: ArticleData; EN: ArticleData } = {
  FR: {
    slug: 'premiere-visite',
    tag: 'Guide pratique',
    date: 'Mis à jour en septembre 2026',
    title: 'Comment préparer votre première visite avec MobiSoins',
    subtitle:
      'Faire entrer une professionnelle de la santé chez soi pour la première fois soulève de vraies questions : qui vient, que va-t-elle faire, que dois-je préparer, combien de temps cela prend-il ? Ce guide complet vous accompagne pas à pas, de la réservation en ligne jusqu’au suivi, pour que votre première visite soit simple, sécuritaire et réellement utile, que le soin soit pour vous, pour un parent âgé ou pour votre enfant.',
    readTime: '35 min',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'Trois documents suffisent : carte d’assurance maladie, liste de médicaments à jour, ordonnance ou requête s’il y a lieu.',
      'Une chaise, une table dégagée et un bon éclairage : pas besoin de transformer votre salon en clinique.',
      'Vous pouvez vérifier le droit d’exercice de toute infirmière au Tableau de l’OIIQ, avant même qu’elle sonne à la porte.',
      'Chaque demande sera révisée par une infirmière coordonnatrice avant la visite : si un renseignement manque, on vous le dira avant, pas sur le pas de la porte.',
      'La première visite sert d’abord à vous écouter : vos symptômes, vos inquiétudes, vos objectifs.',
      'MobiSoins offrira des soins planifiés et non urgents. En cas d’urgence, c’est le 911 ; pour un conseil de santé, Info-Santé 811.',
    ],
    sections: [
      {
        title: 'Pourquoi tant de Québécois attendent pour un soin simple',
        content: [
          'Une prise de sang, un changement de pansement, le retrait de points de suture, une injection mensuelle : ce sont des soins courts, que les infirmières réalisent tous les jours. Pourtant, au Québec, y accéder peut occuper une demi-journée, parfois bien davantage. Il faut obtenir un rendez-vous au centre de prélèvement, prendre congé, trouver du stationnement, patienter dans une salle d’attente, puis refaire le trajet en sens inverse.',
          'Pour une personne en pleine forme, c’est un irritant. Pour une personne âgée qui ne conduit plus, un parent seul avec un nourrisson, quelqu’un qui sort d’une chirurgie ou qui vit avec une maladie chronique, c’est un véritable obstacle. Résultat : des suivis reportés, des pansements changés trop tard, des bilans sanguins qu’on remet à « la semaine prochaine ».',
          'MobiSoins est né exactement de ce constat. L’un de nos fondateurs a vu sa mère passer deux journées entières à l’hôpital, à Montréal, pour un soin qui ne demandait que quelques minutes. L’idée est simple : si le soin peut être donné de façon sécuritaire à la maison, c’est l’infirmière qui se déplace, pas vous.',
          'Ce guide est écrit pour la personne qui s’apprête à recevoir une infirmière chez elle pour la toute première fois, et pour les proches qui l’accompagnent. Nous préparons nos premières visites au Québec : les pages qui suivent décrivent comment elles fonctionneront, ce que vous pourrez préparer et ce que vous êtes en droit d’attendre. Lisez-le d’un trait ou revenez à la section qui vous concerne : chaque partie se lit de façon autonome.',
        ],
        quote: 'Si le soin peut être donné de façon sécuritaire à la maison, c’est l’infirmière qui se déplace, pas vous.',
      },
      {
        title: 'Ce que MobiSoins sera, et ce qu’il ne sera pas',
        content: [
          'Avant de parler de préparation, il est utile de bien situer le service. MobiSoins est une entreprise québécoise de soins infirmiers à domicile. Les soins seront donnés par des infirmières membres de l’Ordre des infirmières et infirmiers du Québec (OIIQ), sur rendez-vous, à l’adresse de votre choix : votre maison, votre appartement, la résidence d’un parent ou, pour les entreprises, un lieu de travail.',
          'Il s’agira de soins planifiés et non urgents. Concrètement : des prélèvements sanguins et d’autres échantillons, des pansements et des soins de plaies, le retrait de points ou d’agrafes, l’administration de médicaments par injection lorsqu’une ordonnance le prévoit, la vaccination, le suivi de la tension artérielle ou du diabète, l’accompagnement des aînés à domicile et des bilans de santé. La liste complète des services figure sur notre site, avec une page par soin.',
          'Ce que MobiSoins ne sera pas, c’est tout aussi important : un service d’urgence, un remplacement de votre médecin de famille ou de votre infirmière praticienne spécialisée (IPS), ni un service de garde en continu. Si vous ressentez une douleur à la poitrine, une difficulté à respirer, des signes d’AVC ou toute autre situation qui menace la vie, composez le 911 sans attendre. Pour un avis de santé non urgent, à toute heure, Info-Santé 811 reste la bonne porte d’entrée.',
          'Cette clarté protège tout le monde. Elle vous permet de choisir le bon service au bon moment, et elle permet à nos infirmières de se consacrer pleinement à ce qu’elles font le mieux à domicile : des soins soignés, sans précipitation, dans votre milieu de vie.',
        ],
        callout: {
          label: 'Où en sommes-nous ?',
          text: 'MobiSoins est en préparation. Nous ne donnons pas encore de visites : nous bâtissons notre équipe et nos protocoles pour être prêts dès le lancement. En vous inscrivant à la liste d’attente, vous serez parmi les premiers informés.',
        },
      },
      {
        title: 'Réserver en ligne : ce qui se passera en quelques minutes',
        content: [
          'La réservation se fera en ligne, en quelques minutes, sans appel obligatoire ni formulaire papier. L’objectif est simple : recueillir dès le départ l’information dont l’infirmière aura besoin, pour que la visite elle-même soit consacrée au soin et non à la paperasse.',
          'Vous choisirez d’abord le soin désiré. Si vous hésitez entre deux services, par exemple entre un bilan complet et une simple prise de sang, choisissez celui qui vous semble le plus proche et décrivez votre besoin dans l’espace prévu : l’infirmière coordonnatrice ajustera au besoin. Vous indiquerez ensuite pour qui est le soin (vous-même, un parent, un enfant), l’adresse de la visite et vos disponibilités.',
          'Quelques questions de santé suivront. Elles ne servent pas à vous juger ni à vous filtrer arbitrairement : elles permettent de vérifier que le soin peut se faire de façon sécuritaire à domicile, de prévoir le bon matériel et, au besoin, de vous rappeler de joindre une ordonnance. Répondez-y le plus honnêtement possible, même lorsque la réponse vous paraît anodine.',
        ],
        list: [
          'Le soin souhaité et, en quelques mots, la raison de votre demande.',
          'La personne qui recevra le soin, son âge et vos coordonnées si vous réservez pour un proche.',
          'L’adresse exacte, avec les détails utiles : code de porte, étage, ascenseur, stationnement.',
          'Vos plages de disponibilité, idéalement plus d’une.',
          'Vos allergies connues et vos principaux problèmes de santé.',
          'Une photo ou un fichier de votre ordonnance ou requête, si le soin en exige une.',
        ],
      },
      {
        title: 'Le rôle de l’infirmière coordonnatrice',
        content: [
          'Une étape distingue la façon dont MobiSoins fonctionnera : chaque demande sera révisée par une infirmière coordonnatrice avant qu’une visite soit confirmée. Ce n’est pas un robot qui accepte automatiquement toutes les réservations ; c’est une professionnelle qui lit votre demande avec un regard clinique.',
          'Son rôle est triple. D’abord, vérifier que le soin demandé correspond bien au besoin décrit et qu’il peut se faire à domicile en toute sécurité. Ensuite, s’assurer que rien ne manque : une ordonnance, une requête de laboratoire, une précision sur une plaie ou un médicament. Enfin, jumeler la demande avec l’infirmière la plus appropriée et préparer la visite, afin que celle qui sonnera chez vous sache déjà pourquoi elle vient.',
          'Si un renseignement manque ou si votre situation semble relever d’un autre service, vous en serez informé avant la visite, pas sur le pas de la porte. Par exemple, si vous décrivez des symptômes qui demandent une évaluation médicale rapide, l’infirmière coordonnatrice vous orientera vers le bon endroit plutôt que de planifier une visite qui ne répondrait pas à votre besoin.',
          'Concrètement, l’infirmière coordonnatrice joue aussi un rôle de point de repère. Si vous réservez plusieurs soins au fil des semaines, elle aura une vue d’ensemble de votre dossier et pourra repérer ce qu’une visite isolée ne montrerait pas : des pansements qui s’éternisent, une tension qui ne se stabilise pas, un besoin qui change. Elle pourra alors vous proposer d’en parler avec votre médecin ou d’ajuster le suivi.',
          'Cette révision prend un peu de temps, mais elle en fait gagner beaucoup. Elle évite les visites inutiles, les déplacements pour rien et les mauvaises surprises. Surtout, elle garantit qu’une infirmière a posé un jugement professionnel sur votre demande avant même la première rencontre.',
        ],
        callout: {
          label: 'Comment MobiSoins vous aide',
          text: 'Si l’infirmière coordonnatrice a une question, elle vous joindra par les coordonnées fournies lors de la réservation. Vérifiez donc votre numéro de téléphone et votre courriel : c’est le moyen le plus simple d’éviter un report.',
        },
      },
      {
        title: 'Avant la visite : les documents à rassembler',
        content: [
          'Une première visite efficace commence par une information complète. Plus l’infirmière dispose d’un portrait fidèle de votre santé, plus son évaluation sera juste et moins vous aurez à répéter votre histoire. Prenez dix minutes, la veille, pour réunir les éléments suivants.',
          'Rangez le tout dans une enveloppe ou une chemise que vous garderez ensuite pour les visites suivantes. Ce petit dossier personnel deviendra votre meilleur allié, aussi bien avec MobiSoins qu’avec votre clinique, votre pharmacie ou l’hôpital.',
        ],
        list: [
          'Votre carte d’assurance maladie (RAMQ) et, si vous en avez une, votre carte d’assurance collective ou privée.',
          'Votre liste de médicaments à jour, incluant les produits en vente libre, les vitamines et les produits naturels. Votre pharmacien peut vous en imprimer une en quelques minutes.',
          'Votre ordonnance ou votre requête de laboratoire, si le soin en exige une (prise de sang, injection, certains pansements).',
          'Vos résultats d’examens récents et le résumé de votre dernière hospitalisation, le cas échéant.',
          'La liste de vos allergies connues : médicaments, latex, adhésifs, aliments.',
          'Les coordonnées de votre médecin de famille, de votre IPS ou de votre clinique, si vous en avez une.',
          'Le cas échéant, les consignes remises à votre sortie de l’hôpital ou par votre chirurgien.',
        ],
        callout: {
          label: 'Conseil d’infirmière',
          text: 'Déposez tous vos contenants de médicaments dans un même sac et laissez-le sur la table. C’est la façon la plus fiable de vérifier ce que vous prenez réellement, et c’est souvent là que l’on découvre des doublons ou des produits périmés.',
        },
      },
      {
        title: 'La liste de médicaments : votre document le plus précieux',
        content: [
          'Si vous ne deviez préparer qu’une seule chose, ce serait celle-là. Une liste de médicaments exacte est au cœur de la sécurité des soins. Elle permet à l’infirmière de repérer une interaction possible, de comprendre un symptôme qui pourrait être un effet secondaire, et de vérifier qu’un nouveau traitement est compatible avec ce que vous prenez déjà.',
          'Le piège le plus courant est la liste « presque à jour ». On a arrêté un médicament il y a trois mois, on en a ajouté un autre à l’urgence, on prend un comprimé pour dormir « seulement de temps en temps ». Chacun de ces détails compte. Le plus simple est de demander à votre pharmacie un profil pharmacologique récent, puis de le comparer, crayon en main, avec ce qui se trouve réellement dans votre armoire.',
          'N’oubliez pas ce que l’on considère souvent à tort comme « pas vraiment des médicaments » : les produits naturels, les suppléments, les crèmes, les gouttes pour les yeux, les pompes pour l’asthme, les timbres. Certains produits vendus sans ordonnance peuvent interagir avec des anticoagulants ou modifier une glycémie. Mieux vaut en dire trop que pas assez.',
          'Si vous utilisez un pilulier ou des dosettes préparées par la pharmacie, gardez-les à portée de main. L’infirmière pourra vérifier avec vous que ce qui s’y trouve correspond bien à la liste. C’est un moment privilégié pour poser vos questions sur un médicament dont vous ne comprenez pas l’utilité.',
        ],
        list: [
          'Le nom de chaque médicament, sa dose et l’heure à laquelle vous le prenez.',
          'Les médicaments pris « au besoin » et la fréquence réelle à laquelle vous les utilisez.',
          'Les produits naturels, vitamines et suppléments.',
          'Les médicaments cessés récemment, et pourquoi.',
          'Les réactions passées à un médicament, même légères.',
        ],
        links: [
          { label: 'Aide à la médication', href: '/services/aide-medication' },
          { label: 'Administration de médicaments IM et SC', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'Préparer l’espace : simple, propre, bien éclairé',
        content: [
          'Votre domicile n’a pas à ressembler à une clinique. L’infirmière apporte son matériel stérile et sait s’adapter à tous les milieux de vie, du studio au bungalow. Ce qui l’aide vraiment tient en quelques gestes.',
          'Choisissez une pièce calme, avec une chaise stable ou un fauteuil où vous êtes à l’aise, et une surface dégagée à proximité : un coin de table suffit. Un bon éclairage est essentiel pour un prélèvement ou un soin de plaie : ouvrez les rideaux ou approchez une lampe. Assurez-vous qu’un lavabo est accessible pour le lavage des mains.',
          'Si vous avez des animaux, placez-les dans une autre pièce le temps du soin : même le chien le plus doux peut s’agiter devant une inconnue, et un environnement propre réduit le risque d’infection. Portez des vêtements amples qui dégagent facilement la zone à traiter, par exemple des manches qui se relèvent pour une prise de sang.',
          'Pensez aussi à l’accès. En hiver québécois, une entrée déneigée et un perron déglacé ne sont pas un détail : l’infirmière transporte du matériel, et une chute dans l’escalier ne ferait l’affaire de personne. Si votre immeuble a un interphone, vérifiez qu’il fonctionne ou indiquez dans la réservation comment entrer. Une lumière extérieure allumée aide beaucoup pour une visite en fin de journée.',
        ],
        list: [
          'Une chaise stable et une surface dégagée à proximité.',
          'Un bon éclairage, naturel ou d’appoint.',
          'Un lavabo accessible, avec du savon et une serviette propre.',
          'Les animaux dans une autre pièce.',
          'Une entrée dégagée, déneigée l’hiver, et un numéro civique visible.',
          'Le téléviseur éteint ou le son baissé, pour bien s’entendre.',
        ],
      },
      {
        title: 'La grande inquiétude : « Qui entre chez moi ? »',
        content: [
          'C’est la question que l’on nous pose le plus souvent, et elle est parfaitement légitime. Ouvrir sa porte à quelqu’un que l’on ne connaît pas, a fortiori quand on est malade, âgé ou seul, demande de la confiance. Cette confiance doit reposer sur des faits vérifiables, pas sur des promesses.',
          'Au Québec, le titre d’infirmière est réservé par la loi. Pour l’utiliser et exercer, il faut être inscrite au Tableau de l’Ordre des infirmières et infirmiers du Québec (OIIQ), respecter un code de déontologie et détenir une assurance responsabilité professionnelle. Toutes les infirmières de MobiSoins seront membres de l’OIIQ.',
          'Mieux encore : vous pouvez le vérifier vous-même. L’OIIQ met à la disposition du public un outil en ligne, « Vérifier le droit d’exercice », qui confirme en quelques secondes qu’une personne est bel et bien autorisée à exercer. Avant la visite, vous connaîtrez le nom de votre infirmière ; rien ne vous empêche de faire la vérification.',
          'Si cela vous rassure, demandez à un proche d’être présent lors de la première visite. C’est courant, c’est bienvenu, et cela permet à votre proche aidant d’entendre les mêmes explications que vous. Vous pouvez aussi demander à l’infirmière de vous montrer une pièce d’identité à son arrivée : une professionnelle sérieuse le fera sans hésiter.',
          'Enfin, faites confiance à votre instinct. Si quelque chose ne correspond pas à ce qui était prévu, par exemple un nom différent de celui qu’on vous a communiqué, vous avez le droit de ne pas ouvrir et de nous contacter pour vérifier. Aucune visite ne vaut que vous vous sentiez en insécurité chez vous.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Une professionnelle sérieuse ne s’offusquera jamais que vous lui demandiez de s’identifier. Au contraire : c’est un bon réflexe, que nous encourageons.',
        },
      },
      {
        title: 'Le jour de la visite : l’heure qui précède',
        content: [
          'La veille, vous avez rassemblé vos documents. Le jour même, quelques gestes simples rendent la visite plus fluide. Rien de compliqué : il s’agit surtout d’éviter les petits imprévus qui font perdre du temps ou qui obligent à reporter un soin.',
          'Relisez les consignes reçues lors de la confirmation. Certains soins demandent une préparation particulière : être à jeun pour certaines prises de sang, recueillir un échantillon d’urine du matin, ne pas appliquer de crème sur une zone à traiter. Si une consigne vous semble floue, mieux vaut poser la question avant que de deviner.',
          'Prenez vos médicaments habituels comme d’habitude, sauf indication contraire. Il arrive qu’on pense bien faire en sautant une dose « pour ne pas fausser les résultats » ; c’est rarement une bonne idée sans avis professionnel. Si vous êtes diabétique et qu’on vous demande d’être à jeun, parlez-en à l’avance pour savoir comment gérer votre médication et éviter une hypoglycémie.',
          'Enfin, gardez votre téléphone à portée de main. Si l’infirmière est retardée par la circulation ou par une visite précédente plus longue que prévu, elle ou l’équipe pourra vous prévenir. À l’inverse, si vous devez vous absenter ou si votre état change, prévenez le plus tôt possible.',
        ],
        list: [
          'Relire les consignes de préparation reçues à la confirmation.',
          'Respecter le jeûne demandé, s’il y a lieu, en buvant de l’eau sauf avis contraire.',
          'Prendre vos médicaments habituels, sauf consigne précise.',
          'Placer votre dossier (cartes, liste, ordonnance) sur la table.',
          'Enfermer les animaux et dégager l’entrée.',
          'Garder le téléphone à proximité.',
        ],
      },
      {
        title: 'Pendant la visite : à quoi vous attendre, étape par étape',
        content: [
          'La première visite est généralement un peu plus longue que les suivantes, parce qu’elle sert à établir le portrait de départ. Elle se déroule le plus souvent en quatre temps.',
          'D’abord, l’accueil et l’identification : l’infirmière se présente, confirme votre identité et le soin prévu, et se lave les mains. Ensuite vient l’évaluation : elle passe en revue vos antécédents, vos médicaments et vos allergies, prend vos signes vitaux au besoin et vous pose des questions sur vos symptômes et votre quotidien.',
          'Puis le soin lui-même, qu’il s’agisse d’un prélèvement, d’un pansement, d’une injection, d’un vaccin ou d’un suivi de tension ou de glycémie, réalisé selon les mêmes protocoles cliniques qu’en établissement, avec du matériel stérile à usage unique. L’infirmière vous explique chaque geste avant de le poser et s’assure de votre consentement.',
          'Enfin, l’enseignement et la suite : ce qu’il faut surveiller, quand s’inquiéter, quand aura lieu la prochaine visite. Les déchets biomédicaux, comme les aiguilles, repartent avec elle dans un contenant sécurisé. Vous n’avez rien à nettoyer.',
          'Ne soyez pas surpris si l’infirmière prend des notes pendant la conversation. Elle doit tenir un dossier, comme dans tout milieu de soins. Ces notes assurent la continuité : la prochaine fois, même si une autre infirmière vient, elle saura où vous en êtes.',
        ],
        links: [
          { label: 'Prise de sang à domicile', href: '/services/prise-sang' },
          { label: 'Pansements', href: '/services/pansements' },
          { label: 'Retrait de points', href: '/services/retrait-points' },
        ],
      },
      {
        title: 'Votre consentement, à chaque étape',
        content: [
          'Au Québec, aucun soin ne peut être donné sans le consentement libre et éclairé de la personne, ou de la personne autorisée à consentir pour elle. Ce principe n’est pas une formalité administrative : c’est un droit fondamental, et il s’applique à la maison exactement comme à l’hôpital.',
          '« Libre » signifie que vous n’êtes soumis à aucune pression. « Éclairé » signifie que vous comprenez ce que l’on s’apprête à faire, pourquoi, et quelles sont les options. C’est pourquoi l’infirmière vous expliquera chaque geste avant de le poser et vous demandera votre accord. Si vous ne comprenez pas une explication, dites-le : elle reformulera.',
          'Vous pouvez aussi changer d’avis. Accepter une prise de sang ne vous oblige pas à accepter un autre soin proposé pendant la même visite. Vous pouvez demander une pause, poser des questions, ou refuser. L’infirmière pourra vous expliquer les conséquences possibles d’un refus, mais la décision vous appartient.',
          'Pour un enfant, c’est généralement le parent ou le tuteur qui consent, tout en expliquant les choses à l’enfant selon son âge. Pour un adulte dont l’aptitude à consentir est incertaine, des règles particulières s’appliquent ; si c’est votre situation, mentionnez-le lors de la réservation afin que l’infirmière coordonnatrice puisse bien préparer la visite avec vous.',
        ],
        callout: {
          label: 'Bon à savoir',
          text: 'Vous avez toujours le droit de dire « attendez » ou « non ». Une bonne infirmière préfère un patient qui pose des questions à un patient qui subit un soin qu’il ne comprend pas.',
        },
      },
      {
        title: 'Exprimez vos besoins, tous vos besoins',
        content: [
          'En clinique, les rendez-vous sont minutés et bien des patients repartent sans avoir posé la question qui les préoccupait vraiment. À la maison, le rythme est différent. Profitez-en.',
          'Notez vos questions à l’avance, sur papier ou dans votre téléphone. Décrivez vos symptômes concrètement : depuis quand, à quelle fréquence, ce qui les soulage ou les aggrave. Parlez aussi de ce qui ne figure dans aucun dossier : la peur de tomber dans la douche, la difficulté à ouvrir un pilulier, le sommeil qui se dégrade, l’épuisement d’un conjoint aidant. Ces informations changent un plan de soins.',
          'Il n’y a pas de question trop simple. Comprendre son traitement aide à le suivre, et l’infirmière est là aussi pour ça.',
        ],
        list: [
          'Quel est l’objectif de ce soin, et comment saurai-je qu’il fonctionne ?',
          'Quels signes doivent m’amener à vous rappeler, ou à consulter en urgence ?',
          'Mes médicaments peuvent-ils interagir entre eux ?',
          'À quelle fréquence aurai-je besoin d’un suivi ?',
          'Qui reçoit mes résultats, et dans quel délai ?',
          'Que puis-je faire moi-même, entre deux visites, pour aller mieux ?',
        ],
      },
      {
        title: 'Si la visite est pour un parent âgé',
        content: [
          'Beaucoup de premières réservations seront faites non pas par la personne soignée, mais par un fils, une fille ou un voisin attentionné. C’est une situation fréquente, et elle demande quelques précautions particulières.',
          'D’abord, parlez-en avec votre parent avant de réserver. Une personne âgée qui voit arriver une inconnue sans avoir été prévenue risque de se sentir dépossédée de ses décisions, voire de refuser d’ouvrir. Expliquez-lui qui viendra, pourquoi et à quelle heure. Si possible, notez le nom de l’infirmière sur un papier près du téléphone.',
          'Ensuite, soyez présent si vous le pouvez, au moins pour la première visite. Vous pourrez compléter l’histoire de santé, préciser les habitudes de votre parent et entendre les consignes. Veillez cependant à laisser la parole à la personne concernée : c’est à elle que l’infirmière s’adresse en premier, et c’est son consentement qui compte.',
          'Prenons un exemple fictif. Madame Gagnon, 82 ans, vit seule dans un duplex à Longueuil. Sa fille réserve un suivi de tension et mentionne, dans la demande, que sa mère semble oublier certains médicaments. Lors de la visite, l’infirmière prend la tension, puis vérifie avec Madame Gagnon le contenu de son pilulier et remarque aussi un tapis glissant dans le corridor. Le soin demandé était simple ; la visite, elle, aura permis de repérer deux autres risques et d’en parler ouvertement avec la famille.',
          'C’est là toute la valeur d’une visite à domicile pour une personne âgée : l’infirmière voit le milieu de vie réel, et peut proposer des ajustements concrets, en lien avec le médecin ou la pharmacie au besoin.',
        ],
        links: [
          { label: 'Soins à domicile pour aînés', href: '/services/soins-domicile-aines' },
          { label: 'Suivi de la tension pour aînés', href: '/services/suivi-tension-aines' },
        ],
      },
      {
        title: 'Si la visite est pour un enfant ou un bébé',
        content: [
          'Recevoir une infirmière à la maison peut rendre un vaccin ou un suivi de bébé beaucoup moins stressant, pour l’enfant comme pour le parent. Pas de salle d’attente bruyante, pas de siège d’auto à installer dans la tempête, pas de frère ou sœur à faire garder : l’enfant reste dans un environnement qu’il connaît.',
          'Préparez le carnet de vaccination de l’enfant, sa carte d’assurance maladie et, pour un bébé, les renseignements sur son alimentation et son poids récent si vous les avez. Notez vos questions à l’avance : entre les pleurs et la fatigue, il est facile d’oublier ce qu’on voulait demander.',
          'Pour un enfant en âge de comprendre, expliquez simplement ce qui va se passer, sans mentir. Dire « ça ne fera pas mal » pour une injection mine la confiance ; dire « tu vas sentir une petite piqûre, puis ce sera fini, et je serai avec toi » est à la fois honnête et rassurant. Prévoyez un jouet ou une distraction, et gardez l’enfant sur vos genoux si cela l’apaise.',
          'Pour un nourrisson, choisissez si possible un moment où il n’a pas trop faim ni trop sommeil. L’allaitement ou le biberon pendant ou juste après une injection peut aider à le réconforter ; l’infirmière vous dira ce qui est possible selon le soin.',
        ],
        links: [
          { label: 'Vaccins pour enfants', href: '/services/vaccins-enfant' },
          { label: 'Suivi de bébé', href: '/services/suivi-bebe' },
          { label: 'Bilan pédiatrique', href: '/services/bilan-pediatrique' },
        ],
      },
      {
        title: 'Prélèvements : bien se préparer pour un résultat fiable',
        content: [
          'Les prises de sang et autres prélèvements font partie des soins les plus demandés à domicile. Ce sont aussi ceux où une petite erreur de préparation peut obliger à tout recommencer. Quelques règles simples font une grande différence.',
          'Lisez attentivement la requête de laboratoire et les consignes reçues. Certains examens demandent un jeûne, d’autres non ; certains doivent être faits à une heure précise, par exemple avant la prise d’un médicament. Si rien n’est indiqué et que vous avez un doute, posez la question lors de la réservation.',
          'Buvez de l’eau, sauf consigne contraire : une bonne hydratation rend les veines plus faciles à trouver. Portez un vêtement à manches larges ou courtes. Si vous savez que vos veines sont difficiles à piquer, ou si vous avez tendance à vous sentir mal lors d’une prise de sang, dites-le d’emblée : l’infirmière vous fera allonger ou adaptera sa technique.',
          'Pour un échantillon d’urine ou un autre prélèvement biologique, suivez à la lettre les consignes de recueil, et n’utilisez que le contenant fourni. L’infirmière s’occupera ensuite de l’étiquetage et du transport de l’échantillon vers le laboratoire, dans les conditions requises. Demandez-lui comment et quand vous recevrez vos résultats : c’est une question importante, et la réponse dépend du laboratoire et du professionnel qui a prescrit l’examen.',
        ],
        links: [
          { label: 'Prise de sang et laboratoire', href: '/services/prise-sang-labo' },
          { label: 'Analyse d’urine', href: '/services/analyse-urine' },
          { label: 'Prélèvement biologique', href: '/services/prelevement-biologique' },
        ],
      },
      {
        title: 'Plaies, points et pansements : ce qu’il faut prévoir',
        content: [
          'Après une chirurgie d’un jour, une coupure recousue à l’urgence ou pour une plaie qui guérit lentement, les soins de plaies à domicile évitent des allers-retours épuisants. Ils demandent toutefois une bonne transmission d’information.',
          'Gardez les consignes remises par le chirurgien ou l’urgence : le type de fermeture (points, agrafes, colle), la date prévue du retrait, le type de pansement recommandé. Si l’hôpital vous a remis du matériel particulier, conservez-le pour l’infirmière. Ces détails lui permettent de poursuivre exactement le plan prévu.',
          'Avant la visite, ne retirez pas vous-même le pansement pour « voir », sauf consigne contraire : l’infirmière voudra observer la plaie dans des conditions propres. Notez plutôt ce que vous avez remarqué ces derniers jours : douleur qui augmente, rougeur qui s’étend, écoulement, odeur, fièvre. Ce sont précisément les signes qu’elle cherchera.',
          'Si vous avez un cathéter ou un autre dispositif à domicile, préparez aussi les renseignements qui l’accompagnent : date de pose, type de dispositif, consignes de l’équipe qui l’a installé. L’infirmière pourra ainsi en assurer l’entretien selon le plan établi et repérer rapidement un problème.',
          'Si l’un de ces signes apparaît de façon marquée, surtout avec de la fièvre, n’attendez pas la visite planifiée : contactez Info-Santé 811 ou consultez. Les soins à domicile planifiés ne remplacent pas une évaluation rapide lorsqu’une infection est soupçonnée.',
        ],
        links: [
          { label: 'Pansements et soins de plaies', href: '/services/pansements' },
          { label: 'Retrait de points ou d’agrafes', href: '/services/retrait-points' },
          { label: 'Soins de cathéters', href: '/services/catheters' },
        ],
      },
      {
        title: 'Ce que fait réellement une infirmière à domicile',
        content: [
          'On réduit souvent le travail infirmier à des gestes techniques : piquer, panser, injecter. La réalité est beaucoup plus large. Au Québec, la Loi sur les infirmières et les infirmiers confie à l’infirmière l’évaluation de l’état de santé, la surveillance clinique et le suivi des personnes présentant des problèmes de santé complexes, parmi un ensemble d’activités qui lui sont réservées.',
          'Concrètement, à domicile, votre infirmière observe ce qu’aucune salle d’examen ne montre : comment vous vous déplacez dans votre propre cuisine, où sont rangés vos médicaments, si le tapis du couloir risque de vous faire trébucher, si vous mangez à votre faim. Elle détecte les signes précoces de complication, comme une plaie qui rougit, une tension qui grimpe ou une confusion nouvelle, et sait quand il faut alerter votre médecin.',
          'Elle joue aussi un rôle d’enseignement. Apprendre à mesurer correctement sa tension, à reconnaître une hypoglycémie, à prendre soin d’un pansement entre deux visites : ces apprentissages donnent de l’autonomie et évitent bien des complications.',
          'C’est cette combinaison du geste technique, du jugement clinique et de l’enseignement, exercée dans votre milieu de vie réel, qui fait la valeur des soins à domicile.',
        ],
        links: [
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
          { label: 'Suivi de la tension artérielle', href: '/services/suivi-tension' },
          { label: 'Consultation conseil', href: '/services/consultation-conseil' },
        ],
      },
      {
        title: 'Confidentialité : ce qui reste entre vous et votre infirmière',
        content: [
          'Recevoir des soins chez soi, c’est aussi laisser voir une partie de sa vie privée. Il est normal de se demander ce que deviennent les renseignements partagés pendant la visite.',
          'Les infirmières sont tenues au secret professionnel par leur code de déontologie. Ce qu’elles apprennent sur votre santé et votre vie personnelle ne peut être divulgué sans votre consentement, sauf dans les situations exceptionnelles prévues par la loi. Au Québec, la protection des renseignements personnels est aussi encadrée par des lois qui s’appliquent aux entreprises privées, dont MobiSoins.',
          'Concrètement, les renseignements recueillis serviront à vous soigner, à assurer la continuité entre les visites et, avec votre accord, à communiquer avec les professionnels qui vous suivent. Vous pouvez demander à savoir quels renseignements sont conservés à votre sujet et poser toutes vos questions sur leur utilisation. Notre politique de confidentialité, accessible sur notre site, précise ces engagements.',
          'Si un proche est présent pendant la visite et que vous souhaitez aborder un sujet en privé, dites-le simplement. L’infirmière pourra demander au proche de sortir quelques minutes. C’est votre santé : c’est vous qui décidez de qui entend quoi.',
        ],
        quote: 'C’est votre santé : c’est vous qui décidez de qui entend quoi.',
      },
      {
        title: 'Après la visite : le suivi fait toute la différence',
        content: [
          'Un soin isolé règle un problème ponctuel ; un suivi construit une meilleure santé. À la fin de la visite, assurez-vous de savoir ce qui vient ensuite : la date de la prochaine visite s’il y a lieu, les consignes à suivre d’ici là, et la personne à joindre si quelque chose change.',
          'Conservez au même endroit vos consignes, votre liste de médicaments et vos résultats. Si vous avez un médecin de famille ou une IPS, informez-les des soins reçus : la continuité entre les professionnels est l’un des meilleurs remparts contre les erreurs et les examens en double.',
          'Dans les jours qui suivent, notez ce que vous observez : une plaie qui s’améliore ou non, des lectures de tension, un effet secondaire. Ces notes seront précieuses à la visite suivante. Et si vous avez oublié de poser une question, ce n’est pas grave : notez-la pour la prochaine fois ou, si elle ne peut pas attendre, communiquez avec nous ou avec Info-Santé 811 selon la situation.',
          'Si vos résultats de laboratoire doivent être transmis à votre médecin, vérifiez avant la fin de la visite que ses coordonnées sont exactes. Et si vous n’avez pas de médecin de famille, dites-le franchement : l’infirmière pourra vous expliquer comment vos résultats vous seront communiqués et vers qui vous tourner si l’un d’eux demande une attention particulière. Aucun résultat ne devrait tomber entre deux chaises.',
          'Enfin, n’hésitez pas à nous dire ce qui a bien fonctionné et ce qui pourrait être amélioré. Comme service en préparation, nous voulons bâtir nos façons de faire à partir de l’expérience réelle des patients et de leurs proches.',
        ],
        links: [
          { label: 'Bilan de santé complet', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'Coûts, reçus et assurances',
        content: [
          'Parlons franchement d’argent, puisque c’est une question que tout le monde se pose. Les soins infirmiers privés à domicile ne sont généralement pas couverts par la RAMQ. Le tarif du soin vous sera présenté clairement au moment de la réservation, avant toute confirmation, pour éviter les surprises.',
          'Plusieurs régimes d’assurance collective ou privée remboursent toutefois les soins infirmiers, en tout ou en partie. Les conditions varient beaucoup d’un contrat à l’autre : certains exigent une recommandation médicale, d’autres fixent un plafond annuel. Le plus sûr est de vérifier votre contrat ou d’appeler votre assureur avant la visite.',
          'Les frais de soins infirmiers peuvent aussi donner droit à des crédits d’impôt pour frais médicaux, au provincial comme au fédéral, selon votre situation. Conservez tous vos reçus et, au besoin, consultez Revenu Québec, l’Agence du revenu du Canada ou un comptable.',
          'Pour les employeurs, des services comme la vaccination collective ou les bilans de santé en entreprise pourront être organisés directement sur le lieu de travail. Si votre employeur s’y intéresse, il peut nous contacter.',
        ],
        links: [
          { label: 'Vaccination collective', href: '/services/vaccination-collective' },
          { label: 'Bilan de santé en entreprise', href: '/services/bilan-sante-entreprise' },
        ],
      },
      {
        title: 'Proches aidants : trouver votre place',
        content: [
          'Au Québec, une multitude de personnes accompagnent au quotidien un conjoint, un parent ou un enfant malade, souvent en plus d’un emploi. Si c’est votre cas, la visite de l’infirmière vous concerne aussi. Vous êtes souvent celui ou celle qui connaît le mieux les habitudes, les signes d’inquiétude et l’histoire récente de la personne soignée.',
          'Profitez de la visite pour apprendre. Demandez à l’infirmière de vous montrer comment surveiller un pansement, comment reconnaître les signes d’une hypoglycémie, comment aider votre proche à se lever sans vous blesser le dos. Ces gestes, bien appris une fois, vous serviront tous les jours.',
          'Parlez aussi de vous. L’épuisement des proches aidants est réel, et il a des conséquences sur la santé de tout le monde. L’infirmière ne pourra pas tout régler, mais elle peut repérer une situation qui devient difficile et vous orienter vers les ressources existantes, comme le CLSC de votre secteur ou les organismes de soutien aux proches aidants.',
          'Enfin, clarifiez les rôles. Qui donne les médicaments ? Qui appelle si quelque chose change ? Qui reçoit les résultats ? Une conversation franche lors de la première visite évite bien des malentendus par la suite, surtout lorsque plusieurs membres de la famille se partagent l’accompagnement.',
        ],
        callout: {
          label: 'Conseil d’infirmière',
          text: 'Tenez un petit cahier près du téléphone où chaque personne qui s’occupe de votre proche note ce qu’elle observe. À la visite suivante, l’infirmière aura en quelques minutes une vue d’ensemble fidèle.',
        },
      },
      {
        title: 'Langue, accessibilité et besoins particuliers',
        content: [
          'Une bonne visite est une visite où l’on se comprend. MobiSoins s’adresse aux Québécois en français et en anglais. Si vous êtes plus à l’aise dans l’une de ces deux langues, indiquez-le lors de la réservation afin que l’infirmière coordonnatrice en tienne compte dans la mesure du possible.',
          'Si la personne soignée parle une autre langue, prévoyez la présence d’un proche qui pourra traduire, et mentionnez-le dans la demande. Pour des sujets délicats, il peut toutefois être préférable de ne pas passer par un enfant ou un proche très impliqué ; parlez-en avec l’infirmière.',
          'Signalez également tout besoin particulier : une surdité ou une baisse de la vision, un trouble cognitif, une anxiété importante face aux aiguilles, une mobilité réduite, un fauteuil roulant, un escalier sans rampe. Aucun de ces éléments n’empêche une visite ; ils permettent simplement de mieux la préparer, par exemple en prévoyant plus de temps ou en choisissant une position plus confortable pour le soin.',
          'Enfin, si des expériences passées avec le système de santé ont été difficiles pour vous, vous avez le droit de le dire. L’infirmière ne vous demandera pas de vous justifier ; elle adaptera son approche pour que vous vous sentiez respecté.',
        ],
      },
      {
        title: 'Un exemple fictif, du début à la fin',
        content: [
          'Pour rendre tout cela plus concret, suivons un parcours imaginaire. Les personnes et la situation sont fictives, mais les étapes correspondent à la façon dont MobiSoins prévoit fonctionner.',
          'Marc, 54 ans, habite à Sherbrooke. Son médecin lui a remis une requête pour un bilan sanguin à jeun. Il travaille de jour et la perspective de faire la file au centre de prélèvement avant le travail ne l’enchante pas. Un dimanche soir, il réserve en ligne une prise de sang, joint une photo de sa requête et indique ses disponibilités de début de matinée.',
          'Le lendemain, l’infirmière coordonnatrice révise sa demande. Elle remarque que Marc prend un médicament pour le diabète et l’appelle pour lui expliquer comment gérer le jeûne en toute sécurité. La visite est confirmée pour le jeudi matin, avec le nom de l’infirmière et les consignes de préparation.',
          'Jeudi, Marc laisse son dossier sur la table de cuisine, boit un verre d’eau et attend. L’infirmière arrive, se présente, vérifie son identité et sa requête, fait le prélèvement, répond à sa question sur ses résultats de l’an dernier et repart avec les tubes, bien identifiés, vers le laboratoire. Marc est au travail à l’heure habituelle.',
          'Quelques jours plus tard, ses résultats sont transmis à son médecin, comme prévu sur la requête. Marc n’a pas pris congé, n’a pas cherché de stationnement et n’a pas attendu dans une salle bondée. Il a simplement pris dix minutes, le dimanche soir, pour bien remplir sa demande.',
          'Rien de spectaculaire dans cette histoire, et c’est justement le but : un soin simple devrait rester simple.',
        ],
        quote: 'Un soin simple devrait rester simple.',
      },
      {
        title: 'Au retour de l’hôpital : une première visite de transition',
        content: [
          'Les jours qui suivent un congé de l’hôpital sont une période délicate. On rentre chez soi fatigué, avec de nouveaux médicaments, des consignes nombreuses et parfois un pansement ou un dispositif à surveiller. C’est souvent à ce moment qu’une première visite à domicile est la plus utile, et c’est aussi à ce moment qu’elle demande le plus de préparation.',
          'Le document clé est le résumé de congé, ou toute feuille remise à la sortie. Il indique pourquoi vous avez été hospitalisé, ce qui a été fait, les médicaments ajoutés, modifiés ou arrêtés, et le suivi prévu. Joignez-le à votre réservation si possible, ou gardez-le bien en vue sur la table. S’il vous manque, demandez-en une copie à l’hôpital ou à votre pharmacie, qui a souvent reçu les nouvelles ordonnances.',
          'Comparez ensuite la liste de médicaments de l’hôpital avec ce que vous aviez à la maison avant l’hospitalisation. C’est l’un des moments où les erreurs sont les plus fréquentes : un ancien médicament qu’on continue par habitude alors qu’il a été remplacé, une nouvelle dose mal comprise. L’infirmière fera cette vérification avec vous, mais le fait d’avoir tout rassemblé la rend beaucoup plus rapide et fiable.',
          'Notez enfin les rendez-vous déjà prévus : visite chez le chirurgien, examens de contrôle, suivi en clinique. L’infirmière pourra vous aider à vous y retrouver et à préparer les questions à poser. Si vous vivez seul, pensez à la logistique des premiers jours : qui fera l’épicerie, qui ira chercher les médicaments, qui pourra passer vous voir. Ces questions pratiques font partie de la santé, autant que le pansement.',
        ],
        callout: {
          label: 'Conseil d’infirmière',
          text: 'Au congé, demandez toujours : « Quels signes doivent me faire revenir ? » Écrivez la réponse et gardez-la avec votre résumé de congé. Vous la montrerez à l’infirmière lors de la première visite.',
        },
      },
      {
        title: 'Vivre avec une maladie chronique : tirer le meilleur de la première visite',
        content: [
          'Pour une personne qui vit avec l’hypertension, le diabète, une maladie pulmonaire ou cardiaque, la première visite n’est pas un soin isolé : c’est souvent le début d’un suivi régulier. Elle mérite donc une préparation un peu plus poussée.',
          'Apportez vos mesures récentes si vous en prenez à la maison : un carnet de tension, les lectures de votre glucomètre, votre poids noté au fil des semaines. Même incomplètes, ces données racontent une histoire que l’infirmière ne pourrait pas reconstituer en une seule visite. Si vous utilisez un appareil de mesure, gardez-le à portée de main : l’infirmière pourra vérifier avec vous que vous l’utilisez correctement, ce qui change souvent la fiabilité des lectures.',
          'Réfléchissez aussi à vos objectifs personnels, pas seulement aux chiffres. Voulez-vous pouvoir marcher jusqu’à l’épicerie sans vous essouffler ? Mieux comprendre votre alimentation ? Réduire vos visites à l’urgence ? Un objectif concret, exprimé dans vos mots, aide l’infirmière à orienter ses conseils et à mesurer avec vous les progrès.',
          'Enfin, parlez de ce qui vous décourage. Vivre avec une maladie chronique est une course de fond, et il est normal d’avoir des périodes où l’on suit moins bien son traitement. Le dire sans gêne permet de chercher ensemble des solutions réalistes plutôt que de répéter des consignes qui ne tiennent pas compte de votre quotidien.',
          'Selon votre situation, l’infirmière pourra proposer un rythme de suivi, en lien avec votre médecin ou votre IPS, et vous enseigner les signes qui doivent vous amener à consulter plus tôt.',
        ],
        links: [
          { label: 'Suivi de la tension', href: '/services/suivi-tension' },
          { label: 'Suivi du diabète', href: '/services/suivi-diabete' },
        ],
      },
      {
        title: 'Quand ne pas attendre la visite',
        content: [
          'Une visite planifiée est parfaite pour un soin prévu. Elle n’est pas adaptée à une situation qui s’aggrave rapidement. Il est important de savoir reconnaître les moments où il faut agir tout de suite, sans attendre l’infirmière.',
          'Composez le 911 en cas de signes qui menacent la vie. Pour les situations inquiétantes mais non urgentes, Info-Santé 811 vous permet de parler à une infirmière à toute heure du jour et de la nuit, et de savoir quoi faire. Ces services sont complémentaires à MobiSoins, pas en concurrence.',
          'En cas de doute, appelez. Personne ne vous reprochera d’avoir demandé conseil pour rien ; il est bien plus grave d’attendre trop longtemps.',
        ],
        list: [
          'Douleur ou pression à la poitrine, essoufflement soudain : 911.',
          'Visage qui s’affaisse, faiblesse d’un bras, trouble de la parole : 911.',
          'Saignement abondant qui ne s’arrête pas : 911.',
          'Fièvre avec une plaie rouge, chaude et douloureuse : Info-Santé 811 ou consultation rapide.',
          'Confusion nouvelle chez une personne âgée : Info-Santé 811 ou consultation rapide.',
          'Réaction allergique avec gonflement du visage ou difficulté à respirer : 911.',
        ],
      },
    ],
    faq: [
      {
        q: 'Ai-je besoin d’une ordonnance pour recevoir une infirmière à domicile ?',
        a: 'Cela dépend du soin. Une évaluation de santé, un suivi de tension ou de l’enseignement n’exigent pas d’ordonnance. Une prise de sang, l’administration d’un médicament ou certains traitements en nécessitent une. En cas de doute, l’infirmière coordonnatrice vous le précisera en révisant votre demande.',
      },
      {
        q: 'Les soins de MobiSoins seront-ils couverts par la RAMQ ?',
        a: 'Non. Comme la plupart des soins infirmiers privés à domicile, ils ne seront pas couverts par le régime public. Plusieurs assurances collectives ou privées remboursent toutefois les soins infirmiers, et ces frais peuvent être admissibles aux crédits d’impôt pour frais médicaux. Conservez vos reçus et vérifiez votre contrat.',
      },
      {
        q: 'Comment savoir si mon infirmière est réellement autorisée à exercer ?',
        a: 'Toutes les infirmières de MobiSoins seront membres de l’OIIQ. Vous pourrez le confirmer vous-même grâce à l’outil public « Vérifier le droit d’exercice » sur le site de l’Ordre, à partir du nom qui vous sera communiqué avant la visite.',
      },
      {
        q: 'Un proche peut-il être présent pendant la visite ?',
        a: 'Oui, et c’est même recommandé lors d’une première visite, en particulier pour les personnes âgées ou lorsque le proche participe aux soins au quotidien. Vous pouvez aussi demander à parler seul à seule avec l’infirmière à tout moment.',
      },
      {
        q: 'Combien de temps durera la première visite ?',
        a: 'La durée dépend du soin. La première visite est généralement un peu plus longue que les suivantes, parce qu’elle inclut l’évaluation de départ. Une estimation vous sera donnée à la confirmation, pour que vous puissiez vous organiser.',
      },
      {
        q: 'Puis-je réserver pour un parent qui habite ailleurs ?',
        a: 'Oui. Vous pourrez indiquer l’adresse de votre parent et vos propres coordonnées. Parlez-en toutefois avec lui avant de réserver : c’est son consentement qui compte, et une visite annoncée se passe toujours mieux.',
      },
      {
        q: 'Que se passe-t-il si ma demande ne peut pas être faite à domicile ?',
        a: 'L’infirmière coordonnatrice qui révise votre demande vous le dira avant la visite et vous orientera vers la ressource la plus appropriée, qu’il s’agisse de votre clinique, d’Info-Santé 811 ou, en cas d’urgence, du 911.',
      },
      {
        q: 'MobiSoins remplace-t-il l’urgence ou mon médecin ?',
        a: 'Non. MobiSoins offrira des soins infirmiers planifiés et non urgents. En cas d’urgence, composez le 911. Pour un conseil de santé non urgent, Info-Santé 811 est accessible en tout temps.',
      },
    ],
    sources: [
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) : champ d’exercice et activités réservées',
        url: 'https://www.oiiq.org/pratique-professionnelle/exercice-infirmier/champ-exercice-activites-reservees',
      },
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ) : vérifier le droit d’exercice',
        url: 'https://www.oiiq.org/verifier-le-droit-d-exercice',
      },
    ],
    conclusion: {
      title: 'Ce qu’il faut retenir',
      content: [
        'Une première visite bien préparée, c’est dix minutes de préparation pour des mois de suivi plus simple, plus humain et centré sur vos besoins réels. Réservez en ligne, répondez honnêtement aux questions, laissez l’infirmière coordonnatrice réviser votre demande, puis préparez votre dossier et un coin de table.',
        'Le jour venu, posez vos questions, donnez ou refusez votre consentement en toute liberté, et repartez avec un plan clair pour la suite. MobiSoins prépare ses premières visites au Québec : inscrivez-vous pour être parmi les premiers servis.',
      ],
    },
  },
  EN: {
    slug: 'premiere-visite',
    tag: 'Practical Guide',
    date: 'Updated September 2026',
    title: 'How to Prepare for Your First Visit with MobiSoins',
    subtitle:
      'Letting a health professional into your home for the first time raises real questions: who is coming, what will she do, what should I prepare, how long will it take? This complete guide walks you through every step, from booking online to follow-up, so that your first visit is simple, safe, and genuinely useful, whether the care is for you, for an aging parent, or for your child.',
    readTime: '35 min',
    image: '/images/articles/premiere-visite.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    takeaways: [
      'Three documents are enough: health insurance card, an up-to-date medication list, and a prescription or lab requisition if one applies.',
      'A chair, a clear table, and good lighting: there is no need to turn your living room into a clinic.',
      'You can verify any nurse’s right to practise on the OIIQ public register before she even rings the doorbell.',
      'Every request will be reviewed by a coordinating nurse before the visit: if something is missing, you will hear about it beforehand, not on your doorstep.',
      'The first visit is, above all, about listening to you: your symptoms, your worries, your goals.',
      'MobiSoins will provide planned, non-urgent care. In an emergency, call 911; for health advice, call Info-Santé 811.',
    ],
    sections: [
      {
        title: 'Why so many Quebecers wait for a simple procedure',
        content: [
          'A blood draw, a dressing change, suture removal, a monthly injection: these are short procedures nurses perform every day. Yet in Quebec, getting one can swallow half a day, sometimes far more. You book a slot at the test centre, take time off work, find parking, sit in a waiting room, then make the trip home again.',
          'For someone in good health, it is an annoyance. For an older adult who no longer drives, a single parent with a newborn, someone recovering from surgery, or a person living with a chronic illness, it is a real barrier. The result: follow-ups get postponed, dressings are changed too late, and blood work is pushed to “next week.”',
          'MobiSoins was born from exactly this. One of our founders watched his mother spend two full days in a Montreal hospital for care that took only minutes to deliver. The idea is simple: if care can be given safely at home, the nurse should travel, not you.',
          'This guide is written for the person who is about to welcome a nurse into their home for the very first time, and for the family members who support them. We are preparing our first visits in Quebec: the pages that follow describe how those visits will work, what you can prepare, and what you are entitled to expect. Read it from start to finish or jump to the section that concerns you: each part stands on its own.',
        ],
        quote: 'If care can be given safely at home, the nurse should travel, not you.',
      },
      {
        title: 'What MobiSoins will be, and what it will not be',
        content: [
          'Before talking about preparation, it helps to be clear about the service itself. MobiSoins is a Quebec home nursing company. Care will be provided by nurses who are members of the Ordre des infirmières et infirmiers du Québec (OIIQ), by appointment, at the address of your choice: your house, your apartment, a parent’s residence or, for businesses, a workplace.',
          'It will be planned, non-urgent care. In practical terms: blood draws and other samples, dressings and wound care, removal of sutures or staples, injectable medication when a prescription calls for it, vaccination, blood-pressure and diabetes follow-up, support for older adults at home, and health assessments. The full list of services is on our website, with a page for each type of care.',
          'What MobiSoins will not be matters just as much: it is not an emergency service, not a replacement for your family doctor or your specialized nurse practitioner (IPS), and not round-the-clock home support. If you have chest pain, trouble breathing, signs of a stroke, or any other life-threatening situation, call 911 immediately. For non-urgent health advice, at any hour, Info-Santé 811 remains the right place to start.',
          'This clarity protects everyone. It lets you choose the right service at the right time, and it lets our nurses focus fully on what they do best at home: careful, unhurried care in the place where you actually live.',
        ],
        callout: {
          label: 'Where are we now?',
          text: 'MobiSoins is in preparation. We are not providing visits yet: we are building our team and our protocols so that we are ready on launch day. Join the waitlist and you will be among the first to hear from us.',
        },
      },
      {
        title: 'Booking online: what will happen in a few minutes',
        content: [
          'Booking will happen online, in a few minutes, with no mandatory phone call and no paper forms. The goal is simple: to collect, right from the start, the information your nurse will need, so that the visit itself is spent on care rather than paperwork.',
          'First, you will choose the care you need. If you are hesitating between two services, for example between a full health assessment and a simple blood draw, choose the closest one and describe your need in the space provided: the coordinating nurse will adjust it if necessary. Then you will indicate who the care is for (yourself, a parent, a child), the address of the visit, and when you are available.',
          'A few health questions will follow. They are not there to judge you or screen you out arbitrarily: they make it possible to confirm that the care can be delivered safely at home, to bring the right supplies and, if needed, to remind you to attach a prescription. Answer them as honestly as you can, even when an answer seems trivial.',
        ],
        list: [
          'The care you need and, in a few words, the reason for your request.',
          'The person who will receive the care, their age, and your contact details if you are booking for a family member.',
          'The exact address, with useful details: door code, floor, elevator, parking.',
          'Your availability, ideally more than one time slot.',
          'Known allergies and main health conditions.',
          'A photo or file of your prescription or requisition, if the care requires one.',
        ],
      },
      {
        title: 'The role of the coordinating nurse',
        content: [
          'One step sets the way MobiSoins will work apart: every request will be reviewed by a coordinating nurse before a visit is confirmed. There is no robot automatically accepting every booking; there is a professional reading your request with a clinical eye.',
          'Her role has three parts. First, to check that the care requested matches the need you describe and can be delivered safely at home. Second, to make sure nothing is missing: a prescription, a lab requisition, details about a wound or a medication. Third, to match the request with the most appropriate nurse and prepare the visit, so that the person who rings your doorbell already knows why she is there.',
          'If information is missing or if your situation seems to call for a different service, you will be told before the visit, not on your doorstep. For example, if you describe symptoms that need a prompt medical assessment, the coordinating nurse will point you to the right place rather than scheduling a visit that would not meet your need.',
          'In practice, the coordinating nurse also acts as a point of reference. If you book several types of care over the weeks, she will have an overview of your file and can notice what a single visit would not reveal: dressings that drag on, blood pressure that does not stabilize, a need that is changing. She can then suggest raising it with your doctor or adjusting your follow-up.',
          'This review takes a little time, but it saves a great deal more. It prevents unnecessary visits, wasted trips, and unpleasant surprises. Above all, it guarantees that a nurse has applied professional judgment to your request before the first meeting even takes place.',
        ],
        callout: {
          label: 'How MobiSoins helps',
          text: 'If the coordinating nurse has a question, she will reach you using the contact details you provided when booking. Double-check your phone number and email: it is the simplest way to avoid a postponement.',
        },
      },
      {
        title: 'Before the visit: documents to gather',
        content: [
          'An effective first visit starts with complete information. The more accurate the picture your nurse has of your health, the better her assessment, and the less you will have to repeat your story. Take ten minutes the evening before to gather the following.',
          'Keep everything in one envelope or folder that you hold on to for future visits. This small personal file will become your best ally, with MobiSoins as well as with your clinic, your pharmacy, or the hospital.',
        ],
        list: [
          'Your health insurance (RAMQ) card and, if you have one, your group or private insurance card.',
          'An up-to-date medication list, including over-the-counter products, vitamins, and natural health products. Your pharmacist can print one for you in minutes.',
          'Your prescription or lab requisition, if the care requires one (blood draw, injection, certain dressings).',
          'Recent test results and your latest hospital discharge summary, if applicable.',
          'A list of known allergies: medications, latex, adhesives, foods.',
          'Contact details for your family doctor, nurse practitioner, or clinic, if you have one.',
          'Where relevant, the instructions you received when leaving the hospital or from your surgeon.',
        ],
        callout: {
          label: 'Nurse’s tip',
          text: 'Put all your medication containers in one bag and leave it on the table. It is the most reliable way to check what you actually take, and it is often how duplicates and expired products are discovered.',
        },
      },
      {
        title: 'Your medication list: the most valuable document you have',
        content: [
          'If you prepare only one thing, make it this. An accurate medication list is at the heart of safe care. It allows your nurse to spot a possible interaction, to recognize a symptom that might be a side effect, and to check that a new treatment is compatible with what you already take.',
          'The most common trap is the “almost up-to-date” list. A medication was stopped three months ago, another was added in the emergency room, a sleeping pill is taken “only now and then.” Every one of these details matters. The simplest approach is to ask your pharmacy for a recent medication profile, then compare it, pencil in hand, with what is actually in your cupboard.',
          'Do not forget the things people often wrongly consider “not really medication”: natural health products, supplements, creams, eye drops, asthma inhalers, patches. Some over-the-counter products can interact with blood thinners or affect blood sugar. It is better to say too much than too little.',
          'If you use a pill organizer or blister packs prepared by your pharmacy, keep them within reach. Your nurse can check with you that their contents match the list. It is an ideal moment to ask about any medication whose purpose you do not understand.',
        ],
        list: [
          'The name of each medication, its dose, and the time you take it.',
          'Medications taken “as needed,” and how often you actually use them.',
          'Natural health products, vitamins, and supplements.',
          'Medications stopped recently, and why.',
          'Past reactions to any medication, even mild ones.',
        ],
        links: [
          { label: 'Medication assistance', href: '/services/aide-medication' },
          { label: 'IM and SC medication administration', href: '/services/medication-im-sc' },
        ],
      },
      {
        title: 'Preparing the space: simple, clean, well lit',
        content: [
          'Your home does not need to look like a clinic. Your nurse brings her own sterile supplies and is used to every kind of living space, from a studio apartment to a bungalow. What truly helps comes down to a few things.',
          'Choose a quiet room with a stable chair or armchair you are comfortable in, and a clear surface nearby: the corner of a table is plenty. Good lighting matters for a blood draw or wound care: open the curtains or bring a lamp closer. Make sure a sink is accessible for handwashing.',
          'If you have pets, keep them in another room during the visit: even the gentlest dog can get restless around a stranger, and a clean environment lowers infection risk. Wear loose clothing that makes the treatment area easy to reach, for example sleeves that roll up for a blood draw.',
          'Think about access, too. In a Quebec winter, a shovelled walkway and a de-iced front step are not a detail: your nurse is carrying equipment, and a fall on the stairs would help no one. If your building has an intercom, check that it works or explain in your booking how to get in. An outside light switched on helps a great deal for a late-afternoon visit.',
        ],
        list: [
          'A stable chair and a clear surface nearby.',
          'Good lighting, natural or from a lamp.',
          'An accessible sink, with soap and a clean towel.',
          'Pets in another room.',
          'A clear entrance, shovelled in winter, and a visible house number.',
          'The television off or turned down, so you can hear each other.',
        ],
      },
      {
        title: 'The big worry: “Who is coming into my home?”',
        content: [
          'This is the question we hear most, and it is entirely legitimate. Opening your door to someone you do not know, especially when you are ill, elderly, or alone, takes trust. That trust should rest on verifiable facts, not promises.',
          'In Quebec, the title “nurse” is protected by law. To use it and to practise, a person must be registered with the Ordre des infirmières et infirmiers du Québec (OIIQ), follow a code of ethics, and carry professional liability insurance. Every MobiSoins nurse will be an OIIQ member.',
          'Better still, you can check for yourself. The OIIQ offers the public an online tool, “Vérifier le droit d’exercice,” that confirms within seconds whether a person is authorized to practise. You will know your nurse’s name before the visit; nothing stops you from looking her up.',
          'If it puts you at ease, ask a family member to be present for the first visit. It is common, it is welcome, and it lets your caregiver hear the same explanations you do. You can also ask your nurse to show you identification when she arrives: a serious professional will do so without hesitation.',
          'Finally, trust your instincts. If something does not match what was planned, for example a name different from the one you were given, you have every right not to open the door and to contact us to check. No visit is worth feeling unsafe in your own home.',
        ],
        callout: {
          label: 'Good to know',
          text: 'A serious professional will never take offence at being asked to identify herself. Quite the opposite: it is a good habit, and one we encourage.',
        },
      },
      {
        title: 'The day of the visit: the hour before',
        content: [
          'The evening before, you gathered your documents. On the day itself, a few simple steps make the visit run more smoothly. Nothing complicated: the point is mainly to avoid the small hiccups that waste time or force a procedure to be postponed.',
          'Reread the instructions you received with your confirmation. Some care requires specific preparation: fasting for certain blood tests, collecting a first-morning urine sample, not applying cream to an area that will be treated. If an instruction seems unclear, it is better to ask beforehand than to guess.',
          'Take your usual medications as usual, unless told otherwise. People sometimes think they are doing the right thing by skipping a dose “so the results are not skewed”; that is rarely a good idea without professional advice. If you have diabetes and have been asked to fast, raise it ahead of time so you know how to manage your medication and avoid low blood sugar.',
          'Finally, keep your phone within reach. If your nurse is delayed by traffic or by a previous visit that ran longer than expected, she or the team can let you know. Likewise, if you need to step out or if your condition changes, let us know as early as possible.',
        ],
        list: [
          'Reread the preparation instructions received with your confirmation.',
          'Fast if asked to, drinking water unless told otherwise.',
          'Take your usual medications, unless given specific instructions.',
          'Put your file (cards, list, prescription) on the table.',
          'Keep pets in another room and clear the entrance.',
          'Keep your phone nearby.',
        ],
      },
      {
        title: 'During the visit: what to expect, step by step',
        content: [
          'The first visit usually runs a little longer than later ones, because it establishes your baseline. It generally unfolds in four stages.',
          'First, welcome and identification: your nurse introduces herself, confirms your identity and the planned care, and washes her hands. Next comes the assessment: she reviews your history, medications, and allergies, takes vital signs as needed, and asks about your symptoms and daily life.',
          'Then the care itself, whether a blood draw, a dressing, an injection, a vaccine, or blood-pressure or glucose follow-up, performed under the same clinical protocols as in a facility, with sterile single-use supplies. Your nurse explains each step before doing it and makes sure she has your consent.',
          'Finally, teaching and next steps: what to watch for, when to worry, when the next visit will be. Biomedical waste such as needles leaves with her in a secure container. There is nothing for you to clean up.',
          'Do not be surprised if your nurse takes notes during the conversation. She must keep a record, as in any care setting. Those notes ensure continuity: next time, even if a different nurse comes, she will know where things stand.',
        ],
        links: [
          { label: 'Blood draw at home', href: '/services/prise-sang' },
          { label: 'Dressings', href: '/services/pansements' },
          { label: 'Suture removal', href: '/services/retrait-points' },
        ],
      },
      {
        title: 'Your consent, at every step',
        content: [
          'In Quebec, no care can be provided without the free and informed consent of the person, or of the person authorized to consent on their behalf. This principle is not an administrative formality: it is a fundamental right, and it applies at home exactly as it does in hospital.',
          '“Free” means you are under no pressure. “Informed” means you understand what is about to be done, why, and what the options are. That is why your nurse will explain each step before doing it and ask for your agreement. If you do not understand an explanation, say so: she will put it another way.',
          'You can also change your mind. Agreeing to a blood draw does not commit you to any other care suggested during the same visit. You can ask for a pause, ask questions, or say no. Your nurse can explain the possible consequences of refusing, but the decision is yours.',
          'For a child, it is generally the parent or guardian who consents, while the situation is explained to the child in a way suited to their age. For an adult whose capacity to consent is uncertain, specific rules apply; if that is your situation, mention it when booking so the coordinating nurse can prepare the visit properly with you.',
        ],
        callout: {
          label: 'Good to know',
          text: 'You always have the right to say “wait” or “no.” A good nurse would much rather have a patient who asks questions than one who goes through care they do not understand.',
        },
      },
      {
        title: 'Voice your needs, all of them',
        content: [
          'In a clinic, appointments are timed to the minute, and many patients leave without asking the question that was really on their mind. At home, the pace is different. Make the most of it.',
          'Write your questions down ahead of time, on paper or on your phone. Describe symptoms concretely: since when, how often, what eases or worsens them. Mention what no chart captures, too: the fear of falling in the shower, trouble opening a pill organizer, worsening sleep, a spouse worn out from caregiving. This information changes a care plan.',
          'No question is too basic. Understanding your treatment makes it easier to follow, and helping you understand it is part of your nurse’s job.',
        ],
        list: [
          'What is the goal of this care, and how will I know it is working?',
          'Which signs should make me call you back, or go to the emergency room?',
          'Could my medications interact with each other?',
          'How often will I need follow-up?',
          'Who receives my results, and how soon?',
          'What can I do myself, between visits, to get better?',
        ],
      },
      {
        title: 'If the visit is for an aging parent',
        content: [
          'Many first bookings will be made not by the person receiving care, but by a son, a daughter, or a thoughtful neighbour. It is a common situation, and it calls for a few particular precautions.',
          'First, talk it over with your parent before booking. An older adult who sees a stranger arrive without warning may feel stripped of their own decisions, or even refuse to open the door. Explain who is coming, why, and at what time. If possible, write the nurse’s name on a piece of paper next to the phone.',
          'Next, be there if you can, at least for the first visit. You can fill in the health history, describe your parent’s routines, and hear the instructions. Be careful, however, to let the person concerned speak for themselves: your nurse will address them first, and it is their consent that counts.',
          'Consider a fictional example. Mrs. Gagnon, 82, lives alone in a duplex in Longueuil. Her daughter books a blood-pressure follow-up and mentions in the request that her mother seems to forget some of her medications. During the visit, the nurse takes her blood pressure, then goes through Mrs. Gagnon’s pill organizer with her and also notices a slippery rug in the hallway. The care requested was simple; the visit made it possible to spot two other risks and discuss them openly with the family.',
          'That is the real value of a home visit for an older adult: the nurse sees the actual living environment and can suggest concrete adjustments, working with the doctor or pharmacy when needed.',
        ],
        links: [
          { label: 'Home care for seniors', href: '/services/soins-domicile-aines' },
          { label: 'Blood-pressure follow-up for seniors', href: '/services/suivi-tension-aines' },
        ],
      },
      {
        title: 'If the visit is for a child or a baby',
        content: [
          'Having a nurse come to your home can make a vaccine or a baby check-up far less stressful, for the child and the parent alike. No noisy waiting room, no car seat to strap in during a snowstorm, no siblings to arrange care for: your child stays in a familiar environment.',
          'Have your child’s vaccination record and health insurance card ready and, for a baby, information about feeding and recent weight if you have it. Write your questions down in advance: between the crying and the fatigue, it is easy to forget what you meant to ask.',
          'For a child old enough to understand, explain simply what is going to happen, without lying. Saying “it will not hurt” before an injection undermines trust; saying “you will feel a little pinch, then it will be over, and I will be right here with you” is both honest and reassuring. Have a toy or a distraction on hand, and keep your child on your lap if that calms them.',
          'For an infant, choose if possible a moment when they are not too hungry or too tired. Breastfeeding or bottle-feeding during or right after an injection can help comfort them; your nurse will tell you what is possible for the care being given.',
        ],
        links: [
          { label: 'Vaccines for children', href: '/services/vaccins-enfant' },
          { label: 'Baby follow-up', href: '/services/suivi-bebe' },
          { label: 'Pediatric check-up', href: '/services/bilan-pediatrique' },
        ],
      },
      {
        title: 'Samples: preparing properly for a reliable result',
        content: [
          'Blood draws and other samples are among the most requested types of home care. They are also where a small preparation mistake can mean starting all over again. A few simple rules make a big difference.',
          'Read the lab requisition and the instructions you received carefully. Some tests require fasting, others do not; some must be done at a precise time, for example before taking a medication. If nothing is indicated and you are unsure, ask when you book.',
          'Drink water unless told otherwise: good hydration makes veins easier to find. Wear a top with loose or short sleeves. If you know your veins are hard to find, or if you tend to feel faint during blood draws, say so right away: your nurse will have you lie down or adapt her technique.',
          'For a urine sample or another biological specimen, follow the collection instructions to the letter and use only the container provided. Your nurse will then take care of labelling and transporting the sample to the laboratory under the required conditions. Ask her how and when you will receive your results: it is an important question, and the answer depends on the laboratory and on the professional who ordered the test.',
        ],
        links: [
          { label: 'Blood draw and lab tests', href: '/services/prise-sang-labo' },
          { label: 'Urinalysis', href: '/services/analyse-urine' },
          { label: 'Biological sampling', href: '/services/prelevement-biologique' },
        ],
      },
      {
        title: 'Wounds, sutures, and dressings: what to plan for',
        content: [
          'After day surgery, a cut stitched up in the emergency room, or a wound that is slow to heal, home wound care spares you exhausting trips back and forth. It does, however, depend on good information being passed along.',
          'Keep the instructions given by your surgeon or the emergency department: the type of closure (sutures, staples, glue), the planned removal date, the type of dressing recommended. If the hospital gave you specific supplies, keep them for your nurse. These details let her continue exactly the plan that was set.',
          'Before the visit, do not remove the dressing yourself “to have a look” unless told to: your nurse will want to examine the wound under clean conditions. Instead, note what you have noticed over the past few days: increasing pain, spreading redness, discharge, odour, fever. These are precisely the signs she will look for.',
          'If you have a catheter or another device at home, also prepare the information that comes with it: the date it was inserted, the type of device, the instructions from the team that placed it. Your nurse can then maintain it according to the established plan and quickly spot a problem.',
          'If any of these signs becomes pronounced, especially with fever, do not wait for the scheduled visit: call Info-Santé 811 or seek care. Planned home care does not replace a prompt assessment when an infection is suspected.',
        ],
        links: [
          { label: 'Dressings and wound care', href: '/services/pansements' },
          { label: 'Suture or staple removal', href: '/services/retrait-points' },
          { label: 'Catheter care', href: '/services/catheters' },
        ],
      },
      {
        title: 'What a home nurse actually does',
        content: [
          'Nursing is often reduced to technical acts: drawing blood, dressing wounds, giving injections. The reality is much broader. In Quebec, the Nurses Act entrusts nurses with assessing health status, clinical monitoring, and following people with complex health problems, among a set of activities reserved to them.',
          'At home, in practice, your nurse sees what no exam room ever shows: how you move around your own kitchen, where your medications are kept, whether the hallway rug is a tripping hazard, whether you are eating enough. She catches early signs of complications, such as a wound turning red, climbing blood pressure, or new confusion, and knows when your doctor needs to be alerted.',
          'She also plays a teaching role. Learning to measure your blood pressure correctly, to recognize low blood sugar, to look after a dressing between visits: these skills build independence and prevent many complications.',
          'It is this combination of technical skill, clinical judgment, and teaching, exercised in your real living environment, that makes home care so valuable.',
        ],
        links: [
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
          { label: 'Blood-pressure follow-up', href: '/services/suivi-tension' },
          { label: 'Advice consultation', href: '/services/consultation-conseil' },
        ],
      },
      {
        title: 'Confidentiality: what stays between you and your nurse',
        content: [
          'Receiving care at home also means letting someone see part of your private life. It is natural to wonder what happens to the information shared during a visit.',
          'Nurses are bound by professional secrecy under their code of ethics. What they learn about your health and personal life cannot be disclosed without your consent, except in the exceptional situations provided for by law. In Quebec, the protection of personal information is also governed by laws that apply to private companies, including MobiSoins.',
          'In practice, the information collected will be used to care for you, to ensure continuity between visits and, with your agreement, to communicate with the professionals who follow you. You can ask what information is kept about you and raise any question about how it is used. Our privacy policy, available on our website, sets out these commitments.',
          'If a family member is present during the visit and you want to discuss something privately, just say so. Your nurse can ask them to step out for a few minutes. It is your health: you decide who hears what.',
        ],
        quote: 'It is your health: you decide who hears what.',
      },
      {
        title: 'After the visit: follow-up makes all the difference',
        content: [
          'A single procedure solves a one-time problem; follow-up builds better health. Before your nurse leaves, make sure you know what comes next: the date of the next visit if there is one, the instructions to follow until then, and whom to contact if something changes.',
          'Keep your instructions, medication list, and results in one place. If you have a family doctor or nurse practitioner, let them know about the care you received: continuity between professionals is one of the best safeguards against errors and duplicate tests.',
          'In the days that follow, jot down what you observe: a wound that is or is not improving, blood-pressure readings, a side effect. These notes will be valuable at the next visit. And if you forgot to ask a question, that is fine: write it down for next time or, if it cannot wait, contact us or Info-Santé 811 depending on the situation.',
          'If your lab results need to be sent to your doctor, check before the end of the visit that the contact details are correct. And if you do not have a family doctor, say so plainly: your nurse can explain how your results will reach you and whom to turn to if one of them needs particular attention. No result should fall through the cracks.',
          'Finally, do not hesitate to tell us what worked well and what could be better. As a service in preparation, we want to build our way of working on the real experience of patients and their families.',
        ],
        links: [
          { label: 'Complete health assessment', href: '/services/bilan-complet' },
        ],
      },
      {
        title: 'Costs, receipts, and insurance',
        content: [
          'Let us talk frankly about money, since everyone wonders about it. Private home nursing care is generally not covered by RAMQ. The price of the care will be shown clearly when you book, before anything is confirmed, so there are no surprises.',
          'Many group or private insurance plans do, however, reimburse nursing care in whole or in part. Conditions vary widely from one contract to another: some require a medical referral, others set an annual ceiling. The safest approach is to check your contract or call your insurer before the visit.',
          'Nursing fees may also qualify for medical-expense tax credits, provincially and federally, depending on your situation. Keep all your receipts and, if needed, consult Revenu Québec, the Canada Revenue Agency, or an accountant.',
          'For employers, services such as group vaccination and workplace health assessments can be organized directly on site. If your employer is interested, they can contact us.',
        ],
        links: [
          { label: 'Group vaccination', href: '/services/vaccination-collective' },
          { label: 'Workplace health assessment', href: '/services/bilan-sante-entreprise' },
        ],
      },
      {
        title: 'Family caregivers: finding your place',
        content: [
          'In Quebec, a great many people support a spouse, a parent, or a sick child every day, often on top of a job. If that is you, the nurse’s visit concerns you too. You are often the person who knows best the habits, warning signs, and recent history of the person receiving care.',
          'Use the visit to learn. Ask your nurse to show you how to keep an eye on a dressing, how to recognize the signs of low blood sugar, how to help your family member stand up without hurting your back. These skills, learned properly once, will serve you every day.',
          'Talk about yourself, too. Caregiver exhaustion is real, and it affects everyone’s health. Your nurse will not be able to solve everything, but she can spot a situation that is becoming difficult and point you to existing resources, such as your local CLSC or caregiver support organizations.',
          'Finally, clarify roles. Who gives the medications? Who calls if something changes? Who receives the results? A frank conversation at the first visit prevents many misunderstandings later, especially when several family members share the caregiving.',
        ],
        callout: {
          label: 'Nurse’s tip',
          text: 'Keep a small notebook by the phone where everyone who looks after your family member writes down what they notice. At the next visit, your nurse will get an accurate overview within minutes.',
        },
      },
      {
        title: 'Language, accessibility, and particular needs',
        content: [
          'A good visit is one where people understand each other. MobiSoins serves Quebecers in French and in English. If you are more comfortable in one of the two languages, say so when you book so that the coordinating nurse can take it into account as far as possible.',
          'If the person receiving care speaks another language, arrange for a family member who can interpret, and mention it in the request. For sensitive topics, however, it may be better not to rely on a child or a very involved relative; talk it over with your nurse.',
          'Also flag any particular need: hearing or vision loss, a cognitive impairment, significant anxiety about needles, reduced mobility, a wheelchair, a staircase without a railing. None of these prevents a visit; they simply make it possible to prepare better, for example by allowing more time or choosing a more comfortable position for the care.',
          'Finally, if past experiences with the health system have been difficult for you, you have every right to say so. Your nurse will not ask you to justify yourself; she will adapt her approach so that you feel respected.',
        ],
      },
      {
        title: 'A fictional example, from start to finish',
        content: [
          'To make all this more concrete, let us follow an imaginary journey. The people and the situation are fictional, but the steps match the way MobiSoins plans to work.',
          'Marc, 54, lives in Sherbrooke. His doctor has given him a requisition for fasting blood work. He works days, and the prospect of lining up at the test centre before work does not appeal to him. One Sunday evening, he books a blood draw online, attaches a photo of his requisition, and indicates that early mornings suit him.',
          'The next day, the coordinating nurse reviews his request. She notices that Marc takes a diabetes medication and calls him to explain how to handle the fast safely. The visit is confirmed for Thursday morning, with the nurse’s name and the preparation instructions.',
          'On Thursday, Marc leaves his file on the kitchen table, drinks a glass of water, and waits. The nurse arrives, introduces herself, checks his identity and requisition, draws the blood, answers his question about last year’s results, and leaves with the properly labelled tubes for the laboratory. Marc gets to work at his usual time.',
          'A few days later, his results are sent to his doctor, as indicated on the requisition. Marc did not take time off, did not hunt for parking, and did not wait in a crowded room. He simply took ten minutes on Sunday evening to fill in his request carefully.',
          'Nothing spectacular about this story, and that is exactly the point: simple care should stay simple.',
        ],
        quote: 'Simple care should stay simple.',
      },
      {
        title: 'Coming home from hospital: a first transition visit',
        content: [
          'The days after a hospital discharge are a delicate period. You come home tired, with new medications, a long list of instructions, and sometimes a dressing or a device to keep an eye on. This is often when a first home visit is most useful, and it is also when it calls for the most preparation.',
          'The key document is the discharge summary, or any sheet you were given when you left. It explains why you were hospitalized, what was done, which medications were added, changed, or stopped, and what follow-up is planned. Attach it to your booking if possible, or keep it in plain view on the table. If you do not have it, ask the hospital for a copy, or ask your pharmacy, which has often received the new prescriptions.',
          'Next, compare the hospital’s medication list with what you had at home before your stay. This is one of the moments when errors are most common: an old medication you keep taking out of habit although it has been replaced, a new dose that was misunderstood. Your nurse will go through this check with you, but having everything gathered makes it much faster and more reliable.',
          'Finally, note the appointments already scheduled: a visit to the surgeon, follow-up tests, a clinic appointment. Your nurse can help you keep track of them and prepare the questions to ask. If you live alone, think about the logistics of the first few days: who will do the groceries, who will pick up the medications, who can drop by to see you. These practical questions are part of health, just as much as the dressing.',
        ],
        callout: {
          label: 'Nurse’s tip',
          text: 'When you are discharged, always ask: “Which signs should make me come back?” Write down the answer and keep it with your discharge summary. You will show it to your nurse at the first visit.',
        },
      },
      {
        title: 'Living with a chronic condition: getting the most from the first visit',
        content: [
          'For someone living with high blood pressure, diabetes, or lung or heart disease, the first visit is not a one-off procedure: it is often the start of regular follow-up. It therefore deserves slightly more thorough preparation.',
          'Bring your recent readings if you take any at home: a blood-pressure log, readings from your glucose meter, your weight noted over the weeks. Even if incomplete, this data tells a story your nurse could not piece together in a single visit. If you use a measuring device, keep it within reach: your nurse can check with you that you are using it correctly, which often changes how reliable the readings are.',
          'Think about your personal goals too, not just the numbers. Do you want to be able to walk to the grocery store without getting out of breath? Understand your diet better? Cut down on trips to the emergency room? A concrete goal, expressed in your own words, helps your nurse shape her advice and track your progress with you.',
          'Finally, talk about what discourages you. Living with a chronic condition is a long-distance race, and it is normal to go through periods when you follow your treatment less closely. Saying so without embarrassment makes it possible to look for realistic solutions together, rather than repeating instructions that ignore your daily life.',
          'Depending on your situation, your nurse can suggest a follow-up schedule, in coordination with your doctor or nurse practitioner, and teach you the signs that should prompt you to seek care sooner.',
        ],
        links: [
          { label: 'Blood-pressure follow-up', href: '/services/suivi-tension' },
          { label: 'Diabetes follow-up', href: '/services/suivi-diabete' },
        ],
      },
      {
        title: 'When not to wait for the visit',
        content: [
          'A scheduled visit is perfect for planned care. It is not suited to a situation that is getting worse quickly. It is important to recognize the moments when you need to act right away, without waiting for the nurse.',
          'Call 911 for any life-threatening signs. For worrying but non-urgent situations, Info-Santé 811 lets you speak to a nurse at any hour of the day or night and find out what to do. These services complement MobiSoins; they do not compete with it.',
          'When in doubt, call. No one will blame you for asking for advice unnecessarily; waiting too long is far more serious.',
        ],
        list: [
          'Chest pain or pressure, sudden shortness of breath: 911.',
          'Drooping face, arm weakness, trouble speaking: 911.',
          'Heavy bleeding that will not stop: 911.',
          'Fever with a red, hot, painful wound: Info-Santé 811 or prompt medical care.',
          'New confusion in an older adult: Info-Santé 811 or prompt medical care.',
          'Allergic reaction with facial swelling or trouble breathing: 911.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a prescription to have a nurse come to my home?',
        a: 'It depends on the care. A health assessment, blood-pressure follow-up, or health teaching does not require a prescription. A blood draw, medication administration, and certain treatments do. If in doubt, the coordinating nurse will tell you when she reviews your request.',
      },
      {
        q: 'Will MobiSoins care be covered by RAMQ?',
        a: 'No. Like most private home nursing, it will not be covered by the public plan. Many group or private insurance plans do reimburse nursing care, however, and these fees may be eligible for medical-expense tax credits. Keep your receipts and check your contract.',
      },
      {
        q: 'How do I know my nurse is really authorized to practise?',
        a: 'Every MobiSoins nurse will be an OIIQ member. You will be able to confirm it yourself using the public “Vérifier le droit d’exercice” tool on the Order’s website, with the name you receive before the visit.',
      },
      {
        q: 'Can a family member be present during the visit?',
        a: 'Yes, and it is even recommended for a first visit, especially for older adults or when a family member helps with day-to-day care. You can also ask to speak with your nurse privately at any time.',
      },
      {
        q: 'How long will the first visit take?',
        a: 'It depends on the care. The first visit usually runs a little longer than later ones, because it includes the initial assessment. You will be given an estimate with your confirmation so you can plan your day.',
      },
      {
        q: 'Can I book for a parent who lives somewhere else?',
        a: 'Yes. You will be able to enter your parent’s address along with your own contact details. Talk it over with them before booking, though: it is their consent that counts, and a visit that has been announced always goes better.',
      },
      {
        q: 'What happens if my request cannot be handled at home?',
        a: 'The coordinating nurse who reviews your request will tell you before any visit and point you to the most appropriate resource, whether that is your clinic, Info-Santé 811 or, in an emergency, 911.',
      },
      {
        q: 'Does MobiSoins replace the emergency room or my doctor?',
        a: 'No. MobiSoins will provide planned, non-urgent nursing care. In an emergency, call 911. For non-urgent health advice, Info-Santé 811 is available around the clock.',
      },
    ],
    sources: [
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ): scope of practice and reserved activities',
        url: 'https://www.oiiq.org/pratique-professionnelle/exercice-infirmier/champ-exercice-activites-reservees',
      },
      {
        label: 'Ordre des infirmières et infirmiers du Québec (OIIQ): verify the right to practise',
        url: 'https://www.oiiq.org/verifier-le-droit-d-exercice',
      },
    ],
    conclusion: {
      title: 'Key takeaway',
      content: [
        'A well-prepared first visit means ten minutes of preparation for months of simpler, more human follow-up centred on your real needs. Book online, answer the questions honestly, let the coordinating nurse review your request, then prepare your file and a corner of the table.',
        'On the day, ask your questions, give or withhold your consent freely, and leave with a clear plan for what comes next. MobiSoins is preparing its first visits in Quebec: sign up to be among the first served.',
      ],
    },
  },
};

export default function PremiereVisitePage() {
  return <ArticleLayout article={article} />;
}
