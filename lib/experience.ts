export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const TECH_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Risk & Compliance Intern — QuantRisk Project (AI & Simulation)',
    org: 'MTN Ghana',
    period: 'May 2026 – Present',
    bullets: [
      'Building AI-driven risk analysis and simulation models for scenario-based operational, financial, and compliance risk frameworks.',
      'Designing and testing simulation models to improve decision-making and risk forecasting.',
      'Preparing data and reporting for risk intelligence systems, translating insights into business recommendations with cross-functional teams.',
    ],
  },
  {
    role: 'Dialogue Facilitator Intern',
    org: 'Centre for Analytics and Behavioural Change (CABC)',
    period: 'Apr 2026 – Present',
    bullets: [
      'Facilitating structured dialogue sessions on behavioral change and civic engagement.',
      'Coordinating training materials and program activities with a remote team.',
    ],
  },
  {
    role: 'Baobab Ambassador',
    org: 'Baobab Platform',
    period: 'Oct 2025 – Present',
    bullets: [
      'Promoting learning programs and skill-development opportunities among students and peers.',
      'Encouraging participation in career-readiness and digital-skills courses.',
    ],
  },
  {
    role: 'Quality Assurance Intern',
    org: 'Ownkey (Remote)',
    period: 'Jun 2025 – Sep 2025',
    bullets: [
      'Tested web and mobile applications for functionality, usability, and responsiveness.',
      'Identified and reported bugs, writing detailed test cases for developers.',
    ],
  },
  {
    role: 'AI Research Intern',
    org: 'AI for Africa (Remote)',
    period: 'Apr 2025 – Jul 2025',
    bullets: [
      'Explored AI Agents, LLMs, RAG, FastAPI, Python, and Git.',
      'Worked with real datasets via CKAN APIs, contributing to training data pipelines for African contexts.',
    ],
  },
  {
    role: 'Peer Tutor',
    org: 'Ashesi University',
    period: 'Mar 2025 – Present',
    bullets: ['Tutoring first-year students in Computer Science concepts and facilitating study sessions.'],
  },
  {
    role: 'Career Peer Advisor',
    org: 'Ashesi University Career Services',
    period: 'May 2024 – Present',
    bullets: [
      'Guided 30+ students in CV writing, interview prep, and career planning.',
      'Organized career workshops to boost student engagement with professional development resources.',
    ],
  },
];

export const HEALTHCARE_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Nursing Intern, Urology Department',
    org: 'Larmorde National Hospital (CHU), Niamey, Niger',
    period: 'Jan 2021 – Sep 2021',
    bullets: [
      'Assisted in delivering palliative and emergency care to 50+ patients.',
      'Contributed to community health education on urological health.',
    ],
  },
  {
    role: 'Rural Medical Outreach',
    org: 'Doutchi Health District & Dan Kassari CSI, Niger',
    period: 'Jan 2021 – Mar 2021',
    bullets: [
      'Treated 50+ patients in under-resourced communities.',
      'Developed patient care plans and educated families on disease prevention.',
    ],
  },
  {
    role: 'Surgical & Post-Operative Care',
    org: 'Boukoki CSI, National Hospital of Niamey, Niger',
    period: 'Feb 2020 – Mar 2020',
    bullets: ['Provided pre- and post-operative care for 40+ surgical patients; assisted in 5+ surgeries.'],
  },
  {
    role: 'Maternity & Pediatric Care',
    org: 'Poudrière & Boukoki Maternity, Gamkale CSI, CEDAV, Niger',
    period: 'Jan 2019 – Apr 2020',
    bullets: [
      'Delivered obstetric care to 100+ women, including childbirth assistance, with zero maternal fatalities.',
      'Provided critical care for pediatric and neonatal patients.',
    ],
  },
];
