import { Profile, Stat } from './models';

export const PROFILE: Profile = {
  name: 'Héctor Coronado',
  // TODO(Hector): swap for a personal email if you prefer not to publish the work one.
  email: 'hector@simultrayd.com',
  location: { en: 'Mexico · Remote-friendly', es: 'México · Disponible remoto' },
  github: 'https://github.com/Toydrum',
  githubUser: 'Toydrum',
  // TODO(Hector): set your real LinkedIn URL.
  linkedin: 'https://www.linkedin.com/in/hector-coronado',
  cvUrl: 'cv/HectorCoronado_CV.pdf',
  roles: [
    { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    { en: 'Angular · Node · Python', es: 'Angular · Node · Python' },
    { en: 'Automation Engineer', es: 'Ingeniero de Automatización' },
    { en: 'API Integration Specialist', es: 'Especialista en Integración de APIs' },
  ],
};

// TODO(Hector): tune these numbers to taste.
export const STATS: Stat[] = [
  { value: 5, suffix: '+', label: { en: 'years coding', es: 'años programando' } },
  { value: 15, suffix: '+', label: { en: 'projects shipped', es: 'proyectos entregados' } },
  { value: 20, suffix: '+', label: { en: 'APIs integrated', es: 'APIs integradas' } },
  { value: 10, suffix: 'k+', label: { en: 'automated ops / day', es: 'operaciones automatizadas / día' } },
];
