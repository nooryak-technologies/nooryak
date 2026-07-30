import menuThumb from "../../../public/assets/img/menu/menu-1.png";
import { StaticImageData } from "next/image";

// Define types for our menu data
interface MenuLink {
    title: string;
    link: string;
    badge?: string;
}

interface SubMenuItem extends MenuLink {
    submenu?: MenuLink[];
}

interface MenuColumn {
    title: string;
    link?: string;
    links: MenuLink[];
}

interface MenuItem {
    id: number;
    title: string;
    link: string;
    megaMenu: boolean;
    columns?: MenuColumn[];
    submenu?: SubMenuItem[];
    image?: {
        src: StaticImageData;
        alt: string;
    };
}

// Menu data structure
const mobileMenuData: MenuItem[] = [
    { id: 1, title: "Home", link: "/", megaMenu: false },
    { id: 2, title: "About Us", link: "/404", megaMenu: false },

    {
        id: 3,
        title: "Services",
        link: "/404",
        megaMenu: true,
        columns: [
            {
                title: "Web Development",
                link: "/services/submenu/web-development",
                links: [
                    { title: "Web Developer", link: "/services/submenu/web-development/web-developer" },
                    { title: "Website Development", link: "/services/submenu/web-development/website-development" },
                    { title: "WordPress Website", link: "/services/submenu/web-development/wordpress-website" },
                    { title: "Ecommerce Website", link: "/services/submenu/web-development/ecommerce-website" },
                    { title: "Shopify Website", link: "/services/submenu/web-development/shopify-website" },
                    { title: "WooCommerce Website", link: "/services/submenu/web-development/woocommerce-website" },
                    { title: "PHP Web Development", link: "/services/submenu/web-development/php-web-development" },
                    { title: "React Web Development", link: "/services/submenu/web-development/react-web-development" },
                    { title: "Ecommerce Development", link: "/services/submenu/web-development/ecommerce-development" },
                    { title: "Shopify Development", link: "/services/submenu/web-development/shopify-development" },
                    { title: "Custom Website Development", link: "/services/submenu/web-development/custom-website-development" },
                    { title: "Website Design and Development", link: "/services/submenu/web-development/website-design-and-development" }
                ]
            },
            {
                title: "App Development",
                link: "/services/submenu/app-development",
                links: [
                    { title: "Android Application", link: "/services/submenu/app-development/android-application" },
                    { title: "IOS Application", link: "/services/submenu/app-development/ios-application" },
                    { title: "React Native", link: "/services/submenu/app-development/react-native" },
                    { title: "Flutter App Development", link: "/services/submenu/app-development/flutter-app-development" },
                ]
            },
            {
                title: "Digital Marketing",
                link: "/services/submenu/digital-marketing",
                links: [
                    { title: "Search Engine Optimization", link: "/services/submenu/digital-marketing/search-engine-optimization" },
                    { title: "Search Engine Marketing", link: "/services/submenu/digital-marketing/search-engine-marketing" },
                    { title: "Social Media Marketing", link: "/services/submenu/social-media-marketing" },
                    { title: "SMS Marketing", link: "/services/submenu/digital-marketing/sms-marketing" },
                    { title: "Facebook Marketing", link: "/services/submenu/digital-marketing/facebook-marketing" },
                    { title: "Content Marketing", link: "/services/submenu/digital-marketing/content-marketing" },
                    { title: "On-Page Optimization", link: "/services/submenu/digital-marketing/on-page-optimization" },
                    { title: "Off-Page Optimization", link: "/services/submenu/digital-marketing/off-page-optimization" },
                    { title: "Technical SEO", link: "/services/submenu/digital-marketing/technical-seo" },
                    { title: "Branding", link: "/services/submenu/digital-marketing/branding" }
                ]
            },
            {
                title: "Social Media Marketing",
                link: "/services/submenu/social-media-marketing",
                links: [
                    { title: "Facebook Marketing", link: "/services/submenu/social-media-marketing/facebook-marketing" },
                    { title: "Instagram Marketing", link: "/services/submenu/social-media-marketing/instagram-marketing" },
                    { title: "Youtube Marketing", link: "/services/submenu/social-media-marketing/youtube-marketing" },
                    { title: "LinkedIn Marketing", link: "/services/submenu/social-media-marketing/linkedin-marketing" },
                    { title: "Twitter Marketing", link: "/services/submenu/social-media-marketing/twitter-marketing" },
                    { title: "Social Media Advertising", link: "/services/submenu/social-media-marketing/social-media-advertising" },
                    { title: "Social Media Post Scheduling", link: "/services/submenu/social-media-marketing/social-media-post-scheduling" }
                ]
            },
            {
                title: "Local SEO",
                link: "/services/submenu/local-seo",
                links: [
                    { title: "Google My Business Ranking", link: "/services/submenu/local-seo/google-my-business-ranking" },
                    { title: "Local Directory Listings", link: "/services/submenu/local-seo/local-directory-listings" },
                    { title: "Local SEO Tools", link: "/services/submenu/local-seo/local-seo-tools" }
                ]
            },
            {
                title: "Pay-Per-Click (PPC)",
                link: "/services/submenu/ppc",
                links: [
                    { title: "Google Ads", link: "/services/submenu/ppc/google-ads" },
                    { title: "Facebook Ads", link: "/services/submenu/ppc/facebook-ads" },
                    { title: "Display Advertising", link: "/services/submenu/ppc/display-advertising" },
                    { title: "Remarketing Campaigns", link: "/services/submenu/ppc/remarketing-campaigns" }
                ]
            },
            {
                title: "Graphic Designing",
                link: "/services/submenu/graphic-designing",
                links: [
                    { title: "Logo Designs", link: "/services/submenu/graphic-designing/logo-designs" },
                    { title: "Package Designs", link: "/services/submenu/graphic-designing/package-designs" },
                    { title: "Social Media Designs", link: "/services/submenu/graphic-designing/social-media-designs" },
                    { title: "Brochure Designs", link: "/services/submenu/graphic-designing/brochure-designs" },
                    { title: "Pamphlet Designs", link: "/services/submenu/graphic-designing/pamphlet-designs" },
                    { title: "Website Banners", link: "/services/submenu/graphic-designing/website-banners" },
                    { title: "Banner Designs", link: "/services/submenu/graphic-designing/banner-designs" },
                    { title: "2D & 3D Designs", link: "/services/submenu/graphic-designing/2d-and-3d-designs" },
                    { title: "Standee Designs", link: "/services/submenu/graphic-designing/standee-designs" },
                    { title: "Creative Business Card designs", link: "/services/submenu/graphic-designing/creative-business-card-designs" },
                    { title: "Annual report design", link: "/services/submenu/graphic-designing/annual-report-design" },
                    { title: "End to End Event designs", link: "/services/submenu/graphic-designing/end-to-end-event-designs" },
                    { title: "CSR Report design", link: "/services/submenu/graphic-designing/csr-report-design" },
                    { title: "Strategy Report Design", link: "/services/submenu/graphic-designing/strategy-report-design" },
                    { title: "Catalogue Designs", link: "/services/submenu/graphic-designing/catalogue-designs" },
                    { title: "Menu Designs", link: "/services/submenu/graphic-designing/menu-designs" },
                    { title: "Marriage Card designs", link: "/services/submenu/graphic-designing/marriage-card-designs" },
                    { title: "Hoarding/billboard designs", link: "/services/submenu/graphic-designing/hoarding-billboard-designs" },
                    { title: "Illustrations", link: "/services/submenu/graphic-designing/illustrations" },
                    { title: "Branding", link: "/services/submenu/graphic-designing/branding" }
                ]
            },
            {
                title: "Video Editing",
                link: "/services/submenu/video-editing",
                links: [
                    { title: "Reel Videos", link: "/services/submenu/video-editing/reel-videos" },
                    { title: "Model Shoot Videos", link: "/services/submenu/video-editing/model-shoot-videos" },
                    { title: "RealEstate Drone Shots", link: "/services/submenu/video-editing/realestate-drone-shots" },
                    { title: "Custom Videos", link: "/services/submenu/video-editing/custom-videos" }
                ]
            },
            {
                title: "Software Development",
                link: "/services/submenu/software-development",
                links: [
                    { title: "Software Development", link: "/services/submenu/software-development/software-development" },
                    { title: "AI Automations", link: "/services/submenu/software-development/ai-automations" },
                    { title: "MLM Software Development", link: "/services/submenu/mlm" }
                ]
            },
        ],
        image: { src: menuThumb, alt: "menu thumb" }
    },

    {
        id: 4,
        title: "Products",
        link: "/products",
        megaMenu: true,
        columns: [
            {
                title: "",
                links: [
                    { title: "SAAS WEBSITE BUILDER", link: "https://launchshop.in/" },
                    { title: "SAAS LEAD MANAGEMENT CRM", link: "https://nooryakcrm.com/" },
                    { title: "SAAS INVOICE GENERATOR", link: "https://pos.nooryak.com/" },
                ]
            },
        ],

        image: { src: menuThumb, alt: "menu thumb" }
    },

    { id: 5, title: "Portfolio", link: "/404", megaMenu: false },
    { id: 6, title: "Careers", link: "/404", megaMenu: false },
    { id: 7, title: "Clients", link: "/404", megaMenu: false },
    { id: 8, title: "Blog", link: "/404", megaMenu: false },
    { id: 9, title: "Contact", link: "/contact", megaMenu: false }
];

export default mobileMenuData;