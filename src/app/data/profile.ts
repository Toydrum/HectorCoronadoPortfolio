import { Profile, Stat } from './models';

/** GoatCounter site code — analytics dashboard at https://hectorcoronado.goatcounter.com */
export const GOATCOUNTER_CODE: string | null = 'hectorcoronado';

export const PROFILE: Profile = {
  name: 'Héctor Coronado',
  fullName: 'Héctor Manuel Coronado Vargas',
  headline: {
    en: 'Senior Full-Stack Engineer',
    es: 'Ingeniero Full-Stack Senior',
  },
  email: 'hm.covar@gmail.com',
  location: { en: 'Mexico City · UTC-6 · Remote-ready', es: 'CDMX · UTC-6 · Listo para remoto' },
  github: 'https://github.com/Toydrum',
  githubUser: 'Toydrum',
  linkedin: 'https://www.linkedin.com/in/hectormanuelcoronadovargas',
  cvUrl: 'cv/HectorCoronado_CV.pdf',
  openToWork: true,
  roles: [
    { en: 'Senior Full-Stack Engineer', es: 'Ingeniero Full-Stack Senior' },
    { en: 'Automation · Data Systems · AWS', es: 'Automatización · Sistemas de Datos · AWS' },
    { en: 'Angular · Node.js · Python', es: 'Angular · Node.js · Python' },
    { en: 'Reliability-first delivery', es: 'Entrega con enfoque en confiabilidad' },
  ],
  heroStack: ['Angular', 'Node.js', 'NestJS', 'Python', 'AWS', 'PostgreSQL', 'n8n'],
};

// Numbers backed by the master CV — keep them defensible in an interview.
export const STATS: Stat[] = [
  { value: 6, suffix: '+', label: { en: 'years in production', es: 'años en producción' } },
  { value: 157, suffix: 'k', label: { en: 'rows in one sync engine', es: 'filas en un motor de sync' } },
  { value: 10, suffix: 'k+', label: { en: 'automated ops / day', es: 'operaciones automatizadas / día' } },
  { value: 46, suffix: '×', label: { en: 'best perf win shipped', es: 'mejor mejora de rendimiento' } },
];
