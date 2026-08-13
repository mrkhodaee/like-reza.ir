import { useEffect, useRef } from 'react';

export default function useParticles(canvasId = 'particles') {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById(canvasId) || canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    let animId;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: Math.min(60, Math.floor(w / 22)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.5 + 0.15,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${p.o})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(tick);
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.addEventListener('resize', resize);
    init();
    if (!reduce) requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [canvasId]);

  return canvasRef;
}
