import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket, Star, Users, Briefcase, ThumbsUp, Globe, BarChart3,
  Lightbulb, Target, Users2, Zap, Heart, ArrowUpRight, ArrowRight
} from "lucide-react";
import "./about.scss";

export const metadata: Metadata = {
  title: "About Us - Nooryak Technologies",
  description: "Learn how Nooryak Technologies builds brands, empowers growth, and turns creative ideas into digital excellence through web development and marketing solutions.",
};

export default function AboutUs() {
  return (
    <div className="about-page" id="about-us-page-root">
      {/* 1. Hero Section */}
      <section className="about-hero-section" id="hero-sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-12">
              <div className="hero-content">
                <div className="kicker orange-kicker" id="hero-kicker">
                  <span>ABOUT NOORYAK TECHNOLOGIES</span>
                </div>
                <h1 className="hero-title" id="hero-main-title">
                  Building Brands.<br />
                  Empowering Growth.<br />
                  <span className="highlight">Creating Impact.</span>
                </h1>
                <p className="hero-text">
                  Nooryak Technologies is a digital solutions company helping businesses grow through innovative marketing, powerful websites, and intelligent technology.
                </p>
                <p className="hero-text">
                  We blend creativity, strategy, and technology to deliver measurable results and long-term digital success.
                </p>
                <div className="pt-3">
                  <Link href="/contact" className="btn-orange-pill" id="hero-cta-btn">
                    <span>Let&apos;s Work Together</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-12">
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <Image
                    src="/assets/images/about/about_hero.png"
                    alt="Corporate meeting at Nooryak Technologies"
                    width={520}
                    height={380}
                    className="img-fluid"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="floating-badge" id="projects-badge">
                  <div className="badge-icon-box">
                    <Rocket size={22} />
                  </div>
                  <div className="badge-info">
                    <span className="badge-number">125+</span>
                    <span className="badge-label">Projects Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stat Counter Bar */}
      <section className="stat-counter-container" id="stats-sec">
        <div className="container">
          <div className="stat-counter-bar">
            {/* Stat 1 */}
            <div className="stat-item">
              <div className="stat-icon-container">
                <Star size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="stat-item">
              <div className="stat-icon-container">
                <Users size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-number">250+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="stat-item">
              <div className="stat-icon-container">
                <Briefcase size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="stat-item">
              <div className="stat-icon-container">
                <ThumbsUp size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            {/* Stat 5 */}
            <div className="stat-item">
              <div className="stat-icon-container">
                <Globe size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-number">5</span>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="our-story-section" id="story-sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-5 col-12 order-lg-1 order-2">
              <div className="story-image-container">
                <div className="story-image-wrapper">
                  <Image
                    src="/assets/images/about/about_story.png"
                    alt="Creative team brainstorming"
                    width={520}
                    height={480}
                    className="img-fluid"
                  />
                </div>
                {/* Floating Story Badge */}
                <div className="floating-story-badge" id="values-badge">
                  <div className="badge-icon-box">
                    <BarChart3 size={20} />
                  </div>
                  <div className="badge-text-group">
                    <span className="line-item">Driven by Creativity</span>
                    <span className="line-item">Focused on Results</span>
                    <span className="line-item">Committed to Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-7 col-12 order-lg-2 order-1">
              <div className="story-content">
                <div className="kicker orange-kicker" id="story-kicker">
                  <span>OUR STORY</span>
                </div>
                <h2 className="story-title" id="story-main-title">
                  Turning Ideas Into Digital Excellence
                </h2>
                <p className="story-text">
                  Founded with a vision to empower businesses in the digital world, Nooryak Technologies started as a small team of passionate creators and developers.
                </p>
                <p className="story-text">
                  Today, we are a full-service digital agency delivering end-to-end solutions in marketing, web, and app development.
                </p>
                <p className="story-text">
                  Our journey is built on trust, innovation, and the success of our clients.
                </p>

                {/* Timeline */}
                <div className="story-timeline" id="timeline">
                  {/* Point 1 */}
                  <div className="timeline-node">
                    <span className="node-year">2017</span>
                    <div className="node-dot"></div>
                    <span className="node-desc">Founded</span>
                  </div>
                  {/* Point 2 */}
                  <div className="timeline-node">
                    <span className="node-year">2019</span>
                    <div className="node-dot"></div>
                    <span className="node-desc">Expanded Our Team</span>
                  </div>
                  {/* Point 3 */}
                  <div className="timeline-node">
                    <span className="node-year">2021</span>
                    <div className="node-dot"></div>
                    <span className="node-desc">500+ Projects Milestone</span>
                  </div>
                  {/* Point 4 */}
                  <div className="timeline-node">
                    <span className="node-year">2023</span>
                    <div className="node-dot"></div>
                    <span className="node-desc">Global Client Base</span>
                  </div>
                  {/* Point 5 */}
                  <div className="timeline-node">
                    <span className="node-year">2025</span>
                    <div className="node-dot"></div>
                    <span className="node-desc">Innovating for the Future</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="core-values-section" id="values-sec">
        <div className="container">
          <div className="values-header">
            <div className="kicker orange-kicker justify-content-center">
              <span>OUR CORE VALUES</span>
            </div>
            <h2 className="values-title">The Principles That Drive Us</h2>
          </div>

          <div className="values-grid">
            {/* Value 1 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Lightbulb size={24} />
              </div>
              <h3 className="value-name">Innovation</h3>
              <p className="value-desc">
                We stay ahead by embracing new ideas and technologies.
              </p>
            </div>
            {/* Value 2 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Target size={24} />
              </div>
              <h3 className="value-name">Integrity</h3>
              <p className="value-desc">
                We believe in honesty, transparency, and ethical partnerships.
              </p>
            </div>
            {/* Value 3 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Users2 size={24} />
              </div>
              <h3 className="value-name">Collaboration</h3>
              <p className="value-desc">
                We work together with our clients for shared success.
              </p>
            </div>
            {/* Value 4 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Zap size={24} />
              </div>
              <h3 className="value-name">Excellence</h3>
              <p className="value-desc">
                We are committed to delivering quality in everything we do.
              </p>
            </div>
            {/* Value 5 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Heart size={24} />
              </div>
              <h3 className="value-name">Client First</h3>
              <p className="value-desc">
                Our clients&apos; success is at the heart of our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className="our-team-section" id="team-sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-5 col-12">
              <div className="team-content">
                <div className="kicker orange-kicker" id="team-kicker">
                  <span>OUR TEAM</span>
                </div>
                <h2 className="team-title" id="team-main-title">
                  Experts. Innovators. Problem Solvers.
                </h2>
                <p className="team-text">
                  Our team of strategists, designers, developers, and marketers work together to create solutions that drive real impact.
                </p>
                <Link href="/contact" className="btn-outline-pill" id="team-cta-btn">
                  <span>Meet Our Team</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-7 col-12">
              <div className="team-image-container">
                <Image
                  src="/assets/images/about/about_team.png"
                  alt="Nooryak Technologies professional team lineup"
                  width={680}
                  height={380}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trusted By Section */}
      <section className="trusted-by-section" id="logos-sec">
        <div className="container">
          <h3 className="trusted-title">TRUSTED BY 100+ BUSINESSES WORLDWIDE</h3>
          <div className="logos-slider-container">
            <div className="logos-track">
              {/* Logo 1: PhoneFurb */}
              <div className="logo-item" title="PhoneFurb">
                <svg viewBox="0 0 160 40">
                  <circle cx="20" cy="20" r="14" fill="#4ade80" />
                  <path d="M16 12 L24 20 L16 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <text x="44" y="26" fontSize="20" fontWeight="900" fontFamily="Inter, sans-serif" fill="#1f2937">PhoneFurb</text>
                </svg>
              </div>

              {/* Logo 2: SAQANA */}
              <div className="logo-item" title="SAQANA">
                <svg viewBox="0 0 160 40">
                  <text x="5" y="24" fontSize="24" fontWeight="900" letterSpacing="2" fontFamily="Montserrat, sans-serif" fill="#111827">SAQANA</text>
                  <text x="5" y="34" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="Inter, sans-serif" fill="#ef4444">ONLINE SHOPPING</text>
                </svg>
              </div>

              {/* Logo 3: Direct Verduurzamen */}
              <div className="logo-item" title="Direct Verduurzamen">
                <svg viewBox="0 0 200 40">
                  <circle cx="20" cy="20" r="12" fill="none" stroke="#22c55e" strokeWidth="4" />
                  <path d="M15 20 L20 25 L28 15" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <text x="40" y="25" fontSize="15" fontWeight="800" fontFamily="Inter, sans-serif" fill="#111827">Direct Verduurzamen</text>
                </svg>
              </div>

              {/* Logo 4: Travel Time Taxi */}
              <div className="logo-item" title="TRAVEL TIME TAXI">
                <svg viewBox="0 0 200 40">
                  <rect x="5" y="10" width="30" height="20" rx="3" fill="#eab308" />
                  <text x="12" y="25" fontSize="14" fontWeight="900" fontFamily="Impact, sans-serif" fill="#000000">T</text>
                  <text x="42" y="26" fontSize="16" fontWeight="800" letterSpacing="0.5" fontFamily="Inter, sans-serif" fill="#1f2937">TRAVEL TIME TAXI</text>
                </svg>
              </div>

              {/* Logo 5: EIGHT2NINE */}
              <div className="logo-item" title="EIGHT2NINE">
                <svg viewBox="0 0 160 40">
                  <text x="10" y="26" fontSize="22" fontWeight="900" letterSpacing="1.5" fontFamily="Arial Black, sans-serif" fill="#1f2937">EIGHT2NINE</text>
                </svg>
              </div>

              {/* Logo 6: Miss classy */}
              <div className="logo-item" title="Miss classy">
                <svg viewBox="0 0 160 40">
                  <path d="M15 15 C10 10, 5 15, 10 20 C5 25, 10 30, 15 25 C20 30, 25 25, 20 20 C25 15, 20 10, 15 15 Z" fill="#ec4899" />
                  <circle cx="15" cy="20" r="1.5" fill="#ffffff" />
                  <text x="32" y="25" fontSize="18" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic" fill="#1f2937">Miss classy</text>
                </svg>
              </div>

              {/* Duplicate Set for Mobile Infinite Marquee Slider */}
              <div className="logo-item" title="PhoneFurb" aria-hidden="true">
                <svg viewBox="0 0 160 40">
                  <circle cx="20" cy="20" r="14" fill="#4ade80" />
                  <path d="M16 12 L24 20 L16 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <text x="44" y="26" fontSize="20" fontWeight="900" fontFamily="Inter, sans-serif" fill="#1f2937">PhoneFurb</text>
                </svg>
              </div>

              <div className="logo-item" title="SAQANA" aria-hidden="true">
                <svg viewBox="0 0 160 40">
                  <text x="5" y="24" fontSize="24" fontWeight="900" letterSpacing="2" fontFamily="Montserrat, sans-serif" fill="#111827">SAQANA</text>
                  <text x="5" y="34" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="Inter, sans-serif" fill="#ef4444">ONLINE SHOPPING</text>
                </svg>
              </div>

              <div className="logo-item" title="Direct Verduurzamen" aria-hidden="true">
                <svg viewBox="0 0 200 40">
                  <circle cx="20" cy="20" r="12" fill="none" stroke="#22c55e" strokeWidth="4" />
                  <path d="M15 20 L20 25 L28 15" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <text x="40" y="25" fontSize="15" fontWeight="800" fontFamily="Inter, sans-serif" fill="#111827">Direct Verduurzamen</text>
                </svg>
              </div>

              <div className="logo-item" title="TRAVEL TIME TAXI" aria-hidden="true">
                <svg viewBox="0 0 200 40">
                  <rect x="5" y="10" width="30" height="20" rx="3" fill="#eab308" />
                  <text x="12" y="25" fontSize="14" fontWeight="900" fontFamily="Impact, sans-serif" fill="#000000">T</text>
                  <text x="42" y="26" fontSize="16" fontWeight="800" letterSpacing="0.5" fontFamily="Inter, sans-serif" fill="#1f2937">TRAVEL TIME TAXI</text>
                </svg>
              </div>

              <div className="logo-item" title="EIGHT2NINE" aria-hidden="true">
                <svg viewBox="0 0 160 40">
                  <text x="10" y="26" fontSize="22" fontWeight="900" letterSpacing="1.5" fontFamily="Arial Black, sans-serif" fill="#1f2937">EIGHT2NINE</text>
                </svg>
              </div>

              <div className="logo-item" title="Miss classy" aria-hidden="true">
                <svg viewBox="0 0 160 40">
                  <path d="M15 15 C10 10, 5 15, 10 20 C5 25, 10 30, 15 25 C20 30, 25 25, 20 20 C25 15, 20 10, 15 15 Z" fill="#ec4899" />
                  <circle cx="15" cy="20" r="1.5" fill="#ffffff" />
                  <text x="32" y="25" fontSize="18" fontWeight="700" fontFamily="Georgia, serif" fontStyle="italic" fill="#1f2937">Miss classy</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
