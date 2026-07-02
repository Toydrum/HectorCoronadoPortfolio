import { Injectable, computed, effect, signal } from '@angular/core';
import { EN, Dict } from '../data/i18n/en';
import { ES } from '../data/i18n/es';
import { Localized } from '../data/models';

export type Lang = 'en' | 'es';

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(initialLang());

  /** The whole active dictionary — templates read `i18n.t().section.key`. */
  readonly t = computed<Dict>(() => (this.lang() === 'es' ? ES : EN));

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable (private mode) — the toggle still works in-session */
      }
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((l) => (l === 'en' ? 'es' : 'en'));
  }

  /** Resolve a bilingual data field against the active language. */
  tr(text: Localized): string {
    return text[this.lang()];
  }
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}
