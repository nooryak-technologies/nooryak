// ────────────────────────────────────────────────
// graphicdesign.data.ts — All Graphic Designing Page Data
// ────────────────────────────────────────────────

// ── Hero ─────────────────────────────────────────
export const GDHeroData = {
  label: "GRAPHIC DESIGN SERVICES",
  title: {
    line1: "Designs That Speak.",
    highlight: "Brands That Shine.",
  },
  description:
    "We craft powerful, visually stunning designs that build strong identities, communicate your message, and leave a lasting impression.",
  buttons: [
    { text: "View Our Work", link: "#featured-work", type: "primary" },
    { text: "Let's Talk", link: "/contact", type: "secondary" },
  ],
  badges: [
    { text: "Creative & Unique Designs", icon: "fa-solid fa-wand-magic-sparkles" },
    { text: "Brand Focused Approach", icon: "fa-solid fa-bullseye" },
    { text: "High-Quality Visuals", icon: "fa-regular fa-image" },
    { text: "Fast Turnaround Time", icon: "fa-regular fa-clock" },
  ],
};

// ── Stats ─────────────────────────────────────────
export const GDStats = [
  { icon: "fa-solid fa-briefcase",     number: "250+",  label: "Projects Completed" },
  { icon: "fa-solid fa-face-smile",    number: "98%",   label: "Client Satisfaction" },
  { icon: "fa-solid fa-star",          number: "8+",    label: "Years of Creative Experience" },
  { icon: "fa-solid fa-chart-column",  number: "50+",   label: "Industries Served" },
];

// ── Creative Capabilities ─────────────────────────
export const GDExpertise = {
  tag: "OUR EXPERTISE",
  title: "Creative Capabilities Built For Modern Brands.",
  description:
    "From startup branding to enterprise-level campaigns, we create visuals that communicate, convert, and inspire.",
  capabilities: [
    {
      icon: "fa-solid fa-pen-nib",
      color: "orange",
      title: "Brand Identity",
      description: "Logos, brand systems, typography, and visual guidelines.",
      link: "#",
    },
    {
      icon: "fa-solid fa-laptop-code",
      color: "purple",
      title: "UI/UX Design",
      description: "Modern, intuitive interfaces for websites and mobile applications.",
      link: "#",
    },
    {
      icon: "fa-solid fa-circle-play",
      color: "blue",
      title: "Motion Graphics",
      description: "Animated visuals that make your brand stand out and engage more.",
      link: "#",
    },
    {
      icon: "fa-solid fa-box-open",
      color: "green",
      title: "Packaging Design",
      description: "Creative packaging that enhances product value and shelf appeal.",
      link: "#",
    },
    {
      icon: "fa-solid fa-thumbs-up",
      color: "pink",
      title: "Social Media Creatives",
      description: "Scroll-stopping designs for posts, ads, stories, and campaigns.",
      link: "#",
    },
    {
      icon: "fa-solid fa-file-invoice",
      color: "yellow",
      title: "Marketing Collaterals",
      description: "Brochures, flyers, banners, presentations & more.",
      link: "#",
    },
  ],
};

// ── Before/After Showcases ────────────────────────
export const GDShowcases = [
  {
    image: "/assets/images/services/gdesign_showcase1.png",
    title: "Logo & Brand Identity",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    image: "/assets/images/services/gdesign_showcase2.png",
    title: "Packaging Design",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    image: "/assets/images/services/gdesign_showcase3.png",
    title: "Social Media Design",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    image: "/assets/images/services/gdesign_showcase4.png",
    title: "Web UI Design",
    beforeLabel: "Before",
    afterLabel: "After",
  },
];

// ── Tools & Technologies ──────────────────────────
export const GDTools = [
  { icon: "/assets/images/services/icons/photoshop.png",    label: "Photoshop",    customClass: "tool-ps" },
  { icon: "/assets/images/services/icons/illustrator.png",  label: "Illustrator",  customClass: "tool-ai" },
  { icon: "/assets/images/services/icons/indesign.png",     label: "InDesign",     customClass: "tool-id" },
  { icon: "/assets/images/services/icons/figma.png",        label: "Figma",        customClass: "tool-figma" },
  { icon: "/assets/images/services/icons/after_effect.png", label: "After Effects",customClass: "tool-ae" },
  { icon: "/assets/images/services/icons/premiere.png",     label: "Premiere Pro", customClass: "tool-pr" },
  { icon: "/assets/images/services/icons/blender_icon.png", label: "Blender",      customClass: "tool-blender" },
];

// ── Featured Work Portfolio ───────────────────────
export const GDPortfolio = [
  {
    image: "/assets/images/services/icons/left-containerimg1.png",
    title: "Luxury Brand Identity",
    category: "Branding",
  },
  {
    image: "/assets/images/services/icons/left-side-img2.png",
    title: "Organic Skincare Packaging",
    category: "Packaging",
  },
  {
    image: "/assets/images/services/icons/rightsideimg3.png",
    title: "Digital Marketing Agency UI",
    category: "Web Design",
  },
  {
    image: "/assets/images/services/icons/rightsiderfirstimg.png",
    title: "Edge Brand Business Cards",
    category: "Branding",
  },
  {
    image: "/assets/images/services/icons/rightsideimg.png",
    title: "Modern Co-Working Billboard",
    category: "Social Media",
  },
  {
    image: "/assets/images/services/icons/rightsideimg2.png",
    title: "Mobile App Financial UI",
    category: "Web Design",
  },
];

// ── Testimonials ──────────────────────────────────
export const GDReviews = [
  {
    rating: 5,
    quote: "Nooryak transformed our brand identity completely. The new logo and packaging designs elevated our business to a whole new level.",
    author: "Rohit Mehta",
    role: "Founder, Urban Style",
    logoText: "URBAN STYLE",
  },
  {
    rating: 5,
    quote: "Their packaging designs are outstanding! We saw a huge increase in customer attraction and engagement on store shelves.",
    author: "Sneha Kapoor",
    role: "Marketing Head, GreenBite Foods",
    logoText: "GreenBite",
  },
  {
    rating: 5,
    quote: "Highly professional team with amazing creativity. They delivered beyond our expectations and on time.",
    author: "Arjun Verma",
    role: "CEO, TechNova Solutions",
    logoText: "TechNova",
  },
  {
    rating: 5,
    quote: "Exceptional design standard and fast turnaround. They captured our brand voice perfectly on social media.",
    author: "Nisha Rao",
    role: "Director, Pixels & Paint",
    logoText: "PixelsPaint",
  },
  {
    rating: 5,
    quote: "Their UI/UX team redesigned our platform to be incredibly intuitive and modern. User engagement went up by 40%.",
    author: "Kabir Singh",
    role: "VP of Product, FinFlow",
    logoText: "FinFlow",
  }
];

// ── CTA Banner ────────────────────────────────────
export const GDCTA = {
  title: "Let's Build A Brand",
  titleAccent: "People Remember.",
  description:
    "Share your ideas with us and let our creative team design visuals that drive impact and grow your business.",
  btnText: "Start Your Project",
  btnLink: "/contact",
};

// ── Complete Service List ─────────────────────────
export const GDAllServices = [
  {
    icon: "fa-solid fa-pen-fancy",
    title: "Logo Designs",
    description: "Unique and memorable logo designs that represent your brand identity.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-box",
    title: "Package Designs",
    description: "Creative packaging designs that grab attention and make your product stand out.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-share-nodes",
    title: "Social Media Designs",
    description: "Engaging social media graphics that boost your online presence.",
    link: "/contact"
  },
  {
    icon: "fa-regular fa-file-pdf",
    title: "Brochure Designs",
    description: "Professional brochures that effectively showcase your business.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-paste",
    title: "Pamphlet Designs",
    description: "Informative pamphlets designed to deliver your message clearly.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-laptop",
    title: "Website Banners",
    description: "Attractive website banners that grab attention and drive clicks.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-rectangle-ad",
    title: "Banner Designs",
    description: "Custom banner designs for promotions and advertisements.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-cube",
    title: "2D & 3D Designs",
    description: "Stunning 2D and 3D designs that bring your ideas to life.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-chalkboard",
    title: "Standee Designs",
    description: "Eye-catching standee designs for events and promotions.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-address-card",
    title: "Creative Business Card Designs",
    description: "Professional business card designs that leave a lasting impression.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Annual Report Design",
    description: "Well-structured annual report designs that communicate success.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-calendar-check",
    title: "End To End Event Designs",
    description: "Complete event branding and design solutions from start to finish.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "CSR Report Design",
    description: "Impactful CSR report designs that highlight your social responsibility.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-chess",
    title: "Strategy Report Design",
    description: "Strategic report designs that present insights effectively.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Catalogue Designs",
    description: "Elegant catalogue designs that showcase your products and services.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-utensils",
    title: "Menu Designs",
    description: "Creative menu designs that enhance the dining experience from start to finish.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-heart",
    title: "Marriage Card Designs",
    description: "Beautiful and elegant wedding card designs for your special day.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-image",
    title: "Hoarding/Billboard Designs",
    description: "Bold and impactful hoarding designs that reach a wider audience.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-palette",
    title: "Illustrations",
    description: "Custom illustrations that add creativity to your projects.",
    link: "/contact"
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Branding",
    description: "Complete branding solutions to build a strong and recognizable brand.",
    link: "/contact"
  }
];
