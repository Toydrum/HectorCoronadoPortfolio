import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, RevealDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  protected readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  /** Route param, bound via withComponentInputBinding(). */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => PROJECTS.find((p) => p.slug === this.slug()) ?? null);

  protected readonly neighbors = computed(() => {
    const idx = PROJECTS.findIndex((p) => p.slug === this.slug());
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length],
      next: PROJECTS[(idx + 1) % PROJECTS.length],
    };
  });

  protected goHome(): void {
    void this.router.navigate(['/'], { fragment: 'projects' });
  }
}
