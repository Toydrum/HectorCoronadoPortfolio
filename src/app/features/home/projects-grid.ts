import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { TiltDirective } from '../../core/tilt.directive';
import { PROJECTS } from '../../data/projects';
import { ProjectKind } from '../../data/models';

type Filter = 'all' | ProjectKind;

@Component({
  selector: 'app-projects-grid',
  imports: [RouterLink, RevealDirective, TiltDirective],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
})
export class ProjectsGrid {
  protected readonly i18n = inject(I18nService);

  protected readonly filter = signal<Filter>('all');
  protected readonly filters: Filter[] = ['all', 'personal', 'professional'];

  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? PROJECTS : PROJECTS.filter((p) => p.kind === f);
  });

  protected filterLabel(f: Filter): string {
    const t = this.i18n.t().projects;
    return f === 'all' ? t.filterAll : f === 'personal' ? t.filterPersonal : t.filterProfessional;
  }
}
