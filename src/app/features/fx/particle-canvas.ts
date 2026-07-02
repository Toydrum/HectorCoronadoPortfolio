import { Component, ElementRef, OnDestroy, afterNextRender, inject, viewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: 'cyan' | 'violet';
}

const CYAN = '34, 211, 238';
const VIOLET = '139, 92, 246';
const LINK_DIST = 110;
const MOUSE_RADIUS = 140;

/**
 * Hand-rolled particle network: drifting nodes, distance-based links,
 * gentle cursor repulsion. Pauses when the tab is hidden; renders a single
 * static frame under prefers-reduced-motion.
 */
@Component({
  selector: 'app-particle-canvas',
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `
    :host {
      position: absolute;
      inset: 0;
      display: block;
      overflow: hidden;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `,
})
export class ParticleCanvas implements OnDestroy {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private raf = 0;
  private width = 0;
  private height = 0;
  private dpr = 1;
  private mouseX = -9999;
  private mouseY = -9999;
  private animated = true;
  private resizeObserver: ResizeObserver | null = null;

  private readonly onPointerMove = (ev: PointerEvent) => {
    const rect = this.host.nativeElement.getBoundingClientRect();
    this.mouseX = ev.clientX - rect.left;
    this.mouseY = ev.clientY - rect.top;
  };

  private readonly onPointerLeave = () => {
    this.mouseX = -9999;
    this.mouseY = -9999;
  };

  private readonly onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    } else if (this.animated && !this.raf) {
      this.loop();
    }
  };

  constructor() {
    afterNextRender(() => this.init());
  }

  private init(): void {
    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.animated = !matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.host.nativeElement);
    this.resize();

    if (this.animated) {
      window.addEventListener('pointermove', this.onPointerMove, { passive: true });
      this.host.nativeElement.addEventListener('pointerleave', this.onPointerLeave);
      document.addEventListener('visibilitychange', this.onVisibility);
      this.loop();
    } else {
      this.draw(); // one static frame
    }
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    const rect = this.host.nativeElement.getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = rect.width;
    this.height = rect.height;
    canvas.width = Math.round(rect.width * this.dpr);
    canvas.height = Math.round(rect.height * this.dpr);
    this.ctx?.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.seed();
    if (!this.animated) this.draw();
  }

  private seed(): void {
    const target = Math.min(150, Math.max(40, Math.floor((this.width * this.height) / 11000)));
    const particles: Particle[] = [];
    for (let i = 0; i < target; i++) {
      particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.6,
        hue: Math.random() < 0.6 ? 'cyan' : 'violet',
      });
    }
    this.particles = particles;
  }

  private loop = (): void => {
    this.step();
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  };

  private step(): void {
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      // cursor repulsion
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist = Math.hypot(dx, dy);
      if (dist < MOUSE_RADIUS && dist > 0.01) {
        const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.6;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }

      // wrap around edges
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    const ps = this.particles;
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const dx = ps[i].x - ps[j].x;
        const dy = ps[i].y - ps[j].y;
        if (Math.abs(dx) > LINK_DIST || Math.abs(dy) > LINK_DIST) continue;
        const dist = Math.hypot(dx, dy);
        if (dist >= LINK_DIST) continue;
        const alpha = (1 - dist / LINK_DIST) * 0.16;
        ctx.strokeStyle = `rgba(${ps[i].hue === 'cyan' ? CYAN : VIOLET}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ps[i].x, ps[i].y);
        ctx.lineTo(ps[j].x, ps[j].y);
        ctx.stroke();
      }
    }

    for (const p of ps) {
      ctx.fillStyle = `rgba(${p.hue === 'cyan' ? CYAN : VIOLET}, 0.75)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.resizeObserver?.disconnect();
    window.removeEventListener('pointermove', this.onPointerMove);
    this.host.nativeElement.removeEventListener('pointerleave', this.onPointerLeave);
    document.removeEventListener('visibilitychange', this.onVisibility);
  }
}
