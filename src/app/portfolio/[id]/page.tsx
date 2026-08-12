'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import '../portfolio.scss';
import { projectsData } from '@/data/portfolioMainData';
import {
  ArrowLeft, ExternalLink, Calendar, User, Tag, Award,
  Play, Pause, Clock, CheckCircle, Globe, Code,
  TrendingUp, ShoppingCart, Users, Smile, ChevronLeft, ChevronRight, HelpCircle
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';

// Custom component to render SVG tech logos
function TechIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n === 'wordpress') {
    return <img src="/assets/images/icons/wordpress.png" alt="WordPress" className="tech-icon-img" />;
  }
  if (n === 'php') {
    return <img src="/assets/images/icons/php.png" alt="PHP" className="tech-icon-img" />;
  }
  if (n === 'mysql') {
    return <img src="/assets/images/icons/mysql.png" alt="MySQL" className="tech-icon-img" />;
  }
  if (n === 'html5' || n === 'html') {
    return <img src="/assets/images/icons/html.png" alt="HTML5" className="tech-icon-img" />;
  }
  if (n === 'css3' || n === 'css') {
    return <img src="/assets/images/icons/css.png" alt="CSS3" className="tech-icon-img" />;
  }
  if (n === 'javascript' || n === 'js') {
    return <img src="/assets/images/icons/js.png" alt="JavaScript" className="tech-icon-img" />;
  }
  return <HelpCircle size={20} />;
}

// Helper to render Lucide Icons dynamically
function RenderIcon({ type, size = 20 }: { type: string; size?: number }) {
  switch (type.toLowerCase()) {
    case 'user':
      return <User size={size} />;
    case 'globe':
      return <Globe size={size} />;
    case 'code':
      return <Code size={size} />;
    case 'clock':
      return <Clock size={size} />;
    case 'check-circle':
      return <CheckCircle size={size} />;
    case 'calendar':
      return <Calendar size={size} />;
    case 'trending-up':
      return <TrendingUp size={size} className="result-icon-orange" />;
    case 'shopping-cart':
      return <ShoppingCart size={size} className="result-icon-orange" />;
    case 'users':
      return <Users size={size} className="result-icon-orange" />;
    case 'smile':
      return <Smile size={size} className="result-icon-orange" />;
    default:
      return <HelpCircle size={size} />;
  }
}

// Helper component to animate result metric numbers when scrolled into view
function ResultMetricCounter({ valueString }: { valueString: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = valueString.match(/^([^\d]*)([\d.]+)([^\d]*)$/);
    if (!match) {
      setDisplayValue(valueString);
      return;
    }
    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';
    const targetNum = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentNum = targetNum * easeProgress;

              setDisplayValue(`${prefix}${currentNum.toFixed(decimals)}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(`${prefix}${targetNum.toFixed(decimals)}${suffix}`);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [valueString, hasAnimated]);

  return <span ref={elementRef} className="result-metric-value">{displayValue || valueString}</span>;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const project = projectsData.find((p) => p.id === parseInt(id));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isDeviceVisible, setIsDeviceVisible] = useState(false);

  const deviceBlockRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDeviceVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (deviceBlockRef.current) {
      observer.observe(deviceBlockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!project && id) {
      router.push('/portfolio');
    }
  }, [project, id, router]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    let smoother: any = null;
    try {
      const { ScrollSmoother } = require('gsap/ScrollSmoother');
      smoother = ScrollSmoother.get();
    } catch (e) {
      // Gracefully catch GSAP loading issues
    }

    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      if (smoother) smoother.paused(true);
    } else {
      document.body.style.overflow = 'unset';
      if (smoother) smoother.paused(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (smoother) smoother.paused(false);
    };
  }, [lightboxOpen]);

  if (!project) {
    return (
      <div className="portfolio-detail-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const gallery = project.screenshots || project.gallery;
    if (gallery) {
      setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const gallery = project.screenshots || project.gallery;
    if (gallery) {
      setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const isVideoCategory = project.category === 'Videos';

  const renderLaptopMockup = () => (
    project.scrollImage ? (
      <div className="project-hero-mockup-container">
        <img
          src={project.detailHeroImage || project.image}
          alt={`${project.title} mockups`}
          className="project-hero-mockup-img-base"
        />
        <div className="laptop-screen-scroll-container">
          <img
            src={project.scrollImage}
            alt="Laptop screen content"
            className="laptop-screen-scroll-img"
          />
        </div>
      </div>
    ) : project.detailHeroImage ? (
      <img
        src={project.detailHeroImage}
        alt={`${project.title} mockups`}
        className="project-hero-mockup-img"
      />
    ) : (
      <img
        src={project.image}
        alt={`${project.title} cover`}
        className="project-hero-cover-img-fallback"
      />
    )
  );

  return (
    <div className="portfolio-detail-wrapper">


      {/* ── PREMIUM DARK HERO CARD ── */}
      <section className="project-detail-hero-section">
        <div className="container">
          <div className="project-detail-hero-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 project-hero-info">
                <div className="project-hero-badges">
                  <span className="project-category-badge-premium">{project.category}</span>
                  {project.badge && (
                    <span className="project-international-badge">
                      🌍 {project.badge}
                    </span>
                  )}
                </div>
                <h1 className="project-detail-title-premium">
                  {project.subtitle || project.title}
                </h1>

                {/* Laptop Mockup Image for Mobile View (Right below title) */}
                <div className="project-hero-mockup-wrapper d-block d-lg-none my-4">
                  {renderLaptopMockup()}
                </div>

                <p className="project-detail-desc-premium">
                  {project.description}
                </p>

                <div className="project-hero-actions-premium">
                  <a
                    href={
                      !project.projectUrl ||
                      project.projectUrl.includes('nooryak.com') ||
                      project.projectUrl === '#'
                        ? '/coming-soon'
                        : project.projectUrl
                    }
                    target={
                      !project.projectUrl ||
                      project.projectUrl.includes('nooryak.com') ||
                      project.projectUrl === '#'
                        ? '_self'
                        : '_blank'
                    }
                    rel="noopener noreferrer"
                    className="btn-live-preview-premium"
                  >
                    Live Preview ↗
                  </a>
                </div>

                {project.technologies && (
                  <div className="project-technologies-section">
                    <span className="tech-section-label">Technologies Used:</span>
                    <div className="tech-icons-row">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} className="tech-icon-item" title={tech.name}>
                          <div className="tech-icon-circle">
                            <TechIcon name={tech.iconType} />
                          </div>
                          <span className="tech-icon-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Laptop Mockup Image for Desktop View (Right side 50% column) */}
              <div className="col-lg-6 project-hero-mockup-wrapper d-none d-lg-block">
                {renderLaptopMockup()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW SECTION ── */}
      <section className="project-overview-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: Responsive Mockup */}
            <div className="col-lg-6 order-lg-1 order-2">
              <div
                ref={deviceBlockRef}
                className={`overview-responsive-device-block ${isDeviceVisible ? 'is-visible' : ''}`}
              >
                <h2 className="overview-section-heading">100% responsive device</h2>

                <div className="overview-mobile-mockup-wrapper">
                  <div className="overview-mobile-mockup-container">
                    <img
                      src="/assets/images/Portfolio/projects/mobile_tablet.png"
                      alt="Mobile and tablet mockups frame"
                      className="mobile-mockup-img-base"
                    />

                    {/* Left phone screen overlay */}
                    <div className="mobile-screen-scroll-container screen-left">
                      <img
                        src={project.mobileScrollImage || project.scrollImage || project.image}
                        alt="Mobile screen content"
                        className="mobile-screen-scroll-img"
                      />
                    </div>

                    {/* Right tablet screen overlay */}
                    <div className="mobile-screen-scroll-container screen-right">
                      <img
                        src={project.tabletScrollImage || project.scrollImage || project.image}
                        alt="Tablet screen content"
                        className="mobile-screen-scroll-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Overview Details */}
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="overview-text-block">
                <h2 className="overview-section-heading">Project Overview</h2>
                {project.category !== 'Web Development' && (
                  <p className="overview-paragraph">
                    {project.overview || project.description}
                  </p>
                )}
              </div>

              {project.category !== 'Web Development' && project.features && (
                <div className="overview-features-block mt-4 mb-4">
                  <div className="row g-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="feature-bullet-item">
                          <span className="check-icon-circle">✓</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.metaGrid ? (
                <div className="meta-info-grid-container">
                  <div className="row g-3">
                    {project.metaGrid.map((item, idx) => (
                      <div key={idx} className="col-6">
                        <div className="meta-grid-card">
                          <div className="meta-grid-icon-box">
                            <RenderIcon type={item.iconType} />
                          </div>
                          <div className="meta-grid-info">
                            <span className="meta-grid-label">{item.label}</span>
                            <span className="meta-grid-value">{item.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="project-meta-card-fallback">
                  <h3 className="meta-card-title">Project Details</h3>
                  <ul className="meta-list">
                    <li>
                      <div className="meta-icon"><User size={18} /></div>
                      <div className="meta-info">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{project.client}</span>
                      </div>
                    </li>
                    <li>
                      <div className="meta-icon"><Calendar size={18} /></div>
                      <div className="meta-info">
                        <span className="meta-label">Date</span>
                        <span className="meta-value">{project.date}</span>
                      </div>
                    </li>
                    <li>
                      <div className="meta-icon"><Tag size={18} /></div>
                      <div className="meta-info">
                        <span className="meta-label">Category</span>
                        <span className="meta-value">{project.category}</span>
                      </div>
                    </li>
                    <li>
                      <div className="meta-icon"><Award size={18} /></div>
                      <div className="meta-info">
                        <span className="meta-label">Services</span>
                        <span className="meta-value">{project.services}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT SCREENSHOTS SLIDER ── */}
      {(project.screenshots || project.gallery) && (
        <section className="project-screenshots-slider-section">
          <div className="container">
            <div className="screenshots-header text-center">
              <h2 className="screenshots-section-heading">Project Screenshots</h2>
              <p className="screenshots-section-subheading">A glimpse of the website we built</p>
            </div>

            <div className="screenshots-carousel-wrapper">
              <button
                className="carousel-control-btn prev-btn"
                aria-label="Previous screenshots"
              >
                <ChevronLeft size={24} />
              </button>

              <Swiper
                modules={[Autoplay, Navigation, FreeMode]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                spaceBetween={24}
                speed={1000}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2.5 },
                  1200: { slidesPerView: 3 },
                }}
                className="screenshots-swiper"
              >
                {(project.screenshots || project.gallery || []).map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="screenshot-card"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className="screenshot-zoom-overlay">
                        <span className="zoom-plus-icon">+</span>
                      </div>
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="screenshot-img"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="carousel-control-btn next-btn"
                aria-label="Next screenshots"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS & IMPACT SECTION ── */}
      {project.results && (
        <section className="project-results-impact-section">
          <div className="container">
            <div className="results-impact-card">
              <h2 className="results-section-heading">Results & Impact</h2>
              <p className="results-section-subheading">The website has delivered exceptional results for the client</p>

              <div className="row g-4 mt-2">
                {project.results.map((result, idx) => (
                  <div key={idx} className="col-lg-3 col-6">
                    <div className="result-metric-box">
                      <div className="result-metric-header">
                        <div className="result-metric-icon-circle">
                          <RenderIcon type={result.iconType} size={22} />
                        </div>
                        <ResultMetricCounter valueString={result.value} />
                      </div>
                      <span className="result-metric-label">{result.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA SECTION ── */}
      <section className="project-bottom-cta-section">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-lg-7">
                <span className="cta-small-label">Have a Similar Project in Mind?</span>
                <h2 className="cta-main-title">
                  Let's Build Something <span className="text-highlight-orange">Amazing</span> Together!
                </h2>
              </div>
              <div className="col-lg-5 text-lg-end">
                <p className="cta-desc-text">
                  We help businesses create powerful digital solutions that drive growth and deliver real results.
                </p>
                <div className="cta-actions-row">
                  <Link href="/contact" className="btn-cta-start-project">
                    Start a Project ↗
                  </Link>
                  <Link href="/contact" className="btn-cta-contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {/* Subtle decorative rocket svg background overlay */}
            <div className="cta-rocket-bg-overlay">
              <svg viewBox="0 0 100 100" width="120" height="120" fill="currentColor">
                <path d="M50 15c-1.5 0-3 3-5 7.5-2.8 6.3-4.5 14.5-4.5 22.5 0 8 1.7 16.2 4.5 22.5 2 4.5 3.5 7.5 5 7.5s3-3 5-7.5c2.8-6.3 4.5-14.5 4.5-22.5 0-8-1.7-16.2-4.5-22.5-2-4.5-3.5-7.5-5-7.5zM35 50c-2 0-3.5 1.5-3.5 3.5V65c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-11.5c0-2-1.5-3.5-3.5-3.5zm30 0c-2 0-3.5 1.5-3.5 3.5V65c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-11.5c0-2-1.5-3.5-3.5-3.5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL FOR IMAGES ── */}
      {mounted && lightboxOpen && (project.screenshots || project.gallery) && typeof window !== 'undefined' && createPortal(
        <div className="lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)}>&times;</button>

          <button className="lightbox-nav-btn prev" onClick={handlePrevImage}>&#10094;</button>
          <button className="lightbox-nav-btn next" onClick={handleNextImage}>&#10095;</button>

          <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={(project.screenshots || project.gallery || [])[currentImageIndex]}
              alt={`${project.title} full view`}
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              {project.title} - Image {currentImageIndex + 1} of {(project.screenshots || project.gallery || []).length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
