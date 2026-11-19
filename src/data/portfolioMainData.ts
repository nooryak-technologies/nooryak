export interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel?: string;
  cardLaptopThumb?: string;
  cardMobileThumb?: string;
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
  mobileScrollImage?: string;
  technologies?: { name: string; iconType: string }[];
  overview?: string;
  features?: string[];
  metaGrid?: { label: string; value: string; iconType: string }[];
  screenshots?: string[];
  results?: { value: string; label: string; iconType: string }[];
  badge?: string;
  tabletScrollImage?: string;
}

export const projectsData: Project[] = [
  {
    id: 2,
    title: 'Red Panda Vacations ',
    category: 'eCommerce',
    categoryLabel: 'Tourists Book',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-2-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-2-mobile.webp',
    description: 'Red Panda Vacations is the travel and tourism website',
    link: '/portfolio/2',
    bgClass: 'bg-nature',
    image: '/assets/images/Portfolio/projects/redpandscreenslide/slide1.webp',
    client: 'Red Panda Vacations',
    date: 'Feb 2026',
    services: 'Web Design, Next.js Development, CMS Integration',
    projectUrl: 'https://redpandavacations.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/redpandscreenslide/slide1.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide2.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide3.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide4.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide5.webp'
    ],
    subtitle: 'Red Panda Vacations',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/redpanda.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/redpanda_mobil.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' }
    ],
    overview: 'Red Panda Vacations is the travel and tourism website',
    features: [
      'Custom destination sliders',
      'Interactive tour scheduler',
      'Direct WhatsApp chat booking',
      'Hardened security protection',
      'Optimized speed score'
    ],
    metaGrid: [
      { label: 'Client', value: 'Red Panda Vacations', iconType: 'user' },
      { label: 'Industry', value: 'Travel & Tourism', iconType: 'globe' },
      { label: 'Project Type', value: 'Travel & Tourism Website', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'May 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/redpandscreenslide/slide1.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide2.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide3.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide4.webp',
      '/assets/images/Portfolio/projects/redpandscreenslide/slide5.webp'
    ],
    results: [
      { value: '150%', label: 'Increase in Website Traffic', iconType: 'trending-up' },
      { value: '80%', label: 'Growth in Online Bookings', iconType: 'shopping-cart' },
      { value: '60%', label: 'Higher User Engagement', iconType: 'users' },
      { value: '95%', label: 'Client Satisfaction', iconType: 'smile' }
    ]
  },
  {
    id: 6,
    title: 'KP Enterprises ..',
    category: 'eCommerce',
    categoryLabel: 'Machine Booking',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-6-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-6-mobile.webp',
    description: 'KP Enterprises is a Ecommerce Platform To Selling Commercial Machine ',
    link: '/portfolio/6',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/enterprises_laptopview.webp',
    client: 'KP Enterprises Ltd',
    date: 'Oct 2025',
    services: 'Web Development, Database Management',
    projectUrl: 'https://enterpriseskp.in/',
    gallery: [
      '/assets/images/Portfolio/projects/enterprises_laptopview.webp',
      '/assets/images/Portfolio/projects/enterprises_tabletview.webp',
      '/assets/images/Portfolio/projects/enterprises_mobileview.webp'
    ],
    subtitle: 'KP Enterprises Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/enterprises_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/enterprises_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/enterprises_tabletview.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'KB Enterprises trading enables smooth B2B operations, wholesale catalog display, vendor registrations, and encrypted document sharing.',
    features: [
      'Wholesale product catalog',
      'Vendor document upload nodes',
      'Secure database structure',
      'SEO friendly heading tags',
      'Responsive table grids'
    ],
    metaGrid: [
      { label: 'Client', value: 'KB Enterprises', iconType: 'user' },
      { label: 'Industry', value: 'Trading & Logistics', iconType: 'globe' },
      { label: 'Project Type', value: 'B2B Enterprise ', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Sep 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/enterprises_laptopview.webp',
      '/assets/images/Portfolio/projects/enterprises_tabletview.webp',
      '/assets/images/Portfolio/projects/enterprises_mobileview.webp'
    ],
    results: [
      { value: '140%', label: 'Partner Onboardings', iconType: 'trending-up' },
      { value: '50%', label: 'Admin Overhead Savings', iconType: 'shopping-cart' },
      { value: '95%', label: 'Vendor Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Database Reliability', iconType: 'check-circle' }
    ]
  },
  {
    id: 14,
    title: 'Arrow Computers...',
    category: 'eCommerce',
    categoryLabel: 'Laptop Booking',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-14-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-14-mobile.webp',
    description: 'Modern computer sales, hardware repair, and IT solutions  designed for seamless service bookings.',
    link: '/portfolio/14',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/projects/arrowcomputerz_laptopview.webp',
    client: 'Arrow Computerz Ecommerce',
    date: 'Jan 2026',
    services: 'Web Development, Service Portal, UI/UX Design',
    projectUrl: 'https://arrowcomputerz.com/',
    gallery: [
      '/assets/images/Portfolio/projects/arrowcomputerz_laptopview.webp',
      '/assets/images/Portfolio/projects/arrowcomputerz_tabletview.webp',
      '/assets/images/Portfolio/projects/arrowcomputerz_mobileview.webp'
    ],
    subtitle: 'Arrow Computerz Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/arrowcomputerz_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/arrowcomputerz_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/arrowcomputerz_tabletview.webp',
    technologies: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Arrow Computerz website showcases custom computer hardware products, laptop repair booking tools, and IT consultancy services with a clean and interactive interface.',
    features: [
      'Online repair appointment booking',
      'Hardware product showcase',
      'Service price estimator',
      'Interactive customer support',
      'Mobile responsive layout'
    ],
    metaGrid: [
      { label: 'Client', value: 'Arrow Computerz', iconType: 'user' },
      { label: 'Industry', value: 'IT & Computer Services', iconType: 'globe' },
      { label: 'Project Type', value: 'Service & Store Portal', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Dec 2025', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/arrowcomputerz_laptopview.webp',
      '/assets/images/Portfolio/projects/arrowcomputerz_tabletview.webp',
      '/assets/images/Portfolio/projects/arrowcomputerz_mobileview.webp'
    ],
    results: [
      { value: '160%', label: 'Increase in Online Enquiries', iconType: 'trending-up' },
      { value: '75%', label: 'Growth in Service Appointments', iconType: 'shopping-cart' },
      { value: '4.9★', label: 'Customer Rating', iconType: 'smile' },
      { value: '99.9%', label: 'Uptime & Performance', iconType: 'check-circle' }
    ]
  },
  {
    id: 16,
    title: 'Fun Kiddoz Ecom..',
    category: 'eCommerce',
    categoryLabel: 'Toys Shopping',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-16-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-16-mobile.webp',
    description: 'User-friendly website for kids entertainment toys and toys selling webite',
    link: '/portfolio/16',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/funkiddoz_laptopvie.webp',
    client: 'Fun Kiddoz Toy selling  ecommerce ',
    date: 'Jan 2026',
    services: 'Web Design, Interactive Animations, Toy selling ecommerce website',
    projectUrl: 'https://funkiddoz.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/funkiddoz_laptopvie.webp',
      '/assets/images/Portfolio/projects/funkiddoz_tablet.webp',
      '/assets/images/Portfolio/projects/funkiddoz_mobile.webp'
    ],
    subtitle: 'Fun Kiddoz Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/funkiddoz_laptopvie.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/funkiddoz_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/funkiddoz_tablet.webp',
    technologies: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Fun Kiddoz website is crafted with bright, engaging visual components to showcase toys, ',
    features: [
      'Toy selling website',
      'Interactive toy store',
      'Toy &  pricing cards',
      'Parent testimonials & reviews',
      'Mobile-first responsive design'
    ],
    metaGrid: [
      { label: 'Client', value: 'Fun Kiddoz', iconType: 'user' },
      { label: 'Industry', value: 'Entertainment & Leisure', iconType: 'globe' },
      { label: 'Project Type', value: 'Interactive Booking Portal', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Dec 2025', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/funkiddoz_laptopvie.webp',
      '/assets/images/Portfolio/projects/funkiddoz_tablet.webp',
      '/assets/images/Portfolio/projects/funkiddoz_mobile.webp'
    ],
    results: [
      { value: '180%', label: 'Increase in Party Reservations', iconType: 'trending-up' },
      { value: '95%', label: 'Positive Family Ratings', iconType: 'smile' },
      { value: '70%', label: 'More Mobile Visitors', iconType: 'users' },
      { value: '99%', label: 'Website Speed Score', iconType: 'check-circle' }
    ]
  },
  {
    id: 18,
    title: 'Limras Gallery Ecom..',
    category: 'eCommerce',
    categoryLabel: 'Corporate Gifting Items',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-18-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-18-mobile.webp',
    description: 'Limras Gallery  is the ecommerce website to selling the prices and gifts.',
    link: '/portfolio/18',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/projects/limrasgallerlaptopview.webp',
    client: 'Limras Gallery',
    date: 'Jan 2026',
    services: 'Web Development, Art Gallery Showcase, E-Catalog',
    projectUrl: 'https://limrasgallery.com/',
    gallery: [
      '/assets/images/Portfolio/projects/limrasgallerlaptopview.webp',
      '/assets/images/Portfolio/projects/limrasgalletabletview.webp',
      '/assets/images/Portfolio/projects/limrasgallermobileviw.webp'
    ],
    subtitle: 'Limras Gallery Ecommerce',
    badge: 'International Project',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/limrasgallerlaptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/limrasgallermobileviw.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/limrasgalletabletview.webp',
    technologies: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Limras Gallery platform highlights bespoke picture frames, canvas prints, and custom artwork with interactive visual preview capabilities for interior designers and homeowners.',
    features: [
      'Custom frame style gallery',
      'Art catalog filter system',
      'Consultation & quote request form',
      'Vibrant photo sliders',
      'Smooth mobile navigation'
    ],
    metaGrid: [
      { label: 'Client', value: 'Limras Gallery', iconType: 'user' },
      { label: 'Industry', value: 'Art & Interior Decor', iconType: 'globe' },
      { label: 'Project Type', value: 'Gallery Showcase Website', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Dec 2025', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/limrasgallerlaptopview.webp',
      '/assets/images/Portfolio/projects/limrasgalletabletview.webp',
      '/assets/images/Portfolio/projects/limrasgallermobileviw.webp'
    ],
    results: [
      { value: '175%', label: 'Increase in Framing Inquiries', iconType: 'trending-up' },
      { value: '80%', label: 'Higher Catalog Views', iconType: 'shopping-cart' },
      { value: '97%', label: 'Client Satisfaction', iconType: 'smile' },
      { value: '99.5%', label: 'Site Speed Score', iconType: 'check-circle' }
    ]
  },
  {
    id: 20,
    title: 'Youverse Ecommerce',
    category: 'eCommerce',
    categoryLabel: 'Online Shopping',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-20-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-20-mobile.webp',
    description: 'Youverse Ecommerce is the ecommerce website to selling the products.',
    link: '/portfolio/20',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/youverse_laptopview.webp',
    client: 'Youverse Tech',
    date: 'Jan 2026',
    services: 'Web Development, UI/UX Architecture, Cloud Integration',
    projectUrl: 'https://youverse.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/youverse_laptopview.webp',
      '/assets/images/Portfolio/projects/youverse_tabletview.webp',
      '/assets/images/Portfolio/projects/youverse_mobileview.webp'
    ],
    subtitle: 'Youverse Ecommerce.',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/youverse_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/youverse_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/youverse_tabletview.webp',
    technologies: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Youverse Ecommerce is the ecommerce website to selling the products.',
    features: [
      'Interactive product module showcase',
      'High-performance cloud integration',
      'Clean dark-mode aesthetic styling',
      'Encrypted lead capture forms',
      'Optimized core web vitals'
    ],
    metaGrid: [
      { label: 'Client', value: 'Youverse', iconType: 'user' },
      { label: 'Industry', value: 'Ecommerce', iconType: 'globe' },
      { label: 'Project Type', value: 'Ecommerce Website', iconType: 'code' },
      { label: 'Duration', value: '2 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Dec 2025', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/youverse_laptopview.webp',
      '/assets/images/Portfolio/projects/youverse_tabletview.webp',
      '/assets/images/Portfolio/projects/youverse_mobileview.webp'
    ],
    results: [
      { value: '220%', label: 'User Engagement Growth', iconType: 'trending-up' },
      { value: '90%', label: 'SaaS Onboarding Rate', iconType: 'shopping-cart' },
      { value: '99%', label: 'Client Satisfaction', iconType: 'smile' },
      { value: '100%', label: 'Performance Score', iconType: 'check-circle' }
    ]
  },
  {
    id: 21,
    title: 'Bazarway Shop Ecom..',
    category: 'eCommerce',
    categoryLabel: 'UK Retail Shopping',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-21-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-21-mobile.webp',
    description: 'Bazarway is the ecommerce website to selling the products.',
    link: '/portfolio/21',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/bazarway_store.webp',
    client: 'Bazarway UK Store',
    date: 'Jan 2026',
    services: 'Web Development, eCommerce, Retail Portal',
    projectUrl: 'https://bazaarway.co.uk/shopproducts/',
    gallery: [
      '/assets/images/Portfolio/projects/bazarway_store.webp',
      '/assets/images/Portfolio/projects/bazarway_store_tableteview.webp',
      '/assets/images/Portfolio/projects/bazarwaystore_mobile.webp'
    ],
    subtitle: 'Bazarway Shop Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/bazarway_store.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/bazarwaystore_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/bazarway_store_tableteview.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Bazarway is the ecommerce website to selling the products.',
    features: [
      'Multi-category product catalog',
      'Instant search and filter engine',
      'Integrated payment gateway',
      'Mobile-first responsive shopping',
      'SEO optimized product pages'
    ],
    metaGrid: [
      { label: 'Client', value: 'Bazarway ', iconType: 'user' },
      { label: 'Industry', value: 'ECommerce ', iconType: 'globe' },
      { label: 'Project Type', value: 'Product Shop', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/bazarway_store.webp',
      '/assets/images/Portfolio/projects/bazarway_store_tableteview.webp',
      '/assets/images/Portfolio/projects/bazarwaystore_mobile.webp'
    ],
    results: [
      { value: '180%', label: 'Product Conversion Boost', iconType: 'trending-up' },
      { value: '85%', label: 'Mobile Order Growth', iconType: 'shopping-cart' },
      { value: '98%', label: 'Customer Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Platform Uptime', iconType: 'check-circle' }
    ],
    badge: 'International Project'
  },
  {
    id: 22,
    title: 'Fiori Celebrations E..',
    category: 'eCommerce',
    categoryLabel: 'Jewellery Shopping',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-22-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-22-mobile.webp',
    description: 'Fiori Celebrations is the ecommerce website to selling the jewellery items.',
    link: '/portfolio/22',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/fioricelebration_laptopview.webp',
    client: 'Fiori Celebrations',
    date: 'Feb 2026',
    services: 'Web Development, Event Booking, UI/UX Design',
    projectUrl: 'https://fioricelebrations.com/',
    gallery: [
      '/assets/images/Portfolio/projects/fioricelebration_laptopview.webp',
      '/assets/images/Portfolio/projects/fioricelebration_tabletview.webp',
      '/assets/images/Portfolio/projects/fioricelebration_mobileview.webp'
    ],
    subtitle: 'fioricelebrations Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/fioricelebration_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/fioricelebration_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/fioricelebration_tabletview.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Fiori Celebrations is the ecommerce website to selling the jewellery items.',
    features: [
      'Event decor portfolio gallery',
      'Custom bouquet & package builder',
      'Online consultation booking',
      'Mobile responsive design',
      'Fast page load speeds'
    ],
    metaGrid: [
      { label: 'Client', value: 'Fiori Celebrations', iconType: 'user' },
      { label: 'Industry', value: 'Events & Luxury Decor', iconType: 'globe' },
      { label: 'Project Type', value: 'Service & Booking Portal', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/fioricelebration_laptopview.webp',
      '/assets/images/Portfolio/projects/fioricelebration_tabletview.webp',
      '/assets/images/Portfolio/projects/fioricelebration_mobileview.webp'
    ],
    results: [
      { value: '210%', label: 'Event Booking Enquiries', iconType: 'trending-up' },
      { value: '75%', label: 'Growth in Direct Sales', iconType: 'shopping-cart' },
      { value: '99%', label: 'Client Delight Rating', iconType: 'smile' },
      { value: '100%', label: 'Speed Performance Pass', iconType: 'check-circle' }
    ],
    badge: 'International Project'
  },
  {
    id: 23,
    title: 'Annsha Gifts Ecom..',
    category: 'eCommerce',
    categoryLabel: 'Gift Shopping',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-23-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-23-mobile.webp',
    description: 'Annsha Gifts is the ecommerce website to selling the Gift Items.',
    link: '/portfolio/23',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/annshagift_laptopview.webp',
    client: 'Annsha Gifts Store',
    date: 'Feb 2026',
    services: 'Web Development, eCommerce, Custom Gift Portal',
    projectUrl: 'https://annshagifts.com/',
    gallery: [
      '/assets/images/Portfolio/projects/annshagift_laptopview.webp',
      '/assets/images/Portfolio/projects/annshagift_tabletview.webp',
      '/assets/images/Portfolio/projects/annshagift_mobileview.webp'
    ],
    subtitle: 'Annsha Gifts Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/annshagift_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/annshagift_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/annshagift_tabletview.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Annsha Gifts is the Ecommerce website to selling the Gift Items.',
    features: [
      'Personalized gift hamper customizer',
      'Occasion & holiday gift category filters',
      'Integrated WooCommerce payment gateway',
      'Fast mobile checkout process',
      'SEO optimized store pages'
    ],
    metaGrid: [
      { label: 'Client', value: 'Annsha Gifts', iconType: 'user' },
      { label: 'Industry', value: 'Gifting & Retail', iconType: 'globe' },
      { label: 'Project Type', value: 'eCommerce Store', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/annshagift_laptopview.webp',
      '/assets/images/Portfolio/projects/annshagift_tabletview.webp',
      '/assets/images/Portfolio/projects/annshagift_mobileview.webp'
    ],
    results: [
      { value: '230%', label: 'Online Gift Sales Growth', iconType: 'trending-up' },
      { value: '88%', label: 'Mobile Order Conversions', iconType: 'shopping-cart' },
      { value: '99%', label: 'Customer Satisfaction', iconType: 'smile' },
      { value: '100%', label: 'Store Uptime & Speed', iconType: 'check-circle' }
    ],
    badge: 'International Project'
  },
  {
    id: 4,
    title: 'Arman Group Website',
    category: 'Web Development',
    categoryLabel: 'Corporate Portal',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-4-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-4-mobile.webp',
    description: 'Premium website for Arman Group showcasing their projects, team and global operations.',
    link: '/portfolio/4',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/projects/armangroup/slide1.webp',
    client: 'Arman Group Ltd',
    date: 'Dec 2025',
    services: 'Web Development, UX/UI Design',
    projectUrl: 'https://armangroup.co.in/',
    gallery: [
      '/assets/images/Portfolio/projects/armangroup/slide1.webp',
      '/assets/images/Portfolio/projects/armangroup/slide2.webp',
      '/assets/images/Portfolio/projects/armangroup/slide3.webp',
      '/assets/images/Portfolio/projects/armangroup/slide4.webp',
      '/assets/images/Portfolio/projects/armangroup/slide5.webp'
    ],
    subtitle: 'Arman Group Website',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/armangroup.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/arman_group.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'A custom corporate portal developed for Arman Group to showcase their diversified projects, business verticals, and contact gateways in a fast, responsive layout.',
    features: [
      'Diversified project portfolio grids',
      'Interactive corporate timeline',
      'Contact inquiry dashboard',
      'Highly responsive UI design',
      'Secure asset protection'
    ],
    metaGrid: [
      { label: 'Client', value: 'Arman Group', iconType: 'user' },
      { label: 'Industry', value: 'Conglomerate', iconType: 'globe' },
      { label: 'Project Type', value: 'Corporate Website', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/armangroup/slide1.webp',
      '/assets/images/Portfolio/projects/armangroup/slide2.webp',
      '/assets/images/Portfolio/projects/armangroup/slide3.webp',
      '/assets/images/Portfolio/projects/armangroup/slide4.webp',
      '/assets/images/Portfolio/projects/armangroup/slide5.webp'
    ],
    results: [
      { value: '110%', label: 'Increase in B2B Inquiries', iconType: 'trending-up' },
      { value: '45%', label: 'More Page Sessions', iconType: 'shopping-cart' },
      { value: '55%', label: 'Better Brand Authority', iconType: 'users' },
      { value: '98%', label: 'User Rating', iconType: 'smile' }
    ]
  },
  {
    id: 5,
    title: 'Elkins Air Condition ..',
    category: 'Web Development',
    categoryLabel: 'AC Service Booking',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-5-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-5-mobile.webp',
    description: 'Modern service website with booking and AMC solutions.',
    link: '/portfolio/5',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/elkins_laptopview.webp',
    client: 'Elkins Air Conditioning Inc',
    date: 'Nov 2025',
    services: 'Web Development, SEO, Booking Integration',
    projectUrl: 'https://elkinsaircondition.com/',
    gallery: [
      '/assets/images/Portfolio/projects/elkins_laptopview.webp',
      '/assets/images/Portfolio/projects/elkins_tablet.webp',
      '/assets/images/Portfolio/projects/elkins_mobile.webp'
    ],
    subtitle: 'Elkins Air Conditioning Website',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/elkins_laptopview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/elkins_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/elkins_mobile.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Elkins Air Conditioning website delivers a clean service interface for booking maintenance visits, estimating HVAC system costs, and contacting local emergency technicians.',
    features: [
      'Online appointment scheduler',
      'Service area maps mapping',
      'Dynamic quote calculator',
      'SEO optimized layout',
      'Mobile-first responsive grids'
    ],
    metaGrid: [
      { label: 'Client', value: 'Elkins Air Conditioning', iconType: 'user' },
      { label: 'Industry', value: 'HVAC Services', iconType: 'globe' },
      { label: 'Project Type', value: 'Service Portal', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Oct 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/elkins_laptopview.webp',
      '/assets/images/Portfolio/projects/elkins_tablet.webp',
      '/assets/images/Portfolio/projects/elkins_mobile.webp'
    ],
    results: [
      { value: '180%', label: 'More Local Bookings', iconType: 'trending-up' },
      { value: '75%', label: 'Call Volume Growth', iconType: 'shopping-cart' },
      { value: '4.8★', label: 'Customer Trust Rating', iconType: 'smile' },
      { value: '99%', label: 'System Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 7,
    title: 'Radient Website',
    category: 'Web Development',
    categoryLabel: 'Medical Equipment',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-7-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-7-mobile.webp',
    description: 'Modern  website showcasing  solutions and  Services.',
    link: '/portfolio/7',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/projects/radientinfotech/slide1.webp',
    client: 'Radient',
    date: 'Sep 2025',
    services: 'Web Development, IT Branding',
    projectUrl: 'https://radientinfotech.in/',
    gallery: [
      '/assets/images/Portfolio/projects/radientinfotech/slide1.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide2.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide3.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide4.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide5.webp'
    ],
    subtitle: 'Radient  Website',
    badge: 'International Project',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/radiantconsultancy.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/radient_mobile.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Radient showcases services and ',
    features: [
      'Case study carousel grids',
      'Consultation lead captures',
      'High speed loading times',
      'Vibrant brand style codes',
      'SEO structured site map'
    ],
    metaGrid: [
      { label: 'Client', value: 'Radient website', iconType: 'user' },
      { label: 'Industry', value: 'Medical Equipment', iconType: 'globe' },
      { label: 'Project Type', value: 'Portfolio', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Aug 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/radientinfotech/slide1.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide2.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide3.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide4.webp',
      '/assets/images/Portfolio/projects/radientinfotech/slide5.webp'
    ],
    results: [
      { value: '120%', label: 'Consultation Leads', iconType: 'trending-up' },
      { value: '85%', label: 'Organic Traffic Boost', iconType: 'shopping-cart' },
      { value: '98%', label: 'Client Success Rating', iconType: 'smile' },
      { value: '100%', label: 'Core Vitals Pass', iconType: 'check-circle' }
    ]
  },
  {
    id: 8,
    title: 'Shifa Infotech Website',
    category: 'Web Development',
    categoryLabel: 'Laptop Service',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-8-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-8-mobile.webp',
    description: 'Modern Laptop services and repair.',
    link: '/portfolio/8',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/projects/shifainfotech/slide1.webp',
    client: 'Shifa Infotech',
    date: 'Aug 2025',
    services: 'Web Development, Patient Database',
    projectUrl: '/coming-soon',
    gallery: [
      '/assets/images/Portfolio/projects/shifainfotech/slide1.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide2.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide3.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide4.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide5.webp'
    ],
    subtitle: 'Shifa Infotech Website',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/shifainfotech.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/shifainfo_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/shifainfotech_tablet.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Shifa Infotech offers Laptop repair services, and laptop products and service provider.',
    features: [
      'Laptop repair services',
      'Laptop products',
      'Laptop repair request form',
      'Fully responsive layout designs',
      'SEO tags and schema setup'
    ],
    metaGrid: [
      { label: 'Client', value: 'Shifa Infotech', iconType: 'user' },
      { label: 'Industry', value: 'Laptop Service Provider', iconType: 'globe' },
      { label: 'Project Type', value: 'Portfolio', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jul 2024', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/shifainfotech/slide1.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide2.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide3.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide4.webp',
      '/assets/images/Portfolio/projects/shifainfotech/slide5.webp'
    ],
    results: [
      { value: '200%', label: 'Laptop repair Request', iconType: 'trending-up' },
      { value: '60%', label: 'Form Fill Automation', iconType: 'shopping-cart' },
      { value: '99%', label: 'System Uptime Pass', iconType: 'users' },
      { value: '4.9★', label: 'User Feedback Rating', iconType: 'smile' }
    ]
  },
  {
    id: 13,
    title: 'Bazarway Website',
    category: 'Web Development',
    categoryLabel: 'Business Services',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-13-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-13-mobile.webp',
    description: 'Bazaarway Group UK Providing Business Needs',
    link: '/portfolio/13',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/bazarway_laptopview.webp',
    client: 'Bazarway Store',
    date: 'Jan 2026',
    services: 'Web Development, eCommerce, Multi-vendor Platform',
    projectUrl: 'https://bazaarway.co.uk/',
    gallery: [
      '/assets/images/Portfolio/projects/bazarway_laptopview.webp',
      '/assets/images/Portfolio/projects/bazarwa_mobile.webp'
    ],
    subtitle: 'Bazarway Website',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/bazarway_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/bazarwa_mobile.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Bazarway is a online  website, Two showcase the product and services etc',
    features: [
      'showcase the products',
      'showcase the services',
      'Online service booking',
      'Contact form for service booking',
      'SEO optimized structure'
    ],
    metaGrid: [
      { label: 'Client', value: 'Bazarway', iconType: 'user' },
      { label: 'Industry', value: 'Bazarway', iconType: 'globe' },
      { label: 'Project Type', value: 'Portfolio', iconType: 'code' },
      { label: 'Duration', value: '5 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Dec 2025', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/bazarway_laptopview.webp',
      '/assets/images/Portfolio/projects/bazarwa_mobile.webp'
    ],
    results: [
      { value: '200%', label: 'Seller Registrations', iconType: 'trending-up' },
      { value: '80%', label: 'Order Conversion Rate', iconType: 'shopping-cart' },
      { value: '96%', label: 'Buyer Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Platform Uptime', iconType: 'check-circle' }
    ],
    badge: 'International Project'
  },
  {
    id: 17,
    title: 'Kavis Construction',
    category: 'Web Development',
    categoryLabel: 'UK Construction',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-17-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-17-mobile.webp',
    description: 'Guaranteed professional UK Construction & Renovation services',
    link: '/portfolio/17',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/projects/kavisconstruction-laptopview.webp',
    client: 'Kavis Construction Group',
    date: 'Feb 2026',
    services: 'Web Development, Architectural Showcase, Lead Capture',
    projectUrl: 'https://kavisconstruction.com/',
    gallery: [
      '/assets/images/Portfolio/projects/kavisconstruction-laptopview.webp',
      '/assets/images/Portfolio/projects/kavisconstruction_tabletview.webp',
      '/assets/images/Portfolio/projects/kavisconstruction_mobileview.webp'
    ],
    subtitle: 'Kavis UK Construction Website',
    badge: 'International Project',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/kavisconstruction-laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/kavisconstruction_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/kavisconstruction_tabletview.webp',
    technologies: [
      { name: 'WordPress', iconType: 'wordpress' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Guaranteed professional Construction & Renovation services',
    features: [
      'High-res completed project gallery',
      'Interactive cost estimator form',
      'Architectural blueprint showcases',
      'Client inquiry management system',
      'SEO optimized infrastructure structure'
    ],
    metaGrid: [
      { label: 'Client', value: 'Kavis Construction', iconType: 'user' },
      { label: 'Industry', value: 'Construction & Engineering', iconType: 'globe' },
      { label: 'Project Type', value: 'Portfolio Website', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/kavisconstruction-laptopview.webp',
      '/assets/images/Portfolio/projects/kavisconstruction_tabletview.webp',
      '/assets/images/Portfolio/projects/kavisconstruction_mobileview.webp'
    ],
    results: [
      { value: '140%', label: 'Growth in Construction Leads', iconType: 'trending-up' },
      { value: '65%', label: 'Higher Time-on-Site', iconType: 'shopping-cart' },
      { value: '98%', label: 'Client Trust Score', iconType: 'smile' },
      { value: '100%', label: 'Mobile Responsiveness', iconType: 'check-circle' }
    ]
  },
  {
    id: 19,
    title: 'Spark Events Web..',
    category: 'Web Development',
    categoryLabel: 'Event Booking',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-19-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-19-mobile.webp',
    description: 'Spark Events is the event booking website',
    link: '/portfolio/19',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/projects/sparkevent_laptopview.webp',
    client: 'Spark Events',
    date: 'Feb 2026',
    services: 'Web Development, Event Booking, Media Gallery',
    projectUrl: 'https://sparkevent.in/',
    gallery: [
      '/assets/images/Portfolio/projects/sparkevent_laptopview.webp',
      '/assets/images/Portfolio/projects/sparkevent_tabletview.webp',
      '/assets/images/Portfolio/projects/sparkevent_mobileview.webp'
    ],
    subtitle: 'Spark Events  Website',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/sparkevent_laptopview.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/sparkevent_mobileview.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/sparkevent_tabletview.webp',
    technologies: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' }
    ],
    overview: 'Spark Events website is the event booking website',
    features: [
      'Event package calculator',
      'Immersive wedding & corporate video highlights',
      'Vendor coordination request module',
      'Interactive timeline display',
      'Mobile responsive UI'
    ],
    metaGrid: [
      { label: 'Client', value: 'Spark Events', iconType: 'user' },
      { label: 'Industry', value: 'Event Booking', iconType: 'globe' },
      { label: 'Project Type', value: 'Event Booking Website', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/sparkevent_laptopview.webp',
      '/assets/images/Portfolio/projects/sparkevent_tabletview.webp',
      '/assets/images/Portfolio/projects/sparkevent_mobileview.webp'
    ],
    results: [
      { value: '190%', label: 'More Event Bookings', iconType: 'trending-up' },
      { value: '85%', label: 'Growth in Corporate Leads', iconType: 'shopping-cart' },
      { value: '4.9★', label: 'Client Rating', iconType: 'smile' },
      { value: '99.9%', label: 'Uptime Rating', iconType: 'check-circle' }
    ]
  },
  {
    id: 3,
    title: 'Food Delivery Mobile App',
    category: 'App Development',
    categoryLabel: 'Food Ordering App',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-3-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-3-mobile.webp',
    description: 'Feature-rich food delivery app with real-time tracking, payments, and user dashboard.',
    link: '/portfolio/3',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/portfolio_food_app.webp',
    client: 'QuickBite Inc.',
    date: 'Jan 2026',
    services: 'Mobile App Design, iOS & Android Development',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_food_app.webp']
  },
  {
    id: 11,
    title: 'Finance Management App',
    category: 'App Development',
    categoryLabel: 'Finance App',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-11-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-11-mobile.webp',
    description: 'Smart finance app for tracking income, expenses, and generating detailed reports.',
    link: '/portfolio/11',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/portfolio_finance_app.webp',
    client: 'Finace Group',
    date: 'Sep 2025',
    services: 'Fintech App, UI/UX Design, React Native',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_finance_app.webp']
  },
  {
    id: 9,
    title: 'Brand Identity for Startup',
    category: 'Graphic Designing',
    categoryLabel: 'Brand Identity',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-9-laptop.webp',
    description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
    link: '/portfolio/9',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/portfolio_brand_identity.webp',
    client: 'Nexora Tech',
    date: 'Nov 2025',
    services: 'Brand Identity, Logo Design, Stationery Mockups',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_brand_identity.webp']
  },
  {
    id: 12,
    title: 'Logo & Brand Design',
    category: 'Graphic Designing',
    categoryLabel: 'Logo & Branding',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-12-laptop.webp',
    description: 'Professional logo and brand design that creates a strong and memorable identity.',
    link: '/portfolio/12',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/portfolio_logo_design.webp',
    client: 'Nexora Tech',
    date: 'Jul 2025',
    services: 'Logo Design, Vector Illustration, Brand Guidelines',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_logo_design.webp']
  },
  {
    id: 1,
    title: 'Social Media Campaign for E-Commerce Brand',
    category: 'Digital Marketing',
    categoryLabel: 'Social Media Ads',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-1-laptop.webp',
    description: 'Increased engagement by 320% and boosted sales through targeted ad campaigns.',
    link: '/portfolio/1',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/portfolio_social_media.webp',
    client: 'E-Shop International',
    date: 'Mar 2026',
    services: 'Social Media Marketing, Paid Ads',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_social_media.webp']
  },
  {
    id: 10,
    title: 'Lead Generation Campaign',
    category: 'Digital Marketing',
    categoryLabel: 'Lead Generation',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-10-laptop.webp',
    description: 'Generated high-quality leads and improved conversion rate for a real estate client.',
    link: '/portfolio/10',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/portfolio_lead_gen.webp',
    client: 'Prime Realty',
    date: 'Oct 2025',
    services: 'Google Ads, Search Engine Marketing, Lead Nurturing',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/portfolio_lead_gen.webp']
  },
  {
    id: 24,
    title: 'PrimeAxis Healthcare',
    category: 'Web Development',
    categoryLabel: 'Radiology & Healthcare',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-24-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-24-mobile.webp',
    description: 'Complete healthcare and radiology equipment systems portal for hospitals and diagnostic clinics across the UAE.',
    link: '/portfolio/24',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/projects/primeaxis_laptop.webp',
    client: 'PRIMEAXIS Dubai, UAE',
    date: 'Nov 2026',
    services: 'Web Development, UI/UX Design, Healthcare Portal',
    projectUrl: 'https://primeaxis.pro/',
    gallery: [
      '/assets/images/Portfolio/projects/primeaxis_laptop.webp',
      '/assets/images/Portfolio/projects/primeaxis_tablet.webp',
      '/assets/images/Portfolio/projects/primeaxis_mobile.webp'
    ],
    subtitle: 'PrimeAxis Radiology Systems',
    badge: 'International Project',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/primeaxis_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/primeaxis_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/primeaxis_mobile.webp',
    technologies: [
      { name: 'React', iconType: 'react' },
      { name: 'Tailwind CSS', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'PRIMEAXIS delivers state-of-the-art radiology machines, complete turnkey hospital setup, Annual Maintenance Contracts (AMC), and dedicated clinical engineering support for hospitals and diagnostic centers across Dubai and the UAE.',
    features: [
      'AI-driven radiology & diagnostic equipment showcase (CT, MRI, Digital X-Ray, 4D USG)',
      'Interactive Request-a-Demo & consultation booking workflow',
      'Dedicated AMC & clinical support service portal',
      'Multi-language ready medical product catalog',
      'Fast React + Vite architecture with responsive design'
    ],
    metaGrid: [
      { label: 'Client', value: 'PRIMEAXIS UAE', iconType: 'user' },
      { label: 'Industry', value: 'Healthcare & Radiology', iconType: 'globe' },
      { label: 'Project Type', value: 'International Healthcare Portal', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/primeaxis_laptop.webp',
      '/assets/images/Portfolio/projects/primeaxis_tablet.webp',
      '/assets/images/Portfolio/projects/primeaxis_mobile.webp'
    ],
    results: [
      { value: '100+', label: 'Hospitals & Clinics Served', iconType: 'users' },
      { value: '250+', label: 'Radiology Systems Showcased', iconType: 'trending-up' },
      { value: '98%', label: 'Customer Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Performance & Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 25,
    title: 'SaaSReselling',
    category: 'Software Solutions',
    categoryLabel: 'White Label SaaS',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-25-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-25-mobile.webp',
    description: 'All-in-one white-label SaaS platform helping agencies, freelancers, and entrepreneurs launch their own software brand.',
    link: '/portfolio/25',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/saasreselling_laptop.webp',
    client: 'SaaSReselling',
    date: 'Nov 2026',
    services: 'SaaS Architecture, Laravel Development, White-Label Platform',
    projectUrl: 'https://saasreselling.com/',
    gallery: [
      '/assets/images/Portfolio/projects/saasreselling_laptop.webp',
      '/assets/images/Portfolio/projects/saasreselling_tablet.webp',
      '/assets/images/Portfolio/projects/saasreselling_mobile.webp'
    ],
    subtitle: 'SaaSReselling Platform',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/saasreselling_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/saasreselling_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/saasreselling_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'SaaSReselling is an all-in-one white-label SaaS reselling platform engineered for agencies, freelancers, and entrepreneurs to launch, rebrand, sell, and scale ready-made software products under their own brand identity.',
    features: [
      'Complete white-label brand & custom domain management',
      'Multi-tenant partner & agency subscription portal',
      'Interactive live demo showcase for white-label products',
      'Automated recurring billing and transparent plan tiers',
      'Scalable Laravel backend with role-based permissions'
    ],
    metaGrid: [
      { label: 'Client', value: 'SaaSReselling', iconType: 'user' },
      { label: 'Industry', value: 'White-Label SaaS', iconType: 'globe' },
      { label: 'Project Type', value: 'Multi-Tenant SaaS Platform', iconType: 'code' },
      { label: 'Duration', value: '8 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/saasreselling_laptop.webp',
      '/assets/images/Portfolio/projects/saasreselling_tablet.webp',
      '/assets/images/Portfolio/projects/saasreselling_mobile.webp'
    ],
    results: [
      { value: '240%', label: 'Agency Partner Signups', iconType: 'trending-up' },
      { value: '10x', label: 'Faster SaaS Brand Launch', iconType: 'shopping-cart' },
      { value: '99%', label: 'Partner Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Cloud Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 26,
    title: 'LaunchShop SaaS',
    category: 'Software Solutions',
    categoryLabel: 'eCommerce SaaS',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-26-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-26-mobile.webp',
    description: 'No-code multi-tenant eCommerce SaaS builder enabling sellers to launch an online store in 2 minutes with 0% transaction fees.',
    link: '/portfolio/26',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/launchshop_laptop.webp',
    client: 'LaunchShop',
    date: 'Nov 2026',
    services: 'SaaS Development, Laravel Multi-Tenancy, Payment Gateway Integration',
    projectUrl: 'http://launchshop.in/',
    gallery: [
      '/assets/images/Portfolio/projects/launchshop_laptop.webp',
      '/assets/images/Portfolio/projects/launchshop_tablet.webp',
      '/assets/images/Portfolio/projects/launchshop_mobile.webp'
    ],
    subtitle: 'LaunchShop eCommerce Builder',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/launchshop_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/launchshop_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/launchshop_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'LaunchShop is a fast, affordable Shopify alternative built on Laravel that lets Indian sellers and D2C brands launch complete online stores in 2 minutes with zero coding, advanced store themes, and 0% transaction fees.',
    features: [
      '2-minute instant online store provisioning with custom domains',
      'Advanced conversion-focused store themes & zero-code customization',
      'Integrated inventory, order tracking, and payment gateways',
      '0% transaction fee subscription plans starting from ₹199/month',
      'Dedicated seller analytics & mobile-friendly storefront engine'
    ],
    metaGrid: [
      { label: 'Client', value: 'LaunchShop', iconType: 'user' },
      { label: 'Industry', value: 'eCommerce SaaS', iconType: 'globe' },
      { label: 'Project Type', value: 'Multi-Tenant Store Builder', iconType: 'code' },
      { label: 'Duration', value: '10 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/launchshop_laptop.webp',
      '/assets/images/Portfolio/projects/launchshop_tablet.webp',
      '/assets/images/Portfolio/projects/launchshop_mobile.webp'
    ],
    results: [
      { value: '2 Min', label: 'Average Store Setup Time', iconType: 'trending-up' },
      { value: '0%', label: 'Transaction Commission', iconType: 'shopping-cart' },
      { value: '98%', label: 'Merchant Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Platform Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 27,
    title: 'Website Builder SaaS',
    category: 'Software Solutions',
    categoryLabel: 'AI Website Builder',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-27-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-27-mobile.webp',
    description: 'No-code drag-and-drop & AI-powered website builder SaaS with 10+ templates, custom domains, SSL, and white-label support.',
    link: '/portfolio/27',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/projects/websitebuilder_laptop.webp',
    client: 'SaaSReselling Website Builder',
    date: 'Nov 2026',
    services: 'Laravel SaaS Development, Visual Page Builder, AI Integration',
    projectUrl: 'https://websitebuilder.saasreselling.com/',
    gallery: [
      '/assets/images/Portfolio/projects/websitebuilder_laptop.webp',
      '/assets/images/Portfolio/projects/websitebuilder_tablet.webp',
      '/assets/images/Portfolio/projects/websitebuilder_mobile.webp'
    ],
    subtitle: 'AI Website Builder SaaS',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/websitebuilder_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/websitebuilder_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/websitebuilder_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'Website Builder is a no-code Laravel SaaS platform empowering freelancers, startups, agencies, and businesses to choose a template, customize content with an AI Page Rewriter, and publish with custom domains and free SSL in 3 simple steps.',
    features: [
      'Visual drag-and-drop editor with 10+ industry templates',
      'Built-in AI Page Rewriter for instant content generation',
      'One-click custom domain mapping with automated SSL',
      'Client-ready white-label agency mode & tiered plans',
      'Built-in SEO tools, traffic analytics, and WhatsApp lead widgets'
    ],
    metaGrid: [
      { label: 'Client', value: 'SaaSReselling', iconType: 'user' },
      { label: 'Industry', value: 'No-Code Website SaaS', iconType: 'globe' },
      { label: 'Project Type', value: 'AI Website Builder Platform', iconType: 'code' },
      { label: 'Duration', value: '9 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/websitebuilder_laptop.webp',
      '/assets/images/Portfolio/projects/websitebuilder_tablet.webp',
      '/assets/images/Portfolio/projects/websitebuilder_mobile.webp'
    ],
    results: [
      { value: '3 Steps', label: 'Template to Live Launch', iconType: 'trending-up' },
      { value: '10+', label: 'Industry-Ready Templates', iconType: 'shopping-cart' },
      { value: '99%', label: 'Creator Satisfaction', iconType: 'smile' },
      { value: '99.9%', label: 'Hosting Reliability', iconType: 'check-circle' }
    ]
  },
  {
    id: 28,
    title: 'Billing POS (BillBOSS)',
    category: 'Software Solutions',
    categoryLabel: 'Billing & POS SaaS',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-28-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-28-mobile.webp',
    description: 'Complete retail billing, inventory, stock transfer, expenses, and POS software built with Laravel and Vue.js.',
    link: '/portfolio/28',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/projects/billbos_laptop.webp',
    client: 'BillBOSS by Nooryak',
    date: 'Nov 2026',
    services: 'Laravel + Vue.js Development, POS Architecture, Inventory Management',
    projectUrl: 'https://billing.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/billbos_laptop.webp',
      '/assets/images/Portfolio/projects/billbos_tablet.webp',
      '/assets/images/Portfolio/projects/billbos_mobile.webp'
    ],
    subtitle: 'BillBOSS Billing & POS',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/billbos_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/billbos_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/billbos_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'Vue.js', iconType: 'vue' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' }
    ],
    overview: 'BillBOSS is a comprehensive cloud Billing, Inventory & Point-of-Sale (POS) SaaS built with Laravel and Vue.js—covering sales invoicing, purchases, multi-branch stock transfers, cash & bank tracking, staff clock-in, and real-time analytics.',
    features: [
      'Fast Point-of-Sale (POS) checkout & GST-ready invoicing',
      'Real-time sales, purchases, expenses & cash-flow dashboard',
      'Multi-warehouse stock transfer & stock adjustment controls',
      'Staff clock-in attendance, role permissions & party ledgers',
      'Top-selling product charts, online orders & financial reports'
    ],
    metaGrid: [
      { label: 'Client', value: 'BillBOSS POS', iconType: 'user' },
      { label: 'Industry', value: 'Retail & Accounting SaaS', iconType: 'globe' },
      { label: 'Project Type', value: 'Billing & Inventory POS', iconType: 'code' },
      { label: 'Duration', value: '10 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/billbos_laptop.webp',
      '/assets/images/Portfolio/projects/billbos_tablet.webp',
      '/assets/images/Portfolio/projects/billbos_mobile.webp'
    ],
    results: [
      { value: '65%', label: 'Faster Billing Checkout', iconType: 'trending-up' },
      { value: '100%', label: 'Real-Time Stock Accuracy', iconType: 'shopping-cart' },
      { value: '98%', label: 'Business Owner Rating', iconType: 'smile' },
      { value: '99.9%', label: 'Cloud POS Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 29,
    title: 'Nooryak CRM',
    category: 'Software Solutions',
    categoryLabel: 'Lead & Sales CRM',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-29-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-29-mobile.webp',
    description: 'Smart SaaS CRM platform for managing leads, sales pipelines, deals, follow-up tasks, meetings, and revenue analytics.',
    link: '/portfolio/29',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/projects/nooryakcrm_laptop.webp',
    client: 'Nooryak Technologies',
    date: 'Nov 2026',
    services: 'CRM Software Engineering, SaaS Dashboard UI/UX, Analytics',
    projectUrl: '#',
    gallery: [
      '/assets/images/Portfolio/projects/nooryakcrm_laptop.webp',
      '/assets/images/Portfolio/projects/nooryakcrm_tablet.webp',
      '/assets/images/Portfolio/projects/nooryakcrm_mobile.webp'
    ],
    subtitle: 'Nooryak CRM Software',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/nooryakcrm_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/nooryakcrm_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/nooryakcrm_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'React', iconType: 'react' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'Node.js', iconType: 'nodejs' }
    ],
    overview: 'Nooryak CRM helps growing sales teams capture leads, track multi-stage deal pipelines (New Lead → Contacted → Qualified → Proposal → Negotiation → Won), schedule follow-up tasks and meetings, and monitor net revenue growth in real time.',
    features: [
      'Visual 6-stage sales pipeline with live conversion tracking',
      'Centralized leads, contacts, and open deals management',
      'Revenue vs. expenses & net profit executive charts',
      'Daily task reminders, meeting calendar & automated reports',
      'Mobile-ready sales dashboard for field teams'
    ],
    metaGrid: [
      { label: 'Client', value: 'Nooryak CRM', iconType: 'user' },
      { label: 'Industry', value: 'CRM & Sales Automation', iconType: 'globe' },
      { label: 'Project Type', value: 'SaaS CRM Platform', iconType: 'code' },
      { label: 'Duration', value: '12 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Active Product', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/nooryakcrm_laptop.webp',
      '/assets/images/Portfolio/projects/nooryakcrm_tablet.webp',
      '/assets/images/Portfolio/projects/nooryakcrm_mobile.webp'
    ],
    results: [
      { value: '24.5%', label: 'Average Deal Conversion', iconType: 'trending-up' },
      { value: '3x', label: 'Faster Lead Follow-Up', iconType: 'users' },
      { value: '99%', label: 'Team Adoption Rate', iconType: 'smile' },
      { value: '99.9%', label: 'Platform Reliability', iconType: 'check-circle' }
    ]
  },
  {
    id: 30,
    title: 'BinaryEcom Software',
    category: 'Software Solutions',
    categoryLabel: 'Binary MLM eCommerce',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-30-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-30-mobile.webp',
    description: 'Laravel eCommerce-based Binary MLM platform with dual-leg downline commissions, product orders, deposits, and withdrawals.',
    link: '/portfolio/30',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/projects/binaryecom_laptop.webp',
    client: 'BinaryEcom Platform',
    date: 'Nov 2026',
    services: 'Laravel MLM Engineering, eCommerce Integration, Wallet & Payout System',
    projectUrl: 'https://binaryecom.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/binaryecom_laptop.webp',
      '/assets/images/Portfolio/projects/binaryecom_tablet.webp',
      '/assets/images/Portfolio/projects/binaryecom_mobile.webp'
    ],
    subtitle: 'BinaryEcom MLM Platform',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/binaryecom_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/binaryecom_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/binaryecom_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'BinaryEcom is a full-featured Laravel eCommerce-based Binary MLM platform combining organic product retailing with dual-leg downline genealogy, automated referral & binary commission payouts, deposit/withdrawal approvals, and support ticketing.',
    features: [
      'Dual-leg binary genealogy tree & automated pair matching commissions',
      'Integrated eCommerce product, category & order management',
      'Automated deposit, withdrawal & charge ledger workflows',
      'Member verification (email/mobile), cron payouts & financial reports',
      'Built-in support ticket system & admin notice broadcast'
    ],
    metaGrid: [
      { label: 'Client', value: 'BinaryEcom', iconType: 'user' },
      { label: 'Industry', value: 'MLM & eCommerce SaaS', iconType: 'globe' },
      { label: 'Project Type', value: 'Binary MLM eCommerce Software', iconType: 'code' },
      { label: 'Duration', value: '8 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/binaryecom_laptop.webp',
      '/assets/images/Portfolio/projects/binaryecom_tablet.webp',
      '/assets/images/Portfolio/projects/binaryecom_mobile.webp'
    ],
    results: [
      { value: '100%', label: 'Automated Commission Engine', iconType: 'trending-up' },
      { value: '5 Steps', label: 'Distributor Onboarding Flow', iconType: 'users' },
      { value: '98%', label: 'Admin Accuracy Score', iconType: 'smile' },
      { value: '99.9%', label: 'Transaction Uptime', iconType: 'check-circle' }
    ]
  },
  {
    id: 31,
    title: 'BullionX MLM Software',
    category: 'Software Solutions',
    categoryLabel: 'MLM Profit Software',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-31-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-31-mobile.webp',
    description: 'Laravel-powered gold profit-sharing and network marketing MLM software with risk management and automated passive payouts.',
    link: '/portfolio/31',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/bullionx_laptop.webp',
    client: 'BullionX Academy',
    date: 'Nov 2026',
    services: 'Laravel MLM Development, Profit-Sharing Engine, Investor Portal',
    projectUrl: 'https://bullionx.nooryak.com/',
    gallery: [
      '/assets/images/Portfolio/projects/bullionx_laptop.webp',
      '/assets/images/Portfolio/projects/bullionx_tablet.webp',
      '/assets/images/Portfolio/projects/bullionx_mobile.webp'
    ],
    subtitle: 'BullionX MLM Software',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/bullionx_laptop.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/bullionx_tablet.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/bullionx_mobile.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'MySQL', iconType: 'mysql' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'BullionX MLM Software is a secure Laravel gold profit-sharing and network-growth platform designed to manage member networks, transparent profit-sharing execution, risk management frameworks, and automated passive income distributions.',
    features: [
      'Smart gold profit-sharing calculation & passive payout engine',
      'Multi-level network growth & referral bonus tracking',
      'Transparent risk management & investor achievement dashboards',
      'Secure wallet deposits, withdrawal requests & KYC controls',
      'Responsive member & admin portals built on Laravel'
    ],
    metaGrid: [
      { label: 'Client', value: 'BullionX Academy', iconType: 'user' },
      { label: 'Industry', value: 'FinTech & MLM Software', iconType: 'globe' },
      { label: 'Project Type', value: 'Profit-Sharing MLM Platform', iconType: 'code' },
      { label: 'Duration', value: '8 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Nov 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/bullionx_laptop.webp',
      '/assets/images/Portfolio/projects/bullionx_tablet.webp',
      '/assets/images/Portfolio/projects/bullionx_mobile.webp'
    ],
    results: [
      { value: '100%', label: 'Automated Payout Accuracy', iconType: 'trending-up' },
      { value: '3x', label: 'Network Expansion Speed', iconType: 'users' },
      { value: '99%', label: 'Member Trust Score', iconType: 'smile' },
      { value: '99.9%', label: 'Security & Uptime', iconType: 'check-circle' }
    ]
  }
,

  {
    id: 32,
    title: 'Tech Era',
    category: 'eCommerce',
    categoryLabel: 'Tech & Gadgets',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-32-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-32-mobile.webp',
    description: 'Modern electronics, gadgets, and tech accessories eCommerce platform.',
    link: '/portfolio/32',
    bgClass: 'bg-tech',
    image: '/assets/images/Portfolio/projects/techera_laptop.webp',
    client: 'Tech Era',
    date: 'Feb 2026',
    services: 'eCommerce Development, Laravel Backend, Custom UI/UX',
    projectUrl: 'https://techera.website/',
    gallery: [
      '/assets/images/Portfolio/projects/techera_laptop.webp',
      '/assets/images/Portfolio/projects/techera_tablet.webp',
      '/assets/images/Portfolio/projects/techera_mobile.webp'
    ],
    subtitle: 'Tech Era Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/techera_laptop.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/techera_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/techera_tablet.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'Tech Era is a full-featured Laravel eCommerce store built for modern tech products, gadgets, and accessories with instant checkout, live stock counters, and smart search.',
    features: [
      'Laravel MVC high performance architecture',
      'Custom responsive cart & instant checkout',
      'Automated inventory & stock alerts',
      'Multi-category filtering & live product search',
      'Encrypted payment gateway integration'
    ],
    metaGrid: [
      { label: 'Client', value: 'Tech Era', iconType: 'user' },
      { label: 'Industry', value: 'Consumer Electronics & Tech', iconType: 'globe' },
      { label: 'Project Type', value: 'Laravel eCommerce Store', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/techera_laptop.webp',
      '/assets/images/Portfolio/projects/techera_tablet.webp',
      '/assets/images/Portfolio/projects/techera_mobile.webp'
    ],
    results: [
      { value: '180%', label: 'Growth in Sales Inquiries', iconType: 'trending-up' },
      { value: '45%', label: 'Higher Repeat Purchases', iconType: 'shopping-cart' },
      { value: '99%', label: 'Positive Customer Feedback', iconType: 'smile' },
      { value: '0.8s', label: 'Average Page Load Speed', iconType: 'check-circle' }
    ]
  },
  {
    id: 33,
    title: 'Nature Axis',
    category: 'eCommerce',
    categoryLabel: 'Organic & Wellness',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-33-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-33-mobile.webp',
    description: 'Premium organic wellness, herbal care, and sustainable health products store.',
    link: '/portfolio/33',
    bgClass: 'bg-nature',
    image: '/assets/images/Portfolio/projects/natureaxis_laptop.webp',
    client: 'Nature Axis (NaturaiXS)',
    date: 'Feb 2026',
    services: 'eCommerce Development, Laravel Backend, Mobile First UI',
    projectUrl: 'https://naturaixs.in/',
    gallery: [
      '/assets/images/Portfolio/projects/natureaxis_laptop.webp',
      '/assets/images/Portfolio/projects/natureaxis_tablet.webp',
      '/assets/images/Portfolio/projects/natureaxis_mobile.webp'
    ],
    subtitle: 'Nature Axis Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/natureaxis_laptop.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/natureaxis_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/natureaxis_tablet.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'Nature Axis (NaturaiXS) offers an organic shopping experience for pure herbal health supplements, ayurvedic care, and organic essentials backed by a lightning-fast Laravel architecture.',
    features: [
      'Organic wellness product catalog',
      'Secure multi-tier coupon and checkout flow',
      'Mobile-first responsive purchasing funnel',
      'Real-time order tracking notifications',
      'SEO optimized health product listings'
    ],
    metaGrid: [
      { label: 'Client', value: 'Nature Axis (NaturaiXS)', iconType: 'user' },
      { label: 'Industry', value: 'Organic Wellness & Health', iconType: 'globe' },
      { label: 'Project Type', value: 'Laravel eCommerce Portal', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/natureaxis_laptop.webp',
      '/assets/images/Portfolio/projects/natureaxis_tablet.webp',
      '/assets/images/Portfolio/projects/natureaxis_mobile.webp'
    ],
    results: [
      { value: '210%', label: 'Increase in Organic Traffic', iconType: 'trending-up' },
      { value: '75%', label: 'Mobile Checkout Conversion', iconType: 'shopping-cart' },
      { value: '98%', label: 'Product Satisfaction Score', iconType: 'smile' },
      { value: '100%', label: 'Mobile Responsive Layout', iconType: 'check-circle' }
    ]
  },
  {
    id: 34,
    title: 'WearNova',
    category: 'eCommerce',
    categoryLabel: 'Fashion & Apparel',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-34-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-34-mobile.webp',
    description: 'Trendy fashion apparel, streetwear, and modern lifestyle clothing store.',
    link: '/portfolio/34',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/projects/wearnova_laptop.webp',
    client: 'WearNova Fashion',
    date: 'Feb 2026',
    services: 'eCommerce Development, Laravel Backend, Modern Catalog',
    projectUrl: 'https://wearnova.site/',
    gallery: [
      '/assets/images/Portfolio/projects/wearnova_laptop.webp',
      '/assets/images/Portfolio/projects/wearnova_tablet.webp',
      '/assets/images/Portfolio/projects/wearnova_mobile.webp'
    ],
    subtitle: 'WearNova Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/wearnova_laptop.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/wearnova_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/wearnova_tablet.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'WearNova is a modern fashion and streetwear retail destination delivering a smooth visual product catalog, variant selectors (sizes, colors), and seamless checkout experiences.',
    features: [
      'Apparel size & color variant selector',
      'High resolution lookbook & product zoom',
      'One-click guest and member checkout',
      'Automated discount and promotional banner engine',
      'Ultra-responsive mobile shopping UI'
    ],
    metaGrid: [
      { label: 'Client', value: 'WearNova Fashion', iconType: 'user' },
      { label: 'Industry', value: 'Fashion & Apparel', iconType: 'globe' },
      { label: 'Project Type', value: 'Laravel Fashion Store', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/wearnova_laptop.webp',
      '/assets/images/Portfolio/projects/wearnova_tablet.webp',
      '/assets/images/Portfolio/projects/wearnova_mobile.webp'
    ],
    results: [
      { value: '165%', label: 'Boost in Mobile Orders', iconType: 'trending-up' },
      { value: '55%', label: 'Lower Cart Abandonment', iconType: 'shopping-cart' },
      { value: '97%', label: 'Shopper Satisfaction', iconType: 'smile' },
      { value: '1.1s', label: 'Fast Catalog Load Time', iconType: 'check-circle' }
    ]
  },
  {
    id: 35,
    title: 'TrendKart',
    category: 'eCommerce',
    categoryLabel: 'Multi-Category Store',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-35-laptop.webp',
    cardMobileThumb: '/assets/images/Portfolio/card-thumbs/project-35-mobile.webp',
    description: 'Trending consumer goods, lifestyle products, and everyday essentials online store.',
    link: '/portfolio/35',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/projects/trendcart_laptop.webp',
    client: 'TrendKart Online',
    date: 'Feb 2026',
    services: 'eCommerce Development, Laravel Backend, Multi-Vendor Architecture',
    projectUrl: 'https://trendkart.online/',
    gallery: [
      '/assets/images/Portfolio/projects/trendcart_laptop.webp',
      '/assets/images/Portfolio/projects/trendcart_tablet.webp',
      '/assets/images/Portfolio/projects/trendcart_mobile.webp'
    ],
    subtitle: 'TrendKart Ecommerce',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/trendcart_laptop.webp',
    mobileScrollImage: '/assets/images/Portfolio/projects/trendcart_mobile.webp',
    tabletScrollImage: '/assets/images/Portfolio/projects/trendcart_tablet.webp',
    technologies: [
      { name: 'Laravel', iconType: 'laravel' },
      { name: 'PHP', iconType: 'php' },
      { name: 'CSS3', iconType: 'css3' }
    ],
    overview: 'TrendKart is a comprehensive multi-category online shopping store featuring curated daily trending deals, rapid search autocompletion, dynamic filters, and encrypted payments.',
    features: [
      'Dynamic daily deal & flash sale banners',
      'High performance search & category facets',
      'Integrated wishlisting and cart recovery',
      'Multi-payment gateways (UPI, Cards, NetBanking)',
      'Automated order management dashboard'
    ],
    metaGrid: [
      { label: 'Client', value: 'TrendKart Online', iconType: 'user' },
      { label: 'Industry', value: 'Retail & Multi-Category eCommerce', iconType: 'globe' },
      { label: 'Project Type', value: 'Laravel eCommerce Platform', iconType: 'code' },
      { label: 'Duration', value: '4 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/trendcart_laptop.webp',
      '/assets/images/Portfolio/projects/trendcart_tablet.webp',
      '/assets/images/Portfolio/projects/trendcart_mobile.webp'
    ],
    results: [
      { value: '190%', label: 'Monthly Active Buyers Growth', iconType: 'trending-up' },
      { value: '70%', label: 'Repeat Customer Rate', iconType: 'shopping-cart' },
      { value: '98%', label: 'Positive Order Feedback', iconType: 'smile' },
      { value: '99.9%', label: 'Platform Availability', iconType: 'check-circle' }
    ]
  },
  {
    id: 36,
    title: 'Packaging & Label Design',
    category: 'Graphic Designing',
    categoryLabel: 'Packaging & Labels',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-36-laptop.webp',
    description: 'Custom packaging, premium box die-cuts, and product label graphics for organic retail products.',
    link: '/portfolio/36',
    bgClass: 'bg-nature',
    image: '/assets/images/Portfolio/projects/graphic_packaging.webp',
    client: 'PureBotanics Wellness',
    date: 'Jan 2026',
    services: 'Packaging Design, 3D Mockups, Die-Cut Blueprints',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/projects/graphic_packaging.webp'],
    subtitle: 'PureBotanics Packaging Design',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/graphic_packaging.webp',
    technologies: [
      { name: 'Illustrator', iconType: 'adobe' },
      { name: 'Photoshop', iconType: 'adobe' },
      { name: 'Figma', iconType: 'figma' }
    ],
    overview: 'Comprehensive product packaging and label designs tailored for luxury and organic cosmetics brands.',
    features: [
      'Precision vector dieline layouts',
      'Photorealistic 3D bottle & box mockups',
      'Pantone color calibration for print',
      'Barcode & regulatory compliance placement'
    ],
    metaGrid: [
      { label: 'Client', value: 'PureBotanics Wellness', iconType: 'user' },
      { label: 'Industry', value: 'Cosmetics & Retail', iconType: 'globe' },
      { label: 'Project Type', value: 'Packaging & Label', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/graphic_packaging.webp'
    ],
    results: [
      { value: '250%', label: 'Shelf Appeal Increase', iconType: 'trending-up' },
      { value: '100%', label: 'Print Accuracy', iconType: 'check-circle' },
      { value: '98%', label: 'Client Approval Rating', iconType: 'smile' }
    ]
  },
  {
    id: 37,
    title: 'Social Media & Ad Creatives',
    category: 'Graphic Designing',
    categoryLabel: 'Social Media Visuals',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-37-laptop.webp',
    description: 'High-converting advertising banners, social carousels, and vector promotional creatives.',
    link: '/portfolio/37',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/projects/graphic_social_ad.webp',
    client: 'Apex Media & Growth',
    date: 'Feb 2026',
    services: 'Ad Creatives, Social Media Graphics, Motion Banners',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/projects/graphic_social_ad.webp'],
    subtitle: 'Creative Campaign Visuals',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/graphic_social_ad.webp',
    technologies: [
      { name: 'Photoshop', iconType: 'adobe' },
      { name: 'Illustrator', iconType: 'adobe' },
      { name: 'Canva Pro', iconType: 'canva' }
    ],
    overview: 'Creative graphic visual assets optimized for high engagement and click-through rates across Instagram, Facebook, and LinkedIn.',
    features: [
      'Brand-aligned social feed post sets',
      'High-converting story & reel covers',
      'Multi-format Google Display ad banners',
      'Custom vector icon sets and typography'
    ],
    metaGrid: [
      { label: 'Client', value: 'Apex Media', iconType: 'user' },
      { label: 'Industry', value: 'Digital Marketing & Growth', iconType: 'globe' },
      { label: 'Project Type', value: 'Ad Campaign Graphics', iconType: 'code' },
      { label: 'Duration', value: '2 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Feb 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/graphic_social_ad.webp'
    ],
    results: [
      { value: '310%', label: 'Ad Click-Through Rate', iconType: 'trending-up' },
      { value: '88%', label: 'Social Engagement Growth', iconType: 'users' },
      { value: '99%', label: 'Brand Consistency Score', iconType: 'check-circle' }
    ]
  },
  {
    id: 38,
    title: 'Corporate Print & Brochure Design',
    category: 'Graphic Designing',
    categoryLabel: 'Print & Collaterals',
    cardLaptopThumb: '/assets/images/Portfolio/card-thumbs/project-38-laptop.webp',
    description: 'High-resolution bi-fold brochures, corporate letterheads, business cards, and presentation decks.',
    link: '/portfolio/38',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/projects/graphic_stationery.webp',
    client: 'Vanguard Enterprises',
    date: 'Jan 2026',
    services: 'Brochure Design, Corporate Identity, Print Stationery',
    projectUrl: 'https://nooryak.com',
    gallery: ['/assets/images/Portfolio/projects/graphic_stationery.webp'],
    subtitle: 'Corporate Print Collaterals',
    detailHeroImage: '/assets/images/Portfolio/projects/herobanner_web.webp',
    scrollImage: '/assets/images/Portfolio/projects/graphic_stationery.webp',
    technologies: [
      { name: 'InDesign', iconType: 'adobe' },
      { name: 'Illustrator', iconType: 'adobe' },
      { name: 'Photoshop', iconType: 'adobe' }
    ],
    overview: 'Premium corporate print design ensuring cohesive brand presence across all tangible touchpoints and conference materials.',
    features: [
      'Multi-page corporate capability brochures',
      'Executive business card templates',
      'Event roll-up banners and booth graphics',
      'Vector logo guides and typography systems'
    ],
    metaGrid: [
      { label: 'Client', value: 'Vanguard Enterprises', iconType: 'user' },
      { label: 'Industry', value: 'Corporate & Finance', iconType: 'globe' },
      { label: 'Project Type', value: 'Corporate Print Collateral', iconType: 'code' },
      { label: 'Duration', value: '3 Weeks', iconType: 'clock' },
      { label: 'Status', value: 'Completed', iconType: 'check-circle' },
      { label: 'Launch Date', value: 'Jan 2026', iconType: 'calendar' }
    ],
    screenshots: [
      '/assets/images/Portfolio/projects/graphic_stationery.webp'
    ],
    results: [
      { value: '180%', label: 'Client Inquiries Generated', iconType: 'trending-up' },
      { value: '100%', label: 'CMYK Print Ready', iconType: 'check-circle' },
      { value: '98%', label: 'Executive Satisfaction', iconType: 'smile' }
    ]
  }
];
