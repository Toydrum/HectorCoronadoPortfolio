import { Component, afterNextRender, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { GithubService } from '../../core/github.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CountUp } from '../fx/count-up';
import { PROFILE, STATS } from '../../data/profile';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, CountUp],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly github = inject(GithubService);
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;

  constructor() {
    afterNextRender(() => void this.github.load());
  }
}
