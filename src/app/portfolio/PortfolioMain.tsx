'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Grid,
  Target,
  Code,
  Smartphone,
  Palette,
  Briefcase,
  Smile,
  Globe,
  RefreshCw,
  ShoppingBag,
  Rocket,
  Users,
  ArrowRight
} from 'lucide-react';

import { Project, projectsData } from '@/data/portfolioMainData';

const categories = [
  { name: 'All Projects', icon: <Grid size={15} /> },
  { name: 'Web Development', icon: <Code size={15} /> },
  { name: 'Mobile Apps', icon: <Smartphone size={15} /> },
  { name: 'UI/UX Design', icon: <Palette size={15} /> },
  { name: 'E-Commerce', icon: <ShoppingBag size={15} /> },
  { name: 'Software Solutions', icon: <Briefcase size={15} /> },
  { name: 'Digital Marketing', icon: <Target size={15} /> }
];

const ITEMS_PER_ROW = 4;
const INITIAL_ITEMS = 8; // 2 rows * 4 columns

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [animateGrid, setAnimateGrid] = useState(false);

  const getInitialItemsCount = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 5;
    }
    return 8;
  };

  // Filter projects dynamically when tab changes
  useEffect(() => {
    setAnimateGrid(false);
    setVisibleCount(getInitialItemsCount());
    const timeout = setTimeout(() => {
      if (activeTab === 'All Projects') {
        setFilteredProjects(projectsData);
      } else if (activeTab === 'Web Development') {
        setFilteredProjects(projectsData.filter(p => p.category === 'Web Development' || p.id === 13));
      } else if (activeTab === 'Mobile Apps') {
        setFilteredProjects(projectsData.filter(p => p.category === 'App Development' || p.category === 'Mobile Apps'));
      } else if (activeTab === 'UI/UX Design') {
        setFilteredProjects(projectsData.filter(p => p.category === 'Branding & Design' || p.category === 'UI/UX Design'));
      } else if (activeTab === 'E-Commerce' || activeTab === 'eCommerce') {
        setFilteredProjects(projectsData.filter(p => (p.category === 'eCommerce' || p.category === 'E-Commerce' || p.id === 2) && p.id !== 13));
      } else if (activeTab === 'Software Solutions') {
        setFilteredProjects(projectsData.filter(p => p.category === 'Web Development' || p.category === 'eCommerce'));
      } else if (activeTab === 'Digital Marketing') {
        setFilteredProjects(projectsData.filter(p => p.category === 'Digital Marketing'));
      } else {
        setFilteredProjects(projectsData.filter(p => p.category === activeTab));
      }
      setAnimateGrid(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleLoadMore = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const increment = isMobile ? 3 : 4;
    setVisibleCount((prev) => prev + increment);
  };

  const handleTabClick = (categoryName: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(categoryName);
    const button = e.currentTarget;
    button.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handleStartProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openEnquiryForm'));
    }
  };

  // Helper to get category-specific badge class
  const getBadgeClass = (category: string) => {
    switch (category) {
      case 'Digital Marketing':
        return 'badge-orange';
      case 'Web Development':
        return 'badge-blue';
      case 'eCommerce':
      case 'E-Commerce':
        return 'badge-teal';
      case 'App Development':
      case 'Mobile Apps':
        return 'badge-purple';
      case 'Branding & Design':
      case 'UI/UX Design':
        return 'badge-green';
      default:
        return 'badge-gray';
    }
  };

  return (
    <div className="portfolio-page-wrapper">

      {/* ── HERO BANNER SECTION (Pixel-by-Pixel Ref Match) ── */}
      <section className="portfolio-hero">
        <div className="container-fluid max-w-1450">
          <div className="row align-items-center">

            {/* Left Content Column */}
            <div className="col-12 col-lg-7 col-xl-6">
              <div className="portfolio-hero-left">
                {/* Kicker badge with orange line */}
                <div className="portfolio-hero-kicker">
                  <span className="kicker-line"></span>
                  <span className="kicker-text">OUR PORTFOLIO</span>
                </div>

                {/* Main Heading */}
                <h1 className="portfolio-hero-title">
                  Our Work. <br />
                  <span className="orange-highlight">Real Impact.</span>
                </h1>

                {/* Subtitle */}
                <p className="portfolio-hero-desc">
                  Explore our successful projects across web, mobile and enterprise solutions, built with passion and delivered for clients worldwide.
                </p>

                {/* Tech Stack Pills Row */}
                <div className="portfolio-tech-stack">
                  {/* Laravel */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Laravel</span>
                  </div>

                  {/* React */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)" />
                      <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
                    </svg>
                    <span>React</span>
                  </div>

                  {/* Next.js */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16">
                      <circle cx="12" cy="12" r="11" fill="#000000" />
                      <path d="M9 7v10M9 7l8.5 10M15 7v5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Next.js</span>
                  </div>

                  {/* PHP */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <rect x="2" y="5" width="20" height="14" rx="7" fill="#8892BF" />
                      <text x="12" y="15" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">php</text>
                    </svg>
                    <span>php</span>
                  </div>

                  {/* Flutter */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <path d="M14.5 2L4 12.5l3.5 3.5L19.5 4H14.5z" fill="#02569B" />
                      <path d="M14.5 14L8.5 20h5l4.5-4.5L14.5 14z" fill="#0175C2" />
                      <path d="M11 11.5L8.5 14l2.5 2.5 2.5-2.5L11 11.5z" fill="#29B6F6" />
                    </svg>
                    <span>Flutter</span>
                  </div>

                  {/* WordPress */}
                  <div className="tech-pill">
                    <svg className="tech-icon" viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <circle cx="12" cy="12" r="11" fill="#21759B" />
                      <path d="M6 12a6 6 0 0010.5 4l-3-8.5-2.5 7-1.5-4.5A5.9 5.9 0 006 12z" fill="#ffffff" />
                      <path d="M17.5 10.5c.1.4.1.8.1 1.2a5.9 5.9 0 01-1.3 3.6l2.3-6.5c-.3.5-.7 1.1-1.1 1.7z" fill="#ffffff" />
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" fill="#ffffff" />
                    </svg>
                    <span>WordPress</span>
                  </div>

                  {/* and more... */}
                  <span className="tech-more">and more...</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Stats Bar (Positioned over glowing world map) */}
            <div className="col-12 col-lg-5 col-xl-6 d-flex justify-content-lg-end justify-content-center align-self-end mt-4 mt-lg-0">
              <div className="portfolio-floating-stat-card">
                {/* Stat 1 */}
                <div className="stat-card-unit">
                  <div className="stat-unit-icon">
                    <Rocket size={22} color="#FF5216" strokeWidth={2.2} />
                  </div>
                  <div className="stat-unit-text">
                    <span className="stat-unit-num">100+</span>
                    <span className="stat-unit-label">Projects Delivered</span>
                  </div>
                </div>

                <div className="stat-unit-divider"></div>

                {/* Stat 2 */}
                <div className="stat-card-unit">
                  <div className="stat-unit-icon">
                    <Users size={22} color="#FF5216" strokeWidth={2.2} />
                  </div>
                  <div className="stat-unit-text">
                    <span className="stat-unit-num">75+</span>
                    <span className="stat-unit-label">Happy Clients</span>
                  </div>
                </div>

                <div className="stat-unit-divider"></div>

                {/* Stat 3 */}
                <div className="stat-card-unit">
                  <div className="stat-unit-icon">
                    <Globe size={22} color="#FF5216" strokeWidth={2.2} />
                  </div>
                  <div className="stat-unit-text">
                    <span className="stat-unit-num">20+</span>
                    <span className="stat-unit-label">Countries Served</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FILTER TABS SECTION ── */}
      <section className="portfolio-filter-section">
        <div className="container-fluid max-w-1450">

          <div className="filter-top-bar">
            <ul className="portfolio-tabs-nav">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={(e) => handleTabClick(cat.name, e)}
                    className={`portfolio-tab-btn ${activeTab === cat.name ? 'active' : ''}`}
                  >
                    <span className={`tab-icon ${activeTab === cat.name ? 'icon-active' : `icon-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}`}>
                      {cat.icon}
                    </span>
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                setActiveTab('All Projects');
                document.querySelector('.portfolio-filter-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-view-all-projects d-none d-lg-inline-flex"
            >
              <span>View All Projects</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* ── PROJECT GRID ── */}
          <div className="portfolio-grid">
            <div className="row">
              {filteredProjects.slice(0, visibleCount).map((project) => (
                <div
                  key={project.id}
                  className={`col-xl-3 col-lg-3 col-md-6 col-12 portfolio-card-col ${animateGrid ? 'fade-in-item' : ''}`}
                  style={{ opacity: animateGrid ? 1 : 0 }}
                >
                  <div className="portfolio-card">

                    {/* Visual Card Image Wrap */}
                    <div className="portfolio-card-image-wrap">
                      <span className={`category-badge ${getBadgeClass(project.category)}`}>
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="card-international-badge">
                          🌍 {project.badge}
                        </span>
                      )}
                      {project.scrollImage ? (
                        <div className="portfolio-card-scroll-container">
                          <img
                            src={project.scrollImage}
                            alt={project.title}
                            className="card-project-img-scroll"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="card-project-img"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="portfolio-card-content">
                      <h4 className="portfolio-card-title">
                        <Link href={project.link}>
                          {project.title}
                        </Link>
                      </h4>
                      <p className="portfolio-card-desc">{project.description}</p>

                      <div className="portfolio-card-footer-custom">
                        <Link href={project.link} className="view-case-study-link">
                          View <span className="arrow-right">→</span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="load-more-container">
              <button type="button" onClick={handleLoadMore} className="btn-load-more">
                Load More Projects
                <RefreshCw size={16} className="refresh-icon" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ── */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-card">

            <div className="cta-left-content">
              <span className="cta-label-orange">HAVE A PROJECT IN MIND?</span>
              <h2 className="cta-title">
                Let's Build Something <br />
                <span>Amazing Together.</span>
              </h2>
            </div>

            <div className="cta-right-content">
              <p className="cta-description">
                We're excited to hear about your ideas and help you turn them into powerful digital solutions.
              </p>
              <div className="cta-actions">
                <a
                  href="#"
                  onClick={handleStartProjectClick}
                  className="btn-cta-orange"
                >
                  Start a Project
                  <span className="arrow-icon">
                    →
                  </span>
                </a>
                <a href="/contact" className="btn-cta-outline">
                  <span className="phone-icon">📞</span>
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
