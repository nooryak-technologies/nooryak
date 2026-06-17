'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Code, 
  Layers, 
  Brush,
  ShoppingBag,
  Smartphone,
  Cpu,
  Video,
  TrendingUp
} from 'lucide-react';
import { ArrowSvg } from '@/svg';

import { Project, projectsData } from '@/data/portfolioMainData';

const categories = [
  { name: 'Graphic Designing', icon: <Brush size={16} /> },
  { name: 'Website Development', icon: <Code size={16} /> },
  { name: 'Ecommerce', icon: <ShoppingBag size={16} /> },
  { name: 'Apps', icon: <Smartphone size={16} /> },
  { name: 'Softwares', icon: <Cpu size={16} /> },
  { name: 'Videos', icon: <Video size={16} /> },
  { name: 'Digital Marketing', icon: <TrendingUp size={16} /> }
];

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState('Graphic Designing');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [animateGrid, setAnimateGrid] = useState(false);

  // Filter projects dynamically when tab changes
  useEffect(() => {
    setAnimateGrid(false);
    const timeout = setTimeout(() => {
      setFilteredProjects(projectsData.filter(p => p.category === activeTab));
      setAnimateGrid(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleStartProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openEnquiryForm'));
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
                <div className="my-work-tag">
                  <span className="dot"></span>
                  <span className="text">My Work</span>
                </div>
                
                <h1 className="portfolio-hero-title">
                  My <span>Portfolio</span>
                </h1>
                
                <p className="portfolio-hero-desc">
                  A collection of my recent work that showcases my passion for design, development and problem solving.
                </p>
                
                <a 
                  href="#" 
                  onClick={handleStartProjectClick}
                  className="btn-orange-premium"
                >
                  Let's Work Together
                  <span className="arrow-icon">
                    <ArrowSvg />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Mockup Images (Task 1 & 2) */}
            <div className="col-lg-6">
              <div className="portfolio-hero-mockups">
                <img 
                  src="/assets/images/Portfolio/hero_bannerimg.png" 
                  alt="Portfolio Hero Mockups" 
                  className="hero-mockup-img"
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
                  onClick={() => setActiveTab(cat.name)}
                  className={`portfolio-tab-btn ${activeTab === cat.name ? 'active' : ''}`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>

          {/* ── PROJECT GRID ── */}
          <div className="portfolio-grid">
            <div className="row">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className={`col-lg-4 col-md-6 portfolio-card-col ${animateGrid ? 'fade-in-item' : ''}`}
                  style={{ opacity: animateGrid ? 1 : 0 }}
                >
                  <div className="portfolio-card">
                    
                    {/* Visual Card Mockup Wrap */}
                    <div className={`portfolio-card-image-wrap ${project.bgClass}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="card-project-img" 
                      />
                    </div>

                    {/* Content */}
                    <div className="portfolio-card-content">
                      <div className="portfolio-card-meta">
                        <span className="portfolio-card-category">{project.category}</span>
                        <h4 className="portfolio-card-title">
                          <Link href={project.link}>
                            {project.title}
                          </Link>
                        </h4>
                        <p className="portfolio-card-desc">{project.description}</p>
                      </div>
                      
                      <div className="portfolio-card-footer">
                        <Link href={project.link} className="arrow-btn-circle">
                          <ArrowSvg />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ── */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-card">
            
            <div className="cta-left-content">
              <div className="cta-star-circle">
                <svg className="cta-star-icon" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#ff4a17" d="M12,2L14.8,9.2L22,12L14.8,14.8L12,22L9.2,14.8L2,12L9.2,9.2L12,2Z" />
                </svg>
              </div>
              
              <div className="portfolio-cta-text">
                <span className="subtitle">Have a project in mind?</span>
                <h2 className="title">Let's Create Something Amazing Together!</h2>
              </div>
            </div>
            
            <div className="portfolio-cta-action">
              <a 
                href="#"
                onClick={handleStartProjectClick}
                className="btn-orange-premium"
              >
                Let's Talk
                <span className="arrow-icon">
                  <ArrowSvg />
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
