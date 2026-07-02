import { Component, ElementRef, OnDestroy, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly items = EXPERIENCE;

  /** 0–1: how far the timeline has been scrolled through; drives the glowing line. */
  protected readonly progress = signal(0);

  private readonly timeline = viewChild.required<ElementRef<HTMLElement>>('timeline');

  private readonly onScroll = () => {
    const el = this.timeline().nativeElement;
    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;
    const raw = (viewH * 0.75 - rect.top) / rect.height;
    this.progress.set(Math.max(0, Math.min(1, raw)));
  };

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
