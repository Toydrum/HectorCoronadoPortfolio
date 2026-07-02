import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/**
 * Fades/slides the host in when it enters the viewport.
 * Pairs with the `.reveal` / `.revealed` classes in styles.scss.
 *
 *   <div appReveal></div>
 *   <div appReveal [revealDelay]="120"></div>   <!-- stagger, in ms -->
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: IntersectionObserver | null = null;

  readonly revealDelay = input(0, { transform: numberAttribute });

  ngOnInit(): void {
    const node = this.el.nativeElement;

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('revealed');
      return;
    }

    node.classList.add('reveal');
    if (this.revealDelay() > 0) {
      node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('revealed');
            this.observer?.disconnect();
            this.observer = null;
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
