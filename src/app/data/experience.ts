import { ExperienceItem } from './models';

// TODO(Hector): adjust dates, add earlier roles, and tune the wording.
export const EXPERIENCE: ExperienceItem[] = [
  {
    kind: 'work',
    organization: 'Simultrayd',
    role: { en: 'Full-Stack Developer & Automation Engineer', es: 'Desarrollador Full-Stack e Ingeniero de Automatización' },
    period: { en: '2024 — present', es: '2024 — presente' },
    summary: {
      en: 'Own features end to end on a live B2B trade platform: front-end modules, auth flows, payment gating, real-time chat, and the automation layer around it — enrichment pipelines, outreach systems and API orchestration at daily five-figure volumes. Designed the serverless AWS architecture for the platform’s next generation.',
      es: 'Desarrollo features de punta a punta en una plataforma B2B de comercio en producción: módulos de front, flujos de auth, pagos condicionados, chat en tiempo real y la capa de automatización alrededor — pipelines de enriquecimiento, sistemas de outreach y orquestación de APIs con volúmenes diarios de cinco cifras. Diseñé la arquitectura serverless en AWS para la siguiente generación de la plataforma.',
    },
    tags: ['Angular', 'JavaScript', 'Node.js', 'AWS', 'n8n', 'Make', 'Apps Script', 'Stripe'],
  },
  {
    kind: 'education',
    organization: 'BEDU',
    role: { en: 'Generative AI & Development Program', es: 'Programa de IA Generativa y Desarrollo' },
    period: { en: '2025', es: '2025' },
    summary: {
      en: 'Hands-on program covering generative AI foundations and applied development workflows.',
      es: 'Programa práctico sobre fundamentos de IA generativa y flujos de desarrollo aplicados.',
    },
    tags: ['Generative AI', 'Python'],
  },
  {
    kind: 'education',
    organization: 'Coderhouse',
    role: { en: 'Full-Stack Web Development (Angular & Node.js)', es: 'Desarrollo Web Full-Stack (Angular y Node.js)' },
    period: { en: '2023 — 2024', es: '2023 — 2024' },
    summary: {
      en: 'Specialization in front-end architecture with Angular plus back-end fundamentals with Node.js and Express, closed with capstone projects on both tracks.',
      es: 'Especialización en arquitectura front-end con Angular más fundamentos de back-end con Node.js y Express, cerrada con proyectos integradores en ambas rutas.',
    },
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
  },
];
