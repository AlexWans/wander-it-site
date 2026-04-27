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
    imageCard: '/assets/images/projet-1/miniature-projet-1.webp',   // ratio 3:4
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

    en: {
      titre: 'Outlook → Odoo Automation',
      categorieLabel: 'Automation',
      technologies: 'Python · Claude Vision · Odoo API · 98% success rate',
      accroche: "50 emails/day processed automatically — invoice & CMR detection, OCR and direct integration into the Odoo ERP.",
      contexte: "Jost receives around fifty incoming emails each day in an Outlook inbox dedicated to supplier accounting. These emails carry invoices and CMR documents as attachments, which previously had to be opened, identified, read and manually entered into their Odoo ERP — a repetitive task representing 1.5 to 2 hours of daily work.<br><br>Wander-IT designed and deployed a complete pipeline: as soon as an email arrives, the system analyses the attachment, evaluates via a confidence score whether it is an invoice or a CMR, OCRs the document to extract key data, then calls the Odoo API directly. When the score is insufficient, the email is left unread and flagged for manual processing — less than 2% of cases.<br><br>A dedicated dashboard allows the client to monitor each run in real time: processed emails, successes, errors and returned CMRs — for total control at any time.",
      gains: [
        "50 emails processed automatically every day — staff focus on what truly adds value.",
        "1.5 to 2 hours saved per day, around 35 to 40 hours recovered each month.",
        "Automatic invoice vs CMR detection with confidence score: below the threshold, the email stays unread and flagged for manual processing (<2% of cases).",
        "AI fallback on complex cases — no data loss, even on degraded documents.",
        "Integrated error handling: advertising emails, missing or non-compliant attachments.",
      ],
      chiffreCle: { valeur: '~40h', label: 'recovered<br>each month' },
    },

    de: {
      titre: 'Outlook → Odoo Automatisierung',
      categorieLabel: 'Automatisierung',
      technologies: 'Python · Claude Vision · Odoo API · 98% Erfolgsrate',
      accroche: "50 E-Mails/Tag vollautomatisch verarbeitet — Erkennung von Rechnungen & CMR, OCR und direkte Integration in das Odoo ERP.",
      contexte: "Jost erhält täglich rund fünfzig eingehende E-Mails in einem Outlook-Postfach für die Lieferantenbuchhaltung. Diese E-Mails enthalten Rechnungen und CMR-Dokumente als Anhang, die bisher manuell geöffnet, identifiziert und in das Odoo ERP eingegeben werden mussten — eine repetitive Aufgabe von 1,5 bis 2 Stunden täglich.<br><br>Wander-IT hat eine vollständige Pipeline konzipiert: Sobald eine E-Mail eintrifft, analysiert das System den Anhang, bewertet anhand eines Konfidenzwerts, ob es sich um eine Rechnung oder ein CMR handelt, OCRt das Dokument zur Datenextraktion und ruft direkt die Odoo API auf. Bei unzureichendem Wert bleibt die E-Mail ungelesen und wird zur manuellen Bearbeitung markiert — weniger als 2% der Fälle.<br><br>Ein dediziertes Dashboard ermöglicht dem Kunden die Echtzeitüberwachung: verarbeitete E-Mails, Erfolge, Fehler und zurückgesendete CMRs — vollständige Kontrolle zu jederzeit.",
      gains: [
        "50 E-Mails täglich automatisch verarbeitet — das Personal konzentriert sich auf wertschöpfende Aufgaben.",
        "1,5 bis 2 Stunden täglich gespart, rund 35 bis 40 Stunden pro Monat zurückgewonnen.",
        "Automatische Rechnungs- vs. CMR-Erkennung mit Konfidenzwert: Unterhalb der Schwelle bleibt die E-Mail ungelesen und wird markiert (<2% der Fälle).",
        "KI-Fallback bei komplexen Fällen — kein Datenverlust, auch bei beschädigten Dokumenten.",
        "Integrierte Fehlerbehandlung: Werbe-E-Mails, fehlende oder nicht konforme Anhänge.",
      ],
      chiffreCle: { valeur: '~40h', label: 'pro Monat<br>zurückgewonnen' },
    },
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

    en: {
      titre: 'Solar Pile Alignment Verification',
      categorieLabel: 'Web Application',
      technologies: 'Python · JavaScript · CSV · Geometric Calculation · Cloud Deployment',
      accroche: "800 hectares, 70,000 piles — a custom web app to verify structural alignment in real time and automatically suggest corrections.",
      contexte: "HCB Solar operates large-scale solar farms in Australia, some exceeding 800 hectares. Tens of thousands of structural piles support the solar trackers — and their alignment must comply with millimetre-level tolerances imposed by industry standards.<br><br>With 70,000 piles to check per project, the quality department needed a solution built around their reality. Wander-IT designed and developed a 100% custom web application: from a simple CSV file containing the X/Y/Z coordinates of each pile, the application automatically calculates alignment, checks each tolerance condition and generates an interactive visual diagram to identify out-of-tolerance zones at a glance.<br><br>When a problem is detected, the application suggests several correction scenarios — trim a pile by X mm, adjust another by Y mm — and allows exporting all results to CSV for processing in Excel, Google Sheets or any other business tool. The application is hosted online, accessible by the client, and remotely maintained by Wander-IT.",
      gains: [
        "70,000 piles checked in seconds — where manual verification would take days.",
        "Interactive visual diagram: out-of-tolerance zones identified immediately, no technical expertise required.",
        "Automatic correction proposals — the operator knows exactly what to adjust and by how much.",
        "CSV export of results for direct integration into existing quality reports.",
        "Professional visual support for on-site client presentations — credibility and clarity guaranteed.",
        "Hosted web application, remotely updated by Wander-IT — zero installation, zero maintenance on the client side.",
      ],
      chiffreCle: { points: ['Client credibility', 'Operational efficiency', 'Fast big data analysis'] },
    },

    de: {
      titre: 'Überprüfung der Solarramm-Ausrichtung',
      categorieLabel: 'Webanwendung',
      technologies: 'Python · JavaScript · CSV · Geometrische Berechnung · Cloud-Deployment',
      accroche: "800 Hektar, 70.000 Rammpfähle — eine maßgeschneiderte Webanwendung zur Echtzeit-Prüfung der Strukturausrichtung mit automatischen Korrekturvorschlägen.",
      contexte: "HCB Solar betreibt großflächige Solarparks in Australien, von denen einige 800 Hektar überschreiten. Zehntausende Strukturpfähle stützen die Solar-Tracker — ihre Ausrichtung muss millimetergenaue Branchentoleranzen einhalten.<br><br>Mit 70.000 zu prüfenden Pfählen pro Projekt brauchte die Qualitätsabteilung eine auf ihre Realität zugeschnittene Lösung. Wander-IT entwickelte eine 100% maßgeschneiderte Webanwendung: Aus einer einfachen CSV-Datei mit X/Y/Z-Koordinaten berechnet sie automatisch die Ausrichtung, prüft jede Toleranzbedingung und generiert ein interaktives visuelles Diagramm zur sofortigen Identifikation von Außertoleranz-Zonen.<br><br>Bei erkanntem Problem schlägt die Anwendung Korrekturszenarien vor und ermöglicht den CSV-Export für Excel, Google Sheets oder andere Business-Tools. Die Anwendung wird online gehostet und von Wander-IT remote gewartet.",
      gains: [
        "70.000 Pfähle in Sekunden geprüft — manuelle Prüfung würde Tage dauern.",
        "Interaktives visuelles Diagramm: Außertoleranz-Zonen sofort identifiziert, ohne technisches Fachwissen.",
        "Automatische Korrekturvorschläge — der Bediener weiß genau, was und um wie viel anzupassen ist.",
        "CSV-Export der Ergebnisse zur direkten Integration in bestehende Qualitätsberichte.",
        "Professionelle visuelle Unterstützung für Kundenpräsentationen — Glaubwürdigkeit und Klarheit garantiert.",
        "Gehostete Webanwendung, von Wander-IT remote gewartet — keine Installation, keine Wartung auf Kundenseite.",
      ],
      chiffreCle: { points: ['Kundenglaubwürdigkeit', 'Betriebliche Effizienz', 'Schnelle Big-Data-Analyse'] },
    },
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

    en: {
      titre: 'Solar Site Tracking on AppSheet',
      categorieLabel: 'Mobile Application',
      technologies: 'Google AppSheet · Geolocation · QR Code · Offline mode',
      accroche: "A custom mobile app to manage tens of thousands of piles on site — geolocation, field encoding and live reporting for the project manager.",
      contexte: "On large-scale solar farm construction sites, tracking work post by post is a major logistical challenge. Each project can involve tens of thousands of piles spread across hundreds of hectares. Without a suitable tool, workers waste valuable time navigating, data arrives late, and the project manager is flying blind.<br><br>Wander-IT developed a mobile application on Google AppSheet, designed for use on a construction site via smartphone or tablet. With integrated geolocation, the worker is guided directly to the pile requiring intervention. They consult the pile information, complete their work, and encode the result in real time — in seconds, with no paperwork.<br><br>All data automatically syncs to Google Sheets, giving the project manager live visibility on progress, each team's productivity and deviations from targets. Serious, structured support — directly presentable to the end client.<br><br>The application works in offline mode — essential on isolated sites — and includes advanced features such as QR code scanning and GPS position recording.",
      schemaLabel: 'App visualisation',
      gains: [
        "Immediate time saving on site: the worker goes straight to the right pile via geolocation — no confusion, no wasted time.",
        "Automatic real-time reporting: the manager monitors progress without waiting for end-of-day updates.",
        "Team productivity tracking with structured data — professional support to present directly to the client.",
        "Real visibility over large-scale sites: hundreds of hectares, thousands of piles, managed from a Google Sheets dashboard.",
        "100% configurable application according to project needs — QR code scan, GPS recording, custom forms.",
        "Native offline mode: data is synchronised as soon as the connection is restored, with no input lost.",
      ],
      chiffreCle: { points: ['Efficiency', 'Traceability', 'Live reporting'] },
    },

    de: {
      titre: 'Solarbaustellen-Tracking auf AppSheet',
      categorieLabel: 'Mobile Anwendung',
      technologies: 'Google AppSheet · Geolokalisierung · QR Code · Offline-Modus',
      accroche: "Eine maßgeschneiderte mobile App zur Verwaltung von zehntausenden Pfählen auf der Baustelle — Geolokalisierung, Felderfassung und Live-Reporting für den Projektmanager.",
      contexte: "Auf großflächigen Solarpark-Baustellen ist die postenweise Arbeitsverfolgung eine große logistische Herausforderung. Jedes Projekt kann zehntausende Pfähle umfassen, verteilt über Hunderte von Hektaren. Ohne geeignetes Werkzeug verschwenden Mitarbeiter wertvolle Zeit, Daten kommen verzögert an und der Projektmanager navigiert im Dunkeln.<br><br>Wander-IT entwickelte eine mobile Anwendung auf Google AppSheet für den Einsatz auf der Baustelle via Smartphone oder Tablet. Dank Geolokalisierung wird der Arbeiter direkt zum Einsatzpfahl geführt. Er konsultiert die Pfahlinformationen, erledigt seine Arbeit und erfasst das Ergebnis in Echtzeit — in Sekunden, ohne Papierkram.<br><br>Alle Daten synchronisieren sich automatisch in Google Sheets und geben dem Projektmanager Live-Einblick in Fortschritt, Teamproduktivität und Zielabweichungen. Seriöse, strukturierte Unterstützung — direkt dem Endkunden präsentierbar.<br><br>Die Anwendung funktioniert im Offline-Modus — unverzichtbar auf abgelegenen Baustellen — und umfasst QR-Code-Scan und GPS-Positionserfassung.",
      schemaLabel: 'App-Visualisierung',
      gains: [
        "Sofortige Zeitersparnis: Der Arbeiter geht dank Geolokalisierung direkt zum richtigen Pfahl — keine Verwirrung, kein Zeitverlust.",
        "Automatisches Echtzeit-Reporting: Der Manager überwacht Fortschritte ohne Tagesend-Updates abzuwarten.",
        "Teamproduktivitäts-Tracking mit strukturierten Daten — professionelle Unterstützung, direkt dem Kunden präsentierbar.",
        "Echte Sichtbarkeit über große Baustellen: Hunderte Hektar, tausende Pfähle, vom Google Sheets Dashboard gesteuert.",
        "100% konfigurierbar — QR-Code-Scan, GPS-Erfassung, maßgeschneiderte Formulare.",
        "Nativer Offline-Modus: Daten synchronisieren bei Wiederverbindung, ohne Eingabeverlust.",
      ],
      chiffreCle: { points: ['Effizienz', 'Rückverfolgbarkeit', 'Live-Reporting'] },
    },
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

    en: {
      titre: "DailyPlan — Team & Resource Allocation",
      categorieLabel: 'Web Application',
      technologies: 'Drag & Drop · Image Export · Weather API · CSV Import',
      client: 'Internal',
      accroche: "No more last-minute Excel plans — an intuitive web application with drag & drop to allocate teams, vehicles and tasks in minutes every morning.",
      contexte: "On large construction sites with many human and material resources, daily planning is a headache. Managers spend valuable time filling Excel spreadsheets, correcting cell formats, coordinating teams and distributing the final plan.<br><br>DailyPlan is a web application designed for resource-intensive construction site managers. With drag & drop, they allocate employees, vehicles and tasks in minutes. The system automatically checks constraints — available seats in vehicles, team headcounts, designated leads — and flags inconsistencies before validation.<br><br>Importing lists (employees, vehicles, tasks) is done via CSV, making the tool adaptable to any site. Once the plan is ready, one click generates an exportable screenshot ready to share on WhatsApp. The day-by-day history and 'copy from yesterday' function further reduce daily entry time.",
      gains: [
        "Over 30 minutes saved every morning — the manager heads to the field with a clear plan prepared in a few clicks.",
        "Zero vehicle overload: the system blocks assignments exceeding the configured capacity.",
        "Plan instantly shareable on WhatsApp via screenshot — the whole team informed before arriving on site.",
        "Complete day-by-day history: retrieve any past plan and copy yesterday's schedule to modify it in seconds.",
        "CSV import for employee, vehicle and task lists — the tool adapts to a new site in minutes.",
        "Integrated real-time weather for the site location: anticipate disruptions before starting the day.",
      ],
      chiffreCle: { points: ['Time saving', 'Zero overload', 'Instant sharing'] },
    },

    de: {
      titre: "DailyPlan — Team- & Ressourcenzuweisung",
      categorieLabel: 'Webanwendung',
      technologies: 'Drag & Drop · Bildexport · Wetter-API · CSV-Import',
      client: 'Intern',
      accroche: "Schluss mit Last-Minute-Excel-Plänen — eine intuitive Webanwendung mit Drag & Drop zur Zuweisung von Teams, Fahrzeugen und Aufgaben in wenigen Minuten jeden Morgen.",
      contexte: "Auf großen Baustellen mit vielen Mitarbeitern und Materialressourcen ist die tägliche Planung ein Albtraum. Manager verbringen wertvolle Zeit damit, Excel-Tabellen auszufüllen, Teams zu koordinieren und den Endplan zu verteilen.<br><br>DailyPlan ist eine Webanwendung für ressourcenintensive Baustellenleiter. Per Drag & Drop weisen sie in Minuten Mitarbeiter, Fahrzeuge und Aufgaben zu. Das System prüft automatisch Einschränkungen — freie Fahrzeugplätze, Teambesetzung, benannte Vorgesetzte — und meldet Unstimmigkeiten vor der Bestätigung.<br><br>Der Import von Listen (Mitarbeiter, Fahrzeuge, Aufgaben) erfolgt via CSV. Sobald der Plan fertig ist, generiert ein Klick einen Screenshot für WhatsApp. Der Tagesverlauf und 'von gestern kopieren' reduzieren den Erfassungsaufwand weiter.",
      gains: [
        "Über 30 Minuten täglich gespart — der Manager geht mit einem klaren Plan auf die Baustelle.",
        "Null Fahrzeugüberlastung: Das System blockiert Zuweisungen, die die konfigurierte Kapazität überschreiten.",
        "Plan sofort via Screenshot auf WhatsApp teilbar — das gesamte Team informiert vor Ankunft.",
        "Vollständiger Tagesverlauf: Vergangene Pläne abrufen und den gestrigen Zeitplan in Sekunden kopieren.",
        "CSV-Import für Mitarbeiter-, Fahrzeug- und Aufgabenlisten — in Minuten an neue Baustellen anpassbar.",
        "Integrierte Echtzeit-Wettervorhersage: Störungen antizipieren, bevor der Tag beginnt.",
      ],
      chiffreCle: { points: ['Zeitersparnis', 'Null Überlastung', 'Sofortiges Teilen'] },
    },
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

    en: {
      titre: 'Wander-IT Website',
      categorieLabel: 'Website',
      technologies: 'HTML · CSS · JavaScript · SEO · Hosting · Google Business',
      accroche: "A website built from scratch — custom code, 99/100 performance, Google Business and hosting included. No subscriptions, no dependencies: total ownership.",
      titreSectionContexte: 'Our website',
      titreSectionGains: 'The value our websites deliver',
      ctaApresVisuels: "Like our website?",
      contexte: "Building your own website when you are an IT agency is both a style exercise and a permanent business card. Nothing was left to chance: every line of code, every design decision and every technical parameter was thought through to reflect Wander-IT's identity and maximise online impact.<br><br>The site was developed from scratch — without Wix, without Squarespace, without a generic builder. This approach guarantees total freedom over structure, performance and future evolution. Domain and hosting are managed directly by Wander-IT: no third-party subscription, no external constraints.<br><br>SEO was integrated from the outset: semantic structure, optimised tags, loading speed, mobile compatibility — everything calibrated to appeal to both search engines and visitors. Result: 99/100 performance, 100/100 accessibility, best practices and SEO on Google PageSpeed.<br><br>In parallel, the Google Business page was created and optimised to ensure a strong local presence and capture qualified leads directly from Google Search.<br><br>No frills — pragmatic, delivered in under a week.",
      gains: [
        "Maximum visibility on Google — 100/100 SEO score and 99/100 performance on Google PageSpeed Insights.",
        "100% functional on smartphones — identical experience on mobile, tablet and desktop.",
        "No subscriptions, no dependency on a third-party platform — total ownership of code, domain and hosting.",
        "Google Business page created and optimised — enhanced local presence for leads from geolocated search.",
        "A site that truly represents us: custom design, optimised for SEO, performance and conversion.",
      ],
      chiffreCle: { valeur: '99 · 100', label: 'Performance · SEO<br>Google PageSpeed' },
    },

    de: {
      titre: 'Wander-IT Website',
      categorieLabel: 'Website',
      technologies: 'HTML · CSS · JavaScript · SEO · Hosting · Google Business',
      accroche: "Eine von Grund auf erstellte Website — maßgeschneiderter Code, 99/100 Performance, Google Business und Hosting inklusive. Keine Abonnements, keine Abhängigkeiten: vollständige Eigentümerschaft.",
      titreSectionContexte: 'Unsere Website',
      titreSectionGains: 'Der Mehrwert unserer Websites',
      ctaApresVisuels: "Gefällt Ihnen unsere Website?",
      contexte: "Die eigene Website zu bauen, wenn man eine IT-Agentur ist, ist sowohl Stilübung als auch permanente Visitenkarte. Nichts wurde dem Zufall überlassen: Jede Codezeile, jede Designentscheidung und jeder technische Parameter wurde durchdacht, um Wander-ITs Identität widerzuspiegeln.<br><br>Die Website wurde von Grund auf entwickelt — ohne Wix, ohne Squarespace, ohne generischen Builder. Domain und Hosting werden direkt von Wander-IT verwaltet: kein Drittanbieter-Abonnement, keine externen Einschränkungen.<br><br>SEO wurde von Anfang an integriert: semantische Struktur, optimierte Tags, Ladegeschwindigkeit, mobile Kompatibilität. Ergebnis: 99/100 Performance, 100/100 Zugänglichkeit, Best Practices und SEO auf Google PageSpeed.<br><br>Parallel dazu wurde die Google-Business-Seite erstellt und optimiert für starke lokale Präsenz und qualifizierte Leads aus der Google-Suche.<br><br>Ohne Schnickschnack — pragmatisch, in weniger als einer Woche geliefert.",
      gains: [
        "Maximale Sichtbarkeit bei Google — 100/100 SEO-Score und 99/100 Performance auf Google PageSpeed.",
        "100% funktional auf Smartphones — identisches Erlebnis auf Mobilgerät, Tablet und Desktop.",
        "Keine Abonnements, keine Abhängigkeit von Drittanbieter-Plattformen — vollständige Eigentümerschaft.",
        "Google-Business-Seite erstellt und optimiert — stärkere lokale Präsenz für Leads aus der geolokalisierten Suche.",
        "Eine Website, die uns wirklich repräsentiert: maßgeschneidertes Design, optimiert für SEO, Performance und Conversion.",
      ],
      chiffreCle: { valeur: '99 · 100', label: 'Performance · SEO<br>Google PageSpeed' },
    },
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

    en: {
      titre: 'Construction Site Report — Looker Studio',
      categorieLabel: 'Data & Reporting',
      technologies: 'Google Sheets · Looker Studio · Data Cleaning · Mapping',
      accroche: "69,000 piles, dozens of different states — a Looker Studio report connected in real time to the database to track site progress and negotiate with hard figures.",
      contexte: "On a large-scale solar construction site, data accumulates relentlessly: 69,000 piles, each with a distinct state, specific issues and daily evolution. Without structure, this mass of information becomes unmanageable — and impossible to present to a client.<br><br>Wander-IT first handled the complete cleaning and sorting of raw data in Google Sheets. Each entry was normalised, categorised and structured to be analytically usable.<br><br>On this clean foundation, an interactive Looker Studio report was designed: daily progress charts, yesterday/today comparisons, state distribution pie charts, and an interactive geographic map showing which blocks are complete, in progress or blocked — overlaid directly on the actual terrain.<br><br>The report is connected directly to the database: each update is automatically reflected, with no manual intervention. HCB Solar shares it with their own client — a professional reporting and negotiation tool that reinforces their credibility and project control.",
      gains: [
        "69,000 piles tracked in real time — every state, every issue, every progression visible instantly.",
        "Report updated automatically every day via direct database connection — zero manual input.",
        "Interactive geographic map: visualise block-by-block site progress on the actual terrain at a glance.",
        "Integrated daily comparison (yesterday vs today) — ideal for detecting slowdowns and managing teams.",
        "A tool shared directly with the end client: enhanced credibility, easier negotiation, assured trust.",
        "Raw data cleaned and structured — a solid foundation for all current and future analysis.",
      ],
      chiffreCle: { titre: 'Value', points: ['Negotiation', 'Client credibility', 'Project visibility'] },
    },

    de: {
      titre: 'Baustellenbericht — Looker Studio',
      categorieLabel: 'Daten & Reporting',
      technologies: 'Google Sheets · Looker Studio · Data Cleaning · Kartierung',
      accroche: "69.000 Pfähle, Dutzende verschiedener Zustände — ein Looker Studio-Bericht in Echtzeit mit der Datenbank verbunden, um den Baustellenfortschritt zu steuern und mit Zahlen zu verhandeln.",
      contexte: "Auf einer großflächigen Solarbaustelle häufen sich Daten in rasantem Tempo an: 69.000 Pfähle, jeder mit eigenem Zustand, spezifischen Problemen und täglicher Entwicklung. Ohne Struktur wird diese Informationsmasse unkontrollierbar.<br><br>Wander-IT übernahm zunächst die vollständige Bereinigung und Sortierung der Rohdaten in Google Sheets. Jeder Eintrag wurde normalisiert, kategorisiert und strukturiert.<br><br>Auf dieser soliden Basis wurde ein interaktiver Looker Studio-Bericht konzipiert: tägliche Fortschrittsgrafiken, Gestern/Heute-Vergleiche, Zustandsverteilungs-Tortendiagramme und eine interaktive geografische Karte, die zeigt, welche Blöcke fertig, in Bearbeitung oder blockiert sind — direkt auf das tatsächliche Gelände überlagert.<br><br>Der Bericht ist direkt mit der Datenbank verbunden: Jede Aktualisierung spiegelt sich automatisch wider. HCB Solar teilt ihn mit seinem eigenen Kunden — ein professionelles Reporting- und Verhandlungswerkzeug.",
      gains: [
        "69.000 Pfähle in Echtzeit verfolgt — jeder Zustand, jedes Problem, jeder Fortschritt sofort sichtbar.",
        "Bericht täglich automatisch über direkte Datenbankverbindung aktualisiert — null manuelle Eingabe.",
        "Interaktive geografische Karte: Baustellenfortschritt Block für Block auf dem Gelände auf einen Blick.",
        "Integrierter Tagesvergleich (gestern vs. heute) — ideal zur Erkennung von Verlangsamungen.",
        "Direkt mit dem Endkunden geteilt: gesteigerte Glaubwürdigkeit, erleichterte Verhandlung, gesichertes Vertrauen.",
        "Rohdaten bereinigt und strukturiert — solide Grundlage für alle gegenwärtigen und zukünftigen Analysen.",
      ],
      chiffreCle: { titre: 'Nutzen', points: ['Verhandlung', 'Kundenglaubwürdigkeit', 'Projektübersicht'] },
    },
  },

  {
    id: 7,

    // ── Infos de base ────────────────────────────────────────────────────────
    titre:          'Planning du personnel aéroportuaire',
    client:         null,
    annee:          '2026',
    categorie:      'app',
    categorieLabel: 'Application Web',
    technologies:   'Python · Algorithme de planification · Optimisation · Export Excel',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#B1DCED',
    tagBg:     'rgba(0,50,100,0.65)',
    imageCard: '/assets/images/projet-7/Projet 7 - 1 .png',
    imageGrid: '/assets/images/projet-7/Projet 7 - 2.png',

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche: "100+ agents planifiés en 10 minutes — un outil sur mesure pour automatiser le planning des shifts aéroportuaires et optimiser les effectifs par contrainte.",

    contexte: "Sicass gère la planification opérationnelle de plus de 100 agents en charge de l'accueil des arrivées d'avions dans un aéroport. Chaque semaine, les compagnies aériennes transmettent leur planning d'arrivées et le nombre d'agents requis pour chaque vol. Jusqu'alors, construire le planning des shifts était un travail manuel fastidieux représentant plus de 50 heures par mois.<br><br>Wander-IT a conçu et développé une application sur mesure permettant d'automatiser entièrement ce processus. À partir des plannings transmis par les compagnies, le programme génère automatiquement des shifts sans chevauchement, en respectant l'ensemble des contraintes légales et opérationnelles : nombre de jours de travail par semaine, temps de repos minimum entre deux shifts, nombre maximum de jours consécutifs.<br><br>L'outil intègre deux fonctionnalités clés : un bouton d'optimisation qui calcule le nombre minimum d'effectifs nécessaires pour couvrir tous les shifts, et un bouton de rééquilibrage qui distribue équitablement la charge de travail entre tous les agents. L'ensemble du planning est exportable en Excel, prêt à être diffusé aux équipes.",

    logoClient:  null,
    logosPartenaires: [],

    chiffreCle: {
      points: ['−50h de planning / mois', '+10 effectifs récupérés'],
    },

    gains: [
      "Plus de 50 heures de travail manuel de planning récupérées chaque mois — le planning complet se génère maintenant en moins de 10 minutes.",
      "Réduction de plus de 10 effectifs par cycle de planning grâce à l'optimisation automatique des shifts.",
      "Zéro chevauchement de shifts : le système respecte automatiquement toutes les contraintes — jours de travail, temps de repos, maximum de jours consécutifs.",
      "Planning rééquilibré automatiquement : charge de travail distribuée équitablement entre tous les agents pour une meilleure cohésion d'équipe.",
      "Export Excel en un clic — le planning est immédiatement prêt à être partagé avec les équipes.",
      "Paramètres modifiables à la volée : l'outil s'adapte aux nouvelles contraintes légales ou organisationnelles sans redéveloppement.",
    ],

    visuels: [
      '/assets/images/projet-7/Projet 7 - 1 .png',
      '/assets/images/projet-7/Projet 7 - 2.png',
      '/assets/images/projet-7/Projet 7 - 3 .png',
      '/assets/images/projet-7/Projet 7 - 4.png',
    ],

    en: {
      titre: 'Airport Staff Scheduling',
      categorieLabel: 'Web Application',
      technologies: 'Python · Scheduling Algorithm · Optimisation · Excel Export',
      accroche: "100+ agents scheduled in 10 minutes — a custom tool to automate airport shift planning and minimise headcount through constraint-based optimisation.",
      contexte: "Sicass manages the operational scheduling of over 100 agents responsible for handling aircraft arrivals at an airport. Each week, airlines submit their arrival schedules and the number of agents required for each flight. Until now, building the shift schedule was a tedious manual task representing over 50 hours of work per month.<br><br>Wander-IT designed and developed a custom application to fully automate this process. From the schedules submitted by airlines, the program automatically generates non-overlapping shifts, respecting all legal and operational constraints: number of working days per week, minimum rest time between two shifts, maximum consecutive working days.<br><br>The tool includes two key features: an optimisation button that calculates the minimum number of staff needed to cover all shifts, and a rebalancing button that distributes the workload fairly across all agents. The complete schedule is exportable to Excel, ready to share with teams.",
      gains: [
        "Over 50 hours of manual scheduling work recovered every month — the full schedule now generates in under 10 minutes.",
        "Reduction of over 10 headcount per planning cycle through automatic shift optimisation.",
        "Zero shift overlap: the system automatically enforces all constraints — working days, rest time, maximum consecutive days.",
        "Automatically rebalanced schedule: workload distributed fairly across all agents for better team cohesion.",
        "One-click Excel export — the schedule is immediately ready to share with teams.",
        "On-the-fly adjustable parameters: the tool adapts to new legal or organisational constraints without redevelopment.",
      ],
      chiffreCle: { points: ['−50h of scheduling / month', '+10 headcount recovered'] },
    },

    de: {
      titre: 'Flughafen-Personalplanung',
      categorieLabel: 'Webanwendung',
      technologies: 'Python · Planungsalgorithmus · Optimierung · Excel-Export',
      accroche: "100+ Agenten in 10 Minuten verplant — ein maßgeschneidertes Tool zur Automatisierung der Flughafen-Schichtplanung und Minimierung des Personalbedarfs.",
      contexte: "Sicass verwaltet die operative Planung von über 100 Agenten, die für die Betreuung von Flugzeugankünften am Flughafen zuständig sind. Jede Woche übermitteln die Fluggesellschaften ihren Ankunftsplan und die benötigte Agentenzahl je Flug. Bis dahin war die Erstellung des Schichtplans eine mühsame manuelle Aufgabe von über 50 Stunden pro Monat.<br><br>Wander-IT konzipierte und entwickelte eine maßgeschneiderte Anwendung zur vollständigen Automatisierung dieses Prozesses. Aus den von den Fluggesellschaften übermittelten Plänen generiert das Programm automatisch überschneidungsfreie Schichten unter Einhaltung aller gesetzlichen und betrieblichen Einschränkungen: Arbeitstage pro Woche, Mindestruhezeit zwischen zwei Schichten, maximale aufeinanderfolgende Arbeitstage.<br><br>Das Tool umfasst zwei Schlüsselfunktionen: einen Optimierungsknopf, der die Mindestanzahl der benötigten Mitarbeiter berechnet, und einen Ausgleichsknopf, der die Arbeitslast fair auf alle Agenten verteilt. Der komplette Plan ist als Excel exportierbar.",
      gains: [
        "Über 50 Stunden manueller Planungsaufwand monatlich zurückgewonnen — der vollständige Plan wird jetzt in unter 10 Minuten generiert.",
        "Reduktion von über 10 Mitarbeitern pro Planungszyklus durch automatische Schichtoptimierung.",
        "Null Schichtüberschneidungen: Das System erzwingt automatisch alle Einschränkungen — Arbeitstage, Ruhezeiten, maximale aufeinanderfolgende Tage.",
        "Automatisch ausgeglichener Plan: Arbeitslast fair auf alle Agenten verteilt für besseren Teamzusammenhalt.",
        "Excel-Export per Klick — der Plan ist sofort zur Weitergabe bereit.",
        "Jederzeit anpassbare Parameter: Das Tool passt sich neuen gesetzlichen oder organisatorischen Anforderungen ohne Neuentwicklung an.",
      ],
      chiffreCle: { points: ['−50h Planung / Monat', '+10 Mitarbeiter optimiert'] },
    },
  },

  {
    id: 8,

    // ── Infos de base ────────────────────────────────────────────────────────
    titre:          'Automatisation des factures fournisseurs par IA',
    client:         'Jost',
    annee:          '2026',
    categorie:      'automatisation',
    categorieLabel: 'Automatisation',
    technologies:   'Python · Vision IA · Odoo · Multi-pays',

    // ── Apparence des vignettes ──────────────────────────────────────────────
    tagColor:  '#B1DCED',
    tagBg:     'rgba(0,66,88,0.65)',
    imageCard: '/assets/images/projet-8/Supplier.png',
    imageGrid: '/assets/images/projet-8/Supplier.png',

    // ── Contenu de la page projet ────────────────────────────────────────────
    accroche: "250 mails par jour traités automatiquement — un pipeline IA bout en bout qui lit les emails, trie les documents, extrait les données et importe directement dans Odoo, sans intervention humaine.",

    contexte: "Chaque jour, des dizaines de factures fournisseurs arrivent par email dans les boîtes de Jost Group — en PDF, dans des formats différents, parfois en plusieurs langues, parfois groupées dans un seul fichier, réparties entre plusieurs entités en Belgique, France, Suisse et Roumanie. Les équipes comptables passaient des heures à les ouvrir, lire, recopier, valider et importer dans Odoo.<br><br>Wander-IT a conçu et déployé un pipeline d'automatisation bout en bout. Le système récupère les emails entrants et soumet chaque pièce jointe à un premier modèle IA qui classifie en quelques centièmes de seconde : facture, note de crédit, rappel de paiement, bon de livraison ou publicité. Seules les factures avancent dans le pipeline.<br><br>Un modèle de vision lit ensuite chaque PDF — même scanné ou mal formaté — et en extrait automatiquement le numéro de TVA fournisseur et client, les montants HT/TVA/TTC, la devise, la date, le numéro de facture, l'IBAN et les conditions de paiement. Le système identifie l'entité Jost destinataire, retrouve le fournisseur dans Odoo par numéro de TVA, crée la facture avec toutes ses lignes et le PDF original en pièce jointe — prête à valider en un clic. L'email est ensuite déplacé dans le bon dossier : TRAITE-IA, RAPPEL, PUB ou PEPPOL.<br><br>Un dashboard temps réel permet de suivre chaque run : type de document, niveau de confiance, statut Peppol, alertes. En production chez Jost Group depuis avril 2026 — plusieurs entités, plusieurs pays, plusieurs centaines de factures par mois traitées sans intervention humaine.",

    logoClient:  '/assets/images/projet-1/logo-jost.webp',
    logoClientWidth: 26,
    logosPartenaires: [
      { src: '/assets/images/projet-1/Microsoft_Outlook_Icon_(2025–present).svg.webp', alt: 'Outlook', width: 15 },
      { src: '/assets/images/projet-1/Odoo_Official_Logo.webp', alt: 'Odoo', width: 44 },
    ],

    chiffreCle: { valeur: '~60h', label: 'récupérées<br>chaque mois' },

    gains: [
      "60 heures de saisie manuelle récupérées chaque mois — les équipes comptables valident au lieu de recopier.",
      "Zéro retard de paiement : les factures arrivent dans Odoo en quelques minutes, prêtes à valider en un clic.",
      "Moins d'erreurs de saisie : l'extraction IA élimine les fautes de frappe, doublons et oublis.",
      "Triage intelligent : facture, note de crédit, rappel, bon de livraison ou publicité — classifiés en quelques centièmes de seconde.",
      "Gestion multi-sociétés et multi-pays : entités belges, françaises, suisses et roumaines avec règles fiscales propres à chaque pays.",
      "Conformité Peppol B2B (Belgique depuis mars 2026) et e-Factura (Roumanie) — le système détecte et gère automatiquement les factures électroniques réglementées.",
      "Dashboard de monitoring temps réel : chaque traitement est tracé avec son type, son niveau de confiance et son statut.",
    ],

    visuels: [
      '/assets/images/projet-8/Supplier.png',
    ],

    en: {
      titre: 'AI Supplier Invoice Automation',
      categorieLabel: 'Automation',
      technologies: 'Python · AI Vision · Odoo · Multi-country',
      accroche: "250 emails per day processed automatically — an end-to-end AI pipeline that reads emails, sorts documents, extracts data and imports directly into Odoo, without human intervention.",
      contexte: "Every day, dozens of supplier invoices land by email in Jost Group's inboxes — as PDFs, in varying formats, sometimes in multiple languages, sometimes bundled in a single file, spread across entities in Belgium, France, Switzerland and Romania. Accounting teams spent hours opening, reading, re-entering, validating and importing them into Odoo.<br><br>Wander-IT designed and deployed an end-to-end automation pipeline. The system retrieves incoming emails and submits each attachment to a first AI model that classifies it in milliseconds: invoice, credit note, payment reminder, delivery note or advertisement. Only invoices advance through the pipeline.<br><br>An AI vision model then reads each PDF — even scanned or poorly formatted — and automatically extracts the supplier and client VAT number, amounts ex-VAT/VAT/incl. VAT, currency, date, invoice number, IBAN and payment terms. The system identifies the correct Jost entity, finds the supplier in Odoo by VAT number, creates the invoice with all its lines and the original PDF attached — ready to validate in one click. The email is then moved to the right folder: PROCESSED-AI, REMINDER, AD or PEPPOL.<br><br>A real-time dashboard tracks every run: document type, confidence level, Peppol status, alerts. Live at Jost Group since April 2026 — multiple entities, multiple countries, hundreds of invoices per month processed without human intervention.",
      gains: [
        "60 hours of manual data entry recovered every month — accounting teams validate instead of re-typing.",
        "Zero payment delays: invoices land in Odoo within minutes, ready to validate in one click.",
        "Fewer errors: AI extraction eliminates typos, duplicates and oversights.",
        "Intelligent triage: invoice, credit note, reminder, delivery note or ad — classified in milliseconds.",
        "Multi-entity and multi-country management: Belgian, French, Swiss and Romanian entities with country-specific tax rules.",
        "Peppol B2B compliance (Belgium since March 2026) and e-Factura (Romania) — the system automatically detects and handles regulated electronic invoices.",
        "Real-time monitoring dashboard: every processing step is tracked with its type, confidence level and status.",
      ],
      chiffreCle: { valeur: '~60h', label: 'recovered<br>each month' },
    },

    de: {
      titre: 'KI-Automatisierung von Lieferantenrechnungen',
      categorieLabel: 'Automatisierung',
      technologies: 'Python · KI-Vision · Odoo · Mehrere Länder',
      accroche: "250 E-Mails pro Tag vollautomatisch verarbeitet — eine durchgängige KI-Pipeline, die E-Mails liest, Dokumente sortiert, Daten extrahiert und direkt in Odoo importiert, ohne menschliches Eingreifen.",
      contexte: "Täglich treffen Dutzende von Lieferantenrechnungen per E-Mail in den Postfächern der Jost Group ein — als PDFs, in verschiedenen Formaten, manchmal in mehreren Sprachen, manchmal in einer Datei gebündelt, verteilt auf Gesellschaften in Belgien, Frankreich, der Schweiz und Rumänien. Die Buchhaltungsteams verbrachten Stunden damit, sie zu öffnen, zu lesen, einzutippen, zu validieren und in Odoo zu importieren.<br><br>Wander-IT hat eine durchgängige Automatisierungspipeline konzipiert und eingeführt. Das System ruft eingehende E-Mails ab und übergibt jeden Anhang einem KI-Modell, das in Millisekunden klassifiziert: Rechnung, Gutschrift, Zahlungserinnerung, Lieferschein oder Werbung. Nur Rechnungen durchlaufen die Pipeline weiter.<br><br>Ein KI-Visionsmodell liest anschließend jedes PDF — auch gescannte oder schlecht formatierte — und extrahiert automatisch: USt-IdNr. des Lieferanten und Kunden, Beträge netto/USt/brutto, Währung, Datum, Rechnungsnummer, IBAN und Zahlungsbedingungen. Das System identifiziert die zuständige Jost-Gesellschaft, findet den Lieferanten in Odoo anhand der USt-IdNr. und erstellt die Rechnung mit allen Positionen und dem Original-PDF als Anhang — bereit zur Validierung mit einem Klick.",
      gains: [
        "60 Stunden manueller Dateneingabe pro Monat zurückgewonnen — Buchhaltungsteams validieren statt abzutippen.",
        "Null Zahlungsverzögerungen: Rechnungen landen innerhalb von Minuten in Odoo, bereit zur Validierung per Klick.",
        "Weniger Fehler: KI-Extraktion eliminiert Tippfehler, Duplikate und Versäumnisse.",
        "Intelligentes Triage: Rechnung, Gutschrift, Erinnerung, Lieferschein oder Werbung — in Millisekunden klassifiziert.",
        "Multi-Gesellschaft und Multi-Land: belgische, französische, schweizerische und rumänische Einheiten mit länderspezifischen Steuerregeln.",
        "Peppol B2B-Konformität (Belgien seit März 2026) und e-Factura (Rumänien) — das System erkennt und verarbeitet automatisch gesetzlich geregelte elektronische Rechnungen.",
        "Echtzeit-Monitoring-Dashboard: Jeder Verarbeitungsschritt wird mit Typ, Konfidenzniveau und Status protokolliert.",
      ],
      chiffreCle: { valeur: '~60h', label: 'pro Monat<br>zurückgewonnen' },
    },
  },
];
