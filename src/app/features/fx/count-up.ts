import { Component, ElementRef, OnDestroy, afterNextRender, inject, input, signal } from '@angular/core';

/** Animates 0 → value the first time the host scrolls into view. */
@Component({
  selector: 'app-count-up',
  template: `{{ current() }}{{ suffix() }}`,
  styles: `
    :host {
      font-variant-numeric: tabular-nums;
    }
  `,
})
export class CountUp implements OnDestroy {
  readonly value = input.required<number>();
  readonly suffix = input('');

  protected readonly current = signal(0);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: IntersectionObserver | null = null;
  private raf = 0;

  constructor() {
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.current.set(this.value());
        return;
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.observer?.disconnect();
            this.observer = null;
            this.animate();
          }
        },
        { threshold: 0.4 },
      );
      this.observer.observe(this.host.nativeElement);
    });
  }

  private animate(): void {
    const target = this.value();
    const duration = 1300;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      this.current.set(Math.round(target * eased));
      if (t < 1) this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.raf);
  }
}
