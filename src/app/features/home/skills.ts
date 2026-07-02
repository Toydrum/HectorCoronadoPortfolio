import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { TiltDirective } from '../../core/tilt.directive';
import { SKILL_GROUPS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, TiltDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly groups = SKILL_GROUPS;
}
