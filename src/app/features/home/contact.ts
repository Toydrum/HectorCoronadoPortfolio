import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../core/reveal.directive';
import { MagneticDirective } from '../../core/magnetic.directive';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, MagneticDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);

  private timer: ReturnType<typeof setTimeout> | null = null;

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      // clipboard unavailable — fall back to the mailto link next to the button
      location.href = `mailto:${this.profile.email}`;
    }
  }
}
