'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubcategoryData } from './subcategory.data';
import './subcategory.scss';

// Helper function to render tech icons (supports PNG images or FontAwesome brand icons)
const renderTechIcon = (name: string, fallbackColor: string, fontAwesomeIcon: string) => {
  const imageName = name.toLowerCase();
  
  // Check if we have PNG icons in the folder
  let imageSrc = "";
  if (imageName === "react") {
    imageSrc = "/assets/images/services/icons/React.png";
  } else if (imageName === "next.js" || imageName === "nextjs") {
    imageSrc = "/assets/images/services/icons/Next.js.png";
  } else if (imageName === "node.js" || imageName === "nodejs") {
    imageSrc = "/assets/images/services/icons/Node.js.png";
  } else if (imageName === "php") {
    imageSrc = "/assets/images/services/icons/PHP.png";
  } else if (imageName === "laravel") {
    imageSrc = "/assets/images/services/icons/Laravel.png";
  } else if (imageName === "angular") {
    imageSrc = "/assets/images/services/icons/Angular.png";
  } else if (imageName === "vue.js" || imageName === "vuejs") {
    imageSrc = "/assets/images/services/icons/Vue.js.png";
  } else if (imageName === "docker") {
    imageSrc = "/assets/images/services/icons/Docker.png";
  } else if (imageName === "mongodb") {
    imageSrc = "/assets/images/services/icons/MongoDB.png";
  } else if (imageName === "aws") {
    imageSrc = "/assets/images/services/icons/AWS.png";
  }

  if (imageSrc) {
    return (
      <div className="tech-image-wrap">
        <Image
          src={imageSrc}
          alt={name}
          width={32}
          height={32}
          className="tech-icon-img"
        />
      </div>
    );
  }

  return (
    <div className="tech-icon-wrap" style={{ color: fallbackColor }}>
      <i className={fontAwesomeIcon} aria-hidden="true" />
    </div>
  );
};

interface Props {
  data: SubcategoryData;
  type: string;
  subcategory: string;
}

export default function SubcategoryContent({ data, type, subcategory }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Convert slug to clean title for the breadcrumb and headers
  const categoryTitle = type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const subcategoryTitle = subcategory
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Highlight logic for Hero Title
  const renderHeroTitle = () => {
    const fullText = `${data.hero.title.line1}${data.hero.title.highlight}`;
    const target = subcategoryTitle;
    const index = fullText.toLowerCase().indexOf(target.toLowerCase());
    
    if (index !== -1) {
      const before = fullText.substring(0, index);
      const match = fullText.substring(index, index + target.length);
      const after = fullText.substring(index + target.length);
      return (
        <>
          {before}<span>{match}</span>{after}
        </>
      );
    }
    
    return (
      <>
        {data.hero.title.line1}<span>{data.hero.title.highlight}</span>
      </>
    );
  };

  // Highlight logic for About Title (adds brush stroke to the word "Solutions" or similar)
  const renderAboutTitle = () => {
    const title = data.about.title;
    const target = "Solutions";
    const index = title.indexOf(target);
    
    if (index !== -1) {
      const before = title.substring(0, index);
      const match = title.substring(index, index + target.length);
      const after = title.substring(index + target.length);
      return (
        <>
          {before}
          <span className="relative-highlight">
            {match}
            <svg className="brush-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,7 C30,2 70,2 100,7 L100,9 C70,4 30,4 0,9 Z" fill="#f4510b" />
            </svg>
          </span>
          {after}
        </>
      );
    }
    return title;
  };

  // Highlight logic for Offerings Title
  const renderOfferingsTitle = () => {
    const title = data.offerings.title;
    const target = subcategoryTitle;
    const index = title.toLowerCase().indexOf(target.toLowerCase());
    
    if (index !== -1) {
      const before = title.substring(0, index);
      const match = title.substring(index, index + target.length);
      const after = title.substring(index + target.length);
      return (
        <>
          {before}<span>{match}</span>{after}
        </>
      );
    }
    return title;
  };

  const qIndex = data.cta.title.indexOf('?');
  const ctaTitlePrefix = qIndex !== -1 ? data.cta.title.substring(0, qIndex) : data.cta.title;
  const ctaTitleSuffix = qIndex !== -1 ? data.cta.title.substring(qIndex) : '';

  return (
    <main className={`subcat-page subcat-page--${subcategory}`}>
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className={`subcat-hero subcat-hero--${subcategory}`}>
        <div className="container">
          <div className="hero-grid">
            {/* Left Column Copy */}
            <div className="hero-copy">
              <p className="hero-eyebrow">
                <span className="dot" aria-hidden="true" />
                {data.hero.label}
              </p>
              <h1 className="hero-title">{renderHeroTitle()}</h1>
              <p className="hero-desc">{data.hero.description}</p>

              <div className="hero-actions">
                {data.hero.buttons.map((btn, index) => (
                  <Link
                    key={index}
                    href={btn.link}
                    className={btn.type === 'primary' ? 'btn-primary' : 'btn-secondary'}
                  >
                    {btn.text}
                    {btn.type === 'primary' ? (
                      <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
                    ) : (
                      btn.text.toLowerCase().includes("call") ? (
                        <i className="fa-solid fa-phone" style={{ marginLeft: '8px', fontSize: '12px' }} />
                      ) : null
                    )}
                  </Link>
                ))}
              </div>

              <div className="hero-badges">
                {data.hero.features.map((feat, index) => (
                  <div className="badge-item" key={index}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Visual */}
            <div className="hero-visual">
              <Image
                src={data.hero.image}
                alt={subcategoryTitle}
                width={750}
                height={500}
                className="hero-img"
                priority
              />
              {data.hero.floatingBadges && data.hero.floatingBadges.map((badge, index) => (
                <div 
                  className={`floating-badge slot-${index + 1}`} 
                  style={{ 
                    color: badge.color, 
                    borderColor: badge.borderColor 
                  } as React.CSSProperties} 
                  key={index}
                >
                  {badge.label && <span className="badge-label">{badge.label}</span>}
                  <i className={badge.iconClass} />
                  <span className="badge-name">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── ABOUT SECTION ──────────────── */}
      <section className="subcat-about">
        <div className="container">
          <div className="about-grid">
            {/* Left Image */}
            <div className="about-visual">
              <Image
                src={data.about.image}
                alt={data.about.title}
                width={540}
                height={360}
                className="about-img"
              />
            </div>

            {/* Right Content */}
            <div className="about-content">
              <span className="section-label">{data.about.label}</span>
              <h2 className="section-title">{renderAboutTitle()}</h2>
              <p className="section-desc">{data.about.description}</p>

              {/* 4 Feature cards inside the right column */}
              <div className="about-features">
                {data.about.features.map((feat, index) => {
                  const iconColors = ["orange", "blue", "green", "purple"];
                  return (
                    <div className="feat-card" key={index}>
                      <div className={`feat-icon-box card-color-${iconColors[index % 4]}`}>
                        <i className={feat.icon} aria-hidden="true" />
                      </div>
                      <h4>{feat.title}</h4>
                      <p>{feat.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── WHAT WE OFFER SECTION ──────────────── */}
      <section className="subcat-offerings">
        <div className="container">
          <div className="offerings-head">
            <span className="section-label">{data.offerings.label}</span>
            <h2 className="section-title">{renderOfferingsTitle()}</h2>
          </div>

          <div className="offerings-grid">
            {data.offerings.items.map((item, index) => {
              const borderColors = ["orange", "blue", "orange-red", "purple", "green", "red"];
              return (
                <div className={`offering-card border-color-${borderColors[index % 6]}`} key={index}>
                  <div className="offering-icon-box">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE SECTION ──────────────── */}
      <section className="subcat-whychoose">
        <div className="container">
          <div className="why-three-col-grid">
            {/* Column 1: Info & Bullets */}
            <div className="why-info-col">
              <span className="section-label">{data.whyChoose.label}</span>
              <h2 className="section-title">
                {data.whyChoose.title.toLowerCase().includes("business growth") ? (
                  <>
                    We Build Websites That Drive <span>Business Growth</span>
                  </>
                ) : (
                  data.whyChoose.title
                )}
              </h2>
              
              <div className="why-bullets">
                {data.whyChoose.bullets.map((bullet, index) => (
                  <div className="bullet-item" key={index}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="why-action">
                <Link href="/contact" className="btn-primary">
                  Let's Build Your Website <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>

            {/* Column 2: Video Thumbnail */}
            <div className="why-video-col">
              <div className="video-wrap">
                <Image
                  src={data.whyChoose.videoThumbnail}
                  alt="Why Choose Nooryak Technologies"
                  width={400}
                  height={500}
                  className="why-video-img"
                />
                <div className="play-btn-pulse">
                  <i className="fa-solid fa-play" aria-label="Play video" />
                </div>
              </div>
            </div>

            {/* Column 3: Stats Stack */}
            <div className="why-stats-col">
              {data.whyChoose.stats.map((stat, index) => {
                const icons = [
                  "fa-solid fa-chart-line",
                  "fa-solid fa-users",
                  "fa-solid fa-face-smile",
                  "fa-solid fa-clock"
                ];
                const classes = ["orange", "blue", "green", "purple"];
                return (
                  <div className={`stat-card stat-color-${classes[index % 4]}`} key={index}>
                    <div className="stat-icon-wrap">
                      <i className={icons[index % 4]} aria-hidden="true" />
                    </div>
                    <div className="stat-content">
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TECHNOLOGIES SECTION ──────────────── */}
      <section className="subcat-tech">
        <div className="container">
          <div className="tech-container-dark">
            <div className="tech-fieldset-header">
              <span className="line"></span>
              <span className="text">TECHNOLOGIES WE USE</span>
              <span className="line"></span>
            </div>
            
            <div className="tech-grid">
              {data.technologies.items.map((tech, index) => {
                const name = tech.name;
                let fontAwesomeIcon = "fa-solid fa-terminal";
                let iconColor = "#f4510b";
                
                if (name.toLowerCase().includes("html")) {
                  fontAwesomeIcon = "fa-brands fa-html5";
                  iconColor = "#e34f26";
                } else if (name.toLowerCase().includes("css")) {
                  fontAwesomeIcon = "fa-brands fa-css3-alt";
                  iconColor = "#1572b6";
                } else if (name.toLowerCase().includes("javascript") || name.toLowerCase() === "js") {
                  fontAwesomeIcon = "fa-brands fa-js";
                  iconColor = "#f7df1e";
                } else if (name.toLowerCase().includes("react")) {
                  fontAwesomeIcon = "fa-brands fa-react";
                  iconColor = "#00d8ff";
                } else if (name.toLowerCase().includes("node")) {
                  fontAwesomeIcon = "fa-brands fa-node-js";
                  iconColor = "#339933";
                } else if (name.toLowerCase().includes("php")) {
                  fontAwesomeIcon = "fa-brands fa-php";
                  iconColor = "#777bb4";
                } else if (name.toLowerCase().includes("laravel")) {
                  fontAwesomeIcon = "fa-brands fa-laravel";
                  iconColor = "#ff2d20";
                } else if (name.toLowerCase().includes("wordpress")) {
                  fontAwesomeIcon = "fa-brands fa-wordpress";
                  iconColor = "#21759b";
                } else if (name.toLowerCase().includes("mysql")) {
                  fontAwesomeIcon = "fa-solid fa-database";
                  iconColor = "#00758f";
                } else if (name.toLowerCase().includes("next")) {
                  fontAwesomeIcon = "fa-solid fa-n";
                  iconColor = "#ffffff";
                }
                
                return (
                  <div className="tech-card" key={index}>
                    {renderTechIcon(tech.name, iconColor, fontAwesomeIcon)}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── PROCESS SECTION ──────────────── */}
      <section className="subcat-process">
        <div className="container">
          <div className="process-head">
            <span className="section-label">{data.process.label}</span>
            <h2 className="section-title">{data.process.title}</h2>
          </div>

          <div className="process-timeline">
            {data.process.steps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-node">
                  <i className={step.icon} aria-hidden="true" />
                  <span className="step-num">{index + 1}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < data.process.steps.length - 1 && (
                  <div className="step-connector" aria-hidden="true">
                    <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#f4510b" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="95,7 100,10 95,13" fill="#f4510b" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── RECENT WORK SECTION ──────────────── */}
      {data.recentWork.items && data.recentWork.items.length > 0 && (
        <section className="subcat-work">
          <div className="container">
            <div className="work-head">
              <span className="section-label">{data.recentWork.label}</span>
              <h2 className="section-title">{data.recentWork.title}</h2>
            </div>

            <div className="work-grid">
              {data.recentWork.items.map((project, index) => (
                <div className="work-card-premium" key={index}>
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="work-img-wrap">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={560}
                        height={350}
                        className="work-img"
                      />
                    </div>
                  </div>
                  <div className="work-details">
                    <span className="work-tech">{project.tech}</span>
                    <h4>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="work-action-row">
              <Link href="/portfolio" className="btn-outline-primary">
                View All Projects <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────── FAQ & TESTIMONIALS SPLIT SECTION ──────────────── */}
      <section className="subcat-split">
        <div className="container">
          <div className="split-grid">
            {/* Testimonials Review Side */}
            <div className="review-side">
              <span className="quote-mark">“</span>
              {data.reviews.map((rev, index) => (
                <div className="review-card" key={index}>
                  <p className="review-quote">
                    "{rev.quote}"
                  </p>
                  <div className="review-author">
                    <div className="author-avatar-wrap">
                      <Image
                        src="https://i.pravatar.cc/150?img=12"
                        alt={rev.author}
                        width={50}
                        height={50}
                        className="author-avatar"
                      />
                    </div>
                    <div className="author-meta">
                      <span className="author-name">{rev.author}</span>
                      <span className="author-role">{rev.role}</span>
                    </div>
                    <div className="review-stars" aria-label={`Rating: ${rev.rating} stars`}>
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <i className="fa-solid fa-star" key={i} aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="testimonial-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>

            {/* FAQ Accordion Side */}
            <div className="faq-side">
              <span className="section-label">FAQS</span>
              <h3 className="split-title">Frequently Asked Questions</h3>
              <div className="faq-list">
                {data.faqs.map((faq, index) => (
                  <div
                    className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                    key={index}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openFaqIndex === index}
                    >
                      {faq.question}
                      <span className="faq-icon" aria-hidden="true">
                        <i className={openFaqIndex === index ? "fa-solid fa-minus" : "fa-solid fa-plus"} />
                      </span>
                    </button>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: openFaqIndex === index ? '200px' : '0px',
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── FINAL CTA SECTION (MLM ROCKET STYLE) ──────────────── */}
      <section className="subcat-cta">
        <div className="container">
          <div className="sd-cta-banner">
            <div className="sd-cta-banner__left">
              <h2 className="sd-cta-banner__heading">{data.cta.title}</h2>
              <p className="sd-cta-banner__sub">{data.cta.description}</p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href={data.cta.btnLink} className="btn-primary" style={{ borderRadius: '30px', padding: '12px 28px' }}>
                  {data.cta.btnText} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ borderRadius: '30px', background: '#ffffff', color: '#0f172a', border: '1px solid #ffffff', padding: '12px 28px' }}>
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px' }} /> Talk to Expert
                </Link>
              </div>
            </div>
            <div className="sd-cta-banner__right">
              <div className="sd-cta-banner__rocket-wrap">
                <div className="rocket-flame-wrap">
                  <div className="rocket-flame-outer" />
                  <div className="rocket-flame-mid" />
                  <div className="rocket-flame-core" />
                  <div className="rocket-spark spark-1" />
                  <div className="rocket-spark spark-2" />
                  <div className="rocket-spark spark-3" />
                  <div className="rocket-spark spark-4" />
                </div>
                <Image
                  src="/assets/images/services/orange_rocket_cta.png"
                  alt="Rocket Blasting Off"
                  width={220}
                  height={380}
                  className="sd-cta-banner__rocket"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
