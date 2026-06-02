import { redirect } from 'next/navigation';
import React from 'react'
import ServicesHeroBanner from '../herobanner'
import ServicesSection from '../OurServicesSection'
import WhyChooseNooryak from '../whychoosenooryak'
import OurProcess from '../ourprocess'

// Slugs that have their own dedicated page folder — redirect to avoid this catch-all
const DEDICATED_ROUTES: Record<string, string> = {
  'ppc': '/services/submenu/ppc',
  'software-development': '/services/submenu/software-development',
  'graphic-designing': '/services/submenu/graphic-designing',
  'additional-services': '/services/submenu/graphic-designing',
  'mlm': '/services/submenu/mlm',
};

interface Props {
  params: Promise<{ type: string }>;
}

export default async function ServicesSubmenu({ params }: Props) {
  const { type } = await params;
  const slug = type ?? '';

  // Redirect to dedicated page if one exists
  if (DEDICATED_ROUTES[slug]) {
    redirect(DEDICATED_ROUTES[slug]);
  }

  return (
    <>
      <ServicesHeroBanner />
      <ServicesSection />
      <WhyChooseNooryak />
      <OurProcess />
    </>
  );
}