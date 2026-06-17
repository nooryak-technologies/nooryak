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
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Nexora – Brand Identity',
    category: 'Graphic Designing',
    description: 'Brand identity design for a tech startup including logo and stationery.',
    link: '/portfolio/1',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/brand_identity.png',
    client: 'Nexora Tech',
    date: 'Jan 2026',
    services: 'Brand Identity, Logo Design, Stationery',
    projectUrl: 'https://nexora.io',
    gallery: [
      '/assets/images/Portfolio/brand_identity.png',
      '/assets/images/Portfolio/vector_illustration.png',
      '/assets/images/Portfolio/character_design.png',
      '/assets/images/Portfolio/seo_campaign.png'
    ]
  },
  {
    id: 2,
    title: 'Vectra – Brand Illustration',
    category: 'Graphic Designing',
    description: 'A set of custom vector illustrations for a digital agency\'s branding.',
    link: '/portfolio/2',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/vector_illustration.png',
    client: 'Vectra Agency',
    date: 'Feb 2026',
    services: 'Vector Illustration, Visual Identity',
    projectUrl: 'https://vectra.agency',
    gallery: [
      '/assets/images/Portfolio/vector_illustration.png',
      '/assets/images/Portfolio/brand_identity.png',
      '/assets/images/Portfolio/character_design.png',
      '/assets/images/Portfolio/music_app.png'
    ]
  },
  {
    id: 3,
    title: 'Artify – Character Design',
    category: 'Graphic Designing',
    description: 'Unique character illustrations for a gaming brand storyboards.',
    link: '/portfolio/3',
    bgClass: 'bg-orange-soft',
    image: '/assets/images/Portfolio/character_design.png',
    client: 'Artify Games',
    date: 'Mar 2026',
    services: 'Character Design, 2D/3D Modeling',
    projectUrl: 'https://artifygames.com',
    gallery: [
      '/assets/images/Portfolio/character_design.png',
      '/assets/images/Portfolio/vector_illustration.png',
      '/assets/images/Portfolio/brand_identity.png',
      '/assets/images/Portfolio/furniture_store.png'
    ]
  },
  {
    id: 4,
    title: 'Finace – Banking Website',
    category: 'Website Development',
    description: 'A modern and clean banking website designed for seamless user experience.',
    link: '/portfolio/4',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/banking_website.png',
    client: 'Finace Group',
    date: 'Dec 2025',
    services: 'Web Development, UX/UI Design, Frontend',
    projectUrl: 'https://finace-bank.com',
    gallery: [
      '/assets/images/Portfolio/banking_website.png',
      '/assets/images/Portfolio/photography_website.png',
      '/assets/images/Portfolio/furniture_store.png',
      '/assets/images/Portfolio/dashboard_software.png'
    ]
  },
  {
    id: 5,
    title: 'Lenscope – Photography Website',
    category: 'Website Development',
    description: 'A photography website design to showcase visual stories and portfolio.',
    link: '/portfolio/5',
    bgClass: 'bg-nature',
    image: '/assets/images/Portfolio/photography_website.png',
    client: 'Lenscope Studio',
    date: 'Oct 2025',
    services: 'Web Development, Web Design, CMS',
    projectUrl: 'https://lenscopestudio.com',
    gallery: [
      '/assets/images/Portfolio/photography_website.png',
      '/assets/images/Portfolio/banking_website.png',
      '/assets/images/Portfolio/furniture_store.png',
      '/assets/images/Portfolio/music_app.png'
    ]
  },
  {
    id: 6,
    title: 'Furni – E-commerce Store',
    category: 'Ecommerce',
    description: 'A fully responsive e-commerce website with smooth shopping experience.',
    link: '/portfolio/6',
    bgClass: 'bg-mint',
    image: '/assets/images/Portfolio/furniture_store.png',
    client: 'Furni Decor',
    date: 'Nov 2025',
    services: 'E-commerce, Shopify, Frontend Development',
    projectUrl: 'https://furnidecor.store',
    gallery: [
      '/assets/images/Portfolio/furniture_store.png',
      '/assets/images/Portfolio/banking_website.png',
      '/assets/images/Portfolio/photography_website.png',
      '/assets/images/Portfolio/music_app.png'
    ]
  },
  {
    id: 7,
    title: 'Melody – Music App UI',
    category: 'Apps',
    description: 'A mobile app UI design for music streaming with modern and elegant look.',
    link: '/portfolio/7',
    bgClass: 'bg-teal',
    image: '/assets/images/Portfolio/music_app.png',
    client: 'Melody Inc.',
    date: 'Jan 2026',
    services: 'Mobile App Design, UX Research, Prototyping',
    projectUrl: 'https://melodyapp.fm',
    gallery: [
      '/assets/images/Portfolio/music_app.png',
      '/assets/images/Portfolio/dashboard_software.png',
      '/assets/images/Portfolio/gemini_project.png',
      '/assets/images/Portfolio/furniture_store.png'
    ]
  },
  {
    id: 8,
    title: 'Dasho – Dashboard UI',
    category: 'Softwares',
    description: 'A clean dashboard UI design for analytics and data visualization.',
    link: '/portfolio/8',
    bgClass: 'bg-slate',
    image: '/assets/images/Portfolio/dashboard_software.png',
    client: 'Dasho Analytics',
    date: 'Sep 2025',
    services: 'SaaS Design, Data Visualization',
    projectUrl: 'https://dasho.io',
    gallery: [
      '/assets/images/Portfolio/dashboard_software.png',
      '/assets/images/Portfolio/gemini_project.png',
      '/assets/images/Portfolio/music_app.png',
      '/assets/images/Portfolio/banking_website.png'
    ]
  },
  {
    id: 9,
    title: 'Gemini AI Integration Workspace',
    category: 'Softwares',
    description: 'A cutting-edge AI assistant workspace powered by Google Gemini to automate developer workflows.',
    link: '/portfolio/9',
    bgClass: 'bg-purple-soft',
    image: '/assets/images/Portfolio/gemini_project.png',
    client: 'Google Developer Group',
    date: 'Feb 2026',
    services: 'AI Integration, Workspace Design, React Native',
    projectUrl: 'https://gemini-workspace.dev',
    gallery: [
      '/assets/images/Portfolio/gemini_project.png',
      '/assets/images/Portfolio/dashboard_software.png',
      '/assets/images/Portfolio/music_app.png',
      '/assets/images/Portfolio/seo_campaign.png'
    ]
  },
  {
    id: 10,
    title: 'AeroDrone – Promotional Video',
    category: 'Videos',
    description: 'A cinematic aerial drone promotional video showcasing brand architecture.',
    link: '/portfolio/10',
    bgClass: 'bg-mint',
    image: '/assets/images/Portfolio/drone_video.png',
    client: 'AeroDrone Flight Co.',
    date: 'Jan 2026',
    services: 'Video Editing, Drone Cinematography, Sound Design',
    projectUrl: 'https://aerodrone.video',
    videos: [
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-light-12821-large.mp4',
        type: 'reel',
        title: 'Vertical Cinematic Reel'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-42582-large.mp4',
        type: 'reel',
        title: 'Neon Dancer Story'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-holding-a-smartphone-showing-a-map-41774-large.mp4',
        type: 'reel',
        title: 'Mobile Navigation'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-dj-playing-music-at-a-club-51840-large.mp4',
        type: 'reel',
        title: 'DJ Club Music'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-beautiful-young-woman-smiling-at-the-camera-51897-large.mp4',
        type: 'reel',
        title: 'Model Smile'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-drones-flying-over-a-green-mountain-forest-41662-large.mp4',
        type: 'video',
        title: 'Mountain Forest Flyover'
      },
      {
        src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-forest-and-river-41669-large.mp4',
        type: 'video',
        title: 'River and Woods Aerial'
      }
    ]
  },
  {
    id: 11,
    title: 'Apex SEO – Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Data-driven SEO and PPC campaign that increased organic search traffic by 150%.',
    link: '/portfolio/11',
    bgClass: 'bg-lavender',
    image: '/assets/images/Portfolio/seo_campaign.png',
    client: 'Apex Ltd.',
    date: 'Nov 2025',
    services: 'SEO, SEM, Social Media Marketing',
    projectUrl: 'https://apexseo.agency',
    gallery: [
      '/assets/images/Portfolio/seo_campaign.png',
      '/assets/images/Portfolio/dashboard_software.png',
      '/assets/images/Portfolio/banking_website.png',
      '/assets/images/Portfolio/gemini_project.png'
    ]
  }
];
