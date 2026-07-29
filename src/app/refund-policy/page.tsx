import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import "../privacy-policy/privacy-policy.scss";

export const metadata: Metadata = {
  title: "Refund Policy - Nooryak Technologies",
  description: "Review our 30-day refund, return, and exchange terms for premium interior furniture and decor products on Nooryak Technologies.",
};

export default function RefundPolicy() {
  return (
    <div className="privacy-page" id="refund-policy-root">
      {/* Banner Section */}
      <section className="privacy-banner" id="refund-banner-sec">
        <div className="container">
          <div className="banner-inner-container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-7 col-12">
                <div className="banner-content">
                  <div className="kicker" id="kicker-refund">
                    <span className="orange-dot">•</span>
                    <span>OUR RETURNS</span>
                  </div>
                  <h1 className="banner-title" id="refund-banner-title">
                    Refund <span className="highlight">Policy</span>
                  </h1>
                  <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <Link href="/" id="breadcrumb-home-link">Home</Link>
                    <span className="separator">&gt;</span>
                    <span className="active" id="breadcrumb-current">Refund Policy</span>
                  </nav>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="col-lg-5 col-12">
                <div className="banner-visual">
                  <div className="shield-glow"></div>
                  <Image
                    src="/assets/images/common/refund_cashback.png"
                    alt="Refund Cashback Illustration"
                    width={340}
                    height={340}
                    className="shield-img img-fluid"
                    id="refund-banner-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="privacy-content-wrapper" id="refund-content-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="privacy-card" id="refund-content-card">
                {/* Last Updated Badge */}
                <div className="update-badge" id="refund-badge-date">
                  <Calendar size={16} className="icon-orange" />
                  <span>Last Updated: <span className="date-highlight">July 28, 2026</span></span>
                </div>

                {/* Introduction Box */}
                <div className="intro-box" id="refund-intro-box">
                  <div className="intro-icon-container">
                    <ShieldCheck size={32} className="intro-icon" />
                  </div>
                  <p className="intro-text">
                    Your satisfaction is our primary goal at <strong>Nooryak Technologies</strong>. If you are not completely satisfied with your premium furniture purchase, we are here to support you. This Refund &amp; Return Policy outlines eligibility conditions, return windows, and processing timelines for a smooth refund experience.
                  </p>
                </div>

                {/* Sections List */}
                <div className="sections-container" id="refund-sections-list">
                  {/* Section 01 */}
                  <div className="policy-section" id="refund-sec-1">
                    <div className="section-header">
                      <div className="section-number">01</div>
                      <h2 className="section-title">Return Window</h2>
                    </div>
                    <p className="section-subtitle">
                      We offer a customer-friendly return timeline:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>30-Day Policy</strong>: You have 30 calendar days from the date of product receipt to request a return.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 02 */}
                  <div className="policy-section" id="refund-sec-2">
                    <div className="section-header">
                      <div className="section-number">02</div>
                      <h2 className="section-title">Return Eligibility</h2>
                    </div>
                    <p className="section-subtitle">
                      To qualify for a refund, returned items must satisfy:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Condition</strong>: The item must be unused, un-assembled, in clean condition, and free of scratches, markings, or wear.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Packaging</strong>: The item must be in its original packaging, including all accessories, hardware, assembly instructions, and warranty tags.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 03 */}
                  <div className="policy-section" id="refund-sec-3">
                    <div className="section-header">
                      <div className="section-number">03</div>
                      <h2 className="section-title">Non-Returnable Products</h2>
                    </div>
                    <p className="section-subtitle">
                      Certain product classifications are final sale:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Custom &amp; Bespoke Items</strong>: Custom-designed, custom-sized, or customized fabric furniture orders cannot be returned or refunded.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Sale &amp; Gift Items</strong>: Items purchased on discount clearance sales or promotional codes, and gift cards, are non-returnable.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 04 */}
                  <div className="policy-section" id="refund-sec-4">
                    <div className="section-header">
                      <div className="section-number">04</div>
                      <h2 className="section-title">How to Initiate a Return</h2>
                    </div>
                    <p className="section-subtitle">
                      Follow these simple steps:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Contact Support</strong>: Send an email to <a href="mailto:contact@nooryak.com" className="contact-link">contact@nooryak.com</a> with your order number and invoice copy.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Return Authorization</strong>: Upon approval, we will supply a Return Merchandise Authorization (RMA) ticket along with freight shipping instructions.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 05 */}
                  <div className="policy-section" id="refund-sec-5">
                    <div className="section-header">
                      <div className="section-number">05</div>
                      <h2 className="section-title">Refund Processing</h2>
                    </div>
                    <p className="section-subtitle">
                      Once we receive and inspect your returned merchandise:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Inspection</strong>: We will check the condition of the furniture inside our warehouse.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Approval</strong>: Approved returns will be refunded to your original payment card within 5–7 business days. A restocking fee may apply for bulky furniture.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 06 */}
                  <div className="policy-section" id="refund-sec-6">
                    <div className="section-header">
                      <div className="section-number">06</div>
                      <h2 className="section-title">Return Shipping Costs</h2>
                    </div>
                    <p className="section-subtitle">
                      Return postage depends on the return reason:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Customer Responsibility</strong>: Shipping costs for change-of-mind returns are paid by the customer. Original delivery fees are non-refundable.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Defective Shipments</strong>: If the product is wrong or damaged on arrival, Nooryak Technologies pays all collection and dispatch fees.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 07 */}
                  <div className="policy-section" id="refund-sec-7">
                    <div className="section-header">
                      <div className="section-number">07</div>
                      <h2 className="section-title">Damaged or Defective Items</h2>
                    </div>
                    <p className="section-subtitle">
                      Immediate resolution for shipping defects:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          If an item arrives damaged, report it to our email with photos of the package and item details within 48 hours of cargo receipt. We will dispatch a free replacement or issue a full refund immediately.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 08 */}
                  <div className="policy-section" id="refund-sec-8">
                    <div className="section-header">
                      <div className="section-number">08</div>
                      <h2 className="section-title">Contact Us</h2>
                    </div>
                    <p className="section-subtitle">
                      If you have questions about returns, contact us:
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
