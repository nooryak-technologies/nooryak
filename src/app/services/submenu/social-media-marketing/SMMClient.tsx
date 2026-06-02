'use client';
import React, { useEffect } from 'react';

export default function SMMClient() {

  /* ── Hero image one-time reveal ── */
  useEffect(() => {
    const heroImgWrap = document.querySelector('.smm-hero__imageWrap');
    if (!heroImgWrap) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        heroImgWrap.classList.add('animate-on-scroll');
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(heroImgWrap);
    return () => obs.disconnect();
  }, []);

  /* ── Results board: chart + sparklines + numbers — replays every scroll-in ── */
  useEffect(() => {
    const board = document.querySelector('.smm-results__board-new') as HTMLElement | null;
    if (!board) return;

    let inView = false;
    let rafIds: number[] = [];

    /* ─ Reset everything to initial (hidden) state ─ */
    const reset = () => {
      rafIds.forEach(cancelAnimationFrame);
      rafIds = [];

      // Main chart line
      const mainPath = board.querySelector('.smm-chart-new polyline') as SVGPolylineElement | null;
      if (mainPath) {
        const len = mainPath.getTotalLength();
        mainPath.style.transition = 'none';
        mainPath.style.strokeDasharray = `${len}`;
        mainPath.style.strokeDashoffset = `${len}`;
        mainPath.style.opacity = '0';
      }

      // Main chart fill
      const fillPath = board.querySelector('.smm-chart-new path[d*="L"]') as SVGPathElement | null;
      if (fillPath) {
        fillPath.style.transition = 'none';
        fillPath.style.clipPath = 'inset(100% 0 0 0)';
      }

      // Circles
      board.querySelectorAll<SVGCircleElement>('.smm-chart-new circle').forEach((c) => {
        c.style.transition = 'none';
        c.style.opacity = '0';
        c.style.transform = 'scale(0)';
      });

      // Sparklines
      board.querySelectorAll<SVGElement>('.smm-sparkline').forEach((svg) => {
        const paths = svg.querySelectorAll('path');
        const fp = paths[0] as SVGPathElement | undefined;
        const sp = paths[1] as SVGPathElement | undefined;
        if (fp) { fp.style.transition = 'none'; fp.style.clipPath = 'inset(100% 0 0 0)'; }
        if (sp) {
          const len = sp.getTotalLength();
          sp.style.transition = 'none';
          sp.style.strokeDasharray = `${len}`;
          sp.style.strokeDashoffset = `${len}`;
        }
      });

      // Numbers — restore original text so we can re-parse on next run
      board.querySelectorAll<HTMLElement>('.smm-metric-card__value, .badge-value').forEach((el) => {
        if (el.dataset.original) el.textContent = el.dataset.original;
      });
    };

    /* ─ Run full animation ─ */
    const runAnimation = () => {
      // Force browser to paint the reset state before animating
      board.getBoundingClientRect();

      // ── Main chart line draw ──
      const mainPath = board.querySelector('.smm-chart-new polyline') as SVGPolylineElement | null;
      if (mainPath) {
        const len = mainPath.getTotalLength();
        mainPath.style.strokeDasharray = `${len}`;
        mainPath.style.strokeDashoffset = `${len}`;
        mainPath.style.opacity = '0';
        requestAnimationFrame(() => {
          mainPath.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease';
          mainPath.style.strokeDashoffset = '0';
          mainPath.style.opacity = '1';
        });
      }

      // ── Main chart fill ──
      const fillPath = board.querySelector('.smm-chart-new path[d*="L"]') as SVGPathElement | null;
      if (fillPath) {
        fillPath.style.clipPath = 'inset(100% 0 0 0)';
        requestAnimationFrame(() => {
          fillPath.style.transition = 'clip-path 2.5s cubic-bezier(0.4,0,0.2,1) 0.3s';
          fillPath.style.clipPath = 'inset(0 0 0 0)';
        });
      }

      // ── Circles ──
      board.querySelectorAll<SVGCircleElement>('.smm-chart-new circle').forEach((c, i) => {
        c.style.opacity = '0';
        c.style.transform = 'scale(0)';
        requestAnimationFrame(() => {
          c.style.transition = `opacity 0.4s ease ${0.2 + i * 0.15}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.2 + i * 0.15}s`;
          c.style.opacity = '1';
          c.style.transform = 'scale(1)';
        });
      });

      // ── Sparklines ──
      board.querySelectorAll<SVGElement>('.smm-sparkline').forEach((svg, i) => {
        const paths = svg.querySelectorAll('path');
        const fp = paths[0] as SVGPathElement | undefined;
        const sp = paths[1] as SVGPathElement | undefined;
        if (fp) {
          fp.style.clipPath = 'inset(100% 0 0 0)';
          requestAnimationFrame(() => {
            fp.style.transition = `clip-path 1.8s cubic-bezier(0.4,0,0.2,1) ${0.8 + 0.15 * i}s`;
            fp.style.clipPath = 'inset(0 0 0 0)';
          });
        }
        if (sp) {
          const len = sp.getTotalLength();
          sp.style.strokeDasharray = `${len}`;
          sp.style.strokeDashoffset = `${len}`;
          requestAnimationFrame(() => {
            sp.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) ${0.8 + 0.15 * i}s`;
            sp.style.strokeDashoffset = '0';
          });
        }
      });

      // ── Number count-up ──
      board.querySelectorAll<HTMLElement>('.smm-metric-card__value, .badge-value').forEach((el, i) => {
        // Save original text once
        if (!el.dataset.original) el.dataset.original = el.textContent || '';
        const text = el.dataset.original;
        const match = text.match(/([+$-]*)([\d.]+)([KMB%x]*)/);
        if (!match) return;

        const prefix = match[1];
        const number = parseFloat(match[2]);
        const suffix = match[3];
        const isFloat = text.includes('.');

        el.textContent = `${prefix}0${suffix}`;

        const duration = 2500 + i * 200;
        const delay    = 500  + i * 100;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          if (elapsed < delay) { rafIds.push(requestAnimationFrame(tick)); return; }
          const progress = Math.min((elapsed - delay) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const cur = number * ease;
          const display = isFloat
            ? cur.toFixed(number.toString().split('.')[1]?.length || 1)
            : Math.round(cur).toString();
          el.textContent = `${prefix}${display}${suffix}`;
          if (progress < 1) rafIds.push(requestAnimationFrame(tick));
          else el.textContent = text;
        };
        rafIds.push(requestAnimationFrame(tick));
      });
    };

    /* ─ Scroll handler ─ */
    const onScroll = () => {
      const rect = board.getBoundingClientRect();
      const nowInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (nowInView && !inView) {
        inView = true;
        reset();
        // tiny rAF gap so "none" transitions have time to paint before animating
        requestAnimationFrame(() => requestAnimationFrame(runAnimation));
      } else if (!nowInView && inView) {
        inView = false;
        reset();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(onScroll, 150);   // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      rafIds.forEach(cancelAnimationFrame);
    };
  }, []);

  return null;
}
