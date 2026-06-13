import { Images } from "@/utils/Images";

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const SoftwareDevelopmentHeroData = {
  label: "SOFTWARE DEVELOPMENT",
  title: {
    line1: "Custom Software.",
    line2: "Built for Performance.",
    highlight: "Designed for Growth.",
  },
  description:
    "We build scalable, secure, and future-ready software solutions that help businesses in Chennai and across India automate processes, improve efficiency, and drive real growth.",
  buttons: [
    { text: "Explore Our Solutions", link: "#", type: "primary" },
    { text: "Let's Talk", link: "#", type: "secondary" },
  ],
  features: [
    { icon: "fa-solid fa-screwdriver-wrench", text: "Custom Solutions" },
    { icon: "fa-solid fa-layer-group", text: "Scalable Architecture" },
    { icon: "fa-solid fa-shield-halved", text: "Secure & Reliable" },
    { icon: "fa-solid fa-arrows-spin", text: "Agile Approach" },
  ],
  image: Images.softwaredevelopment1,
};

// ─── Our Services (dual-card) ─────────────────────────────────────────────────
export const sdSectionMeta = {
  label: "WHAT WE OFFER",
  heading: "Comprehensive Software Development Services",
  subheading:
    "From idea to deployment, we offer end-to-end software development services that are tailored to your business needs and future goals.",
};

export const sdDualServices = [
  {
    icon: "</>",
    iconBg: "#f4510b",
    title: "Software Development",
    description:
      "Custom, scalable, and secure software solutions built with modern technologies to drive your business forward.",
    features: [
      "Web Application Development",
      "Mobile Application Development",
      "Enterprise Software Solutions",
      "SaaS Product Development",
    ],
    link: "/services/submenu/software-development/software-development",
    linkText: "Explore Software Development",
    image: Images.software_development,
  },
  {
    icon: "AI",
    iconBg: "#f4510b",
    title: "AI Automations",
    description:
      "Intelligent automation solutions that streamline workflows, reduce manual efforts, and boost productivity using AI.",
    features: [
      "Workflow Automation",
      "AI Chatbots & Assistants",
      "Process Optimization",
      "Integration & API Automation",
    ],
    link: "/services/submenu/software-development/ai-automations",
    linkText: "Explore AI Automations",
    image: Images.aiautomation,
  },
  {
    icon: "MLM",
    iconBg: "#f4510b",
    title: "MLM Software Development",
    description:
      "Feature-rich, secure, and scalable MLM software solutions for direct selling businesses — Binary, Unilevel, Matrix, and more.",
    features: [
      "Unilevel & Binary Plan Support",
      "Real-time Commission Engine",
      "Genealogy Tree & Downline View",
      "Multi-Wallet Payout System",
    ],
    link: "/services/submenu/mlm",
    linkText: "Explore MLM Software",
    image: Images.mlmherobanner,
  },
];

// ─── Technologies ─────────────────────────────────────────────────────────────
export const sdTechMeta = {
  label: "TECHNOLOGIES WE WORK WITH",
  heading: "Modern Technologies for Future-Ready Solutions",
};

export const sdTechnologies = [
  { name: "React",   icon: Images.icon_react,   color: "#61DAFB" },
  { name: "Next.js", icon: Images.icon_nextjs,  color: "#000000" },
  { name: "Vue.js",  icon: Images.icon_vuejs,   color: "#4FC08D" },
  { name: "Angular", icon: Images.icon_angular, color: "#DD0031" },
  { name: "Node.js", icon: Images.icon_nodejs,  color: "#339933" },
  { name: "Python",  icon: Images.icon_python,  color: "#3776AB" },
  { name: "PHP",     icon: Images.icon_php,     color: "#777BB4" },
  { name: "Laravel", icon: Images.icon_laravel, color: "#FF2D20" },
  { name: ".NET",    icon: Images.icon_dotnet,  color: "#512BD4" },
  { name: "AWS",     icon: Images.icon_aws,     color: "#FF9900" },
  { name: "Docker",  icon: Images.icon_docker,  color: "#2496ED" },
  { name: "MongoDB", icon: Images.icon_mongodb, color: "#47A248" },
];

// ─── Process ──────────────────────────────────────────────────────────────────
export const sdProcessMeta = {
  label: "OUR DEVELOPMENT PROCESS",
  heading: "A Proven Process for Successful Delivery",
};

export const sdProcessSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your ideas, requirements, and business goals.",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    number: "02",
    title: "Plan",
    description: "We create a roadmap and strategy tailored to your vision.",
    icon: "fa-solid fa-clipboard-list",
  },
  {
    number: "03",
    title: "Design",
    description: "Our UI/UX experts craft intuitive and engaging experiences.",
    icon: "fa-solid fa-pen-ruler",
  },
  {
    number: "04",
    title: "Develop",
    description: "We build scalable, secure, and high-performance solutions.",
    icon: "fa-solid fa-code",
  },
  {
    number: "05",
    title: "Test",
    description: "Rigorous testing ensures quality, security, and seamless performance.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    number: "06",
    title: "Deploy & Support",
    description: "We deploy your solution and provide ongoing maintenance and support.",
    icon: "fa-solid fa-rocket",
  },
];

// ─── Why Choose ───────────────────────────────────────────────────────────────
export const sdWhyChooseMeta = {
  label: "WHY CHOOSE NOORYAK",
  heading: "We Build More Than Software – We Build Success",
  subheading:
    "Our solutions are designed to engage your audience, streamline your operations, and fuel your business growth.",
  ctaText: "Why Choose Us",
  ctaLink: "#",
};

export const sdWhyChooseItems = [
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Custom Solutions",
    description: "Tailored software that fits your unique business needs.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Scalable Architecture",
    description: "Solutions built to grow with your business seamlessly.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Secure & Reliable",
    description: "We prioritize security and performance in every solution.",
  },
  {
    icon: "fa-solid fa-rotate",
    title: "Agile & Transparent",
    description: "We follow agile practices and keep you updated at every step.",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const sdStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50M+", label: "Users Impacted" },
  { value: "10+", label: "Years of Experience" },
];

export const sdCtaBanner = {
  heading: "Have an Idea for Your Next Software Solution?",
  subheading:
    "Let's turn your vision into powerful software that drives real business results.",
  ctaText: "Start a Project Now",
  ctaLink: "#",
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const sdTestimonialsMeta = {
  label: "WHAT OUR CLIENTS SAY",
  heading: "Trusted by Businesses Across Chennai and India",
};

export const sdTestimonials = [
  {
    quote: "Nooryak Technologies delivered our custom software on time with excellent quality. Their team understood our needs perfectly.",
    name: "Ramesh Kumar",
    title: "CEO, Chennai FinTech",
    image: Images.avaterOne,
  },
  {
    quote: "Their AI automation solution reduced our manual efforts by 70% and improved overall productivity. Highly recommended!",
    name: "Priya Nair",
    title: "CTO, HealthCare Chennai",
    image: Images.avaterTwo,
  },
  {
    quote: "Professional, reliable, and innovative team. Nooryak is our go-to partner for all software development needs.",
    name: "Arun Srinivasan",
    title: "Director, Retail Solutions",
    image: Images.avaterThree,
  },
  {
    quote: "Working with Nooryak was a game changer. They delivered beyond our expectations with great attention to detail.",
    name: "Kavitha Rajan",
    title: "Founder, EduTech Startup",
    image: Images.avaterFour,
  },
  {
    quote: "Their team is highly skilled and communicative. The project was delivered on time and within budget.",
    name: "Suresh Babu",
    title: "MD, Logistics Corp",
    image: Images.avaterFive,
  },
];
