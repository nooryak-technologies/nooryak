'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import './digital-marketing.scss';
import {
  DMHeroData, DMStats, DMServices,
  DMWhyChoose, DMProcess, DMWhatYouGet,
  DMWhoFor, DMCTA,
} from './data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 3000,
    y: {
      from: 0
    }
  },
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false, min: 0, max: 100 } },
  elements: {
    line: { tension: 0.4, borderWidth: 3, borderColor: '#FF6B2B' },
    point: { radius: 0 }
  }
};

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    data: [30, 40, 35, 50, 70, 86.5],
    fill: true,
    backgroundColor: (context: any) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;
      if (!chartArea) return null;
      const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      gradient.addColorStop(0, 'rgba(255, 107, 43, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 107, 43, 0.0)');
      return gradient;
    },
  }]
};

// ── Scroll Animation Hook ─────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('dm-visible'); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Number counter helper ──────────────────────────────────
function animateCount(el: HTMLElement, target: number, suffix: string, duration = 1000) {
  const start = performance.now();
  const update = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ── Animated Line Chart SVG ─────────────────────────────────
function LineChart({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 300 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dm-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF6B2B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className={`dm-chart-path${animate ? ' dm-chart-drawn' : ''}`}
        d="M0,80 C40,75 60,65 90,50 C120,35 140,40 170,28 C200,16 230,20 260,10 C280,5 290,8 300,5"
        fill="none"
        stroke="#FF6B2B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0,80 C40,75 60,65 90,50 C120,35 140,40 170,28 C200,16 230,20 260,10 C280,5 290,8 300,5 L300,90 L0,90 Z"
        fill="url(#dm-grad)"
        style={{ opacity: animate ? 1 : 0, transition: 'opacity 1s ease 0.5s' }}
      />
    </svg>
  );
}

// ── Dashboard Mini Chart ───────────────────────────────────
function DashboardChart() {
  return (
    <div style={{ width: '300px', height: '60px' }}>
      <Line options={chartOptions as any} data={chartData} />
    </div>
  );
}

// ── Process Arrow ─────────────────────────────────────────
function ProcessArrow() {
  return (
    <svg viewBox="0 0 48 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="10" x2="38" y2="10" stroke="#FF6B2B" strokeWidth="2" strokeDasharray="4 3" />
      <polyline points="34,4 44,10 34,16" fill="none" stroke="#FF6B2B" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────
export default function DigitalMarketing() {
  const statsRef    = useScrollReveal();
  const servicesRef = useScrollReveal();
  const whyRef      = useScrollReveal();
  const processRef  = useScrollReveal();
  const wygRef      = useScrollReveal();
  const whoRef      = useScrollReveal();
  const ctaLeftRef  = useRef<HTMLDivElement>(null);
  const ctaRightRef = useRef<HTMLDivElement>(null);
  const wygSectionRef = useRef<HTMLElement>(null);
  const [chartKey, setChartKey] = React.useState(0);      // bump to remount Chart.js
  const [chartVisible, setChartVisible] = React.useState(false);
  const inViewRef = useRef(false);

  // Individual card staggered reveals
  useEffect(() => {
    const cards = document.querySelectorAll('.dm-stagger');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const idx = parseInt(el.dataset.idx || '0', 10);
          setTimeout(() => el.classList.add('dm-visible'), idx * 100);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  // CTA slide-in
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('dm-visible'); });
    }, { threshold: 0.15 });
    [ctaLeftRef.current, ctaRightRef.current].forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // WYG section: chart + number count-up — replays every time section enters viewport
  useEffect(() => {
    const section = wygSectionRef.current;
    if (!section) return;

    let rafIds: number[] = [];
    let timeouts: NodeJS.Timeout[] = [];

    const kpiData = [
      { suffix: '%',  target: 150              },
      { suffix: 'x',  target: 4.8, decimals: 1 },
      { suffix: '%',  target: 62               },
      { suffix: '%',  target: 93               },
    ];

    /* Reset numbers to zero (chart resets via chartKey + chartVisible=false) */
    const reset = () => {
      rafIds.forEach(cancelAnimationFrame);  rafIds = [];
      timeouts.forEach(clearTimeout);        timeouts = [];
      section.querySelectorAll<HTMLElement>('.dm-count-up').forEach((el, i) => {
        el.textContent = '0' + (kpiData[i]?.suffix ?? '');
      });
      setChartVisible(false);               // hide chart
    };

    /* Animate numbers + bump chartKey so Chart.js remounts with its draw animation */
    const runAnimation = () => {
      // Show chart with a fresh key so Chart.js remounts and runs its draw animation
      setChartKey(k => k + 1);
      setChartVisible(true);

      section.querySelectorAll<HTMLElement>('.dm-count-up').forEach((el, i) => {
        const d = kpiData[i];
        if (!d) return;
        el.textContent = '0' + d.suffix;
        const dur = 2800;
        const timeoutId = setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const prog = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - prog, 3);    // easeOutCubic
            const val  = ease * d.target;
            el.textContent = d.decimals
              ? val.toFixed(d.decimals) + d.suffix
              : Math.round(val) + d.suffix;
            if (prog < 1) rafIds.push(requestAnimationFrame(tick));
          };
          rafIds.push(requestAnimationFrame(tick));
        }, i * 120);
        timeouts.push(timeoutId);
      });
    };

    const onScroll = () => {
      const rect      = section.getBoundingClientRect();
      const nowInView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

      if (nowInView && !inViewRef.current) {
        inViewRef.current = true;
        runAnimation();
      } else if (!nowInView && inViewRef.current) {
        inViewRef.current = false;
        reset();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(onScroll, 150);   // initial check after layout paint

    return () => {
      window.removeEventListener('scroll', onScroll);
      rafIds.forEach(cancelAnimationFrame);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const sidebarItems = ['Dashboard','SEO','PPC','Social Media','Content','Analytics','Reports','Settings'];
  const sidebarIcons = ['fas fa-home','fas fa-search','fas fa-ad','fas fa-share-nodes','fas fa-pen-nib','fas fa-chart-pie','fas fa-file-alt','fas fa-cog'];

  return (
    <div className="dm-page">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════ */}
      <section className="dm-hero">
        <div className="dm-container">
          <div className="dm-hero__inner">

            {/* Left */}
            <div className="dm-hero__left">
              <span className="dm-hero__label">{DMHeroData.label}</span>
              <h1 className="dm-hero__title">
                {DMHeroData.title.line1}<br />
                <span>{DMHeroData.title.highlight}</span>
              </h1>
              <p className="dm-hero__desc">{DMHeroData.description}</p>
              <div className="dm-hero__btns">
                <Link href="/contact" className="dm-btn-primary">
                  {DMHeroData.buttons[0].text}&nbsp;<i className="fas fa-arrow-up-right-from-square" />
                </Link>
                <Link href="/contact" className="dm-btn-secondary">
                  <i className="fas fa-phone" />&nbsp;{DMHeroData.buttons[1].text}
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className="dm-hero__right">
              <img 
                src="/assets/images/services/digitalmarketing.png" 
                alt="Digital Marketing Services" 
                className="dm-hero__image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="dm-stats">
        <div className="dm-container">
          <div ref={statsRef} className="dm-stats__row dm-anim">
            {DMStats.map((s, i) => (
              <React.Fragment key={i}>
                <div className="dm-stats__item">
                  <i className={s.icon} />
                  <span className="stat-num">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
                {i < DMStats.length - 1 && <div className="dm-stats__divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — SERVICES GRID
      ══════════════════════════════════════════════ */}
      <section className="dm-services">
        <div className="dm-container">
          <span className="dm-section-label">OUR DIGITAL MARKETING SERVICES</span>
          <h2 ref={servicesRef} className="dm-services__heading dm-anim">
            End-to-End Digital Marketing Solutions
          </h2>
          <div className="dm-services__grid">
            {DMServices.map((s, i) => (
              <div
                className="dm-services__card dm-stagger dm-anim"
                key={i}
                data-idx={String(i)}
              >
                <i className={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link href={s.link}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — WHY CHOOSE US
      ══════════════════════════════════════════════ */}
      <section className="dm-why">
        <div className="dm-container">
          <span className="dm-section-label">WHY CHOOSE NOORYAK FOR DIGITAL MARKETING</span>
          <div ref={whyRef} className="dm-why__grid dm-anim">
            {DMWhyChoose.map((w, i) => (
              <div className="dm-why__item dm-stagger dm-anim" key={i} data-idx={String(i)}>
                <div className="why-icon"><i className={w.icon} /></div>
                <div className="why-content">
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — PROCESS
      ══════════════════════════════════════════════ */}
      <section className="dm-process">
        <div className="dm-container">
          <span className="dm-section-label">{DMProcess.tag}</span>
          <div ref={processRef} className="dm-process__steps dm-anim">
            {DMProcess.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="dm-process__step dm-stagger dm-anim" data-idx={String(i)}>
                  <span className="step-num">{step.number}</span>
                  <div className="step-icon-wrap"><i className={step.icon} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {i < DMProcess.steps.length - 1 && (
                  <div className="dm-process__arrow"><ProcessArrow /></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — WHAT YOU GET
      ══════════════════════════════════════════════ */}
      <section className="dm-wyg" ref={wygSectionRef}>
        <div className="dm-container">
          <div ref={wygRef} className="dm-wyg__inner dm-anim">

            {/* Left */}
            <div>
              <h2 className="dm-wyg__heading">{DMWhatYouGet.heading}</h2>
              <ul className="dm-wyg__list">
                {DMWhatYouGet.features.map((f, i) => (
                  <li key={i}>
                    <span className="check"><i className="fas fa-check" /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="dm-wyg__right">
              {/* Dashboard card */}
              <div className="dm-wyg__dashboard">
                <div className="dash-header">
                  <h4>Performance Overview</h4>
                  <span>Last 6 Months ▾</span>
                </div>
                <div className="dash-metrics">
                  {DMWhatYouGet.metrics.map((m, i) => (
                    <div className="dash-metric" key={i}>
                      <div className="dm-label">{m.label}</div>
                      <div className="dm-val">{m.value}</div>
                      <span className="dm-chg">{m.change}</span>
                    </div>
                  ))}
                </div>
                <div className="dash-revenue">
                  <span className="rev-label">{DMWhatYouGet.revenue.label}</span>
                  <span className="rev-val">{DMWhatYouGet.revenue.value}</span>
                  <span className="rev-chg">{DMWhatYouGet.revenue.change}</span>
                </div>
                <div className="dash-chart" style={{ height: '60px' }}>
                  {chartVisible && <Line key={chartKey} data={chartData} options={chartOptions} />}
                  <div className="chart-labels">
                    {['Jan','Feb','Mar','Apr','May','Jun'].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* KPI cards */}
              <div className="dm-wyg__kpis">
                {DMWhatYouGet.kpis.map((k, i) => (
                  <div className="dm-wyg__kpi" key={i}>
                    <div className="kpi-icon" style={{ background: k.bg }}>
                      <i className={k.icon} style={{ color: k.color }} />
                    </div>
                    <div>
                      <div className="kpi-val"><span className="dm-count-up">{k.value}</span></div>
                      <div className="kpi-lbl">{k.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7 — WHO THIS IS FOR
      ══════════════════════════════════════════════ */}
      <section className="dm-who">
        <div className="dm-container">
          <span className="dm-section-label">WHO THIS SERVICE IS FOR</span>
          <div ref={whoRef} className="dm-who__grid dm-anim">
            {DMWhoFor.map((w, i) => (
              <div className="dm-who__card dm-stagger dm-anim" key={i} data-idx={String(i)}>
                <div className="who-icon"><i className={w.icon} /></div>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 8 — CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="dm-cta">
        <div className="dm-container">
          <div className="dm-cta__box">
            <div className="dm-cta__left dm-anim-left" ref={ctaLeftRef}>
              <i className="fas fa-rocket cta-rocket" />
              <h2>
                {DMCTA.title}<br />
                <span>{DMCTA.titleAccent}</span>
              </h2>
            </div>
            <div className="dm-cta__right dm-anim-right" ref={ctaRightRef}>
              <p>{DMCTA.description}</p>
              <Link href={DMCTA.btnLink}>
                {DMCTA.btnText}&nbsp;<i className="fas fa-arrow-up-right-from-square" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
