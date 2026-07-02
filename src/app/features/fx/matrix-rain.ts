import { Component, ElementRef, OnDestroy, afterNextRender, inject, viewChild } from '@angular/core';

const GLYPHS = 'アィウェオカキクケコサシスセソタチツテト0123456789ABCDEF<>/{}[]=+-*';

/** Full-screen matrix rain overlay. Mounted only while active (@if in App). */
@Component({
  selector: 'app-matrix-rain',
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: fixed;
      inset: 0;
      z-index: 9000;
      pointer-events: none;
      animation: matrix-fade 0.5s ease both;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
    @keyframes matrix-fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
})
export class MatrixRain implements OnDestroy {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private raf = 0;
  private drops: number[] = [];
  private lastFrame = 0;

  constructor() {
    afterNextRender(() => this.start());
  }

  private start(): void {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    this.drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));

    const draw = (now: number) => {
      this.raf = requestAnimationFrame(draw);
      if (now - this.lastFrame < 50) return; // ~20fps is the authentic look
      this.lastFrame = now;

      ctx.fillStyle = 'rgba(7, 11, 20, 0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'JetBrains Mono Variable', monospace`;

      for (let i = 0; i < this.drops.length; i++) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = this.drops[i] * fontSize;
        ctx.fillStyle = Math.random() < 0.12 ? '#a5f3fc' : 'rgba(34, 211, 238, 0.8)';
        ctx.fillText(glyph, x, y);
        if (y > canvas.height && Math.random() > 0.975) this.drops[i] = 0;
        this.drops[i]++;
      }
    };
    this.raf = requestAnimationFrame(draw);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }
}
