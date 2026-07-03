import { Project } from './models';

/**
 * Portfolio projects. Edit freely — components render whatever lives here.
 * Professional entries are written as case studies: no private code, no
 * confidential specifics. Metrics mirror the master CV.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'b2b-trade-platform',
    title: 'B2B Trade Intelligence Platform',
    kind: 'professional',
    year: '2026 — present',
    glyph: '⇄',
    accent: '#22d3ee',
    featured: true,
    metric: { en: '25k+ LOC monolith', es: 'monolito de 25k+ líneas' },
    tagline: {
      en: 'Feature development and hardening for a live B2B platform matching exporters and importers.',
      es: 'Desarrollo y endurecimiento de una plataforma B2B en producción que conecta exportadores e importadores.',
    },
    description: [
      {
        en: 'Simultrayd runs a trade-intelligence platform where exporters and importers get matched into live trade opportunities. I work across the whole surface of a 25k+ line JavaScript platform monolith: user-facing features, authentication flows, and the defensive layers that keep a commercial marketplace safe.',
        es: 'Simultrayd opera una plataforma de inteligencia comercial donde exportadores e importadores se conectan en oportunidades de comercio reales. Trabajo en toda la superficie de un monolito JavaScript de más de 25k líneas: features de cara al usuario, flujos de autenticación y las capas defensivas que mantienen seguro un marketplace comercial.',
      },
      {
        en: 'Highlights include a real-time chat between trade parties, a document-management module with dual manager approval gating payments, magic-link authentication resilient to email security scanners, catalog-backed commodity matching, and anti-abuse defenses for premium features.',
        es: 'Destacan un chat en tiempo real entre las partes de un trade, un módulo de gestión documental con aprobación dual que habilita pagos, autenticación por magic links resistente a escáneres de seguridad de email, matching de commodities respaldado por catálogo y defensas anti-abuso para features premium.',
      },
    ],
    highlights: [
      { en: 'Real-time chat and notifications between trade counterparts', es: 'Chat y notificaciones en tiempo real entre contrapartes' },
      { en: 'Document approval workflow gating Stripe payments', es: 'Flujo de aprobación documental que habilita pagos con Stripe' },
      { en: 'Auth hardening: magic links, session guards, scanner-proof flows', es: 'Endurecimiento de auth: magic links, guards de sesión, flujos a prueba de escáneres' },
      { en: 'Catalog-backed matching over an 8,258-item commodity catalog', es: 'Matching respaldado por un catálogo de 8,258 commodities' },
      { en: 'Five defensive layers against content theft on premium tiers', es: 'Cinco capas defensivas contra robo de contenido en niveles premium' },
    ],
    stack: ['JavaScript', 'TypeScript', 'REST APIs', 'Stripe', 'SendGrid', 'Twilio'],
    links: [],
  },
  {
    slug: 'sheets-data-engine',
    title: 'Spreadsheet Sync Engine at 157k Rows',
    kind: 'professional',
    year: '2026',
    glyph: '▦',
    accent: '#ec4899',
    featured: true,
    metric: { en: '46× faster', es: '46× más rápido' },
    tagline: {
      en: 'Apps Script sync engine keeping a 157k-row operational dataset consistent across teams.',
      es: 'Motor de sincronización en Apps Script que mantiene consistente un dataset operativo de 157k filas entre equipos.',
    },
    description: [
      {
        en: 'A trading operations team runs its targeting workflow on Google Sheets — at a scale Sheets was never meant for. I built a cell-level sync engine in Apps Script that propagates edits between a working pipeline and a 157k-row master dataset with header-name mapping, dirty queues, conflict-safe merges and incremental high-water-mark pulls.',
        es: 'Un equipo de operaciones de trading corre su workflow de targeting sobre Google Sheets — a una escala para la que Sheets no fue diseñado. Construí un motor de sincronización a nivel celda en Apps Script que propaga ediciones entre un pipeline de trabajo y un master de 157k filas con mapeo por nombre de encabezado, colas de cambios sucios, merges seguros ante conflictos y pulls incrementales por high-water-mark.',
      },
      {
        en: 'Performance work took the staging sweep from 45–60 seconds down to about 10, and a row-move hot path from 29.6 s to 0.64 s — a 46× win. The system ships with mutex locks, 1-row canaries, before-image logs, staged rollouts and documented rollback paths: production-engineering discipline applied to a spreadsheet.',
        es: 'El trabajo de rendimiento llevó el barrido de staging de 45–60 segundos a unos 10, y un hot path de movimiento de filas de 29.6 s a 0.64 s — una mejora de 46×. El sistema incluye locks tipo mutex, canaries de 1 fila, logs de imagen previa, despliegues por etapas y rutas de rollback documentadas: disciplina de ingeniería de producción aplicada a una hoja de cálculo.',
      },
    ],
    highlights: [
      { en: 'Row-move hot path: 29.6 s → 0.64 s (46×)', es: 'Hot path de movimiento de filas: 29.6 s → 0.64 s (46×)' },
      { en: 'Staging sweep: 45–60 s → ~10 s over 157k rows', es: 'Barrido de staging: 45–60 s → ~10 s sobre 157k filas' },
      { en: 'Mutex locks, canary rollouts, before-image logs, rollback snapshots', es: 'Locks mutex, despliegues canary, logs de imagen previa, snapshots de rollback' },
      { en: 'Zero-downtime adoption by a non-technical team', es: 'Adopción sin interrupciones por un equipo no técnico' },
    ],
    stack: ['Google Apps Script', 'clasp', 'Sheets API', 'JavaScript'],
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
    metric: { en: '10k+ ops/day', es: '10k+ ops/día' },
    tagline: {
      en: 'Data enrichment and outreach pipelines processing tens of thousands of records.',
      es: 'Pipelines de enriquecimiento de datos y outreach procesando decenas de miles de registros.',
    },
    description: [
      {
        en: 'Built and operate the automation backbone of a B2B lead engine: multi-API enrichment pipelines (Google Places, Apollo, Hunter, Twilio) that clean, dedupe and enrich company records at scale, orchestrated first in Make and later migrated to n8n blueprints with caching, batching, schema validation and JWT/HMAC-style auth.',
        es: 'Construí y opero la columna vertebral de automatización de un motor de leads B2B: pipelines de enriquecimiento multi-API (Google Places, Apollo, Hunter, Twilio) que limpian, deduplican y enriquecen registros de empresas a escala, orquestados primero en Make y luego migrados a blueprints de n8n con caché, batching, validación de esquemas y auth estilo JWT/HMAC.',
      },
      {
        en: 'The data side reduced 83,320 raw records to 65,906 unique companies and 39,333 enrichment-ready rows with Python; the outreach side pushes campaigns through 150+ sender accounts with deliverability controls and webhook-driven state sync — all designed around hard API quota ceilings.',
        es: 'El lado de datos redujo 83,320 registros crudos a 65,906 empresas únicas y 39,333 filas listas para enriquecimiento con Python; el lado de outreach opera campañas sobre más de 150 cuentas emisoras con controles de entregabilidad y sincronización de estado por webhooks — todo diseñado alrededor de techos duros de cuota de API.',
      },
    ],
    highlights: [
      { en: '83,320 raw records → 39,333 enrichment-ready rows', es: '83,320 registros crudos → 39,333 filas listas para enriquecer' },
      { en: 'Make → n8n migration of seven production workflows', es: 'Migración Make → n8n de siete workflows en producción' },
      { en: '10k+ automated outreach operations per day at peak', es: 'Más de 10k operaciones de outreach automatizadas al día en pico' },
      { en: '27,937 catalog connections backfilled with zero reported failures', es: '27,937 conexiones de catálogo cargadas con cero fallas reportadas' },
    ],
    stack: ['n8n', 'Make', 'Python', 'Node.js', 'Supabase', 'SendGrid'],
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
    metric: { en: '44-point audit passed', es: 'auditoría de 44 puntos' },
    tagline: {
      en: 'Full architecture design for migrating a low-code platform to a serverless AWS stack.',
      es: 'Diseño de arquitectura completo para migrar una plataforma low-code a un stack serverless en AWS.',
    },
    description: [
      {
        en: 'Designed the complete target architecture for migrating a production B2B platform off a low-code backend and into AWS with a strangler-fig approach: Cognito custom auth, HTTP API Gateway + Lambda in TypeScript, Aurora Serverless v2 Postgres with Drizzle and Zod, and repository feature flags for gradual cutover.',
        es: 'Diseñé la arquitectura objetivo completa para migrar una plataforma B2B en producción fuera de un backend low-code hacia AWS con un enfoque strangler-fig: auth custom con Cognito, HTTP API Gateway + Lambda en TypeScript, Aurora Serverless v2 Postgres con Drizzle y Zod, y feature flags a nivel repositorio para un cutover gradual.',
      },
      {
        en: 'The design spans 14 modules with full diagram coverage — data model, auth flows, real-time messaging, payment processing, and a hybrid automation layer — and survived a 44-item architecture audit before being greenlit for implementation.',
        es: 'El diseño abarca 14 módulos con cobertura completa de diagramas — modelo de datos, flujos de auth, mensajería en tiempo real, procesamiento de pagos y una capa híbrida de automatización — y superó una auditoría de arquitectura de 44 puntos antes de aprobarse para implementación.',
      },
    ],
    highlights: [
      { en: '14-module architecture with full diagram coverage', es: 'Arquitectura de 14 módulos con diagramas completos' },
      { en: 'Cognito + API Gateway + Aurora Serverless v2 + Drizzle + Zod', es: 'Cognito + API Gateway + Aurora Serverless v2 + Drizzle + Zod' },
      { en: 'Strangler-fig migration strategy with feature flags', es: 'Estrategia de migración strangler-fig con feature flags' },
      { en: '44 audit findings resolved before implementation', es: '44 hallazgos de auditoría resueltos antes de implementar' },
    ],
    stack: ['AWS', 'Cognito', 'Lambda', 'Aurora Postgres', 'Drizzle', 'Angular'],
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
    metric: { en: 'LLM-powered', es: 'con LLM' },
    tagline: {
      en: 'AI-assisted lyric and script studio: Angular front end, Django API, LLM integration, dockerized.',
      es: 'Estudio de letras y guiones asistido por IA: front en Angular, API en Django, integración LLM, dockerizado.',
    },
    description: [
      {
        en: 'A creative-writing companion for songwriters — my audio-engineering background meeting my day job. The Angular front end offers a distraction-free writing space; the Django backend integrates an LLM for lyric and script generation and analysis, packaged with Docker and deployed on AWS (Lambda, S3).',
        es: 'Un compañero de escritura creativa para compositores — mi formación en ingeniería de audio encontrándose con mi trabajo actual. El front en Angular ofrece un espacio de escritura sin distracciones; el backend en Django integra un LLM para generación y análisis de letras y guiones, empaquetado con Docker y desplegado en AWS (Lambda, S3).',
      },
    ],
    highlights: [
      { en: 'LLM integration for generation and analysis of lyrics/scripts', es: 'Integración LLM para generación y análisis de letras/guiones' },
      { en: 'Angular SPA + Django REST API in separate repos', es: 'SPA en Angular + API REST en Django en repos separados' },
      { en: 'Dockerized, deployed on AWS Lambda + S3', es: 'Dockerizado, desplegado en AWS Lambda + S3' },
    ],
    stack: ['Angular', 'TypeScript', 'Django', 'Python', 'Docker', 'AWS'],
    links: [
      { kind: 'github', url: 'https://github.com/Toydrum/LyricMaker' },
      { kind: 'github', url: 'https://github.com/Toydrum/LyricMaker-backend' },
    ],
  },
  {
    slug: 'saas-billing',
    title: 'SaaS Billing System',
    kind: 'personal',
    year: '2023',
    glyph: '◆',
    accent: '#34d399',
    metric: { en: 'replay-safe webhooks', es: 'webhooks a prueba de replays' },
    tagline: {
      en: 'Freelance billing platform: Stripe subscriptions, durable webhook workflows, MongoDB event storage.',
      es: 'Plataforma de facturación freelance: suscripciones Stripe, webhooks durables, almacenamiento de eventos en MongoDB.',
    },
    description: [
      {
        en: 'A billing platform built end to end as freelance work: Django + Vue.js, Stripe subscription lifecycle management with replay-safe webhook handling, reconciliation logic, analytics-friendly event storage in MongoDB, and deployment on AWS EC2/S3.',
        es: 'Una plataforma de facturación construida de punta a punta como trabajo freelance: Django + Vue.js, gestión del ciclo de vida de suscripciones Stripe con manejo de webhooks a prueba de replays, lógica de reconciliación, almacenamiento de eventos amigable para analítica en MongoDB y despliegue en AWS EC2/S3.',
      },
    ],
    highlights: [
      { en: 'Stripe subscriptions with replay-safe, durable webhooks', es: 'Suscripciones Stripe con webhooks durables a prueba de replays' },
      { en: 'Reconciliation logic + event storage for analytics', es: 'Lógica de reconciliación + almacenamiento de eventos para analítica' },
      { en: 'Django + Vue.js, deployed on AWS EC2/S3', es: 'Django + Vue.js, desplegado en AWS EC2/S3' },
    ],
    stack: ['Django', 'Vue.js', 'Stripe', 'MongoDB', 'AWS'],
    links: [],
  },
  {
    slug: 'zoolandingpage',
    title: 'ZoolandingPage',
    kind: 'personal',
    year: '2026',
    glyph: '◉',
    accent: '#f59e0b',
    featured: true,
    metric: { en: 'live in production', es: 'en producción' },
    tagline: {
      en: 'Conversion-focused landing-page product for the Mexican market — live on its own domain, built with Angular 22.',
      es: 'Producto de landing pages enfocado en conversión para el mercado mexicano — vivo en su propio dominio, construido con Angular 22.',
    },
    description: [
      {
        en: 'A commercial landing-page product that turns visits into clients: conversion-oriented copy, analytics-ready structure and a themable design system driven by CSS custom properties (ngx-angora-css). Built with Angular 22 and running in production at zoolandingpage.com.mx.',
        es: 'Un producto comercial de landing pages que convierte visitas en clientes: copy orientado a conversión, estructura lista para analítica y un sistema de diseño tematizable manejado con CSS custom properties (ngx-angora-css). Construido con Angular 22 y corriendo en producción en zoolandingpage.com.mx.',
      },
      // TODO(Hector): add a line about your role / the story behind the product.
    ],
    highlights: [
      { en: 'Angular 22 in production on a custom domain', es: 'Angular 22 en producción con dominio propio' },
      { en: 'Runtime-themable design system via CSS custom properties', es: 'Sistema de diseño tematizable en runtime vía CSS custom properties' },
      { en: 'Conversion-focused, Spanish-first market fit', es: 'Enfocado en conversión, pensado primero para el mercado hispano' },
    ],
    stack: ['Angular 22', 'TypeScript', 'ngx-angora-css', 'SCSS'],
    links: [{ kind: 'demo', url: 'https://zoolandingpage.com.mx/' }],
  },
  {
    slug: 'rodemap2u',
    title: 'RodeMap2U',
    kind: 'personal',
    year: '2026',
    glyph: '❀',
    accent: '#4ade80',
    featured: true,
    metric: { en: 'Live · offline-first', es: 'En vivo · offline-first' },
    tagline: {
      en: 'A local-first PWA for neurodivergent minds: goals grow as living trees, and missed deadlines branch into new paths.',
      es: 'Una PWA local-first para mentes neurodivergentes: las metas crecen como árboles vivos y las fechas perdidas brotan en caminos nuevos.',
    },
    description: [
      {
        en: 'A goal map that refuses shame mechanics. Every session opens with one gentle question — "Where do you feel you are?" — and a missed deadline is never a failure: it becomes a golden branch point where alternative paths sprout. Rebuilt in 2026 from a 2024 idea into a full shipped product: check-in ritual, forest of real data-drawn trees, focus timer, in-app guide, archive with automatic backups.',
        es: 'Un mapa de metas que rechaza las mecánicas de vergüenza. Cada sesión abre con una pregunta amable — "¿Dónde sientes que estás?" — y una fecha perdida nunca es un fracaso: se convierte en un nudo dorado del que brotan caminos alternativos. Reconstruida en 2026 desde una idea de 2024 hasta un producto completo: ritual de check-in, bosque de árboles dibujados con datos reales, temporizador de enfoque, guía integrada y archivo con respaldos automáticos.',
      },
      {
        en: 'Everything is hand-rolled, zero UI libraries. The trees are an SVG rendering engine built from scratch: a pure layout function with deterministic organic jitter, tapered bezier limbs, per-tree flower species, pointer pan and pinch zoom, full keyboard navigation. The scenery is alive too — the sky mirrors your latest check-in with drifting fog banks, soft drizzle or a storm with slow lightning, all photosensitivity-safe and fully still under reduced motion.',
        es: 'Todo hecho a mano, cero librerías de UI. Los árboles son un motor de dibujo SVG desde cero: una función de layout pura con variación orgánica determinista, ramas bezier con grosor cónico, especies de flor por árbol, pan y pinch-zoom, navegación completa por teclado. El escenario también vive — el cielo refleja tu último check-in con bancos de niebla que derivan, llovizna suave o tormenta con relámpagos lentos, todo seguro para fotosensibilidad y totalmente quieto bajo reduce-motion.',
      },
      {
        en: 'Local-first architecture: a ~100-line IndexedDB wrapper with signal-based repositories, atomic multi-record transactions, cross-tab sync via BroadcastChannel, and sync-ready records (revisions + tombstones) prepared for an optional cloud future. Installable offline as a PWA with gentle in-app updates, bilingual ES/EN with compiler-enforced dictionary parity, dyslexia-friendly font option.',
        es: 'Arquitectura local-first: un wrapper de IndexedDB de ~100 líneas con repositorios basados en signals, transacciones atómicas multi-registro, sincronización entre pestañas vía BroadcastChannel y registros sync-ready (revisiones + tombstones) preparados para una nube opcional. Instalable offline como PWA con actualizaciones amables, bilingüe ES/EN con paridad de diccionarios forzada por el compilador y fuente amigable para dislexia.',
      },
    ],
    highlights: [
      {
        en: 'Hand-rolled SVG tree-rendering engine — zero UI libraries',
        es: 'Motor de dibujo de árboles SVG hecho a mano — cero librerías de UI',
      },
      {
        en: 'Branch-on-miss: failure modeled as growth, atomically',
        es: 'Branch-on-miss: el fallo modelado como crecimiento, atómicamente',
      },
      {
        en: 'Local-first IndexedDB + signals, sync-ready data model',
        es: 'Local-first con IndexedDB + signals, modelo de datos sync-ready',
      },
      {
        en: 'Accessibility-first: reduced motion, keyboard tree, dyslexia font',
        es: 'Accesibilidad primero: reduce-motion, árbol por teclado, fuente para dislexia',
      },
      {
        en: 'Installable offline PWA, bilingual with typed dictionary parity',
        es: 'PWA instalable offline, bilingüe con paridad de diccionarios tipada',
      },
    ],
    stack: ['Angular 22', 'TypeScript', 'Signals', 'SVG', 'IndexedDB', 'PWA', 'SCSS'],
    links: [
      { kind: 'demo', url: 'https://toydrum.github.io/RodeMap2U/' },
      { kind: 'github', url: 'https://github.com/Toydrum/RodeMap2U' },
    ],
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
    metric: { en: 'zero UI libraries', es: 'cero librerías de UI' },
    tagline: {
      en: 'The site you are looking at — Angular 21, signals, zoneless, zero UI libraries.',
      es: 'El sitio que estás viendo — Angular 21, signals, zoneless, cero librerías de UI.',
    },
    description: [
      {
        en: 'Built as a showcase of modern Angular: standalone components, signal-based state, zoneless change detection, deferred loading and the View Transitions API. Every effect — the particle field, the typewriter, the tilt cards, the terminal — is hand-rolled, no UI or animation libraries involved. The repo is public: the site itself is a code sample.',
        es: 'Construido como escaparate de Angular moderno: componentes standalone, estado con signals, detección de cambios zoneless, carga diferida y la API de View Transitions. Cada efecto — el campo de partículas, el typewriter, las cards con tilt, la terminal — está hecho a mano, sin librerías de UI ni animación. El repo es público: el sitio mismo es una muestra de código.',
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
