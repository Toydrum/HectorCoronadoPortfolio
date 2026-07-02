import { Component, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../core/i18n.service';
import { FxService } from '../core/fx.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly fx = inject(FxService);

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly sections = ['about', 'skills', 'experience', 'projects', 'contact'] as const;

  private readonly onScroll = () => this.scrolled.set(window.scrollY > 12);

  constructor() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  protected label(section: (typeof this.sections)[number]): string {
    return this.i18n.t().nav[section];
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
