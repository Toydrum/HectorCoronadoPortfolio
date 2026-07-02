import { SkillGroup } from './models';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: { en: 'Frontend', es: 'Frontend' },
    glyph: '</>',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'RxJS / Signals', level: 82 },
      { name: 'HTML · SCSS', level: 90 },
      { name: 'React', level: 60 },
    ],
  },
  {
    name: { en: 'Backend', es: 'Backend' },
    glyph: '{ }',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'REST API design', level: 88 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Supabase', level: 72 },
    ],
  },
  {
    name: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    glyph: '☁',
    skills: [
      { name: 'AWS (Cognito · Lambda · Aurora)', level: 72 },
      { name: 'Docker', level: 70 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Serverless architecture', level: 74 },
    ],
  },
  {
    name: { en: 'Automation & Integrations', es: 'Automatización e Integraciones' },
    glyph: '⚙',
    skills: [
      { name: 'n8n', level: 90 },
      { name: 'Make', level: 88 },
      { name: 'Google Apps Script', level: 85 },
      { name: 'Webhooks & API orchestration', level: 90 },
      { name: 'Stripe · SendGrid · Twilio', level: 80 },
    ],
  },
];
