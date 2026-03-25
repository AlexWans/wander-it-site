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
    annee:          '2026',
    categorie:      'automatisation',
    categorieLabel: 'Automatisation',
    technologies:   'Python · Claude Vision · API Odoo · 98% de succès',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#B1DCED',
    tagBg:     'rgba(0,66,88,0.65)',
    imageCard: '/assets/images/projet-1/outlook-inbox.webp',   // ratio 3:4
    imageGrid: '/assets/images/projet-1/outlook-inbox.webp',   // ratio 16:9

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche:  "50 mails/jour traités en full auto — détection de factures & CMR, OCR et intégration directe dans l'ERP Odoo.",

    contexte:  "Jost reçoit chaque jour une cinquantaine d'emails entrants dans une boîte Outlook dédiée à la comptabilité fournisseurs. Ces mails transportent des factures et des CMR en pièce jointe, qui devaient jusqu'alors être ouverts, identifiés, lus et saisis manuellement dans leur ERP Odoo — une tâche répétitive représentant 1h30 à 2h de travail quotidien.<br><br>Wander-IT a conçu et déployé un pipeline complet : dès l'arrivée d'un mail, le système analyse la pièce jointe, évalue via un score de confiance s'il s'agit d'une facture ou d'un CMR, OCRise le document pour en extraire les données clés, puis appelle directement l'API Odoo. Lorsque le score est insuffisant, le mail est laissé non lu et flagué pour traitement manuel — moins de 2% des cas.<br><br>Un dashboard dédié permet au client de suivre chaque run en temps réel : mails traités, succès, erreurs et CMR renvoyés — pour un contrôle total à tout moment.",

    logoClient:  '/assets/images/projet-1/logo-jost.webp',
    logoClientWidth: 26,
    logosPartenaires: [
      { src: '/assets/images/projet-1/Microsoft_Outlook_Icon_(2025\u2013present).svg.webp', alt: 'Outlook', width: 15 },
      { src: '/assets/images/projet-1/Odoo_Official_Logo.webp', alt: 'Odoo', width: 44 },
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
      '/assets/images/projet-1/Dashboard view.webp',
      '/assets/images/projet-1/outlook-inbox.webp',
    ],
  },

  {
    id: 2,

    // ── Infos de base ────────────────────────────────────────────────────────
    titre:          'Vérification d\'alignement de pieux solaires',
    client:         'HCB Solar',
    annee:          '2026',
    categorie:      'app',
    categorieLabel: 'Application Web',
    technologies:   'Python · JavaScript · CSV · Calcul géométrique · Déploiement cloud',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#A8D5A2',
    tagBg:     'rgba(20,70,30,0.65)',
    imageCard: '/assets/images/projet-2/app-detail.webp',
    imageGrid: '/assets/images/projet-2/app-detail.webp',

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche:  "800 hectares, 70 000 pieux — une web app sur mesure pour vérifier l'alignement structural en temps réel et proposer automatiquement les corrections.",

    contexte:  "HCB Solar exploite des fermes solaires de grande envergure en Australie, dont certaines dépassent les 800 hectares. Sur ces installations, des dizaines de milliers de pieux structurels supportent les trackers solaires — et leur alignement doit respecter des tolérances millimétriques imposées par les normes du secteur.<br><br>Avec 70 000 pieux à contrôler par projet, le service qualité ne pouvait pas s'appuyer sur des outils génériques : il fallait une solution pensée pour leur réalité. Wander-IT a conçu et développé une application web 100% sur mesure : à partir d'un simple fichier CSV contenant les coordonnées X/Y/Z de chaque pieu, l'application calcule automatiquement l'alignement, vérifie chaque condition de tolérance et génère un schéma visuel interactif permettant d'identifier en un coup d'œil les zones hors-tolérance.<br><br>Lorsqu'un problème est détecté, l'application propose plusieurs scénarios de correction — couper tel pieu de X mm, ajuster tel autre de Y mm — et permet d'exporter l'ensemble des résultats en CSV pour un traitement dans Excel, Google Sheets ou tout autre outil métier. L'application est hébergée en ligne, accessible par le client, et maintenue à distance par Wander-IT.",

    logoClient:  '/assets/images/projet-2/logo-hcb-white.svg',
    logoClientWidth: 60,
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
      '/assets/images/projet-2/app-detail.webp',
      '/assets/images/projet-2/app-overview.webp',
      '/assets/images/projet-2/app-tolerance.webp',
      '/assets/images/projet-2/image.webp',
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
    imageCard: '/assets/images/projet-3/MockupApp.webp',
    imageGrid: '/assets/images/projet-3/3fQGQIoRGk7.webp',

    accroche:  "Une app mobile sur mesure pour gérer des dizaines de milliers de pieux sur chantier — géolocalisation, encodage terrain et reporting live pour le gestionnaire de projet.",

    contexte:  "Sur les chantiers de fermes solaires de grande envergure, le suivi des travaux poste par poste représente un défi logistique majeur. Chaque projet peut compter des dizaines de milliers de pieux à traiter, répartis sur des centaines d'hectares. Sans outil adapté, les employés perdent un temps précieux à se repérer, les données remontent avec du retard, et le gestionnaire de projet navigue à l'aveugle.<br><br>Wander-IT a développé une application mobile sur Google AppSheet, pensée pour une utilisation chantier sur smartphone ou tablette. Grâce à la géolocalisation intégrée, le travailleur est guidé directement vers le pieu qui nécessite une intervention. Il consulte les informations du pieu, réalise son travail, et encode le résultat en temps réel — en quelques secondes, sans paperasse.<br><br>Toutes les données remontent automatiquement dans Google Sheets, offrant au gestionnaire de projet une visibilité live sur l'avancement, la productivité de chaque équipe et les écarts par rapport aux objectifs. Un support sérieux et structuré, directement présentable au client final.<br><br>L'application fonctionne en mode hors-ligne — indispensable sur des chantiers isolés — et intègre des fonctionnalités avancées comme le scan de QR code et l'enregistrement de position GPS.",

    logoClient:  '/assets/images/projet-2/logo-hcb-white.svg',
    logoClientWidth: 60,
    logosPartenaires: [
      { src: '/assets/images/projet-3/AppSheet Logo.webp', alt: 'AppSheet', width: 58 },
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
      '/assets/images/projet-3/3fQGQIoRGk7.webp',
    ],
  },

  {
    id: 4,
    titre:          "DailyPlan — Allocation d'équipes & ressources",
    client:         'Interne',
    annee:          '2026',
    categorie:      'app',
    categorieLabel: 'Application Web',
    technologies:   'Drag & Drop · Export Image · Météo API · Import CSV',

    tagColor:  '#F5C97A',
    tagBg:     'rgba(120,80,10,0.65)',
    imageCard: '/assets/images/projet-4/DailyPlan.webp',
    imageGrid: '/assets/images/projet-4/DailyPlan.webp',

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
    titre:          'Site web Wander-IT',
    client:         'Wander-IT',
    annee:          '2026',
    categorie:      'web',
    categorieLabel: 'Site Web',
    technologies:   'HTML · CSS · JavaScript · SEO · Hébergement · Google Business',

    tagColor:  '#d4987a',
    tagBg:     'rgba(116,55,32,0.55)',
    imageCard: '/assets/images/projet-5/Mignature card.png',
    imageGrid: '/assets/images/projet-5/AnalyseSpeedWeb.png',

    accroche: "Site vitrine conçu de A à Z — code sur mesure, SEO 100/100, Google Business et hébergement inclus. Aucun abonnement, aucune dépendance : la propriété totale.",

    contexte: "Construire son propre site web quand on est une agence IT, c'est à la fois un exercice de style et une carte de visite permanente. Rien n'a été laissé au hasard : chaque ligne de code, chaque décision de design et chaque paramètre technique a été pensé pour refléter l'identité de Wander-IT et maximiser l'impact en ligne.<br><br>Le site a été développé from scratch — sans Wix, sans Squarespace, sans builder générique. Cette approche garantit une liberté totale sur la structure, les performances et l'évolution future. Le domaine et l'hébergement sont gérés directement par Wander-IT : aucun abonnement tiers, aucune contrainte extérieure.<br><br>Le référencement naturel a été intégré dès la conception : structure sémantique, balises optimisées, vitesse de chargement, compatibilité mobile — tout est calibré pour plaire autant aux moteurs de recherche qu'aux visiteurs. Résultat : 99/100 en performance, 100/100 en accessibilité, bonnes pratiques et SEO sur Google PageSpeed.<br><br>En parallèle, la page Google Business a été créée et optimisée pour assurer une présence locale forte et capter des leads qualifiés directement depuis la recherche Google.<br><br>Sans fioritures — pragmatique, livré en moins d'une semaine.",

    chiffreCle: { valeur: '99 · 100', label: 'Performance · SEO<br>Google PageSpeed' },
    hideChiffreCle: true,
    titreSectionContexte: 'Notre site web',
    titreSectionGains: 'Les plus-values de nos sites',

    gains: [
      "Visibilité maximale sur Google — score SEO 100/100 et performance 99/100 sur Google PageSpeed Insights.",
      "100% fonctionnel sur smartphone — l'expérience est identique sur mobile, tablette et desktop.",
      "Aucun abonnement, aucune dépendance à une plateforme tierce — propriété totale du code, du domaine et de l'hébergement.",
      "Page Google Business créée et optimisée — présence locale renforcée pour capter des leads depuis la recherche géolocalisée.",
      "Un site qui nous ressemble vraiment : design sur mesure, optimisé pour le référencement, la performance et la conversion.",
    ],
    ctaApresVisuels: "Notre site vous plaît ?",

    visuels: [
      '/assets/images/projet-5/AnalyseSpeedWeb.png',
    ],
  },

  {
    id: 6,
    titre:          'Rapport de suivi chantier — Looker Studio',
    client:         'HCB Solar',
    annee:          '2025',
    categorie:      'data',
    categorieLabel: 'Data & Reporting',
    technologies:   'Google Sheets · Looker Studio · Data Cleaning · Cartographie',

    tagColor:  '#A8D5A2',
    tagBg:     'rgba(20,70,30,0.65)',
    imageCard: '/assets/images/projet-6/Design sans titre-6.png',
    imageGrid: '/assets/images/projet-6/Design sans titre-6.png',

    accroche: "69 000 pieux, des dizaines d'états différents — un rapport Looker Studio connecté en temps réel à la base de données pour piloter l'avancement du chantier et négocier avec des chiffres.",

    contexte: "Sur un chantier solaire de grande envergure, les données s'accumulent à un rythme effréné : 69 000 pieux, chacun avec un état distinct, des problèmes spécifiques et une évolution quotidienne. Sans structure, cette masse d'informations devient ingérable — et impossible à présenter à un client.<br><br>Wander-IT a d'abord pris en charge le nettoyage et le triage complet des données brutes dans Google Sheets. Chaque entrée a été normalisée, catégorisée et structurée pour être exploitable analytiquement.<br><br>Sur cette base saine, un rapport interactif Looker Studio a été conçu : graphiques d'avancement journalier, comparatifs hier/aujourd'hui, camemberts de répartition par état, et carte géographique interactive permettant de visualiser en un coup d'œil quels blocs sont terminés, en cours ou bloqués — directement superposés sur le terrain réel.<br><br>Le rapport est connecté directement à la base de données : chaque mise à jour se reflète automatiquement, sans intervention manuelle. HCB Solar le partage à son propre client — un outil de négociation et de reporting professionnel qui renforce sa crédibilité et son contrôle sur le projet.",

    logoClient:  '/assets/images/projet-6/logo-hcb-white.svg',
    logoClientWidth: 60,
    logosPartenaires: [
      { src: '/assets/images/projet-6/lookerstudio.jpg', alt: 'Looker Studio', width: 58, height: 44 },
    ],

    chiffreCle: {
      titre: 'Gain',
      points: ['Négociation', 'Crédibilité client', 'Vision projet'],
    },

    gains: [
      "69 000 pieux tracés en temps réel — chaque état, chaque problème, chaque avancement visible instantanément.",
      "Rapport mis à jour automatiquement chaque jour via la connexion directe à la base de données — zéro saisie manuelle.",
      "Carte géographique interactive : visualisez en un coup d'œil l'avancement bloc par bloc sur le terrain réel.",
      "Comparatif journalier intégré (hier vs aujourd'hui) — idéal pour détecter les ralentissements et piloter les équipes.",
      "Un outil partagé directement avec le client final : crédibilité renforcée, négociation facilitée, confiance assurée.",
      "Données brutes nettoyées et structurées — une base saine pour toute analyse présente et future.",
    ],

    visuels: [
      '/assets/images/projet-6/Design sans titre-6.png',
      '/assets/images/projet-6/Design sans titre-4.png',
      '/assets/images/projet-6/Design sans titre-5.png',
    ],
  },
];
