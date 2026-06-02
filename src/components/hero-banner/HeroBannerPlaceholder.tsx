import React from 'react';

type HeroBannerPlaceholderProps = {
  title: string;
  description?: string;
};

export default function HeroBannerPlaceholder({ title, description }: HeroBannerPlaceholderProps) {
  return (
    <section className="py-5 px-3 px-md-5" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: '#fff' }}>
      <div className="container py-5">
        <p className="text-uppercase mb-3" style={{ letterSpacing: '0.2em', opacity: 0.7 }}>Nooryak</p>
        <h1 className="display-5 fw-bold mb-3">{title}</h1>
        <p className="lead mb-0" style={{ maxWidth: 720, opacity: 0.9 }}>
          {description || 'Production deployment fallback hero. Replace with the page-specific hero when available.'}
        </p>
      </div>
    </section>
  );
}