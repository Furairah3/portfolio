export type Project = {
  name: string;
  title: string;
  description: string;
  url: string;
  language: string;
  tags: string[];
  featured?: boolean;
};

// Curated from github.com/Furairah3 — real repos, hand-picked and re-titled for
// a portfolio audience. Skipped: coursework/lab repos with no standalone story.
export const PROJECTS: Project[] = [
  {
    name: 'defotanzania',
    title: 'Disability Enlightenment Foundation — Tanzania',
    description:
      'Full production website for a Tanzanian disability-rights nonprofit: bilingual (English/Swahili), a custom admin CMS with real file uploads, and a PostgreSQL backend — built end to end and deployed to production.',
    url: 'https://github.com/Furairah3/defotanzania',
    language: 'TypeScript',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'i18n'],
    featured: true,
  },
  {
    name: 'gaggawa-health-alert',
    title: 'Gaggawa — Community Health Alert System',
    description:
      'Emergency health dispatch system for rural Niger: SMS/voice alerts, AI-assisted triage, and an offline-first app for nurses working without reliable connectivity.',
    url: 'https://github.com/Furairah3/gaggawa-health-alert',
    language: 'HTML',
    tags: ['Health tech', 'Offline-first', 'AI triage'],
    featured: true,
  },
  {
    name: 'healthConnect',
    title: 'HealthConnect',
    description:
      'Telehealth platform connecting patients in underserved rural areas with volunteer health workers and doctors for remote consultations.',
    url: 'https://github.com/Furairah3/healthConnect',
    language: 'PHP',
    tags: ['Telehealth', 'Accessibility'],
    featured: true,
  },
  {
    name: 'Webtech-Academie-Libre-Projects',
    title: 'Académie Libre',
    description:
      "Niger's first online platform built for candidats libres — past exam papers, interactive quizzes, and AI-powered feedback in one place.",
    url: 'https://github.com/Furairah3/Webtech-Academie-Libre-Projects',
    language: 'JavaScript',
    tags: ['EdTech', 'AI feedback'],
    featured: true,
  },
  {
    name: 'University-Maintenance-Request-System',
    title: 'University Maintenance Request System',
    description:
      'Role-based web app for students, administrators, and maintenance staff to log and track campus maintenance requests.',
    url: 'https://github.com/Furairah3/University-Maintenance-Request-System',
    language: 'PHP',
    tags: ['Full-stack', 'MySQL'],
  },
  {
    name: '-Java-Swing-Smart-Home',
    title: 'Smart Home Controller',
    description:
      'Modular smart home controller GUI demonstrating SOLID principles, a dynamic device factory via reflection, and a command/undo architecture.',
    url: 'https://github.com/Furairah3/-Java-Swing-Smart-Home',
    language: 'Java',
    tags: ['Software design', 'Desktop GUI'],
  },
];
