import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import "../privacy-policy/privacy-policy.scss";

export const metadata: Metadata = {
  title: "Shipping Policy - Nooryak Technologies",
  description: "Learn about domestic and international shipping options, order processing times, delivery charges, and tracking protocols on Nooryak Technologies.",
};

export default function ShippingPolicy() {
  return (
    <div className="privacy-page" id="shipping-policy-root">
      {/* Banner Section */}
      <section className="privacy-banner" id="shipping-banner-sec">
        <div className="container">
          <div className="banner-inner-container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-7 col-12">
                <div className="banner-content">
                  <div className="kicker" id="kicker-shipping">
                    <span className="orange-dot">•</span>
                    <span>OUR SHIPPING</span>
                  </div>
                  <h1 className="banner-title" id="shipping-banner-title">
                    Shipping <span className="highlight">Policy</span>
                  </h1>
                  <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <Link href="/" id="breadcrumb-home-link">Home</Link>
                    <span className="separator">&gt;</span>
                    <span className="active" id="breadcrumb-current">Shipping Policy</span>
                  </nav>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="col-lg-5 col-12">
                <div className="banner-visual">
                  <div className="shield-glow"></div>
                  <Image
                    src="/assets/images/common/shipping_truck.png"
                    alt="Shipping Truck Illustration"
                    width={340}
                    height={340}
                    className="shield-img img-fluid"
                    id="shipping-banner-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="privacy-content-wrapper" id="shipping-content-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="privacy-card" id="shipping-content-card">
                {/* Last Updated Badge */}
                <div className="update-badge" id="shipping-badge-date">
                  <Calendar size={16} className="icon-orange" />
                  <span>Last Updated: <span className="date-highlight">July 28, 2026</span></span>
                </div>

                {/* Introduction Box */}
                <div className="intro-box" id="shipping-intro-box">
                  <div className="intro-icon-container">
                    <ShieldCheck size={32} className="intro-icon" />
                  </div>
                  <p className="intro-text">
                    At <strong>Nooryak Technologies</strong>, we strive to deliver your designer furniture, lighting, and home accessories safely and efficiently. This Shipping Policy details our packaging methods, freight carrier networks, dispatch times, shipping rates, and delivery rules.
                  </p>
                </div>

                {/* Sections List */}
                <div className="sections-container" id="shipping-sections-list">
                  {/* Section 01 */}
                  <div className="policy-section" id="shipping-sec-1">
                    <div className="section-header">
                      <div className="section-number">01</div>
                      <h2 className="section-title">Shipping Coverage</h2>
                    </div>
                    <p className="section-subtitle">
                      We ship our premium furniture and design pieces to multiple regions:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Domestic Shipping</strong>: Nationwide coverage across all states in India.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>International Shipping</strong>: Selected international locations including North America, Europe, and Asia.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 02 */}
                  <div className="policy-section" id="shipping-sec-2">
                    <div className="section-header">
                      <div className="section-number">02</div>
                      <h2 className="section-title">Order Processing Times</h2>
                    </div>
                    <p className="section-subtitle">
                      We ensure careful quality checks before packing:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Standard Items</strong>: Stock products (such as table lamps and chairs) are processed and dispatched within 2–5 business days.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Custom Products</strong>: Handcrafted or custom-upholstered tables and furniture pieces require 2–4 weeks for manufacturing.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 03 */}
                  <div className="policy-section" id="shipping-sec-3">
                    <div className="section-header">
                      <div className="section-number">03</div>
                      <h2 className="section-title">Rates &amp; Estimates</h2>
                    </div>
                    <p className="section-subtitle">
                      Shipping fees depend on the volume, weight, and delivery destination:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>At Checkout</strong>: Rates are calculated automatically during checkout based on your delivery address and item dimensions.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Free Shipping</strong>: Qualifying domestic promotions may apply free shipping thresholds on orders exceeding ₹50,000.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 04 */}
                  <div className="policy-section" id="shipping-sec-4">
                    <div className="section-header">
                      <div className="section-number">04</div>
                      <h2 className="section-title">Tracking Your Order</h2>
                    </div>
                    <p className="section-subtitle">
                      Keep track of your dispatch journey:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Tracking Number</strong>: As soon as your shipment is picked up by our logistics partner, you will receive an email containing a link and tracking ID.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Updates</strong>: Real-time logistics status updates are available on our order status dashboard.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 05 */}
                  <div className="policy-section" id="shipping-sec-5">
                    <div className="section-header">
                      <div className="section-number">05</div>
                      <h2 className="section-title">Customs &amp; Duties</h2>
                    </div>
                    <p className="section-subtitle">
                      For cross-border shipments, international policies apply:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Tariffs &amp; Taxes</strong>: Custom clearances, import taxes, and localized destination fees are the sole responsibility of the customer.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 06 */}
                  <div className="policy-section" id="shipping-sec-6">
                    <div className="section-header">
                      <div className="section-number">06</div>
                      <h2 className="section-title">Delivery Attempts</h2>
                    </div>
                    <p className="section-subtitle">
                      Ensure availability to accept heavy cargo:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          Our third-party carrier networks make up to three attempts before returning the cargo to our distribution hub. Additional fees may apply for re-delivery scheduling.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 07 */}
                  <div className="policy-section" id="shipping-sec-7">
                    <div className="section-header">
                      <div className="section-number">07</div>
                      <h2 className="section-title">Lost or Damaged Cargo</h2>
                    </div>
                    <p className="section-subtitle">
                      We protect your premium items in transit:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Visual Damages</strong>: Inspect packages at delivery. If damage is visible, record it on the carrier receipt and take photos immediately.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Claims Window</strong>: Report transit damages to our team within 48 hours of cargo receipt to file insurance claims.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 08 */}
                  <div className="policy-section" id="shipping-sec-8">
                    <div className="section-header">
                      <div className="section-number">08</div>
                      <h2 className="section-title">Support</h2>
                    </div>
                    <p className="section-subtitle">
                      Our dispatch desk is here to help:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Email</strong>: <a href="mailto:contact@nooryak.com" className="contact-link">contact@nooryak.com</a>
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Phone</strong>: <a href="tel:+916374913298" className="contact-link">+91 63749 13298</a>
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
