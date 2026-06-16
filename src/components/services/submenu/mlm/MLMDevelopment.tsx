'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/services/submenu.scss';
import { Images } from '@/utils/Images';
import AnimatedCounter from '@/components/counter/AnimatedCounter';

// Define Interface Types for Plans
interface PlanCard {
  title: string;
  subtitle: string;
  btnText: string;
  btnLink: string;
  color: string;
  btnClass: string;
  iconSvg: React.ReactNode;
}

// 11 Plans detailed descriptions and features for high-end modal details
const PLAN_DETAILS: Record<string, {
  description: string;
  benefits: string[];
  features: string[];
}> = {
  "Unilevel Plan": {
    description: "The Unilevel MLM plan is one of the simplest and most transparent compensation structures in the direct selling industry. It allows a distributor to recruit an unlimited number of frontline members (level 1). Every recruit is directly sponsored by the distributor and placed directly under them, with no spillover.",
    benefits: [
      "Unlimited front-line sponsorship and recruitment width.",
      "Simple to explain, execute, and manage structurally.",
      "Highly lucrative depth commissions for growing networks.",
      "Strong payout stability that matches direct selling compliance standards."
    ],
    features: [
      "Frontline sponsor tracking",
      "Staged commission rates",
      "Dynamic compression",
      "Direct referral bonuses"
    ]
  },
  "Binary Plan": {
    description: "The Binary MLM plan is a highly popular and dynamic compensation structure structured around a two-legged tree (Left leg and Right leg). Distributors recruit and place new members on either side. Commissions are typically calculated based on the sales volume of the weaker (or paying) leg, promoting teamwork and cooperative volume-building.",
    benefits: [
      "Encourages active teamwork and mutual spillover assistance.",
      "High volume payout potential as the team grows.",
      "Balanced two-legged structure simplifies goal setting.",
      "Highly scalable for rapid distributor onboarding."
    ],
    features: [
      "Left & right leg balance auto-control",
      "Spillover placement algorithm",
      "Pairing commission capping",
      "Trimmed leg payout calculations"
    ]
  },
  "Generation Plan": {
    description: "Also known as the Gap Commission or Leadership Plan, the Generation MLM plan is perfect for product-selling direct sales companies. It is based on generations of leaders. As your downline grows and achieves certain ranks, they branch out into generations, allowing you to earn leadership bonuses from deep within your organization.",
    benefits: [
      "Perfect for product-centric MLM businesses.",
      "Rewards long-term leadership and group mentoring.",
      "Extremely robust residual incomes for top-tier distributors.",
      "Keeps downlines active through rank advancement steps."
    ],
    features: [
      "Generation gap calculations",
      "Multi-level leadership overrides",
      "Product retail volume integration",
      "Rank-achievement tracking systems"
    ]
  },
  "Hybrid Plan": {
    description: "The Hybrid MLM plan combines the best elements of multiple compensation plans (most commonly Binary and Unilevel). It leverages the rapid teamwork and volume growth of the Binary plan alongside the robust leadership rewards and stability of the Unilevel structure, creating a highly customized and optimized payout mechanism.",
    benefits: [
      "Combines the explosive speed of Binary with Unilevel's stability.",
      "Vastly customizable to fit unique business rules.",
      "Provides multiple simultaneous commission streams.",
      "Reduces downline dropouts by offering versatile paths to earn."
    ],
    features: [
      "Dual binary-unilevel backend matching",
      "Custom payout threshold adjusters",
      "Multi-type bonus triggers",
      "Adjustable commission distribution coefficients"
    ]
  },
  "Matrix Plan": {
    description: "The Matrix MLM plan (or Forced Matrix plan) is characterized by a fixed width and depth limit (e.g., 3x9, 4x7, or 5x8). Because the width is restricted, excess recruits spill over into the next available positions under downline members, helping the entire network fill the matrix together and earn cycle commissions.",
    benefits: [
      "Active spillover keeps inactive members motivated.",
      "Restricted width limits risk of runaway commissions.",
      "Encourages community and teamwork within the matrix.",
      "Predictable and stable network expansion rate."
    ],
    features: [
      "Fixed width x depth constraints",
      "Automated spillover placement",
      "Grid cycle bonus triggers",
      "Dynamic matrix compression"
    ]
  },
  "Re-purchase Plan": {
    description: "The Re-purchase MLM plan focuses heavily on the retail sale and continuous repurchase of high-quality consumer products. Commissions and bonuses are calculated based on the sales volume generated from recurring orders, subscriptions, or retail purchases made by members and customers within your network hierarchy.",
    benefits: [
      "Highly compliant with global direct-selling legal standards.",
      "Driven by real consumer demand and product consumption.",
      "Creates stable, recurring, long-term residual income.",
      "Integrates perfectly with modern e-commerce shopping systems."
    ],
    features: [
      "E-commerce repurchase checkout linking",
      "Monthly PV/BV automatic compilation",
      "Retail margins and client discounts",
      "Auto-shipment program configurations"
    ]
  },
  "Autopool Plan": {
    description: "The Autopool MLM plan is a highly automated system where recruitment is managed globally by the company. When new members join the company, they are placed in a global pool or single-line queue sequentially. Once a pool fills, members cycle out to receive passive, recurring system-wide pool bonuses.",
    benefits: [
      "Offers attractive passive earnings with minimal recruiting pressure.",
      "Fully automated, company-wide structural placements.",
      "High onboarding conversion due to passive pool appeal.",
      "Automatic re-entry cycles boost long-term retention."
    ],
    features: [
      "Global pooling queuing engine",
      "Auto-fill & matrix cycling rules",
      "Re-entry position multipliers",
      "Fast-track pool entry configurations"
    ]
  },
  "ROI Plan": {
    description: "The ROI (Return on Investment) MLM plan is an investment-based network structure where members invest a capital sum and receive a guaranteed percentage or fixed return over a defined timeline (daily, weekly, or monthly) along with additional multi-level referral bonuses for onboarding new capital.",
    benefits: [
      "Guarantees a highly responsive interest-yielding user base.",
      "High conversion rates due to passive daily returns.",
      "Balances investment payouts with active team-building incentives.",
      "Highly customizable investment cycles and return intervals."
    ],
    features: [
      "Daily/weekly ROI interest distribution",
      "Referral deposit percentages",
      "Wallet compound configurations",
      "Secure reinvestment gateways"
    ]
  },
  "Centralized Plan": {
    description: "The Centralized MLM plan operates on a secure, highly controlled central server database infrastructure. All network activities, sales volume, commission distributions, and administrative settings are fully governed by a centralized company admin dashboard, offering maximum control and fast adjustment capabilities.",
    benefits: [
      "Instant real-time control over system configurations and parameters.",
      "Highly secure, stable, and server-protected configurations.",
      "Seamless integrations with company ERPs, SMS gateways, and SMTPs.",
      "Centralized ledger ensures strict transaction audits."
    ],
    features: [
      "Company administrative dashboards",
      "Role-based control gates",
      "Central bank/payment integrations",
      "System audit trails"
    ]
  },
  "Semi-Centralized Plan": {
    description: "The Semi-Centralized MLM plan balances control by distributing specific administrative tasks to regional hubs, warehouse partners, or top-tier stockists while keeping the core ledger, payouts, and financial database strictly centralized. This is ideal for global direct sales companies with multiple physical inventory hubs.",
    benefits: [
      "Vastly optimizes regional inventory logistics and shipping.",
      "Core databases remain fully shielded and centralized.",
      "Promotes local hub accountability and market customizations.",
      "Balances operational load away from company headquarters."
    ],
    features: [
      "Stockist franchise portal",
      "Regional stock and dispatch tracking",
      "Dual local-centralized balance sheets",
      "Hub verification systems"
    ]
  },
  "De-Centralized Plan": {
    description: "Built on cutting-edge blockchain ledger systems, the De-Centralized MLM plan uses smart contracts (e.g., Ethereum, BSC, or TRON) to automate member signups and payouts. Once deployed, the system is fully trustless, transparent, immutable, and cannot be changed or shut down by any central entity.",
    benefits: [
      "100% trustless, transparent, and publicly verifiable ledger.",
      "Instant peer-to-peer (P2P) wallet payouts.",
      "Complete safety from administrative tampering or closure.",
      "Global access without any localized gateway restrictions."
    ],
    features: [
      "Web3 wallet connection integration",
      "Smart contract-governed commissions",
      "Immutable transaction auditing",
      "Gas-efficient execution rules"
    ]
  }
};

export default function MLMDevelopment() {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // State for active popup plan modal
  const [selectedPlan, setSelectedPlan] = useState<PlanCard | null>(null);

  // State & Ref for sequential scroll connecting line animation
  const processRef = useRef<HTMLDivElement>(null);
  const [processActive, setProcessActive] = useState(false);

  // Ecosystem widgets navigation and admin controls states
  const [activeTab, setActiveTab] = useState<'dashboard' | 'genealogy' | 'analytics' | 'admin' | 'mobile'>('dashboard');
  const [autoPairLimit, setAutoPairLimit] = useState(true);
  const [tdsAutoDeduction, setTdsAutoDeduction] = useState(true);
  const [impsPayoutLock, setImpsPayoutLock] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessActive(true);
        }
      },
      { threshold: 0.15 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  // Listen to Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlan(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.classList.add('mlm-modal-open');
    } else {
      document.body.classList.remove('mlm-modal-open');
    }
    return () => {
      document.body.classList.remove('mlm-modal-open');
    };
  }, [selectedPlan]);

  const testimonials = [
    {
      quote: "Nooryak's MLM software has transformed our business. The platform is feature-rich, reliable, and extremely easy to manage.",
      name: "Rajesh Kumar",
      title: "CEO, PathWay Forever",
      image: Images.avaterOne,
    },
    {
      quote: "Excellent support and timely delivery. Their MLM solutions helped us scale our network globally with automatic commission calculations.",
      name: "Priya Sharma",
      title: "Director, Star Marketing",
      image: Images.avaterTwo,
    },
    {
      quote: "The customization and flexibility of their MLM software is unmatched. Truly professional and innovative team!",
      name: "Amit Verma",
      title: "Founder, Dream Life",
      image: Images.avaterThree,
    },
  ];

  // Auto-scroll: advance every 3.5s, pause on hover
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 3500);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // 11 MLM Plans Data with custom colored buttons & premium inline SVG designs
  const mlmPlans: PlanCard[] = [
    {
      title: "Unilevel Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#ff4d4d",
      btnClass: "mlm-plan-card__btn--red",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/universal_plan.png" alt="Unilevel Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Binary Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#f4510b",
      btnClass: "mlm-plan-card__btn--green",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/binary_plan.png" alt="Binary Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Generation Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#3498db",
      btnClass: "mlm-plan-card__btn--indigo",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/Generation Plan.png" alt="Generation Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Hybrid Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#1abc9c",
      btnClass: "mlm-plan-card__btn--cyan",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/hybrid_plan.png" alt="Hybrid Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Matrix Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#f4510b",
      btnClass: "mlm-plan-card__btn--green",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/Matrix Plan.png" alt="Matrix Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Re-purchase Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#1abc9c",
      btnClass: "mlm-plan-card__btn--cyan",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/universal_plan.png" alt="Re-purchase Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Autopool Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#9b59b6",
      btnClass: "mlm-plan-card__btn--indigo",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/auto_pool.png" alt="Autopool Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "ROI Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#ff4d4d",
      btnClass: "mlm-plan-card__btn--red",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/roiplan.png" alt="ROI Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Centralized Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#3f51b5",
      btnClass: "mlm-plan-card__btn--indigo",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/semi_centralized.png" alt="Centralized Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "Semi-Centralized Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#9c27b0",
      btnClass: "mlm-plan-card__btn--indigo",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/semi_centralized.png" alt="Semi-Centralized Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    },
    {
      title: "De-Centralized Plan",
      subtitle: "MLM Software",
      btnText: "Know More",
      btnLink: "/contact",
      color: "#ff4d4d",
      btnClass: "mlm-plan-card__btn--red",
      iconSvg: (
        <Image src="/assets/images/services/icons/mlm_software_icon/decentralised.png" alt="De-Centralized Plan" className="mlm-plan-card__svg" width={90} height={90} style={{ objectFit: 'contain', transform: 'scale(1.45)', transition: 'transform 0.3s ease' }} />
      )
    }
  ];

  return (
    <div className="mlm-subpage-wrapper">
      {/* ── NEW HERO BANNER (WHITE BACKGROUND, ORANGE COLOR FORMAT) ───────────────── */}
      <section className="mlm-hero-new">
        <div className="container">
          <div className="mlm-hero-new__inner">
            <div className="mlm-hero-new__content">
              {/* Badge */}
              <div className="mlm-hero-new__badge">
                <span className="bullet" /> #1 MLM Soft-Development Company Chennai
              </div>
              
              {/* Heading */}
              <h1 className="mlm-hero-new__title">
                MLM Software &amp; <span className="accent">Crypto Exchange</span> Development Company
              </h1>
              
              {/* Description */}
              <p className="mlm-hero-new__desc">
                India's leading software development company specializing in <strong>MLM Software</strong>, <strong>Cryptocurrency Exchange Platforms</strong>, and <strong>Blockchain Solutions</strong>. We build secure, scalable systems that power thousands of businesses worldwide.
              </p>
              
              {/* Service Pills */}
              <div className="mlm-hero-new__services">
                <div className="service-pill green-pill">
                  <div className="pill-icon">
                    <i className="fa-solid fa-sitemap" />
                  </div>
                  <div className="pill-text">
                    <h4>MLM Software</h4>
                    <span>Binary, Matrix, Unilevel, Board Plans</span>
                  </div>
                </div>
                <div className="service-pill orange-pill">
                  <div className="pill-icon">
                    <i className="fa-solid fa-wallet" />
                  </div>
                  <div className="pill-text">
                    <h4>Crypto Exchange</h4>
                    <span>CEX, DEX &amp; P2P Platforms</span>
                  </div>
                </div>
                <div className="service-pill purple-pill">
                  <div className="pill-icon">
                    <i className="fa-solid fa-code" />
                  </div>
                  <div className="pill-text">
                    <h4>Blockchain Development</h4>
                    <span>Smart Contracts &amp; Web3 Apps</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="mlm-hero-new__stats">
                <div className="stat-card green-border">
                  <h3><AnimatedCounter min={0} max={100} /><span className="plus-sign">+</span></h3>
                  <span>MLM Projects</span>
                </div>
                <div className="stat-card orange-border">
                  <h3><AnimatedCounter min={0} max={50} /><span className="plus-sign">+</span></h3>
                  <span>Crypto</span>
                </div>
                <div className="stat-card purple-border">
                  <h3><AnimatedCounter min={0} max={200} /><span className="plus-sign">+</span></h3>
                  <span>Blockchain</span>
                </div>
              </div>
              
              {/* Checklist */}
              <div className="mlm-hero-new__checklist">
                <span><i className="fa-solid fa-check" /> 13+ Years</span>
                <span><i className="fa-solid fa-check" /> 500+ Projects</span>
                <span><i className="fa-solid fa-check" /> 24/7 Support</span>
              </div>
              
              {/* Actions */}
              <div className="mlm-hero-new__actions">
                <Link href="/contact" className="btn-filled btn-green">
                  Get Free Demo
                </Link>
                <a href="tel:+916374913298" className="btn-outline">
                  <i className="fa-solid fa-phone" /> +91 63749-13298
                </a>
              </div>
            </div>
            
            {/* Visual on the Right */}
            <div className="mlm-hero-new__visual">
              {/* Floating items */}
              <div className="mlm-hero-floating mlm-hero-floating--red" title="Real-Time Earnings">
                <i className="fa-solid fa-indian-rupee-sign" />
              </div>
              <div className="mlm-hero-floating mlm-hero-floating--orange" title="Secure Wallet">
                <i className="fa-solid fa-wallet" />
              </div>
              <div className="mlm-hero-floating mlm-hero-floating--purple" title="Multi-Level Network">
                <i className="fa-solid fa-diagram-project" />
              </div>
              <div className="mlm-hero-floating mlm-hero-floating--blue" title="E-Commerce Integration">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <Image src={Images.mlmherobanner} alt="MLM Software Solution" className="mlm-hero-new__img" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AFFORDABLE MLM SOFTWARE SERVICE PLANS (11 PLANS) ────── */}
      <section className="mlm-plans-section">
        <div className="container">
          <div className="mlm-plans-header">
            <p className="sd-section-label tp-char-animation">
              <span className="sd-section-label__line" />
              AFFORDABLE MLM SOFTWARE PROVIDER
              <span className="sd-section-label__line" />
            </p>
            <h2 className="mlm-plans-heading tp-split-text tp-split-up">Best MLM Software Company in Chennai</h2>
            <p className="mlm-plans-subheading tp_fade_anim" data-fade-from="bottom">
              Affordable MLM Software Provider for Direct Selling Business
            </p>
          </div>

          <div className="mlm-plans-grid">
            {mlmPlans.map((plan, i) => (
              <div key={i} className="mlm-plan-card tp_fade_anim" data-fade-from="bottom" data-delay={0.1 + (i % 4) * 0.15}>
                <div className="mlm-plan-card__icon-wrap">
                  {plan.iconSvg}
                </div>
                <h3 className="mlm-plan-card__title">{plan.title}</h3>
                <p className="mlm-plan-card__subtitle">{plan.subtitle}</p>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                  className={`mlm-plan-card__btn ${plan.btnClass}`}
                  style={{ border: 'none', cursor: 'pointer', zIndex: 5, position: 'relative' }}
                >
                  {plan.btnText} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: INTERACTIVE MLM ECOSYSTEM ── */}
      <section className="mlm-ecosystem-section">
        <div className="container">
          <div className="mlm-ecosystem-header">
            <span className="high-fidelity-badge">High Fidelity Interactive Preview</span>
            <h2 className="mlm-ecosystem-title">Explore Our Enterprise MLM Software Ecosystem</h2>
            <p className="mlm-ecosystem-desc">
              Interact with our secure dashboard widgets, genealogy binary networks, and live financial charts.
              Built purely in high-performance CSS &amp; vector components.
            </p>
          </div>

          <div className="mlm-eco-tabs">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`mlm-eco-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-chart-line" /> Member Dashboard
            </button>
            <button
              onClick={() => setActiveTab('genealogy')}
              className={`mlm-eco-tab-btn ${activeTab === 'genealogy' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-sitemap" /> Genealogy Tree
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`mlm-eco-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-coins" /> Income Analytics
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`mlm-eco-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-sliders" /> Admin Controls
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`mlm-eco-tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
            >
              <i className="fa-solid fa-mobile-screen-button" /> Mobile App Preview
            </button>
          </div>

          <div className="mlm-eco-content-box">
            {activeTab === 'dashboard' && (
              <div className="mlm-widget-dashboard">
                <div className="mlm-widget-grid">
                  <div className="mlm-widget-card">
                    <span className="widget-label">CURRENT WALLET BALANCE</span>
                    <span className="widget-val">₹1,84,350.00</span>
                    <span className="widget-trend green">
                      <i className="fa-solid fa-arrow-trend-up" /> +12.4% today
                    </span>
                  </div>
                  <div className="mlm-widget-card">
                    <span className="widget-label">TOTAL DIRECT REFERRALS</span>
                    <span className="widget-val">284 Users</span>
                    <span className="widget-trend blue">
                      <i className="fa-solid fa-user-plus" /> +0 new entries
                    </span>
                  </div>
                  <div className="mlm-widget-card">
                    <span className="widget-label">TOTAL LEG MATCH PAIRS</span>
                    <span className="widget-val">1,420 Pairs</span>
                    <span className="widget-trend green">
                      <i className="fa-solid fa-check-double" /> Leg matched
                    </span>
                  </div>
                  <div className="mlm-widget-card">
                    <span className="widget-label">SPONSORSHIP BONUS</span>
                    <span className="widget-val">₹48,500.00</span>
                    <span className="widget-trend grey">Flat 10% sponsor tier</span>
                  </div>
                </div>

                <div className="mlm-ledger-box">
                  <div className="ledger-header">
                    <h4>LIVE TRANSACTION LEDGER FEED</h4>
                    <span className="status-badge">
                      <span className="pulse-dot" /> Real-time Payouts Active
                    </span>
                  </div>
                  <div className="ledger-rows">
                    <div className="ledger-row">
                      <div className="row-left">
                        <div className="circle-icon green">IN</div>
                        <div>
                          <h5>Binary Matching Commission</h5>
                          <p>Node ID: #843210 (Left matched Right)</p>
                        </div>
                      </div>
                      <div className="row-right">
                        <span className="amount positive">+₹4,500.00</span>
                        <span className="time">2 mins ago</span>
                      </div>
                    </div>
                    <div className="ledger-row">
                      <div className="row-left">
                        <div className="circle-icon blue">DS</div>
                        <div>
                          <h5>Direct Sponsor Payout (ID #843292)</h5>
                          <p>Sponsor bonus for Binary entry</p>
                        </div>
                      </div>
                      <div className="row-right">
                        <span className="amount positive">+₹2,500.00</span>
                        <span className="time">14 mins ago</span>
                      </div>
                    </div>
                    <div className="ledger-row">
                      <div className="row-left">
                        <div className="circle-icon purple">W</div>
                        <div>
                          <h5>E-Wallet Auto IMPS Bank Withdrawal</h5>
                          <p>Withdrawal to HDFC Account *9021</p>
                        </div>
                      </div>
                      <div className="row-right">
                        <span className="amount negative">-₹25,000.00</span>
                        <span className="time">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'genealogy' && (
              <div className="mlm-widget-genealogy">
                <p className="genealogy-subtitle">HIGH FIDELITY BINARY NETWORK HIERARCHY</p>
                <div className="tree-container">
                  <div className="tree-node">
                    <div className="node-content blue">
                      <h4>Root Admin Node</h4>
                      <p>ID: #10001 (Active)</p>
                    </div>
                    <div className="node-badge-bottom">1</div>
                  </div>
                  
                  <div className="tree-connector-row" style={{ width: '50%' }}>
                    <svg className="connector-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M50 0 L50 20 L25 20 L25 40 M50 20 L75 20 L75 40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>

                  <div className="tree-level-row">
                    <div className="tree-branch">
                      <div className="tree-node">
                        <div className="node-content green">
                          <h4>Left Member</h4>
                          <p>ID: #10002</p>
                          <div className="node-stats">L: 420 * R: 380</div>
                        </div>
                      </div>
                      <div className="tree-connector-row" style={{ width: '100%' }}>
                        <svg className="connector-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M50 0 L50 20 L25 20 L25 40 M50 20 L75 20 L75 40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                      </div>
                      <div className="tree-level-row level-2">
                        <div className="tree-node">
                          <div className="node-content grey">
                            <h4>Active</h4>
                            <p>#10004</p>
                          </div>
                        </div>
                        <div className="tree-node">
                          <div className="node-content grey">
                            <h4>Active</h4>
                            <p>#10005</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tree-branch">
                      <div className="tree-node">
                        <div className="node-content green">
                          <h4>Right Member</h4>
                          <p>ID: #10003</p>
                          <div className="node-stats">L: 210 * R: 205</div>
                        </div>
                      </div>
                      <div className="tree-connector-row" style={{ width: '100%' }}>
                        <svg className="connector-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M50 0 L50 20 L25 20 L25 40 M50 20 L75 20 L75 40" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                      </div>
                      <div className="tree-level-row level-2">
                        <div className="tree-node">
                          <div className="node-content grey">
                            <h4>Active</h4>
                            <p>#10006</p>
                          </div>
                        </div>
                        <div className="tree-node">
                          <div className="node-content red">
                            <h4>Inactive</h4>
                            <p>#10007</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="mlm-widget-analytics">
                <div className="analytics-grid">
                  <div className="analytics-chart-box">
                    <div className="chart-box-header">
                      <h4>YIELD &amp; COMMISSION GROWTH CURVE</h4>
                      <span className="audit-badge">Monthly Audit</span>
                    </div>
                    <div className="growth-chart">
                      <div className="chart-bars">
                        <div className="chart-bar-col">
                          <div className="bar-val-height" style={{ height: '25%' }}></div>
                          <span className="bar-label">Jan</span>
                        </div>
                        <div className="chart-bar-col">
                          <div className="bar-val-height" style={{ height: '40%' }}></div>
                          <span className="bar-label">Feb</span>
                        </div>
                        <div className="chart-bar-col">
                          <div className="bar-val-height" style={{ height: '55%' }}></div>
                          <span className="bar-label">Mar</span>
                        </div>
                        <div className="chart-bar-col">
                          <div className="bar-val-height" style={{ height: '80%' }}></div>
                          <span className="bar-label">Apr</span>
                        </div>
                        <div className="chart-bar-col active">
                          <span className="highlight-tag">₹5.2L</span>
                          <div className="bar-val-height" style={{ height: '95%' }}></div>
                          <span className="bar-label">May</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-table-box">
                    <h4>COMPOUNDED YIELD METRICS</h4>
                    <div className="yield-table">
                      <div className="table-row">
                        <span className="metric-label">Daily ROI Distributed</span>
                        <span className="metric-value">₹8,42,100.00</span>
                      </div>
                      <div className="table-row">
                        <span className="metric-label">Total Binary Leg Match</span>
                        <span className="metric-value">₹14,58,000.00</span>
                      </div>
                      <div className="table-row">
                        <span className="metric-label">TDS Deductions (5%)</span>
                        <span className="metric-value green">₹1,15,005.00</span>
                      </div>
                      <div className="table-row">
                        <span className="metric-label">Admin Service Charge (5%)</span>
                        <span className="metric-value green">₹1,15,005.00</span>
                      </div>
                    </div>
                    <button className="export-ledger-btn">Export Financial Ledger Demo</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'admin' && (
              <div className="mlm-widget-admin">
                <div className="admin-widgets-grid">
                  <div className="admin-card">
                    <h4>PAYOUT CAPPINGS &amp; LOCKS</h4>
                    <div className="toggle-list">
                      <div className="toggle-row">
                        <span>Auto Pair Limit matching</span>
                        <div
                          className={`ios-toggle ${autoPairLimit ? 'active' : ''}`}
                          onClick={() => setAutoPairLimit(!autoPairLimit)}
                        >
                          <div className="toggle-handle" />
                        </div>
                      </div>
                      <div className="toggle-row">
                        <span>TDS Auto Deduction (5%)</span>
                        <div
                          className={`ios-toggle ${tdsAutoDeduction ? 'active' : ''}`}
                          onClick={() => setTdsAutoDeduction(!tdsAutoDeduction)}
                        >
                          <div className="toggle-handle" />
                        </div>
                      </div>
                      <div className="toggle-row">
                        <span>IMPS API Payout Lock</span>
                        <div
                          className={`ios-toggle ${impsPayoutLock ? 'active' : ''}`}
                          onClick={() => setImpsPayoutLock(!impsPayoutLock)}
                        >
                          <div className="toggle-handle" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="admin-card">
                    <h4>APIS &amp; CONNECTED GATEWAYS</h4>
                    <div className="api-list">
                      <div className="api-row">
                        <span>Bank Withdrawal API</span>
                        <span className="api-status">
                          <i className="fa-solid fa-circle-check" /> Razorpay Active
                        </span>
                      </div>
                      <div className="api-row">
                        <span>OTP Verification SMS</span>
                        <span className="api-status">
                          <i className="fa-solid fa-circle-check" /> Twilio Connected
                        </span>
                      </div>
                      <div className="api-row scale-threshold">
                        <span className="scale-label">AWS Scale Threshold</span>
                        <span className="scale-value">Auto scale up (1M nodes)</span>
                      </div>
                    </div>
                  </div>

                  <div className="admin-card">
                    <h4>LIVE NODE LATENCY FEED</h4>
                    <div className="console-output">
                      <code>[16:42:01] DB LOCK ACQUIRED</code>
                      <code>[16:42:01] match matched pair node #4832</code>
                      <code>[16:42:01] Payout success to HDFC. API 200 OK</code>
                    </div>
                    <button className="sandbox-btn">Launch Sandbox Console</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mobile' && (
              <div className="mlm-widget-mobile">
                <div className="iphone-frame">
                  <div className="iphone-screen">
                    <div className="iphone-status-bar">
                      <span>9:41</span>
                      <div className="status-icons">
                        <i className="fa-solid fa-signal" />
                        <i className="fa-solid fa-wifi" />
                        <i className="fa-solid fa-battery-full" />
                      </div>
                    </div>
                    <div className="iphone-app-header">
                      <h4>eCOM MLM WALLET</h4>
                      <i className="fa-solid fa-bell" />
                    </div>
                    <div className="iphone-app-content">
                      <div className="app-card">
                        <span className="app-card-label">WALLET BALANCE</span>
                        <h3 className="app-card-val">₹1,84,350.00</h3>
                        <span className="app-card-trend">+12.4% today</span>
                        <div className="app-progress-bar-wrap">
                          <div className="app-progress-bar" style={{ width: '70%' }} />
                        </div>
                      </div>
                      <div className="app-card-grid">
                        <div className="app-mini-card">
                          <i className="fa-solid fa-users" />
                          <span>Referrals</span>
                        </div>
                        <div className="app-mini-card">
                          <i className="fa-solid fa-wallet" />
                          <span>Earnings</span>
                        </div>
                        <div className="app-mini-card">
                          <i className="fa-solid fa-network-wired" />
                          <span>Network</span>
                        </div>
                        <div className="app-mini-card">
                          <i className="fa-solid fa-gears" />
                          <span>Settings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY CHOOSE US (GRID COMPONENT) ──────────────────── */}
      <section className="mlm-choose-section">
        <div className="container">
          <div className="mlm-choose-header">
            <span className="mlm-choose-badge">Why Choose Us</span>
            <h2 className="mlm-choose-title">Why Choose Our MLM Software Development Company in Chennai</h2>
            <p className="mlm-choose-desc">
              As an experienced MLM software development company in Chennai, we understand the complex needs of network marketing businesses.
            </p>
          </div>

          <div className="mlm-choose-grid">
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-sitemap" />
              </div>
              <h3>Support for All MLM Plans</h3>
              <p>Binary, Matrix, Unilevel &amp; Hybrid Plans fully supported with custom configurations.</p>
            </div>
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-calculator" />
              </div>
              <h3>Automated Commission System</h3>
              <p>Automated Commission &amp; Bonus Calculations with zero errors and real-time processing.</p>
            </div>
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-lock" />
              </div>
              <h3>Secure Member Login</h3>
              <p>Secure Member Login System with two-factor authentication and role-based access.</p>
            </div>
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-money-bill-transfer" />
              </div>
              <h3>Multi-Currency Support</h3>
              <p>Multi-Currency &amp; Multi-Language Support for global network marketing businesses.</p>
            </div>
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-cloud" />
              </div>
              <h3>Cloud-Based System</h3>
              <p>Fast, Scalable &amp; Cloud-Based System that grows with your business.</p>
            </div>
            <div className="mlm-choose-card">
              <div className="card-icon">
                <i className="fa-solid fa-headset" />
              </div>
              <h3>Dedicated Support</h3>
              <p>Technical Support &amp; Training to ensure smooth operations and quick issue resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CORE FEATURES GRID – 8 CARDS ─────────────────────── */}
      <section className="sd-services" style={{ background: '#fcfcfc' }}>
        <div className="container">
          <div className="sd-services__header">
            <p className="sd-section-label tp-char-animation">
              <span className="sd-section-label__line" />
              COMPLETE MLM SOFTWARE SOLUTIONS
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-services__heading tp-split-text tp-split-up">Everything You Need to Run a Successful MLM Business</h2>
            <p className="sd-services__subheading tp_fade_anim" data-fade-from="bottom">
              Our MLM software comes with all the essential features to manage your network, distributors, payouts, and business operations effortlessly.
            </p>
          </div>

          <div className="mlm-features-grid">
            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.1">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/plan_management.png" alt="Plan Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Plan Management</h3>
              <p className="mlm-feature-card__desc">Create & manage compensation plans with ease.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.25">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/user_management.png" alt="User Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">User Management</h3>
              <p className="mlm-feature-card__desc">Manage distributors, members, and their hierarchies.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.4">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/payout_management.png" alt="Payout Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Payout Management</h3>
              <p className="mlm-feature-card__desc">Automate payouts & track real-time commissions.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.55">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/wallet-managements.png" alt="Wallet Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Wallet Management</h3>
              <p className="mlm-feature-card__desc">Manage E-wallets, transactions, and withdrawals.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.1">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/genology_view.png" alt="Genealogy View" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Genealogy View</h3>
              <p className="mlm-feature-card__desc">Visualize your downline structure in real-time.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.25">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/report.png" alt="Reports & Analytics" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Reports & Analytics</h3>
              <p className="mlm-feature-card__desc">Powerful analytics to track performance & growth.</p>
            </div>

            <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.4">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/ecommerce.png" alt="E-Commerce" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">E-Commerce</h3>
              <p className="mlm-feature-card__desc">Integrated shopping & product management system.</p>
            </div>
                  <div className="mlm-feature-card tp_fade_anim" data-fade-from="bottom" data-delay="0.55">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/support_system.png" alt="Support System" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Support System</h3>
              <p className="mlm-feature-card__desc">Built-in support tools for your members' queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: NEW 6-STEP PROCESS GRID (Task 3) ── */}
      <section ref={processRef} className="mlm-process-new">
        <div className="container">
          <div className="mlm-process-new__header">
            <span className="mlm-process-new__badge">Our Process</span>
            <h2 className="mlm-process-new__title">Our MLM Software Development Process</h2>
            <p className="mlm-process-new__desc">
              A systematic approach to building your custom MLM software solution.
            </p>
          </div>

          <div className="mlm-process-new__grid">
            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">01</span>
                <div className="card-icon">
                  <i className="fa-regular fa-comment-dots" />
                </div>
              </div>
              <h3>Requirement Discussion</h3>
              <p>We understand your MLM business model and compensation plan requirements.</p>
            </div>

            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">02</span>
                <div className="card-icon">
                  <i className="fa-solid fa-sitemap" />
                </div>
              </div>
              <h3>MLM Plan Analysis</h3>
              <p>Detailed analysis of your MLM plan structure and commission calculations.</p>
            </div>

            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">03</span>
                <div className="card-icon">
                  <i className="fa-solid fa-pen-nib" />
                </div>
              </div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and user-friendly interfaces for members and admins.</p>
            </div>

            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">04</span>
                <div className="card-icon">
                  <i className="fa-solid fa-code" />
                </div>
              </div>
              <h3>Software Development</h3>
              <p>Building your custom MLM software with robust architecture.</p>
            </div>

            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">05</span>
                <div className="card-icon">
                  <i className="fa-solid fa-user-shield" />
                </div>
              </div>
              <h3>Testing &amp; Security Check</h3>
              <p>Rigorous testing and security audits before deployment.</p>
            </div>

            <div className="mlm-process-new__card">
              <div className="card-top-row">
                <span className="card-num">06</span>
                <div className="card-icon">
                  <i className="fa-solid fa-rocket" />
                </div>
              </div>
              <h3>Launch &amp; Training Support</h3>
              <p>Smooth deployment with comprehensive training for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: SECURE & RELIABLE MLM SOFTWARE ─────────────────────────── */}
      <section className="mlm-security-section">
        <div className="container">
          <div className="mlm-security-header">
            <span className="mlm-security-badge">Security First</span>
            <h2 className="mlm-security-title">Secure &amp; Reliable MLM Software</h2>
            <p className="mlm-security-desc">
              Security is critical for MLM businesses. Our MLM software includes enterprise-grade security features to protect your data and transactions.
            </p>
          </div>

          <div className="mlm-security-grid">
            <div className="mlm-security-card">
              <div className="card-icon">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h3>SSL Encryption</h3>
              <p>256-bit SSL encryption for all data transfers and communications.</p>
            </div>
            <div className="mlm-security-card">
              <div className="card-icon">
                <i className="fa-solid fa-user-shield" />
              </div>
              <h3>Secure Admin Controls</h3>
              <p>Multi-level admin access with complete audit trails.</p>
            </div>
            <div className="mlm-security-card">
              <div className="card-icon">
                <i className="fa-solid fa-shield-virus" />
              </div>
              <h3>Fraud Detection</h3>
              <p>Advanced fraud detection mechanisms to protect your business.</p>
            </div>
            <div className="mlm-security-card">
              <div className="card-icon">
                <i className="fa-solid fa-database" />
              </div>
              <h3>Backup &amp; Data Protection</h3>
              <p>Automated daily backups with disaster recovery systems.</p>
            </div>
            <div className="mlm-security-card">
              <div className="card-icon">
                <i className="fa-solid fa-user-gear" />
              </div>
              <h3>Role-Based Access</h3>
              <p>Granular permissions based on user roles and responsibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TESTIMONIALS ───────────────────────────────────────── */}
      <section className="sd-testimonials" style={{ background: '#fafafa', padding: '80px 0' }}>
        <div className="container">
          <div className="mlm-testimonials-container">
            {/* Left Column Header Info */}
            <div className="mlm-testimonials-header">
              <p className="sd-section-label sd-section-label--left tp-char-animation">
                <span className="sd-section-label__line" />
                WHAT OUR CLIENTS SAY
              </p>
              <h2 className="mlm-testimonials-heading tp-split-text tp-split-up">Trusted by MLM Businesses Worldwide</h2>
              <p className="mlm-testimonials-subtext tp_fade_anim" data-fade-from="bottom">
                We take pride in helping businesses achieve success with our reliable and scalable MLM software solutions.
              </p>
              <Link href="/contact" className="gra_btn sd-hero__btn" style={{ marginTop: '24px', display: 'inline-flex' }}>
                View All Testimonials&nbsp;→
              </Link>
            </div>

            {/* Right Column Testimonials Slider */}
            <div className="mlm-testimonials-slider-box">
              <div
                className="sd-testimonials__slider"
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
                style={{ overflow: 'hidden', width: '100%' }}
              >
                <div
                  className="sd-testimonials__track"
                  style={{
                    transform: `translateX(-${activeSlide * (100 / testimonials.length)}%)`,
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    width: `${testimonials.length * 100}%`
                  }}
                >
                  {testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="sd-testimonial-card"
                      style={{
                        width: `${100 / testimonials.length}%`,
                        flex: `0 0 ${100 / testimonials.length}%`,
                        flexShrink: 0,
                        padding: '0 10px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <div className="sd-testimonial-card__inner" style={{ background: '#ffffff', minHeight: '220px' }}>
                        {/* 5-star rating */}
                        <div className="mlm-stars-row" style={{ color: '#ff9800', marginBottom: '14px', fontSize: '15px' }}>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        {/* Quote icon + text on same row */}
                        <div className="sd-testimonial-card__quote-row">
                          <i className="fa-solid fa-quote-left sd-testimonial-card__quote-icon" />
                          <p className="sd-testimonial-card__text">{t.quote}</p>
                        </div>
                        {/* Author row: image + name/role */}
                        <div className="sd-testimonial-card__author">
                          <div className="sd-testimonial-card__avatar">
                            <Image
                              src={t.image}
                              alt={t.name}
                              width={46}
                              height={46}
                              style={{ objectFit: 'cover', borderRadius: '50%', width: '46px', height: '46px' }}
                            />
                          </div>
                          <div>
                            <p className="sd-testimonial-card__name">{t.name}</p>
                            <p className="sd-testimonial-card__role">{t.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="sd-testimonials__dots" style={{ marginTop: '20px' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { stopAutoScroll(); setActiveSlide(i); startAutoScroll(); }}
                    className={`sd-testimonials__dot${activeSlide === i ? ' sd-testimonials__dot--active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: BOTTOM CTA BANNER ────────────────────────────────── */}
      <section className="mlm-cta-banner-section" style={{ paddingBottom: '70px' }}>
        <div className="container">
          <div className="sd-cta-banner tp_fade_anim" data-fade-from="bottom" style={{ padding: '40px 50px', borderRadius: '24px', overflow: 'visible' }}>
            <div className="sd-cta-banner__left">
              <div className="sd-cta-banner__content">
                <h3 className="sd-cta-banner__heading" style={{ fontSize: '32px', marginBottom: '12px', lineHeight: '1.2' }}>Ready to Launch Your MLM Business?</h3>
                <p className="sd-cta-banner__sub" style={{ fontSize: '15px', color: '#cad3f0', marginBottom: '24px' }}>
                  Get a powerful, secure, and scalable MLM software solution tailored to your needs.
                </p>
              </div>
              <Link href="/contact" className="gra_btn sd-cta-banner__btn" style={{ fontSize: '15px', padding: '14px 28px' }}>
                Start Your MLM Project Now →
              </Link>
            </div>
            <div className="sd-cta-banner__right">
              <div className="sd-cta-banner__rocket-wrap">
                {/* Rocket engine fire & flame effect */}
                <div className="rocket-flame-wrap">
                  <div className="rocket-flame-outer"></div>
                  <div className="rocket-flame-mid"></div>
                  <div className="rocket-flame-core"></div>
                  <div className="rocket-spark spark-1"></div>
                  <div className="rocket-spark spark-2"></div>
                  <div className="rocket-spark spark-3"></div>
                  <div className="rocket-spark spark-4"></div>
                </div>

                <Image
                  src="/assets/images/services/orange_rocket_cta.png"
                  alt="Rocket Blasting Off"
                  className="sd-cta-banner__rocket"
                  width={300}
                  height={300}
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPUP MODAL FOR PLAN DETAILS (Portal at body level) ─────────── */}
      {selectedPlan && typeof document !== 'undefined' && (() => {
        const details = PLAN_DETAILS[selectedPlan.title] || {
          description: "Explore our premium, customized MLM Software solutions specifically optimized to support your network growth and security standards.",
          benefits: ["Customized layout configurations", "Advanced system safety controls"],
          features: ["Real-time statistics", "Payout triggers"]
        };
        return ReactDOM.createPortal(
          <div className="mlm-modal-overlay" onClick={() => setSelectedPlan(null)}>
            <div className="mlm-modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="mlm-modal-close" onClick={() => setSelectedPlan(null)} aria-label="Close modal">
                <i className="fa-solid fa-xmark" />
              </button>

              <div className="mlm-modal-grid">
                <div className="mlm-modal-left">
                  <div className="mlm-modal-icon-container" style={{ borderLeftColor: selectedPlan.color }}>
                    {selectedPlan.iconSvg}
                  </div>
                  <h3 className="mlm-modal-title">{selectedPlan.title}</h3>
                  <p className="mlm-modal-subtitle">{selectedPlan.subtitle}</p>

                  <div className="mlm-modal-features">
                    <h4 className="mlm-modal-section-title">Core Systems Included:</h4>
                    <div className="mlm-modal-features-list">
                      {details.features.map((feat, idx) => (
                        <span key={idx} className="mlm-modal-feature-badge">
                          <i className="fa-solid fa-circle-check" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mlm-modal-right">
                  <h4 className="mlm-modal-section-title">Plan Overview</h4>
                  <p className="mlm-modal-desc">{details.description}</p>

                  <h4 className="mlm-modal-section-title" style={{ marginTop: '24px' }}>Strategic Business Advantages</h4>
                  <ul className="mlm-modal-benefits-list">
                    {details.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-circle-chevron-right" style={{ color: selectedPlan.color }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mlm-modal-actions">
                    <a
                      href={`https://wa.me/916374913298?text=${encodeURIComponent(`hai i want to know more about ${selectedPlan.title.toLowerCase()}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mlm-modal-action-btn ${selectedPlan.btnClass}`}
                    >
                      Get Started with {selectedPlan.title} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        );
      })()}
    </div>
  );
}
