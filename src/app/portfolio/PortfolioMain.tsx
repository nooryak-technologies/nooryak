'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  LayoutGrid, 
  Globe, 
  Code, 
  Layers, 
  IdCard, 
  Brush 
} from 'lucide-react';
import { ArrowSvg } from '@/svg';

// Custom interface for our portfolio projects
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  bgClass: string;
  mockupType: 'finance' | 'furni' | 'dasho' | 'nexora' | 'melody' | 'lenscope' | 'vectra' | 'artify';
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Finace – Banking Website',
    category: 'Web Design',
    description: 'A modern and clean banking website designed for seamless user experience.',
    link: '#',
    bgClass: 'bg-lavender',
    mockupType: 'finance'
  },
  {
    id: 2,
    title: 'Furni – E-commerce Store',
    category: 'Web Development',
    description: 'A fully responsive e-commerce website with smooth shopping experience.',
    link: '#',
    bgClass: 'bg-mint',
    mockupType: 'furni'
  },
  {
    id: 3,
    title: 'Dasho – Dashboard UI',
    category: 'UI/UX Design',
    description: 'A clean dashboard UI design for analytics and data visualization.',
    link: '#',
    bgClass: 'bg-slate',
    mockupType: 'dasho'
  },
  {
    id: 4,
    title: 'Nexora – Brand Identity',
    category: 'Branding',
    description: 'Brand identity design for a tech startup including logo and stationery.',
    link: '#',
    bgClass: 'bg-orange-soft',
    mockupType: 'nexora'
  },
  {
    id: 5,
    title: 'Melody – Music App UI',
    category: 'UI/UX Design',
    description: 'A mobile app UI design for music streaming with modern and elegant look.',
    link: '#',
    bgClass: 'bg-teal',
    mockupType: 'melody'
  },
  {
    id: 6,
    title: 'Lenscope – Photography Website',
    category: 'Web Design',
    description: 'A photography website design to showcase visual stories and portfolio.',
    link: '#',
    bgClass: 'bg-nature',
    mockupType: 'lenscope'
  },
  {
    id: 7,
    title: 'Vectra – Brand Illustration',
    category: 'Illustration',
    description: 'A set of custom vector illustrations for a digital agency\'s branding.',
    link: '#',
    bgClass: 'bg-lavender',
    mockupType: 'vectra'
  },
  {
    id: 8,
    title: 'Artify – Character Design',
    category: 'Illustration',
    description: 'Unique character illustrations for a gaming brand storyboards.',
    link: '#',
    bgClass: 'bg-orange-soft',
    mockupType: 'artify'
  }
];

const categories = [
  { name: 'All Projects', icon: <LayoutGrid size={16} /> },
  { name: 'Web Design', icon: <Globe size={16} /> },
  { name: 'Web Development', icon: <Code size={16} /> },
  { name: 'UI/UX Design', icon: <Layers size={16} /> },
  { name: 'Branding', icon: <IdCard size={16} /> },
  { name: 'Illustration', icon: <Brush size={16} /> }
];

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [animateGrid, setAnimateGrid] = useState(false);

  // Filter projects dynamically when tab changes
  useEffect(() => {
    setAnimateGrid(false);
    const timeout = setTimeout(() => {
      if (activeTab === 'All Projects') {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(p => p.category === activeTab));
      }
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

            {/* Right Mockup Images (Task 2: animations and attractive image) */}
            <div className="col-lg-6">
              <div className="portfolio-hero-mockups">
                
                {/* CSS 15" Laptop Frame */}
                <div className="mockup-laptop-wrap">
                  <div className="css-laptop">
                    <div className="laptop-screen">
                      <div className="screen-display">
                        <div className="display-mockup-ui">
                          <div className="ui-nav">
                            <div className="ui-logo">NEXORA</div>
                            <div className="ui-menu-dots">
                              <span></span><span></span><span></span>
                            </div>
                          </div>
                          <div className="ui-content">
                            <h4>Building Digital <br />Products That <br /><span>Drive Success</span></h4>
                            <p>Premium customized web and mobile product design tailored to business scaling.</p>
                            <div className="ui-btn">Read Case Study</div>
                          </div>
                          <div className="ui-mock-right">
                            <div className="wire-block"></div>
                            <div className="wire-line"></div>
                            <div className="wire-line"></div>
                            <div className="wire-line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                </div>

                {/* CSS Mobile Phone Frame */}
                <div className="mockup-phone-wrap">
                  <div className="css-phone">
                    <div className="phone-screen">
                      <div className="phone-display-content">
                        <div className="phone-header">NEXORA</div>
                        <div className="phone-body">
                          <h5>Building Digital Products That Drive Success</h5>
                          <p>We craft top-notch digital interfaces that convert users.</p>
                        </div>
                        <div className="phone-footer">
                          <div className="phone-btn">Explore</div>
                          <div className="phone-circle"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                      <div className={`card-inner-mockup mock-${project.mockupType}`}>
                        {/* Dynamic HTML Mockup renders based on type */}
                        {project.mockupType === 'finance' && (
                          <>
                            <div className="fin-header">
                              <span>FINACE</span>
                              <span>ONLINE</span>
                            </div>
                            <div className="fin-circle">
                              $24,785
                            </div>
                            <div className="fin-bar"></div>
                          </>
                        )}
                        {project.mockupType === 'furni' && (
                          <>
                            <div className="furni-top">
                              <div className="chair-shape"></div>
                            </div>
                            <div className="furni-bottom">
                              <span className="furni-title">Furni Chair</span>
                              <span className="furni-price">$299.00</span>
                            </div>
                          </>
                        )}
                        {project.mockupType === 'dasho' && (
                          <>
                            <div className="dash-side">
                              <span></span><span></span><span></span>
                            </div>
                            <div className="dash-main">
                              <div className="dash-header"></div>
                              <div className="dash-cards">
                                <div className="dash-card"></div>
                                <div className="dash-card"></div>
                              </div>
                              <div className="dash-chart"></div>
                            </div>
                          </>
                        )}
                        {project.mockupType === 'nexora' && (
                          <>
                            <div className="nexora-folder">
                              <span className="logo-n">N</span>
                            </div>
                            <div className="nexora-card">
                              NEXORA
                            </div>
                          </>
                        )}
                        {project.mockupType === 'melody' && (
                          <>
                            <div className="mel-phone">
                              <div className="mel-cover"></div>
                              <div className="mel-controls">
                                <span></span><span></span><span></span>
                              </div>
                            </div>
                            <div className="mel-phone">
                              <div className="mel-cover"></div>
                              <div className="mel-controls">
                                <span></span><span></span><span></span>
                              </div>
                            </div>
                            <div className="mel-phone">
                              <div className="mel-cover"></div>
                              <div className="mel-controls">
                                <span></span><span></span><span></span>
                              </div>
                            </div>
                          </>
                        )}
                        {project.mockupType === 'lenscope' && (
                          <>
                            <div className="lens-top"></div>
                            <div className="lens-bottom">
                              <span className="lens-text"></span>
                              <span className="lens-dot"></span>
                            </div>
                          </>
                        )}
                        {project.mockupType === 'vectra' && (
                          <div className="vectra-circle"></div>
                        )}
                        {project.mockupType === 'artify' && (
                          <div className="artify-cube"></div>
                        )}
                      </div>
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
            
            <i className="fa-solid fa-star-of-david cta-decorator-star"></i>
            
            <div className="portfolio-cta-text">
              <span className="subtitle">Have a project in mind?</span>
              <h2 className="title">Let's Create Something Amazing Together!</h2>
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
