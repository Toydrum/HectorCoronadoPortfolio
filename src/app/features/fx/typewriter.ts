import { Component, OnDestroy, effect, input, signal } from '@angular/core';

/**
 * Types, holds, deletes and cycles through `words`. Restarts when the
 * word list changes (e.g. on language switch). Static under reduced motion.
 */
@Component({
  selector: 'app-typewriter',
  template: `<span class="tw">{{ display() }}</span><span class="caret" aria-hidden="true">&nbsp;</span>`,
  styles: `
    :host {
      font-family: var(--font-mono);
    }
    .tw {
      background: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: 700;
    }
  `,
})
export class Typewriter implements OnDestroy {
  readonly words = input.required<string[]>();

  protected readonly display = signal('');
  private timer: ReturnType<typeof setTimeout> | null = null;
  private readonly reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    effect(() => {
      const words = this.words();
      this.stop();
      if (!words.length) return;
      if (this.reduced) {
        this.display.set(words[0]);
        return;
      }
      this.run(words);
    });
  }

  private run(words: string[]): void {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const word = words[wordIdx % words.length];

      if (!deleting) {
        charIdx++;
        this.display.set(word.slice(0, charIdx));
        if (charIdx === word.length) {
          deleting = true;
          this.timer = setTimeout(tick, 1900);
          return;
        }
        this.timer = setTimeout(tick, 55 + Math.random() * 45);
      } else {
        charIdx--;
        this.display.set(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          wordIdx++;
          this.timer = setTimeout(tick, 350);
          return;
        }
        this.timer = setTimeout(tick, 28);
      }
    };

    tick();
  }

  private stop(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
