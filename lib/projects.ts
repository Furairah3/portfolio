export type Project = {
  name: string;
  title: string;
  description: string;
  url: string;
  repo: string;
  image: string;
  imageFit: 'cover' | 'contain';
  language: string;
  tags: string[];
  featured?: boolean;
  org?: string;
};

function ogImage(repo: string) {
  return `https://opengraph.githubassets.com/1/${repo}`;
}

// Curated from github.com/Furairah3 and collaborator repos — real repos, hand-picked
// and re-titled for a portfolio audience. Skipped: coursework/lab repos with no
// standalone story (see COURSEWORK in lib/coursework.ts for those instead).
// Images: the real project logo where one exists (imageFit: 'contain'), otherwise
// GitHub's own official repo-preview card (opengraph.githubassets.com, imageFit: 'cover')
// — never a fabricated screenshot.
export const PROJECTS: Project[] = [
  {
    name: 'mtn_quantrisk',
    title: 'QuantRisk — MTN Ghana',
    description:
      'Enterprise risk intelligence platform built during a Risk & Compliance internship at MTN Ghana: Monte Carlo simulation, VaR/CVaR, copula models, and LSTM/XGBoost forecasting with SHAP-powered explainability for operational, financial, and compliance risk.',
    repo: 'adoumouangnamouemmanuel/mtn_quantrisk',
    url: 'https://github.com/adoumouangnamouemmanuel/mtn_quantrisk',
    image: ogImage('adoumouangnamouemmanuel/mtn_quantrisk'),
    imageFit: 'cover',
    language: 'TypeScript',
    tags: ['Risk modeling', 'Simulation', 'ML forecasting'],
    featured: true,
    org: 'MTN Ghana — team project',
  },
  {
    name: 'defotanzania',
    title: 'Disability Enlightenment Foundation — Tanzania',
    description:
      'Full production website for a Tanzanian disability-rights nonprofit: bilingual (English/Swahili), a custom admin CMS with real file uploads, and a PostgreSQL backend — built end to end and deployed to production.',
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
    title: 'Gaggawa — Community Health Alert System',
    description:
      'Emergency health dispatch system for rural Niger: SMS/voice alerts, AI-assisted triage, and an offline-first app for nurses working without reliable connectivity.',
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
    title: 'HealthConnect',
    description:
      'Full-stack digital health platform (PHP, MySQL, JavaScript) improving access to reliable healthcare information and consultations through role-based dashboards for patients, doctors, and administrators.',
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
    title: 'Kalmar Lafiya Assistant',
    description:
      'A per-disease health information assistant — continuing the health-access focus of HealthConnect and Gaggawa in a lighter, chat-style format.',
    repo: 'Furairah3/kalmar-lafiya-assistant',
    url: 'https://github.com/Furairah3/kalmar-lafiya-assistant',
    image: ogImage('Furairah3/kalmar-lafiya-assistant'),
    imageFit: 'cover',
    language: 'TypeScript',
    tags: ['Health tech', 'AI assistant'],
  },
  {
    name: 'Webtech-Academie-Libre-Projects',
    title: 'Académie Libre',
    description:
      "Niger's first online platform built for candidats libres — past exam papers, interactive quizzes, and AI-powered feedback in one place, addressing limited access to quality educational materials.",
    repo: 'Furairah3/Webtech-Academie-Libre-Projects',
    url: 'https://github.com/Furairah3/Webtech-Academie-Libre-Projects',
    image: ogImage('Furairah3/Webtech-Academie-Libre-Projects'),
    imageFit: 'cover',
    language: 'JavaScript',
    tags: ['EdTech', 'AI feedback'],
    featured: true,
  },
  {
    name: 'University-Maintenance-Request-System',
    title: 'University Maintenance Request System',
    description:
      'Role-based web app for students, administrators, and maintenance staff to log and track campus maintenance requests.',
    repo: 'Furairah3/University-Maintenance-Request-System',
    url: 'https://github.com/Furairah3/University-Maintenance-Request-System',
    image: ogImage('Furairah3/University-Maintenance-Request-System'),
    imageFit: 'cover',
    language: 'PHP',
    tags: ['Full-stack', 'MySQL'],
  },
  {
    name: '-Java-Swing-Smart-Home',
    title: 'Smart Home Controller',
    description:
      'Modular smart home controller GUI demonstrating SOLID principles, a dynamic device factory via reflection, and a command/undo architecture.',
    repo: 'Furairah3/-Java-Swing-Smart-Home',
    url: 'https://github.com/Furairah3/-Java-Swing-Smart-Home',
    image: ogImage('Furairah3/-Java-Swing-Smart-Home'),
    imageFit: 'cover',
    language: 'Java',
    tags: ['Software design', 'Desktop GUI'],
  },
];
