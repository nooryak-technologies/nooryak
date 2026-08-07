import React from 'react';
import { Metadata } from 'next';
import { subcategoryDataMap, SubcategoryData } from './subcategory.data';
import { subcategoryFloatingBadgesMap } from './subcategory.badges';
import SubcategoryContent from './SubcategoryContent';
import { getSubcategoryTechStack, getSubcategoryAboutImage } from './subcategory.tech';

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
  const subcategoryTitle = capitalize(normSubcat);
  const categoryTitle = capitalize(normType);
  
  let data: SubcategoryData;
  
  if (subcategoryDataMap[normSubcat]) {
    data = { ...subcategoryDataMap[normSubcat] };
  } else {
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
          ? '/assets/images/services/submenu/app_herobanner.png'
          : (normSubcat.toLowerCase() === 'software-development' || normSubcat.toLowerCase() === 'softwaredevelopment')
            ? '/assets/images/services/submenu/software_developmen.png'
            : (normType.toLowerCase() === 'ppc' || normSubcat.toLowerCase() === 'ppc')
              ? '/assets/images/services/submenu/ppc_image.png'
              : (normSubcat.toLowerCase() === 'ai-automations' || normSubcat.toLowerCase() === 'ai-automation')
                ? '/assets/images/services/submenu/ai_automation.png'
                : (normType.toLowerCase() === 'digital-marketing' || normType.toLowerCase() === 'digital_marketing')
                  ? '/assets/images/services/submenu/digital_marketing.png'
                  : (normType.toLowerCase() === 'social-media-marketing' || normType.toLowerCase() === 'social_media_marketing')
                    ? '/assets/images/services/submenu/social_mediamarketing.png'
                    : (normType.toLowerCase() === 'local-seo' || normType.toLowerCase() === 'local_seo')
                      ? '/assets/images/services/submenu/local_seo.png'
                      : (normType.toLowerCase() === 'graphic-designing' || normType.toLowerCase() === 'graphic_designing')
                        ? '/assets/images/services/submenu/graphic_designing.png'
                        : (normType.toLowerCase() === 'video-editing' || normType.toLowerCase() === 'video_editing')
                          ? '/assets/images/services/submenu/video_editing.png'
                          : '/assets/images/services/submenu/web_developer_hero.png',
        floatingBadges: [
          'android-application',
          'ios-application',
          'react-native',
          'flutter-app-development',
          'google-ads',
          'facebook-ads',
          'display-advertising',
          'remarketing-campaigns',
          'software-development',
          'ai-automations'
        ].includes(normSubcat.toLowerCase())
          ? []
          : (subcategoryFloatingBadgesMap[normSubcat] ?? []),
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

  // Override about image with dynamic/explicit image based on subcategory
  data.about = {
    ...data.about,
    image: getSubcategoryAboutImage(normSubcat),
  };

  // Override hero image if specific subcategories/categories
  const subcatLower = normSubcat.toLowerCase();
  const typeLower = normType.toLowerCase();
  if (subcatLower === 'software-development' || subcatLower === 'softwaredevelopment') {
    data.hero.image = '/assets/images/services/submenu/software_developmen.png';
  } else if (typeLower === 'ppc' || subcatLower === 'ppc') {
    data.hero.image = '/assets/images/services/submenu/ppc_image.png';
  } else if (subcatLower === 'ai-automations' || subcatLower === 'ai-automation') {
    data.hero.image = '/assets/images/services/submenu/ai_automation.png';
  } else if (typeLower === 'digital-marketing' || typeLower === 'digital_marketing') {
    data.hero.image = '/assets/images/services/submenu/digital_marketing.png';
  } else if (typeLower === 'social-media-marketing' || typeLower === 'social_media_marketing') {
    data.hero.image = '/assets/images/services/submenu/social_mediamarketing.png';
  } else if (typeLower === 'local-seo' || typeLower === 'local_seo') {
    data.hero.image = '/assets/images/services/submenu/local_seo.png';
  } else if (typeLower === 'graphic-designing' || typeLower === 'graphic_designing') {
    data.hero.image = '/assets/images/services/submenu/graphic_designing.png';
  } else if (typeLower === 'video-editing' || typeLower === 'video_editing') {
    data.hero.image = '/assets/images/services/submenu/video_editing.png';
  }

  // Override floating badges if specific subcategories
  if ([
    'android-application',
    'ios-application',
    'react-native',
    'flutter-app-development',
    'google-ads',
    'facebook-ads',
    'display-advertising',
    'remarketing-campaigns',
    'software-development',
    'ai-automations'
  ].includes(subcatLower)) {
    data.hero.floatingBadges = [];
  }

  // Dynamic override for all Web Development service subpages
  if (normType.toLowerCase() === 'web-development' || normType.toLowerCase() === 'web_development' || normType.toLowerCase() === 'web-developer') {
    data.recentWork = {
      label: 'RECENT WORK',
      title: `Our Latest ${subcategoryTitle} Projects`,
      items: [
        { title: 'Red Panda Vacations', tech: 'WordPress, PHP, MySQL', image: '/assets/images/Portfolio/projects/redpandscreenslide/slide1.png', link: '/portfolio/2' },
        { title: 'Arman Group', tech: 'HTML5, CSS3, JavaScript, PHP, MySQL', image: '/assets/images/Portfolio/projects/armangroup/slide1.png', link: '/portfolio/4' },
        { title: 'Elkins Air Conditioning', tech: 'WordPress, PHP, MySQL', image: '/assets/images/Portfolio/projects/elkins_laptopview.png', link: '/portfolio/5' },
        { title: 'KB Enterprises', tech: 'HTML5, CSS3, JavaScript, PHP, MySQL', image: '/assets/images/Portfolio/projects/enterprises_laptopview.png', link: '/portfolio/6' },
        { title: 'Radient Infotech', tech: 'HTML5, CSS3, JavaScript, PHP, MySQL', image: '/assets/images/Portfolio/projects/radientinfotech/slide1.png', link: '/portfolio/7' },
        { title: 'Shifa Infotech', tech: 'HTML5, CSS3, JavaScript, PHP, MySQL', image: '/assets/images/Portfolio/projects/shifainfotech/slide1.png', link: '/portfolio/8' }
      ]
    };
  }

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
