// ── Video Editing Page — Data ─────────────────────────────────────────────

// ── Hero ─────────────────────────────────────────────────────────────────
export const VEHeroData = {
  eyebrow: "VIDEO EDITING SERVICES",
  heading1: "Edit. Enhance.",
  heading2: "Engage.",
  description:
    "We turn raw footage into powerful visual stories that captivate your audience and deliver results.",
  cta1: { label: "View Our Work", href: "#featured-work" },
  cta2: { label: "Let's Talk", href: "/contact" },
  badges: [
    { icon: "fa-solid fa-video",       label: "Cinematic",      sub: "Quality" },
    { icon: "fa-regular fa-clock",     label: "Fast",           sub: "Turnaround" },
    { icon: "fa-regular fa-lightbulb", label: "Creative",       sub: "Storytelling" },
    { icon: "fa-regular fa-star",      label: "100% Satisfaction", sub: "Guaranteed" },
  ],
  image: "/assets/images/services/videoeditherobanner.png",
};

// ── Stats bar ────────────────────────────────────────────────────────────
export const VEStats = [
  { icon: "fa-solid fa-award",        value: "350+", label: "Projects Completed" },
  { icon: "fa-regular fa-face-smile", value: "98%",  label: "Client Satisfaction" },
  { icon: "fa-regular fa-star",       value: "8+",   label: "Years of Editing Experience" },
  { icon: "fa-solid fa-chart-column", value: "50+",  label: "Industries Served" },
];

// ── Services (grid – 6 cards) ─────────────────────────────────────────────
export const VEServices = [
  {
    icon: "fa-brands fa-youtube",
    color: "#e53e3e",
    bg: "rgba(229,62,62,0.08)",
    title: "YouTube Video Editing",
    description: "High-quality edits that keep your audience watching and coming back.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    color: "#3182ce",
    bg: "rgba(49,130,206,0.08)",
    title: "Short Form Video Editing",
    description: "Dynamic Shorts, TikToks – fast-paced edits that grab attention instantly.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-briefcase",
    color: "#38a169",
    bg: "rgba(56,161,105,0.08)",
    title: "Corporate Video Editing",
    description: "Polished videos for business, training, presentations, and brand storytelling.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-camera",
    color: "#805ad5",
    bg: "rgba(128,90,213,0.08)",
    title: "Vlog Editing",
    description: "Engaging vlog edits with smooth cuts, transitions, and effects.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-layer-group",
    color: "#dd6b20",
    bg: "rgba(221,107,32,0.08)",
    title: "Motion Graphics & Titles",
    description: "Dynamic animations, lower thirds, intros, and creative titles.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-palette",
    color: "#d53f8c",
    bg: "rgba(213,63,140,0.08)",
    title: "Color Grading",
    description: "Cinematic color correction and grading for a professional look.",
    link: "/404",
  },
];

// ── All Services (for load-more) ─────────────────────────────────────────
export const VEAllServices = [
  ...VEServices,
  {
    icon: "fa-solid fa-circle-play",
    color: "#2b6cb0",
    bg: "rgba(43,108,176,0.08)",
    title: "Ad & Promo Videos",
    description: "Compelling promotional content designed to convert viewers into customers.",
    link: "/404",
  },
  {
    icon: "fa-solid fa-music",
    color: "#c05621",
    bg: "rgba(192,86,33,0.08)",
    title: "Podcast Video Editing",
    description: "Clean cuts, visuals, and captions that elevate your podcast video content.",
    link: "/404",
  },
];

// ── Portfolio ─────────────────────────────────────────────────────────────
export const VEPortfolio = [
  {
    image: "/assets/images/services/work1.png",
    title: "Beyond Limits",
    category: "YouTube",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work2.png",
    title: "Explore The World",
    category: "Vlogs",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work3.png",
    title: "Product Launch",
    category: "Ads",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work4.png",
    title: "Fitness Motivation",
    category: "Reels & Shorts",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work5.png",
    title: "Corporate Promo",
    category: "Corporate",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work2.png",
    title: "Cinematic Wedding Film",
    category: "Vlogs",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work1.png",
    title: "Tech Review",
    category: "YouTube",
    hasPlay: true,
  },
  {
    image: "/assets/images/services/work3.png",
    title: "Food Stories",
    category: "Reels & Shorts",
    hasPlay: true,
  },
];

// ── Tools ─────────────────────────────────────────────────────────────────
export const VETools = [
  { icon: "/assets/images/services/icons/premiere.png",     label: "Premiere Pro",   customClass: "tool-pr" },
  { icon: "/assets/images/services/icons/after_effect.png", label: "After Effects",  customClass: "tool-ae" },
  { icon: "/assets/images/services/icons/davinci.svg",       label: "DaVinci Resolve",customClass: "tool-da" },
  { icon: "/assets/images/services/icons/photoshop.png",    label: "Photoshop",      customClass: "tool-ps" },
  { icon: "/assets/images/services/icons/audition.svg",      label: "Audition",       customClass: "tool-au" },
  { icon: "/assets/images/services/icons/blender_icon.png", label: "Blender",        customClass: "tool-bl" },
  { icon: "/assets/images/services/icons/finalcut.svg",      label: "Final Cut Pro",  customClass: "tool-fc" },
  { icon: "/assets/images/services/icons/mediaencoder.svg",  label: "Media Encoder",  customClass: "tool-me" },
];

// ── Reviews ───────────────────────────────────────────────────────────────
export const VEReviews = [
  {
    rating: 5,
    quote:
      "Nooryak turned our raw footage into a stunning video that truly represents our brand. Highly recommended!",
    author: "Rohit Mehta",
    role: "Founder, Urban Style",
    logoText: "URBAN STYLE",
  },
  {
    rating: 5,
    quote:
      "Their creativity, attention to detail and quick turnaround are unmatched. Amazing experience!",
    author: "Sneha Kapoor",
    role: "Marketing Head, GreenBite Foods",
    logoText: "GreenBite",
  },
  {
    rating: 5,
    quote:
      "Professional team, cinematic quality, and great communication throughout the project.",
    author: "Arjun Verma",
    role: "CEO, TechNova Solutions",
    logoText: "TechNova",
  },
  {
    rating: 5,
    quote:
      "The color grading and motion titles they added completely transformed our corporate video!",
    author: "Nisha Rao",
    role: "Director, Pixels & Paint",
    logoText: "PixelsPaint",
  },
  {
    rating: 5,
    quote:
      "Outstanding editing quality. The reels they created gave our brand a massive social media boost.",
    author: "Kabir Singh",
    role: "VP of Product, FinFlow",
    logoText: "FinFlow",
  },
];

// ── CTA ───────────────────────────────────────────────────────────────────
export const VECTA = {
  title1: "Let's Create Videos That",
  titleHighlight: "Leave An Impact.",
  description:
    "Share your ideas with us and let our editing experts turn your footage into something extraordinary.",
  cta: { label: "Start Your Project", href: "/contact" },
};
