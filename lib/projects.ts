export type Project = {
  name: string;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  url: string;
  repo: string;
  image: string;
  imageFit: 'cover' | 'contain';
  language: string;
  tags: string[];
  featured?: boolean;
  org?: string;
};

// Curated from github.com/Furairah3 and collaborator repos — real repos, hand-picked
// and re-titled for a portfolio audience. Skipped: coursework/lab repos with no
// standalone story (see COURSEWORK in lib/coursework.ts for those instead).
// Images: the real project logo where one exists, otherwise a hand-designed SVG
// mark (quantrisk/kalmar-lafiya/academie-libre/university-maintenance/smart-home
// logos) — never a fabricated screenshot.
export const PROJECTS: Project[] = [
  {
    name: 'mtn_quantrisk',
    titleEn: 'QuantRisk — MTN Ghana',
    titleFr: 'QuantRisk — MTN Ghana',
    descriptionEn:
      'Enterprise risk intelligence platform built during a Risk & Compliance internship at MTN Ghana: Monte Carlo simulation, VaR/CVaR, copula models, and LSTM/XGBoost forecasting with SHAP-powered explainability for operational, financial, and compliance risk.',
    descriptionFr:
      "Plateforme d'intelligence des risques développée lors d'un stage Risque & Conformité chez MTN Ghana : simulation de Monte Carlo, VaR/CVaR, modèles de copules et prévisions LSTM/XGBoost avec explicabilité SHAP pour les risques opérationnels, financiers et de conformité.",
    repo: 'adoumouangnamouemmanuel/mtn_quantrisk',
    url: 'https://github.com/adoumouangnamouemmanuel/mtn_quantrisk',
    image: '/images/projects/quantrisk-logo.svg',
    imageFit: 'contain',
    language: 'TypeScript',
    tags: ['Risk modeling', 'Simulation', 'ML forecasting'],
    featured: true,
    org: 'MTN Ghana — team project',
  },
  {
    name: 'defotanzania',
    titleEn: 'Disability Enlightenment Foundation — Tanzania',
    titleFr: 'Disability Enlightenment Foundation — Tanzanie',
    descriptionEn:
      'Full production website for a Tanzanian disability-rights nonprofit: bilingual (English/Swahili), a custom admin CMS with real file uploads, and a PostgreSQL backend — built end to end and deployed to production.',
    descriptionFr:
      "Site web de production complet pour une ONG tanzanienne de défense des droits des personnes handicapées : bilingue (anglais/swahili), un CMS d'administration sur mesure avec téléversement de fichiers réel, et une base PostgreSQL — développé de A à Z et déployé en production.",
    repo: 'Furairah3/defotanzania',
    url: 'https://github.com/Furairah3/defotanzania',
    image: '/images/projects/defotanzania-logo.png',
    imageFit: 'contain',
    language: 'TypeScript',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'i18n'],
    featured: true,
  },
  {
    name: 'gaggawa-health-alert',
    titleEn: 'Gaggawa — Community Health Alert System',
    titleFr: 'Gaggawa — Système d\'Alerte Santé Communautaire',
    descriptionEn:
      'Emergency health dispatch system for rural Niger: SMS/voice alerts, AI-assisted triage, and an offline-first app for nurses working without reliable connectivity.',
    descriptionFr:
      "Système de répartition des urgences médicales pour le Niger rural : alertes SMS/vocales, triage assisté par IA, et une application fonctionnant hors ligne pour les infirmiers travaillant sans connectivité fiable.",
    repo: 'Furairah3/gaggawa-health-alert',
    url: 'https://github.com/Furairah3/gaggawa-health-alert',
    image: '/images/projects/gaggawa-logo.png',
    imageFit: 'contain',
    language: 'HTML',
    tags: ['Health tech', 'Offline-first', 'AI triage'],
    featured: true,
  },
  {
    name: 'healthConnect',
    titleEn: 'HealthConnect',
    titleFr: 'HealthConnect',
    descriptionEn:
      'Full-stack digital health platform (PHP, MySQL, JavaScript) improving access to reliable healthcare information and consultations through role-based dashboards for patients, doctors, and administrators.',
    descriptionFr:
      "Plateforme de santé numérique full-stack (PHP, MySQL, JavaScript) améliorant l'accès à une information santé fiable et à des consultations via des tableaux de bord par rôle pour patients, médecins et administrateurs.",
    repo: 'Furairah3/healthConnect',
    url: 'https://github.com/Furairah3/healthConnect',
    image: '/images/projects/healthconnect-logo.png',
    imageFit: 'contain',
    language: 'PHP',
    tags: ['Telehealth', 'Accessibility'],
    featured: true,
  },
  {
    name: 'kalmar-lafiya-assistant',
    titleEn: 'Kalmar Lafiya Assistant',
    titleFr: 'Kalmar Lafiya Assistant',
    descriptionEn:
      'A per-disease health information assistant — continuing the health-access focus of HealthConnect and Gaggawa in a lighter, chat-style format.',
    descriptionFr:
      "Un assistant d'information santé par maladie — poursuivant l'axe accès-santé de HealthConnect et Gaggawa dans un format plus léger, façon chat.",
    repo: 'Furairah3/kalmar-lafiya-assistant',
    url: 'https://github.com/Furairah3/kalmar-lafiya-assistant',
    image: '/images/projects/kalmar-lafiya-logo.svg',
    imageFit: 'contain',
    language: 'TypeScript',
    tags: ['Health tech', 'AI assistant'],
  },
  {
    name: 'Webtech-Academie-Libre-Projects',
    titleEn: 'Académie Libre',
    titleFr: 'Académie Libre',
    descriptionEn:
      "Niger's first online platform built for candidats libres — past exam papers, interactive quizzes, and AI-powered feedback in one place, addressing limited access to quality educational materials.",
    descriptionFr:
      "La première plateforme en ligne du Niger conçue pour les candidats libres — annales d'examens, quiz interactifs et retours propulsés par l'IA réunis en un seul endroit, pour pallier l'accès limité à des ressources pédagogiques de qualité.",
    repo: 'Furairah3/Webtech-Academie-Libre-Projects',
    url: 'https://github.com/Furairah3/Webtech-Academie-Libre-Projects',
    image: '/images/projects/academie-libre-logo.svg',
    imageFit: 'contain',
    language: 'JavaScript',
    tags: ['EdTech', 'AI feedback'],
    featured: true,
  },
  {
    name: 'University-Maintenance-Request-System',
    titleEn: 'University Maintenance Request System',
    titleFr: 'Système de Demandes de Maintenance Universitaire',
    descriptionEn:
      'Role-based web app for students, administrators, and maintenance staff to log and track campus maintenance requests.',
    descriptionFr:
      "Application web par rôle permettant aux étudiants, administrateurs et agents de maintenance de soumettre et suivre les demandes de maintenance sur le campus.",
    repo: 'Furairah3/University-Maintenance-Request-System',
    url: 'https://github.com/Furairah3/University-Maintenance-Request-System',
    image: '/images/projects/university-maintenance-logo.svg',
    imageFit: 'contain',
    language: 'PHP',
    tags: ['Full-stack', 'MySQL'],
  },
  {
    name: '-Java-Swing-Smart-Home',
    titleEn: 'Smart Home Controller',
    titleFr: 'Contrôleur de Maison Intelligente',
    descriptionEn:
      'Modular smart home controller GUI demonstrating SOLID principles, a dynamic device factory via reflection, and a command/undo architecture.',
    descriptionFr:
      "Interface graphique modulaire de contrôleur de maison intelligente illustrant les principes SOLID, une fabrique d'appareils dynamique par réflexion, et une architecture de commandes annulables.",
    repo: 'Furairah3/-Java-Swing-Smart-Home',
    url: 'https://github.com/Furairah3/-Java-Swing-Smart-Home',
    image: '/images/projects/smart-home-logo.svg',
    imageFit: 'contain',
    language: 'Java',
    tags: ['Software design', 'Desktop GUI'],
  },
];
