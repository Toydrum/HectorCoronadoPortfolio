import { Injectable, signal } from '@angular/core';

/** Cross-cutting interactive state: terminal, matrix rain, achievement toast. */
@Injectable({ providedIn: 'root' })
export class FxService {
  readonly terminalOpen = signal(false);
  readonly matrixActive = signal(false);
  readonly toast = signal<string | null>(null);

  private matrixTimer: ReturnType<typeof setTimeout> | null = null;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  toggleTerminal(): void {
    this.terminalOpen.update((v) => !v);
  }

  runMatrix(durationMs = 6000): void {
    this.matrixActive.set(true);
    if (this.matrixTimer) clearTimeout(this.matrixTimer);
    this.matrixTimer = setTimeout(() => this.matrixActive.set(false), durationMs);
  }

  showToast(message: string, durationMs = 4000): void {
    this.toast.set(message);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(null), durationMs);
  }
}
