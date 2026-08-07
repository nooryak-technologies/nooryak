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
  ShoppingBag
} from 'lucide-react';

import { Project, projectsData } from '@/data/portfolioMainData';

const categories = [
  { name: 'All Projects', icon: <Grid size={16} /> },
  { name: 'Digital Marketing', icon: <Target size={16} /> },
  { name: 'Web Development', icon: <Code size={16} /> },
  { name: 'eCommerce', icon: <ShoppingBag size={16} /> },
  { name: 'App Development', icon: <Smartphone size={16} /> },
  { name: 'Branding & Design', icon: <Palette size={16} /> }
];

const ITEMS_PER_ROW = 4;
const INITIAL_ITEMS = 8; // 2 rows * 4 columns

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_ITEMS);
  const [animateGrid, setAnimateGrid] = useState(false);

  // Filter projects dynamically when tab changes
  useEffect(() => {
    setAnimateGrid(false);
    setVisibleCount(INITIAL_ITEMS);
    const timeout = setTimeout(() => {
      if (activeTab === 'All Projects') {
        setFilteredProjects(projectsData);
      } else if (activeTab === 'eCommerce') {
        setFilteredProjects(projectsData.filter(p => (p.category === 'eCommerce' || p.id === 2) && p.id !== 13));
      } else if (activeTab === 'Web Development') {
        setFilteredProjects(projectsData.filter(p => p.category === 'Web Development' || p.id === 13));
      } else {
        setFilteredProjects(projectsData.filter(p => p.category === activeTab));
      }
      setAnimateGrid(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_ROW);
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
        return 'badge-teal';
      case 'App Development':
        return 'badge-purple';
      case 'Branding & Design':
        return 'badge-green';
      default:
        return 'badge-gray';
    }
  };

  return (
    <div className="portfolio-page-wrapper">

      {/* ── HERO SECTION ── */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <div className="portfolio-hero-left">
                <span className="portfolio-label-orange animate-up delay-1">OUR PORTFOLIO</span>

                <h1 className="portfolio-hero-title animate-up delay-2">
                  Our Work. <br />
                  <span>Real Results.</span>
                </h1>

                <p className="portfolio-hero-desc animate-up delay-3">
                  Explore our latest projects across digital marketing, web development, app development and branding. Each project reflects our commitment to quality, creativity and performance.
                </p>

                {/* Orange Divider Line */}
                <div className="portfolio-divider animate-up delay-3">
                  <span className="divider-dot"></span>
                  <span className="divider-line"></span>
                </div>

                {/* Stats Row */}
                <div className="portfolio-hero-stats animate-up delay-4">
                  <div className="stat-item">
                    <div className="stat-icon-box">
                      <Briefcase size={18} />
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">138+</span>
                      <span className="stat-label">Projects Delivered</span>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon-box">
                      <Smile size={18} />
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">98%</span>
                      <span className="stat-label">Client Satisfaction</span>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon-box">
                      <Globe size={18} />
                    </div>
                    <div className="stat-info">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Countries Served</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup Image */}
            <div className="col-lg-6">
              <div className="portfolio-hero-mockups-container animate-fade-in delay-3">
                <img
                  src="/assets/images/Portfolio/herobanner_portfolio.png"
                  alt="Desktop Monitor and Mobile Phone Mockups"
                  className="hero-mockups-img-custom"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FILTER TABS SECTION ── */}
      <section className="portfolio-filter-section">
        <div className="container">

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
                        {project.badge && (
                          <span className="card-international-badge">
                            🌍 {project.badge}
                          </span>
                        )}
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
