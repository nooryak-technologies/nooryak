const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/services/submenu.scss');
let content = fs.readFileSync(filePath, 'utf8');

const animationStyles = `

  // ── MLM GLOW & NETWORK BACKGROUND ANIMATIONS ──────────────────────────────
  .mlm-hero-bg-glow {
      position: absolute !important;
      width: 350px !important;
      height: 350px !important;
      border-radius: 50% !important;
      filter: blur(60px) !important;
      background: radial-gradient(circle, rgba(244, 81, 11, 0.12) 0%, transparent 70%) !important;
      top: 10% !important;
      left: 10% !important;
      z-index: 1 !important;
      pointer-events: none !important;
      animation: rotateGlow 15s linear infinite !important;
  }

  .mlm-hero-bg-glow-secondary {
      position: absolute !important;
      width: 300px !important;
      height: 300px !important;
      border-radius: 50% !important;
      filter: blur(50px) !important;
      background: radial-gradient(circle, rgba(155, 89, 182, 0.08) 0%, transparent 70%) !important;
      bottom: 10% !important;
      right: 10% !important;
      z-index: 1 !important;
      pointer-events: none !important;
      animation: rotateGlow 12s linear infinite reverse !important;
  }

  @keyframes rotateGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

  .mlm-hero-network-svg {
      position: absolute !important;
      width: 100% !important;
      height: 100% !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 2 !important;
      pointer-events: none !important;

      path {
          animation: dashMove 2.5s linear infinite !important;
      }
  }

  @keyframes dashMove {
      to {
          stroke-dashoffset: -20;
      }
  }

  .mlm-hero__img {
      position: relative !important;
      z-index: 5 !important;
  }

  // Refine positioning for 5 floating MLM bubbles
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
  }
`;

if (!content.includes('mlm-hero-bg-glow')) {
    content += animationStyles;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully appended white hero animations!");
} else {
    console.log("mlm-hero-bg-glow animations are already present.");
}
