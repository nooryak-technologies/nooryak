'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/services/submenu.scss';
import { Images } from '@/utils/Images';

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
      color: "#2ecc71",
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
      color: "#2ecc71",
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
      {/* ── SECTION 1: DARK PREMIUM HERO BANNER ───────────────────────────── */}
      <section className="sd-hero mlm-hero">
        <div className="container">

          <div className="sd-hero__inner">
            <div className="sd-hero__content">
              <p className="sd-hero__label mlm-hero__label">MLM SOFTWARE SOLUTION</p>
              <h1 className="sd-hero__title mlm-hero__title">
                Power Your Network.<br />
                Grow Your Business.<br />
                <span className="sd-hero__title--accent mlm-hero__title--accent">With MLM Software.</span>
              </h1>
              <p className="sd-hero__description mlm-hero__description">
                We build secure, scalable, and feature-rich MLM software solutions that help you manage your network, automate operations, and maximize growth.
              </p>

              {/* 4 Features row with customized colored icons */}
              <div className="mlm-hero-features-row">
                <div className="mlm-hero-feat">
                  <i className="fa-solid fa-shield-halved mlm-hero-feat-icon mlm-hero-feat-icon--orange" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="mlm-hero-feat">
                  <i className="fa-solid fa-wallet mlm-hero-feat-icon mlm-hero-feat-icon--orange" />
                  <span>Real-time Payouts</span>
                </div>
                <div className="mlm-hero-feat">
                  <i className="fa-solid fa-puzzle-piece mlm-hero-feat-icon mlm-hero-feat-icon--orange" />
                  <span>Scalable & Flexible</span>
                </div>
                <div className="mlm-hero-feat">
                  <i className="fa-solid fa-diagram-project mlm-hero-feat-icon mlm-hero-feat-icon--orange" />
                  <span>Multi-level Management</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="sd-hero__actions mlm-hero__actions">
                <Link href="/contact" className="gra_btn sd-hero__btn mlm-hero__btn--primary">
                  Explore Our Solutions&nbsp;→
                </Link>
              </div>
            </div>

            <div className="sd-hero__visual mlm-hero__visual">
              {/* Left Side Elements */}
              <div className="mlm-hero-floating mlm-hero-floating--red" title="Real-Time Earnings">
                <i className="fa-solid fa-indian-rupee-sign" />
              </div>
              <div className="mlm-hero-floating mlm-hero-floating--orange" title="Secure Wallet">
                <i className="fa-solid fa-wallet" />
              </div>

              {/* Right Side Elements */}
              <div className="mlm-hero-floating mlm-hero-floating--purple" title="Multi-Level Network">
                <i className="fa-solid fa-diagram-project" />
              </div>
              <div className="mlm-hero-floating mlm-hero-floating--blue" title="E-Commerce Integration">
                <i className="fa-solid fa-cart-shopping" />
              </div>

              <Image src={Images.mlmherobanner} alt="MLM Software Solution" className="sd-hero__img mlm-hero__img" priority />
            </div>
          </div>

          {/* ── INTEGRATED HERO STATS BAR (GLASSMORPHISM CONTAINER) ─────────── */}
          <div className="mlm-hero-stats-box">
            <div className="mlm-hero-stat-item">
              <div className="mlm-hero-stat-icon-wrap mlm-hero-stat-icon-wrap--purple">
                <i className="fa-solid fa-rocket" />
              </div>
              <div className="mlm-hero-stat-text">
                <span className="mlm-hero-stat-val">150+</span>
                <span className="mlm-hero-stat-lbl">Projects Delivered</span>
              </div>
            </div>

            <div className="mlm-hero-stat-item">
              <div className="mlm-hero-stat-icon-wrap mlm-hero-stat-icon-wrap--green">
                <i className="fa-solid fa-face-smile" />
              </div>
              <div className="mlm-hero-stat-text">
                <span className="mlm-hero-stat-val">98%</span>
                <span className="mlm-hero-stat-lbl">Client Satisfaction</span>
              </div>
            </div>

            <div className="mlm-hero-stat-item">
              <div className="mlm-hero-stat-icon-wrap mlm-hero-stat-icon-wrap--blue">
                <i className="fa-solid fa-users" />
              </div>
              <div className="mlm-hero-stat-text">
                <span className="mlm-hero-stat-val">50M+</span>
                <span className="mlm-hero-stat-lbl">Users Impacted</span>
              </div>
            </div>

            <div className="mlm-hero-stat-item">
              <div className="mlm-hero-stat-icon-wrap mlm-hero-stat-icon-wrap--yellow">
                <i className="fa-solid fa-award" />
              </div>
              <div className="mlm-hero-stat-text">
                <span className="mlm-hero-stat-val">10+</span>
                <span className="mlm-hero-stat-lbl">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AFFORDABLE MLM SOFTWARE SERVICE PLANS (11 PLANS) ────── */}
      <section className="mlm-plans-section">
        <div className="container">
          <div className="mlm-plans-header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              AFFORDABLE MLM SOFTWARE PROVIDER
              <span className="sd-section-label__line" />
            </p>
            <h2 className="mlm-plans-heading">Best MLM Software Company in Chennai</h2>
            <p className="mlm-plans-subheading">
              Affordable MLM Software Provider for Direct Selling Business
            </p>
          </div>

          <div className="mlm-plans-grid">
            {mlmPlans.map((plan, i) => (
              <div key={i} className="mlm-plan-card">
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

      {/* ── SECTION 2: WHY CHOOSE (GLOWING RINGS) – DARK PREMIUM SECTION ──── */}
      <section className="mlm-glowing-section">
        <div className="container">
          <div className="mlm-glowing-grid">
            {/* Left Content */}
            <div className="mlm-glowing-content">
              <p className="sd-section-label sd-section-label--left" style={{ color: '#ff6b2b' }}>
                <span className="sd-section-label__line" style={{ background: '#ff6b2b' }} />
                WHY CHOOSE NOORYAK MLM SOFTWARE?
              </p>
              <h2 className="mlm-glowing-heading">Why Businesses Trust Our MLM Solutions</h2>
              <p className="mlm-glowing-text">
                We deliver reliable, scalable, and result-oriented MLM software to help your business grow and succeed.
              </p>
            </div>
            {/* Right Glowing Icons Row */}
            <div className="mlm-glowing-icons">
              <div className="mlm-glow-card mlm-glow-card--blue">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-code mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">Customized Software</span>
              </div>
              <div className="mlm-glow-card mlm-glow-card--purple">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-users-gear mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">MLM Expert Team</span>
              </div>
              <div className="mlm-glow-card mlm-glow-card--green">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-calculator mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">Automatic Calculation</span>
              </div>
              <div className="mlm-glow-card mlm-glow-card--yellow">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-tags mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">Best Price</span>
              </div>
              <div className="mlm-glow-card mlm-glow-card--pink">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-clock mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">On Time Delivery</span>
              </div>
              <div className="mlm-glow-card mlm-glow-card--red">
                <div className="mlm-glow-ring">
                  <i className="fa-solid fa-shield-halved mlm-glow-icon" />
                </div>
                <span className="mlm-glow-title">No Hidden Cost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CORE FEATURES GRID – 8 CARDS ─────────────────────── */}
      <section className="sd-services" style={{ background: '#fcfcfc' }}>
        <div className="container">
          <div className="sd-services__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              COMPLETE MLM SOFTWARE SOLUTIONS
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-services__heading">Everything You Need to Run a Successful MLM Business</h2>
            <p className="sd-services__subheading">
              Our MLM software comes with all the essential features to manage your network, distributors, payouts, and business operations effortlessly.
            </p>
          </div>

          <div className="mlm-features-grid">
            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/plan_management.png" alt="Plan Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Plan Management</h3>
              <p className="mlm-feature-card__desc">Create & manage compensation plans with ease.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/user_management.png" alt="User Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">User Management</h3>
              <p className="mlm-feature-card__desc">Manage distributors, members, and their hierarchies.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/payout_management.png" alt="Payout Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Payout Management</h3>
              <p className="mlm-feature-card__desc">Automate payouts & track real-time commissions.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/wallet-managements.png" alt="Wallet Management" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Wallet Management</h3>
              <p className="mlm-feature-card__desc">Manage E-wallets, transactions, and withdrawals.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/genology_view.png" alt="Genealogy View" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Genealogy View</h3>
              <p className="mlm-feature-card__desc">Visualize your downline structure in real-time.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/report.png" alt="Reports & Analytics" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Reports & Analytics</h3>
              <p className="mlm-feature-card__desc">Powerful analytics to track performance & growth.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/ecommerce.png" alt="E-Commerce" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">E-Commerce</h3>
              <p className="mlm-feature-card__desc">Integrated shopping & product management system.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>

            <div className="mlm-feature-card">
              <div className="mlm-feature-card__circle">
                <Image src="/assets/images/services/icons/support_system.png" alt="Support System" className="mlm-feature-card__icon" width={50} height={50} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mlm-feature-card__title">Support System</h3>
              <p className="mlm-feature-card__desc">Built-in support tools for your members' queries.</p>
              <Link href="/contact" className="mlm-feature-card__link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROVEN 6-STEP MLM DEVELOPMENT PROCESS ─────────────── */}
      <section ref={processRef} className={`sd-process ${processActive ? 'sd-process--active' : ''}`} style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="sd-process__header">
            <p className="sd-section-label">
              <span className="sd-section-label__line" />
              OUR MLM DEVELOPMENT PROCESS
              <span className="sd-section-label__line" />
            </p>
            <h2 className="sd-process__heading">Our Proven 6-Step MLM Development Process</h2>
          </div>

          <div className="sd-process__track">
            <div className="sd-process__line" />

            <div className="sd-process__steps">
              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-file-invoice sd-process-step__icon" />
                </div>
                <div className="sd-process-step__arrow">›</div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">01</span> Requirement Analysis
                </h4>
                <p className="sd-process-step__desc">Understanding your business goals and local requirements.</p>
              </div>

              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-compass sd-process-step__icon" />
                </div>
                <div className="sd-process-step__arrow">›</div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">02</span> Planning & Strategy
                </h4>
                <p className="sd-process-step__desc">Creating a roadmap and strategy for your MLM platform.</p>
              </div>

              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-bezier-curve sd-process-step__icon" />
                </div>
                <div className="sd-process-step__arrow">›</div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">03</span> Design & Prototyping
                </h4>
                <p className="sd-process-step__desc">Designing intuitive UI/UX with interactive prototypes.</p>
              </div>

              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-laptop-code sd-process-step__icon" />
                </div>
                <div className="sd-process-step__arrow">›</div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">04</span> Development
                </h4>
                <p className="sd-process-step__desc">Building secure, scalable, and high-performance software.</p>
              </div>

              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-bug-slash sd-process-step__icon" />
                </div>
                <div className="sd-process-step__arrow">›</div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">05</span> Testing & QA
                </h4>
                <p className="sd-process-step__desc">Rigorous testing to ensure bug-free and smooth performance.</p>
              </div>

              <div className="sd-process-step">
                <div className="sd-process-step__circle">
                  <span className="sd-process-step__dot" />
                  <i className="fa-solid fa-rocket sd-process-step__icon" />
                </div>
                <h4 className="sd-process-step__title">
                  <span className="sd-process-step__number">06</span> Deployment & Support
                </h4>
                <p className="sd-process-step__desc">Launching your platform and providing ongoing support.</p>
              </div>
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
              <p className="sd-section-label sd-section-label--left">
                <span className="sd-section-label__line" />
                WHAT OUR CLIENTS SAY
              </p>
              <h2 className="mlm-testimonials-heading">Trusted by MLM Businesses Worldwide</h2>
              <p className="mlm-testimonials-subtext">
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
          <div className="sd-cta-banner" style={{ padding: '40px 50px', borderRadius: '24px', overflow: 'visible' }}>
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
              <Image
                src="/assets/images/services/orange_rocket_cta.png?v=2"
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
                    <Link href="/contact" className={`mlm-modal-action-btn ${selectedPlan.btnClass}`}>
                      Get Started with {selectedPlan.title} →
                    </Link>
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
