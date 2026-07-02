import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { MagneticDirective } from '../../core/magnetic.directive';
import { ParticleCanvas } from '../fx/particle-canvas';
import { Typewriter } from '../fx/typewriter';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, ParticleCanvas, Typewriter, MagneticDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly profile = PROFILE;

  protected readonly roleWords = computed(() => {
    const lang = this.i18n.lang();
    return PROFILE.roles.map((r) => r[lang]);
  });
}
