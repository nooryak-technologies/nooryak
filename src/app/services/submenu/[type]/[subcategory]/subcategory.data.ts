export interface SubcategoryData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    title: {
      line1: string;
      highlight: string;
    };
    description: string;
    buttons: { text: string; link: string; type: "primary" | "secondary" }[];
    features: { icon: string; text: string }[];
    image: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    image: string;
    features: { icon: string; title: string; description: string }[];
  };
  offerings: {
    label: string;
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  whyChoose: {
    label: string;
    title: string;
    bullets: string[];
    videoThumbnail: string;
    stats: { value: string; label: string }[];
  };
  technologies: {
    label: string;
    title: string;
    items: { name: string; icon: string }[];
  };
  process: {
    label: string;
    title: string;
    steps: { number: string; title: string; description: string; icon: string }[];
  };
  recentWork: {
    label: string;
    title: string;
    items: { title: string; tech: string; image: string; link: string }[];
  };
  reviews: {
    rating: number;
    quote: string;
    author: string;
    role: string;
    logoText: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
    btnText: string;
    btnLink: string;
  };
}

export const subcategoryDataMap: Record<string, SubcategoryData> = {
  "web-developer": {
    meta: {
      title: "Professional Web Developer Services | Nooryak Technologies",
      description: "Hire dedicated, professional web developers to build scalable, high-performance web applications tailored to your business goals."
    },
    hero: {
      label: "WEB DEVELOPMENT",
      title: {
        line1: "Professional Web Developer ",
        highlight: "Services That Build Your Digital Success"
      },
      description: "We build fast, secure, and scalable websites tailored to your business goals. Our expert developers deliver clean code, seamless user experience, and future-ready solutions.",
      buttons: [
        { text: "Start Your Project", link: "/contact", type: "primary" },
        { text: "Schedule a Call", link: "/contact", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-code", text: "Modern Technologies" },
        { icon: "fa-solid fa-laptop-code", text: "Clean & Optimized Code" },
        { icon: "fa-solid fa-network-wired", text: "Scalable Solutions" },
        { icon: "fa-solid fa-truck-delivery", text: "On-Time Delivery" }
      ],
      image: "/assets/images/services/submenu/web_developer.png"
    },
    about: {
      label: "ABOUT WEB DEVELOPER",
      title: "Turning Ideas Into Powerful Web Solutions",
      description: "Our web developers craft custom websites and web applications using the latest technologies, ensuring speed, security, scalability, and exceptional performance.",
      image: "/assets/images/services/submenu/web_developer2.png",
      features: [
        { icon: "fa-solid fa-shield-halved", title: "Clean Code", description: "Quality code that is maintainable, scalable, and standardized." },
        { icon: "fa-solid fa-users", title: "User Focused", description: "Design & develop tailored to deliver the absolute best user experience." },
        { icon: "fa-solid fa-lock", title: "Secure & Reliable", description: "Build secure websites that protect user data and your business." },
        { icon: "fa-solid fa-lightbulb", title: "Innovative", description: "We follow modern practices to deliver future-ready, performant apps." }
      ]
    },
    offerings: {
      label: "WHAT WE OFFER",
      title: "Our Web Developer Services",
      items: [
        { icon: "fa-solid fa-cubes", title: "Custom Website Development", description: "Unique websites built from the ground up tailored to your business needs." },
        { icon: "fa-solid fa-display", title: "Frontend Development", description: "Build highly responsive and interactive user interfaces with React and Next.js." },
        { icon: "fa-solid fa-database", title: "Backend Development", description: "Powerful, secure server-side solutions, databases, and business logic." },
        { icon: "fa-solid fa-circle-nodes", title: "API Development & Integration", description: "Connect third party services and custom APIs seamlessly." },
        { icon: "fa-solid fa-gauge-high", title: "Website Optimization", description: "Improve speed, performance, core web vitals, and search rankings." },
        { icon: "fa-solid fa-screwdriver-wrench", title: "Maintenance & Support", description: "Ongoing support and security updates to keep your site running smooth." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE NOORYAK TECHNOLOGIES",
      title: "We Build Websites That Drive Business Growth",
      bullets: [
        "5+ Years of Development Experience",
        "100+ Successful Projects Delivered",
        "SEO Friendly & Fast Loading Websites",
        "Mobile First & Fully Responsive Designs",
        "Scalable & Secure Architecture",
        "Dedicated Support & Ongoing Maintenance"
      ],
      videoThumbnail: "/assets/images/services/submenu/web_developer3.png",
      stats: [
        { value: "100+", label: "Projects Delivered" },
        { value: "50+", label: "Happy Clients" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Powered By Modern Web Stack",
      items: [
        { name: "HTML", icon: "/assets/images/services/icons/React.png" }, // Using react as base placeholder since we render icons dynamically
        { name: "CSS3", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "JavaScript", icon: "/assets/images/services/icons/React.png" },
        { name: "React", icon: "/assets/images/services/icons/React.png" },
        { name: "Next.js", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Node.js", icon: "/assets/images/services/icons/Node.js.png" },
        { name: "PHP", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Laravel", icon: "/assets/images/services/icons/Laravel.png" }
      ]
    },
    process: {
      label: "OUR DEVELOPMENT PROCESS",
      title: "How We Bring Your Ideas to Life",
      steps: [
        { number: "01", title: "Requirement Analysis", description: "Understanding your project goals, scope, and audience.", icon: "fa-solid fa-magnifying-glass" },
        { number: "02", title: "Planning & Strategy", description: "Creating sitemaps, wireframes, and technological roadmap.", icon: "fa-solid fa-map" },
        { number: "03", title: "Design & Prototyping", description: "Designing visual layouts and interactive UI prototypes.", icon: "fa-solid fa-palette" },
        { number: "04", title: "Development & Coding", description: "Writing clean, standard-compliant code and integrating APIs.", icon: "fa-solid fa-code" },
        { number: "05", title: "Testing & Quality Check", description: "Thorough testing of speed, responsive layouts, and security.", icon: "fa-solid fa-vial" },
        { number: "06", title: "Deployment & Support", description: "Launching your website and providing ongoing maintenance.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "RECENT WORK",
      title: "Our Latest Web Development Projects",
      items: [
        { title: "E-Commerce Platform", tech: "Shopify, React, Node.js", image: "/assets/images/services/ecommerce_screenshot.png", link: "/portfolio" },
        { title: "Corporate Website", tech: "WordPress, PHP, MySQL", image: "/assets/images/services/corporate_screenshot.png", link: "/portfolio" },
        { title: "SaaS Dashboard", tech: "React, Next.js, Node.js", image: "/assets/images/services/saas_screenshot.png", link: "/portfolio" },
        { title: "Healthcare Website", tech: "WordPress, PHP", image: "/assets/images/services/healthcare_screenshot.png", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak Technologies delivered a high-quality website that exceeded our expectations. Their communication, dedication, and technical skills are outstanding.", author: "Rohan Mehta", role: "CEO, TechVision", logoText: "TechVision" }
    ],
    faqs: [
      { question: "How long does it take to develop a website?", answer: "The timeline depends on complexity. Simple sites take 2-3 weeks, while complex eCommerce or SaaS apps can take 6-12 weeks." },
      { question: "Will my website be mobile responsive?", answer: "Yes, every website we design and build is fully responsive, looking and performing great across desktops, tablets, and phones." },
      { question: "Do you provide website maintenance after launch?", answer: "Yes, we offer monthly maintenance packages covering core updates, daily backups, speed monitoring, and content updates." },
      { question: "Can you redesign my existing website?", answer: "Absolutely. We can overhaul the UI/UX, migrate databases, rewrite outdated code, and optimize loading speeds while keeping your existing SEO ranking intact." }
    ],
    cta: {
      title: "Ready to Build Your Dream Website?",
      description: "Let our expert web developers turn your ideas into powerful digital experiences.",
      btnText: "Start Your Project",
      btnLink: "/contact"
    }
  },
  "website-development": {
    meta: {
      title: "Premium Website Development | Nooryak Technologies",
      description: "Get top-tier website development services that blend visual design with robust, lightning-fast code."
    },
    hero: {
      label: "WEBSITE DEVELOPMENT",
      title: {
        line1: "Premium Website Development ",
        highlight: "For Unmatched Brand Presence"
      },
      description: "We build responsive, engaging, and business-focused websites that capture your brand's unique identity. Drive high user conversion rates with state-of-the-art architectures.",
      buttons: [
        { text: "Get Started", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-star", text: "SEO Standard Compliant" },
        { icon: "fa-solid fa-mobile-screen", text: "Pixel Perfect Responsive Layouts" },
        { icon: "fa-solid fa-bolt", text: "Instant Loading Speeds" },
        { icon: "fa-solid fa-award", text: "Premium Brand Aesthetics" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT WEBSITE DEVELOPMENT",
      title: "Crafting High-Performance Websites",
      description: "Our approach integrates aesthetic UI/UX design with reliable web technologies. We don't just build sites; we craft business platforms that scale with your growth.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-crop", title: "Custom Layouts", description: "Design tailormade for your company's branding and color schemes." },
        { icon: "fa-solid fa-gauge", title: "Core Web Vitals", description: "Highly optimized to achieve high ratings on Google PageSpeed Insights." },
        { icon: "fa-solid fa-search", title: "Search Engine Optimized", description: "Technical SEO built-in to structure headings, metadata, and schemas." },
        { icon: "fa-solid fa-hands-helping", title: "24/7 Support", description: "Support team ready to resolve your queries instantly." }
      ]
    },
    offerings: {
      label: "SERVICES",
      title: "Our Website Development Solutions",
      items: [
        { icon: "fa-solid fa-building", title: "Corporate Portals", description: "Professional, secure websites representing corporate values, solutions, and careers." },
        { icon: "fa-solid fa-cart-shopping", title: "Ecommerce Portals", description: "Fully integrated retail spaces designed to convert traffic into sales." },
        { icon: "fa-solid fa-blog", title: "Blogs & News Portals", description: "Optimized publication layouts handling thousands of concurrent readers." },
        { icon: "fa-solid fa-bullhorn", title: "Landing Pages", description: "High-converting single pages optimized for specific marketing campaigns." },
        { icon: "fa-solid fa-arrows-spin", title: "Web Migrations", description: "Smooth transition of domain, backend platform, and assets without loss." },
        { icon: "fa-solid fa-code-fork", title: "SaaS Platforms", description: "Full-scale web apps supporting subscriptions, dashboards, and client portals." }
      ]
    },
    whyChoose: {
      label: "WHY NOORYAK",
      title: "The Website Development Agency of Choice",
      bullets: [
        "Bespoke Visual Layouts & Graphic Mockups",
        "Expert Team of Web Designers & Devs",
        "Next-Gen React & Angular Technologies",
        "Strict Adherence to Project Milestones",
        "Proven ROI-Driven Marketing Structures",
        "Secure Code & Encrypted Databases"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "250+", label: "Sites Launched" },
        { value: "95%", label: "Returning Clients" },
        { value: "4.9★", label: "Trustpilot Rating" },
        { value: "50+", label: "Web Specialists" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Modern Technical Ecosystem",
      items: [
        { name: "React", icon: "/assets/images/services/icons/React.png" },
        { name: "Next.js", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Node.js", icon: "/assets/images/services/icons/Node.js.png" },
        { name: "PHP", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Laravel", icon: "/assets/images/services/icons/Laravel.png" },
        { name: "WordPress", icon: "/assets/images/services/icons/PHP.png" }
      ]
    },
    process: {
      label: "OUR STRATEGY",
      title: "Step-by-Step Delivery Process",
      steps: [
        { number: "01", title: "Discovery", description: "Defining brand voice and functionality requirements.", icon: "fa-solid fa-magnifying-glass" },
        { number: "02", title: "UX Wireframing", description: "Creating layout schematics for desktop and mobile devices.", icon: "fa-solid fa-route" },
        { number: "03", title: "UI Mockups", description: "Applying branding elements and high fidelity layouts.", icon: "fa-solid fa-wand-magic-sparkles" },
        { number: "04", title: "Clean Coding", description: "Frontend and backend integration under strict QA.", icon: "fa-solid fa-code" },
        { number: "05", title: "Deployment", description: "Domain setup, secure SSL binding, and final launch.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "PORTFOLIO",
      title: "Featured Website Launches",
      items: [
        { title: "B2B SaaS Hub", tech: "Next.js, Tailwind, Node.js", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Financial Portal", tech: "React, Express, PostgreSQL", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "The website designed by Nooryak increased our digital conversion rate by 150%. Their attention to speed and clean UX is unmatched.", author: "Sunita Sharma", role: "Marketing VP, FinLeap", logoText: "FinLeap" }
    ],
    faqs: [
      { question: "Do you build custom designs or use templates?", answer: "We build entirely bespoke custom designs tailored specifically to your branding, although we can work with existing themes if required." },
      { question: "Is SEO included in website development?", answer: "Yes, we implement technical SEO foundation on all our projects, including semantic HTML tags, speed optimization, and meta configurations." }
    ],
    cta: {
      title: "Launch Your Digital Portal",
      description: "Discuss your website strategy with our lead architects today.",
      btnText: "Consult Now",
      btnLink: "/contact"
    }
  },
  "wordpress-website": {
    meta: {
      title: "Custom WordPress Website Development | Nooryak Technologies",
      description: "Get high-performance, custom WordPress websites tailored for SEO, lead generation, and ease of content management."
    },
    hero: {
      label: "WORDPRESS WEBSITE",
      title: {
        line1: "Custom WordPress Websites ",
        highlight: "That Drive Leads and Conversions"
      },
      description: "Empower your business with powerful, responsive, and easy-to-manage WordPress websites. Optimized for search engines, mobile devices, and lightning-fast loading speeds.",
      buttons: [
        { text: "Build WordPress Site", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-wordpress", text: "Custom Theme Coding" },
        { icon: "fa-solid fa-gauge", text: "PageSpeed Optimized" },
        { icon: "fa-solid fa-shield", text: "Highly Secure Setup" },
        { icon: "fa-solid fa-pen-to-square", text: "Easy Page Builders" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT WORDPRESS WEBSITE",
      title: "Why Choose Custom WordPress?",
      description: "WordPress powers over 40% of the web due to its flexibility. We avoid heavy pre-made themes, coding clean and lightweight WordPress sites that are secure and highly visible on search engines.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-pencil", title: "Easy CMS Control", description: "Manage blogs, updates, and layouts easily without typing code." },
        { icon: "fa-solid fa-plug", title: "Infinite Integrations", description: "Connect CRMs, email tools, payments, and analytical trackers." },
        { icon: "fa-solid fa-search", title: "Rank #1 Ready", description: "Configured with Yoast/RankMath and schema markup for organic ranking." },
        { icon: "fa-solid fa-lock", title: "Enterprise Security", description: "Custom firewall, malware checks, and hardened WordPress directories." }
      ]
    },
    offerings: {
      label: "WHAT WE DO",
      title: "WordPress Development Services",
      items: [
        { icon: "fa-solid fa-wand-magic-sparkles", title: "Bespoke Theme Development", description: "No sluggish templates. Custom coded Gutenberg/Elementor themes built for speed." },
        { icon: "fa-solid fa-puzzle-piece", title: "Plugin Development", description: "Create tailored functionalities with secure, custom-coded plugins." },
        { icon: "fa-solid fa-cart-shopping", title: "WooCommerce Setup", description: "Transform your WordPress site into a feature-rich, scalable retail shop." },
        { icon: "fa-solid fa-gauge-high", title: "Speed Optimization", description: "Aggressive caching, image compression, database cleanups, and CDN setup." },
        { icon: "fa-solid fa-arrows-rotate", title: "Theme Migration & Updates", description: "Migrate your existing site to WordPress or upgrade without downtime." },
        { icon: "fa-solid fa-headset", title: "Ongoing Support", description: "Theme security patches, regular backups, and technical support." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE WORDPRESS WITH NOORYAK",
      title: "Optimized & Hardened Corporate WordPress",
      bullets: [
        "Hand-coded Lightweight WordPress Themes",
        "Expertise in Elementor, Divi & Gutenberg",
        "Yoast SEO Best Practices Integration",
        "Robust Security Configuration against Attacks",
        "Clean Code Structure for Fast Load Times",
        "One-on-One training on content publishing"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "150+", label: "WordPress Sites Coded" },
        { value: "100%", label: "Editable Pages" },
        { value: "A+", label: "SSL Certification" },
        { value: "2.5s", label: "Max Load Time" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "WordPress Tech Stack",
      items: [
        { name: "WordPress CMS", icon: "/assets/images/services/icons/PHP.png" },
        { name: "PHP Backend", icon: "/assets/images/services/icons/PHP.png" },
        { name: "MySQL DB", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Elementor Pro", icon: "/assets/images/services/icons/React.png" },
        { name: "Advanced Custom Fields", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "JavaScript", icon: "/assets/images/services/icons/React.png" }
      ]
    },
    process: {
      label: "OUR METHODOLOGY",
      title: "How We Deliver Custom WordPress Sites",
      steps: [
        { number: "01", title: "Design Phase", description: "Figma layouts designed according to brand aesthetics.", icon: "fa-solid fa-palette" },
        { number: "02", title: "Custom Development", description: "Coding the theme cleanly with PHP, CSS, and JS.", icon: "fa-solid fa-code" },
        { number: "03", title: "Plugin & API Integration", description: "Setting up CRM connections, analytics, and contact forms.", icon: "fa-solid fa-plug" },
        { number: "04", title: "Speed & Security Hardening", description: "Applying custom rules to optimize page speed scores and security.", icon: "fa-solid fa-shield-halved" },
        { number: "05", title: "Testing & Handover", description: "Cross-browser validation and training you on content management.", icon: "fa-solid fa-circle-check" }
      ]
    },
    recentWork: {
      label: "FEATURED WORDPRESS WORK",
      title: "Real WordPress Success Stories",
      items: [
        { title: "Tech Blog Portal", tech: "Gutenberg, PHP, Tailwind CSS", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Real Estate Website", tech: "WordPress, ACF Pro, Leaflet API", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Finally, a WordPress site that loads instantly! Nooryak removed all the bloated plugins and coded our layout custom. Publishing posts is so easy now.", author: "Amit Singhal", role: "Content Director, DailyChronicle", logoText: "DailyChronicle" }
    ],
    faqs: [
      { question: "Is WordPress secure?", answer: "WordPress is secure if managed correctly. We apply rigorous hardening practices, including changing default paths, setting firewall limits, and keeping plugins auto-patched." },
      { question: "Can I manage the text and images myself?", answer: "Yes, we set up drag-and-drop page builders (like Elementor or Gutenberg Blocks) and customize fields, making it incredibly simple for you to update text and images." }
    ],
    cta: {
      title: "Empower Your Content Team",
      description: "Get a fast, secure, and easily editable corporate WordPress website.",
      btnText: "Build Your Website",
      btnLink: "/contact"
    }
  },
  "ecommerce-website": {
    meta: {
      title: "High-Performance Ecommerce Websites | Nooryak Technologies",
      description: "Sell online with high-conversion eCommerce websites designed to showcase products, optimize checkout flows, and maximize revenue."
    },
    hero: {
      label: "ECOMMERCE WEBSITE",
      title: {
        line1: "High-Converting Ecommerce ",
        highlight: "Websites Coded for Online Sales"
      },
      description: "Launch your online storefront with high-performance eCommerce platforms built for fast checkout, secure payments, and seamless inventory management.",
      buttons: [
        { text: "Launch Store", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-cart-arrow-down", text: "Optimized Checkout Funnel" },
        { icon: "fa-solid fa-credit-card", text: "Secure Payment Gateways" },
        { icon: "fa-solid fa-chart-line", text: "Sales Analytics Dashboard" },
        { icon: "fa-solid fa-truck-ramp-box", text: "Stock Tracking & Shipping" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT ECOMMERCE WEBSITES",
      title: "Turning Visitors Into Loyal Customers",
      description: "An online store must load fast, look premium, and make buying effortless. We combine product-centric UX, quick-fill checkout pipelines, and mobile layouts to increase order value and decrease cart abandonment.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-bolt", title: "1-Second Load Times", description: "Fast load times prevent customers from bouncing to competitors." },
        { icon: "fa-solid fa-mobile", title: "Mobile Shop First", description: "More than 70% of traffic is mobile. We design mobile layouts first." },
        { icon: "fa-solid fa-key", title: "PCI DSS Compliant", description: "Secure customer logins, encrypt checkouts, and guard credit cards." },
        { icon: "fa-solid fa-bell", title: "Smart Notifications", description: "Automated emails for abandoned carts, order status, and sales." }
      ]
    },
    offerings: {
      label: "RETAIL SOLUTIONS",
      title: "eCommerce Web Services",
      items: [
        { icon: "fa-solid fa-store", title: "Custom Storefront Design", description: "Bespoke storefronts showing products in high resolution and responsive grid layouts." },
        { icon: "fa-solid fa-wallet", title: "Multi-Gateway Integrations", description: "Stripe, Razorpay, PayPal, Apple Pay, and local checkout providers integration." },
        { icon: "fa-solid fa-boxes-stacked", title: "Inventory Setup & CSV", description: "Import thousands of SKUs, categorise variants, and configure tracking rules." },
        { icon: "fa-solid fa-percentage", title: "Discount & Coupon Engines", description: "Create conditional discount structures, promotional codes, and cart timers." },
        { icon: "fa-solid fa-truck", title: "Shipping & Tax Automation", description: "Integrate FedEx, DHL, UPS, and configure automatic sales tax calculations." },
        { icon: "fa-solid fa-brain", title: "AI Product Recommendations", description: "Upsell similar or frequently bought items to increase average order values." }
      ]
    },
    whyChoose: {
      label: "WHY BUILD WITH NOORYAK",
      title: "Maximize Cart Value & Conversion Rates",
      bullets: [
        "Product-focused Visual Hierarchy & UX",
        "Friction-free Single Page Checkout Flow",
        "Expertise in Shopify, WooCommerce & Custom Nodes",
        "SEO optimization for Product pages & tags",
        "Dynamic Product Filter & Quick Search Systems",
        "Robust Server Hosting with Auto-scaling"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "$10M+", label: "Client Sales Facilitated" },
        { value: "35%+", label: "Avg Conversion Increase" },
        { value: "100%", label: "Secure Payment Nodes" },
        { value: "10k+", label: "SKU Capacities" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Leading Ecommerce Engines",
      items: [
        { name: "Shopify", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "WooCommerce", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Next.js Storefront", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Laravel Shop", icon: "/assets/images/services/icons/Laravel.png" },
        { name: "PostgreSQL / MySQL", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Node.js API", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "OUR PROCESS",
      title: "Building Your Online Shop",
      steps: [
        { number: "01", title: "UX Mapping", description: "Planning customer paths from landing pages to checkout.", icon: "fa-solid fa-route" },
        { number: "02", title: "Store UI/UX Layout", description: "Designing beautiful product cards, carts, and user panels.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Store Setup & Coding", description: "Configuring product models, shipping parameters, and backend scripts.", icon: "fa-solid fa-code" },
        { number: "04", title: "Payment System Check", description: "Testing payment systems, card exceptions, and tax rules.", icon: "fa-solid fa-credit-card" },
        { number: "05", title: "Launch & SEO", description: "Enabling analytics, submitting sitemaps, and opening the store.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "FEATURED STORES",
      title: "Storefronts Driving Sales",
      items: [
        { title: "Apparel Brand Store", tech: "Shopify, Custom Liquid, React", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Organic Cosmetics Store", tech: "WooCommerce, Elementor, PHP", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak redesigned our catalog, speeded checkout to under 2 seconds, and automated email followups. Our sales rose 40% in two months.", author: "Preeti Goyal", role: "E-Commerce Director, GlowSkins", logoText: "GlowSkins" }
    ],
    faqs: [
      { question: "Can I manage orders and coupons easily?", answer: "Yes. We train you to use the simple dashboard where you can see sales graphs, handle returns, configure coupons, and update stock." },
      { question: "Which platform is best: Shopify or WooCommerce?", answer: "We recommend Shopify for companies wanting an all-in-one hosted solution, and WooCommerce/Custom setups if you want full customization and zero transaction fees." }
    ],
    cta: {
      title: "Ready to Sell Globally?",
      description: "Get a powerful eCommerce website designed to maximize conversion rates.",
      btnText: "Consult Store Architect",
      btnLink: "/contact"
    }
  },
  "shopify-website": {
    meta: {
      title: "Shopify Store Design & Development | Nooryak Technologies",
      description: "Launch a professional, conversion-optimized Shopify website. Custom Liquid coding, app integrations, and custom Shopify themes."
    },
    hero: {
      label: "SHOPIFY WEBSITE",
      title: {
        line1: "Launch High-Converting ",
        highlight: "Shopify Websites Coded for Success"
      },
      description: "Launch a feature-rich Shopify store designed for rapid conversions and scalability. We specialize in custom themes, Liquid templates, and Shopify API integrations.",
      buttons: [
        { text: "Launch Shopify Store", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-shopify", text: "Certified Liquid Developers" },
        { icon: "fa-solid fa-wallet", text: "Shop Pay & Custom Checkout" },
        { icon: "fa-solid fa-puzzle-piece", text: "App Setup & Integration" },
        { icon: "fa-solid fa-gauge-high", text: "Fast loading Shopify Sections" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT SHOPIFY WEBSITE",
      title: "Maximize Shopify Capabilities",
      description: "While basic templates look cookie-cutter, we code custom Shopify layouts that look premium and load instantly. We build headless Shopify solutions or write clean custom Liquid files to help your brand stand out.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-code", title: "Custom Liquid Theme", description: "Clean theme styling tailored specifically to match your UI/UX designs." },
        { icon: "fa-solid fa-cubes", title: "Shopify App Setup", description: "Configuring CRM, reviews, upsell, and loyalty applications." },
        { icon: "fa-solid fa-gears", title: "Automated Workflows", description: "Connect email automations, fulfillment systems, and ERPs." },
        { icon: "fa-solid fa-bolt", title: "Optimized Load Speed", description: "Compressing stylesheets and scripts to keep Shopify loading instantly." }
      ]
    },
    offerings: {
      label: "SHOPIFY SERVICES",
      title: "Complete Shopify Solutions",
      items: [
        { icon: "fa-brands fa-shopify", title: "Shopify Setup from Scratch", description: "Customizing colors, adding products, and setting up domains, payments, and shipping rules." },
        { icon: "fa-solid fa-code-compare", title: "Migration to Shopify", description: "Safely transfer products, order history, and customer database from WordPress/Magento." },
        { icon: "fa-solid fa-wand-magic-sparkles", title: "Liquid Design Tweaks", description: "Custom code features, checkout elements, product pages, and product grids." },
        { icon: "fa-solid fa-server", title: "Headless Shopify Setup", description: "Fast headless stores using Next.js/React frontend and Shopify API backend." },
        { icon: "fa-solid fa-plug", title: "ERP & CRM Syncing", description: "Synchronize inventory, tracking numbers, and client records with third party tools." },
        { icon: "fa-solid fa-user-gear", title: "SEO Configurations", description: "Setting schema tags, URL redirects, and optimized meta content." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE NOORYAK FOR SHOPIFY",
      title: "Scalable Shops Optimized for ROI",
      bullets: [
        "Specialist Liquid Developers for custom tweaks",
        "Expertise in headless Next.js Shopify",
        "Advanced checkout & app integration setups",
        "High rating speed optimization configs",
        "Clean, semantic page structure and SEO setup",
        "Ongoing support, upgrades and consultation"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "80+", label: "Shopify Sites Built" },
        { value: "40%+", label: "Faster Page Loads" },
        { value: "99.9%", label: "Store Uptime" },
        { value: "24/7", label: "Developer Access" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Shopify Engineering Stack",
      items: [
        { name: "Shopify Online Store 2.0", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Liquid Theme Engine", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Next.js (Headless Shopify)", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Shopify Storefront API", icon: "/assets/images/services/icons/React.png" },
        { name: "Tailwind CSS", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "GraphQL / REST APIs", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "DELIVERY FLOW",
      title: "How We Code Shopify Sites",
      steps: [
        { number: "01", title: "Strategy & Scope", description: "Analyzing catalog structures, app necessities, and checkout systems.", icon: "fa-solid fa-chart-bar" },
        { number: "02", title: "Design Customization", description: "Creating Figma mockups for all responsive screens.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Liquid Coding", description: "Developing custom sections and layouts using clean code.", icon: "fa-solid fa-code" },
        { number: "04", title: "Integrations & Testing", description: "Setting up apps, checkout rules, and payment gateways.", icon: "fa-solid fa-plug" },
        { number: "05", title: "Launch & Growth Check", description: "Domain mapping, SSL generation, and analytical setup.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "FEATURED STORES",
      title: "Custom Shopify Implementations",
      items: [
        { title: "Home Decor Outlet", tech: "Liquid 2.0, Tailwind, AlpineJS", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Headless Apparel Shop", tech: "Next.js, Shopify Storefront API", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Our custom Liquid theme is exactly what we wanted! Our site loads fast, the UX is gorgeous, and app integrations work flawlessly. Highly recommend Nooryak.", author: "Vikram Malhotra", role: "Owner, Stellar Decor", logoText: "StellarDecor" }
    ],
    faqs: [
      { question: "Can you customize Shopify themes?", answer: "Yes, we write custom Liquid and JavaScript code to implement features that standard themes do not support out of the box." },
      { question: "Can you migrate my current store to Shopify?", answer: "Absolutely. We routinely migrate stores from WooCommerce, Magento, or custom code to Shopify while preserving all order histories and product lists." }
    ],
    cta: {
      title: "Launch Your Shopify Storefront",
      description: "Discuss your retail goals with our certified Shopify architects.",
      btnText: "Start My Store",
      btnLink: "/contact"
    }
  },
  "woocommerce-website": {
    meta: {
      title: "Custom WooCommerce Website Development | Nooryak Technologies",
      description: "Build a highly scalable WooCommerce shop on WordPress. Full checkout customization, product variants, and database optimization."
    },
    hero: {
      label: "WOOCOMMERCE WEBSITE",
      title: {
        line1: "Custom WooCommerce Stores ",
        highlight: "With Full Platform Ownership"
      },
      description: "Scale your e-retail operations on WordPress with high-performance WooCommerce storefronts. Complete database optimization, custom checkout grids, and no transaction fees.",
      buttons: [
        { text: "Build WooCommerce Shop", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-wordpress", text: "WordPress / WooCommerce Experts" },
        { icon: "fa-solid fa-percent", text: "Zero Store Transaction Fees" },
        { icon: "fa-solid fa-gears", text: "Flexible Custom Integrations" },
        { icon: "fa-solid fa-gauge", text: "Optimized Database Queries" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT WOOCCOMMERCE WEBSITE",
      title: "Why WooCommerce?",
      description: "WooCommerce provides total ownership over your data, layouts, and files. We optimize the core WordPress database structure, configure custom caching, and create lightweight themes to make WooCommerce load under 2 seconds.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-hand-holding-dollar", title: "No Platform Fees", description: "You own the platform. Keep 100% of your sales with zero monthly subscription fees." },
        { icon: "fa-solid fa-sliders", title: "Complete Customization", description: "Tweak checkout fields, customer email rules, and dashboard layouts freely." },
        { icon: "fa-solid fa-server", title: "Flexible Hosting", description: "Host your website on any server and scale storage or RAM as needed." },
        { icon: "fa-solid fa-chart-pie", title: "Advanced Analytics", description: "Integrate Google Analytics 4, Metorik, and pixel trackers instantly." }
      ]
    },
    offerings: {
      label: "WOOCOMMERCE SERVICE",
      title: "WordPress Retail Engineering",
      items: [
        { icon: "fa-solid fa-store", title: "Custom WooCommerce Theme", description: "Coded custom themes that showcase items cleanly without slow templates." },
        { icon: "fa-solid fa-gear", title: "Checkout Pipeline Tuning", description: "Customize checkout grids and fields, simplifying steps to increase completions." },
        { icon: "fa-solid fa-arrows-up-to-line", title: "Hosting Setup & Caching", description: "Cloud VPS setup, Redis caching, and Nginx configurations optimized for WooCommerce." },
        { icon: "fa-solid fa-truck-fast", title: "Advanced Shipping Rules", description: "Conditional shipping rates based on postcodes, weights, or dimensions." },
        { icon: "fa-solid fa-box", title: "Product Variations", description: "Support for custom attributes, multi-color selectors, and dynamic prices." },
        { icon: "fa-solid fa-plug", title: "POS & ERP Syncing", description: "Connect stock levels, transactions, and client cards with physical POS systems." }
      ]
    },
    whyChoose: {
      label: "WHY WOOCOMMERCE WITH NOORYAK",
      title: "Fast, Reliable WordPress Retail Platforms",
      bullets: [
        "Lightweight custom code tailored for WooCommerce",
        "Expertise in secure VPS deployments (Nginx, Redis)",
        "Zero monthly platform fees and commission models",
        "Advanced SEO setup for product categories and schemas",
        "Custom billing, invoice, and tracking integrations",
        "On-hand technical support for database queries"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "60+", label: "WooCommerce Sites Coded" },
        { value: "1.8s", label: "Average Load Times" },
        { value: "$0", label: "Transaction Commissions" },
        { value: "24/7", label: "Security Scanning" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "WooStack Engineering",
      items: [
        { name: "WooCommerce Core", icon: "/assets/images/services/icons/PHP.png" },
        { name: "WordPress CMS", icon: "/assets/images/services/icons/PHP.png" },
        { name: "PHP 8 Backend", icon: "/assets/images/services/icons/PHP.png" },
        { name: "MySQL / MariaDB", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Redis Caching", icon: "/assets/images/services/icons/Node.js.png" },
        { name: "Nginx Server", icon: "/assets/images/services/icons/Next.js.png" }
      ]
    },
    process: {
      label: "OUR ROADMAP",
      title: "Delivering WooCommerce Stores",
      steps: [
        { number: "01", title: "Platform Architecture", description: "Defining product attributes, shipping zones, and API connections.", icon: "fa-solid fa-list-check" },
        { number: "02", title: "Theme UX/UI Design", description: "Creating custom storefront layouts in Figma.", icon: "fa-solid fa-palette" },
        { number: "03", title: "PHP & CSS Coding", description: "Writing lightweight themes and custom product structures.", icon: "fa-solid fa-code" },
        { number: "04", title: "Payment & Speed Check", description: "Nginx caching setup, secure SSL, and payment simulations.", icon: "fa-solid fa-gauge-high" },
        { number: "05", title: "Launch & Indexing", description: "Uploading sitemaps, configuring analytics, and going live.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "FEATURED STORES",
      title: "Stores Driving Conversions",
      items: [
        { title: "Organic Coffee Shop", tech: "WooCommerce, Nginx, Tailwind", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Auto Parts Depot", tech: "WordPress, MySQL, Custom Import", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak moved our catalog from Shopify to WooCommerce. We now save thousands in platform fees, and the page speeds are faster than ever.", author: "Rajesh Kumar", role: "Owner, CoffeeBrew Outlet", logoText: "CoffeeBrew" }
    ],
    faqs: [
      { question: "Is WooCommerce secure?", answer: "Yes. By utilizing secure VPS hosting, robust firewalls, regular updates, and reputable payment gateways, WooCommerce is highly secure." },
      { question: "Can WooCommerce handle thousands of products?", answer: "Yes, when hosted on a customized VPS with Nginx, Redis caching, and optimized MySQL queries, WooCommerce easily scales to tens of thousands of items." }
    ],
    cta: {
      title: "Claim Full Platform Ownership",
      description: "Build a highly optimized WooCommerce store without monthly transaction fees.",
      btnText: "Consult Shop Architect",
      btnLink: "/contact"
    }
  },
  "php-web-development": {
    meta: {
      title: "PHP Web Development Services | Nooryak Technologies",
      description: "Hire expert PHP developers to build custom web applications, portals, and REST APIs using Laravel and CodeIgniter frameworks."
    },
    hero: {
      label: "PHP WEB DEVELOPMENT",
      title: {
        line1: "Custom PHP Development ",
        highlight: "For Scalable Web Applications"
      },
      description: "Build secure, reliable, and high-performance web applications using custom PHP. We specialize in Laravel frameworks, complex databases, and robust REST APIs.",
      buttons: [
        { text: "Hire PHP Developers", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-php", text: "Expert PHP 8 / Laravel Coder" },
        { icon: "fa-solid fa-database", text: "Optimized MySQL / PostgreSQL" },
        { icon: "fa-solid fa-shield-halved", text: "Secure Framework Coding" },
        { icon: "fa-solid fa-code-merge", text: "Custom REST APIs & Integrations" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT PHP DEVELOPMENT",
      title: "Robust Backends Driving Modern Applications",
      description: "PHP runs over 78% of the web. We build clean, modular, and maintainable PHP web backends. Using the Laravel MVC framework, we ensure your business application has a fast database structure and secure API communication.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-network-wired", title: "Laravel Framework", description: "Use modern MVC principles for maintainable, clean application logic." },
        { icon: "fa-solid fa-shield", title: "SQL Injection Guard", description: "Hardened controllers built to prevent database injections and script attacks." },
        { icon: "fa-solid fa-bolt", title: "Fast Data Queries", description: "Custom database indexings, query optimizations, and Redis caching." },
        { icon: "fa-solid fa-code-compare", title: "Modular Architecture", description: "Easily scale your web app or add custom plugins as your team expands." }
      ]
    },
    offerings: {
      label: "CAPABILITIES",
      title: "Our PHP Web Solutions",
      items: [
        { icon: "fa-solid fa-cubes", title: "Custom Web Application Development", description: "Build bespoke business dashboards, portals, and SaaS platforms." },
        { icon: "fa-solid fa-database", title: "Database Architecture & Optimization", description: "Structure complex databases, normalize fields, and optimize query times." },
        { icon: "fa-solid fa-gears", title: "RESTful API Development", description: "Develop secure APIs for mobile apps, frontend applications, and third parties." },
        { icon: "fa-solid fa-user-lock", title: "Client Portals & User Control", description: "Implement RBAC (role-based access controls) and secure logins." },
        { icon: "fa-solid fa-arrows-spin", title: "Legacy PHP Migrations", description: "Upgrade outdated PHP applications to PHP 8 and Laravel cleanly." },
        { icon: "fa-solid fa-screwdriver-wrench", title: "Ongoing Backend Maintenance", description: "Regular security checks, library updates, and speed optimizations." }
      ]
    },
    whyChoose: {
      label: "WHY PARTNER WITH NOORYAK FOR PHP",
      title: "Secure Backends Built to Scale",
      bullets: [
        "Certified Laravel & PHP MVC Developers",
        "Strict compliance with secure coding standards",
        "Expertise in complex API and database design",
        "Fast, optimized query speeds and Redis setup",
        "Clean, maintainable, and fully documented code",
        "Ongoing support, cloud setup, and DevOps"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "100+", label: "PHP Apps Deployed" },
        { value: "50k+", label: "Database Transactions/sec" },
        { value: "100%", label: "MVC Standards Compliant" },
        { value: "24/7", label: "Server Monitoring" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Our PHP & Backend Stack",
      items: [
        { name: "PHP 8", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Laravel MVC", icon: "/assets/images/services/icons/Laravel.png" },
        { name: "CodeIgniter", icon: "/assets/images/services/icons/PHP.png" },
        { name: "MySQL / MariaDB", icon: "/assets/images/services/icons/PHP.png" },
        { name: "PostgreSQL", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Redis Caching", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "OUR WORKFLOW",
      title: "How We Code Backend Apps",
      steps: [
        { number: "01", title: "Database Modeling", description: "Creating relational tables, key indices, and architectural schemas.", icon: "fa-solid fa-diagram-project" },
        { number: "02", title: "API Blueprinting", description: "Drafting API endpoints and data objects.", icon: "fa-solid fa-list-check" },
        { number: "03", title: "PHP Coding Phase", description: "Writing clean MVC controllers, model logic, and service classes.", icon: "fa-solid fa-code" },
        { number: "04", title: "Testing & Security Audit", description: "Penetration tests, SQL injection checks, and database simulation tests.", icon: "fa-solid fa-shield-halved" },
        { number: "05", title: "Cloud Deployment", description: "Configuring server variables, Nginx, SSL, and launching the portal.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "RECENT DEPLOYMENTS",
      title: "Custom PHP Case Studies",
      items: [
        { title: "B2B Client Dashboard", tech: "Laravel, VueJS, PostgreSQL", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "School ERP System", tech: "Laravel, PHP, MySQL", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak redesigned our legacy ERP portal in Laravel. Queries that used to take 10 seconds now take milliseconds. Exceptional PHP experts.", author: "Siddharth Sen", role: "CTO, EduTech India", logoText: "EduTech" }
    ],
    faqs: [
      { question: "Do you use Laravel?", answer: "Yes, Laravel is our primary PHP framework because of its modern security features, robust routing, and clean MVC structure." },
      { question: "Can you upgrade our old PHP 5.6 app?", answer: "Yes, we routinely refactor outdated PHP scripts into modern, secure PHP 8 codebases, migrating legacy databases cleanly." }
    ],
    cta: {
      title: "Secure Your Application Backend",
      description: "Build your custom portal or dashboard with our PHP specialists.",
      btnText: "Consult Backend Coder",
      btnLink: "/contact"
    }
  },
  "react-web-development": {
    meta: {
      title: "React Web Development Services | Nooryak Technologies",
      description: "Build fast, interactive single-page applications and web dashboards using React.js and Next.js frontends."
    },
    hero: {
      label: "REACT WEB DEVELOPMENT",
      title: {
        line1: "Interactive React.js Frontends ",
        highlight: "Built for Seamless User Experience"
      },
      description: "Build lightning-fast, interactive, and modern single-page applications. We code bespoke React.js and Next.js frontends with beautiful transitions and clean state management.",
      buttons: [
        { text: "Hire React Developer", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-react", text: "React.js / Next.js Specialists" },
        { icon: "fa-solid fa-cubes", text: "Redux / Zustand State Handling" },
        { icon: "fa-solid fa-wind", text: "Tailwind CSS Styling" },
        { icon: "fa-solid fa-mobile-screen", text: "Responsive Component Architecture" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT REACT DEVELOPMENT",
      title: "State-of-the-Art Interactive User Interfaces",
      description: "Modern users expect instant interactions. We build React frontends using reusable component systems. By utilizing Next.js, we deliver Server-Side Rendering (SSR) to ensure your app loads instantly and ranks high on Google.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-box", title: "Modular Components", description: "Write reusable React components, keeping files clean and upgrades simple." },
        { icon: "fa-solid fa-gauge-high", title: "SSR & Static Generation", description: "Use Next.js for server-side pre-rendering, achieving instant initial paints." },
        { icon: "fa-solid fa-database", title: "Seamless API Bindings", description: "Connect REST, GraphQL, or WebSockets to display real-time data." },
        { icon: "fa-solid fa-wand-magic-sparkles", title: "Fluid Transitions", description: "Utilize Framer Motion to create smooth entrance animations and transitions." }
      ]
    },
    offerings: {
      label: "REACT SERVICES",
      title: "Bespoke Frontend Engineering",
      items: [
        { icon: "fa-brands fa-react", title: "Single Page Applications (SPAs)", description: "Dynamic web apps loading pages instantly without refreshing browsers." },
        { icon: "fa-solid fa-chart-line", title: "Interactive SaaS Dashboards", description: "Component-rich portals featuring real-time graphs, toggles, and filters." },
        { icon: "fa-solid fa-gauge", title: "Performance Tuning", description: "Reduce bundle sizes, lazy-load assets, and optimize re-renders." },
        { icon: "fa-solid fa-mobile", title: "React Native Mobile Apps", description: "Develop cross-platform iOS and Android apps using unified React logic." },
        { icon: "fa-solid fa-arrows-spin", title: "Figma to React Conversion", description: "Translate layout mockups into pixel-perfect React components." },
        { icon: "fa-solid fa-plug", title: "State Management setup", description: "Configure Redux, Context API, or Zustand to manage user sessions." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE REACT WITH NOORYAK",
      title: "Interactive, Future-Ready User Interfaces",
      bullets: [
        "Specialist React.js & Next.js frontend engineers",
        "Pixel-perfect translation of Figma layouts",
        "Expertise in SSR, SSG, and search indexing rules",
        "Highly optimized asset bundles and fast load speeds",
        "Clean, modular, and component-based codebase",
        "Flexible APIs integration (GraphQL, REST)"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "90+", label: "React Apps Developed" },
        { value: "95+", label: "Google PageSpeed Scores" },
        { value: "50%", label: "Faster Load Speeds" },
        { value: "24/7", label: "Ongoing Maintenance" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Modern Frontend Stack",
      items: [
        { name: "React.js", icon: "/assets/images/services/icons/React.png" },
        { name: "Next.js", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Redux / Zustand", icon: "/assets/images/services/icons/React.png" },
        { name: "TypeScript", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Tailwind CSS", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "GraphQL / REST", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "DELIVERY PIPELINE",
      title: "How We Code React Frontends",
      steps: [
        { number: "01", title: "UX Layout Review", description: "Analyzing Figma components, responsive breakpoints, and animations.", icon: "fa-solid fa-eye" },
        { number: "02", title: "Component Mockup", description: "Developing reusable buttons, inputs, layouts, and menus.", icon: "fa-solid fa-cubes" },
        { number: "03", title: "API Integration", description: "Connecting dynamic endpoints, state controllers, and models.", icon: "fa-solid fa-plug" },
        { number: "04", title: "Render Audit", description: "Debugging re-renders, optimizing asset size, and responsive check.", icon: "fa-solid fa-gauge" },
        { number: "05", title: "Vercel / AWS Launch", description: "Deploying frontend nodes to cloud CDNs for instant global loading.", icon: "fa-solid fa-cloud-arrow-up" }
      ]
    },
    recentWork: {
      label: "PORTFOLIO",
      title: "Stunning React Interfaces",
      items: [
        { title: "Fintech Dashboard", tech: "React.js, Zustand, ChartJS", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Healthcare Platform UI", tech: "Next.js, Tailwind, TypeScript", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Our clients love the new portal! Transitions are fast, charts load instantly, and the code quality is top-notch. Truly skilled React engineers.", author: "Neha Mehra", role: "Product Manager, FinOptima", logoText: "FinOptima" }
    ],
    faqs: [
      { question: "Is React SEO-friendly?", answer: "By default, React loads client-side, which is harder for SEO. We utilize Next.js Server-Side Rendering (SSR) to output fully pre-rendered HTML, making it SEO-friendly." },
      { question: "Can you migrate an existing app to React?", answer: "Yes, we can migrate PHP, Angular, or jQuery frontends into clean React.js component architectures." }
    ],
    cta: {
      title: "Upgrade Your Customer Interface",
      description: "Discuss your frontend goals with our expert React designers.",
      btnText: "Consult React Architect",
      btnLink: "/contact"
    }
  },
  "ecommerce-development": {
    meta: {
      title: "Ecommerce Development Services | Nooryak Technologies",
      description: "Scale your online retail business with expert eCommerce development solutions, custom shopping carts, and database architectures."
    },
    hero: {
      label: "ECOMMERCE DEVELOPMENT",
      title: {
        line1: "Enterprise Ecommerce Development ",
        highlight: "Built for Scale and Sales"
      },
      description: "Deploy highly scalable, custom eCommerce systems. We optimize product search queries, checkout databases, CRM synchronizations, and custom shopping cart workflows.",
      buttons: [
        { text: "Start Retail Project", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-cart-shopping", text: "Custom Shopping Cart Coded" },
        { icon: "fa-solid fa-credit-card", text: "Secure Payment Integrations" },
        { icon: "fa-solid fa-arrow-up-wide-short", text: "Optimized Database Queries" },
        { icon: "fa-solid fa-sync", text: "Real-Time Stock Updates" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT ECOMMERCE DEVELOPMENT",
      title: "Advanced Retail Solutions",
      description: "We don't use slow templates. We write custom API frameworks, database queries, and storefront assets to ensure your retail operations remain online during peak holiday traffic.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-bolt", title: "Instant Page Loads", description: "Keep load times under 2 seconds to retain customers and sales." },
        { icon: "fa-solid fa-shield-halved", title: "Fully Compliant Code", description: "PCI-DSS security compliance, secure checkout encryption, and SSL." },
        { icon: "fa-solid fa-arrows-spin", title: "Automated Workflows", description: "Integrate ERP systems, inventory databases, and delivery services." },
        { icon: "fa-solid fa-chart-column", title: "Sales Analytics", description: "Real-time revenue metrics, product views, and abandonment tracking." }
      ]
    },
    offerings: {
      label: "SOLUTIONS",
      title: "Our Retail Capabilities",
      items: [
        { icon: "fa-solid fa-store", title: "Custom Storefront Development", description: "Bespoke storefronts showing products cleanly in responsive layouts." },
        { icon: "fa-solid fa-credit-card", title: "Secure Checkout Nodes", description: "Stripe, Razorpay, and PayPal gateways configured with encryption." },
        { icon: "fa-solid fa-boxes-stacked", title: "Inventory Databases", description: "Structure product attributes, handle variants, and track warehouse stock levels." },
        { icon: "fa-solid fa-truck-fast", title: "Shipping & Tax Engines", description: "Integrate FedEx, DHL, and calculate tax rates dynamically at checkout." },
        { icon: "fa-solid fa-tags", title: "Discount Engine Coding", description: "Conditional coupons, cart value discounts, and bulk discount logic." },
        { icon: "fa-solid fa-user-gear", title: "Vendor Portals", description: "Custom dashboards for multi-vendor marketplaces and catalog management." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE NOORYAK",
      title: "Engineering High-Performance Retail Platforms",
      bullets: [
        "Product-focused Visual Hierarchy & UX layouts",
        "Single-page checkout configurations to reduce friction",
        "Expertise in Shopify, WooCommerce & custom API backends",
        "SEO structure setup for product metadata & categories",
        "Elasticsearch product filtering & search queries",
        "Auto-scaling server setups for high traffic spikes"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "$20M+", label: "Client Transactions" },
        { value: "40%+", label: "Avg Conversion Increase" },
        { value: "100%", label: "Secure Transactions" },
        { value: "20k+", label: "SKU Capacities" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Ecommerce Framework Stack",
      items: [
        { name: "Next.js Storefront", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Shopify API", icon: "/assets/images/services/icons/React.png" },
        { name: "WooCommerce Core", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Laravel Storefront", icon: "/assets/images/services/icons/Laravel.png" },
        { name: "PostgreSQL / MySQL", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Node.js REST Backend", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "OUR ROADMAP",
      title: "How We Deliver Custom Stores",
      steps: [
        { number: "01", title: "Sitemap & UX Mapping", description: "Defining checkout rules, products structure, and payment processes.", icon: "fa-solid fa-route" },
        { number: "02", title: "Store UI/UX Layout", description: "Designing product grids, shopping carts, and account screens.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Backend Coding", description: "Coding the inventory logic, pricing scripts, and security protocols.", icon: "fa-solid fa-code" },
        { number: "04", title: "Payment System Check", description: "Testing payment scenarios, card validation rules, and invoices.", icon: "fa-solid fa-credit-card" },
        { number: "05", title: "Launch & SEO Check", description: "Mapping DNS, enabling SSL certificates, and going live.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "PORTFOLIO",
      title: "Bespoke eCommerce Sites",
      items: [
        { title: "Bespoke Fashion Hub", tech: "Next.js, Tailwind, Node.js", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Direct-to-Consumer Cosmetics", tech: "Shopify Custom Liquid, React", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak built our custom Next.js eCommerce platform. Our site loading speeds dropped by half, and checkouts are seamless. Outstanding developers.", author: "Neha Mehra", role: "CEO, GlowCo India", logoText: "GlowCo" }
    ],
    faqs: [
      { question: "Can we support custom pricing rules?", answer: "Yes, our custom database setups allow you to set conditional discounts, customer pricing tiers, and coupon rules." },
      { question: "Can we sync with offline POS systems?", answer: "Yes, we integrate third party POS APIs to keep digital inventory levels synced with physical shops in real-time." }
    ],
    cta: {
      title: "Claim Your Digital Retail Space",
      description: "Consult with our lead eCommerce developers today.",
      btnText: "Build My Shop",
      btnLink: "/contact"
    }
  },
  "shopify-development": {
    meta: {
      title: "Certified Shopify Development Services | Nooryak Technologies",
      description: "Hire certified Shopify developers to code custom Liquid themes, setup stores, configure headless Next.js frontends, and integrate APIs."
    },
    hero: {
      label: "SHOPIFY DEVELOPMENT",
      title: {
        line1: "Certified Shopify Development ",
        highlight: "For High-Converting Retail Stores"
      },
      description: "Leverage certified Shopify developers to design and code custom themes. We optimize Liquid sections, set up payment gateways, and configure headless Next.js storefronts.",
      buttons: [
        { text: "Hire Shopify Coder", link: "/contact", type: "primary" },
        { text: "Launch Store", link: "/contact", type: "secondary" }
      ],
      features: [
        { icon: "fa-brands fa-shopify", text: "Expert Liquid Theme Coders" },
        { icon: "fa-solid fa-cubes", text: "Shopify App Customizations" },
        { icon: "fa-solid fa-gears", text: "Secure Payment Gateway Nodes" },
        { icon: "fa-solid fa-rocket", text: "Optimized Speed configurations" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT SHOPIFY DEVELOPMENT",
      title: "Custom Coded Shopify Solutions",
      description: "Avoid heavy, slow pre-made Shopify themes. We build lightweight Liquid templates or headless React frontends that load fast and rank well on search engines.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-code", title: "Custom Liquid Theme", description: "Bespoke Online Store 2.0 sections built to match your design styles." },
        { icon: "fa-solid fa-plug", title: "App Syncing", description: "Configure review tools, upsell funnels, and CRM trackers." },
        { icon: "fa-solid fa-gauge-high", title: "Page Speed Hardening", description: "Minify styles, optimize image layers, and eliminate slow scripts." },
        { icon: "fa-solid fa-arrows-spin", title: "Store Migrations", description: "Migrate catalog assets and user records from other platforms without downtime." }
      ]
    },
    offerings: {
      label: "CAPABILITIES",
      title: "Shopify Custom Services",
      items: [
        { icon: "fa-brands fa-shopify", title: "Shopify Setup from Scratch", description: "Domain configurations, adding product databases, and setting shipping zones." },
        { icon: "fa-solid fa-code-fork", title: "Headless Shopify Next.js", description: "Create lightning-fast React interfaces using Shopify's API backend." },
        { icon: "fa-solid fa-wand-magic-sparkles", title: "Custom Liquid Sections", description: "Custom code specific product slides, promotional boxes, and filters." },
        { icon: "fa-solid fa-arrows-spin", title: "Legacy Migration", description: "Transfer customer records and orders from Magento or WordPress safely." },
        { icon: "fa-solid fa-puzzle-piece", title: "Shopify App Configs", description: "Connect email tools, loyalty software, and catalog sync features." },
        { icon: "fa-solid fa-shield-halved", title: "SEO Schema Integration", description: "Implement structured schema markup for search rankings." }
      ]
    },
    whyChoose: {
      label: "WHY NOORYAK FOR SHOPIFY",
      title: "Flexible, Fast Storefronts Coded to Sell",
      bullets: [
        "Certified Liquid & headless API developers",
        "Expertise in headless Next.js & React integrations",
        "Advanced checkout custom scripts & app configs",
        "Aggressive page speed optimization techniques",
        "Clean, semantic templates with technical SEO",
        "Reliable developer access and upgrades"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "80+", label: "Stores Launched" },
        { value: "35%+", label: "Faster Load Speeds" },
        { value: "99.9%", label: "Server Uptime" },
        { value: "24/7", label: "Developer Access" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Shopify EngineeringStack",
      items: [
        { name: "Shopify OS 2.0", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Liquid Engine", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Next.js Headless", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Storefront API", icon: "/assets/images/services/icons/React.png" },
        { name: "Tailwind CSS", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "GraphQL APIs", icon: "/assets/images/services/icons/Node.js.png" }
      ]
    },
    process: {
      label: "OUR WORKFLOW",
      title: "How We Deliver Shopify Stores",
      steps: [
        { number: "01", title: "Technical Scoping", description: "Analyzing catalog size, custom fields, and plugin parameters.", icon: "fa-solid fa-list-check" },
        { number: "02", title: "Figma Designing", description: "Creating custom storefront layouts for all devices.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Theme Custom Coding", description: "Writing lightweight custom Liquid code and styling grids.", icon: "fa-solid fa-code" },
        { number: "04", title: "Integrations & Setup", description: "Configuring email trackers, checkout options, and tax rules.", icon: "fa-solid fa-plug" },
        { number: "05", title: "Domain Launch", description: "Mapping DNS servers, enabling SSL certificates, and going live.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "FEATURED STORES",
      title: "Custom Shopify Launches",
      items: [
        { title: "Gourmet Foods Store", tech: "Liquid 2.0, Tailwind, AlpineJS", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Bespoke Skincare Hub", tech: "Next.js, Shopify Storefront API", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak redesigned our catalog, speeded checkout to under 2 seconds, and automated email followups. Our sales rose 40% in two months.", author: "Amit Singhal", role: "Manager, DailyChronicle", logoText: "DailyChronicle" }
    ],
    faqs: [
      { question: "Can you customize Shopify themes?", answer: "Yes, we write custom Liquid and JavaScript code to implement features that standard themes do not support out of the box." },
      { question: "Can you migrate my current store to Shopify?", answer: "Absolutely. We routinely migrate stores from WooCommerce, Magento, or custom code to Shopify while preserving all order histories and product lists." }
    ],
    cta: {
      title: "Build Your Shopify Storefront",
      description: "Discuss your retail goals with our certified Shopify architects.",
      btnText: "Consult Shopify Coder",
      btnLink: "/contact"
    }
  },
  "custom-website-development": {
    meta: {
      title: "Custom Website Development | Nooryak Technologies",
      description: "Get completely custom website development solutions built from scratch with Next.js, Node.js, and Postgres tailored to your business rules."
    },
    hero: {
      label: "CUSTOM WEBSITE DEVELOPMENT",
      title: {
        line1: "Bespoke Custom Web Development ",
        highlight: "Tailored to Your Exact Business Goals"
      },
      description: "We build completely custom websites and complex web applications from scratch. No templates. No limitations. Just custom code engineered for your exact business requirements.",
      buttons: [
        { text: "Build Custom Web App", link: "/contact", type: "primary" },
        { text: "Talk to Expert", link: "/contact", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-wand-magic-sparkles", text: "Zero Template Limits" },
        { icon: "fa-solid fa-shield", text: "High Security Standards" },
        { icon: "fa-solid fa-bolt", text: "Maximum Page Performance" },
        { icon: "fa-solid fa-code-fork", text: "API First Architectures" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT CUSTOM WEBSITES",
      title: "No Templates. No Constraints.",
      description: "Standard CMS platforms fail when handling complex database relationships or custom user flows. We build custom websites from the ground up, utilizing modern React frontends and secure backend APIs to match your exact business rules.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-layer-group", title: "Custom Architecture", description: "Databases, server controllers, and layouts designed specifically for you." },
        { icon: "fa-solid fa-lock", title: "Hardened Security", description: "Encryption, secure cookie variables, JWT tokens, and SQL guards." },
        { icon: "fa-solid fa-gauge-high", title: "Speed Engineering", description: "Tailored APIs returning data instantly, achieving optimal Core Web Vitals." },
        { icon: "fa-solid fa-arrows-up-to-line", title: "Scalable Nodes", description: "Easily handle traffic spikes using load balanced cloud servers." }
      ]
    },
    offerings: {
      label: "OUR CAPABILITIES",
      title: "Dynamic Custom Web Services",
      items: [
        { icon: "fa-solid fa-cubes", title: "Custom SaaS Dashboards", description: "Develop subscriber portals, billing managers, and analytical graphs." },
        { icon: "fa-solid fa-database", title: "Custom Relational Databases", description: "Model PostgreSQL or MongoDB databases with custom query controllers." },
        { icon: "fa-solid fa-network-wired", title: "REST & GraphQL APIs", description: "Code fast, secure endpoints connecting frontends to backend logic." },
        { icon: "fa-solid fa-user-lock", title: "RBAC User Permissions", description: "Configure custom registration systems, password resets, and user roles." },
        { icon: "fa-solid fa-arrows-spin", title: "Legacy Migration", description: "Refactor old systems into Next.js and Node.js without data loss." },
        { icon: "fa-solid fa-cloud-arrow-up", title: "Cloud DevOps Deployments", description: "Set up secure AWS, Vercel, or DigitalOcean cloud clusters." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE CUSTOM NOORYAK WEB DEVELOPMENT",
      title: "Bespoke Solutions Coded for Speed and Security",
      bullets: [
        "Certified Next.js, React & Node.js developers",
        "Completely custom design layouts and user flows",
        "Optimized database architectures and fast APIs",
        "Highest standards of secure code encryption",
        "Auto-scaling cloud infrastructure configurations",
        "Dedicated project managers and ongoing support"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "70+", label: "Custom Apps Launched" },
        { value: "0ms", label: "Render Lag" },
        { value: "100%", label: "Standard Compliant" },
        { value: "24/7", label: "Server Monitoring" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Custom Development Stack",
      items: [
        { name: "Next.js / React", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "Node.js (Express)", icon: "/assets/images/services/icons/Node.js.png" },
        { name: "PostgreSQL / MongoDB", icon: "/assets/images/services/icons/PHP.png" },
        { name: "TypeScript", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "GraphQL APIs", icon: "/assets/images/services/icons/Node.js.png" },
        { name: "Docker / AWS", icon: "/assets/images/services/icons/Docker.png" }
      ]
    },
    process: {
      label: "DELIVERY FLOW",
      title: "How We Code Custom Portals",
      steps: [
        { number: "01", title: "Scoping & Specs", description: "Drafting user roles, data schemas, and backend specifications.", icon: "fa-solid fa-file-invoice" },
        { number: "02", title: "Database & UI Design", description: "Designing Figma mockups and database relationships.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Custom Coding", description: "Writing frontend components, backend logic, and API routes.", icon: "fa-solid fa-code" },
        { number: "04", title: "API Audit & Security", description: "Penetration checks, JWT validation audits, and unit testing.", icon: "fa-solid fa-shield-halved" },
        { number: "05", title: "Cloud Launch", description: "Mapping DNS records, generating SSLs, and scaling cloud variables.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "CASE STUDIES",
      title: "Advanced Custom Apps Deployed",
      items: [
        { title: "B2B Logistics Portal", tech: "React, Node.js, PostgreSQL", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Healthcare CRM Platform", tech: "Next.js, Express, MongoDB", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak built our logistic dashboard from scratch. Their database queries are fast, the UI is modular, and their code is secure. Brilliant team.", author: "Amit Singhal", role: "CTO, LogisticHub", logoText: "LogisticHub" }
    ],
    faqs: [
      { question: "Do you use WordPress or Shopify for custom sites?", answer: "No, custom web development implies coding the frontend (Next.js/React) and backend (Node.js/Python) from scratch for maximum flexibility." },
      { question: "Is a custom website more expensive?", answer: "Yes, custom development takes more engineering hours, but it provides maximum performance, zero platform fees, and infinite scalability." }
    ],
    cta: {
      title: "Ready to Build Bespoke Application?",
      description: "Discuss your application requirements with our lead technical architects.",
      btnText: "Consult Coder",
      btnLink: "/contact"
    }
  },
  "website-design-and-development": {
    meta: {
      title: "Website Design and Development Services | Nooryak Technologies",
      description: "Get end-to-end website design and development services. We combine stunning Figma UI/UX designs with lightweight, fast web coding."
    },
    hero: {
      label: "WEBSITE DESIGN AND DEVELOPMENT",
      title: {
        line1: "Complete Website Design ",
        highlight: "and Development Solutions"
      },
      description: "We combine world-class UI/UX design with clean, high-performance web coding. Get a website that looks stunning, represents your brand, and ranks on search engines.",
      buttons: [
        { text: "Start Design & Dev", link: "/contact", type: "primary" },
        { text: "View Portfolio", link: "/portfolio", type: "secondary" }
      ],
      features: [
        { icon: "fa-solid fa-palette", text: "Award Winning UI/UX Layouts" },
        { icon: "fa-solid fa-code", text: "Clean & Fast Web Coding" },
        { icon: "fa-solid fa-search", text: "Technical SEO Integrated" },
        { icon: "fa-solid fa-award", text: "Complete Brand Optimization" }
      ],
      image: "/assets/images/services/webdevelopment.png"
    },
    about: {
      label: "ABOUT DESIGN & DEVELOPMENT",
      title: "Combining Aesthetics with Tech Excellence",
      description: "A gorgeous design fails if it load slowly, and a fast site fails if it looks dated. We bridge the gap. Our design team creates custom UI layouts in Figma, which our dev team codes cleanly for speed, accessibility, and SEO.",
      image: "/assets/images/services/softwaredevelopment.png",
      features: [
        { icon: "fa-solid fa-wand-magic-sparkles", title: "Custom Figma UI/UX", description: "Bespoke wireframes and style guides tailored to match your company's aesthetic." },
        { icon: "fa-solid fa-bolt", title: "Page Speed Optimized", description: "Minified stylesheets, responsive images, and optimized asset loading." },
        { icon: "fa-solid fa-magnifying-glass", title: "Technical SEO", description: "Configured sitemaps, structured schemas, meta tags, and alt attributes." },
        { icon: "fa-solid fa-crop", title: "100% Mobile Ready", description: "Adaptive grid systems looking stunning on all phones and tablets." }
      ]
    },
    offerings: {
      label: "OUR SOLUTIONS",
      title: "Complete Design & Dev Services",
      items: [
        { icon: "fa-solid fa-palette", title: "Figma UI/UX Mockups", description: "Visual layouts showing color schemes, fonts, and responsive alignments." },
        { icon: "fa-solid fa-code", title: "Responsive Frontend Coding", description: "Developing layouts using clean React, Next.js, or WordPress code." },
        { icon: "fa-solid fa-server", title: "Backend Systems Setup", description: "Configuring database queries, administrative portals, and integrations." },
        { icon: "fa-solid fa-cart-shopping", title: "Ecommerce Store Design", description: "Stunning product catalogs, interactive cart grids, and checkout flows." },
        { icon: "fa-solid fa-gauge-high", title: "Core Web Vitals Audit", description: "Optimizing code to achieve green ratings on Google PageSpeed Insights." },
        { icon: "fa-solid fa-screwdriver-wrench", title: "Ongoing Support", description: "Security audits, page updates, and regular file backups." }
      ]
    },
    whyChoose: {
      label: "WHY CHOOSE DESIGN & DEV WITH NOORYAK",
      title: "Beautiful, Secure Portals Built to Convert",
      bullets: [
        "Specialist designers & developers in one team",
        "Completely custom Figma designs and styles",
        "Next-generation responsive framework setups",
        " Yoast & RankMath search optimization setups",
        "Reliable project delivery timelines and sprints",
        "Secure server configurations and hosting setups"
      ],
      videoThumbnail: "/assets/images/services/software_development.jpg",
      stats: [
        { value: "200+", label: "Portals Coded" },
        { value: "95%", label: "Clients Recommended" },
        { value: "4.9★", label: "Trustpilot Score" },
        { value: "50+", label: "Web Specialists" }
      ]
    },
    technologies: {
      label: "TECHNOLOGIES WE USE",
      title: "Ecosystem We Use",
      items: [
        { name: "Figma UI/UX", icon: "/assets/images/services/icons/React.png" },
        { name: "Next.js / React", icon: "/assets/images/services/icons/Next.js.png" },
        { name: "WordPress CMS", icon: "/assets/images/services/icons/PHP.png" },
        { name: "PHP / Laravel", icon: "/assets/images/services/icons/Laravel.png" },
        { name: "PostgreSQL / MySQL", icon: "/assets/images/services/icons/PHP.png" },
        { name: "Tailwind CSS", icon: "/assets/images/services/icons/Next.js.png" }
      ]
    },
    process: {
      label: "DELIVERY PIPELINE",
      title: "How We Deliver Websites",
      steps: [
        { number: "01", title: "Discovery & Strategy", description: "Analyzing business targets, reference sites, and functionality scope.", icon: "fa-solid fa-magnifying-glass" },
        { number: "02", title: "Figma Designing", description: "Creating custom visual mockups for both desktop and mobile screens.", icon: "fa-solid fa-palette" },
        { number: "03", title: "Coding Phase", description: "Writing frontend components, backend APIs, and database structures.", icon: "fa-solid fa-code" },
        { number: "04", title: "Testing & Hardening", description: "Optimizing loading speeds, testing forms, and checking SSL.", icon: "fa-solid fa-shield-halved" },
        { number: "05", title: "Launch & SEO Indexing", description: "DNS setup, connecting analytics tags, sitemap submit, and going live.", icon: "fa-solid fa-rocket" }
      ]
    },
    recentWork: {
      label: "FEATURED WORK",
      title: "Stunning Design & Dev Launches",
      items: [
        { title: "B2B SaaS Hub UI", tech: "Figma, Next.js, Node.js", image: "/assets/images/services/software_development.jpg", link: "/portfolio" },
        { title: "Cosmetics E-Commerce Shop", tech: "Figma, Custom WooCommerce, PHP", image: "/assets/images/services/software_development.jpg", link: "/portfolio" }
      ]
    },
    reviews: [
      { rating: 5, quote: "Nooryak redesigned our brand interface in Figma and coded it in Next.js. Page views increased, and bounce rates fell significantly. Excellent work.", author: "Rohan Mehta", role: "Owner, Urban Style", logoText: "UrbanStyle" }
    ],
    faqs: [
      { question: "Will I get Figma design files?", answer: "Yes, you own 100% of the Figma UI/UX designs, style guides, assets, and source code files we create." },
      { question: "Do you build SEO tags automatically?", answer: "Yes, we build clean HTML tags, optimized image layers, meta descriptions, and sitemaps for Google indexings." }
    ],
    cta: {
      title: "Ready to Build Your Website?",
      description: "Consult with our design and development specialists today.",
      btnText: "Consult Specialist",
      btnLink: "/contact"
    }
  }
};
