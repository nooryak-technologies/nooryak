// ────────────────────────────────────────────────
// data.ts  — All Digital Marketing Page Data
// ────────────────────────────────────────────────

// ── Hero ─────────────────────────────────────────
export const DMHeroData = {
  label: "DIGITAL MARKETING",
  title: {
    line1: "Data-Driven Digital Marketing Built for",
    highlight: "Business Growth.",
  },
  description:
    "We create data-backed strategies that boost your online visibility, generate quality leads, increase conversions, and drive long-term business growth across every digital channel.",
  buttons: [
    { text: "Get Marketing Strategy", link: "/contact", type: "primary" },
    { text: "Let's Talk", link: "/contact", type: "secondary" },
  ],
  floatingCards: [
    { label: "Organic Traffic", value: "150%", sub: "Increase" },
    { label: "Top 3 Rankings", value: "320+", sub: "Keywords" },
    { label: "Conversions", value: "2,450+", sub: "This Month" },
  ],
  dashboardMetrics: [
    { label: "Website Traffic", value: "24.8K", change: "+48.2%", positive: true },
    { label: "Leads Generated", value: "1,256", change: "+36.5%", positive: true },
    { label: "Ad Spend ROI", value: "4.8x", change: "Average ROAS", positive: true },
    { label: "Conversion Rate", value: "4.35%", change: "+16.7%", positive: true },
    { label: "ROAS", value: "4.8x", change: "+50.1%", positive: true },
    { label: "Engagement", value: "8.6%", change: "+25.3%", positive: true },
  ],
};

// ── Stats ─────────────────────────────────────────
export const DMStats = [
  { icon: "fas fa-rocket",      number: "200+",        label: "Campaigns Managed" },
  { icon: "far fa-smile",       number: "98%",         label: "Client Satisfaction" },
  { icon: "fas fa-search",      number: "SEO-Driven",  label: "Approach" },
  { icon: "fas fa-chart-bar",   number: "ROI-Focused", label: "Strategy" },
];

// ── Services ─────────────────────────────────────
export const DMServices = [
  {
    icon: "fas fa-search",
    title: "Search Engine Optimization",
    description: "Improve rankings, drive organic traffic, and grow your online visibility.",
    link: "#",
  },
  {
    icon: "fas fa-ad",
    title: "Search Engine Marketing",
    description: "Target the right audience with high-converting paid search campaigns.",
    link: "#",
  },
  {
    icon: "fas fa-share-nodes",
    title: "Social Media Marketing",
    description: "Build brand awareness and engagement across top social platforms.",
    link: "#",
  },
  {
    icon: "fas fa-comment-sms",
    title: "SMS Marketing",
    description: "Reach customers instantly with personalized SMS campaigns.",
    link: "#",
  },
  {
    icon: "fab fa-facebook",
    title: "Facebook Marketing",
    description: "Create targeted Facebook campaigns that drive leads and sales.",
    link: "#",
  },
  {
    icon: "fas fa-pen-nib",
    title: "Content Marketing",
    description: "Engaging content that attracts, educates, and converts your audience.",
    link: "#",
  },
  {
    icon: "fas fa-file-alt",
    title: "On-Page Optimization",
    description: "Optimize pages, titles, meta tags, and content for better rankings.",
    link: "#",
  },
  {
    icon: "fas fa-link",
    title: "Off-Page Optimization",
    description: "Build authority with backlinks, citations, and brand mentions.",
    link: "#",
  },
  {
    icon: "fas fa-code",
    title: "Technical SEO",
    description: "Fix technical issues and enhance site speed, crawlability, and indexing.",
    link: "#",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Branding",
    description: "Build a strong brand identity that connects and builds trust.",
    link: "#",
  },
];

// ── Why Choose ───────────────────────────────────
export const DMWhyChoose = [
  {
    icon: "fas fa-bullseye",
    title: "Research-Driven Strategy",
    description: "We analyze, research, and create data-backed strategies that deliver measurable results.",
  },
  {
    icon: "fas fa-filter",
    title: "Conversion-Focused Campaigns",
    description: "Every campaign is optimized to drive quality leads and maximize conversions.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Multi-Channel Expertise",
    description: "From SEO to Social, we manage all channels for maximum brand exposure.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Transparent Reporting",
    description: "Clear reports, real-time data, and complete transparency at every step.",
  },
  {
    icon: "fas fa-users",
    title: "Dedicated Specialists",
    description: "A skilled team of experts focused on your success and growth.",
  },
  {
    icon: "fas fa-rocket",
    title: "Scalable Growth Solutions",
    description: "Flexible strategies that scale with your business at every stage.",
  },
];

// ── Process ──────────────────────────────────────
export const DMProcess = {
  tag: "OUR DIGITAL MARKETING PROCESS",
  steps: [
    {
      number: "01",
      icon: "fas fa-search",
      title: "Research & Audit",
      description: "We analyze your business, audience, and competitors to identify opportunities.",
    },
    {
      number: "02",
      icon: "fas fa-map",
      title: "Strategy & Planning",
      description: "We build a customized roadmap with the right channels, goals & KPIs.",
    },
    {
      number: "03",
      icon: "fas fa-bullhorn",
      title: "Campaign Execution",
      description: "We execute data-driven campaigns across the right platforms.",
    },
    {
      number: "04",
      icon: "fas fa-chart-bar",
      title: "Optimization & Reporting",
      description: "We monitor performance, optimize & provide transparent reports regularly.",
    },
    {
      number: "05",
      icon: "fas fa-rocket",
      title: "Scale & Growth",
      description: "We scale winning campaigns to maximize ROI and drive long-term growth.",
    },
  ],
};

// ── What You Get ─────────────────────────────────
export const DMWhatYouGet = {
  heading: "What You Get With Our Digital Marketing Service",
  features: [
    "Data-driven SEO strategy & execution",
    "High-converting ad campaign management",
    "Engaging content & social media growth",
    "Lead generation & conversion optimization",
    "Comprehensive analytics & reporting",
    "Continuous optimization for better ROI",
  ],
  metrics: [
    { label: "Total Traffic", value: "24.8K", change: "+48.2%", positive: true },
    { label: "Leads", value: "1,256", change: "+36.9%", positive: true },
    { label: "Conversions", value: "2,450", change: "+41.7%", positive: true },
  ],
  revenue: { label: "Revenue", value: "$86.5K", change: "+63.2%", positive: true },
  kpis: [
    { icon: "fas fa-arrow-up",    color: "#16A34A", bg: "#DCFCE7", value: "150%", label: "Increase in Organic Traffic" },
    { icon: "fas fa-dollar-sign", color: "#FF6B2B", bg: "#FFF0EB", value: "4.8x", label: "Average ROAS" },
    { icon: "fas fa-user",        color: "#3B82F6", bg: "#EFF6FF", value: "62%",  label: "Lower Cost Per Lead" },
    { icon: "fas fa-eye",         color: "#FF6B2B", bg: "#FFF0EB", value: "93%",  label: "Better Campaign Visibility" },
  ],
};

// ── Who Is This For ──────────────────────────────
export const DMWhoFor = [
  {
    icon: "fas fa-rocket",
    title: "Startups & SaaS",
    description: "Build brand presence, drive sign-ups, and scale growth with performance marketing.",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "eCommerce Brands",
    description: "Increase product visibility, drive sales, and boost ROI across all digital channels.",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Local Businesses",
    description: "Get found by local customers and grow leads, calls, and walk-ins consistently.",
  },
  {
    icon: "fas fa-briefcase",
    title: "Service-Based Companies",
    description: "Generate quality leads, build trust, and grow your service business online.",
  },
];

// ── CTA ──────────────────────────────────────────
export const DMCTA = {
  title: "Ready to Grow with Smarter",
  titleAccent: "Digital Marketing?",
  description:
    "Partner with Nooryak Technologies and unlock the power of data-driven marketing that delivers measurable results and real business growth.",
  btnText: "Start a Marketing Project",
  btnLink: "/contact",
};
