const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/services/submenu.scss');
let content = fs.readFileSync(filePath, 'utf8');

const radarStyles = `

  // ── MLM HERO PULSING CONCENTRIC RADAR RIPPLES ──────────────────────────────
  .mlm-hero-radar-ripple {
      position: absolute !important;
      width: 440px !important;
      height: 440px !important;
      border-radius: 50% !important;
      border: 1.5px solid rgba(244, 81, 11, 0.12) !important;
      top: 15% !important;
      left: 20% !important;
      z-index: 2 !important;
      pointer-events: none !important;
      transform-origin: center !important;
      animation: radarPulse 4.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite !important;

      &--1 { animation-delay: 0s !important; }
      &--2 { animation-delay: 1.5s !important; }
      &--3 { animation-delay: 3s !important; }

      @media (max-width: 1024px) {
          width: 360px !important;
          height: 360px !important;
          left: 15% !important;
      }

      @media (max-width: 768px) {
          width: 280px !important;
          height: 280px !important;
          left: 10% !important;
      }
  }

  @keyframes radarPulse {
      0% {
          transform: scale(0.5);
          opacity: 0.9;
      }
      50% {
          opacity: 0.4;
      }
      100% {
          transform: scale(1.35);
          opacity: 0;
      }
  }
`;

// Replace the previous mlm-hero-floating positions
const floatersFindStr = `  // Refine positioning for 5 floating MLM bubbles
  .mlm-hero-floating {
      &--purple {
          color: #9b59b6 !important;
          top: 18% !important;
          left: 10% !important;
          animation-delay: 0s !important;
      }
      &--red {
          color: #ff4d4d !important;
          top: 10% !important;
          right: 12% !important;
          animation-delay: 0.8s !important;
      }
      &--orange {
          color: #f4510b !important;
          bottom: 22% !important;
          left: 4% !important;
          animation-delay: 1.6s !important;
      }
      &--green {
          color: #2ecc71 !important;
          top: 48% !important;
          left: -4% !important;
          animation-delay: 2.4s !important;
      }
      &--blue {
          color: #3498db !important;
          bottom: 16% !important;
          right: 10% !important;
          animation-delay: 3.2s !important;
      }
  }`;

const floatersNewStr = `  // Refine positioning for 5 floating MLM bubbles - Curved Cluster Left & Right
  .mlm-hero-floating {
      &--red {
          color: #ff4d4d !important;
          top: 30% !important;
          left: 22% !important;
          animation-delay: 0.8s !important;
      }
      &--purple {
          color: #9b59b6 !important;
          top: 38% !important;
          left: 35% !important;
          animation-delay: 0s !important;
      }
      &--orange {
          color: #f4510b !important;
          top: 48% !important;
          left: 26% !important;
          animation-delay: 1.6s !important;
      }
      &--green {
          color: #2ecc71 !important;
          top: 60% !important;
          left: 12% !important;
          animation-delay: 2.4s !important;
      }
      &--blue {
          color: #3498db !important;
          bottom: 12% !important;
          right: 8% !important;
          animation-delay: 3.2s !important;
      }
  }`;

if (content.includes(floatersFindStr)) {
    content = content.replace(floatersFindStr, floatersNewStr);
    console.log("Successfully replaced bubble floaters positions!");
} else {
    console.log("Original bubble positions not found exactly. Appending new ones.");
    content += floatersNewStr;
}

if (!content.includes('mlm-hero-radar-ripple')) {
    content += radarStyles;
    console.log("Successfully appended radar styles!");
} else {
    console.log("Radar styles already present.");
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Finished successfully!");
