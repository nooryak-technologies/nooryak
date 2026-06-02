// ────────────────────────────────────────────────
// socialmedia.ts — All Social Media Marketing Page Data
// ────────────────────────────────────────────────

// ── Hero ─────────────────────────────────────────
export const SMHeroData = {
  label: "SOCIAL MEDIA MARKETING",
  title: {
    line1: "Social Media Marketing That Builds Brands and",
    highlight: "Drives Growth.",
  },
  description:
    "We create data-driven social media strategies that increase visibility, spark engagement, generate quality leads, and convert followers into loyal customers.",
  buttons: [
    { text: "Get Social Media Strategy", link: "/contact", type: "primary" },
    { text: "Let's Talk", link: "/contact", type: "secondary" },
  ],
  dashboardMetrics: [
    { label: "Reach",           value: "1.25M",  change: "+38.4%", positive: true },
    { label: "Engagement",      value: "78.6K",  change: "+44.2%", positive: true },
    { label: "Clicks",          value: "23.4K",  change: "+29.1%", positive: true },
    { label: "Leads",           value: "4.2K",   change: "+36.8%", positive: true },
    { label: "Engagement Rate", value: "5.6%",   change: "+34.2%", positive: true },
  ],
  floatingCards: [
    { platform: "facebook",  color: "#1877F2" },
    { platform: "instagram", color: "#E1306C" },
    { platform: "youtube",   color: "#FF0000" },
    { platform: "linkedin",  color: "#0A66C2" },
    { platform: "twitter",   color: "#1DA1F2" },
  ],
};

// ── Stats ─────────────────────────────────────────
export const SMStats = [
  { icon: "bi bi-rocket-takeoff", number: "1,200+",      label: "Campaigns Managed" },
  { icon: "bi bi-emoji-smile",    number: "98%",          label: "Client Satisfaction" },
  { icon: "bi bi-graph-up-arrow", number: "300%+",        label: "Avg. Engagement Growth" },
  { icon: "bi bi-layers",         number: "ROI-Focused",  label: "Strategy" },
];

// ── Services ─────────────────────────────────────
export const SMServices = [
  {
    platform: "facebook",
    title: "Facebook Marketing",
    description: "Build brand awareness, engage audiences and drive conversions with targeted Facebook strategies.",
    link: "#",
  },
  {
    platform: "instagram",
    title: "Instagram Marketing",
    description: "Grow your brand with stunning content, stories, reels and engaging community management.",
    link: "#",
  },
  {
    platform: "youtube",
    title: "Youtube Marketing",
    description: "Increase visibility and grow your YouTube content and channel growth.",
    link: "#",
  },
  {
    platform: "linkedin",
    title: "LinkedIn Marketing",
    description: "Generate B2B leads, build professional connections and position your brand as an industry leader.",
    link: "#",
  },
  {
    platform: "twitter",
    title: "Twitter Marketing",
    description: "Engage in real-time conversations, build community and drive traffic with smart tweet strategies.",
    link: "#",
  },
  {
    platform: "ads",
    title: "Social Media Advertising",
    description: "Run high-performing paid campaigns that deliver measurable results and higher ROI.",
    link: "#",
  },
  {
    platform: "schedule",
    title: "Social Media Post Scheduling",
    description: "Plan, schedule and publish content consistently across all platforms to maximize engagement.",
    link: "#",
  },
];

// ── Why Choose ───────────────────────────────────
export const SMWhyChoose = [
  {
    icon: "fas fa-bullseye",
    title: "Data-Driven Strategy",
    description: "We use insights and analytics to craft strategies that deliver real results.",
  },
  {
    icon: "fas fa-pen-nib",
    title: "Creative Content Planning",
    description: "Engaging content tailored to your audience and brand voice.",
  },
  {
    icon: "fas fa-ad",
    title: "Paid Social Expertise",
    description: "Smart ad targeting to reach audiences as you always know your ROI.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Transparent Reporting",
    description: "Detailed reports with clear data so you always know your ROI.",
  },
  {
    icon: "fas fa-users",
    title: "Dedicated Specialists",
    description: "Experienced social media experts dedicated to your brand's success.",
  },
  {
    icon: "fas fa-sync-alt",
    title: "Brand Consistency",
    description: "We ensure consistent messaging and visual identity across all platforms.",
  },
];

// ── Process ──────────────────────────────────────
export const SMProcess = {
  tag: "OUR PROCESS",
  title: "A Proven Process for Social Success",
  steps: [
    {
      number: "01",
      icon: "fas fa-search",
      title: "Audit & Research",
      description: "We analyse your brand, audience and competition to find growth opportunities.",
    },
    {
      number: "02",
      icon: "fas fa-map",
      title: "Strategy Development",
      description: "We create a customised social media strategy aligned with your goals.",
    },
    {
      number: "03",
      icon: "fas fa-calendar-alt",
      title: "Content Planning",
      description: "We create high-performing content calendars that attract and engage your audience.",
    },
    {
      number: "04",
      icon: "fas fa-rocket",
      title: "Campaign Launch",
      description: "We execute and manage campaigns across the right and top platforms.",
    },
    {
      number: "05",
      icon: "fas fa-chart-bar",
      title: "Optimisation & Reporting",
      description: "We monitor performance, optimise regularly and report results.",
    },
  ],
};

// ── What You Get ─────────────────────────────────
export const SMWhatYouGet = {
  heading: "Real Performance. Real Growth.",
  subheading: "Our strategies are focused on metrics that drive your business forward.",
  features: [
    "Full social media strategy & execution",
    "High-converting ad campaign management",
    "Engaging content & community management",
    "Lead generation & conversion optimisation",
    "Comprehensive analytics & reporting",
    "Continuous optimisation for better ROI",
  ],
  metrics: [
    { label: "Engagement Growth", value: "+312%", change: "", positive: true },
    { label: "Followers Growth",  value: "+45.6K", change: "32.8%", positive: true },
    { label: "Engagement Rate",   value: "6.4%",   change: "41.3%", positive: true },
    { label: "Reach",             value: "2.3M",   change: "27.6%", positive: true },
    { label: "Clicks",            value: "120.5K", change: "29.1%", positive: true },
    { label: "Leads Generated",   value: "8.6K",   change: "34.7%", positive: true },
    { label: "Cost Per Lead",     value: "$1.82",  change: "23.4%", positive: false },
  ],
  chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  chartData:   [120, 180, 150, 280, 320, 410, 480, 560],
  trustedBy: ["Google Partner", "Meta", "HubSpot", "Clutch", "GoodFirms", "Shopify Partners"],
};

// ── Who Is This For ──────────────────────────────
export const SMWhoFor = [
  {
    icon: "fas fa-rocket",
    title: "Startups",
    description: "Build brand presence, grow your audience to find growth up.",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "eCommerce Brands",
    description: "Increase product visibility, drive sales, and build customer loyalty with social media.",
  },
  {
    icon: "fas fa-briefcase",
    title: "Service Businesses",
    description: "Generate leads, build trust, and grow your service business online.",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Local Businesses",
    description: "Get found by local customers and attract more footfall and inquiries.",
  },
  {
    icon: "fas fa-building",
    title: "B2B Companies",
    description: "Build authority, generate high-quality leads and nurture relationships.",
  },
];

// ── FAQ ──────────────────────────────────────────
export const SMFAQ = [
  {
    question: "How long does it take to see results from social media marketing?",
    answer: "Most clients see measurable improvements in engagement and reach within 30–60 days. Significant lead generation and ROI results typically appear within 3–6 months of consistent strategy execution.",
  },
  {
    question: "Which social media platforms should my business focus on?",
    answer: "It depends on your target audience. B2B businesses benefit most from LinkedIn, while B2C brands typically see strong results on Instagram, Facebook, and YouTube. We help you identify the right mix.",
  },
  {
    question: "How do you measure the success of social media campaigns?",
    answer: "We track KPIs including reach, engagement rate, follower growth, click-through rate, lead generation, and ROI. You receive detailed monthly reports with actionable insights.",
  },
  {
    question: "Do you run paid ads on social media?",
    answer: "Yes. We manage paid social campaigns on Facebook, Instagram, LinkedIn, YouTube, and Twitter — optimised for your goals whether that's brand awareness, leads, or direct sales.",
  },
];

// ── CTA ──────────────────────────────────────────
export const SMCTA = {
  title: "Ready to Grow Through",
  titleAccent: "Social Media Marketing?",
  description:
    "Let's build a strategy that grows your brand, engages your audience and drives meaningful results.",
  btnText: "Get Social Media Strategy",
  btnLink: "/contact",
  btnSecondary: "Let's Talk",
};
