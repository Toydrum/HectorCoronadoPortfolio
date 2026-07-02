import { Component, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * A soft radial glow that trails the cursor. Pure decoration:
 * pointer-events none, hidden on touch devices and reduced motion.
 */
@Component({
  selector: 'app-cursor-glow',
  template: `<div #glow class="glow" aria-hidden="true"></div>`,
  styles: `
    .glow {
      position: fixed;
      top: 0;
      left: 0;
      width: 520px;
      height: 520px;
      margin: -260px 0 0 -260px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      opacity: 0;
      background: radial-gradient(
        circle,
        rgba(34, 211, 238, 0.07) 0%,
        rgba(139, 92, 246, 0.05) 35%,
        transparent 70%
      );
      transition: opacity 0.4s ease;
      will-change: transform;
    }
  `,
})
export class CursorGlow implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private glow: HTMLElement | null = null;
  private raf = 0;
  private x = 0;
  private y = 0;
  private enabled = false;

  private readonly onMove = (ev: PointerEvent) => {
    this.x = ev.clientX;
    this.y = ev.clientY;
    if (!this.raf) {
      this.raf = requestAnimationFrame(() => {
        this.raf = 0;
        if (this.glow) {
          this.glow.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
          this.glow.style.opacity = '1';
        }
      });
    }
  };

  constructor() {
    afterNextRender(() => {
      this.enabled =
        matchMedia('(pointer: fine)').matches &&
        !matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.enabled) return;
      this.glow = this.host.nativeElement.querySelector('.glow');
      window.addEventListener('pointermove', this.onMove, { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (this.enabled) window.removeEventListener('pointermove', this.onMove);
    cancelAnimationFrame(this.raf);
  }
}
