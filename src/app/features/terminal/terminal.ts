import {
  Component,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { I18nService, Lang } from '../../core/i18n.service';
import { FxService } from '../../core/fx.service';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';

interface Line {
  kind: 'input' | 'output' | 'accent';
  text: string;
}

/**
 * The hidden shell. Opened with `~` (or the navbar >_ button), closed with
 * Esc or `exit`. Commands are defined in `run()` — extend there.
 */
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class Terminal {
  protected readonly i18n = inject(I18nService);
  protected readonly fx = inject(FxService);
  private readonly router = inject(Router);

  private readonly inputRef = viewChild.required<ElementRef<HTMLInputElement>>('cmdInput');
  private readonly scrollRef = viewChild.required<ElementRef<HTMLElement>>('scroller');

  protected readonly lines = signal<Line[]>([]);
  protected readonly current = signal('');

  private history: string[] = [];
  private historyIdx = -1;

  constructor() {
    this.lines.set([{ kind: 'accent', text: this.i18n.t().terminal.welcome }]);

    // The component only mounts while open, so this focuses on every open.
    afterNextRender(() => this.inputRef().nativeElement.focus());
  }

  protected onKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter') {
      const raw = this.current().trim();
      this.current.set('');
      if (!raw) return;
      this.history.push(raw);
      this.historyIdx = this.history.length;
      this.print('input', raw);
      this.run(raw);
      this.scrollToBottom();
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (this.historyIdx > 0) {
        this.historyIdx--;
        this.current.set(this.history[this.historyIdx]);
      }
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (this.historyIdx < this.history.length - 1) {
        this.historyIdx++;
        this.current.set(this.history[this.historyIdx]);
      } else {
        this.historyIdx = this.history.length;
        this.current.set('');
      }
    }
  }

  private run(raw: string): void {
    const t = this.i18n.t().terminal;
    const [cmd, ...args] = raw.toLowerCase().split(/\s+/);

    switch (cmd) {
      case 'help':
        t.help.forEach((line) => this.print('output', line));
        break;

      case 'about':
        this.print('output', t.aboutOut);
        break;

      case 'skills':
        this.print('output', t.skillsOut);
        break;

      case 'projects':
        PROJECTS.forEach((p) => this.print('output', `${p.slug.padEnd(28, ' ')} ${p.year}`));
        break;

      case 'open': {
        const slug = args[0];
        if (!slug) {
          this.print('output', t.openUsage);
          break;
        }
        if (!PROJECTS.some((p) => p.slug === slug)) {
          this.print('output', t.openUnknown);
          break;
        }
        this.print('accent', t.opening.replace('{slug}', slug));
        this.fx.terminalOpen.set(false);
        void this.router.navigate(['/projects', slug]);
        break;
      }

      case 'contact':
        this.print(
          'output',
          t.contactOut
            .replace('{email}', PROFILE.email)
            .replace('{github}', PROFILE.github)
            .replace('{linkedin}', PROFILE.linkedin),
        );
        break;

      case 'lang': {
        const lang = args[0] as Lang;
        if (lang !== 'en' && lang !== 'es') {
          this.print('output', t.langUsage);
          break;
        }
        this.i18n.set(lang);
        this.print('accent', this.i18n.t().terminal.langSet.replace('{lang}', lang.toUpperCase()));
        break;
      }

      case 'sudo': {
        if (args.join(' ') === 'hire-me') {
          t.hireMe.forEach((line) => this.print('accent', line));
          this.fx.terminalOpen.set(false);
          void this.router.navigate(['/'], { fragment: 'contact' });
        } else {
          this.print('output', t.unknown);
        }
        break;
      }

      case 'matrix':
        this.print('accent', t.matrixOut);
        this.fx.runMatrix();
        break;

      case 'whoami':
        this.print('output', 'guest — but the good kind.');
        break;

      case 'clear':
        this.lines.set([]);
        break;

      case 'exit':
        this.fx.terminalOpen.set(false);
        break;

      default:
        this.print('output', `${cmd}: ${t.unknown}`);
    }
  }

  private print(kind: Line['kind'], text: string): void {
    this.lines.update((lines) => [...lines, { kind, text }]);
  }

  private scrollToBottom(): void {
    queueMicrotask(() => {
      const el = this.scrollRef().nativeElement;
      el.scrollTop = el.scrollHeight;
    });
  }
}
