'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const coreServices = [
  { name: 'Web Development',       desc: 'Fast, secure, and scalable websites that deliver seamless user experiences.',          img: '/assets/images/services/icons/web_development.png',            href: '/services/submenu/web-development' },
  { name: 'App Development',       desc: 'High-performance mobile apps built for iOS, Android, and cross-platform.',             img: '/assets/images/services/icons/app_development.png',            href: '/services/submenu/app-development' },
  { name: 'Digital Marketing',     desc: 'ROI-driven marketing strategies that generate leads and drive growth.',                 img: '/assets/images/services/icons/digital_marketing.png',        href: '/services/submenu/digital-marketing' },
  { name: 'Social Media Marketing',desc: 'Engage your audience and grow your brand with smart content & campaigns.',             img: '/assets/images/services/icons/social-media-marketing.png',     href: '/services/submenu/social-media-marketing' },
  { name: 'Graphic Designing',     desc: 'Creative designs that build strong brands and leave a lasting impression.',            img: '/assets/images/services/icons/graphic_designing.png',          href: '/services/submenu/graphic-designing' },
  { name: 'Pay-Per-Click (PPC)',   desc: 'Targeted ad campaigns that maximize ROI and drive quality traffic.',                   img: '/assets/images/services/icons/pay-per-click.png',             href: '/services/submenu/ppc' },
  { name: 'Software Development',  desc: 'Custom software solutions to automate, scale, and streamline your business.',          img: '/assets/images/services/icons/web_development.png',            href: '/services/submenu/software-development' },
  { name: 'Local SEO',             desc: 'Improve local visibility and rank higher on Google in your target area.',              img: '/assets/images/services/icons/seo.png',                        href: '/services/submenu/local-seo' },
  { name: 'Video Editing',         desc: 'Engaging videos that tell your story and connect with your audience.',                 img: '/assets/images/services/icons/video_editing.png',              href: '/services/submenu/video-editing' },
  { name: 'MLM Software',          desc: 'Feature-rich and secure MLM software to manage your network and automate payouts.',    img: '/assets/images/services/icons/mlm_software_icon/auto_pool.png', href: '/services/submenu/mlm' },
  { name: 'Additional Services',   desc: 'From strategy to support, we provide end-to-end business solutions.',                 img: '/assets/images/services/icons/digital_marketing.png',         href: '/services/submenu/additional-services' },
];

const whyItems = [
  { title: 'SEO-Focused Strategy',      desc: 'We build everything with SEO best practices to improve visibility and rankings.',                          icon: 'fas fa-search' },
  { title: 'Conversion-Driven UI/UX',   desc: 'We design experiences that engage users and convert visitors into customers.',                             icon: 'far fa-file-alt' },
  { title: 'Experienced Specialists',   desc: 'Our team of experts brings skills, creativity, and years of industry experience.',                         icon: 'fas fa-users' },
  { title: 'Transparent Support',       desc: 'Clear communication, timely updates, and dedicated support at every step.',                               icon: 'fas fa-headset' },
];


export default function ServiceMain() {
  return (
    <div className="srv-page">

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="srv-hero">
        <div className="container">
          <div className="row align-items-center">

            {/* ── Left ── */}
            <div className="col-lg-6 srv-hero__left">
          

              <p className="srv-hero__tag">
                <span className="srv-hero__dot"></span>
                Our Core Services
              </p>

              <h1 className="srv-hero__title">
                Smart Digital Services<br />
                Built for <span className="srv-hero__accent">Growth.</span>
              </h1>

              <p className="srv-hero__desc">
                Explore our core digital services designed to improve visibility,
                engagement, conversions, and long-term business growth.
              </p>

              <div className="srv-hero__btns">
                <a href="#srv-services" className="srv-btn srv-btn--primary">
                  Explore Our Services&nbsp;<i className="fas fa-arrow-right"></i>
                </a>
                <Link href="/contact" className="srv-btn srv-btn--outline">
                  Let&apos;s Talk&nbsp;<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* ── Right — Visual ── */}
            <div className="col-lg-6">
              <div className="srv-hero__visual">

                {/* Glow ring */}
                <div className="srv-hero__glow"></div>

                {/* Hero Image */}
                <Image
                  src="/assets/images/services/services_headerimage.png"
                  alt="Services Hero"
                  width={600}
                  height={480}
                  className="srv-hero__img"
                  priority
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS
      ════════════════════════════════ */}
      <section className="srv-stats">
        <div className="container">
          <div className="srv-stats__row">

            <div className="srv-stats__item">
              <div className="srv-stats__icon"><i className="bi bi-rocket-takeoff"></i></div>
              <div>
                <div className="srv-stats__num">125+</div>
                <div className="srv-stats__lbl">Projects Delivered</div>
              </div>
            </div>

            <div className="srv-stats__div"></div>

            <div className="srv-stats__item">
              <div className="srv-stats__icon"><i className="bi bi-emoji-smile"></i></div>
              <div>
                <div className="srv-stats__num">98%</div>
                <div className="srv-stats__lbl">Client Satisfaction</div>
              </div>
            </div>

            <div className="srv-stats__div"></div>

            <div className="srv-stats__item">
              <div className="srv-stats__icon"><i className="bi bi-search"></i></div>
              <div>
                <div className="srv-stats__num">SEO-Driven</div>
                <div className="srv-stats__lbl">Approach</div>
              </div>
            </div>

            <div className="srv-stats__div"></div>

            <div className="srv-stats__item">
              <div className="srv-stats__icon"><i className="bi bi-layers"></i></div>
              <div>
                <div className="srv-stats__num">Scalable</div>
                <div className="srv-stats__lbl">Solutions</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CORE SERVICES
      ════════════════════════════════ */}
      <section className="srv-core" id="srv-services">
        <div className="container">

          <div className="srv-sec-head text-center">
            <span className="srv-sec-tag">— What We Do —</span>
            <h2 className="srv-sec-title">Our Core Digital Services</h2>
            <p className="srv-sec-sub">End-to-end digital solutions tailored to your business goals.</p>
          </div>

          <div className="srv-grid">
            {coreServices.map((s, i) => (
              <Link key={i} href={s.href} className="srv-card">
                <div className="srv-card__ico">
                  <Image 
                    src={s.img} 
                    alt={s.name} 
                    width={60} 
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="srv-card__name">{s.name}</h3>
                <p className="srv-card__desc">{s.desc}</p>
                <span className="srv-card__link">
                  Explore&nbsp;<i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          WHY CHOOSE
      ════════════════════════════════ */}
      <section className="srv-why">
        <div className="container">

          <div className="srv-sec-head text-center">
            <span className="srv-sec-tag">— Why Businesses Choose Nooryak —</span>
            <h2 className="srv-sec-title">Built on Strategy. Driven by Results.</h2>
          </div>

          <div className="srv-why__grid">
            {whyItems.map((w, i) => (
              <div key={i} className="srv-why__card">
                <div className="srv-why__ico"><i className={w.icon}></i></div>
                <h3 className="srv-why__title">{w.title}</h3>
                <p className="srv-why__desc">{w.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          CTA BANNER
      ════════════════════════════════ */}
      <section className="srv-cta">
        <div className="srv-cta__glow-l"></div>
        <div className="srv-cta__glow-r"></div>
        <div className="container">
          <div className="srv-cta__inner">

            <div className="srv-cta__left">
              <div className="srv-cta__rocket">
                <i className="fas fa-rocket"></i>
              </div>
              <h2 className="srv-cta__title">
                Need the Right Service for<br />
                Your Business?{' '}
                <span>Let&apos;s Build<br />Something Great.</span>
              </h2>
            </div>

            <div className="srv-cta__right">
              <p>Tell us your goals and we&apos;ll suggest the best solutions tailored to your business needs and budget.</p>
              <Link href="/contact" className="srv-cta__btn">
                Start a Project&nbsp;<i className="fas fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
