const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/services/submenu.scss');
let content = fs.readFileSync(filePath, 'utf8');

const heroStyles = `

  // ── MLM DARK HERO STYLING ──────────────────────────────────────────────────
  .mlm-hero {
      background: radial-gradient(circle at 75% 30%, #15113d 0%, #03040e 70%) !important;
      padding: 130px 0 80px !important;
      position: relative;
      overflow: hidden;

      @media (max-width: 1024px) {
          padding: 110px 0 60px !important;
      }

      @media (max-width: 768px) {
          padding: 100px 0 50px !important;
      }

      &__breadcrumb {
          color: rgba(255, 255, 255, 0.4) !important;

          a {
              color: rgba(255, 255, 255, 0.7) !important;

              &:hover {
                  color: #ff7b2b !important;
              }
          }
          span {
              color: rgba(255, 255, 255, 0.3) !important;
          }
      }

      &__label {
          color: #ff7b2b !important;
      }

      &__title {
          color: #ffffff !important;
          
          &--accent {
              color: #ff7b2b !important;
          }
      }

      &__description {
          color: #cad3f0 !important;
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
              color: #ffffff !important;
              border: 2.5px solid rgba(255, 255, 255, 0.25) !important;

              &:hover {
                  border-color: #ffffff !important;
                  background: rgba(255, 255, 255, 0.06) !important;
                  color: #ffffff !important;
              }
          }
      }

      &__visual {
          position: relative !important;
          overflow: visible !important; // Allow floaters to overlap boundary
      }
  }

  // ── Floating Glowing Rings around Laptop Mockup ────────────────────────────
  .mlm-hero-floating {
      position: absolute !important;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 2px solid currentColor;
      background: rgba(0, 0, 0, 0.45);
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
          color: #cad3f0;

          &-icon {
              font-size: 15px;
              flex-shrink: 0;

              &--orange { color: #ffa502; }
              &--blue { color: #70a1ff; }
              &--teal { color: #1abc9c; }
              &--purple { color: #c084fc; }
          }
      }
  }

  // ── Integrated Glass Stats Box (Bottom of Hero) ────────────────────────────
  .mlm-hero-stats-box {
      background: rgba(255, 255, 255, 0.02);
      border: 1.5px solid rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      border-radius: 20px;
      padding: 26px 40px;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

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
      color: #ffffff;
      font-size: 26px;
      font-weight: 800;
      line-height: 1.15;
  }

  .mlm-hero-stat-lbl {
      color: #a0aec0;
      font-size: 13px;
      font-weight: 500;
      margin-top: 2px;
  }
`;

if (!content.includes('mlm-hero')) {
    content += heroStyles;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully appended dark hero and stats styles!");
} else {
    console.log("mlm-hero styles are already present.");
}
