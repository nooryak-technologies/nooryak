export interface TechItem {
  name: string;
  icon: string;
}

export function getSubcategoryTechStack(subcategory: string): TechItem[] {
  const norm = subcategory.toLowerCase()
    .replace(/_/g, '-')
    .replace(/\//g, '-')
    .replace(/&/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Web General
  if (
    norm === 'web-developer' ||
    norm === 'website-development' ||
    norm === 'custom-website-development' ||
    norm === 'website-design-and-development'
  ) {
    return [
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'React', icon: '' },
      { name: 'Next.js', icon: '' },
      { name: 'Node.js', icon: '' },
      { name: 'PHP', icon: '' },
      { name: 'Laravel', icon: '' },
    ];
  }

  // WordPress
  if (norm === 'wordpress-website') {
    return [
      { name: 'WordPress', icon: '' },
      { name: 'PHP', icon: '' },
      { name: 'MySQL', icon: '' },
      { name: 'WooCommerce', icon: '' },
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'Elementor', icon: '' },
    ];
  }

  // Ecommerce / WooCommerce
  if (
    norm === 'ecommerce-website' ||
    norm === 'woocommerce-website' ||
    norm === 'ecommerce-development'
  ) {
    return [
      { name: 'WooCommerce', icon: '' },
      { name: 'WordPress', icon: '' },
      { name: 'PHP', icon: '' },
      { name: 'MySQL', icon: '' },
      { name: 'Shopify', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
    ];
  }

  // Shopify
  if (norm === 'shopify-website' || norm === 'shopify-development') {
    return [
      { name: 'Shopify', icon: '' },
      { name: 'Liquid', icon: '' },
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'React', icon: '' },
      { name: 'Node.js', icon: '' },
      { name: 'GraphQL', icon: '' },
    ];
  }

  // PHP
  if (norm === 'php-web-development') {
    return [
      { name: 'PHP', icon: '' },
      { name: 'Laravel', icon: '' },
      { name: 'MySQL', icon: '' },
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'WordPress', icon: '' },
      { name: 'jQuery', icon: '' },
    ];
  }

  // React
  if (norm === 'react-web-development') {
    return [
      { name: 'React', icon: '' },
      { name: 'Next.js', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'Node.js', icon: '' },
      { name: 'Tailwind CSS', icon: '' },
      { name: 'HTML5', icon: '' },
      { name: 'CSS3', icon: '' },
    ];
  }

  // Android
  if (norm === 'android-application') {
    return [
      { name: 'Kotlin', icon: '' },
      { name: 'Java', icon: '' },
      { name: 'Android SDK', icon: '' },
      { name: 'Android Studio', icon: '' },
      { name: 'Firebase', icon: '' },
      { name: 'SQLite', icon: '' },
      { name: 'Git', icon: '' },
      { name: 'XML', icon: '' },
    ];
  }

  // iOS
  if (norm === 'ios-application') {
    return [
      { name: 'Swift', icon: '' },
      { name: 'Objective-C', icon: '' },
      { name: 'SwiftUI', icon: '' },
      { name: 'Xcode', icon: '' },
      { name: 'CocoaPods', icon: '' },
      { name: 'Firebase', icon: '' },
      { name: 'Git', icon: '' },
      { name: 'CoreData', icon: '' },
    ];
  }

  // React Native
  if (norm === 'react-native') {
    return [
      { name: 'React Native', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'React', icon: '' },
      { name: 'Redux', icon: '' },
      { name: 'Xcode', icon: '' },
      { name: 'Android Studio', icon: '' },
      { name: 'Node.js', icon: '' },
    ];
  }

  // Flutter
  if (norm === 'flutter-app-development') {
    return [
      { name: 'Dart', icon: '' },
      { name: 'Flutter', icon: '' },
      { name: 'Firebase', icon: '' },
      { name: 'Android Studio', icon: '' },
      { name: 'Xcode', icon: '' },
      { name: 'SQLite', icon: '' },
      { name: 'Git', icon: '' },
      { name: 'BLoC Pattern', icon: '' },
    ];
  }

  // Software Dev / MLM
  if (norm === 'software-development' || norm.includes('mlm')) {
    return [
      { name: 'Java', icon: '' },
      { name: 'Python', icon: '' },
      { name: 'C#', icon: '' },
      { name: 'Node.js', icon: '' },
      { name: 'React', icon: '' },
      { name: 'MySQL', icon: '' },
      { name: 'Docker', icon: '' },
      { name: 'TypeScript', icon: '' },
    ];
  }

  // AI Automations
  if (norm === 'ai-automations') {
    return [
      { name: 'Python', icon: '' },
      { name: 'OpenAI API', icon: '' },
      { name: 'LangChain', icon: '' },
      { name: 'TensorFlow', icon: '' },
      { name: 'Node.js', icon: '' },
      { name: 'Zapier', icon: '' },
      { name: 'Make.com', icon: '' },
      { name: 'HuggingFace', icon: '' },
    ];
  }

  // SEO / SEM / Optimization / Ads / Social Media / Local SEO
  if (
    norm.includes('seo') ||
    norm.includes('optimization') ||
    norm.includes('marketing') ||
    norm.includes('search-engine') ||
    norm.includes('ads') ||
    norm.includes('advertising') ||
    norm.includes('campaign') ||
    norm.includes('ranking') ||
    norm.includes('listing') ||
    norm.includes('sms')
  ) {
    if (norm.includes('google-ads') || norm.includes('facebook-ads') || norm.includes('ads') || norm.includes('ppc') || norm.includes('advertising') || norm.includes('campaign')) {
      return [
        { name: 'Google Ads', icon: '' },
        { name: 'Facebook Ads', icon: '' },
        { name: 'Meta Pixel', icon: '' },
        { name: 'Google Analytics', icon: '' },
        { name: 'Google GTM', icon: '' },
        { name: 'SEMrush', icon: '' },
        { name: 'AdMob', icon: '' },
        { name: 'Keyword Planner', icon: '' },
      ];
    }

    if (norm.includes('social') || norm.includes('facebook') || norm.includes('instagram') || norm.includes('youtube') || norm.includes('linkedin') || norm.includes('twitter') || norm.includes('scheduling')) {
      return [
        { name: 'Meta Business Suite', icon: '' },
        { name: 'Instagram Insights', icon: '' },
        { name: 'LinkedIn Manager', icon: '' },
        { name: 'Twitter Analytics', icon: '' },
        { name: 'Buffer', icon: '' },
        { name: 'Hootsuite', icon: '' },
        { name: 'Canva', icon: '' },
        { name: 'YouTube Studio', icon: '' },
      ];
    }

    if (norm.includes('local') || norm.includes('business-ranking') || norm.includes('directory') || norm.includes('listing')) {
      return [
        { name: 'Google Business Profile', icon: '' },
        { name: 'Google Maps', icon: '' },
        { name: 'Yext', icon: '' },
        { name: 'BrightLocal', icon: '' },
        { name: 'Moz Local', icon: '' },
        { name: 'Schema Markup', icon: '' },
        { name: 'Google Search Console', icon: '' },
        { name: 'Google Analytics', icon: '' },
      ];
    }

    return [
      { name: 'Google Analytics', icon: '' },
      { name: 'Google Search Console', icon: '' },
      { name: 'SEMrush', icon: '' },
      { name: 'Ahrefs', icon: '' },
      { name: 'Screaming Frog', icon: '' },
      { name: 'Yoast SEO', icon: '' },
      { name: 'Schema Markup', icon: '' },
      { name: 'PageSpeed Insights', icon: '' },
    ];
  }

  // Graphic Design
  if (
    norm.includes('design') ||
    norm.includes('banner') ||
    norm.includes('card') ||
    norm.includes('event') ||
    norm.includes('report') ||
    norm.includes('catalogue') ||
    norm.includes('menu') ||
    norm.includes('marriage') ||
    norm.includes('billboard') ||
    norm.includes('illustration')
  ) {
    return [
      { name: 'Adobe Photoshop', icon: '' },
      { name: 'Adobe Illustrator', icon: '' },
      { name: 'Adobe InDesign', icon: '' },
      { name: 'Figma', icon: '' },
      { name: 'Canva', icon: '' },
      { name: 'CorelDraw', icon: '' },
      { name: 'Blender', icon: '' },
      { name: 'After Effects', icon: '' },
    ];
  }

  // Branding
  if (norm === 'branding') {
    return [
      { name: 'Adobe Illustrator', icon: '' },
      { name: 'Adobe InDesign', icon: '' },
      { name: 'Figma', icon: '' },
      { name: 'Canva', icon: '' },
      { name: 'Brand Guidelines', icon: '' },
      { name: 'Typography', icon: '' },
      { name: 'Color Theory', icon: '' },
      { name: 'Mockup Design', icon: '' },
    ];
  }

  // Video Editing
  if (norm.includes('video') || norm.includes('shoot') || norm.includes('drone')) {
    return [
      { name: 'Adobe Premiere Pro', icon: '' },
      { name: 'After Effects', icon: '' },
      { name: 'DaVinci Resolve', icon: '' },
      { name: 'Final Cut Pro', icon: '' },
      { name: 'Audition', icon: '' },
      { name: 'Lightroom', icon: '' },
      { name: 'DJI Go (Drone)', icon: '' },
      { name: 'CapCut', icon: '' },
    ];
  }

  // Default fallback
  return [
    { name: 'React', icon: '' },
    { name: 'Next.js', icon: '' },
    { name: 'Node.js', icon: '' },
    { name: 'PHP', icon: '' },
    { name: 'Laravel', icon: '' },
    { name: 'WordPress', icon: '' },
  ];
}
