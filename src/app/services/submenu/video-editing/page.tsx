'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './videoediting.scss';
import {
  VEHeroData,
  VEStats,
  VEServices,
  VEAllServices,
  VEPortfolio,
  VETools,
  VEReviews,
  VECTA,
} from './videoediting.data';

/* ── Scroll-reveal wrapper ───────────────────────────────────────────── */
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ve-revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="ve-reveal">
      {children}
    </div>
  );
}

/* ── Page Component ─────────────────────────────────────────────────── */
export default function VideoEditingPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleServicesCount, setVisibleServicesCount] = useState(6);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  /* Cards-per-page responsive */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600) setCardsPerPage(1);
      else if (window.innerWidth <= 960) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Auto-scroll reviews */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex(prev => {
        const limit = VEReviews.length - cardsPerPage;
        return prev >= limit ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [cardsPerPage]);

  const handleLoadMore = () =>
    setVisibleServicesCount(prev => Math.min(prev + 4, VEAllServices.length));

  const portfolioCategories = ['All', 'YouTube', 'Reels & Shorts', 'Corporate', 'Vlogs', 'Ads'];

  const filteredPortfolio =
    activeCategory === 'All'
      ? VEPortfolio
      : VEPortfolio.filter(item => item.category === activeCategory);

  return (
    <main className="ve-page">

      {/* ──────────────────────── HERO ──────────────────────────── */}
      <section className="ve-hero">
        <div className="ve-container">
          <div className="ve-hero__grid">

            {/* Left copy */}
            <div className="ve-hero__copy">
              <p className="ve-hero__eyebrow">{VEHeroData.eyebrow}</p>

              <h1 className="ve-hero__h1">{VEHeroData.heading1}</h1>
              <span className="ve-hero__h1-orange">{VEHeroData.heading2}</span>

              <p className="ve-hero__desc">{VEHeroData.description}</p>

              <div className="ve-hero__ctas">
                <Link href={VEHeroData.cta1.href} className="ve-btn ve-btn--primary">
                  {VEHeroData.cta1.label} <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href={VEHeroData.cta2.href} className="ve-btn ve-btn--outline">
                  {VEHeroData.cta2.label} <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

              {/* Badge strip */}
              <div className="ve-hero__badges">
                {VEHeroData.badges.map((b, i) => (
                  <div key={i} className="ve-hero__badge-item">
                    <div className="ve-hero__badge-icon">
                      <i className={b.icon} />
                    </div>
                    <div className="ve-hero__badge-text">
                      <span className="ve-hero__badge-title">{b.label}</span>
                      <span className="ve-hero__badge-sub">{b.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="ve-hero__visual">
              <div className="ve-hero__img-wrap">

                {/* Foreground layer: desk + monitor scene */}
                <img
                  src="/assets/images/services/videoeditherobanner.png"
                  alt="Video Editing – Professional Solutions"
                  className="ve-hero__image"
                />
              </div>
            </div>

          </div>

          {/* Stats bar */}
          <div className="ve-statsbar">
            <div className="ve-statsbar__inner">
              {VEStats.map((stat, i) => (
                <div key={i} className="ve-statsbar__item">
                  <div className="ve-statsbar__icon">
                    <i className={stat.icon} />
                  </div>
                  <div>
                    <div className="ve-statsbar__value">{stat.value}</div>
                    <div className="ve-statsbar__label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── SERVICES ─────────────────────── */}
      <ScrollReveal>
        <section className="ve-section ve-services">
          <div className="ve-container">
            <div className="ve-services__grid">

              {/* Left heading col */}
              <div className="ve-services__head">
                <span className="ve-label">OUR SERVICES</span>
                <h2 className="ve-title" style={{ marginTop: 8 }}>
                  Professional Edits<br />For Every Need.
                </h2>
                <div className="ve-services__head-bar" />
                <p className="ve-services__desc">
                  From social media clips to long-form documentaries, we deliver high-quality edits
                  that bring your story to life and keep your audience engaged.
                </p>
                <Link href="/contact" className="ve-btn ve-btn--primary">
                  Explore All Services <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

              {/* Right cards grid */}
              <div>
                <div className="ve-services__cards">
                  {VEAllServices.slice(0, visibleServicesCount).map((svc, i) => (
                    <Link key={i} href={svc.link} className="ve-service-card">
                      <div
                        className="ve-service-card__icon"
                        style={{ background: svc.bg, color: svc.color }}
                      >
                        <i className={svc.icon} />
                      </div>
                      <h3 className="ve-service-card__title">{svc.title}</h3>
                      <p className="ve-service-card__desc">{svc.description}</p>
                      <span className="ve-service-card__arrow">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  ))}
                </div>

                {visibleServicesCount < VEAllServices.length && (
                  <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <button className="ve-btn ve-btn--primary" onClick={handleLoadMore}>
                      Load More <i className="fa-solid fa-chevron-down" />
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────────── PORTFOLIO ────────────────────── */}
      <ScrollReveal>
        <section className="ve-portfolio" id="featured-work">
          <div className="ve-container">

            <div className="ve-portfolio__header">
              <div>
                <span className="ve-label" style={{ color: 'var(--ve-orange)' }}>OUR WORK</span>
                <h2 className="ve-title" style={{ marginTop: 6 }}>
                  A Glimpse Of Our Editing Work
                </h2>
              </div>

              <div className="ve-portfolio__filters">
                {portfolioCategories.map(cat => (
                  <button
                    key={cat}
                    className={`ve-filter-btn${activeCategory === cat ? ' ve-filter-btn--active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="ve-portfolio__grid">
              {filteredPortfolio.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="ve-portfolio-card"
                >
                  <div className="ve-portfolio-card__img-wrap">
                    <img
                      src={`${item.image}?v=2`}
                      alt={item.title}
                      className="ve-portfolio-card__img"
                    />
                    {item.hasPlay && (
                      <div className="ve-portfolio-card__play" aria-hidden="true">
                        <i className="fa-solid fa-play" style={{ marginLeft: 2 }} />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────────── TOOLS ────────────────────────── */}
      <ScrollReveal>
        <section className="ve-section ve-tools">
          <div className="ve-container">
            <div>
              <span className="ve-label">
                TOOLS &amp; TECHNOLOGIES
              </span>
              <h2 className="ve-title" style={{ marginTop: 8 }}>
                Powered By Industry-Leading Tools
              </h2>
            </div>

            <div className="ve-tools__row">
              {VETools.map(tool => (
                <div key={tool.label} className={`ve-tool-card ${tool.customClass}`}>
                  <div className="ve-tool-card__icon-wrap">
                    <img
                      src={tool.icon}
                      alt={tool.label}
                      className="ve-tool-card__img"
                    />
                  </div>
                  <span className="ve-tool-card__label">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────────── REVIEWS ──────────────────────── */}
      <ScrollReveal>
        <section className="ve-section ve-reviews">
          <div className="ve-container">
            <div style={{ textAlign: 'center' }}>
              <span className="ve-label" style={{ justifyContent: 'center' }}>
                CLIENTS LOVE OUR EDITS
              </span>
              <h2 className="ve-title ve-title--center" style={{ marginTop: 8 }}>
                What Our Clients Say
              </h2>
            </div>

            <div className="ve-reviews__slider-wrap">
              <div
                className="ve-reviews__track"
                style={{ transform: `translateX(-${activeReviewIndex * (100 / cardsPerPage)}%)` }}
              >
                {VEReviews.map((rev, i) => (
                  <div
                    key={i}
                    className="ve-reviews__slide"
                    style={{ width: `${100 / cardsPerPage}%` }}
                  >
                    <div className="ve-review-card">
                      <div className="ve-review-card__stars">
                        {Array.from({ length: rev.rating }).map((_, si) => (
                          <i key={si} className="fa-solid fa-star" />
                        ))}
                      </div>
                      <p className="ve-review-card__quote">&ldquo;{rev.quote}&rdquo;</p>
                      <div className="ve-review-card__author-row">
                        <div className="ve-review-card__logo">{rev.logoText.slice(0, 2).toUpperCase()}</div>
                        <div>
                          <div className="ve-review-card__name">{rev.author}</div>
                          <div className="ve-review-card__role">{rev.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot pagination */}
            <div className="ve-reviews__dots">
              {Array.from({ length: VEReviews.length - cardsPerPage + 1 }).map((_, di) => (
                <button
                  key={di}
                  className={`ve-reviews__dot${activeReviewIndex === di ? ' ve-reviews__dot--active' : ''}`}
                  onClick={() => setActiveReviewIndex(di)}
                  aria-label={`Review ${di + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────────────── CTA ───────────────────────────── */}
      <ScrollReveal>
        <section className="ve-cta">
          <div className="ve-container">
            <div className="ve-cta__inner">

              {/* Left visual column */}
              <div className="ve-cta__visual">
                <img
                  src="/assets/images/services/footer.png?v=2"
                  alt="Let's Create Videos"
                  className="ve-cta__img"
                />
              </div>

              {/* Right: copy column */}
              <div className="ve-cta__copy">
                <h2 className="ve-cta__title">
                  Let's Create Videos <br />
                  That <span>Leave An Impact.</span>
                </h2>
                <p className="ve-cta__desc">
                  Share your ideas with us and let our editing experts <br className="ve-cta__br-desktop" />
                  turn your footage into something extraordinary.
                </p>
                <Link href="/contact" className="ve-btn ve-btn--primary">
                  Start Your Project <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}
