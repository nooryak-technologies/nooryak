import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './localseo.scss';
import {
  LSEOHeroData,
  LSEOStats,
  LSEOServices,
  LSEOWhyChoose,
  LSEODarkCTA,
  LSEOProcess,
  LSEOIndustries,
  LSEOCTA,
} from './localseo';

export const metadata: Metadata = {
  title: 'Local SEO Services | Nooryak Technologies',
  description:
    'Dominate local search results with our Google Business Profile optimization, local keyword targeting, citations, and geo-focused SEO strategies that drive real local traffic and leads.',
};

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
    <div className="lseo-section__head" style={centered ? {} : { textAlign: 'left' }}>
      <span className={`lseo-section__label${centered ? '' : ' lseo-section__label--left'}`}>
        {label}
      </span>
      <h2 className={`lseo-title${centered ? ' lseo-title--center' : ''}`}>{title}</h2>
    </div>
  );
}

export default function LocalSEOPage() {
  return (
    <main className="lseo-page">

      {/* ══════════════ HERO ══════════════ */}
      <section className="lseo-hero">
        <div className="lseo-container">
          <div className="lseo-hero__grid">

            {/* Copy */}
            <div className="lseo-hero__copy">
              <p className="lseo-hero__eyebrow">{LSEOHeroData.label}</p>
              <h1 className="lseo-hero__title">
                {LSEOHeroData.title.line1}{' '}
                <span>{LSEOHeroData.title.highlight}</span>
              </h1>
              <p className="lseo-hero__desc">{LSEOHeroData.description}</p>

              <div className="lseo-hero__actions">
                <Link className="lseo-btn lseo-btn--primary" href={LSEOHeroData.buttons[0].link}>
                  {LSEOHeroData.buttons[0].text} <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link className="lseo-btn lseo-btn--secondary" href={LSEOHeroData.buttons[1].link}>
                  {LSEOHeroData.buttons[1].text} <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

              <div className="lseo-hero__badges">
                {LSEOHeroData.badges.map((badge) => (
                  <span className="lseo-hero__badge" key={badge}>
                    <i className="fa-regular fa-circle-check" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual – Hero Image */}
            <div className="lseo-hero__visual" aria-label="Local SEO illustration">
              <div className="lseo-hero__imageWrap">
                <Image
                  src="/assets/images/services/localseo.png"
                  alt="Local SEO Services – Rank Higher Locally"
                  width={640}
                  height={560}
                  className="lseo-hero__image"
                  priority
                />
              </div>
            </div>

          </div>

          {/* ── Stats Bar ── */}
          <div className="lseo-hero__statsbar">
            {LSEOStats.map((stat, index) => (
              <div className="lseo-hero__statsbar-item" key={stat.label}>
                <span className="lseo-hero__statsbar-ico">
                  <i className={stat.icon} />
                </span>
                <div className="lseo-hero__statsbar-text">
                  <span className="lseo-hero__statsbar-value">{stat.number}</span>
                  <span className="lseo-hero__statsbar-label">{stat.label}</span>
                </div>
                {index < LSEOStats.length - 1 && (
                  <div className="lseo-hero__statsbar-divider" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="lseo-section lseo-services">
        <div className="lseo-container">
          <SectionHeader label="OUR LOCAL SEO SERVICES" title="Our Local SEO Services" />
          <p className="lseo-subtitle" style={{ textAlign: 'center', marginTop: 8, marginBottom: 36 }}>
            Comprehensive local optimization strategies to improve visibility, rankings, and conversions in your target locations.
          </p>

          <div className="lseo-service-grid">
            {LSEOServices.map((service) => (
              <Link href={service.link} className="lseo-card lseo-service-card" key={service.title}>
                <div className="lseo-service-card__icon">
                  {service.icon.startsWith('/') || service.icon.includes('.') ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={44}
                      height={44}
                      className="lseo-service-card__img"
                    />
                  ) : (
                    <i className={service.icon} />
                  )}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="lseo-learn-more">
                  Learn More <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE ══════════════ */}
      <section className="lseo-section lseo-why">
        <div className="lseo-container">
          <SectionHeader
            label="WHY BUSINESSES CHOOSE NOORYAK"
            title="Why Businesses Choose Nooryak for Local SEO"
          />

          <div className="lseo-why-grid">
            {LSEOWhyChoose.map((item) => (
              <article className="lseo-card lseo-why-card" key={item.title}>
                <div className="lseo-why-card__icon">
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ DARK CTA ══════════════ */}
      <section className="lseo-dark-wrap">
        <div className="lseo-container">
          <div className="lseo-dark-cta">
            <div className="lseo-dark-cta__left">
              <p className="lseo-dark-cta__tag">{LSEODarkCTA.tag}</p>
              <h2 className="lseo-dark-cta__title">
                {LSEODarkCTA.title.line1}{' '}
                <span>{LSEODarkCTA.title.highlight}</span>{' '}
                {LSEODarkCTA.title.line2}
              </h2>
              <p className="lseo-dark-cta__desc">{LSEODarkCTA.description}</p>
              <Link className="lseo-btn lseo-btn--primary" href={LSEODarkCTA.btnLink}>
                {LSEODarkCTA.btnText} <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>

            <div className="lseo-dark-cta__right">
              {LSEODarkCTA.steps.map((step) => (
                <div className="lseo-dark-step" key={step.number}>
                  <div className="lseo-dark-step__header">
                    <span className="lseo-dark-step__num">{step.number}</span>
                    {step.icon && (
                      <span className="lseo-dark-step__ico">
                        <i className={step.icon} />
                      </span>
                    )}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ PROCESS ══════════════ */}
      <section className="lseo-section lseo-process">
        <div className="lseo-container">
          <SectionHeader label={LSEOProcess.tag} title={LSEOProcess.title} />

          <div className="lseo-process-row">
            {LSEOProcess.steps.map((step) => (
              <div className="lseo-process-item" key={step.number}>
                <span className="lseo-process-item__num">{step.number}</span>
                <div className="lseo-process-item__icon">
                  <i className={step.icon} />
                </div>
                <div className="lseo-process-item__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ INDUSTRIES ══════════════ */}
      <section className="lseo-section lseo-industries">
        <div className="lseo-container">
          <SectionHeader label="INDUSTRIES WE SERVE" title="Local SEO Solutiates for Every Industry" />

          <div className="lseo-industry-grid">
            {LSEOIndustries.map((ind) => (
              <div className="lseo-industry-card" key={ind.label}>
                <span className="lseo-industry-card__ico">
                  <i className={ind.icon} />
                </span>
                <span className="lseo-industry-card__label">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section className="lseo-cta">
        <div className="lseo-container">
          <div className="lseo-cta__banner">
            <div className="lseo-cta__left">
              <div className="lseo-cta__rocket">
                <i className="fa-solid fa-rocket" />
              </div>
              <h2 className="lseo-cta__title">
                {LSEOCTA.title} <br />
                <span>{LSEOCTA.titleAccent}</span>
              </h2>
            </div>
            <p className="lseo-cta__desc">{LSEOCTA.description}</p>
            <div className="lseo-cta__btn">
              <Link className="lseo-btn lseo-btn--primary" href={LSEOCTA.btnLink}>
                {LSEOCTA.btnText}&nbsp;<i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
