import { ExperienceItem } from './models';

/** Mirrors the master CV (2026-06-26). Keep both in sync when updating. */
export const EXPERIENCE: ExperienceItem[] = [
  {
    kind: 'work',
    organization: 'Proceti',
    role: {
      en: 'Senior Full-Stack, Automation & Data Engineer',
      es: 'Ingeniero Senior Full-Stack, Automatización y Datos',
    },
    period: { en: 'Apr 2026 — present', es: 'Abr 2026 — presente' },
    summary: {
      en: 'Client engagement: Simultrayd, a B2B trade-intelligence platform. I engineer across four live production surfaces — a 25k+ line JavaScript platform monolith, a 157k-row Apps Script sync engine, n8n/Make automation workflows, and Python/Supabase outreach-data systems — with canary rollouts, rollback paths and runbooks as the default way of shipping.',
      es: 'Cliente: Simultrayd, plataforma B2B de inteligencia comercial. Trabajo sobre cuatro superficies de producción vivas — un monolito JavaScript de más de 25k líneas, un motor de sincronización de 157k filas en Apps Script, workflows de automatización en n8n/Make y sistemas de datos de outreach en Python/Supabase — con despliegues canary, rutas de rollback y runbooks como forma estándar de entregar.',
    },
    tags: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'Python', 'Apps Script', 'n8n', 'AWS', 'Supabase'],
  },
  {
    kind: 'work',
    organization: 'Neoris',
    role: { en: 'Software Engineer (Full-Stack & SRE)', es: 'Ingeniero de Software (Full-Stack y SRE)' },
    period: { en: 'Apr 2024 — present', es: 'Abr 2024 — presente' },
    summary: {
      en: 'Customer-facing systems in a polyglot microservices architecture. Led the modernization from Express + tsc to NestJS on Fastify + SWC, built cross-cutting backend foundations (validation, JWT/RBAC guards, tracing, correlation IDs) and hardened Kafka/SQS/EventBridge flows with idempotent consumers, retries and DLQs.',
      es: 'Sistemas de cara al cliente en una arquitectura de microservicios políglota. Lideré la modernización de Express + tsc a NestJS sobre Fastify + SWC, construí fundaciones transversales de backend (validación, guards JWT/RBAC, tracing, correlation IDs) y endurecí flujos Kafka/SQS/EventBridge con consumidores idempotentes, reintentos y DLQs.',
    },
    tags: ['NestJS', 'Fastify', 'Node.js', 'Java Spring Boot', 'Django', 'Kafka', 'PostgreSQL', 'Redis', 'Terraform'],
  },
  {
    kind: 'work',
    organization: 'Pharmaceutical company (NDA)',
    role: { en: 'Full-Stack Developer & SRE', es: 'Desarrollador Full-Stack y SRE' },
    period: { en: 'Nov 2023 — Sep 2024', es: 'Nov 2023 — Sep 2024' },
    summary: {
      en: 'Regulated product environment: NestJS/Express APIs over REST and GraphQL, asynchronous processing with SQS/SNS and BullMQ, PostgreSQL performance work with Prisma/TypeORM, and containerized workloads on EKS/Kubernetes with Helm — all under audit-friendly security constraints.',
      es: 'Entorno de producto regulado: APIs NestJS/Express sobre REST y GraphQL, procesamiento asíncrono con SQS/SNS y BullMQ, optimización de PostgreSQL con Prisma/TypeORM y cargas contenedorizadas en EKS/Kubernetes con Helm — todo bajo restricciones de seguridad auditables.',
    },
    tags: ['NestJS', 'GraphQL', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'EKS', 'Kubernetes', 'Helm'],
  },
  {
    kind: 'work',
    organization: 'Independent / Freelance',
    role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    period: { en: '2019 — present', es: '2019 — presente' },
    summary: {
      en: 'End-to-end SaaS delivery for independent clients: Stripe payment and subscription workflows with replay-safe webhooks, Angular/Vue/Django applications, serverless utilities on AWS Lambda, and Docker-first development workflows.',
      es: 'Entrega de SaaS de punta a punta para clientes independientes: pagos y suscripciones con Stripe con webhooks a prueba de replays, aplicaciones Angular/Vue/Django, utilidades serverless en AWS Lambda y flujos de desarrollo Docker-first.',
    },
    tags: ['Stripe', 'Angular', 'Vue.js', 'Django', 'AWS Lambda', 'Docker', 'MongoDB'],
  },
  {
    kind: 'education',
    organization: 'BEDU',
    role: { en: 'Diploma in Data Science', es: 'Diplomado en Ciencia de Datos' },
    period: { en: '2025', es: '2025' },
    summary: {
      en: 'SQL, MongoDB, Python, Pandas, NumPy, Seaborn, TensorFlow.',
      es: 'SQL, MongoDB, Python, Pandas, NumPy, Seaborn, TensorFlow.',
    },
    tags: ['Python', 'Pandas', 'TensorFlow', 'SQL'],
  },
  {
    kind: 'education',
    organization: 'Coderhouse · Platzi',
    role: {
      en: 'Full-Stack Development · React & Angular specializations',
      es: 'Desarrollo Full-Stack · Especializaciones en React y Angular',
    },
    period: { en: '2023', es: '2023' },
    summary: {
      en: 'Full-stack track (Angular, SQL, MongoDB, Spring Boot), backend with Node.js & Stripe, plus framework specializations.',
      es: 'Ruta full-stack (Angular, SQL, MongoDB, Spring Boot), backend con Node.js y Stripe, más especializaciones de frameworks.',
    },
    tags: ['Angular', 'React', 'Node.js', 'Spring Boot', 'MongoDB'],
  },
];
