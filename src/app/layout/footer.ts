import { Component, VERSION, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container inner">
        <p class="mono built">
          {{ i18n.t().footer.built }} <span class="ver">v{{ version }}</span>
        </p>
        <div class="right mono">
          <a [href]="sourceUrl" target="_blank" rel="noopener">{{ i18n.t().footer.source }}</a>
          <span class="hint" aria-hidden="true">{{ i18n.t().footer.hint }}</span>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      padding: 1.6rem 0;
      margin-top: 2rem;
    }
    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .built {
      color: var(--text-faint);
      font-size: 0.78rem;
      margin: 0;
    }
    .ver {
      color: var(--cyan);
    }
    .right {
      display: flex;
      gap: 1.2rem;
      font-size: 0.78rem;
    }
    .hint {
      color: var(--text-faint);
      opacity: 0.55;
    }
  `,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly version = VERSION.major + '.' + VERSION.minor;
  protected readonly sourceUrl = PROFILE.github + '/HectorCoronadoPortfolio';
}
