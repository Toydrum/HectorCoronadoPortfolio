import { Component, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { CursorGlow } from './features/fx/cursor-glow';
import { MatrixRain } from './features/fx/matrix-rain';
import { Terminal } from './features/terminal/terminal';
import { FxService } from './core/fx.service';
import { I18nService } from './core/i18n.service';

const KONAMI = [
  'arrowup', 'arrowup', 'arrowdown', 'arrowdown',
  'arrowleft', 'arrowright', 'arrowleft', 'arrowright',
  'b', 'a',
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CursorGlow, MatrixRain, Terminal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnDestroy {
  protected readonly fx = inject(FxService);
  private readonly i18n = inject(I18nService);

  private konamiIdx = 0;

  private readonly onKeydown = (ev: KeyboardEvent) => {
    const target = ev.target as HTMLElement | null;
    const typing =
      !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    // ~ toggles the terminal (unless the user is typing somewhere else)
    if ((ev.key === '~' || ev.key === '`') && !typing) {
      ev.preventDefault();
      this.fx.toggleTerminal();
      return;
    }

    if (ev.key === 'Escape' && this.fx.terminalOpen()) {
      this.fx.terminalOpen.set(false);
      return;
    }

    // Konami code (skipped while typing)
    if (typing) return;
    const key = ev.key.toLowerCase();
    this.konamiIdx = key === KONAMI[this.konamiIdx] ? this.konamiIdx + 1 : key === KONAMI[0] ? 1 : 0;
    if (this.konamiIdx === KONAMI.length) {
      this.konamiIdx = 0;
      this.fx.runMatrix(6000);
      this.fx.showToast(this.i18n.t().toast.konami, 4200);
    }
  };

  constructor() {
    document.addEventListener('keydown', this.onKeydown);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeydown);
  }
}
