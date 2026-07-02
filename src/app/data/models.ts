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
  email: string;
  location: Localized;
  github: string;
  githubUser: string;
  linkedin: string;
  cvUrl: string;
  roles: Localized[];
}
