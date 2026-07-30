"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const handleEnquiryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("openEnquiryForm"));
  };

  const isHomeActive = pathname === "/";
  const isProductsActive = pathname === "/products" || pathname?.startsWith("/products");
  const isServicesActive = pathname === "/services" || pathname?.startsWith("/services");
  const isContactActive = pathname === "/contact" || pathname?.startsWith("/contact");

  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-nav-inner">
        {/* Left Orange Multi-Layered Wave SVG */}
        <svg className="nav-wave-bg left-wave" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
          <path d="M-5 -5 Q65 20 40 105 L-5 105 Z" fill="#ffe3d1" />
          <path d="M-5 -5 Q48 25 25 105 L-5 105 Z" fill="#ff8c38" />
          <path d="M-5 -5 Q32 30 12 105 L-5 105 Z" fill="#ff4e00" />
        </svg>

        {/* Right Orange Multi-Layered Wave SVG */}
        <svg className="nav-wave-bg right-wave" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
          <path d="M105 -5 Q35 20 60 105 L105 105 Z" fill="#ffe3d1" />
          <path d="M105 -5 Q52 25 75 105 L105 105 Z" fill="#ff8c38" />
          <path d="M105 -5 Q68 30 88 105 L105 105 Z" fill="#ff4e00" />
        </svg>

        {/* 1. HOME */}
        <Link
          href="/"
          className={`mobile-nav-item ${isHomeActive ? "active" : ""}`}
        >
          <div className="nav-icon-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20V9.5z"/>
              <path d="M9 21.5V12h6v9.5"/>
            </svg>
          </div>
          <span className="nav-label">HOME</span>
          {isHomeActive && <span className="active-indicator"></span>}
        </Link>

        {/* 2. PRODUCTS (Redirects to /products) */}
        <Link
          href="/products"
          className={`mobile-nav-item ${isProductsActive ? "active" : ""}`}
        >
          <div className="nav-icon-circle">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
          <span className="nav-label">PRODUCTS</span>
          {isProductsActive && <span className="active-indicator"></span>}
        </Link>

        {/* 3. SERVICES (Redirects to /services) */}
        <Link
          href="/services"
          className={`mobile-nav-item ${isServicesActive ? "active" : ""}`}
        >
          <div className="nav-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7.5" height="7.5" rx="2.5"/>
              <rect x="13.5" y="3" width="7.5" height="7.5" rx="2.5"/>
              <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2.5"/>
              <rect x="3" y="13.5" width="7.5" height="7.5" rx="2.5"/>
            </svg>
          </div>
          <span className="nav-label">SERVICES</span>
          {isServicesActive && <span className="active-indicator"></span>}
        </Link>

        {/* 4. ENQUIRY (Opens Side Popup Enquiry Drawer) */}
        <button
          type="button"
          onClick={handleEnquiryClick}
          className="mobile-nav-item mobile-nav-btn"
        >
          <div className="nav-icon-circle">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          <span className="nav-label">ENQUIRY</span>
        </button>

        {/* 5. CONTACT US (Redirects to /contact) */}
        <Link
          href="/contact"
          className={`mobile-nav-item ${isContactActive ? "active" : ""}`}
        >
          <div className="nav-icon-circle">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <span className="nav-label">CONTACT US</span>
          {isContactActive && <span className="active-indicator"></span>}
        </Link>
      </div>
    </div>
  );
}
