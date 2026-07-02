/** A string available in both site languages. */
export interface Localized {
  en: string;
  es: string;
}

export type ProjectKind = 'personal' | 'professional';

export interface ProjectLink {
  kind: 'github' | 'demo';
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  year: string;
  tagline: Localized;
  /** Case-study body, one entry per paragraph. */
  description: Localized[];
  highlights: Localized[];
  stack: string[];
  links: ProjectLink[];
  /** Monogram shown on the card's gradient band. */
  glyph: string;
  /** Card accent (CSS color); defaults to cyan. */
  accent?: string;
  /** Impact badge shown on the card band, e.g. "46× faster". */
  metric?: Localized;
  featured?: boolean;
}

export interface Skill {
  name: string;
  /** 0–100, drives the animated bar. */
  level: number;
}

export interface SkillGroup {
  name: Localized;
  glyph: string;
  skills: Skill[];
}

export interface ExperienceItem {
  kind: 'work' | 'education';
  organization: string;
  role: Localized;
  period: Localized;
  summary: Localized;
  tags: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: Localized;
}

export interface Profile {
  name: string;
  /** Legal/full name — used in JSON-LD and the CV, not in the hero. */
  fullName: string;
  /** Hero headline under the name. */
  headline: Localized;
  email: string;
  location: Localized;
  github: string;
  githubUser: string;
  linkedin: string;
  /** null hides every "Download CV" button. */
  cvUrl: string | null;
  /** Drives the pulsing "open to opportunities" badge. */
  openToWork: boolean;
  roles: Localized[];
  /** Compact stack chips shown in the hero. */
  heroStack: string[];
}
