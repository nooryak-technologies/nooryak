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
  switch (name.toLowerCase()) {
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#0073AA" className="tech-svg">
          <path d="M12.158 12.786l-2.698 7.84a10.05 10.05 0 005.16-.438zm-2.115-1.29l2.253-6.52c-.653-.032-1.246-.052-1.246-.052-.702-.032-.67-.98.032-.98h4.526c.702 0 .67.948-.032.98 0 0-.604.02-1.225.044l-2.203 6.262 2.378 7.15c.613-.67 1.133-1.417 1.55-2.235l-2.887-8.08c.55-.032 1.05-.052 1.05-.052.702-.032.67-.98-.032-.98h2.906c.367 0 .367.98 0 .98l-.348.016a9.92 9.92 0 011.085 4.542 9.878 9.878 0 01-1.637 5.385zm-.69-.475L6.684 19.38A9.975 9.975 0 012 12a9.926 9.926 0 011.905-5.845zM12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#777BB4" className="tech-svg">
          <path d="M12.013 1.996C6.486 1.996 2 6.48 2 12.008c0 5.526 4.486 10.013 10.013 10.013 5.529 0 10.013-4.487 10.013-10.013 0-5.528-4.484-10.012-10.013-10.012zm5.72 12.593c-.443.79-1.272 1.185-2.487 1.185-.758 0-1.4-.153-1.929-.462-.528-.31-.914-.73-1.157-1.261h-.064l-.225 1.543h-2.146l1.378-9.479h2.339l-.608 4.195h.063c.427-.773 1.157-1.16 2.193-1.16.892 0 1.52.277 1.888.831.366.554.437 1.294.214 2.219a5.15 5.15 0 01-.527 1.488a4.832 4.832 0 01-.933 1.402zm-10.457 1.185H4.937L6.315 6.3h2.34L7.818 11.75c.422-.767 1.147-1.15 2.179-1.15.895 0 1.52.277 1.879.83.359.555.432 1.296.216 2.222a5.122 5.122 0 01-.529 1.486 4.832 4.832 0 01-.933 1.402c-.441.79-1.268 1.185-2.481 1.185a3.834 3.834 0 01-1.873-.45zm4.84-2.825c.08-.544.025-.94-.165-1.191-.19-.25-.503-.377-.941-.377-.504 0-.897.23-1.176.691-.28.462-.464 1.109-.553 1.944-.084.55.029.95.337 1.202.308.25.642.376.999.376.494 0 .88-.225 1.158-.675.278-.45.426-1.106.341-1.97zm7.553.056c.078-.547.021-.944-.171-1.193-.191-.249-.502-.373-.935-.373-.502 0-.895.228-1.176.685-.282.457-.468 1.102-.559 1.936-.08.549.032.948.337 1.2.305.25.639.376.999.376.495 0 .88-.225 1.158-.674.278-.45.429-1.107.347-1.957z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#00758F" className="tech-svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.42 15.25c-1.37-.06-2.58-.66-3.23-1.63-.38-.57-.52-1.13-.52-2.12 0-1.83.92-3.15 2.62-3.76.67-.24 1.49-.33 2.52-.33h.84v-.96c0-.85-.04-1.04-.22-1.3-.23-.33-.68-.48-1.37-.48-1.02 0-1.68.29-2.02.9l-.16.29H5.2l.14-.38C5.83 6.04 7.63 5 10.3 5c2.3 0 3.73.61 4.54 1.93.38.61.47 1.04.47 2.37v4.61c0 1.83.05 2.19.34 2.57.2.26.47.33 1.01.33.32 0 .54-.03.74-.11l.3-.11.08.38c.11.53.04.66-.41.87-.63.29-1.52.37-2.16.21-.61-.15-.99-.54-1.16-1.19l-.07-.27h-.08c-.46.77-1.22 1.25-2.26 1.43-.27.05-.72.07-.99.07zm1.88-4.43c.8-.08 1.34-.33 1.66-.75.31-.41.38-.72.38-1.62v-.73h-.76c-1.05 0-1.78.13-2.17.4-.41.27-.63.76-.63 1.39 0 .86.53 1.36 1.52 1.31z" />
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#E34F26" className="tech-svg">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zM18.7 5H5.3l.4 4.5H14l-.4 4.1-3.6 1-3.6-1-.2-2.5H4.1l.4 6.1 7.5 2.1 7.5-2.1.9-9.7.1-1.5z" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#1572B6" className="tech-svg">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zM18.6 5.8H5.4l.2 2.7h10.2l-.3 3.5-3.5 1-3.5-1-.2-2H5.6l.4 4.8 6 1.7 6-1.7.7-7.6z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#F7DF1E" className="tech-svg">
          <path d="M0 0h24v24H0zM20 18.2c0-1.1-.6-1.8-1.8-2.3-1.1-.4-2-.7-2-.7s-1-.3-1-.8.4-.7 1-.7c.8 0 1.2.4 1.2.4l1.1-1.3s-.9-.8-2.2-.8c-1.8 0-3 1.1-3 2.7 0 1.6 1 2.2 2.6 2.8 1.4.5 1.8.8 1.8 1.3 0 .7-.7 1.1-1.5 1.1-1.1 0-1.9-.6-1.9-.6L13 21.2s1 1 2.9 1c2.1-.1 4.1-1.3 4.1-4zm-9-.6v-5.1H8.7v5.3c0 1.2-.5 1.8-1.5 1.8-1 0-1.4-.6-1.4-1.5v-5.6H3.5V18c0 2.2 1.2 3.3 3.3 3.3 2 0 3.2-1.1 3.2-3.1v-.6z" />
        </svg>
      );
    default:
      return <HelpCircle size={20} />;
  }
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

  return (
    <div className="portfolio-detail-wrapper">


      {/* ── PREMIUM DARK HERO CARD ── */}
      <section className="project-detail-hero-section">
        <div className="container">
          <div className="project-detail-hero-card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 project-hero-info order-lg-1 order-2">
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
                <p className="project-detail-desc-premium">
                  {project.description}
                </p>

                <div className="project-hero-actions-premium">
                  <a
                    href={project.projectUrl}
                    target="_blank"
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

              <div className="col-lg-6 project-hero-mockup-wrapper order-lg-2 order-1">
                {project.scrollImage ? (
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
                )}
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
