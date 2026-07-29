import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import "../privacy-policy/privacy-policy.scss";

export const metadata: Metadata = {
  title: "Terms & Conditions - Nooryak Technologies",
  description: "Read the Terms and Conditions governing product sales, transactions, user accounts, and intellectual property on Nooryak Technologies.",
};

export default function TermsConditions() {
  return (
    <div className="privacy-page" id="terms-conditions-root">
      {/* Banner Section */}
      <section className="privacy-banner" id="terms-banner-sec">
        <div className="container">
          <div className="banner-inner-container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-7 col-12">
                <div className="banner-content">
                  <div className="kicker" id="kicker-terms">
                    <span className="orange-dot">•</span>
                    <span>OUR TERMS</span>
                  </div>
                  <h1 className="banner-title" id="terms-banner-title">
                    Terms &amp; <span className="highlight">Conditions</span>
                  </h1>
                  <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <Link href="/" id="breadcrumb-home-link">Home</Link>
                    <span className="separator">&gt;</span>
                    <span className="active" id="breadcrumb-current">Terms &amp; Conditions</span>
                  </nav>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="col-lg-5 col-12">
                <div className="banner-visual">
                  <div className="shield-glow"></div>
                  <Image
                    src="/assets/images/common/terms_document.png"
                    alt="Terms Document Illustration"
                    width={340}
                    height={340}
                    className="shield-img img-fluid"
                    id="terms-banner-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="privacy-content-wrapper" id="terms-content-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="privacy-card" id="terms-content-card">
                {/* Last Updated Badge */}
                <div className="update-badge" id="terms-badge-date">
                  <Calendar size={16} className="icon-orange" />
                  <span>Last Updated: <span className="date-highlight">July 28, 2026</span></span>
                </div>

                {/* Introduction Box */}
                <div className="intro-box" id="terms-intro-box">
                  <div className="intro-icon-container">
                    <ShieldCheck size={32} className="intro-icon" />
                  </div>
                  <p className="intro-text">
                    Welcome to <strong>Nooryak Technologies</strong>. These Terms &amp; Conditions govern your use of our website, services, and the purchase of our design furniture products (including chairs, tables, lighting, and interior accessories). By accessing our website, registering an account, or purchasing products, you agree to comply with and be bound by these terms.
                  </p>
                </div>

                {/* Sections List */}
                <div className="sections-container" id="terms-sections-list">
                  {/* Section 01 */}
                  <div className="policy-section" id="terms-sec-1">
                    <div className="section-header">
                      <div className="section-number">01</div>
                      <h2 className="section-title">Acceptance of Terms</h2>
                    </div>
                    <p className="section-subtitle">
                      By purchasing products or using our services, you confirm that:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          You are at least 18 years of age and possess the legal authority to enter into binding agreements.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          You agree to use this site strictly in compliance with all local, national, and international laws.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 02 */}
                  <div className="policy-section" id="terms-sec-2">
                    <div className="section-header">
                      <div className="section-number">02</div>
                      <h2 className="section-title">Products &amp; Availability</h2>
                    </div>
                    <p className="section-subtitle">
                      We offer premium home design products and interior fixtures. Please note:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Visual Accuracy</strong>: We make every effort to display product colors and materials accurately, but screen rendering variations may occur.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Stock &amp; Availability</strong>: All products are subject to stock availability. We reserve the right to limit order quantities or discontinue items without notice.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 03 */}
                  <div className="policy-section" id="terms-sec-3">
                    <div className="section-header">
                      <div className="section-number">03</div>
                      <h2 className="section-title">Pricing &amp; Payments</h2>
                    </div>
                    <p className="section-subtitle">
                      Financial transactions are subject to the following rules:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Pricing Currency</strong>: All prices listed on our store are in INR (₹) or USD ($) as indicated and exclude applicable taxes and shipping fees.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Payment Authorization</strong>: You must provide valid credit card or billing details. Transactions are processed securely through authorized merchant gateways.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 04 */}
                  <div className="policy-section" id="terms-sec-4">
                    <div className="section-header">
                      <div className="section-number">04</div>
                      <h2 className="section-title">Shipping &amp; Delivery</h2>
                    </div>
                    <p className="section-subtitle">
                      Shipping operations are carried out under these guidelines:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Delivery Dates</strong>: Dispatch times are estimates. We are not liable for carrier delays or customs delays on international shipments.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Title Transfer</strong>: Risk of loss and title for products pass to you upon delivery to our shipping carrier.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 05 */}
                  <div className="policy-section" id="terms-sec-5">
                    <div className="section-header">
                      <div className="section-number">05</div>
                      <h2 className="section-title">Returns, Refunds &amp; Cancellations</h2>
                    </div>
                    <p className="section-subtitle">
                      We offer a customer-friendly return program:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Return Period</strong>: Unused items in original packaging can be returned within 30 days of receipt in accordance with our Return Policy.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Order Cancellations</strong>: Orders can only be cancelled before they enter the shipping/dispatch phase.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 06 */}
                  <div className="policy-section" id="terms-sec-6">
                    <div className="section-header">
                      <div className="section-number">06</div>
                      <h2 className="section-title">User Accounts &amp; Security</h2>
                    </div>
                    <p className="section-subtitle">
                      If you register an account on our store:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          You are responsible for keeping account credentials confidential and for restricting access to your computer.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          You must notify us immediately of any unauthorized account activity.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 07 */}
                  <div className="policy-section" id="terms-sec-7">
                    <div className="section-header">
                      <div className="section-number">07</div>
                      <h2 className="section-title">Intellectual Property</h2>
                    </div>
                    <p className="section-subtitle">
                      All intellectual materials on this website are protected:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Content Ownership</strong>: Graphics, product images, descriptions, codes, logos, and UI patterns are the sole property of Nooryak Technologies.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Restrictions</strong>: You may not duplicate, copy, republish, or commercialize any site material without explicit written consent.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 08 */}
                  <div className="policy-section" id="terms-sec-8">
                    <div className="section-header">
                      <div className="section-number">08</div>
                      <h2 className="section-title">Limitation of Liability</h2>
                    </div>
                    <p className="section-subtitle">
                      Our financial liability is limited to the extent permitted by law:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          Nooryak Technologies is not liable for indirect, incidental, or consequential damages resulting from store use or purchased products.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          Our total liability shall not exceed the price you paid for the specific product that caused the dispute.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 09 */}
                  <div className="policy-section" id="terms-sec-9">
                    <div className="section-header">
                      <div className="section-number">09</div>
                      <h2 className="section-title">Governing Law</h2>
                    </div>
                    <p className="section-subtitle">
                      Any legal actions or disputes shall be processed in accordance with:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          The laws of India, without regard to conflict of laws principles.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          Exclusive jurisdiction of courts located in Chennai, Tamil Nadu.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 10 */}
                  <div className="policy-section" id="terms-sec-10">
                    <div className="section-header">
                      <div className="section-number">10</div>
                      <h2 className="section-title">Contact Information</h2>
                    </div>
                    <p className="section-subtitle">
                      If you have questions regarding these Terms, reach out to:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Company</strong>: Nooryak Technologies
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Email</strong>: <a href="mailto:contact@nooryak.com" className="contact-link">contact@nooryak.com</a>
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Address</strong>: Shafi Tower, Floor 1, Door, Khana Bagh Street, Police Quarters Lane, Chennai, Tamil Nadu 600001
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
