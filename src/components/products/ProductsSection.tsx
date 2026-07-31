"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Calendar,
  ArrowRight,
  Monitor,
  Layers,
  Rocket,
  Headphones,
  X,
  CreditCard,
  Check,
  CheckCircle
} from "lucide-react";
import "../../app/products/products.scss";

interface ProductsSectionProps {
  isPage?: boolean;
}

export default function ProductsSection({ isPage = true }: ProductsSectionProps) {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Launchshop");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenDemo = (productName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedProduct(productName);
    setSubmitted(false);
    setShowDemoModal(true);
  };

  const handleProductClick = (url: string) => {
    if (url.startsWith("/")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/saas-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: selectedProduct,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowDemoModal(false);
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 2500);
      } else {
        const data = await res.json();
        alert(data.message || 'Failed to submit demo request');
      }
    } catch (err) {
      console.error('Error submitting SaaS demo enquiry:', err);
      alert('Error submitting demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = "https://wa.me/916374913298?text=Hello%20Nooryak%20Technologies%2C%20I%20would%20like%20to%20discuss%20about%20your%20Digital%20Services";

  return (
    <div className="products-main-wrapper" id="products-section-root">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER SECTION (Ref Image 2)                                      */}
      {/* ========================================================================= */}
      <section className="products-hero-section">
        {/* Background wave decoration lines */}
        <div className="hero-wave-bg left-wave">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 100 Q 100 300 400 150 Q 700 0 900 250" stroke="rgba(255, 82, 22, 0.12)" strokeWidth="2.5" fill="none" />
            <path d="M-100 160 Q 120 340 420 190 Q 720 40 920 290" stroke="rgba(255, 82, 22, 0.08)" strokeWidth="2" fill="none" />
            <path d="M-100 220 Q 140 380 440 230 Q 740 80 940 330" stroke="rgba(255, 82, 22, 0.05)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="hero-wave-bg right-wave">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 50 Q 200 250 500 100 Q 800 -50 1000 200" stroke="rgba(255, 82, 22, 0.12)" strokeWidth="2.5" fill="none" />
            <path d="M-100 110 Q 220 290 520 140 Q 820 -10 1020 240" stroke="rgba(255, 82, 22, 0.08)" strokeWidth="2" fill="none" />
            <path d="M-100 170 Q 240 330 540 180 Q 840 30 1040 280" stroke="rgba(255, 82, 22, 0.05)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="container">
          <div className="hero-text-container text-center">
            {/* Top Dot Kicker Badge */}
            <div className="hero-kicker-badge" id="products-hero-kicker">
              <span className="dot-left">• •</span>
              <span className="kicker-title">OUR DIGITAL PRODUCTS</span>
              <span className="dot-right">• •</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="hero-main-title">
              Powerful SaaS Products,<br className="d-none d-md-block" />
              <span className="orange-highlight"> Built to Simplify and Scale.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Innovative SaaS solutions designed to streamline operations, automate workflows, and accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN PRODUCTS CARDS GRID (Ref Image 1 Desktop & Image 3 Mobile)       */}
      {/* ========================================================================= */}
      <section className="products-grid-section">
        <div className="container-fluid max-w-1450">
          <div className="row gy-4 gx-3">

            {/* --------------------------------------------------------------------- */}
            {/* CARD 1: LAUNCHSHOP (Ecommerce Store Builder)                         */}
            {/* --------------------------------------------------------------------- */}
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="product-card launchshop-card"
                onClick={() => handleProductClick("https://launchshop.in/")}
                title="Click to view Launchshop product page"
              >
                <div className="card-inner-split">
                  {/* Left Column: Info & Actions */}
                  <div className="card-left-content">
                    <div className="card-top-header">
                      <div className="brand-icon-box orange-box">
                        <Image
                          src="/assets/images/Product/launchshop_logo.png"
                          alt="Launchshop logo"
                          width={32}
                          height={32}
                          className="brand-logo-img"
                        />
                      </div>
                      <div className="title-group">
                        <h2 className="product-title">Launchshop</h2>
                        <span className="product-category orange-text">Ecommerce Store Builder</span>
                      </div>
                    </div>

                    <p className="card-description">
                      Build, launch, and grow your online store with ease. Create stunning eCommerce stores in minutes.
                    </p>

                    {/* Feature Pills */}
                    <div className="feature-pills-grid">
                      <div className="feature-pill">
                        <span className="pill-check orange-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Theme Customization</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check orange-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Product Management</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check orange-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Secure Payments</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check orange-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Order & Shipping</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions-row">
                      <button
                        type="button"
                        className="btn-primary-pill btn-orange"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick("https://launchshop.in/");
                        }}
                      >
                        <span>Explore Launchshop</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        type="button"
                        className="btn-secondary-pill"
                        onClick={(e) => handleOpenDemo("Launchshop", e)}
                      >
                        <Calendar size={15} />
                        <span>Book a Demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image Mockup (Desktop vs Mobile Responsive Images) */}
                  <div className="card-right-mockup">
                    <div className="mockup-img-container">
                      {/* Desktop Mockup Image */}
                      <Image
                        src="/assets/images/Product/launchshop.png"
                        alt="Launchshop eCommerce Store Builder preview mockup"
                        width={280}
                        height={360}
                        className="img-fluid mockup-img d-none d-md-block"
                        priority
                      />
                      {/* Mobile Mockup Image (launchshop_mobile.png) */}
                      <Image
                        src="/assets/images/Product/launchshop_mobile.png"
                        alt="Launchshop eCommerce Store Builder mobile mockup"
                        width={240}
                        height={320}
                        className="img-fluid mockup-img d-block d-md-none"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 2: NOORYAK CRM (Lead Management CRM)                           */}
            {/* --------------------------------------------------------------------- */}
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="product-card crm-card"
                onClick={() => handleProductClick("https://nooryakcrm.com/")}
                title="Click to view Nooryak CRM product page"
              >
                <div className="card-inner-split">
                  {/* Left Column: Info & Actions */}
                  <div className="card-left-content">
                    <div className="card-top-header">
                      <div className="brand-icon-box green-box">
                        <Image
                          src="/assets/images/Product/nooryakcrm_logo.png"
                          alt="Nooryak CRM logo"
                          width={32}
                          height={32}
                          className="brand-logo-img"
                        />
                      </div>
                      <div className="title-group">
                        <h2 className="product-title">Nooryak CRM</h2>
                        <span className="product-category green-text">Lead Management CRM</span>
                      </div>
                    </div>

                    <p className="card-description">
                      Capture leads, automate follow-ups, and close deals faster with our smart CRM platform.
                    </p>

                    {/* Feature Pills */}
                    <div className="feature-pills-grid">
                      <div className="feature-pill">
                        <span className="pill-check green-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Lead Tracking</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check green-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Sales Pipeline</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check green-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Automations</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check green-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Reports & Analytics</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions-row">
                      <button
                        type="button"
                        className="btn-primary-pill btn-green"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick("https://nooryakcrm.com/");
                        }}
                      >
                        <span>Explore Nooryak CRM</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        type="button"
                        className="btn-secondary-pill"
                        onClick={(e) => handleOpenDemo("Nooryak CRM", e)}
                      >
                        <Calendar size={15} />
                        <span>Book a Demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image Mockup (Desktop vs Mobile Responsive Images) */}
                  <div className="card-right-mockup">
                    <div className="mockup-img-container">
                      {/* Desktop Mockup Image */}
                      <Image
                        src="/assets/images/Product/nooryakcrm.png"
                        alt="Nooryak CRM Lead Management preview mockup"
                        width={280}
                        height={360}
                        className="img-fluid mockup-img d-none d-md-block"
                        priority
                      />
                      {/* Mobile Mockup Image (crm_dashboard_mobile.png) */}
                      <Image
                        src="/assets/images/Product/crm_dashboard_mobile.png"
                        alt="Nooryak CRM mobile dashboard mockup"
                        width={240}
                        height={320}
                        className="img-fluid mockup-img d-block d-md-none"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 3: SAAS BILLING & INVENTORY POS                                 */}
            {/* --------------------------------------------------------------------- */}
            <div className="col-12 col-xl-4 col-lg-6">
              <div
                className="product-card pos-card"
                onClick={() => handleProductClick("/coming-soon")}
                title="Click to view SaaS POS product page"
              >
                <div className="card-inner-split">
                  {/* Left Column: Info & Actions */}
                  <div className="card-left-content">
                    <div className="card-top-header">
                      <div className="brand-icon-box blue-box">
                        <CreditCard size={24} color="#1A66FF" strokeWidth={2.5} />
                      </div>
                      <div className="title-group">
                        <h2 className="product-title">SaaS Billing & POS</h2>
                        <span className="product-category blue-text">Inventory & POS Management</span>
                      </div>
                    </div>

                    <p className="card-description">
                      Manage billing, inventory, sales, and customers in one powerful platform. Perfect for retail stores and wholesalers.
                    </p>

                    {/* Feature Pills */}
                    <div className="feature-pills-grid">
                      <div className="feature-pill">
                        <span className="pill-check blue-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">POS Billing</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check blue-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Inventory Tracking</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check blue-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Multi-Store Access</span>
                      </div>
                      <div className="feature-pill">
                        <span className="pill-check blue-check"><Check size={13} strokeWidth={3} /></span>
                        <span className="pill-text">Reports & Insights</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions-row">
                      <button
                        type="button"
                        className="btn-primary-pill btn-blue"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick("/coming-soon");
                        }}
                      >
                        <span>Explore POS Platform</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        type="button"
                        className="btn-secondary-pill"
                        onClick={(e) => handleOpenDemo("SaaS Billing & POS", e)}
                      >
                        <Calendar size={15} />
                        <span>Book a Demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image Mockup (Desktop vs Mobile Responsive Images) */}
                  <div className="card-right-mockup">
                    <div className="mockup-img-container">
                      {/* Desktop Mockup Image */}
                      <Image
                        src="/assets/images/Product/invoicegenerator.png"
                        alt="SaaS Billing & POS Invoice Generator preview mockup"
                        width={280}
                        height={360}
                        className="img-fluid mockup-img d-none d-md-block"
                        priority
                      />
                      {/* Mobile Mockup Image (pos_dashboard_mobile.png) */}
                      <Image
                        src="/assets/images/Product/pos_dashboard_mobile.png"
                        alt="SaaS Billing & POS mobile dashboard mockup"
                        width={240}
                        height={320}
                        className="img-fluid mockup-img d-block d-md-none"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURE HIGHLIGHT STRIP BAR (Ref Image 1 Middle Bar)                   */}
      {/* ========================================================================= */}
      <section className="features-strip-section">
        <div className="container-fluid max-w-1450">
          <div className="features-strip-card">
            <div className="row g-4 align-items-center">

              {/* Feature 1 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="feature-strip-item">
                  <div className="feature-icon-box">
                    <Monitor size={22} color="#FF5216" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title">Modern UI/UX</h3>
                    <p className="feature-desc">Clean, intuitive, and user-friendly</p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="feature-strip-item">
                  <div className="feature-icon-box">
                    <Layers size={22} color="#FF5216" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title">Scalable Architecture</h3>
                    <p className="feature-desc">Built to grow with your business</p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="feature-strip-item">
                  <div className="feature-icon-box">
                    <Rocket size={22} color="#FF5216" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title">Fast Onboarding</h3>
                    <p className="feature-desc">Get started in minutes, not weeks</p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="feature-strip-item">
                  <div className="feature-icon-box">
                    <Headphones size={22} color="#FF5216" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title">Support from Nooryak</h3>
                    <p className="feature-desc">Our experts are always here to help</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM HELP / CTA BANNER (Ref Image 1 & Image 3 Bottom Banner)         */}
      {/* ========================================================================= */}
      <section className="products-help-banner-section">
        <div className="container-fluid max-w-1450">
          <div className="help-banner-card">
            {/* Background Wavy Curves */}
            <div className="banner-wavy-bg">
              <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 120 C 300 220, 600 20, 1300 160" stroke="rgba(255, 82, 22, 0.15)" strokeWidth="2.5" fill="none" />
                <path d="M-100 160 C 300 260, 600 60, 1300 200" stroke="rgba(255, 82, 22, 0.1)" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="row align-items-center gy-4">
              {/* Left Content */}
              <div className="col-12 col-lg-6">
                <div className="help-content-left d-flex align-items-center gap-3">
                  <div className="headphone-icon-circle">
                    <Headphones size={26} color="#FF5216" />
                  </div>
                  <div className="help-text-group">
                    <h2 className="help-banner-title">
                      Need help choosing the right product for{" "}
                      <span className="orange-text">your business?</span>
                    </h2>
                    <p className="help-banner-subtitle d-none d-md-block">
                      Our experts are here to help you find the perfect SaaS solution to launch, manage, and grow your business faster.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle / Right Content (Avatars + Action CTA Button) */}
              <div className="col-12 col-lg-6">
                <div className="help-content-right d-flex align-items-center justify-content-lg-end justify-content-between gap-4 flex-wrap">

                  {/* Avatar Stack */}
                  <div className="trusted-avatars-group d-flex align-items-center gap-2">
                    <div className="avatar-overlap-stack">
                      <Image
                        src="/assets/img/avater/avater-1.png"
                        alt="Indian client avatar"
                        width={36}
                        height={36}
                        className="avatar-img"
                      />
                      <Image
                        src="/assets/img/avater/avater-2.png"
                        alt="Indian client avatar"
                        width={36}
                        height={36}
                        className="avatar-img"
                      />
                      <Image
                        src="/assets/img/avater/avater-3.jpg"
                        alt="Indian client avatar"
                        width={36}
                        height={36}
                        className="avatar-img"
                      />
                      <Image
                        src="/assets/img/avater/avater-4.jpg"
                        alt="Indian client avatar"
                        width={36}
                        height={36}
                        className="avatar-img"
                      />
                      <Image
                        src="/assets/img/avater/avater-5.jpg"
                        alt="Indian client avatar"
                        width={36}
                        height={36}
                        className="avatar-img"
                      />
                    </div>
                    <div className="trusted-label-group">
                      <span className="trusted-label-top">Trusted by</span>
                      <span className="trusted-label-bold">500+ businesses</span>
                    </div>
                  </div>

                  {/* Talk to Our Experts WhatsApp Link */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-talk-experts d-none d-sm-inline-flex"
                    id="talk-to-experts-btn"
                  >
                    <span>Talk to Our Experts</span>
                    <ArrowRight size={18} />
                  </a>

                  {/* Mobile Round Arrow WhatsApp Link */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-round-arrow-mobile d-sm-none"
                    aria-label="Talk to our experts on WhatsApp"
                  >
                    <ArrowRight size={20} />
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE BOOK DEMO MODAL                                            */}
      {/* ========================================================================= */}
      {showDemoModal && (
        <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div
            className="demo-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setShowDemoModal(false)}
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="modal-header-info text-center">
                  <div className="modal-icon-badge">
                    <Calendar size={24} color="#FF5216" />
                  </div>
                  <h3 className="modal-title">Book a Free Live Demo</h3>
                  <p className="modal-subtitle">
                    Discover how <strong>{selectedProduct}</strong> can transform your business. Schedule a 1-on-1 walkthrough with our product expert.
                  </p>
                </div>

                <form onSubmit={handleSubmitDemo} className="demo-form">
                  <div className="form-group mb-3">
                    <label className="form-label">Product Selected</label>
                    <select
                      className="form-control form-select"
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                      <option value="Launchshop">Launchshop (Ecommerce Builder)</option>
                      <option value="Nooryak CRM">Nooryak CRM (Lead Management)</option>
                      <option value="SaaS Billing & POS">SaaS Billing & POS Platform</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-submit-demo" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Submitting...' : 'Schedule My Demo'}</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-state text-center py-4">
                <div className="success-icon-circle mx-auto mb-3">
                  <CheckCircle size={48} color="#00B67A" />
                </div>
                <h3 className="success-title">Demo Request Submitted!</h3>
                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. Our team will contact you shortly to schedule your demo for <strong>{selectedProduct}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
