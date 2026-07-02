import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GOATCOUNTER_CODE } from '../data/profile';

declare global {
  interface Window {
    goatcounter?: { count: (opts?: { path?: string }) => void };
  }
}

/**
 * Privacy-friendly page counting via GoatCounter (no cookies).
 * Inert until GOATCOUNTER_CODE is set in data/profile.ts.
 * SPA-aware: counts route changes instead of full page loads.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private ready = false;
  private pending: string | null = null;

  init(): void {
    if (!GOATCOUNTER_CODE) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://gc.zgo.at/count.js';
    script.dataset['goatcounter'] = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
    script.dataset['goatcounterSettings'] = JSON.stringify({ no_onload: true });
    script.addEventListener('load', () => {
      this.ready = true;
      if (this.pending) {
        window.goatcounter?.count({ path: this.pending });
        this.pending = null;
      }
    });
    document.head.appendChild(script);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects;
        if (this.ready) {
          window.goatcounter?.count({ path });
        } else {
          this.pending = path;
        }
      });
  }
}
