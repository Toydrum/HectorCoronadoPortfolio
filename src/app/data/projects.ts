import { Project } from './models';

/**
 * Portfolio projects. Edit freely — components render whatever lives here.
 * Professional entries are written as case studies: no private code, no
 * confidential specifics.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'b2b-trade-platform',
    title: 'B2B Trade Intelligence Platform',
    kind: 'professional',
    year: '2024 — present',
    glyph: '⇄',
    accent: '#22d3ee',
    featured: true,
    tagline: {
      en: 'Feature development and hardening for a live B2B platform matching exporters and importers.',
      es: 'Desarrollo y endurecimiento de una plataforma B2B en producción que conecta exportadores e importadores.',
    },
    description: [
      {
        en: 'Simultrayd runs a trade-intelligence platform where exporters and importers get matched into live trade opportunities. I work across the whole surface: user-facing features, authentication flows, and the defensive layers that keep a commercial marketplace safe.',
        es: 'Simultrayd opera una plataforma de inteligencia comercial donde exportadores e importadores se conectan en oportunidades de comercio reales. Trabajo en toda la superficie: features de cara al usuario, flujos de autenticación y las capas defensivas que mantienen seguro un marketplace comercial.',
      },
      {
        en: 'Highlights include a real-time chat between trade parties, a document-management module with dual manager approval gating payments, magic-link authentication resilient to email security scanners, and anti-abuse defenses for premium features.',
        es: 'Destacan un chat en tiempo real entre las partes de un trade, un módulo de gestión documental con aprobación dual que habilita pagos, autenticación por magic links resistente a escáneres de seguridad de email y defensas anti-abuso para features premium.',
      },
    ],
    highlights: [
      { en: 'Real-time chat and notifications between trade counterparts', es: 'Chat y notificaciones en tiempo real entre contrapartes' },
      { en: 'Document approval workflow gating Stripe payments', es: 'Flujo de aprobación documental que habilita pagos con Stripe' },
      { en: 'Auth hardening: magic links, session guards, scanner-proof flows', es: 'Endurecimiento de auth: magic links, guards de sesión, flujos a prueba de escáneres' },
      { en: 'Five defensive layers against content theft on premium tiers', es: 'Cinco capas defensivas contra robo de contenido en niveles premium' },
    ],
    stack: ['JavaScript', 'TypeScript', 'REST APIs', 'Stripe', 'SendGrid', 'Twilio'],
    links: [],
  },
  {
    slug: 'aws-serverless-architecture',
    title: 'Serverless AWS Backend Architecture',
    kind: 'professional',
    year: '2026',
    glyph: '☁',
    accent: '#8b5cf6',
    featured: true,
    tagline: {
      en: 'Full architecture design for migrating a low-code platform to a serverless AWS stack.',
      es: 'Diseño de arquitectura completo para migrar una plataforma low-code a un stack serverless en AWS.',
    },
    description: [
      {
        en: 'Designed the complete target architecture for migrating a production B2B platform off a low-code backend and into AWS: Cognito for identity, HTTP API Gateway, Lambda, and Aurora Serverless v2 Postgres with Drizzle ORM.',
        es: 'Diseñé la arquitectura objetivo completa para migrar una plataforma B2B en producción fuera de un backend low-code hacia AWS: Cognito para identidad, HTTP API Gateway, Lambda y Aurora Serverless v2 Postgres con Drizzle ORM.',
      },
      {
        en: 'The design spans 14 modules with diagrams — data model, auth flows, real-time messaging, payment processing, and a hybrid automation layer — and survived a 44-item architecture audit before being greenlit for implementation.',
        es: 'El diseño abarca 14 módulos con diagramas — modelo de datos, flujos de auth, mensajería en tiempo real, procesamiento de pagos y una capa híbrida de automatización — y superó una auditoría de arquitectura de 44 puntos antes de aprobarse para implementación.',
      },
    ],
    highlights: [
      { en: '14-module architecture with full diagram coverage', es: 'Arquitectura de 14 módulos con diagramas completos' },
      { en: 'Cognito + API Gateway + Aurora Serverless v2 + Drizzle', es: 'Cognito + API Gateway + Aurora Serverless v2 + Drizzle' },
      { en: '44 audit findings resolved before implementation', es: '44 hallazgos de auditoría resueltos antes de implementar' },
      { en: 'Hybrid strategy keeping automations running during migration', es: 'Estrategia híbrida que mantiene las automatizaciones vivas durante la migración' },
    ],
    stack: ['AWS', 'Cognito', 'Lambda', 'Aurora Postgres', 'Drizzle', 'Angular'],
    links: [],
  },
  {
    slug: 'automation-pipelines',
    title: 'High-Volume Automation Pipelines',
    kind: 'professional',
    year: '2025 — present',
    glyph: '⚙',
    accent: '#34d399',
    featured: true,
    tagline: {
      en: 'Data enrichment and outreach pipelines processing tens of thousands of records.',
      es: 'Pipelines de enriquecimiento de datos y outreach procesando decenas de miles de registros.',
    },
    description: [
      {
        en: 'Built and operated the automation backbone of a B2B lead engine: multi-API enrichment pipelines (Google Places, Apollo, Hunter, Twilio) that clean, dedupe and enrich company records at scale, orchestrated first in Make and later migrated to n8n.',
        es: 'Construí y opero la columna vertebral de automatización de un motor de leads B2B: pipelines de enriquecimiento multi-API (Google Places, Apollo, Hunter, Twilio) que limpian, deduplican y enriquecen registros de empresas a escala, orquestados primero en Make y luego migrados a n8n.',
      },
      {
        en: 'The outreach side pushes campaigns through 150+ sender accounts with deliverability controls, webhook-driven state sync, and a token-based auth service issued from n8n itself — all designed around hard API quota ceilings.',
        es: 'El lado de outreach opera campañas sobre más de 150 cuentas emisoras con controles de entregabilidad, sincronización de estado por webhooks y un servicio de auth por tokens emitido desde el propio n8n — todo diseñado alrededor de techos duros de cuota de API.',
      },
    ],
    highlights: [
      { en: '80k+ records deduped, filtered and enriched end-to-end', es: 'Más de 80k registros deduplicados, filtrados y enriquecidos de punta a punta' },
      { en: 'Make → n8n migration of seven production workflows', es: 'Migración Make → n8n de siete workflows en producción' },
      { en: '10k+ automated outreach operations per day at peak', es: 'Más de 10k operaciones de outreach automatizadas al día en pico' },
      { en: 'Quota-aware design: batching, caching, webhook-driven sync', es: 'Diseño consciente de cuotas: batching, caché y sync por webhooks' },
    ],
    stack: ['n8n', 'Make', 'Node.js', 'Supabase', 'SendGrid', 'REST APIs'],
    links: [],
  },
  {
    slug: 'sheets-data-engine',
    title: 'Spreadsheet Data Engine at 157k Rows',
    kind: 'professional',
    year: '2026',
    glyph: '▦',
    accent: '#ec4899',
    tagline: {
      en: 'Apps Script sync engine keeping a 157k-row operational dataset consistent across teams.',
      es: 'Motor de sincronización en Apps Script que mantiene consistente un dataset operativo de 157k filas entre equipos.',
    },
    description: [
      {
        en: 'A trading operations team runs its targeting workflow on Google Sheets — at a scale Sheets was never meant for. I built a cell-level sync engine in Apps Script that propagates edits between a working pipeline and a 157k-row master dataset with dirty-tracking, conflict-safe merges and incremental high-water-mark pulls.',
        es: 'Un equipo de operaciones de trading corre su workflow de targeting sobre Google Sheets — a una escala para la que Sheets no fue diseñado. Construí un motor de sincronización a nivel celda en Apps Script que propaga ediciones entre un pipeline de trabajo y un master de 157k filas con dirty-tracking, merges seguros ante conflictos y pulls incrementales por high-water-mark.',
      },
      {
        en: 'The system includes self-configuring satellite scripts, mutex locks against concurrent runs, staged rollouts with canary validation, and documented rollback paths — production-engineering discipline applied to a spreadsheet.',
        es: 'El sistema incluye scripts satélite auto-configurables, locks tipo mutex contra ejecuciones concurrentes, despliegues por etapas con validación canary y rutas de rollback documentadas — disciplina de ingeniería de producción aplicada a una hoja de cálculo.',
      },
    ],
    highlights: [
      { en: 'Cell-level targeted sync in ~10s over 157k rows', es: 'Sync dirigido a nivel celda en ~10s sobre 157k filas' },
      { en: '46× performance win on the assembly hot path', es: 'Mejora de rendimiento de 46× en el hot path de ensamblado' },
      { en: 'Mutex locks, canary rollouts and rollback snapshots', es: 'Locks mutex, despliegues canary y snapshots de rollback' },
      { en: 'Zero-downtime adoption by a non-technical team', es: 'Adopción sin interrupciones por un equipo no técnico' },
    ],
    stack: ['Google Apps Script', 'clasp', 'Sheets API', 'JavaScript'],
    links: [],
  },
  {
    slug: 'lyricmaker',
    title: 'LyricMaker',
    kind: 'personal',
    year: '2025',
    glyph: '♪',
    accent: '#22d3ee',
    featured: true,
    tagline: {
      en: 'Full-stack lyric-writing studio: Angular front end, Python API, fully dockerized.',
      es: 'Estudio full-stack para escribir letras: front en Angular, API en Python, todo dockerizado.',
    },
    description: [
      {
        en: 'A creative-writing companion for songwriters. The Angular front end offers a distraction-free editor; the Python backend serves the API, packaged with Docker for one-command local setup and deployment.',
        es: 'Un compañero de escritura creativa para compositores. El front en Angular ofrece un editor sin distracciones; el backend en Python sirve el API, empaquetado con Docker para levantarlo y desplegarlo con un comando.',
      },
      // TODO(Hector): add a paragraph about what LyricMaker does that you're proudest of.
    ],
    highlights: [
      { en: 'Angular SPA with SCSS component architecture', es: 'SPA en Angular con arquitectura de componentes SCSS' },
      { en: 'Python REST backend, containerized with Docker', es: 'Backend REST en Python, contenedorizado con Docker' },
      { en: 'Split repos with independent deploy lifecycles', es: 'Repos separados con ciclos de deploy independientes' },
    ],
    stack: ['Angular', 'TypeScript', 'Python', 'Docker', 'SCSS'],
    links: [
      { kind: 'github', url: 'https://github.com/Toydrum/LyricMaker' },
      { kind: 'github', url: 'https://github.com/Toydrum/LyricMaker-backend' },
    ],
  },
  {
    slug: 'rodemap2u',
    title: 'RodeMap2U',
    kind: 'personal',
    year: '2024',
    glyph: '◈',
    accent: '#8b5cf6',
    tagline: {
      en: 'Roadmap-building web app for planning and sharing learning paths.',
      es: 'Web app para construir, planear y compartir rutas de aprendizaje.',
    },
    description: [
      {
        en: 'A TypeScript web application for laying out roadmaps — sequences of goals and resources — and sharing them. Built end to end as a personal product experiment.',
        es: 'Una aplicación web en TypeScript para trazar roadmaps — secuencias de metas y recursos — y compartirlos. Construida de punta a punta como experimento personal de producto.',
      },
      // TODO(Hector): flesh out what RodeMap2U does — this is a placeholder summary.
    ],
    highlights: [
      { en: 'TypeScript across the stack', es: 'TypeScript en todo el stack' },
      { en: 'Designed, built and shipped solo', es: 'Diseñada, construida y publicada en solitario' },
    ],
    stack: ['TypeScript', 'JavaScript', 'HTML', 'SCSS'],
    links: [{ kind: 'github', url: 'https://github.com/Toydrum/RodeMap2U' }],
  },
  {
    slug: 'angular-ecommerce',
    title: 'Angular E-commerce (Course Final)',
    kind: 'personal',
    year: '2024',
    glyph: '▲',
    accent: '#34d399',
    tagline: {
      en: 'Final project for an Angular specialization: catalog, cart and auth flows.',
      es: 'Proyecto final de una especialización en Angular: catálogo, carrito y flujos de auth.',
    },
    description: [
      {
        en: 'Capstone project for an Angular course: a storefront with product catalog, cart state management, role-based views and form-driven checkout, built with Angular and SCSS.',
        es: 'Proyecto integrador de un curso de Angular: una tienda con catálogo de productos, manejo de estado del carrito, vistas por rol y checkout con formularios, construida con Angular y SCSS.',
      },
    ],
    highlights: [
      { en: 'Reactive forms with validation', es: 'Formularios reactivos con validación' },
      { en: 'Role-based routing and guards', es: 'Ruteo por roles y guards' },
      { en: 'Service-based state management', es: 'Manejo de estado basado en servicios' },
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    links: [{ kind: 'github', url: 'https://github.com/Toydrum/1PFCoronadoVargas' }],
  },
  {
    slug: 'this-portfolio',
    title: 'This Portfolio',
    kind: 'personal',
    year: '2026',
    glyph: '⌘',
    accent: '#ec4899',
    tagline: {
      en: 'The site you are looking at — Angular 21, signals, zoneless, zero UI libraries.',
      es: 'El sitio que estás viendo — Angular 21, signals, zoneless, cero librerías de UI.',
    },
    description: [
      {
        en: 'Built as a showcase of modern Angular: standalone components, signal-based state, zoneless change detection, deferred loading and the View Transitions API. Every effect — the particle field, the typewriter, the tilt cards, the terminal — is hand-rolled, no UI or animation libraries involved.',
        es: 'Construido como escaparate de Angular moderno: componentes standalone, estado con signals, detección de cambios zoneless, carga diferida y la API de View Transitions. Cada efecto — el campo de partículas, el typewriter, las cards con tilt, la terminal — está hecho a mano, sin librerías de UI ni animación.',
      },
      {
        en: 'Try pressing the ~ key. Or the Konami code, if you know it.',
        es: 'Prueba presionar la tecla ~. O el código Konami, si te lo sabes.',
      },
    ],
    highlights: [
      { en: 'Canvas particle field reacting to the cursor', es: 'Campo de partículas en canvas que reacciona al cursor' },
      { en: 'Runtime EN/ES switch built on signals', es: 'Cambio EN/ES en runtime construido sobre signals' },
      { en: 'Hidden interactive terminal with real commands', es: 'Terminal interactiva oculta con comandos reales' },
      { en: 'Deployed to GitHub Pages via GitHub Actions CI', es: 'Desplegado a GitHub Pages vía CI de GitHub Actions' },
    ],
    stack: ['Angular 21', 'TypeScript', 'Signals', 'SCSS', 'GitHub Actions'],
    links: [{ kind: 'github', url: 'https://github.com/Toydrum/HectorCoronadoPortfolio' }],
  },
];
