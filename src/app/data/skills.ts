import { SkillGroup } from './models';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: { en: 'Backend & APIs', es: 'Backend y APIs' },
    glyph: '{ }',
    skills: [
      { name: 'Node.js · NestJS', level: 90 },
      { name: 'REST · GraphQL · WebSockets', level: 88 },
      { name: 'Python · Django', level: 78 },
      { name: 'Java Spring Boot', level: 62 },
      { name: 'Auth: JWT · RBAC · Cognito', level: 85 },
    ],
  },
  {
    name: { en: 'Frontend', es: 'Frontend' },
    glyph: '</>',
    skills: [
      { name: 'Angular · RxJS · Signals', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 70 },
      { name: 'Vue.js', level: 62 },
      { name: 'HTML · SCSS · responsive UI', level: 88 },
    ],
  },
  {
    name: { en: 'Cloud & Reliability', es: 'Cloud y Confiabilidad' },
    glyph: '☁',
    skills: [
      { name: 'AWS (Lambda · Cognito · Aurora · SQS)', level: 80 },
      { name: 'Docker · Kubernetes · Helm', level: 72 },
      { name: 'Terraform · GitHub Actions CI/CD', level: 75 },
      { name: 'Observability · canary · rollback', level: 85 },
    ],
  },
  {
    name: { en: 'Data Systems', es: 'Sistemas de Datos' },
    glyph: '▦',
    skills: [
      { name: 'PostgreSQL · Redis', level: 82 },
      { name: 'MongoDB · DynamoDB', level: 75 },
      { name: 'ETL / data pipelines (Pandas)', level: 80 },
      { name: 'Sheets at scale · sync engines', level: 90 },
    ],
  },
  {
    name: { en: 'Automation & AI', es: 'Automatización e IA' },
    glyph: '⚙',
    skills: [
      { name: 'n8n · Make', level: 92 },
      { name: 'Google Apps Script', level: 88 },
      { name: 'Webhooks · API orchestration', level: 90 },
      { name: 'OpenAI API · LangChain · RAG', level: 68 },
      { name: 'Stripe · SendGrid · Twilio', level: 82 },
    ],
  },
];
