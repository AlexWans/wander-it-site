// Wander-IT — Multilingual translations (FR / EN / DE)
const WANDER_TRANSLATIONS = {
  fr: {
    // ── Titles
    'title.index':       'Wander-IT — Votre expertise. Nos outils. Une longueur d\'avance.',
    'title.services':    'Services — Wander-IT',
    'title.about':       'À propos — Wander-IT',
    'title.realisations':'Réalisations — Wander-IT',

    // ── Nav
    'nav.realisations': 'Réalisations',
    'nav.services':     'Services',
    'nav.about':        'À propos',
    'nav.contact':      'Nous contacter',

    // ── Index hero
    'hero.eyebrow':   'Votre expertise, nos outils.',
    'hero.line1':     'Votre<br>expertise,',
    'hero.line2':     'nos outils.',
    'hero.title':     'Une longueur d\'avance.',
    'hero.sub':       'Nous analysons vos process, identifions ce qui peut être automatisé ou développé, et livrons des outils concrets — pour toute entreprise qui veut passer à la vitesse supérieure.',
    'hero.cta1':      'Nous contacter',
    'hero.cta2':      'Voir les services',
    'hero.badge':     'Sur-mesure',

    // ── Index services section
    'services.eyebrow': 'Ce que nous faisons',
    'services.title':   'Nos services',
    'services.sub':     'Des solutions pragmatiques, livrées rapidement, qui répondent à vos besoins réels.',

    // Service cards (index)
    'card.auto.num':  'Automatisation',
    'card.auto.desc': 'Automatisez les tâches répétitives et connectez vos outils — gestion de boîte mail, devis automatiques, publications marketing et plus.',
    'card.dev.num':   'Développement d\'outils',
    'card.dev.desc':  'Applications web et mobiles sur-mesure, pensées pour vos utilisateurs et construites pour durer.',
    'card.ai.num':    'Intégration IA',
    'card.ai.desc':   'Intégrez des modèles d\'IA directement dans vos systèmes — chatbots, analyse de contenu, génération automatisée et plus.',
    'card.design.num': 'Design Web',
    'card.design.desc':'Sites qui inspirent confiance et convertissent. Design épuré, identité forte, impact immédiat.',
    'card.learn':     'En savoir plus',

    // ── Index approach
    'approach.eyebrow': 'Notre approche',
    'approach.heading': 'Pragmatique.<br><span style="color:#6B3020">Efficace.</span><br>Sur-mesure.',
    'approach.t1':      'Pragmatique.',
    'approach.t2':      'Efficace.',
    'approach.t3':      'Sur-mesure.',
    'approach.sub':     'Pas de solutions génériques. Nous prenons le temps de comprendre votre métier, vos contraintes, vos objectifs — et nous livrons ce dont vous avez réellement besoin.',
    'approach.cta':     'Démarrer un projet',

    // Process steps
    'step1.title': 'Écoute & Analyse',
    'step1.desc':  'Nous commençons toujours par comprendre votre contexte avant de proposer quoi que ce soit.',
    'step2.title': 'Conception & Validation',
    'step2.desc':  'On définit ensemble la solution la plus adaptée, sans surengineering inutile.',
    'step3.title': 'Livraison rapide',
    'step3.desc':  'Itérations courtes, feedback fréquent. Vous voyez l\'avancement à chaque étape.',
    'step4.title': 'Suivi & Optimisation',
    'step4.desc':  'La relation ne s\'arrête pas à la livraison. Notre expertise reste disponible pour faire évoluer.',

    // Realisations (index teaser)
    'real.eyebrow':   'Ce que nous avons fait',
    'real.title':     'Nos réalisations',
    'real.proj.view': 'Voir le projet',
    'real.proj.all':  'Voir toutes<br>nos réalisations',

    // ── Contact form
    'contact.eyebrow': 'Parlons de votre projet',
    'contact.heading': 'Prêt à prendre<br><span style="color:#6B3020">une longueur d\'avance ?</span>',
    'contact.title':   'Prêt à prendre une longueur d\'avance ?',
    'contact.sub':     'Décrivez-nous votre besoin en quelques mots — nous vous répondons sous 24h avec une première analyse.',
    'contact.tab.project': 'Projet',
    'contact.tab.quote':   'Devis',
    'contact.tab.support': 'Support',
    'contact.random':  '🎲 Idée aléatoire',
    'contact.random.hint': 'Pas d\'inspiration ? Cliquez pour une idée de projet.',
    'contact.random.cat':  'Cat',
    'contact.random.use':  'Utiliser cette idée',
    'contact.success': '✓ Message envoyé — nous vous répondons sous 24h.',
    'contact.error':   '✗ Une erreur s\'est produite. Réessayez ou écrivez-nous directement.',

    // ── Footer
    'footer.copy':   'Wander-IT © 2026',
    'footer.alex':   'WANSART Alex — Solutions Digitales',
    'footer.both':   'WANSART Alex & André — Solutions Digitales',

    // ── About page
    'about.eyebrow':    'Qui sommes-nous',
    'about.title':      'À propos de Wander-IT',
    'about.title.html': 'À propos de<br><span style="color:#6B3020">Wander-IT</span>',
    'about.team':       'L\'équipe',
    'about.h2':         'Qui sommes-nous ?',

    'andre.role': 'Co-fondateur · Stratégie & Expertise Métier',
    'andre.bio1': 'Fort de plus de 30 ans d\'expérience en tant que Directeur IT, André incarne la rigueur, le pragmatisme et le souci du détail. Sa carrière lui a forgé une compréhension profonde des enjeux métier et des réalités terrain que la technologie doit servir — pas l\'inverse.',
    'andre.bio2': 'Chez Wander-IT, il apporte cette vision stratégique à chaque projet : s\'assurer que chaque solution est non seulement techniquement solide, mais qu\'elle répond à un vrai besoin et crée une valeur mesurable et durable.',

    'alex.role': 'Co-fondateur · Développement & Innovation',
    'alex.bio1': 'Ingénieur industriel de formation et polyvalent par nature, Alex est sur tous les fronts technologiques. L\'intelligence artificielle ne lui fait pas peur — bien au contraire, il sait précisément comment l\'intégrer aux projets de façon intelligente et mesurée, là où elle apporte une vraie valeur.',
    'alex.bio2': 'Durant 5 ans sur le terrain comme project manager dans le photovoltaïque, en Belgique et en Australie, il a développé ses premiers outils de gestion de chantier. Il connaît le terrain et transforme cette expérience en solutions concrètes pour ses clients.',

    'company.eyebrow': 'La société',
    'company.title':   'Notre mission.',
    'company.bio1':    'Dans un monde où le digital évolue à une vitesse sans précédent, beaucoup se retrouvent dépassés — non par manque de volonté, mais faute d\'un accompagnement ancré dans leur réalité terrain.',
    'company.bio2':    'Chez Wander-IT, nous accompagnons chaque client dans sa propre transition numérique, en partant de son expertise métier. Pas de solutions génériques : nous construisons avec vous, autour de ce que vous connaissez déjà, pour aller là où vous voulez aller.',
    'company.bio3':    'Notre engagement : rendre la modernité digitale accessible, concrète et durable — quel que soit votre secteur, votre taille ou votre point de départ.',
    'company.stat':    '15+ Années d\'expérience combinées',

    'cta.eyebrow': 'Travaillons ensemble',
    'cta.title':   'Vous avez un projet en tête ?',
    'cta.btn':     'Nous contacter',

    // ── Services page
    'svc.eyebrow': 'Ce que nous proposons',
    'svc.title':   'Nos services.',
    'svc.sub':     'Pas de solutions génériques. Chaque projet est analysé, pensé et construit autour de vos réalités terrain — pour un impact concret, durable et mesurable.',
    'svc.interest': 'Ce service vous intéresse ?',

    // Service 01 — Automatisation
    's1.num':   'Automatisation',
    's1.title': 'Vos outils travaillent pour vous, pas l\'inverse.',
    's1.desc':  'Automatisez les tâches répétitives et connectez vos outils entre eux — gestion de boîte mail, devis automatiques, publications marketing planifiées, synchronisations de données et bien plus. Nous libérons votre équipe des tâches à faible valeur pour qu\'elle se concentre sur ce qui compte vraiment.',
    's1.e1.title': 'Gestion de boîte mail',
    's1.e1.desc':  'Réponses automatiques, tri intelligent et suivi des messages entrants sans effort.',
    's1.e1.kpi':   '↗ ~3h économisées par semaine',
    's1.e2.title': 'Devis automatiques',
    's1.e2.desc':  'Génération de devis depuis vos formulaires web, sans intervention manuelle.',
    's1.e2.kpi':   '↗ Délai de réponse réduit de 80%',
    's1.e3.title': 'Réseaux sociaux',
    's1.e3.desc':  'Publications planifiées et diffusées automatiquement sur tous vos canaux.',
    's1.e3.kpi':   '↗ Présence constante, 0 effort quotidien',
    's1.e4.title': 'Intégration Odoo',
    's1.e4.desc':  'Encodage automatique des factures reçues par mail directement dans Odoo — sans saisie manuelle.',
    's1.e4.kpi':   '↗ ~40h récupérées par mois',
    's1.e5.title': 'Rappels clients',
    's1.e5.desc':  'Notifications automatiques envoyées à vos clients au bon moment, sans y penser.',
    's1.e5.kpi':   '↗ Taux de relance ×3 sans charge supplémentaire',
    's1.e6.title': 'Reporting hebdo',
    's1.e6.desc':  'Rapports générés et envoyés automatiquement chaque semaine par mail.',
    's1.e6.kpi':   '↗ 30 min récupérées chaque lundi matin',

    // Service 02 — Dev
    's2.num':   'Développement d\'outils',
    's2.title': 'Des outils pensés pour vos utilisateurs, construits pour durer.',
    's2.desc':  'Applications web et mobiles sur mesure, portails clients, dashboards de pilotage, outils internes — nous concevons des solutions qui s\'intègrent à votre flux de travail et évoluent avec votre activité. Chaque détail compte, du premier écran à la dernière ligne de code.',
    's2.e1.title': 'App suivi de chantiers',
    's2.e1.desc':  'Avancement, photos et documents partagés en temps réel avec vos équipes terrain.',
    's2.e1.kpi':   '↗ Réunions de suivi réduites de moitié',
    's2.e2.title': 'Portail client',
    's2.e2.desc':  'Espace dédié pour que vos clients suivent leurs commandes et échangent facilement.',
    's2.e2.kpi':   '↗ −60% de questions par mail ou téléphone',
    's2.e3.title': 'Planification d\'équipes',
    's2.e3.desc':  'Outil interne pour organiser missions, ressources et disponibilités en un coup d\'œil.',
    's2.e3.kpi':   '↗ Vue complète de l\'équipe en 30 secondes',
    's2.e4.title': 'Dashboard commercial',
    's2.e4.desc':  'Tableau de bord interactif pour piloter vos KPIs et décisions commerciales.',
    's2.e4.kpi':   '↗ Décisions basées sur du réel, pas des estimations',
    's2.e5.title': 'App mobile de pointage',
    's2.e5.desc':  'Pointage accessible hors ligne pour vos techniciens, synchronisé à la reconnexion.',
    's2.e5.kpi':   '↗ Fini les feuilles Excel en fin de journée',
    's2.e6.title': 'Réservation en ligne',
    's2.e6.desc':  'Plateforme de prise de rendez-vous sur mesure, adaptée à votre activité.',
    's2.e6.kpi':   '↗ Disponible 24/7, sans secrétariat',

    // Service 03 — IA
    's3.num':   'Intégration IA',
    's3.title': 'L\'intelligence artificielle, là où elle apporte une vraie valeur.',
    's3.desc':  'Intégrez des modèles d\'IA directement dans vos systèmes existants — chatbots, analyse de documents, génération de contenu, classification automatique. Nous ne suivons pas la mode : nous identifions précisément où l\'IA crée un gain concret pour votre équipe et vos clients.',
    's3.e1.title': 'Chatbot 24/7',
    's3.e1.desc':  'Assistant intelligent qui répond à vos clients à toute heure, sans interruption.',
    's3.e1.kpi':   '↗ 80% des questions résolues sans intervention',
    's3.e2.title': 'Analyse de documents',
    's3.e2.desc':  'Lecture et extraction automatique des données clés de vos contrats et courriers.',
    's3.e2.kpi':   '↗ Un document traité en secondes, pas en heures',
    's3.e3.title': 'Génération de contenu',
    's3.e3.desc':  'Descriptions de produits, fiches techniques ou articles générés en masse avec l\'IA.',
    's3.e3.kpi':   '↗ 100 fiches produits en quelques minutes',
    's3.e4.title': 'Classification intelligente',
    's3.e4.desc':  'Tri automatique des demandes entrantes par type, urgence et responsable.',
    's3.e4.kpi':   '↗ Temps de triage réduit à zéro',
    's3.e5.title': 'Résumés de réunions',
    's3.e5.desc':  'Compte-rendu automatique généré après chaque réunion, prêt à partager.',
    's3.e5.kpi':   '↗ Compte-rendu prêt avant la fin de la réunion',
    's3.e6.title': 'Détection d\'anomalies',
    's3.e6.desc':  'Identification des écarts inhabituels dans vos données financières ou opérationnelles.',
    's3.e6.kpi':   '↗ Alertes avant que le problème devienne critique',

    // Service 04 — Design
    's4.num':   'Design Web',
    's4.title': 'Des sites qui inspirent confiance et convertissent.',
    's4.desc':  'Design épuré, identité de marque forte, impact immédiat. Nous créons des sites vitrine, landing pages, portfolios et e-commerces qui reflètent exactement qui vous êtes — et donnent envie à vos visiteurs de passer à l\'action.',
    's4.e1.title': 'Site vitrine',
    's4.e1.desc':  'Une présence en ligne qui inspire confiance et reflète votre expertise dès le premier regard.',
    's4.e1.kpi':   '↗ Première impression professionnelle dès le 1er clic',
    's4.e2.title': 'Landing page',
    's4.e2.desc':  'Page optimisée pour convertir vos visiteurs en leads qualifiés pour vos campagnes.',
    's4.e2.kpi':   '↗ Taux de conversion jusqu\'à ×3 supérieur',
    's4.e3.title': 'Identité visuelle',
    's4.e3.desc':  'Refonte complète : logo, charte graphique et guidelines cohérents sur tous vos supports.',
    's4.e3.kpi':   '↗ Cohérence sur tous vos supports, sans effort',
    's4.e4.title': 'Site e-commerce',
    's4.e4.desc':  'Boutique en ligne avec une identité forte et un parcours d\'achat fluide et rassurant.',
    's4.e4.kpi':   '↗ Moins d\'abandon panier, plus de confiance client',
    's4.e5.title': 'Portfolio interactif',
    's4.e5.desc':  'Mise en valeur de vos réalisations avec une navigation immersive et mémorable.',
    's4.e5.kpi':   '↗ Vos clients se souviennent de vous',
    's4.e6.title': 'Site multilingue',
    's4.e6.desc':  'Expérience cohérente et soignée pour vos visiteurs dans plusieurs langues.',
    's4.e6.kpi':   '↗ Accessibles à 100% de vos marchés cibles',

    // Random idea generator (services page)
    'idea.eyebrow': 'Vous ne savez pas par où commencer ?',
    'idea.title':   'Laissez-nous vous inspirer.',
    'idea.sub':     'Cliquez sur le bouton ci-dessous — nous piochons une idée de projet au hasard dans notre catalogue. Qui sait, elle pourrait vous correspondre.',
    'idea.btn':     '🎲 Générateur d\'idée aléatoire',
    'idea.cat':     'Catégorie',
    'idea.placeholder': 'Votre idée apparaîtra ici…',
    'idea.contact': 'Cette idée m\'intéresse — nous contacter',

    // Projet page
    'proj.back':        'Réalisations',
    'proj.notfound':    'Projet introuvable',
    'proj.notfound.back': '← Retour aux réalisations',
    'proj.client':      'Client',
    'proj.year':        'Année',
    'proj.category':    'Catégorie',
    'proj.tech':        'Technologies',
    'proj.value':       'Plus-value du projet',
    'proj.gain':        'Gain mensuel estimé',
    'proj.context':     'Le contexte',
    'proj.challenge':   'Le défi du client',
    'proj.results':     'Résultats',
    'proj.gains.title': 'Ce que le client y gagne',
    'proj.demo':        'Démo',
    'proj.visuals':     'Visuels',
    'proj.schema':      'Schéma de principe',
    'proj.demo.btn':    'Demander une démo',
    'proj.cta.eyebrow': 'Un projet similaire ?',
    'proj.cta.default': 'Parlons de votre besoin',
    'proj.cta.btn':     'Nous contacter',
    'proj.product':     'Produit Wander-IT',
    'proj.available':   'Cet outil est disponible sur demande.',
    'proj.available.sub': 'Déployable sur votre chantier en quelques jours — configuré selon vos équipes, vos véhicules et vos tâches.',

    // Hero photo captions
    'hero.alex.role':  'Solutions Digitales',
    'hero.andre.role': 'Expertise Métier',
    'hero.expertise':  'Expertise',

    // Hero eyebrow
    'hero.digital': 'Solutions Digitales · Wander-IT',

    // Form placeholders
    'form.nom':      'Nom',
    'form.prenom':   'Prénom',
    'form.societe':  'Société',
    'form.tel':      'Téléphone',
    'form.email':    'Email *',
    'form.textarea': 'Décrivez votre projet ...',

    // Gen-btn circular label
    'contact.random.btn': 'Idée<br>aléatoire',

    // Realisations page
    'real.page.eyebrow': 'Ce que nous avons fait',
    'real.page.title':   'Nos réalisations',
    'real.page.sub':     'Une sélection de projets livrés pour des indépendants, PME et entreprises. Chaque réalisation est un défi concret, résolu avec nos outils.',
    'filter.all':        'Tous',
    'filter.auto':       'Automatisation',
    'filter.design':     'Web Design',
    'filter.app':        'App Development',
    'filter.data':       'Data & Reporting',
    'real.empty':        'Aucun projet dans cette catégorie pour le moment.',
  },

  en: {
    // ── Titles
    'title.index':       'Wander-IT — Your expertise. Our tools. One step ahead.',
    'title.services':    'Services — Wander-IT',
    'title.about':       'About — Wander-IT',
    'title.realisations':'Portfolio — Wander-IT',

    // ── Nav
    'nav.realisations': 'Portfolio',
    'nav.services':     'Services',
    'nav.about':        'About',
    'nav.contact':      'Contact us',

    // ── Index hero
    'hero.eyebrow':   'Your expertise, our tools.',
    'hero.line1':     'Your<br>expertise,',
    'hero.line2':     'our tools.',
    'hero.title':     'One step ahead.',
    'hero.sub':       'We analyse your processes, identify what can be automated or developed, and deliver concrete tools — for any business that wants to move to the next level.',
    'hero.cta1':      'Contact us',
    'hero.cta2':      'See our services',
    'hero.badge':     'Tailored',

    // ── Index services section
    'services.eyebrow': 'What we do',
    'services.title':   'Our services',
    'services.sub':     'Pragmatic solutions, delivered quickly, that meet your real needs.',

    // Service cards (index)
    'card.auto.num':  'Automation',
    'card.auto.desc': 'Automate repetitive tasks and connect your tools — inbox management, automatic quotes, marketing posts and more.',
    'card.dev.num':   'Tool Development',
    'card.dev.desc':  'Custom web and mobile applications, designed for your users and built to last.',
    'card.ai.num':    'AI Integration',
    'card.ai.desc':   'Integrate AI models directly into your systems — chatbots, content analysis, automated generation and more.',
    'card.design.num': 'Web Design',
    'card.design.desc':'Websites that inspire trust and convert. Clean design, strong identity, immediate impact.',
    'card.learn':     'Learn more',

    // ── Index approach
    'approach.eyebrow': 'Our approach',
    'approach.heading': 'Pragmatic.<br><span style="color:#6B3020">Effective.</span><br>Tailored.',
    'approach.t1':      'Pragmatic.',
    'approach.t2':      'Effective.',
    'approach.t3':      'Tailored.',
    'approach.sub':     'No generic solutions. We take the time to understand your business, your constraints, your goals — and we deliver exactly what you really need.',
    'approach.cta':     'Start a project',

    // Process steps
    'step1.title': 'Listen & Analyse',
    'step1.desc':  'We always start by understanding your context before proposing anything.',
    'step2.title': 'Design & Validation',
    'step2.desc':  'We define together the most appropriate solution, without unnecessary over-engineering.',
    'step3.title': 'Fast Delivery',
    'step3.desc':  'Short iterations, frequent feedback. You see the progress at every stage.',
    'step4.title': 'Follow-up & Optimisation',
    'step4.desc':  'The relationship doesn\'t stop at delivery. Our expertise remains available to help you grow.',

    // Realisations (index teaser)
    'real.eyebrow':   'What we\'ve done',
    'real.title':     'Our work',
    'real.proj.view': 'See the project',
    'real.proj.all':  'See all<br>our projects',

    // ── Contact form
    'contact.eyebrow': 'Let\'s talk about your project',
    'contact.heading': 'Ready to get<br><span style="color:#6B3020">one step ahead?</span>',
    'contact.title':   'Ready to get one step ahead?',
    'contact.sub':     'Describe your need in a few words — we\'ll get back to you within 24h with an initial analysis.',
    'contact.tab.project': 'Project',
    'contact.tab.quote':   'Quote',
    'contact.tab.support': 'Support',
    'contact.random':  '🎲 Random idea',
    'contact.random.hint': 'No inspiration? Click for a project idea.',
    'contact.random.cat':  'Cat',
    'contact.random.use':  'Use this idea',
    'contact.success': '✓ Message sent — we\'ll get back to you within 24h.',
    'contact.error':   '✗ An error occurred. Try again or write to us directly.',

    // ── Footer
    'footer.copy':   'Wander-IT © 2026',
    'footer.alex':   'WANSART Alex — Digital Solutions',
    'footer.both':   'WANSART Alex & André — Digital Solutions',

    // ── About page
    'about.eyebrow':    'Who we are',
    'about.title':      'About Wander-IT',
    'about.title.html': 'About<br><span style="color:#6B3020">Wander-IT</span>',
    'about.team':       'The team',
    'about.h2':         'Who are we?',

    'andre.role': 'Co-founder · Strategy & Business Expertise',
    'andre.bio1': 'With over 30 years of experience as an IT Director, André embodies rigour, pragmatism and attention to detail. His career has given him a deep understanding of business challenges and ground-level realities that technology must serve — not the other way around.',
    'andre.bio2': 'At Wander-IT, he brings this strategic vision to every project: ensuring that each solution is not only technically sound, but meets a real need and creates measurable, lasting value.',

    'alex.role': 'Co-founder · Development & Innovation',
    'alex.bio1': 'A versatile industrial engineer by training, Alex is across all technological fronts. Artificial intelligence doesn\'t scare him — quite the opposite; he knows precisely how to integrate it into projects in an intelligent, measured way, where it brings real value.',
    'alex.bio2': 'During 5 years on the ground as a project manager in the photovoltaic sector, in Belgium and Australia, he developed his first site management tools. He knows the field and transforms that experience into concrete solutions for his clients.',

    'company.eyebrow': 'The company',
    'company.title':   'Our mission.',
    'company.bio1':    'In a world where the digital landscape evolves at an unprecedented pace, many find themselves overwhelmed — not for lack of will, but due to the absence of support grounded in their real-world context.',
    'company.bio2':    'At Wander-IT, we guide each client through their own digital transition, starting from their business expertise. No generic solutions: we build with you, around what you already know, to get to where you want to go.',
    'company.bio3':    'Our commitment: making digital modernity accessible, concrete and sustainable — whatever your sector, your size or your starting point.',
    'company.stat':    '15+ Years of combined experience',

    'cta.eyebrow': 'Let\'s work together',
    'cta.title':   'Do you have a project in mind?',
    'cta.btn':     'Contact us',

    // ── Services page
    'svc.eyebrow': 'What we offer',
    'svc.title':   'Our services.',
    'svc.sub':     'No generic solutions. Every project is analysed, thought through and built around your ground-level realities — for a concrete, lasting and measurable impact.',
    'svc.interest': 'Interested in this service?',

    // Service 01
    's1.num':   'Automation',
    's1.title': 'Your tools work for you, not the other way around.',
    's1.desc':  'Automate repetitive tasks and connect your tools — inbox management, automatic quotes, scheduled marketing posts, data synchronisation and much more. We free your team from low-value tasks so they can focus on what really matters.',
    's1.e1.title': 'Inbox management',
    's1.e1.desc':  'Automatic replies, smart sorting and effortless tracking of incoming messages.',
    's1.e1.kpi':   '↗ ~3h saved per week',
    's1.e2.title': 'Automatic quotes',
    's1.e2.desc':  'Quote generation from your web forms, without manual intervention.',
    's1.e2.kpi':   '↗ Response time reduced by 80%',
    's1.e3.title': 'Social media',
    's1.e3.desc':  'Posts scheduled and automatically broadcast across all your channels.',
    's1.e3.kpi':   '↗ Constant presence, 0 daily effort',
    's1.e4.title': 'Odoo integration',
    's1.e4.desc':  'Automatic encoding of invoices received by email directly into Odoo — without manual entry.',
    's1.e4.kpi':   '↗ ~40h recovered per month',
    's1.e5.title': 'Customer reminders',
    's1.e5.desc':  'Automatic notifications sent to your clients at the right moment, without thinking about it.',
    's1.e5.kpi':   '↗ Follow-up rate ×3 without extra workload',
    's1.e6.title': 'Weekly reporting',
    's1.e6.desc':  'Reports generated and automatically sent each week by email.',
    's1.e6.kpi':   '↗ 30 min saved every Monday morning',

    // Service 02
    's2.num':   'Tool Development',
    's2.title': 'Tools designed for your users, built to last.',
    's2.desc':  'Custom web and mobile applications, client portals, management dashboards, internal tools — we design solutions that integrate into your workflow and evolve with your business. Every detail counts, from the first screen to the last line of code.',
    's2.e1.title': 'Site tracking app',
    's2.e1.desc':  'Progress, photos and documents shared in real time with your field teams.',
    's2.e1.kpi':   '↗ Follow-up meetings halved',
    's2.e2.title': 'Client portal',
    's2.e2.desc':  'Dedicated space for your clients to track their orders and communicate easily.',
    's2.e2.kpi':   '↗ −60% of questions by email or phone',
    's2.e3.title': 'Team scheduling',
    's2.e3.desc':  'Internal tool to organise missions, resources and availability at a glance.',
    's2.e3.kpi':   '↗ Full team view in 30 seconds',
    's2.e4.title': 'Sales dashboard',
    's2.e4.desc':  'Interactive dashboard to manage your KPIs and commercial decisions.',
    's2.e4.kpi':   '↗ Decisions based on real data, not estimates',
    's2.e5.title': 'Mobile time-tracking app',
    's2.e5.desc':  'Offline-accessible time tracking for your technicians, synced when back online.',
    's2.e5.kpi':   '↗ No more Excel sheets at the end of the day',
    's2.e6.title': 'Online booking',
    's2.e6.desc':  'Custom appointment booking platform, adapted to your business.',
    's2.e6.kpi':   '↗ Available 24/7, without a secretary',

    // Service 03
    's3.num':   'AI Integration',
    's3.title': 'Artificial intelligence, where it brings real value.',
    's3.desc':  'Integrate AI models directly into your existing systems — chatbots, document analysis, content generation, automatic classification. We don\'t follow trends: we precisely identify where AI creates a concrete gain for your team and your clients.',
    's3.e1.title': '24/7 Chatbot',
    's3.e1.desc':  'Intelligent assistant that responds to your clients at any hour, without interruption.',
    's3.e1.kpi':   '↗ 80% of questions resolved without intervention',
    's3.e2.title': 'Document analysis',
    's3.e2.desc':  'Automatic reading and extraction of key data from your contracts and correspondence.',
    's3.e2.kpi':   '↗ A document processed in seconds, not hours',
    's3.e3.title': 'Content generation',
    's3.e3.desc':  'Product descriptions, technical sheets or articles generated in bulk with AI.',
    's3.e3.kpi':   '↗ 100 product sheets in a few minutes',
    's3.e4.title': 'Smart classification',
    's3.e4.desc':  'Automatic sorting of incoming requests by type, urgency and owner.',
    's3.e4.kpi':   '↗ Triage time reduced to zero',
    's3.e5.title': 'Meeting summaries',
    's3.e5.desc':  'Automatic minutes generated after each meeting, ready to share.',
    's3.e5.kpi':   '↗ Minutes ready before the meeting ends',
    's3.e6.title': 'Anomaly detection',
    's3.e6.desc':  'Identification of unusual deviations in your financial or operational data.',
    's3.e6.kpi':   '↗ Alerts before the problem becomes critical',

    // Service 04
    's4.num':   'Web Design',
    's4.title': 'Websites that inspire trust and convert.',
    's4.desc':  'Clean design, strong brand identity, immediate impact. We create showcase sites, landing pages, portfolios and e-commerce sites that exactly reflect who you are — and inspire your visitors to take action.',
    's4.e1.title': 'Showcase website',
    's4.e1.desc':  'An online presence that inspires trust and reflects your expertise from the very first glance.',
    's4.e1.kpi':   '↗ Professional first impression from the 1st click',
    's4.e2.title': 'Landing page',
    's4.e2.desc':  'Page optimised to convert your visitors into qualified leads for your campaigns.',
    's4.e2.kpi':   '↗ Conversion rate up to ×3 higher',
    's4.e3.title': 'Visual identity',
    's4.e3.desc':  'Complete redesign: logo, graphic charter and consistent guidelines across all your media.',
    's4.e3.kpi':   '↗ Consistency across all your media, effortlessly',
    's4.e4.title': 'E-commerce website',
    's4.e4.desc':  'Online store with a strong identity and a smooth, reassuring buying journey.',
    's4.e4.kpi':   '↗ Less cart abandonment, more client trust',
    's4.e5.title': 'Interactive portfolio',
    's4.e5.desc':  'Showcasing your work with an immersive and memorable navigation experience.',
    's4.e5.kpi':   '↗ Your clients remember you',
    's4.e6.title': 'Multilingual website',
    's4.e6.desc':  'Consistent and polished experience for your visitors in multiple languages.',
    's4.e6.kpi':   '↗ Accessible to 100% of your target markets',

    // Random idea generator
    'idea.eyebrow': 'Don\'t know where to start?',
    'idea.title':   'Let us inspire you.',
    'idea.sub':     'Click the button below — we pick a random project idea from our catalogue. Who knows, it might be the right one for you.',
    'idea.btn':     '🎲 Random idea generator',
    'idea.cat':     'Category',
    'idea.placeholder': 'Your idea will appear here…',
    'idea.contact': 'This idea interests me — contact us',

    // Projet page
    'proj.back':        'Portfolio',
    'proj.notfound':    'Project not found',
    'proj.notfound.back': '← Back to portfolio',
    'proj.client':      'Client',
    'proj.year':        'Year',
    'proj.category':    'Category',
    'proj.tech':        'Technologies',
    'proj.value':       'Project value',
    'proj.gain':        'Estimated monthly gain',
    'proj.context':     'Context',
    'proj.challenge':   'The client\'s challenge',
    'proj.results':     'Results',
    'proj.gains.title': 'What the client gains',
    'proj.demo':        'Demo',
    'proj.visuals':     'Visuals',
    'proj.schema':      'Architecture overview',
    'proj.demo.btn':    'Request a demo',
    'proj.cta.eyebrow': 'A similar project?',
    'proj.cta.default': 'Let\'s talk about your need',
    'proj.cta.btn':     'Contact us',
    'proj.product':     'Wander-IT Product',
    'proj.available':   'This tool is available on request.',
    'proj.available.sub': 'Deployable on your site in a few days — configured for your teams, vehicles and tasks.',

    // Hero photo captions
    'hero.alex.role':  'Digital Solutions',
    'hero.andre.role': 'Business Expertise',
    'hero.expertise':  'Expertise',

    // Hero eyebrow
    'hero.digital': 'Digital Solutions · Wander-IT',

    // Form placeholders
    'form.nom':      'Last name',
    'form.prenom':   'First name',
    'form.societe':  'Company',
    'form.tel':      'Phone',
    'form.email':    'Email *',
    'form.textarea': 'Describe your project ...',

    // Gen-btn circular label
    'contact.random.btn': 'Random<br>idea',

    // Realisations page
    'real.page.eyebrow': 'What we\'ve done',
    'real.page.title':   'Our work',
    'real.page.sub':     'A selection of projects delivered for freelancers, SMEs and companies. Every achievement is a concrete challenge, resolved with our tools.',
    'filter.all':        'All',
    'filter.auto':       'Automation',
    'filter.design':     'Web Design',
    'filter.app':        'App Development',
    'filter.data':       'Data & Reporting',
    'real.empty':        'No projects in this category yet.',
  },

  de: {
    // ── Titles
    'title.index':       'Wander-IT — Ihre Expertise. Unsere Werkzeuge. Einen Schritt voraus.',
    'title.services':    'Leistungen — Wander-IT',
    'title.about':       'Über uns — Wander-IT',
    'title.realisations':'Referenzen — Wander-IT',

    // ── Nav
    'nav.realisations': 'Referenzen',
    'nav.services':     'Leistungen',
    'nav.about':        'Über uns',
    'nav.contact':      'Kontakt aufnehmen',

    // ── Index hero
    'hero.eyebrow':   'Ihre Expertise, unsere Werkzeuge.',
    'hero.line1':     'Ihre<br>Expertise,',
    'hero.line2':     'unsere Werkzeuge.',
    'hero.title':     'Einen Schritt voraus.',
    'hero.sub':       'Wir analysieren Ihre Prozesse, identifizieren, was automatisiert oder entwickelt werden kann, und liefern konkrete Werkzeuge — für jedes Unternehmen, das den nächsten Schritt wagen will.',
    'hero.cta1':      'Kontakt aufnehmen',
    'hero.cta2':      'Unsere Leistungen',
    'hero.badge':     'Maßgeschneidert',

    // ── Index services section
    'services.eyebrow': 'Was wir tun',
    'services.title':   'Unsere Leistungen',
    'services.sub':     'Pragmatische Lösungen, schnell geliefert, die Ihren tatsächlichen Bedürfnissen entsprechen.',

    // Service cards (index)
    'card.auto.num':  'Automatisierung',
    'card.auto.desc': 'Automatisieren Sie wiederkehrende Aufgaben und verbinden Sie Ihre Tools — Postfachverwaltung, automatische Angebote, Marketing-Posts und mehr.',
    'card.dev.num':   'Tool-Entwicklung',
    'card.dev.desc':  'Maßgeschneiderte Web- und Mobilanwendungen, für Ihre Nutzer konzipiert und für die Dauer gebaut.',
    'card.ai.num':    'KI-Integration',
    'card.ai.desc':   'Integrieren Sie KI-Modelle direkt in Ihre Systeme — Chatbots, Inhaltsanalyse, automatisierte Generierung und mehr.',
    'card.design.num': 'Web-Design',
    'card.design.desc':'Websites, die Vertrauen wecken und konvertieren. Klares Design, starke Identität, sofortige Wirkung.',
    'card.learn':     'Mehr erfahren',

    // ── Index approach
    'approach.eyebrow': 'Unser Ansatz',
    'approach.heading': 'Pragmatisch.<br><span style="color:#6B3020">Effektiv.</span><br>Maßgeschneidert.',
    'approach.t1':      'Pragmatisch.',
    'approach.t2':      'Effektiv.',
    'approach.t3':      'Maßgeschneidert.',
    'approach.sub':     'Keine Standardlösungen. Wir nehmen uns die Zeit, Ihr Unternehmen, Ihre Einschränkungen und Ihre Ziele zu verstehen — und liefern genau das, was Sie wirklich brauchen.',
    'approach.cta':     'Projekt starten',

    // Process steps
    'step1.title': 'Zuhören & Analysieren',
    'step1.desc':  'Wir beginnen immer damit, Ihren Kontext zu verstehen, bevor wir etwas vorschlagen.',
    'step2.title': 'Konzeption & Validierung',
    'step2.desc':  'Wir definieren gemeinsam die passendste Lösung, ohne unnötiges Over-Engineering.',
    'step3.title': 'Schnelle Lieferung',
    'step3.desc':  'Kurze Iterationen, häufiges Feedback. Sie sehen den Fortschritt in jeder Phase.',
    'step4.title': 'Begleitung & Optimierung',
    'step4.desc':  'Die Beziehung endet nicht mit der Lieferung. Unsere Expertise bleibt verfügbar, um Sie weiterzuentwickeln.',

    // Realisations (index teaser)
    'real.eyebrow':   'Was wir gemacht haben',
    'real.title':     'Unsere Referenzen',
    'real.proj.view': 'Projekt ansehen',
    'real.proj.all':  'Alle<br>Referenzen ansehen',

    // ── Contact form
    'contact.eyebrow': 'Sprechen wir über Ihr Projekt',
    'contact.heading': 'Bereit,<br><span style="color:#6B3020">einen Schritt voraus zu sein?</span>',
    'contact.title':   'Bereit, einen Schritt voraus zu sein?',
    'contact.sub':     'Beschreiben Sie Ihr Anliegen kurz — wir antworten Ihnen innerhalb von 24h mit einer ersten Analyse.',
    'contact.tab.project': 'Projekt',
    'contact.tab.quote':   'Angebot',
    'contact.tab.support': 'Support',
    'contact.random':  '🎲 Zufallsidee',
    'contact.random.hint': 'Keine Inspiration? Klicken für eine Projektidee.',
    'contact.random.cat':  'Kat.',
    'contact.random.use':  'Diese Idee verwenden',
    'contact.success': '✓ Nachricht gesendet — wir antworten Ihnen innerhalb von 24h.',
    'contact.error':   '✗ Ein Fehler ist aufgetreten. Versuchen Sie es erneut oder schreiben Sie uns direkt.',

    // ── Footer
    'footer.copy':   'Wander-IT © 2026',
    'footer.alex':   'WANSART Alex — Digitale Lösungen',
    'footer.both':   'WANSART Alex & André — Digitale Lösungen',

    // ── About page
    'about.eyebrow':    'Wer wir sind',
    'about.title':      'Über Wander-IT',
    'about.title.html': 'Über<br><span style="color:#6B3020">Wander-IT</span>',
    'about.team':       'Das Team',
    'about.h2':         'Wer sind wir?',

    'andre.role': 'Mitgründer · Strategie & Fachexpertise',
    'andre.bio1': 'Mit über 30 Jahren Erfahrung als IT-Direktor verkörpert André Sorgfalt, Pragmatismus und Liebe zum Detail. Seine Karriere hat ihm ein tiefes Verständnis für geschäftliche Herausforderungen und die Realitäten vor Ort vermittelt, denen die Technologie dienen muss — nicht umgekehrt.',
    'andre.bio2': 'Bei Wander-IT bringt er diese strategische Vision in jedes Projekt ein: Er stellt sicher, dass jede Lösung nicht nur technisch solide ist, sondern einem echten Bedarf entspricht und messbaren, dauerhaften Mehrwert schafft.',

    'alex.role': 'Mitgründer · Entwicklung & Innovation',
    'alex.bio1': 'Als vielseitiger Wirtschaftsingenieur von Natur aus ist Alex an allen technologischen Fronten aktiv. Künstliche Intelligenz schreckt ihn nicht ab — ganz im Gegenteil; er weiß genau, wie er sie auf intelligente und maßvolle Weise in Projekte integriert, wo sie echten Mehrwert bringt.',
    'alex.bio2': 'Während 5 Jahren vor Ort als Projektmanager in der Photovoltaikbranche in Belgien und Australien entwickelte er seine ersten Baustellenverwaltungstools. Er kennt das Feld und verwandelt diese Erfahrung in konkrete Lösungen für seine Kunden.',

    'company.eyebrow': 'Das Unternehmen',
    'company.title':   'Unsere Mission.',
    'company.bio1':    'In einer Welt, in der sich das Digitale in einem beispiellosen Tempo entwickelt, fühlen sich viele überfordert — nicht aus mangelndem Willen, sondern mangels Begleitung, die in ihrer Realität verwurzelt ist.',
    'company.bio2':    'Bei Wander-IT begleiten wir jeden Kunden bei seinem eigenen digitalen Wandel, ausgehend von seiner Fachexpertise. Keine Standardlösungen: Wir bauen mit Ihnen, rund um das, was Sie bereits kennen, um dorthin zu gelangen, wo Sie hinwollen.',
    'company.bio3':    'Unser Versprechen: digitale Modernität zugänglich, konkret und nachhaltig machen — unabhängig von Ihrer Branche, Ihrer Größe oder Ihrem Ausgangspunkt.',
    'company.stat':    '15+ Jahre kombinierte Erfahrung',

    'cta.eyebrow': 'Arbeiten wir zusammen',
    'cta.title':   'Haben Sie ein Projekt im Sinn?',
    'cta.btn':     'Kontakt aufnehmen',

    // ── Services page
    'svc.eyebrow': 'Was wir anbieten',
    'svc.title':   'Unsere Leistungen.',
    'svc.sub':     'Keine Standardlösungen. Jedes Projekt wird analysiert, durchdacht und rund um Ihre tatsächlichen Gegebenheiten aufgebaut — für eine konkrete, dauerhafte und messbare Wirkung.',
    'svc.interest': 'Interessiert Sie dieser Service?',

    // Service 01
    's1.num':   'Automatisierung',
    's1.title': 'Ihre Werkzeuge arbeiten für Sie, nicht umgekehrt.',
    's1.desc':  'Automatisieren Sie wiederkehrende Aufgaben und verbinden Sie Ihre Tools — Postfachverwaltung, automatische Angebote, geplante Marketing-Posts, Datensynchronisation und vieles mehr. Wir befreien Ihr Team von wenig wertvollen Aufgaben, damit es sich auf das konzentrieren kann, was wirklich zählt.',
    's1.e1.title': 'Postfachverwaltung',
    's1.e1.desc':  'Automatische Antworten, intelligentes Sortieren und mühelose Verfolgung eingehender Nachrichten.',
    's1.e1.kpi':   '↗ ~3h pro Woche gespart',
    's1.e2.title': 'Automatische Angebote',
    's1.e2.desc':  'Angebotsgenerierung aus Ihren Web-Formularen, ohne manuellen Eingriff.',
    's1.e2.kpi':   '↗ Reaktionszeit um 80% reduziert',
    's1.e3.title': 'Soziale Medien',
    's1.e3.desc':  'Beiträge geplant und automatisch auf allen Ihren Kanälen verbreitet.',
    's1.e3.kpi':   '↗ Konstante Präsenz, 0 täglicher Aufwand',
    's1.e4.title': 'Odoo-Integration',
    's1.e4.desc':  'Automatische Erfassung von per E-Mail empfangenen Rechnungen direkt in Odoo — ohne manuelle Eingabe.',
    's1.e4.kpi':   '↗ ~40h pro Monat zurückgewonnen',
    's1.e5.title': 'Kundenerinnerungen',
    's1.e5.desc':  'Automatische Benachrichtigungen, die Ihren Kunden zum richtigen Zeitpunkt gesendet werden, ohne daran denken zu müssen.',
    's1.e5.kpi':   '↗ Erinnerungsrate ×3 ohne zusätzliche Belastung',
    's1.e6.title': 'Wöchentliches Reporting',
    's1.e6.desc':  'Berichte werden jede Woche automatisch generiert und per E-Mail versandt.',
    's1.e6.kpi':   '↗ 30 Min. jeden Montagmorgen gespart',

    // Service 02
    's2.num':   'Tool-Entwicklung',
    's2.title': 'Für Ihre Nutzer konzipierte Werkzeuge, die dauerhaft Bestand haben.',
    's2.desc':  'Maßgeschneiderte Web- und Mobilanwendungen, Kundenportale, Management-Dashboards, interne Tools — wir konzipieren Lösungen, die in Ihren Arbeitsablauf passen und mit Ihrem Unternehmen wachsen. Jedes Detail zählt, vom ersten Bildschirm bis zur letzten Codezeile.',
    's2.e1.title': 'Baustellenverfolgungsapp',
    's2.e1.desc':  'Fortschritt, Fotos und Dokumente in Echtzeit mit Ihren Außendienstteams geteilt.',
    's2.e1.kpi':   '↗ Nachverfolgungsbesprechungen halbiert',
    's2.e2.title': 'Kundenportal',
    's2.e2.desc':  'Dedizierter Bereich, in dem Ihre Kunden ihre Bestellungen verfolgen und einfach kommunizieren können.',
    's2.e2.kpi':   '↗ −60% der Fragen per E-Mail oder Telefon',
    's2.e3.title': 'Teamplanung',
    's2.e3.desc':  'Internes Tool zur Organisation von Aufgaben, Ressourcen und Verfügbarkeiten auf einen Blick.',
    's2.e3.kpi':   '↗ Vollständige Teamübersicht in 30 Sekunden',
    's2.e4.title': 'Vertriebs-Dashboard',
    's2.e4.desc':  'Interaktives Dashboard zur Steuerung Ihrer KPIs und Geschäftsentscheidungen.',
    's2.e4.kpi':   '↗ Entscheidungen auf Basis echter Daten, nicht Schätzungen',
    's2.e5.title': 'Mobile Zeiterfassungsapp',
    's2.e5.desc':  'Offline zugängliche Zeiterfassung für Ihre Techniker, synchronisiert bei Wiederverbindung.',
    's2.e5.kpi':   '↗ Schluss mit Excel-Tabellen am Tagesende',
    's2.e6.title': 'Online-Buchung',
    's2.e6.desc':  'Maßgeschneiderte Terminbuchungsplattform, angepasst an Ihr Unternehmen.',
    's2.e6.kpi':   '↗ 24/7 verfügbar, ohne Sekretariat',

    // Service 03
    's3.num':   'KI-Integration',
    's3.title': 'Künstliche Intelligenz, dort wo sie echten Mehrwert bringt.',
    's3.desc':  'Integrieren Sie KI-Modelle direkt in Ihre bestehenden Systeme — Chatbots, Dokumentenanalyse, Inhaltsgenerierung, automatische Klassifizierung. Wir folgen keinen Trends: Wir identifizieren genau, wo KI einen konkreten Vorteil für Ihr Team und Ihre Kunden schafft.',
    's3.e1.title': '24/7-Chatbot',
    's3.e1.desc':  'Intelligenter Assistent, der Ihren Kunden rund um die Uhr antwortet, ohne Unterbrechung.',
    's3.e1.kpi':   '↗ 80% der Fragen ohne Eingriff gelöst',
    's3.e2.title': 'Dokumentenanalyse',
    's3.e2.desc':  'Automatisches Lesen und Extrahieren von Schlüsseldaten aus Ihren Verträgen und Schreiben.',
    's3.e2.kpi':   '↗ Ein Dokument in Sekunden verarbeitet, nicht in Stunden',
    's3.e3.title': 'Inhaltsgenerierung',
    's3.e3.desc':  'Produktbeschreibungen, technische Datenblätter oder Artikel in Masse mit KI generiert.',
    's3.e3.kpi':   '↗ 100 Produktblätter in wenigen Minuten',
    's3.e4.title': 'Intelligente Klassifizierung',
    's3.e4.desc':  'Automatische Sortierung eingehender Anfragen nach Typ, Dringlichkeit und Verantwortlichem.',
    's3.e4.kpi':   '↗ Triage-Zeit auf null reduziert',
    's3.e5.title': 'Besprechungszusammenfassungen',
    's3.e5.desc':  'Automatisches Protokoll nach jeder Besprechung generiert, bereit zum Teilen.',
    's3.e5.kpi':   '↗ Protokoll fertig bevor die Besprechung endet',
    's3.e6.title': 'Anomalieerkennung',
    's3.e6.desc':  'Identifizierung ungewöhnlicher Abweichungen in Ihren Finanz- oder Betriebsdaten.',
    's3.e6.kpi':   '↗ Warnmeldungen bevor das Problem kritisch wird',

    // Service 04
    's4.num':   'Web-Design',
    's4.title': 'Websites, die Vertrauen wecken und konvertieren.',
    's4.desc':  'Klares Design, starke Markenidentität, sofortige Wirkung. Wir erstellen Showcase-Websites, Landing Pages, Portfolios und E-Commerce-Websites, die genau widerspiegeln, wer Sie sind — und Ihre Besucher zum Handeln inspirieren.',
    's4.e1.title': 'Präsenzwebsite',
    's4.e1.desc':  'Eine Online-Präsenz, die Vertrauen weckt und Ihre Expertise auf den ersten Blick widerspiegelt.',
    's4.e1.kpi':   '↗ Professioneller erster Eindruck ab dem 1. Klick',
    's4.e2.title': 'Landing Page',
    's4.e2.desc':  'Seite optimiert, um Ihre Besucher in qualifizierte Leads für Ihre Kampagnen umzuwandeln.',
    's4.e2.kpi':   '↗ Konversionsrate bis zu ×3 höher',
    's4.e3.title': 'Visuelle Identität',
    's4.e3.desc':  'Vollständige Überarbeitung: Logo, Grafikcharta und konsistente Richtlinien auf allen Ihren Medien.',
    's4.e3.kpi':   '↗ Konsistenz auf allen Medien, mühelos',
    's4.e4.title': 'E-Commerce-Website',
    's4.e4.desc':  'Online-Shop mit starker Identität und einem reibungslosen, beruhigenden Kaufprozess.',
    's4.e4.kpi':   '↗ Weniger Warenkorbabbrüche, mehr Kundenvertrauen',
    's4.e5.title': 'Interaktives Portfolio',
    's4.e5.desc':  'Präsentation Ihrer Arbeiten mit einer immersiven und einprägsamen Navigation.',
    's4.e5.kpi':   '↗ Ihre Kunden erinnern sich an Sie',
    's4.e6.title': 'Mehrsprachige Website',
    's4.e6.desc':  'Konsistentes und gepflegtes Erlebnis für Ihre Besucher in mehreren Sprachen.',
    's4.e6.kpi':   '↗ Zugänglich für 100% Ihrer Zielmärkte',

    // Random idea generator
    'idea.eyebrow': 'Wissen Sie nicht, wo Sie anfangen sollen?',
    'idea.title':   'Lassen Sie sich von uns inspirieren.',
    'idea.sub':     'Klicken Sie auf die Schaltfläche unten — wir wählen eine zufällige Projektidee aus unserem Katalog. Wer weiß, vielleicht passt sie zu Ihnen.',
    'idea.btn':     '🎲 Zufallsideen-Generator',
    'idea.cat':     'Kategorie',
    'idea.placeholder': 'Ihre Idee erscheint hier…',
    'idea.contact': 'Diese Idee interessiert mich — Kontakt aufnehmen',

    // Projet page
    'proj.back':        'Referenzen',
    'proj.notfound':    'Projekt nicht gefunden',
    'proj.notfound.back': '← Zurück zu Referenzen',
    'proj.client':      'Kunde',
    'proj.year':        'Jahr',
    'proj.category':    'Kategorie',
    'proj.tech':        'Technologien',
    'proj.value':       'Projektnutzen',
    'proj.gain':        'Geschätzter monatlicher Gewinn',
    'proj.context':     'Kontext',
    'proj.challenge':   'Die Herausforderung',
    'proj.results':     'Ergebnisse',
    'proj.gains.title': 'Was der Kunde gewinnt',
    'proj.demo':        'Demo',
    'proj.visuals':     'Visuals',
    'proj.schema':      'Systemübersicht',
    'proj.demo.btn':    'Demo anfragen',
    'proj.cta.eyebrow': 'Ein ähnliches Projekt?',
    'proj.cta.default': 'Sprechen wir über Ihren Bedarf',
    'proj.cta.btn':     'Kontakt aufnehmen',
    'proj.product':     'Wander-IT Produkt',
    'proj.available':   'Dieses Tool ist auf Anfrage verfügbar.',
    'proj.available.sub': 'In wenigen Tagen auf Ihrer Baustelle einsetzbar — konfiguriert für Ihre Teams, Fahrzeuge und Aufgaben.',

    // Hero photo captions
    'hero.alex.role':  'Digitale Lösungen',
    'hero.andre.role': 'Fachexpertise',
    'hero.expertise':  'Expertise',

    // Hero eyebrow
    'hero.digital': 'Digitale Lösungen · Wander-IT',

    // Form placeholders
    'form.nom':      'Nachname',
    'form.prenom':   'Vorname',
    'form.societe':  'Firma',
    'form.tel':      'Telefon',
    'form.email':    'E-Mail *',
    'form.textarea': 'Beschreiben Sie Ihr Vorhaben ...',

    // Gen-btn circular label
    'contact.random.btn': 'Zufalls-<br>idee',

    // Realisations page
    'real.page.eyebrow': 'Was wir gemacht haben',
    'real.page.title':   'Unsere Referenzen',
    'real.page.sub':     'Eine Auswahl an Projekten, die für Freiberufler, KMU und Unternehmen geliefert wurden. Jede Leistung ist eine konkrete Herausforderung, gelöst mit unseren Werkzeugen.',
    'filter.all':        'Alle',
    'filter.auto':       'Automatisierung',
    'filter.design':     'Web-Design',
    'filter.app':        'App-Entwicklung',
    'filter.data':       'Daten & Reporting',
    'real.empty':        'Noch keine Projekte in dieser Kategorie.',
  }
};

// ── Engine ──────────────────────────────────────────────────────────────────

function applyLang(lang) {
  const T = WANDER_TRANSLATIONS[lang] || WANDER_TRANSLATIONS.fr;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key] !== undefined) el.textContent = T[key];
  });

  // innerHTML elements (for strings containing HTML like <br> or <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[key] !== undefined) el.innerHTML = T[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (T[key] !== undefined) el.placeholder = T[key];
  });

  // Page title
  const titleKey = document.documentElement.dataset.i18nTitle;
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  // html lang attribute
  document.documentElement.lang = lang === 'de' ? 'de' : lang === 'en' ? 'en' : 'fr';

  // Lang button active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Expose current lang globally (for JS-driven UI like ticker, form placeholders)
  window.WANDER_LANG = lang;

  // Rebuild ticker if available
  if (window.rebuildTicker) window.rebuildTicker(lang);

  // Update JS-driven textarea placeholder if the form script exposes a hook
  if (window.updateFormPlaceholders) window.updateFormPlaceholders(lang);

  // Re-render JS-generated page content if available (e.g. projet.html)
  if (window.rebuildProjetContent) window.rebuildProjetContent(lang);

  // Rebuild project cards grid if available (index.html, realisations.html)
  if (window.rebuildCards) window.rebuildCards(lang);
}

function setLang(lang) {
  localStorage.setItem('wander_lang', lang);
  applyLang(lang);
}

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const lang = localStorage.getItem('wander_lang') || 'fr';
  applyLang(lang);
});
