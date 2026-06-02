'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../submenu.scss';
import {
  PPCHeroData, PPCStats, PPCServices,
  PPCWhyChoose, PPCProcess, PPCWhatYouGet,
  PPCWhoFor, PPCCTA
} from './herobanner/payperclick';

function SparklineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let chart: any = null;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const obs = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } = await import('chart.js');
      Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const grad = ctx.createLinearGradient(0, 0, 0, 110);
      grad.addColorStop(0, 'rgba(255,92,44,0.22)');
      grad.addColorStop(1, 'rgba(255,92,44,0)');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
          datasets: [{
            data: [320,480,390,620,580,780,720,950],
            borderColor: '#FF5C2C', borderWidth: 2.5,
            backgroundColor: grad, fill: true, tension: 0.45,
            pointBackgroundColor: '#FF5C2C', pointBorderColor: '#fff',
            pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          animation: { duration: 1400, easing: 'easeInOutQuart' },
          plugins: {
            legend: { display: false },
            tooltip: { backgroundColor: '#1C1C1C', titleColor: '#fff', bodyColor: '#FF5C2C', padding: 8, cornerRadius: 6 },
          },
          scales: {
            x: { grid: { display: false }, border: { display: false }, ticks: { color: '#999', font: { size: 10 } } },
            y: { display: false },
          },
        },
      });
    }, { threshold: 0.3 });
    obs.observe(canvas);
    return () => { obs.disconnect(); chart?.destroy(); };
  }, []);
  return <div style={{ position: 'relative', height: '110px', width: '100%' }}><canvas ref={canvasRef} /></div>;
}

function useCounters() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-count]');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseFloat(el.dataset.count || '0');
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const isFloat = el.dataset.float === '1';
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1000, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const val = target * ease;
          el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val).toString()) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useReveal(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add('ppc-revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

// Hook to trigger animation on scroll
function useScrollAnimation(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('animate-on-scroll');
        }
      });
    }, { threshold: 0.2 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === 'google') return (
    <Image 
      src="/assets/images/services/icons/google_ads.png" 
      alt="Google Ads" 
      width={44} 
      height={44} 
      style={{ objectFit: 'contain' }}
    />
  );
  if (platform === 'facebook') return (
    <svg viewBox="0 0 48 48" width="44" height="44">
      <path fill="#1877F2" d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24c0 12 8.8 21.9 20.2 23.7V30.9h-6.1V24h6.1v-5.3c0-6 3.6-9.3 9-9.3 2.6 0 5.4.5 5.4.5v5.9h-3c-3 0-3.9 1.9-3.9 3.7V24h6.6l-1 6.9h-5.6v16.8C39.2 45.9 48 36 48 24z"/>
    </svg>
  );
  if (platform === 'display') return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M3 12h4m10 0h4"/><path d="M12 3v4m0 10v4"/>
    </svg>
  );
}

const StepIcons = [
  <svg key="s1" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="18" width="4" height="9" rx="1"/><rect x="9" y="13" width="4" height="14" rx="1"/><rect x="15" y="16" width="4" height="11" rx="1"/>
    <circle cx="24" cy="10" r="5"/><line x1="27.5" y1="13.5" x2="30" y2="16"/>
  </svg>,
  <svg key="s2" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5.5"/><circle cx="16" cy="16" r="2" fill="#FF5C2C" stroke="none"/>
    <line x1="16" y1="2" x2="16" y2="7"/><line x1="16" y1="25" x2="16" y2="30"/>
    <line x1="2" y1="16" x2="7" y2="16"/><line x1="25" y1="16" x2="30" y2="16"/>
  </svg>,
  <svg key="s3" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <line x1="24" y1="18" x2="29" y2="13"/><line x1="24" y1="18" x2="22" y2="23"/><line x1="22" y1="23" x2="27" y2="21"/><line x1="27" y1="21" x2="29" y2="13"/>
  </svg>,
  <svg key="s4" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="20" width="5" height="9" rx="1"/><rect x="11" y="14" width="5" height="15" rx="1"/><rect x="19" y="8" width="5" height="21" rx="1"/>
    <polyline points="3,18 11,12 19,6 26,3"/><polyline points="23,3 26,3 26,6"/>
  </svg>,
  <svg key="s5" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="18" height="24" rx="2"/>
    <line x1="10" y1="9" x2="20" y2="9"/><line x1="10" y1="13" x2="20" y2="13"/>
    <polyline points="10,20 13,17 17,19 20,14"/>
    <line x1="10" y1="23" x2="15" y2="23"/>
  </svg>,
];

const WhoIcons = [
  <svg key="w1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>,
  <svg key="w2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>,
  <svg key="w3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
  </svg>,
  <svg key="w4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
  </svg>,
];

const ResultIcons = [
  { bg: '#FFF0EB', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  { bg: '#EFF6FF', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg> },
  { bg: '#FFF0EB', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { bg: '#F0FDF4', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg> },
];

export default function Payperclick() {
  useReveal('.ppc-step-anim');
  useReveal('.ppc-wyg-anim');
  useReveal('.ppc-who-anim');
  useReveal('.ppc-cta-left');
  useReveal('.ppc-cta-right');
  useCounters();
  useScrollAnimation('.ppc-hero__img');

  return (
    <div className="ppc-page">

      {/* HERO */}
      <section className="hero ppc-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-1">
              <div className="hero__content">
                <p className="hero__label">{PPCHeroData.label}</p>
                <h1 className="hero__title">
                  {PPCHeroData.title.line1}<br />
                  {PPCHeroData.title.line2}{' '}
                  <span className="hero__title--accent">{PPCHeroData.title.highlight}</span>
                </h1>
                <p className="hero__description">{PPCHeroData.description}</p>
                <div className="hero__actions">
                  {PPCHeroData.buttons.map((btn, i) => (
                    <Link key={i} href={btn.link}
                      className={btn.type === 'primary' ? 'hero__btn gra_btn' : 'hero__btn hero__btn--secondary'}>
                      {btn.text}&nbsp;&#8594;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
              <div className="ppc-hero__visual">
                <Image
                  src="/assets/images/services/ppc_image.png"
                  alt="PPC Hero"
                  width={600}
                  height={480}
                  className="ppc-hero__img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ppc-stats">
        <div className="container">
          <div className="ppc-stats__row">
            {PPCStats.map((s, i) => (
              <React.Fragment key={i}>
                <div className="ppc-stats__item">
                  <div className="ppc-stats__icon"><i className={s.icon}></i></div>
                  <div>
                    <div className="ppc-stats__num">{s.number}</div>
                    <div className="ppc-stats__lbl">{s.label}</div>
                  </div>
                </div>
                {i < PPCStats.length - 1 && <div className="ppc-stats__div"/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PPC SERVICES */}
      <section className="ppc-services">
        <div className="container">
          <div className="ppc-sec-head text-center">
            <span className="ppc-sec-tag">Our Expertise</span>
            <h2 className="ppc-sec-title">Our PPC Services</h2>
            <p className="ppc-sec-sub">Comprehensive PPC advertising solutions to help you reach the right audience and achieve maximum ROI.</p>
          </div>
          <div className="ppc-services__grid">
            {PPCServices.map((s, i) => (
              <div key={i} className="ppc-svc-card">
                <div className="ppc-svc-card__icon"><PlatformIcon platform={s.platform}/></div>
                <h3 className="ppc-svc-card__title">{s.title}</h3>
                <p className="ppc-svc-card__desc">{s.description}</p>
                <Link href={s.link} className="ppc-svc-card__link">Learn More&nbsp;&#8594;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="ppc-why">
        <div className="container">
          <div className="ppc-sec-head text-center">
            <span className="ppc-sec-tag">Why Choose Nooryak</span>
            <h2 className="ppc-sec-title">{PPCWhyChoose.title}</h2>
          </div>
          <div className="ppc-why__grid">
            {PPCWhyChoose.items.map((item, i) => (
              <div key={i} className="ppc-why__card">
                <div className="ppc-why__icon"><i className={item.icon}></i></div>
                <h3 className="ppc-why__title">{item.title}</h3>
                <p className="ppc-why__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ppc-process">
        <div className="container">
          <div className="ppc-sec-head text-center">
            <p className="ppc-approach-label">OUR APPROACH</p>
            <h2 className="ppc-sec-title">{PPCProcess.title}</h2>
          </div>
          <div className="ppc-process__row">
            {PPCProcess.steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="ppc-step ppc-step-anim" style={{'--delay':`${i*150}ms`} as React.CSSProperties}>
                  <div className="ppc-step__num">{step.number}</div>
                  <div className="ppc-step__icon">{StepIcons[i]}</div>
                  <h3 className="ppc-step__title">{step.title}</h3>
                  <p className="ppc-step__desc">{step.description}</p>
                </div>
                {i < PPCProcess.steps.length - 1 && <div className="ppc-step__arrow" aria-hidden="true"/>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — unified 3-col card: [WYG checklist] | [Performance Snapshot] | [Real Results 2×2] */}
      <section className="ppc-wyg">
        <div className="container">
          <div className="ppc-wyg__grid">

            {/* ── COL 1: What You Get ── */}
            <div className="ppc-wyg-anim ppc-wyg__left-col" style={{'--delay':'0ms'} as React.CSSProperties}>
              <span className="ppc-pill">WHAT YOU GET</span>
              <h2 className="ppc-wyg__title">{PPCWhatYouGet.title}</h2>
              <ul className="ppc-wyg__list">
                {PPCWhatYouGet.features.map((f, i) => (
                  <li key={i}>
                    <span className="ppc-wyg__bullet" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 2: Performance Snapshot ── */}
            <div className="ppc-wyg-anim ppc-snapshot" style={{'--delay':'100ms'} as React.CSSProperties}>
              <div className="ppc-snapshot__header">
                <span className="ppc-snapshot__title">Performance Snapshot</span>
                <span className="ppc-snapshot__period">Last 30 Days &#9660;</span>
              </div>
              <div className="ppc-snapshot__rows">
                {[
                  {label:'Clicks',      icon:'fas fa-mouse-pointer', value:'13K',   raw:13,   suffix:'K',  change:'+18.6%', pos:true},
                  {label:'CTR',         icon:'fas fa-percentage',    value:'6%',    raw:6,    suffix:'%',  change:'+12.4%', pos:true},
                  {label:'Conversions', icon:'fas fa-exchange-alt',  value:'1K',    raw:1,    suffix:'K',  change:'+34.3%', pos:true},
                  {label:'Cost/Conv.',  icon:'fas fa-dollar-sign',   value:'$3',    raw:3,    prefix:'$',  change:'-10.2%', pos:false},
                  {label:'ROAS',        icon:'fas fa-chart-line',    value:'4.6x',  raw:4.6,  suffix:'x',  change:'+32.11%',pos:true,isFloat:true},
                ].map((row,i) => (
                  <div key={i} className="ppc-snapshot__row">
                    <span className="ppc-snapshot__row-icon">
                      <i className={row.icon}></i>
                    </span>
                    <span className="ppc-snapshot__lbl">{row.label}</span>
                    <span className="ppc-snapshot__val"
                      data-count={row.raw}
                      data-suffix={row.suffix||''}
                      data-prefix={row.prefix||''}
                      data-float={row.isFloat?'1':'0'}
                    >{row.value}</span>
                    <span className={`ppc-snapshot__badge ${row.pos?'pos':'neg'}`}>{row.change}</span>
                  </div>
                ))}
              </div>
              <p className="ppc-snapshot__spark-label">Conversions Over Time</p>
              <SparklineChart/>
            </div>

            {/* ── COL 3: Real Results 2×2 grid ── */}
            <div className="ppc-wyg-anim ppc-results" style={{'--delay':'200ms'} as React.CSSProperties}>
              <span className="ppc-pill">REAL RESULTS THAT MATTER</span>
              <div className="ppc-results__grid">
                {PPCWhatYouGet.results.map((r, i) => (
                  <div key={i} className="ppc-results__item">
                    <div className="ppc-results__icon" style={{background:ResultIcons[i]?.bg}}>
                      {ResultIcons[i]?.icon}
                    </div>
                    <div className="ppc-results__text">
                      <span className="ppc-results__num"
                        data-count={parseFloat(r.number)}
                        data-suffix={r.number.replace(/[\d.]/g,'')}
                      >{r.number}</span>
                      <span className="ppc-results__lbl">{r.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* WHO IS THIS FOR */}
      <section className="ppc-who">
        <div className="container">
          <div className="ppc-sec-head text-center">
            <p className="ppc-approach-label">WHO IS THIS SERVICE FOR?</p>
          </div>
          <div className="ppc-who__grid">
            {PPCWhoFor.items.map((item, i) => (
              <div key={i} className="ppc-who__card ppc-who-anim" style={{'--delay':`${i*120}ms`} as React.CSSProperties}>
                <div className="ppc-who__icon">{WhoIcons[i]}</div>
                <div className="ppc-who__content">
                  <h3 className="ppc-who__title">{item.title}</h3>
                  <p className="ppc-who__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ppc-cta">
        <div className="container">
          <div className="ppc-cta__inner">

            {/* Left */}
            <div className="ppc-cta-left">
              <svg className="ppc-cta__rocket-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4C20 4 28 8 28 20C28 28 22 34 20 36C18 34 12 28 12 20C12 8 20 4 20 4Z" stroke="#FF5C2C" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="20" cy="19" r="3" fill="#FF5C2C"/>
                <path d="M14 28L8 34M26 28L32 34" stroke="#FF5C2C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2 className="ppc-cta__title">
                {PPCCTA.title}<br />
                <span>{PPCCTA.titleAccent}</span>
              </h2>
            </div>

            {/* Right */}
            <div className="ppc-cta-right">
              <p>{PPCCTA.description}</p>
              <Link href={PPCCTA.btnLink} className="ppc-cta__btn">
                {PPCCTA.btnText}&nbsp;→
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
