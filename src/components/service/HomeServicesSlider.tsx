"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// All 11 Services — single infinite marquee row
const allServices = [
  { name: 'Web Development',        img: '/assets/images/services/icons/web_development.png',              href: '/services/submenu/web-development' },
  { name: 'App Development',        img: '/assets/images/services/icons/app_development.png',              href: '/services/submenu/app-development' },
  { name: 'Digital Marketing',      img: '/assets/images/services/icons/digital_marketing.png',            href: '/services/submenu/digital-marketing' },
  { name: 'Social Media Marketing', img: '/assets/images/services/icons/social-media-marketing.png',       href: '/services/submenu/social-media-marketing' },
  { name: 'Graphic Designing',      img: '/assets/images/services/icons/graphic_designing.png',            href: '/services/submenu/graphic-designing' },
  { name: 'MLM Software',           img: '/assets/images/services/icons/mlm_software_icon/auto_pool.png',  href: '/services/submenu/mlm' },
  { name: 'Pay-Per-Click (PPC)',    img: '/assets/images/services/icons/pay-per-click.png',               href: '/services/submenu/ppc' },
  { name: 'Software Development',   img: '/assets/images/services/icons/web_development.png',              href: '/services/submenu/software-development' },
  { name: 'Local SEO',              img: '/assets/images/services/icons/seo.png',                          href: '/services/submenu/local-seo' },
  { name: 'Video Editing',          img: '/assets/images/services/icons/video_editing.png',                href: '/services/submenu/video-editing' },
  { name: 'Additional Services',    img: '/assets/images/services/icons/digital_marketing.png',            href: '/services/submenu/additional-services' },
];

// Glassmorphism capsule card
function CapsuleCard({ name, img, href }: { name: string; img: string; href: string }) {
  return (
    <Link href={href} className="tp-service-capsule" aria-label={`Go to ${name}`}>
      {/* Glassmorphism circle icon */}
      <div className="tp-service-capsule__circle">
        <Image
          src={img}
          alt={name}
          width={26}
          height={26}
          style={{ objectFit: 'contain' }}
          className="tp-service-capsule__img"
        />
      </div>
      <span className="tp-service-capsule__text">{name}</span>
      {/* Arrow indicator */}
      <span className="tp-service-capsule__arrow">›</span>
    </Link>
  );
}

// Single infinite marquee row
function MarqueeRow({ services, reverse = false }: { services: typeof allServices; reverse?: boolean }) {
  return (
    <div className={`tp-marquee-row ${reverse ? 'tp-marquee-row--reverse' : ''}`}>
      {/* Track: 3 copies for seamless infinite loop */}
      <div className="tp-marquee-track">
        {[...services, ...services, ...services].map((svc, idx) => (
          <div key={idx} className="tp-marquee-item">
            <CapsuleCard {...svc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeServicesSlider() {
  const firstRow = allServices.slice(0, 6);
  const secondRow = allServices.slice(6);

  return (
    <section className="tp-home-services-slider" aria-label="Our services">
      {/* Decorative gradient label */}
      <div className="tp-slider-header">
        <span className="tp-slider-header__line" />
        <p className="tp-slider-header__label">OUR SERVICES</p>
        <span className="tp-slider-header__line" />
      </div>

      {/* Row 1 — first 6 services scrolling left */}
      <MarqueeRow services={firstRow} />

      {/* Row 2 — remaining 5 services scrolling right */}
      <MarqueeRow services={secondRow} reverse={true} />
    </section>
  );
}
