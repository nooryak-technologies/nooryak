import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './socialmedia.scss';
import {
  SMCTA,
  SMFAQ,
  SMHeroData,
  SMProcess,
  SMServices,
  SMStats,
  SMWhatYouGet,
  SMWhyChoose,
  SMWhoFor,
} from './socialmedia';
import SMMClient from './SMMClient';

const sparklineData = [
  { color: '#10b981', path: 'M0,20 Q10,15 20,25 T40,15 T60,20 T80,5' },
  { color: '#10b981', path: 'M0,25 Q15,20 25,10 T50,15 T70,5 T80,0' },
  { color: '#3b82f6', path: 'M0,20 Q10,25 20,15 T40,20 T60,10 T80,5' },
  { color: '#a855f7', path: 'M0,25 Q10,10 20,20 T40,15 T60,5 T80,10' },
  { color: '#f97316', path: 'M0,20 Q15,10 30,25 T50,10 T65,15 T80,5' },
  { color: '#10b981', path: 'M0,5 Q15,10 25,20 T50,15 T70,25 T80,25' },
];

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | Nooryak Technologies',
  description:
    'Social media marketing services that build brands, grow engagement, and drive qualified leads with content, ads, scheduling, and reporting.',
};

const serviceIcons: Record<string, string> = {
  facebook: '/assets/images/services/icons/social/facebook.svg',
  instagram: '/assets/images/services/icons/social/instagram.svg',
  youtube: '/assets/images/services/icons/social/youtube.svg',
  linkedin: '/assets/images/services/icons/social/linkedin.svg',
  twitter: '/assets/images/services/icons/social/twitter.svg',
  ads: '/assets/images/services/icons/social/ads.svg',
  schedule: '/assets/images/services/icons/social/schedule.svg',
};

const whyIcons: Record<string, string> = {
  'fas fa-bullseye': 'fa-solid fa-bullseye',
  'fas fa-pen-nib': 'fa-solid fa-pen-nib',
  'fas fa-ad': 'fa-solid fa-circle-dollar-to-slot',
  'fas fa-chart-line': 'fa-solid fa-chart-line',
  'fas fa-users': 'fa-solid fa-users',
  'fas fa-sync-alt': 'fa-solid fa-rotate-right',
};

const industryIcons: Record<string, string> = {
  'fas fa-rocket': 'fa-solid fa-rocket',
  'fas fa-shopping-cart': 'fa-solid fa-cart-shopping',
  'fas fa-briefcase': 'fa-solid fa-briefcase',
  'fas fa-map-marker-alt': 'fa-solid fa-location-dot',
  'fas fa-building': 'fa-solid fa-building',
};

const processIcons: Record<string, string> = {
  'fas fa-search': 'fa-solid fa-magnifying-glass',
  'fas fa-map': 'fa-solid fa-map',
  'fas fa-calendar-alt': 'fa-regular fa-calendar-days',
  'fas fa-rocket': 'fa-solid fa-rocket',
  'fas fa-chart-bar': 'fa-solid fa-chart-column',
};

function sectionChartPath(values: number[], width: number, height: number, padding = 18) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;
  const step = values.length > 1 ? plotWidth / (values.length - 1) : 0;
  const points = values.map((value, index) => {
    const normalized = max === min ? 0.5 : (value - min) / (max - min);
    const x = padding + index * step;
    const y = padding + (1 - normalized) * plotHeight;
    return `${x},${y}`;
  });
  return points.join(' ');
}

function SectionHeader({ label, title, centered = true }: { label: string; title: string; centered?: boolean }) {
  return (
    <div className="smm-section__head">
      <span className={`smm-section__label${centered ? '' : ' smm-section__label--left'}`}>{label}</span>
      <h2 className={`smm-title${centered ? ' smm-title--center' : ''}`}>{title}</h2>
    </div>
  );
}

export default function SocialMediaMarketingPage() {
  const chartWidth = 640;
  const chartHeight = 220;
  const chartValues = [22, 28, 31, 46, 43, 52, 68, 71, 56, 60, 66, 69, 86, 101];
  const chartPath = sectionChartPath(chartValues, chartWidth, chartHeight);
  const fillPath = `${chartPath} L ${chartWidth - 18},${chartHeight - 18} L 18,${chartHeight - 18} Z`;

  const platformCards = [
    { name: 'Facebook', value: '245K', growth: '+21%', color: '#1877F2', icon: 'fa-brands fa-facebook-f' },
    { name: 'Instagram', value: '185K', growth: '+24%', color: '#E1306C', icon: 'fa-brands fa-instagram' },
    { name: 'YouTube', value: '96K', growth: '+18%', color: '#FF0000', icon: 'fa-brands fa-youtube' },
    { name: 'LinkedIn', value: '74K', growth: '+21%', color: '#0A66C2', icon: 'fa-brands fa-linkedin-in' },
    { name: 'Twitter', value: '62K', growth: '+11%', color: '#1DA1F2', icon: 'fa-brands fa-x-twitter' },
  ];

  return (
    <main className="smm-page">
      <section className="smm-hero">
        <div className="smm-container">
          

          <div className="smm-hero__grid">
            <div className="smm-hero__copy">
              <p className="smm-hero__eyebrow">{SMHeroData.label}</p>
              <h1 className="smm-hero__title">
                {SMHeroData.title.line1} 
                <span>{SMHeroData.title.highlight}</span>
              </h1>
              <p className="smm-hero__desc">{SMHeroData.description}</p>

              <div className="smm-hero__actions">
                <Link className="smm-btn smm-btn--primary" href={SMHeroData.buttons[0].link}>
                  {SMHeroData.buttons[0].text} <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link className="smm-btn smm-btn--secondary" href={SMHeroData.buttons[1].link}>
                  {SMHeroData.buttons[1].text}
                </Link>
              </div>

              <div className="smm-hero__stats">
                {SMStats.map((stat) => (
                  <div className="smm-hero__stat" key={stat.label}>
                    <i className={`${stat.icon} smm-hero__stat-ico`} />
                    <div>
                      <span className="smm-hero__stat-value">{stat.number}</span>
                      <span className="smm-hero__stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="smm-hero__visual" aria-label="Social media dashboard illustration">

              {/* Left floating cards */}
              <div className="smm-hero__float smm-hero__float--followers">
                <div className="smm-hero__float-label">Followers Growth</div>
                <div className="smm-hero__float-value">+12.8K</div>
                <div className="smm-hero__float-change positive">
                  <i className="fa-solid fa-arrow-up" /> 28.6%
                </div>
                <div className="smm-hero__float-bars" aria-hidden="true">
                  {[40,55,45,70,60,80,75,90].map((h,i) => (
                    <span key={i} className="smm-hero__float-bar" style={{height:`${h}%`}} />
                  ))}
                </div>
              </div>

              <div className="smm-hero__float smm-hero__float--engagement">
                <div className="smm-hero__float-label">Engagement Rate</div>
                <div className="smm-hero__float-value">5.6%</div>
                <div className="smm-hero__float-change positive">
                  <i className="fa-solid fa-arrow-up" /> 34.2%
                </div>
                <svg className="smm-hero__float-spark" viewBox="0 0 80 30" fill="none">
                  <path d="M0,25 Q20,20 30,15 T55,10 T80,4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="80" cy="4" r="3" fill="#10b981"/>
                </svg>
              </div>

              {/* Main image */}
              <div className="smm-hero__imageWrap">
                <img
                  src="/assets/images/services/socialmediamarketing344.png"
                  alt="Social Media Marketing dashboard"
                  className="smm-hero__image"
                />
              </div>

              {/* Right floating platform icons */}
              <div className="smm-hero__platforms" aria-hidden="true">
                {[
                  { icon: 'fa-brands fa-facebook-f',   bg: '#1877F2', delay: '0s'    },
                  { icon: 'fa-brands fa-instagram',    bg: '#E1306C', delay: '0.15s' },
                  { icon: 'fa-brands fa-youtube',      bg: '#FF0000', delay: '0.3s'  },
                  { icon: 'fa-brands fa-linkedin-in',  bg: '#0A66C2', delay: '0.45s' },
                  { icon: 'fa-brands fa-x-twitter',    bg: '#1DA1F2', delay: '0.6s'  },
                ].map((p, i) => (
                  <div key={i} className="smm-hero__platform-icon" style={{ background: p.bg, animationDelay: p.delay }}>
                    <i className={p.icon} />
                  </div>
                ))}
              </div>

              {/* Bottom-right Ad Performance card */}
              <div className="smm-hero__float smm-hero__float--adperf">
                <div className="smm-hero__float-label">Ad Performance</div>
                <div className="smm-hero__float-value">ROAS 4.6x</div>
                <div className="smm-hero__float-change positive">
                  <i className="fa-solid fa-arrow-up" /> 42.3%
                </div>
                <svg className="smm-hero__float-spark" viewBox="0 0 80 30" fill="none">
                  <path d="M0,26 Q15,22 25,18 T50,12 T80,3" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="80" cy="3" r="3" fill="#10b981"/>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-services">
        <div className="smm-container">
          <SectionHeader label="What We Offer" title="Our Social Media Marketing Services" />

          <div className="smm-service-grid">
            {SMServices.map((service) => (
              <Link href={service.link} className="smm-card smm-service-card" key={service.title}>
                <div className="smm-service-card__icon">
                  <Image
                    src={serviceIcons[service.platform] ?? '/assets/images/services/icons/social/ads.svg'}
                    alt={`${service.title} icon`}
                    width={48}
                    height={48}
                    className="smm-service-icon-img"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-why">
        <div className="smm-container">
          <SectionHeader label="Why Choose Nooryak Technologies?" title="Your Growth Partner in Social Media" />

          <div className="smm-why-grid">
            {SMWhyChoose.map((item) => (
              <article className="smm-card smm-why-card" key={item.title}>
                <div className="smm-why-card__icon">
                  <i className={whyIcons[item.icon] ?? 'fa-solid fa-bolt'} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-process-new">
        <div className="smm-container">
          <SectionHeader label={SMProcess.tag} title={SMProcess.title} />

          <div className="smm-process-row">
            {SMProcess.steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div className="smm-process-item">
                  <div className="smm-process-item__left">
                    <span className="smm-process-item__num">{step.number}</span>
                    <div className="smm-process-item__icon">
                      <i className={processIcons[step.icon] ?? 'fa-solid fa-circle-nodes'} />
                    </div>
                  </div>
                  <div className="smm-process-item__right">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                {index < SMProcess.steps.length - 1 && <div className="smm-process-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-results-new">
        <div className="smm-container">
          <div className="smm-results__grid">
            <div className="smm-results__copy">
              <span className="smm-section__label smm-section__label--left">RESULTS THAT MATTER</span>
              <h2 className="smm-title">Real Performance.<br/>Real Growth.</h2>
              <p className="smm-subtitle">{SMWhatYouGet.subheading}</p>
              <Link className="smm-btn smm-btn--primary" href="/contact" style={{ marginTop: 22 }}>
                View Case Studies <i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize: '12px', marginLeft: '4px'}} />
              </Link>
            </div>

            <div className="smm-results__board-new">
              <div className="smm-results__board-top">
                
                <div className="smm-results__chart-area">
                  <div className="smm-results__chart-head">
                    <h3>Engagement Growth Over Time</h3>
                    <div className="smm-results__chart-dropdown">
                      This Year <i className="fa-solid fa-chevron-down" />
                    </div>
                  </div>
                  <div className="smm-results__chart-wrap">
                    <svg className="smm-chart-new" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="smm-chart-fill-new" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff6a24" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ff6a24" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <g stroke="#eceef3" strokeWidth="1">
                        <line x1="18" y1="32" x2="622" y2="32" />
                        <line x1="18" y1="68" x2="622" y2="68" />
                        <line x1="18" y1="104" x2="622" y2="104" />
                        <line x1="18" y1="140" x2="622" y2="140" />
                        <line x1="18" y1="176" x2="622" y2="176" />
                      </g>
                      <path d={fillPath} fill="url(#smm-chart-fill-new)" />
                      <polyline points={chartPath} fill="none" stroke="#ff6a24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      {chartValues.map((value, index) => {
                        const max = Math.max(...chartValues);
                        const min = Math.min(...chartValues);
                        const step = (chartWidth - 36) / (chartValues.length - 1);
                        const x = 18 + index * step;
                        const normalized = max === min ? 0.5 : (value - min) / (max - min);
                        const y = 18 + (1 - normalized) * (chartHeight - 36);
                        return <circle key={index} cx={x} cy={y} r="4.2" fill="#ff6a24" />;
                      })}
                      <g>
                        <text x="18" y="210">Jan</text>
                        <text x="108" y="210">Feb</text>
                        <text x="198" y="210">Mar</text>
                        <text x="288" y="210">Apr</text>
                        <text x="378" y="210">May</text>
                        <text x="468" y="210">Jun</text>
                        <text x="558" y="210">Jul</text>
                        <text x="610" y="210">Aug</text>
                      </g>
                    </svg>
                    <div className="smm-results__chart-badge">
                      <span className="badge-value">+312%</span>
                      <span className="badge-label">Engagement Growth</span>
                    </div>
                  </div>
                </div>

                <div className="smm-results__metrics-grid">
                  {SMWhatYouGet.metrics.slice(1).map((m, i) => (
                    <div className="smm-metric-card" key={i}>
                      <span className="smm-metric-card__label">{m.label}</span>
                      <span className="smm-metric-card__value">{m.value}</span>
                      <div className="smm-metric-card__bottom">
                        {m.change && (
                          <span className={`smm-metric-card__change ${m.positive ? 'positive' : 'negative'}`}>
                            <i className={`fa-solid ${m.positive ? 'fa-arrow-up' : 'fa-arrow-down'}`} /> {m.change}
                          </span>
                        )}
                        <svg className="smm-sparkline" viewBox="0 0 80 30" width="80" height="30" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`smm-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={sparklineData[i % sparklineData.length].color} stopOpacity="0.2" />
                              <stop offset="100%" stopColor={sparklineData[i % sparklineData.length].color} stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d={`${sparklineData[i % sparklineData.length].path} L80,30 L0,30 Z`} fill={`url(#smm-grad-${i})`} style={{opacity: 0.6}} />
                          <path d={sparklineData[i % sparklineData.length].path} fill="none" stroke={sparklineData[i % sparklineData.length].color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="smm-results__board-bottom">
                <strong>Trusted by 1,000+ brands worldwide</strong>
                <div className="smm-logos-row">
                  <span className="smm-logo-badge smm-logo-badge--google">
                    <i className="fa-brands fa-google" style={{color:'#4285F4',fontSize:'16px'}} />
                    <span>Google<br/><small>Partner</small></span>
                  </span>
                  <span className="smm-logo-badge smm-logo-badge--meta">
                    <i className="fa-brands fa-meta" style={{color:'#0082FB',fontSize:'16px'}} />
                    <span>Meta<br/><small>Business Partner</small></span>
                  </span>
                  <span className="smm-logo-badge smm-logo-badge--hubspot">
                    <i className="fa-brands fa-hubspot" style={{color:'#FF7A59',fontSize:'16px'}} />
                    <span>HubSpot<br/><small>Partner</small></span>
                  </span>
                  <span className="smm-logo-badge">
                    <i className="fa-solid fa-star" style={{color:'#FF5722',fontSize:'14px'}} />
                    <span>Clutch</span>
                  </span>
                  <span className="smm-logo-badge">
                    <i className="fa-solid fa-check-circle" style={{color:'#0D9488',fontSize:'14px'}} />
                    <span>GoodFirms</span>
                  </span>
                  <span className="smm-logo-badge smm-logo-badge--shopify">
                    <i className="fa-brands fa-shopify" style={{color:'#96BF48',fontSize:'16px'}} />
                    <span>Shopify<br/><small>Partners</small></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-industries">
        <div className="smm-container">
          <SectionHeader label="Who We Serve" title="Industries We Help Grow" />

          <div className="smm-industry-grid">
            {SMWhoFor.map((industry) => (
              <article className="smm-card smm-industry-card" key={industry.title}>
                <div className="smm-industry-card__head">
                  <span className="smm-industry-card__ico">
                    <i className={industryIcons[industry.icon] ?? 'fa-solid fa-building'} />
                  </span>
                  <h3>{industry.title}</h3>
                </div>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-faq">
        <div className="smm-container">
          <div className="smm-faq__grid">
            <aside className="smm-faq__aside">
              <span className="smm-section__label smm-section__label--left">Frequently Asked Questions</span>
              <h2 className="smm-title">Everything You Need to Know</h2>
              <div className="smm-faq__iconRow" aria-hidden="true">
                <i className="fa-regular fa-message" />
                <i className="fa-solid fa-chart-simple" />
              </div>
            </aside>

            <div className="smm-faq__list">
              {SMFAQ.map((item, index) => (
                <details className="smm-faq__item" key={item.question} open={index === 0}>
                  <summary className="smm-faq__summary">
                    <span>{item.question}</span>
                    <span className="smm-faq__plus">+</span>
                  </summary>
                  <div className="smm-faq__content">{item.answer}</div>
                </details>
              ))}
            </div>

            <aside className="smm-card smm-faq__card">
              <span className="smm-icon-pill">
                <i className="fa-solid fa-circle-question" />
              </span>
              <h3>Have More Questions?</h3>
              <p>Our experts are here to help you find the right strategy for your business.</p>
              <Link className="smm-btn smm-btn--primary" href="/contact">
                Let’s Talk <i className="fa-solid fa-arrow-right" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="smm-cta">
        <div className="smm-container">
          {/* existing CTA logic */}
          <div className="smm-cta__banner">
            <div className="smm-cta__left">
              <div className="smm-cta__avatars" aria-hidden="true">
                <Image 
                  src="https://i.pravatar.cc/150?img=1" 
                  alt="Client avatar" 
                  width={36} 
                  height={36} 
                  className="smm-cta__avatar"
                />
                <Image 
                  src="https://i.pravatar.cc/150?img=5" 
                  alt="Client avatar" 
                  width={36} 
                  height={36} 
                  className="smm-cta__avatar"
                />
                <Image 
                  src="https://i.pravatar.cc/150?img=8" 
                  alt="Client avatar" 
                  width={36} 
                  height={36} 
                  className="smm-cta__avatar"
                />
                <Image 
                  src="https://i.pravatar.cc/150?img=12" 
                  alt="Client avatar" 
                  width={36} 
                  height={36} 
                  className="smm-cta__avatar"
                />
                <span className="smm-cta__avatar smm-cta__avatar--badge">+1K</span>
              </div>
              <div className="smm-kicker" style={{ color: '#fff' }}>Trusted by 1000+<br/>happy clients worldwide</div>
            </div>

            <div className="smm-cta__middle">
              <h2 className="smm-cta__title">
                {SMCTA.title} <span>{SMCTA.titleAccent}</span>
              </h2>
              <p className="smm-cta__desc">{SMCTA.description}</p>
            </div>

            <div className="smm-cta__actions">
              <Link className="smm-btn smm-btn--primary" href={SMCTA.btnLink}>
                {SMCTA.btnText}&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize:'12px'}} />
              </Link>
              <Link className="smm-btn smm-btn--secondary" href="/contact" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.28)' }}>
                {SMCTA.btnSecondary}
              </Link>
            </div>

            <div className="smm-cta__rocket" aria-hidden="true">
              <i className="fa-solid fa-rocket" />
            </div>
          </div>
        </div>
      </section>
      
      <SMMClient />
    </main>
  );
}