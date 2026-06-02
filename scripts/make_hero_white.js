const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/services/submenu.scss');
let content = fs.readFileSync(filePath, 'utf8');

// The new white theme hero styling
const whiteHeroStyles = `

  // ── MLM PREMIUM WHITE HERO STYLING ─────────────────────────────────────────
  .mlm-hero {
      background: #ffffff !important;
      padding: 120px 0 60px !important;
      position: relative;
      overflow: hidden;

      @media (max-width: 1024px) {
          padding: 100px 0 50px !important;
      }

      @media (max-width: 768px) {
          padding: 90px 0 40px !important;
      }

      &__breadcrumb {
          color: #888888 !important;

          a {
              color: #555555 !important;

              &:hover {
                  color: #f4510b !important;
              }
          }
          span {
              color: #bbbbbb !important;
          }
      }

      &__label {
          color: #f4510b !important;
      }

      &__title {
          color: #111111 !important;
          
          &--accent {
              color: #f4510b !important;
          }
      }

      &__description {
          color: #555555 !important;
      }

      &__actions {
          @media (max-width: 768px) {
              flex-direction: row !important;
              align-items: center !important;
              justify-content: flex-start !important;
              gap: 14px !important;
          }
      }

      &__btn {
          &--outline {
              background: transparent !important;
              color: #111111 !important;
              border: 2.5px solid rgba(0, 0, 0, 0.15) !important;

              &:hover {
                  border-color: #111111 !important;
                  background: rgba(0, 0, 0, 0.04) !important;
                  color: #111111 !important;
              }
          }
      }

      &__visual {
          position: relative !important;
          overflow: visible !important;
      }
  }

  // ── Floating Glowing Rings around Laptop Mockup ────────────────────────────
  .mlm-hero-floating {
      position: absolute !important;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 2px solid currentColor;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      z-index: 10;
      box-shadow: 0 0 15px currentColor;
      animation: mlmBob 4s ease-in-out infinite;

      // Color placements
      &--purple {
          color: #c084fc;
          top: 25%;
          left: 10%;
          animation-delay: 0s;
      }
      &--red {
          color: #f87171;
          bottom: 25%;
          left: 2%;
          animation-delay: 1.2s;
      }
      &--orange {
          color: #fbbf24;
          top: 30%;
          right: 3%;
          animation-delay: 2.4s;
      }

      @media (max-width: 768px) {
          width: 38px;
          height: 38px;
          font-size: 14px;
      }
  }

  @keyframes mlmBob {
      0%, 100% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-10px);
      }
  }

  // ── Four Icon features inline ──────────────────────────────────────────────
  .mlm-hero-features-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 28px;
      margin-bottom: 35px;
      text-align: left;

      .mlm-hero-feat {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          font-weight: 500;
          color: #555555;

          &-icon {
              font-size: 15px;
              flex-shrink: 0;

              &--orange { color: #f4510b; }
              &--blue { color: #3498db; }
              &--teal { color: #1abc9c; }
              &--purple { color: #9b59b6; }
          }
      }
  }

  // ── Integrated White Glass Stats Box (Bottom of Hero) ──────────────────────
  .mlm-hero-stats-box {
      background: #ffffff !important;
      border: 1px solid #f0e0d6 !important;
      border-radius: 20px;
      padding: 26px 40px;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(244, 81, 11, 0.06) !important;

      @media (max-width: 1024px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px 20px;
          padding: 24px 30px;
      }

      @media (max-width: 480px) {
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 20px;
          text-align: center;
          
          .mlm-hero-stat-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
          }
          
          .mlm-hero-stat-text {
              align-items: center;
          }
      }
  }

  .mlm-hero-stat-item {
      display: flex;
      align-items: center;
      gap: 18px;
  }

  .mlm-hero-stat-icon-wrap {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: 2px solid currentColor;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      flex-shrink: 0;
      box-shadow: 0 0 15px currentColor;

      &--purple { color: #c084fc; }
      &--green { color: #34d399; }
      &--blue { color: #38bdf8; }
      &--yellow { color: #fbbf24; }
  }

  .mlm-hero-stat-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  .mlm-hero-stat-val {
      color: #111111 !important;
      font-size: 26px;
      font-weight: 800;
      line-height: 1.15;
  }

  .mlm-hero-stat-lbl {
      color: #666666 !important;
      font-size: 13px;
      font-weight: 500;
      margin-top: 2px;
  }
`;

// Replace the previous mlm-hero styles block
const indexToReplace = content.indexOf('// ── MLM DARK HERO STYLING ──────────────────────────────────────────────────');

if (indexToReplace !== -1) {
    content = content.substring(0, indexToReplace) + whiteHeroStyles;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully switched MLM hero theme to white!");
} else {
    // If not found, let's try replacing MLM PREMIUM WHITE HERO STYLING or append
    console.log("Dark hero tag not found. Checking if white styling already exists.");
    if (!content.includes('MLM PREMIUM WHITE HERO STYLING')) {
        content += whiteHeroStyles;
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Appended white hero styles!");
    } else {
        console.log("White hero styles already present.");
    }
}
