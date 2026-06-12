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

const getSubcategoryVideoImage = (subcategory: string): string => {
  const norm = subcategory.toLowerCase()
    .replace(/_/g, '-')
    .replace(/\//g, '-')
    .replace(/&/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Exact mappings for subcategories with dedicated assets
  const exactMaps: Record<string, string> = {
    // Web Development / Design
    'web-developer': '/assets/images/services/submenu/web_development_video.png',
    'website-development': '/assets/images/services/submenu/web_development_video.png',
    'wordpress-website': '/assets/images/services/submenu/web_development_video.png',
    'ecommerce-website': '/assets/images/services/submenu/web_development_video.png',
    'shopify-website': '/assets/images/services/submenu/web_development_video.png',
    'woocommerce-website': '/assets/images/services/submenu/web_development_video.png',
    'php-web-development': '/assets/images/services/submenu/web_development_video.png',
    'react-web-development': '/assets/images/services/submenu/web_development_video.png',
    'ecommerce-development': '/assets/images/services/submenu/web_development_video.png',
    'shopify-development': '/assets/images/services/submenu/web_development_video.png',
    'custom-website-development': '/assets/images/services/submenu/web_development_video.png',
    'website-design-and-development': '/assets/images/services/submenu/web_development_video.png',

    // Mobile App Development
    'android-application': '/assets/images/services/submenu/app_development_video.png',
    'ios-application': '/assets/images/services/submenu/app_development_video.png',
    'react-native': '/assets/images/services/submenu/app_development_video.png',
    'flutter-app-development': '/assets/images/services/submenu/app_development_video.png',

    // PPC / Ads
    'google-ads': '/assets/images/services/submenu/ppc_video.png',
    'facebook-ads': '/assets/images/services/submenu/ppc_video.png',
    'display-advertising': '/assets/images/services/submenu/ppc_video.png',
    'remarketing-campaigns': '/assets/images/services/submenu/ppc_video.png',
    'social-media-advertising': '/assets/images/services/submenu/ppc_video.png',

    // Search Engine Optimization (SEO)
    'search-engine-optimization': '/assets/images/services/submenu/seo_video.png',
    'search-engine-marketing': '/assets/images/services/submenu/seo_video.png',
    'on-page-optimization': '/assets/images/services/submenu/seo_video.png',
    'off-page-optimization': '/assets/images/services/submenu/seo_video.png',
    'technical-seo': '/assets/images/services/submenu/seo_video.png',

    // Social Media Marketing & SMS & Content Marketing
    'social-media-marketing': '/assets/images/services/submenu/social_media_video.png',
    'sms-marketing': '/assets/images/services/submenu/social_media_video.png',
    'facebook-marketing': '/assets/images/services/submenu/social_media_video.png',
    'content-marketing': '/assets/images/services/submenu/social_media_video.png',
    'instagram-marketing': '/assets/images/services/submenu/social_media_video.png',
    'youtube-marketing': '/assets/images/services/submenu/social_media_video.png',
    'linkedin-marketing': '/assets/images/services/submenu/social_media_video.png',
    'twitter-marketing': '/assets/images/services/submenu/social_media_video.png',
    'social-media-post-scheduling': '/assets/images/services/submenu/social_media_video.png',

    // Local SEO
    'google-my-business-ranking': '/assets/images/services/submenu/local_seo_video.png',
    'local-directory-listings': '/assets/images/services/submenu/local_seo_video.png',
    'local-seo-tools': '/assets/images/services/submenu/local_seo_video.png',

    // Software Development & AI Automations & MLM
    'software-development': '/assets/images/services/submenu/software_dev_video.png',
    'ai-automations': '/assets/images/services/submenu/software_dev_video.png',
    'mlm-software-development': '/assets/images/services/submenu/software_dev_video.png',

    // Video Editing & Production
    'reel-videos': '/assets/images/services/submenu/video_editing_video.png',
    'model-shoot-videos': '/assets/images/services/submenu/video_editing_video.png',
    'realestate-drone-shots': '/assets/images/services/submenu/video_editing_video.png',
    'custom-videos': '/assets/images/services/submenu/video_editing_video.png',

    // Branding
    'branding': '/assets/images/services/submenu/branding_video.png',

    // Graphic Design
    'logo-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'package-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'social-media-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'brochure-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'pamphlet-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'website-banners': '/assets/images/services/submenu/graphic_design_video.png',
    'banner-designs': '/assets/images/services/submenu/graphic_design_video.png',
    '2d-3d-designs': '/assets/images/services/submenu/graphic_design_video.png',
    '2d-&-3d-designs': '/assets/images/services/submenu/graphic_design_video.png',
    '2d-and-3d-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'standee-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'creative-business-card-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'annual-report-design': '/assets/images/services/submenu/graphic_design_video.png',
    'end-to-end-event-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'csr-report-design': '/assets/images/services/submenu/graphic_design_video.png',
    'strategy-report-design': '/assets/images/services/submenu/graphic_design_video.png',
    'catalogue-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'menu-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'marriage-card-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'hoarding-billboard-designs': '/assets/images/services/submenu/graphic_design_video.png',
    'hoarding-billboard': '/assets/images/services/submenu/graphic_design_video.png',
    'hoarding-billboard-design': '/assets/images/services/submenu/graphic_design_video.png',
    'illustrations': '/assets/images/services/submenu/graphic_design_video.png',
  };

  if (exactMaps[norm]) {
    return exactMaps[norm];
  }

  // Graphic Designing & Branding Pattern Matching
  if (
    norm.includes('design') ||
    norm.includes('branding') ||
    norm.includes('banner') ||
    norm.includes('card') ||
    norm.includes('event') ||
    norm.includes('report') ||
    norm.includes('catalogue') ||
    norm.includes('menu') ||
    norm.includes('marriage') ||
    norm.includes('billboard') ||
    norm.includes('illustration')
  ) {
    return '/assets/images/services/submenu/graphic_design_video.png';
  }

  // SEO & Optimization Pattern Matching
  if (norm.includes('seo') || norm.includes('optimization') || norm.includes('ranking') || norm.includes('listing')) {
    return '/assets/images/services/submenu/seo_video.png';
  }

  // PPC & Ads & Advertising Pattern Matching
  if (norm.includes('ads') || norm.includes('advertising') || norm.includes('campaign')) {
    return '/assets/images/services/submenu/ppc_video.png';
  }

  // Video Editing Pattern Matching
  if (norm.includes('video') || norm.includes('shoot') || norm.includes('drone')) {
    return '/assets/images/services/submenu/video_editing_video.png';
  }

  // Social Media & SMS & Content Marketing Pattern Matching
  if (norm.includes('marketing') || norm.includes('sms') || norm.includes('social-media') || norm.includes('scheduling')) {
    return '/assets/images/services/submenu/social_media_video.png';
  }

  // Software & AI & MLM Pattern Matching
  if (norm.includes('software') || norm.includes('automation') || norm.includes('mlm')) {
    return '/assets/images/services/submenu/software_dev_video.png';
  }

  // Default fallback
  return '/assets/images/services/submenu/software_dev_video.png';
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
                {data.hero.buttons.map((btn, index) => {
                  // "Schedule a Call" → direct phone dial
                  if (btn.text.toLowerCase().includes('schedule') || btn.text.toLowerCase().includes('call')) {
                    return (
                      <a
                        key={index}
                        href="tel:6374913298"
                        className="btn-secondary"
                      >
                        {btn.text}
                        <i className="fa-solid fa-phone" style={{ marginLeft: '8px', fontSize: '12px' }} />
                      </a>
                    );
                  }
                  // Primary buttons ("Start Your Project", etc.) → open enquiry form
                  return (
                    <button
                      key={index}
                      type="button"
                      className={btn.type === 'primary' ? 'btn-primary' : 'btn-secondary'}
                      onClick={() => window.dispatchEvent(new Event('openEnquiryForm'))}
                    >
                      {btn.text}
                      {btn.type === 'primary' && (
                        <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
                      )}
                    </button>
                  );
                })}
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
              <div className="hero-visual-inner">
                <div className="hero-orbit-wrap">
                  <div className="orbit-ring ring-1" />
                  <div className="orbit-ring ring-2" />
                  <div className="orbit-ring ring-3" />
                  <div className="orbit-glow" />
                </div>
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
                width={800}
                height={600}
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
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => window.dispatchEvent(new Event('openEnquiryForm'))}
                >
                  Let's Build Your Website <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>

            {/* Column 2: Video Thumbnail */}
            <div className="why-video-col">
              <div className="video-wrap">
                <Image
                  src={getSubcategoryVideoImage(subcategory)}
                  alt="Why Choose Nooryak Technologies"
                  width={400}
                  height={500}
                  className="why-video-img"
                />
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
                } else if (name.toLowerCase().includes("mysql") || name.toLowerCase().includes("database") || name.toLowerCase().includes("sql")) {
                  fontAwesomeIcon = "fa-solid fa-database";
                  iconColor = "#00758f";
                } else if (name.toLowerCase().includes("next")) {
                  fontAwesomeIcon = "fa-solid fa-n";
                  iconColor = "#ffffff";
                } else if (name.toLowerCase().includes("kotlin")) {
                  fontAwesomeIcon = "fa-brands fa-android";
                  iconColor = "#7f52ff";
                } else if (name.toLowerCase().includes("android")) {
                  fontAwesomeIcon = "fa-brands fa-android";
                  iconColor = "#3ddc84";
                } else if (name.toLowerCase().includes("swift")) {
                  fontAwesomeIcon = "fa-brands fa-swift";
                  iconColor = "#f05138";
                } else if (name.toLowerCase().includes("apple") || name.toLowerCase().includes("ios") || name.toLowerCase().includes("xcode")) {
                  fontAwesomeIcon = "fa-brands fa-apple";
                  iconColor = "#ffffff";
                } else if (name.toLowerCase().includes("flutter")) {
                  fontAwesomeIcon = "fa-solid fa-mobile-screen-button";
                  iconColor = "#02569b";
                } else if (name.toLowerCase().includes("dart")) {
                  fontAwesomeIcon = "fa-solid fa-feather";
                  iconColor = "#00b4ab";
                } else if (name.toLowerCase().includes("shopify")) {
                  fontAwesomeIcon = "fa-brands fa-shopify";
                  iconColor = "#96bf48";
                } else if (name.toLowerCase().includes("woocommerce")) {
                  fontAwesomeIcon = "fa-solid fa-cart-shopping";
                  iconColor = "#96588a";
                } else if (name.toLowerCase().includes("python")) {
                  fontAwesomeIcon = "fa-brands fa-python";
                  iconColor = "#3776ab";
                } else if (name.toLowerCase().includes("openai") || name.toLowerCase().includes("ai") || name.toLowerCase().includes("gpt")) {
                  fontAwesomeIcon = "fa-solid fa-robot";
                  iconColor = "#10a37f";
                } else if (name.toLowerCase().includes("google") || name.toLowerCase().includes("analytics") || name.toLowerCase().includes("search console") || name.toLowerCase().includes("ads")) {
                  fontAwesomeIcon = "fa-brands fa-google";
                  iconColor = "#4285f4";
                } else if (name.toLowerCase().includes("facebook") || name.toLowerCase().includes("instagram") || name.toLowerCase().includes("meta")) {
                  fontAwesomeIcon = "fa-brands fa-meta";
                  iconColor = "#0ea5e9";
                } else if (name.toLowerCase().includes("buffer") || name.toLowerCase().includes("hootsuite") || name.toLowerCase().includes("scheduling")) {
                  fontAwesomeIcon = "fa-solid fa-clock-rotate-left";
                  iconColor = "#00b5ad";
                } else if (name.toLowerCase().includes("semrush") || name.toLowerCase().includes("ahrefs") || name.toLowerCase().includes("seo") || name.toLowerCase().includes("pagespeed")) {
                  fontAwesomeIcon = "fa-solid fa-magnifying-glass-chart";
                  iconColor = "#ff642d";
                } else if (name.toLowerCase().includes("photoshop")) {
                  fontAwesomeIcon = "fa-solid fa-image";
                  iconColor = "#31a8ff";
                } else if (name.toLowerCase().includes("illustrator")) {
                  fontAwesomeIcon = "fa-solid fa-bezier-curve";
                  iconColor = "#ff9a00";
                } else if (name.toLowerCase().includes("indesign")) {
                  fontAwesomeIcon = "fa-solid fa-book-open";
                  iconColor = "#ff1cec";
                } else if (name.toLowerCase().includes("figma")) {
                  fontAwesomeIcon = "fa-brands fa-figma";
                  iconColor = "#f24e1e";
                } else if (name.toLowerCase().includes("canva")) {
                  fontAwesomeIcon = "fa-solid fa-wand-magic-sparkles";
                  iconColor = "#00c4cc";
                } else if (name.toLowerCase().includes("premiere")) {
                  fontAwesomeIcon = "fa-solid fa-video";
                  iconColor = "#ea77ff";
                } else if (name.toLowerCase().includes("effects")) {
                  fontAwesomeIcon = "fa-solid fa-circle-play";
                  iconColor = "#ea77ff";
                } else if (name.toLowerCase().includes("resolve") || name.toLowerCase().includes("davinci")) {
                  fontAwesomeIcon = "fa-solid fa-compact-disc";
                  iconColor = "#1188ff";
                } else if (name.toLowerCase().includes("drone") || name.toLowerCase().includes("dji")) {
                  fontAwesomeIcon = "fa-solid fa-helicopter";
                  iconColor = "#ff4400";
                } else if (name.toLowerCase().includes("git")) {
                  fontAwesomeIcon = "fa-brands fa-git-alt";
                  iconColor = "#f05032";
                } else if (name.toLowerCase().includes("docker")) {
                  fontAwesomeIcon = "fa-brands fa-docker";
                  iconColor = "#2496ed";
                } else if (name.toLowerCase().includes("tailwind")) {
                  fontAwesomeIcon = "fa-solid fa-wind";
                  iconColor = "#38bdf8";
                } else if (name.toLowerCase().includes("typescript")) {
                  fontAwesomeIcon = "fa-solid fa-code";
                  iconColor = "#3178c6";
                } else if (name.toLowerCase().includes("java")) {
                  fontAwesomeIcon = "fa-brands fa-java";
                  iconColor = "#007396";
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
              <p className="work-head__sub">Hover over a project to explore our work in detail</p>
            </div>

            <div className="work-grid">
              {data.recentWork.items.map((project, index) => {
                const firstTech = project.tech ? project.tech.split(',')[0].trim() : 'Project';
                return (
                  <div className="work-card-premium" key={index}>
                    <div className="work-scroll-wrap">
                      <div className="work-scroll-inner">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="work-scroll-img"
                        />
                      </div>
                      <span className={`work-card-badge badge-color-${index % 3}`}>
                        {firstTech}
                      </span>
                    </div>
                    <div className="work-card-details">
                      <p className="work-card-tech">{project.tech}</p>
                      <h4 className="work-card-title" title={project.title}>{project.title}</h4>
                      <div className="work-card-actions">
                        <Link href={project.link || "/portfolio"} className="btn-live-preview">
                          <i className="fa-regular fa-eye" /> Live Preview
                        </Link>
                        <Link href={project.link || "/portfolio"} className="btn-purchase">
                          View Project <i className="fa-solid fa-arrow-up-right-from-square" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                <button
                  type="button"
                  className="btn-primary"
                  style={{ borderRadius: '30px', padding: '12px 28px' }}
                  onClick={() => window.dispatchEvent(new Event('openEnquiryForm'))}
                >
                  {data.cta.btnText} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
                </button>
                <a
                  href="tel:6374913298"
                  className="btn-secondary"
                  style={{ borderRadius: '30px', background: '#ffffff', color: '#0f172a', border: '1px solid #ffffff', padding: '12px 28px' }}
                >
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px' }} /> Talk to Expert
                </a>
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
