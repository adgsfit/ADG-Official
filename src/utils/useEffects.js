import { useEffect } from 'react';

export function useADGEffects(dependencies = []) {
  useEffect(() => {
    const isReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const m = isReduced
      ? { stagger: 0, dur: 1, anim: false, tilt: false }
      : { stagger: 85, dur: 680, anim: true, tilt: false };

    // Reveal Observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const parent = el.parentElement;
          const idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
          el.style.transitionDuration = m.dur + 'ms';
          el.style.transitionDelay = Math.min(idx, 7) * m.stagger + 'ms';
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.dataset.shown = '1';

          if (el.hasAttribute('data-counters')) {
            runCounters(el);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    function runCounters(scope) {
      const dur = Math.max(700, m.dur * 1.7);
      scope.querySelectorAll('[data-count]').forEach((n) => {
        if (n.dataset.counted) return;
        n.dataset.counted = '1';
        const target = parseFloat(n.dataset.count) || 0;
        const suffix = n.dataset.suffix || '';
        if (isReduced) {
          n.textContent = target + suffix;
          return;
        }
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          n.textContent = Math.round(target * e) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => {
      if (!el.dataset.shown) {
        io.observe(el);
      }
    });

    // Tilt Effect
    const tiltCleanups = [];
    if (!isReduced && window.innerWidth >= 900) {
      const tiltElements = document.querySelectorAll('[data-tilt]');
      tiltElements.forEach((el) => {
        const move = (e) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - r.left) / r.width - 0.5;
          const dy = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform =
            'perspective(900px) rotateY(' +
            (dx * 5).toFixed(2) +
            'deg) rotateX(' +
            (-dy * 5).toFixed(2) +
            'deg) translateY(-4px)';
        };
        const leave = () => {
          el.style.transform = 'none';
        };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        tiltCleanups.push(() => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      io.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, dependencies);
}
