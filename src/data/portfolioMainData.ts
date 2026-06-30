export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  bgClass: string;
  image: string;
  client: string;
  date: string;
  services: string;
  projectUrl: string;
  gallery?: string[];
  videos?: {
    src: string;
    type: 'reel' | 'video';
    title: string;
  }[];
  // Rich details fields
  subtitle?: string;
  detailHeroImage?: string;
  scrollImage?: string;
  technologies?: { name: string; iconType: string }[];
  overview?: string;
  features?: string[];
  metaGrid?: { label: string; value: string; iconType: string }[];
  screenshots?: string[];
  results?: { value: string; label: string; iconType: string }[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Social Media Campaign for E-Commerce Brand',
    category: 'Digital Marketing',
    description: 'Increased engagement by 320% and boosted sales through targeted ad campaigns.',
    link: '/portfolio/1',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/portfolio_social_media.png',
    client: 'E-Shop International',
    date: 'Mar 2026',
    services: 'Social Media Marketing, Paid Ads',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_social_media.png']
  },
  {
    id: 2,
    title: 'Travel & Tourism Website',
    category: 'Web Development',
    description: 'Modern, responsive website with booking system and CMS for easy content management.',
    link: '/portfolio/2',
    bgClass: 'bg-nature',
    image: '/assets/images/Portfolio/portfolio_travel_website.png',
    client: 'TravelGo Holidays',
    date: 'Feb 2026',
    services: 'Web Design, Next.js Development, CMS Integration',
    projectUrl: 'https://nooryak.com',
    gallery: [
      '/assets/images/Portfolio/travel_screenshot_1.png',
      '/assets/images/Portfolio/travel_screenshot_2.png',
      '/assets/images/Portfolio/travel_screenshot_3.png',
      '/assets/images/Portfolio/travel_screenshot_4.png'
    ],
    // Rich details populated for pixel-perfect match
    subtitle: 'Travel & Tourism Website Development',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.png',
    scrollImage: '/assets/images/Portfolio/projects/redpanda.png',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' }
    ],
    overview: 'This travel and tourism website is developed to provide users with a seamless experience in discovering destinations, exploring tour packages, and making online bookings. The website is fully responsive, fast, SEO friendly and easy to manage.',
    features: [
      'Custom tour package management',
      'Blog & travel guides section',
      'Advanced search & filter system',
      'Fully responsive for all devices',
      'Online booking & inquiry system',
      'SEO optimized & fast loading'
    ],
    metaGrid: [
      { label: 'Client', value: 'TravelGo Holidays', iconType: 'user' },
      { label: 'Industry', value: 'Travel & Tourism', iconType: 'globe' },
      { label: 'Project Type', value: 'Custom Website', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'May 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/travel_screenshot_1.png',
      '/assets/images/Portfolio/travel_screenshot_2.png',
      '/assets/images/Portfolio/travel_screenshot_3.png',
      '/assets/images/Portfolio/travel_screenshot_4.png'
    ],
    results: [
      { value: '150%', label: 'Increase in Website Traffic', iconType: 'trending-up' },
      { value: '80%', label: 'Growth in Online Bookings', iconType: 'shopping-cart' },
      { value: '60%', label: 'Higher User Engagement', iconType: 'users' },
      { value: '95%', label: 'Client Satisfaction', iconType: 'smile' }
    ]
  },
  {
    id: 3,
    title: 'Food Delivery Mobile App',
    category: 'App Development',
    description: 'Feature-rich food delivery app with real-time tracking, payments, and user dashboard.',
    link: '/portfolio/3',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/portfolio_food_app.png',
    client: 'QuickBite Inc.',
    date: 'Jan 2026',
    services: 'Mobile App Design, iOS & Android Development',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_food_app.png']
  },
  {
    id: 4,
    title: 'Fitness & Gym Website',
    category: 'Web Development',
    description: 'High-performance website with membership, schedules, and trainer management.',
    link: '/portfolio/4',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/portfolio_fitness_gym.png',
    client: 'IronGym Fitness',
    date: 'Dec 2025',
    services: 'Web Development, UX/UI Design',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_fitness_gym.png']
  },
  {
    id: 5,
    title: 'Brand Identity for Startup',
    category: 'Branding & Design',
    description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
    link: '/portfolio/5',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/portfolio_brand_identity.png',
    client: 'Nexora Tech',
    date: 'Nov 2025',
    services: 'Brand Identity, Logo Design, Stationery Mockups',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_brand_identity.png']
  },
  {
    id: 6,
    title: 'Lead Generation Campaign',
    category: 'Digital Marketing',
    description: 'Generated high-quality leads and improved conversion rate for a real estate client.',
    link: '/portfolio/6',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/portfolio_lead_gen.png',
    client: 'Prime Realty',
    date: 'Oct 2025',
    services: 'Google Ads, Search Engine Marketing, Lead Nurturing',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_lead_gen.png']
  },
  {
    id: 7,
    title: 'Finance Management App',
    category: 'App Development',
    description: 'Smart finance app for tracking income, expenses, and generating detailed reports.',
    link: '/portfolio/7',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/portfolio_finance_app.png',
    client: 'Finace Group',
    date: 'Sep 2025',
    services: 'Fintech App, UI/UX Design, React Native',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_finance_app.png']
  },
  {
    id: 8,
    title: 'E-Commerce Website',
    category: 'Web Development',
    description: 'Full-featured e-commerce platform with secure payments and inventory management.',
    link: '/portfolio/8',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/portfolio_ecommerce.png',
    client: 'Furni Decor',
    date: 'Aug 2025',
    services: 'E-commerce, Shopify, Frontend Development',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_ecommerce.png']
  },
  {
    id: 9,
    title: 'Logo & Brand Design',
    category: 'Branding & Design',
    description: 'Professional logo and brand design that creates a strong and memorable identity.',
    link: '/portfolio/9',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/portfolio_logo_design.png',
    client: 'Nexora Tech',
    date: 'Jul 2025',
    services: 'Logo Design, Vector Illustration, Brand Guidelines',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_logo_design.png']
  }
];
