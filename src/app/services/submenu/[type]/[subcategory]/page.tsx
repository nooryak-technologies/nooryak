import React from 'react';
import { Metadata } from 'next';
import { subcategoryDataMap, SubcategoryData } from './subcategory.data';
import { subcategoryFloatingBadgesMap } from './subcategory.badges';
import SubcategoryContent from './SubcategoryContent';
import { getSubcategoryTechStack } from './subcategory.tech';

interface Props {
  params: Promise<{ type: string; subcategory: string }>;
}

function capitalize(str: string): string {
  return str
    .replace(/_/g, '-')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getOrCreateSubcategoryData(subcategory: string, type: string): SubcategoryData {
  const normSubcat = subcategory.replace(/_/g, '-');
  const normType = type.replace(/_/g, '-');
  
  let data: SubcategoryData;
  
  if (subcategoryDataMap[normSubcat]) {
    data = { ...subcategoryDataMap[normSubcat] };
  } else {
    const subcategoryTitle = capitalize(normSubcat);
    const categoryTitle = capitalize(normType);

    data = {
      meta: {
        title: `${subcategoryTitle} Services | Nooryak Technologies`,
        description: `Premium ${subcategoryTitle} services tailored to your business goals. Clean code, scalable architecture, and on-time delivery.`,
      },
      hero: {
        label: categoryTitle.toUpperCase(),
        title: {
          line1: `Professional ${subcategoryTitle} `,
          highlight: `Services That Build Your Digital Success`,
        },
        description: `We deliver high-performance, secure, and scalable ${subcategoryTitle} solutions tailored to your business goals. Our expert team delivers clean code, seamless user experience, and future-ready solutions.`,
        buttons: [
          { text: 'Start Your Project', link: '/contact', type: 'primary' },
          { text: 'Schedule a Call', link: '/contact', type: 'secondary' },
        ],
        features: [
          { icon: 'fa-solid fa-code', text: 'Modern Technologies' },
          { icon: 'fa-solid fa-laptop-code', text: 'Clean & Optimized Code' },
          { icon: 'fa-solid fa-network-wired', text: 'Scalable Solutions' },
          { icon: 'fa-solid fa-truck-delivery', text: 'On-Time Delivery' },
        ],
        image: ['android-application', 'ios-application', 'react-native', 'flutter-app-development'].includes(normSubcat.toLowerCase())
          ? '/assets/images/services/submenu/heobanner_App.png'
          : '/assets/images/services/submenu/web_developer_hero.png',
        floatingBadges: subcategoryFloatingBadgesMap[normSubcat] ?? [],
      },
      about: {
        label: `ABOUT ${subcategoryTitle.toUpperCase()}`,
        title: `Turning Ideas Into Powerful Digital Solutions`,
        description: `Our engineers craft custom ${subcategoryTitle} systems and solutions using the latest technologies, ensuring speed, security, scalability, and exceptional performance.`,
        image: {
          'android-application': '/assets/images/services/submenu/android_development.png',
          'ios-application': '/assets/images/services/submenu/ios_development.png',
          'react-native': '/assets/images/services/submenu/reactnative_development.png',
          'flutter-app-development': '/assets/images/services/submenu/flutter_development.png'
        }[normSubcat.toLowerCase()] || '/assets/images/services/softwaredevelopment.png',
        features: [
          { icon: 'fa-solid fa-shield-halved', title: 'Clean Code', description: 'Quality code that is maintainable, scalable, and standardized.' },
          { icon: 'fa-solid fa-users', title: 'User Focused', description: 'Design & develop tailored to deliver the absolute best user experience.' },
          { icon: 'fa-solid fa-lock', title: 'Secure & Reliable', description: 'Build secure systems that protect your business.' },
          { icon: 'fa-solid fa-lightbulb', title: 'Innovative', description: 'We follow modern practices to deliver future-ready apps.' },
        ],
      },
      offerings: {
        label: 'WHAT WE OFFER',
        title: `Our ${subcategoryTitle} Services`,
        items: [
          { icon: 'fa-solid fa-cubes', title: `Custom ${subcategoryTitle}`, description: `Bespoke layouts and functions tailored specifically to your needs.` },
          { icon: 'fa-solid fa-display', title: 'Frontend Integration', description: 'Build highly responsive and interactive user interfaces.' },
          { icon: 'fa-solid fa-database', title: 'Backend Architecture', description: 'Powerful, secure server-side databases, APIs, and logic.' },
          { icon: 'fa-solid fa-circle-nodes', title: 'API Integrations', description: 'Connect third party services and custom APIs seamlessly.' },
          { icon: 'fa-solid fa-gauge-high', title: 'Performance Tuning', description: 'Improve speed, performance, core web vitals, and search rankings.' },
          { icon: 'fa-solid fa-screwdriver-wrench', title: 'Maintenance & Support', description: 'Ongoing support and security updates to keep your systems running.' },
        ],
      },
      whyChoose: {
        label: 'WHY CHOOSE NOORYAK TECHNOLOGIES',
        title: `We Build Solutions That Drive Business Growth`,
        bullets: [
          '5+ Years of Industry Experience',
          '100+ Successful Projects Delivered',
          'SEO Friendly & Fast Loading Solutions',
          'Mobile First & Fully Responsive Designs',
          'Scalable & Secure Architecture',
          'Dedicated Support & Ongoing Maintenance',
        ],
        videoThumbnail: '/assets/images/services/software_development.jpg',
        stats: [
          { value: '100+', label: 'Projects Delivered' },
          { value: '50+', label: 'Happy Clients' },
          { value: '98%', label: 'Client Satisfaction' },
          { value: '24/7', label: 'Support Available' },
        ],
      },
      technologies: {
        label: 'TECHNOLOGIES WE USE',
        title: 'Powered By Modern Technical Stack',
        items: [],
      },
      process: {
        label: 'OUR WORKFLOW PROCESS',
        title: 'How We Bring Your Ideas to Life',
        steps: [
          { number: '01', title: 'Requirement Analysis', description: 'Understanding your project goals, scope, and audience.', icon: 'fa-solid fa-magnifying-glass' },
          { number: '02', title: 'Planning & Strategy', description: 'Creating sitemaps, wireframes, and technological roadmap.', icon: 'fa-solid fa-map' },
          { number: "03", title: "Design & Prototyping", description: "Designing visual layouts and interactive UI prototypes.", icon: "fa-solid fa-palette" },
          { number: '04', title: 'Development & Coding', description: 'Writing clean, standard-compliant code and integrating APIs.', icon: 'fa-solid fa-code' },
          { number: '05', title: 'Testing & Quality Check', description: 'Thorough testing of speed, responsive layouts, and security.', icon: 'fa-solid fa-vial' },
          { number: '06', title: 'Deployment & Support', description: 'Launching your systems and providing ongoing maintenance.', icon: 'fa-solid fa-rocket' },
        ],
      },
      recentWork: {
        label: 'RECENT WORK',
        title: `Our Latest ${subcategoryTitle} Projects`,
        items: [
          { title: `${subcategoryTitle} Project`, tech: 'React, Next.js, Node.js', image: '/assets/images/services/submenu/Project/Project_1.png', link: '/portfolio' },
          { title: `Enterprise Portal`, tech: 'Next.js, Python, PostgreSQL', image: '/assets/images/services/submenu/Project/Project_2.png', link: '/portfolio' },
          { title: `Digital Platform`, tech: 'React, Node.js, MySQL', image: '/assets/images/services/submenu/Project/Project_3.png', link: '/portfolio' },
          { title: `Business App`, tech: 'Next.js, TypeScript, MongoDB', image: '/assets/images/services/submenu/Project/Project_4.png', link: '/portfolio' },
          { title: `Web Solution`, tech: 'PHP, Laravel, MySQL', image: '/assets/images/services/submenu/Project/Project_5.png', link: '/portfolio' },
        ],
      },
      reviews: [
        { rating: 5, quote: `Nooryak Technologies delivered excellent ${subcategoryTitle} work that exceeded our expectations. Their communication, dedication, and technical skills are outstanding.`, author: 'Rohan Mehta', role: 'CEO, TechVision', logoText: 'TechVision' },
      ],
      faqs: [
        { question: `How long does it take to deploy a ${subcategoryTitle} project?`, answer: 'The timeline depends on complexity. Simple setups take 2-3 weeks, while complex enterprise solutions can take 6-12 weeks.' },
        { question: 'Will the final solution be fully responsive?', answer: 'Yes, every system we design and build is fully responsive, looking and performing great across desktops, tablets, and mobile phones.' },
        { question: 'Do you provide maintenance after launch?', answer: 'Yes, we offer monthly maintenance packages covering security updates, daily backups, speed monitoring, and content updates.' },
      ],
      cta: {
        title: `Ready to Build Your Dream ${subcategoryTitle}?`,
        description: `Let our expert team turn your ideas into powerful digital experiences.`,
        btnText: 'Start Your Project',
        btnLink: '/contact',
      },
    };
  }

  // Override technologies with custom tech stack based on subcategory
  data.technologies = {
    label: 'TECHNOLOGIES WE USE',
    title: 'Powered By Modern Technical Stack',
    items: getSubcategoryTechStack(normSubcat),
  };

  return data;
}

// Generate Dynamic SEO Metadata on the Server
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, subcategory } = await params;
  const normSubcat = subcategory.replace(/_/g, '-');
  const normType = type.replace(/_/g, '-');
  const data = getOrCreateSubcategoryData(normSubcat, normType);
  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

// Dynamic Server Page Component
export default async function SubcategoryPage({ params }: Props) {
  const { type, subcategory } = await params;
  const normSubcat = subcategory.replace(/_/g, '-');
  const normType = type.replace(/_/g, '-');
  const data = getOrCreateSubcategoryData(normSubcat, normType);

  return (
    <SubcategoryContent data={data} type={normType} subcategory={normSubcat} />
  );
}
