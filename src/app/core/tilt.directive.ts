import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Pointer-driven 3D tilt with a moving glare highlight.
 * The host gets `transform: rotateX/rotateY` and the CSS vars
 * `--glare-x` / `--glare-y` for a ::after radial highlight.
 * Skipped on coarse pointers and reduced motion.
 */
@Directive({ selector: '[appTilt]' })
export class TiltDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private enabled = false;
  private raf = 0;

  private readonly onMove = (ev: PointerEvent) => {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      const node = this.el.nativeElement;
      const rect = node.getBoundingClientRect();
      const px = (ev.clientX - rect.left) / rect.width;
      const py = (ev.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 10; // max ±5deg
      const ry = (px - 0.5) * 10;
      node.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
      node.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
      node.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
    });
  };

  private readonly onLeave = () => {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    }
    this.el.nativeElement.style.transform = '';
  };

  ngOnInit(): void {
    this.enabled =
      matchMedia('(pointer: fine)').matches &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this.enabled) return;
    const node = this.el.nativeElement;
    node.classList.add('tiltable');
    node.addEventListener('pointermove', this.onMove);
    node.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy(): void {
    if (!this.enabled) return;
    const node = this.el.nativeElement;
    node.removeEventListener('pointermove', this.onMove);
    node.removeEventListener('pointerleave', this.onLeave);
    this.onLeave();
  }
}
