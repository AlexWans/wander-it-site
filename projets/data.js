// ─────────────────────────────────────────────────────────────────────────────
// PROJETS WANDER-IT — fichier central
// Pour ajouter un projet : copier un bloc, incrémenter l'id, adapter les valeurs.
// ─────────────────────────────────────────────────────────────────────────────

window.PROJETS = [
  {
    id: 1,

    // ── Infos de base ────────────────────────────────────────────────────────
    titre:          'Automatisation Outlook → Odoo',
    client:         'Jost',
    annee:          '2025',
    categorie:      'automatisation',
    categorieLabel: 'Automatisation',
    technologies:   'Python · Claude Vision · API Odoo · 98% de succès',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#B1DCED',
    tagBg:     'rgba(0,66,88,0.65)',
    imageCard: '/assets/images/projet-1/outlook-inbox.png',   // ratio 3:4
    imageGrid: '/assets/images/projet-1/outlook-inbox.png',   // ratio 16:9

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche:  "50 mails/jour traités en full auto — détection de factures & CMR, OCR et intégration directe dans l'ERP Odoo.",

    contexte:  "Jost reçoit chaque jour une cinquantaine d'emails entrants dans une boîte Outlook dédiée à la comptabilité fournisseurs. Ces mails transportent des factures et des CMR en pièce jointe, qui devaient jusqu'alors être ouverts, identifiés, lus et saisis manuellement dans leur ERP Odoo — une tâche répétitive représentant 1h30 à 2h de travail quotidien.<br><br>Wander-IT a conçu et déployé un pipeline complet : dès l'arrivée d'un mail, le système analyse la pièce jointe, évalue via un score de confiance s'il s'agit d'une facture ou d'un CMR, OCRise le document pour en extraire les données clés, puis appelle directement l'API Odoo. Lorsque le score est insuffisant, le mail est laissé non lu et flagué pour traitement manuel — moins de 2% des cas.<br><br>Un dashboard dédié permet au client de suivre chaque run en temps réel : mails traités, succès, erreurs et CMR renvoyés — pour un contrôle total à tout moment.",

    logoClient:  '/assets/images/projet-1/logo-jost.jpg',
    logosPartenaires: [
      { src: '/assets/images/projet-1/Microsoft_Outlook_Icon_(2025\u2013present).svg.png', alt: 'Outlook' },
      { src: '/assets/images/projet-1/Odoo_Official_Logo.png', alt: 'Odoo' },
    ],

    chiffreCle: { valeur: '~40h', label: 'récupérées<br>chaque mois' },

    schema: '/assets/images/projet-1/flow.svg',

    gains: [
      "50 mails traités automatiquement chaque jour — le personnel se concentre sur ce qui a vraiment de la valeur.",
      "1h30 à 2h gagnées par jour, soit environ 35 à 40 heures récupérées chaque mois.",
      "Détection automatique facture vs CMR avec score de confiance : en dessous du seuil, le mail reste non lu et est flagué pour traitement manuel (<2% des cas).",
      "Fallback IA sur les cas complexes — aucune perte de données, même sur des documents dégradés.",
      "Gestion des erreurs intégrée : mails publicitaires, pièces jointes manquantes ou non conformes.",
    ],

    visuelsEnContexte: true,
    layoutVisuels: 'grid',
    visuels: [
      '/assets/images/projet-1/Dashboard view.png',
      '/assets/images/projet-1/outlook-inbox.png',
    ],
  },

  {
    id: 2,

    // ── Infos de base ────────────────────────────────────────────────────────
    titre:          'Vérification d\'alignement de pieux solaires',
    client:         'HCB Solar',
    annee:          '2025',
    categorie:      'app',
    categorieLabel: 'Application Web',
    technologies:   'Python · JavaScript · CSV · Calcul géométrique · Déploiement cloud',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#A8D5A2',
    tagBg:     'rgba(20,70,30,0.65)',
    imageCard: '/assets/images/projet-2/app-detail.png',
    imageGrid: '/assets/images/projet-2/app-detail.png',

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche:  "800 hectares, 70 000 pieux — une web app sur mesure pour vérifier l'alignement structural en temps réel et proposer automatiquement les corrections.",

    contexte:  "HCB Solar exploite des fermes solaires de grande envergure en Australie, dont certaines dépassent les 800 hectares. Sur ces installations, des dizaines de milliers de pieux structurels supportent les trackers solaires — et leur alignement doit respecter des tolérances millimétriques imposées par les normes du secteur.<br><br>Avec 70 000 pieux à contrôler par projet, le service qualité ne pouvait pas s'appuyer sur des outils génériques : il fallait une solution pensée pour leur réalité. Wander-IT a conçu et développé une application web 100% sur mesure : à partir d'un simple fichier CSV contenant les coordonnées X/Y/Z de chaque pieu, l'application calcule automatiquement l'alignement, vérifie chaque condition de tolérance et génère un schéma visuel interactif permettant d'identifier en un coup d'œil les zones hors-tolérance.<br><br>Lorsqu'un problème est détecté, l'application propose plusieurs scénarios de correction — couper tel pieu de X mm, ajuster tel autre de Y mm — et permet d'exporter l'ensemble des résultats en CSV pour un traitement dans Excel, Google Sheets ou tout autre outil métier. L'application est hébergée en ligne, accessible par le client, et maintenue à distance par Wander-IT.",

    logoClient:  '/assets/images/projet-2/logo-hcb-white.svg',
    logosPartenaires: [],

    chiffreCle: {
      valeur: null,
      label: null,
      points: ['Crédibilité client', 'Efficacité opérationnelle', 'Analyse rapide de big data'],
    },

    gains: [
      "Contrôle de 70 000 pieux en quelques secondes — là où une vérification manuelle prendrait des jours.",
      "Schéma visuel interactif : les zones hors-tolérance sont identifiées immédiatement, sans expertise technique requise.",
      "Propositions de correction automatiques — l'opérateur sait exactement quoi ajuster et de combien.",
      "Export CSV des résultats pour intégration directe dans les rapports qualité existants.",
      "Support visuel professionnel pour les présentations client sur site — crédibilité et clarté garanties.",
      "Application web hébergée, mise à jour à distance par Wander-IT — zéro installation, zéro maintenance côté client.",
    ],

    visuels: [
      '/assets/images/projet-2/app-detail.png',
      '/assets/images/projet-2/app-overview.png',
      '/assets/images/projet-2/app-tolerance.png',
      '/assets/images/projet-2/image.png',
    ],
  },

  {
    id: 3,
    titre:          'Suivi de chantier solaire sur AppSheet',
    client:         'HCB Solar',
    annee:          '2025',
    categorie:      'app',
    categorieLabel: 'Application Mobile',
    technologies:   'Google AppSheet · Géolocalisation · QR Code · Mode hors-ligne',

    tagColor:  '#A8D5A2',
    tagBg:     'rgba(20,70,30,0.65)',
    imageCard: '/assets/images/projet-3/MockupApp.svg',
    imageGrid: '/assets/images/projet-3/3fQGQIoRGk7.png',

    accroche:  "Une app mobile sur mesure pour gérer des dizaines de milliers de pieux sur chantier — géolocalisation, encodage terrain et reporting live pour le gestionnaire de projet.",

    contexte:  "Sur les chantiers de fermes solaires de grande envergure, le suivi des travaux poste par poste représente un défi logistique majeur. Chaque projet peut compter des dizaines de milliers de pieux à traiter, répartis sur des centaines d'hectares. Sans outil adapté, les employés perdent un temps précieux à se repérer, les données remontent avec du retard, et le gestionnaire de projet navigue à l'aveugle.<br><br>Wander-IT a développé une application mobile sur Google AppSheet, pensée pour une utilisation chantier sur smartphone ou tablette. Grâce à la géolocalisation intégrée, le travailleur est guidé directement vers le pieu qui nécessite une intervention. Il consulte les informations du pieu, réalise son travail, et encode le résultat en temps réel — en quelques secondes, sans paperasse.<br><br>Toutes les données remontent automatiquement dans Google Sheets, offrant au gestionnaire de projet une visibilité live sur l'avancement, la productivité de chaque équipe et les écarts par rapport aux objectifs. Un support sérieux et structuré, directement présentable au client final.<br><br>L'application fonctionne en mode hors-ligne — indispensable sur des chantiers isolés — et intègre des fonctionnalités avancées comme le scan de QR code et l'enregistrement de position GPS.",

    logoClient:  '/assets/images/projet-2/logo-hcb-white.svg',
    logosPartenaires: [
      { src: '/assets/images/projet-3/AppSheet Logo.png', alt: 'AppSheet' },
    ],

    chiffreCle: {
      valeur: null,
      label: null,
      points: ['Efficacité', 'Traçabilité', 'Live reporting'],
    },

    schema: '/assets/images/projet-3/MockupApp.svg',
    schemaLabel: 'App visualisation',
    schemaCrop: false,
    schemaWidth: '700%',
    schemaMarginLeft: '-300%',
    schemaMarginTop: '-140%',
    schemaMarginBottom: '-140%',
    visuelsEnContexte: true,
    visuelsRestantsSmall: true,

    gains: [
      "Gain de temps immédiat sur chantier : le travailleur va droit au bon pieu grâce à la géolocalisation — pas de confusion, pas de perte de temps.",
      "Reporting automatique et en temps réel : le gestionnaire suit l'avancement sans attendre les remontées de fin de journée.",
      "Suivi de productivité par équipe avec données structurées — un support professionnel à présenter directement au client.",
      "Visibilité réelle sur des chantiers de grande envergure : des centaines d'hectares, des milliers de pieux, pilotés depuis un tableau de bord Google Sheets.",
      "Application 100% configurable selon les besoins du projet — scan QR code, enregistrement GPS, formulaires sur mesure.",
      "Mode hors-ligne natif : les données sont synchronisées dès que la connexion est rétablie, sans perte de saisie.",
    ],

    layoutVisuels: 'grid',
    visuels: [
      '/assets/images/projet-3/3fQGQIoRGk7.png',
    ],
  },

  {
    id: 4,
    titre:          "DailyPlan — Allocation d'équipes & ressources",
    client:         'Interne',
    annee:          '2025',
    categorie:      'app',
    categorieLabel: 'Application Web',
    technologies:   'Drag & Drop · Export Image · Météo API · Import CSV',

    tagColor:  '#F5C97A',
    tagBg:     'rgba(120,80,10,0.65)',
    imageCard: '/assets/images/projet-4/DailyPlan.png',
    imageGrid: '/assets/images/projet-4/DailyPlan.png',

    accroche: "Fini les plans à l'arrache sur Excel — une application web intuitive avec drag & drop pour allouer équipes, véhicules et tâches en quelques minutes chaque matin.",

    contexte: "Sur les grands chantiers avec de nombreuses ressources humaines et matérielles, la planification quotidienne est un casse-tête. Les gestionnaires passent un temps précieux à remplir des tableaux Excel, à corriger les formats de cellule, à coordonner les équipes et à diffuser le plan final.<br><br>DailyPlan est une application web pensée pour les gestionnaires de chantier à forte intensité de ressources. En drag & drop, il alloue en quelques minutes employés, véhicules et tâches. Le système vérifie automatiquement les contraintes — places disponibles dans les véhicules, effectifs par équipe, chef désigné — et signale les incohérences avant validation.<br><br>L'importation des listes (employés, véhicules, tâches) se fait via CSV, rendant l'outil adaptable à n'importe quel chantier. Une fois le plan prêt, un clic génère un screenshot exportable, prêt à être partagé sur WhatsApp. L'historique jour par jour et la fonction « copier depuis hier » réduisent encore le temps de saisie quotidien.",

    chiffreCle: {
      valeur: null,
      label: null,
      points: ['Gain de temps', 'Zéro surcharge', 'Partage instantané'],
    },

    gains: [
      "Plus de 30 minutes gagnées chaque matin — le gestionnaire part sur le terrain avec un plan clair préparé en quelques clics.",
      "Zéro surcharge de véhicule : le système bloque les assignations dépassant la capacité configurée.",
      "Plan partageable instantanément sur WhatsApp via capture d'écran — toute l'équipe informée avant l'arrivée sur chantier.",
      "Historique complet jour par jour : retrouvez n'importe quel plan passé et copiez le planning de la veille pour le modifier en quelques secondes.",
      "Import CSV pour les listes d'employés, véhicules et tâches — l'outil s'adapte en minutes à un nouveau chantier.",
      "Météo intégrée en temps réel selon la localisation du chantier : anticipez les aléas avant de commencer la journée.",
    ],

    video: '/assets/images/projet-4/DailyApp.mp4',
    visuels: [],
    disponibleSurDemande: true,
  },

  {
    id: 5,
    titre:          'Nom du projet 5',
    client:         'Nom du client',
    annee:          '2025',
    categorie:      'web',
    categorieLabel: 'Web Design',
    technologies:   'Webflow · CMS',
    tagColor:  '#d4987a',
    tagBg:     'rgba(116,55,32,0.55)',
    imageCard: 'https://placehold.co/420x560/1a1a2e/d4987a?text=Projet+5',
    imageGrid: 'https://placehold.co/720x405/1a1a2e/d4987a?text=Projet+5',
    accroche:  "Courte description d'accroche — ce qui a été réalisé, le défi, et l'impact pour le client.",
    contexte:  "Décrivez ici le contexte du client — son secteur, la problématique rencontrée et pourquoi il a fait appel à Wander-IT.",
    gains: [
      "Premier gain mesurable obtenu par le client.",
      "Deuxième résultat concret.",
      "Troisième impact positif sur l'activité.",
    ],
    visuels: [
      'https://placehold.co/1200x700/004258/B1DCED?text=Visuel+1',
    ],
  },

  {
    id: 6,
    titre:          'Nom du projet 6',
    client:         'Nom du client',
    annee:          '2025',
    categorie:      'automatisation',
    categorieLabel: 'Automatisation',
    technologies:   'Make · Airtable · OpenAI',
    tagColor:  '#B1DCED',
    tagBg:     'rgba(0,66,88,0.65)',
    imageCard: 'https://placehold.co/420x560/0a1628/B2CBD4?text=Projet+6',
    imageGrid: 'https://placehold.co/720x405/0a1628/B2CBD4?text=Projet+6',
    accroche:  "Courte description d'accroche — ce qui a été réalisé, le défi, et l'impact pour le client.",
    contexte:  "Décrivez ici le contexte du client — son secteur, la problématique rencontrée et pourquoi il a fait appel à Wander-IT.",
    gains: [
      "Premier gain mesurable obtenu par le client.",
      "Deuxième résultat concret.",
      "Troisième impact positif sur l'activité.",
    ],
    visuels: [
      'https://placehold.co/1200x700/004258/B1DCED?text=Visuel+1',
    ],
  },
];
