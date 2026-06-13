'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/services/submenu.scss';
import {
  SoftwareDevelopmentHeroData,
  sdSectionMeta,
  sdDualServices,
  sdTechMeta,
  sdTechnologies,
  sdProcessMeta,
  sdProcessSteps,
  sdWhyChooseMeta,
  sdWhyChooseItems,
  sdStats,
  sdCtaBanner,
  sdTestimonialsMeta,
  sdTestimonials,
} from '@/app/services/submenu/herobanner/softwaredevelopment';

export default function SoftwareDevelopment() {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll: advance every 3.5s, pause on hover
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sdTestimonials.length);
    }, 3500);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <>
      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="sd-hero">
        <div className="container">
          
          <div className="sd-hero__inner">
            <div className="sd-hero__content">
              <p className="sd-hero__label">{SoftwareDevelopmentHeroData.label}</p>
              <h1 className="sd-hero__title">
                {SoftwareDevelopmentHeroData.title.line1}
                <br />
                {SoftwareDevelopmentHeroData.title.line2}
                <br />
                <span className="sd-hero__title--accent">
                  {SoftwareDevelopmentHeroData.title.highlight}
                </span>
              </h1>
              <p className="sd-hero__description">{SoftwareDevelopmentHeroData.description}</p>
              <div className="sd-hero__actions">
                {SoftwareDevelopmentHeroData.buttons.map((btn, i) => (
                  <Link
                    key={i}
                    href={btn.link}
                    className={btn.type === 'primary' ? 'gra_btn sd-hero__btn' : 'sd-hero__btn sd-hero__btn--outline'}
                  >
                    {btn.text}&nbsp;→
                  </Link>
                ))}
              </div>
              <div className="sd-hero__features">
                {SoftwareDevelopmentHeroData.features.map((f, i) => (
                  <div key={i} className="sd-hero__feature">
                    <i className={`${f.icon} sd-hero__feature-icon`}></i>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sd-hero__visual">
              <Image src={SoftwareDevelopmentHeroData.image} alt="Software Development" className="sd-hero__img" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES – horizontal single-row cards ────────────── */}
      <section className="sd-services">
        <div className="container">
          <div className="sd-services__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              {sdSectionMeta.label}
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-services__heading">{sdSectionMeta.heading}</h2>
            <p className="sd-services__subheading">{sdSectionMeta.subheading}</p>
          </div>

          <div className="sd-services__grid">
            {sdDualServices.map((svc, i) => (
              <Link key={i} href={svc.link} className="sd-service-card">
                {/* Image LEFT */}
                <div className="sd-service-card__image-wrap">
                  <Image src={svc.image} alt={svc.title} className="sd-service-card__img" />
                </div>
                {/* Content RIGHT */}
                <div className="sd-service-card__info">
                  <div className="sd-service-card__icon-title">
                    <div className="sd-service-card__icon" style={{ background: svc.iconBg }}>
                      {svc.icon}
                    </div>
                    <h3 className="sd-service-card__title">{svc.title}</h3>
                  </div>
                  <p className="sd-service-card__desc">{svc.description}</p>
                  <ul className="sd-service-card__list">
                    {svc.features.map((feat, j) => (
                      <li key={j}>
                        <span className="sd-check">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <span className="sd-service-card__link">
                    {svc.linkText}&nbsp;→
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TECHNOLOGIES – single row, compact icons ──────────── */}
      <section className="sd-technologies">
        <div className="container">
          <div className="sd-technologies__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              {sdTechMeta.label}
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-technologies__heading">{sdTechMeta.heading}</h2>
          </div>
          <div className="sd-technologies__row">
            {sdTechnologies.map((tech, i) => (
              <div key={i} className="sd-tech-item">
                <div className="sd-tech-item__icon-wrap">
                  <Image src={tech.icon} alt={tech.name} width={28} height={28} className="sd-tech-item__icon" />
                </div>
                <span className="sd-tech-item__name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PROCESS – circles with line connectors + dots ─────── */}
      <section className="sd-process">
        <div className="container">
          <div className="sd-process__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              {sdProcessMeta.label}
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-process__heading">{sdProcessMeta.heading}</h2>
          </div>

          <div className="sd-process__track">
            {/* Connecting line drawn behind all circles */}
            <div className="sd-process__line" />

            <div className="sd-process__steps">
              {sdProcessSteps.map((step, i) => (
                <div key={i} className="sd-process-step">
                  {/* Circle with dot and icon */}
                  <div className="sd-process-step__circle">
                    <span className="sd-process-step__dot" />
                    <i className={`${step.icon} sd-process-step__icon`} />
                  </div>
                  {/* Arrow between steps */}
                  {i < sdProcessSteps.length - 1 && (
                    <div className="sd-process-step__arrow">›</div>
                  )}
                  
                  <h4 className="sd-process-step__title"> <span className="sd-process-step__number">{step.number}</span> {step.title}</h4>
                  <p className="sd-process-step__desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY CHOOSE – left text + 4 cards single row ──────── */}
      <section className="sd-whychoose">
        <div className="container">
          <div className="sd-whychoose__inner">
            {/* Left text block */}
            <div className="sd-whychoose__left">
              <p className="sd-section-label sd-section-label--left">
                <span className="sd-section-label__line" />
                {sdWhyChooseMeta.label}
                <span className="sd-section-label__line" />
              </p>
              <h2 className="sd-whychoose__heading">{sdWhyChooseMeta.heading}</h2>
              <p className="sd-whychoose__subheading">{sdWhyChooseMeta.subheading}</p>
              <Link href={sdWhyChooseMeta.ctaLink} className="gra_btn sd-whychoose__cta">
                {sdWhyChooseMeta.ctaText}&nbsp;→
              </Link>
            </div>
            {/* 4 cards in a single row */}
            <div className="sd-whychoose__cards">
              {sdWhyChooseItems.map((item, i) => (
                <div key={i} className="sd-whychoose-card">
                  {/* Orange circle with dot at top */}
                  <div className="sd-whychoose-card__circle">
                    <span className="sd-whychoose-card__circle-dot" />
                    <i className={`${item.icon} sd-whychoose-card__circle-icon`} />
                  </div>
                  <h4 className="sd-whychoose-card__title">{item.title}</h4>
                  <p className="sd-whychoose-card__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: STATS + CTA – single row ─────────────────────────── */}
      <section className="sd-stats-cta">
        <div className="container">
          <div className="sd-stats-cta__row">
            {/* Stats left */}
            <div className="sd-stats">
              {sdStats.map((stat, i) => (
                <div key={i} className="sd-stat">
                  <span className="sd-stat__value">{stat.value}</span>
                  <span className="sd-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
            {/* CTA banner right */}
            <div className="sd-cta-banner">
              <div className="sd-cta-banner__content">
                <h3 className="sd-cta-banner__heading">{sdCtaBanner.heading}</h3>
                <p className="sd-cta-banner__sub">{sdCtaBanner.subheading}</p>
              </div>
              <Link href={sdCtaBanner.ctaLink} className="gra_btn sd-cta-banner__btn">
                {sdCtaBanner.ctaText}&nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: TESTIMONIALS ───────────────────────────────────────── */}
      <section className="sd-testimonials">
        <div className="container">
          <div className="sd-testimonials__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              {sdTestimonialsMeta.label}
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-testimonials__heading">{sdTestimonialsMeta.heading}</h2>
          </div>

          {/* Slider track */}
          <div
            className="sd-testimonials__slider"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            <div
              className="sd-testimonials__track"
              style={{ transform: `translateX(-${activeSlide * (100 / 3)}%)` }}
            >
              {sdTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="sd-testimonial-card"
                  onClick={() => {
                    stopAutoScroll();
                    setActiveSlide(i);
                    startAutoScroll();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="sd-testimonial-card__inner">
                    {/* Quote icon + text on same row */}
                    <div className="sd-testimonial-card__quote-row">
                      <i className="fa-solid fa-quote-left sd-testimonial-card__quote-icon" />
                      <p className="sd-testimonial-card__text">{t.quote}</p>
                    </div>
                    {/* Author row: image + name/role */}
                    <div className="sd-testimonial-card__author">
                      <div className="sd-testimonial-card__avatar">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={46}
                          height={46}
                          style={{ objectFit: 'cover', borderRadius: '50%', width: '46px', height: '46px' }}
                        />
                      </div>
                      <div>
                        <p className="sd-testimonial-card__name">{t.name}</p>
                        <p className="sd-testimonial-card__role">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="sd-testimonials__dots">
            {sdTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoScroll(); setActiveSlide(i); startAutoScroll(); }}
                className={`sd-testimonials__dot${activeSlide === i ? ' sd-testimonials__dot--active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
