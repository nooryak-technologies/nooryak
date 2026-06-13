'use client'
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { servicesDataWeb, sectionMetaWeb } from "./herobanner/webdevelopment";
import { servicesDataApp, sectionMetaApp } from "./herobanner/appdevelopment";

// ── ServiceCard ────────────────────────────────────────────────────────────
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ image, title, description, link }: ServiceCardProps) => (
  <Link href={link} className="service-card">
    <div className="service-card__inner">
      <div className="service-card__icon-wrap">
        <img src={image} alt={title} />
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      <span className="service-card__link">
        Learn More
      </span>
    </div>
  </Link>
);

// ── ServicesSection (page) ─────────────────────────────────────────────────
export default function ServicesSection() {
  const { type } = useParams() as { type: string };
  const key = { 'web-development': 'web', 'app-development': 'app' }[type] || 'web';
  const servicesData = key === 'web' ? servicesDataWeb : servicesDataApp;
  const sectionMeta = key === 'web' ? sectionMetaWeb : sectionMetaApp;

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-section__header">
          <p className="services-section__label">
            <span className="services-section__label-line" />
            {sectionMeta.label}
            <span className="services-section__label-line" />
          </p>
          <h2 className="services-section__heading">{sectionMeta.heading}</h2>
          <p className="services-section__subheading">{sectionMeta.subheading}</p>
        </div>

        <div className="services-section__grid">
          {servicesData.map((s: any) => (
            <ServiceCard
              key={s.id}
              image={s.images}
              title={s.title}
              description={s.description}
              link={s.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


