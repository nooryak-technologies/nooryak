'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './graphicdesign.scss';
import {
  GDHeroData,
  GDStats,
  GDExpertise,
  GDShowcases,
  GDTools,
  GDPortfolio,
  GDReviews,
  GDCTA,
  GDAllServices,
} from './graphicdesign.data';

// Smooth Scroll Entrance Animation Wrapper using high-performance IntersectionObserver
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gdesign-revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="gdesign-reveal">
      {children}
    </div>
  );
}

function SectionHeader({
  label,
  title,
  centered = true,
}: {
  label: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className="gdesign-section__head" style={centered ? {} : { textAlign: 'left' }}>
      <span className={`gdesign-section__label${centered ? '' : ' gdesign-section__label--left'}`}>
        {label}
      </span>
      <h2 className={`gdesign-title${centered ? ' gdesign-title--center' : ''}`}>{title}</h2>
    </div>
  );
}

interface ShowcaseType {
  image: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
}

function BeforeAfterSlider({ showcase }: { showcase: ShowcaseType }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="gdesign-showcase-card">
      <div
        ref={containerRef}
        className="gdesign-before-after-slider"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Layer (Background) */}
        <div className="slider-layer-before">
          <Image
            src={showcase.image}
            alt="Before"
            width={640}
            height={440}
            className="gdesign-showcase-img-before"
            priority={false}
          />
        </div>

        {/* After Layer (Foreground, clipped) */}
        <div
          className="slider-layer-after"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <Image
            src={showcase.image}
            alt="After"
            width={640}
            height={440}
            className="gdesign-showcase-img-after"
            priority={false}
          />
        </div>

        {/* Handle line & button */}
        <div
          className={`slider-handle ${isDragging ? 'dragging' : ''}`}
          style={{ left: `${sliderPos}%` }}
        >
          <div className="slider-handle-button">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'block' }}
            >
              <path d="m8 18-6-6 6-6" />
              <path d="m16 6 6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Badges */}
        <span className="slider-badge badge-before">
          {showcase.beforeLabel}
        </span>
        <span className="slider-badge badge-after">
          {showcase.afterLabel}
        </span>
      </div>
      <h4>{showcase.title}</h4>
    </div>
  );
}

export default function GraphicDesigningPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleServicesCount, setVisibleServicesCount] = useState(8);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Dynamically set how many client cards to show in the review track
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 600) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 960) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Auto-scroll effect for the reviews carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => {
        const limit = GDReviews.length - cardsPerPage;
        if (prev >= limit) return 0;
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [cardsPerPage]);

  const handleLoadMoreServices = () => {
    setVisibleServicesCount((prev) => Math.min(prev + 4, GDAllServices.length));
  };

  // Filter portfolio works based on tab selection
  const filteredPortfolio = activeCategory === 'All'
    ? GDPortfolio
    : GDPortfolio.filter(item => item.category === activeCategory);

  const categoriesList = ['All', 'Branding', 'Packaging', 'Social Media', 'Web Design'];

  return (
    <main className="gdesign-page">

      {/* ──────────────── Hero Section ──────────────── */}
      <section className="gdesign-hero">
        <div className="gdesign-container">
          <div className="gdesign-hero__grid">

            {/* Left Copy stack */}
            <div className="gdesign-hero__copy">
              <p className="gdesign-hero__eyebrow">
                <span className="gdesign-hero__dot" aria-hidden="true" />
                {GDHeroData.label}
              </p>
              <h1 className="gdesign-hero__title">
                {GDHeroData.title.line1}
                <span>{GDHeroData.title.highlight}</span>
              </h1>
              <p className="gdesign-hero__desc">{GDHeroData.description}</p>

              <div className="gdesign-hero__actions">
                <Link className="gdesign-btn gdesign-btn--primary" href={GDHeroData.buttons[0].link}>
                  {GDHeroData.buttons[0].text} <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link className="gdesign-btn gdesign-btn--secondary" href={GDHeroData.buttons[1].link}>
                  {GDHeroData.buttons[1].text} <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

              <div className="gdesign-hero__badges">
                {GDHeroData.badges.map((badge) => (
                  <span className="gdesign-hero__badge" key={badge.text}>
                    <i className={badge.icon} />
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual – image fills column, Adobe badges float to the right */}
            <div className="gdesign-hero__visual">

              <div className="gdesign-hero__imageWrap">
                {/* Background layer: orbs + glow scene */}
                <Image
                  src="/assets/images/services/herobannerbg.png"
                  alt=""
                  aria-hidden="true"
                  width={760}
                  height={700}
                  className="gdesign-hero__imageBg"
                  priority
                />
                {/* Foreground layer: desk + monitor scene */}
                <Image
                  src="/assets/images/services/graphic_design.png"
                  alt="Graphic Designing – Creative Solutions"
                  width={760}
                  height={700}
                  className="gdesign-hero__image"
                  priority
                />
              </div>
              {/* Floating Tool Badge Cards – positioned relative to .gdesign-hero__visual */}
              <div className="gdesign-hero__adobe adobe-ai" aria-hidden="true">Ai</div>
              <div className="gdesign-hero__adobe adobe-ps" aria-hidden="true">Ps</div>
              <div className="gdesign-hero__adobe adobe-id" aria-hidden="true">Id</div>
            </div>

          </div>

          {/* Stats Bar – white card flush at the bottom of the dark hero */}
          <div className="gdesign-hero__statsbar" role="list" aria-label="Key statistics">
            {GDStats.map((stat, index) => (
              <div className="gdesign-hero__statsbar-item" key={stat.label} role="listitem">
                <span className="gdesign-hero__statsbar-ico" aria-hidden="true">
                  <i className={stat.icon} />
                </span>
                <div className="gdesign-hero__statsbar-text">
                  <span className="gdesign-hero__statsbar-value">{stat.number}</span>
                  <span className="gdesign-hero__statsbar-label">{stat.label}</span>
                </div>
                {index < GDStats.length - 1 && (
                  <div className="gdesign-hero__statsbar-divider" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────── Capabilities Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-section gdesign-expertise">
          <div className="gdesign-container">
            <div className="gdesign-expertise__grid">

              {/* Left head stack */}
              <div className="gdesign-expertise__head">
                <span className="gdesign-kicker">{GDExpertise.tag}</span>
                <h2 className="gdesign-title">{GDExpertise.title}</h2>
                <p className="gdesign-desc">{GDExpertise.description}</p>
              </div>

              {/* Right grid */}
              <div className="gdesign-expertise__list">
                {GDExpertise.capabilities.map((item) => (
                  <div className="gdesign-capability-card" key={item.title}>
                    <div className={`gdesign-capability-card__ico-wrap ico-${item.color}`}>
                      <i className={item.icon} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="gdesign-capability-card__arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Before/After Showcase Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-section gdesign-showcases">
          <div className="gdesign-container">
            <SectionHeader
              label="TRANSFORMING BRANDS THROUGH DESIGN"
              title="Before & After Branding Showcase"
            />

            <div className="gdesign-showcase-grid">
              {GDShowcases.map((showcase) => (
                <BeforeAfterSlider key={showcase.title} showcase={showcase} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Tools Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-tools">
          <div className="gdesign-container">
            <SectionHeader
              label="TOOLS & TECHNOLOGIES"
              title="Powered By Industry-Leading Tools"
            />

            <div className="gdesign-tools-row">
              {GDTools.map((tool) => (
                <div className={`gdesign-tool-card ${tool.customClass}`} key={tool.label}>
                  <div className="gdesign-tool-icon-wrap">
                    <Image
                      src={tool.icon}
                      alt={tool.label}
                      width={56}
                      height={56}
                      className="gdesign-tool-img"
                    />
                  </div>
                  <span className="gdesign-tool-label">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Our Services Grid Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-section gdesign-services-grid">
          <div className="gdesign-container">
            
            <div className="gdesign-services-grid__head">
              <span className="gdesign-section__label">OUR SERVICES</span>
              <h2 className="gdesign-title gdesign-title--center">Creative Graphic Designing Solutions</h2>
              <p className="gdesign-subtitle gdesign-subtitle--center">
                Eye-catching designs that communicate your brand message and leave a lasting impression.
              </p>
            </div>

            <div className="gdesign-services-list">
              {GDAllServices.slice(0, visibleServicesCount).map((service, index) => (
                <div className="gdesign-service-card" key={index}>
                  <div className="gdesign-service-card__icon-box">
                    <i className={service.icon} />
                  </div>
                  <div className="gdesign-service-card__content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={service.link} className="gdesign-service-card__learn-more">
                      Learn More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {visibleServicesCount < GDAllServices.length && (
              <div className="gdesign-services-grid__load-more-wrap">
                <button 
                  onClick={handleLoadMoreServices} 
                  className="gdesign-btn gdesign-btn--primary gdesign-btn--load-more"
                >
                  Load More
                </button>
              </div>
            )}

          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Dynamic Portfolio Grid ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-section gdesign-portfolio" id="featured-work">
          <div className="gdesign-container">
            
            <div className="gdesign-portfolio-header">
              <div className="gdesign-portfolio-title-block">
                <span className="gdesign-portfolio-label-orange">FEATURED WORK</span>
                <h2 className="gdesign-portfolio-title-main">A Glimpse Of Our Creative Work</h2>
              </div>

              {/* Filters Bar */}
              <div className="gdesign-portfolio-filters">
                {categoriesList.map((cat) => (
                  <button
                    className={`gdesign-filter-btn${activeCategory === cat ? ' gdesign-filter-btn--active' : ''}`}
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Works Grid */}
            <div className={`gdesign-portfolio-grid ${activeCategory === 'All' ? 'gdesign-portfolio-grid--masonry' : ''}`}>
              {filteredPortfolio.map((item, index) => {
                const isTall = activeCategory === 'All' && (index === 0 || index === 1);
                return (
                  <article 
                    className={`gdesign-portfolio-card ${isTall ? 'gdesign-portfolio-card--tall' : 'gdesign-portfolio-card--short'}`} 
                    key={`${item.title}-${index}`}
                  >
                    <div className="gdesign-portfolio-imgWrap">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={isTall ? 500 : 300}
                        className="gdesign-portfolio-img"
                      />
                      
                      {/* Glassmorphic Hover Overlay */}
                      <div className="gdesign-portfolio-overlay">
                        <div className="gdesign-portfolio-overlay-content">
                          <span className="gdesign-portfolio-overlay-cat">{item.category}</span>
                          <h4 className="gdesign-portfolio-overlay-title">{item.title}</h4>
                        </div>
                        <div className="gdesign-portfolio-overlay-arrow">
                          <i className="fa-solid fa-arrow-up-right-from-square" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Reviews Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-section gdesign-reviews">
          <div className="gdesign-container">
            <SectionHeader
              label="CLIENTS LOVE OUR DESIGNS"
              title="What Our Clients Say"
            />

            <div className="gdesign-reviews-slider-container">
              <div 
                className="gdesign-reviews-track"
                style={{ transform: `translateX(-${activeReviewIndex * (100 / cardsPerPage)}%)` }}
              >
                {GDReviews.map((rev, index) => (
                  <div 
                    className="gdesign-review-slide" 
                    key={index}
                    style={{ width: `${100 / cardsPerPage}%` }}
                  >
                    <div className="gdesign-review-card">
                      <div className="gdesign-review-stars">
                        {Array.from({ length: rev.rating }).map((_, starIdx) => (
                          <i className="fa-solid fa-star" key={starIdx} />
                        ))}
                      </div>
                      <p className="gdesign-review-quote">"{rev.quote}"</p>
                      <div className="gdesign-review-author">
                        <div className="gdesign-review-logo-wrap">
                          <span className="gdesign-review-logo-icon">
                            <i className={
                              index % 5 === 0 ? "fa-solid fa-shirt" : 
                              index % 5 === 1 ? "fa-solid fa-leaf" : 
                              index % 5 === 2 ? "fa-solid fa-cubes" :
                              index % 5 === 3 ? "fa-solid fa-palette" :
                              "fa-solid fa-chart-line"
                            } />
                          </span>
                          <span className="gdesign-review-company">{rev.logoText}</span>
                        </div>
                        <div className="gdesign-review-meta">
                          <span className="gdesign-review-name">{rev.author}</span>
                          <span className="gdesign-review-role">{rev.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="gdesign-reviews-dots">
              {GDReviews.slice(0, GDReviews.length - cardsPerPage + 1).map((_, idx) => (
                <span 
                  key={idx} 
                  className={`gdesign-reviews-dot ${activeReviewIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveReviewIndex(idx)}
                />
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ──────────────── Final CTA Section ──────────────── */}
      <ScrollReveal>
        <section className="gdesign-cta">
          <div className="gdesign-container">
            <div className="gdesign-cta__banner">
              <div className="gdesign-cta__left-wrap">
                <div className="gdesign-cta__icon-circle">
                  <i className="fa-solid fa-compass" />
                </div>
                <h2 className="gdesign-cta__title">
                  Let's Build A <span>Brand</span> <br />
                  People Remember.
                </h2>
              </div>
              
              <p className="gdesign-cta__desc">{GDCTA.description}</p>
              
              <div className="gdesign-cta__btn">
                <Link className="gdesign-btn gdesign-btn--primary" href={GDCTA.btnLink}>
                  {GDCTA.btnText}&nbsp;<i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </main>
  );
}
