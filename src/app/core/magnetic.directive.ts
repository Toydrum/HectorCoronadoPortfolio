import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Makes the host drift toward the cursor while hovered (max ~8px),
 * springing back on leave. Desktop / full-motion only.
 */
@Directive({ selector: '[appMagnetic]' })
export class MagneticDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private enabled = false;

  private readonly onMove = (ev: PointerEvent) => {
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const dx = ev.clientX - (rect.left + rect.width / 2);
    const dy = ev.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.18).toFixed(1)}px)`;
  };

  private readonly onLeave = () => {
    this.el.nativeElement.style.transform = '';
  };

  ngOnInit(): void {
    this.enabled =
      matchMedia('(pointer: fine)').matches &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this.enabled) return;
    const node = this.el.nativeElement;
    node.style.transition = 'transform 0.18s cubic-bezier(0.33, 1, 0.68, 1)';
    node.addEventListener('pointermove', this.onMove);
    node.addEventListener('pointerleave', this.onLeave);
  }

  ngOnDestroy(): void {
    if (!this.enabled) return;
    const node = this.el.nativeElement;
    node.removeEventListener('pointermove', this.onMove);
    node.removeEventListener('pointerleave', this.onLeave);
  }
}
