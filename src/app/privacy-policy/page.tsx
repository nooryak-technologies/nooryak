import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";
import "./privacy-policy.scss";

export const metadata: Metadata = {
  title: "Privacy Policy - Nooryak Technologies",
  description: "Learn how Nooryak Technologies collects, uses, protects, and handles your personal information when you use our website and digital solutions.",
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page" id="privacy-policy-root">
      {/* Banner Section */}
      <section className="privacy-banner" id="privacy-banner-sec">
        <div className="container">
          <div className="banner-inner-container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-7 col-12">
                <div className="banner-content">
                  <div className="kicker" id="kicker-policy">
                    <span className="orange-dot">•</span>
                    <span>OUR POLICY</span>
                  </div>
                  <h1 className="banner-title" id="main-banner-title">
                    Privacy <span className="highlight">Policy</span>
                  </h1>
                  <nav className="breadcrumb-nav" aria-label="breadcrumb">
                    <Link href="/" id="breadcrumb-home-link">Home</Link>
                    <span className="separator">&gt;</span>
                    <span className="active" id="breadcrumb-current">Privacy Policy</span>
                  </nav>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="col-lg-5 col-12">
                <div className="banner-visual">
                  <div className="shield-glow"></div>
                  <Image
                    src="/assets/images/common/privacy_shield.png"
                    alt="Privacy Shield Lock Illustration"
                    width={340}
                    height={340}
                    className="shield-img img-fluid"
                    id="shield-banner-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="privacy-content-wrapper" id="privacy-content-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="privacy-card" id="privacy-content-card">
                {/* Last Updated Badge */}
                <div className="update-badge" id="update-badge-date">
                  <Calendar size={16} className="icon-orange" />
                  <span>Last Updated: <span className="date-highlight">July 28, 2026</span></span>
                </div>

                {/* Introduction Box */}
                <div className="intro-box" id="intro-alert-box">
                  <div className="intro-icon-container">
                    <ShieldCheck size={32} className="intro-icon" />
                  </div>
                  <p className="intro-text">
                    At <strong>Nooryak Technologies</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we value
                    your privacy and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website or use our
                    services, including website development, web design, digital marketing,
                    SEO, software development, mobile application development, branding,
                    hosting, maintenance, and other digital solutions. By using our website or services, you agree to the practices described
                    in this Privacy Policy.
                  </p>
                </div>

                {/* Sections List */}
                <div className="sections-container" id="sections-container-list">
                  {/* Section 01 */}
                  <div className="policy-section" id="policy-sec-1">
                    <div className="section-header">
                      <div className="section-number">01</div>
                      <h2 className="section-title">Information We Collect</h2>
                    </div>
                    <p className="section-subtitle">
                      We may collect personal and technical information, including:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Personal Information</strong>: Full Name, Email Address, Phone Number, Company Name, Business Address, Billing Information, Project Requirements, and any other info you voluntarily provide.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Technical Information</strong>: IP Address, Browser Type, Device Information, Operating System, Pages Visited, Date &amp; Time of Visit, Referral URLs, and Cookies.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 02 */}
                  <div className="policy-section" id="policy-sec-2">
                    <div className="section-header">
                      <div className="section-number">02</div>
                      <h2 className="section-title">How We Use Your Information</h2>
                    </div>
                    <p className="section-subtitle">
                      We use the collected data for various purposes, including to:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Provide Services</strong>: Deliver website development, branding, and other digital solutions.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Communication</strong>: Respond to inquiries, support requests, and prepare proposals.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Transactions</strong>: Process invoices, payments, and billing details.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Improvement</strong>: Enhance, optimize, and improve our website and services.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Security &amp; Legal</strong>: Detect fraud, maintain security, and comply with legal obligations.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 03 */}
                  <div className="policy-section" id="policy-sec-3">
                    <div className="section-header">
                      <div className="section-number">03</div>
                      <h2 className="section-title">Cookies</h2>
                    </div>
                    <p className="section-subtitle">
                      Our website may use cookies and similar tracking technologies to improve performance:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Functionality</strong>: Improve website navigation and load performance.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Analytics</strong>: Analyze traffic behavior and source referrals.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Preferences</strong>: Remember preferences and settings for returning visitors. You may disable cookies through your browser settings, although some website features may not function properly.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 04 */}
                  <div className="policy-section" id="policy-sec-4">
                    <div className="section-header">
                      <div className="section-number">04</div>
                      <h2 className="section-title">Information Sharing</h2>
                    </div>
                    <p className="section-subtitle">
                      We value your trust and do not sell your personal data. We only share it with:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Service Providers</strong>: Payment processors, cloud hosting, and email providers.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Partners</strong>: Business partners involved directly in delivering your project.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Legal Compliance</strong>: Government authorities when legally required to protect rights.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 05 */}
                  <div className="policy-section" id="policy-sec-5">
                    <div className="section-header">
                      <div className="section-number">05</div>
                      <h2 className="section-title">Data Security</h2>
                    </div>
                    <p className="section-subtitle">
                      We prioritize protecting your personal data using:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Security Measures</strong>: Reasonable administrative, technical, and organizational protections against unauthorized access or disclosure.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Absolute Guarantee</strong>: However, no method of electronic transmission is completely secure, and we cannot guarantee absolute security.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 06 */}
                  <div className="policy-section" id="policy-sec-6">
                    <div className="section-header">
                      <div className="section-number">06</div>
                      <h2 className="section-title">Data Retention</h2>
                    </div>
                    <p className="section-subtitle">
                      We retain personal information only as long as necessary to:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Deliver Services</strong>: Satisfy project delivery, support, and contractual obligations.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Disposal</strong>: Meet tax, accounting, or legal requirements. When no longer required, we securely delete or anonymize it.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 07 */}
                  <div className="policy-section" id="policy-sec-7">
                    <div className="section-header">
                      <div className="section-number">07</div>
                      <h2 className="section-title">Third-Party Services</h2>
                    </div>
                    <p className="section-subtitle">
                      Our website integrates or links to external services such as:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Integrations</strong>: Google Analytics, Google Maps, payment gateways, and social media platforms.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>External Privacy</strong>: We are not responsible for the privacy practices of third-party websites or services.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 08 */}
                  <div className="policy-section" id="policy-sec-8">
                    <div className="section-header">
                      <div className="section-number">08</div>
                      <h2 className="section-title">Your Rights</h2>
                    </div>
                    <p className="section-subtitle">
                      Depending on your location, you may have the following rights:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Access &amp; Correction</strong>: Request access to or correction of your personal data.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Deletion &amp; Portability</strong>: Request erasure of your data or request a portable copy of your information.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Consent Withdrawal</strong>: Withdraw consent or object to specific processing activities. Contact us below to exercise these rights.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 09 */}
                  <div className="policy-section" id="policy-sec-9">
                    <div className="section-header">
                      <div className="section-number">09</div>
                      <h2 className="section-title">Children's Privacy</h2>
                    </div>
                    <p className="section-subtitle">
                      Our services are designed for businesses and professionals:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Age Restriction</strong>: Intended strictly for individuals aged 18 years or older.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>No Child Data</strong>: We do not knowingly collect personal data from children.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 10 */}
                  <div className="policy-section" id="policy-sec-10">
                    <div className="section-header">
                      <div className="section-number">10</div>
                      <h2 className="section-title">International Data Transfers</h2>
                    </div>
                    <p className="section-subtitle">
                      For users outside India, please note:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Data Processing</strong>: Your data may be processed in countries other than your residence, where data protection laws may differ.
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Protection</strong>: We take all reasonable measures to ensure your data receives an appropriate level of protection in accordance with applicable laws.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 11 */}
                  <div className="policy-section" id="policy-sec-11">
                    <div className="section-header">
                      <div className="section-number">11</div>
                      <h2 className="section-title">Changes to This Privacy Policy</h2>
                    </div>
                    <p className="section-subtitle">
                      We keep our privacy policy updated:
                    </p>
                    <ul className="bullets-list">
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Policy Updates</strong>: We may update this policy periodically, and changes will be posted here along with the revised date.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 12 */}
                  <div className="policy-section" id="policy-sec-12">
                    <div className="section-header">
                      <div className="section-number">12</div>
                      <h2 className="section-title">Contact Us</h2>
                    </div>
                    <p className="section-subtitle">
                      If you have any questions or concerns about this policy, contact us at:
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
                          <strong>Website</strong>: <a href="https://www.nooryak.com" target="_blank" rel="noopener noreferrer" className="contact-link">https://www.nooryak.com</a>
                        </span>
                      </li>
                      <li className="bullet-item">
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>
                          <strong>Phone</strong>: <a href="tel:+916374913298" className="contact-link">+91 63749 13298</a>
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
