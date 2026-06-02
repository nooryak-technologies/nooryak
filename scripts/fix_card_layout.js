const fs = require('fs');
let css = fs.readFileSync('src/app/services/submenu.scss','utf8');

// Replace image-wrap section
const oldWrap = `     &__image-wrap {
         flex-shrink: 0;
         width: 220px;
         border-radius: 10px;
         overflow: hidden;
         background: linear-gradient(135deg, #ffeedd 0%, #ffd9b8 100%);
         display: flex;
         align-items: center;
         justify-content: center;
         align-self: stretch;

         @media (max-width: 1024px) {
             width: 180px;
         }

         @media (max-width: 900px) {
             width: 100%;
             height: 200px;
         }
     }`;
const newWrap = `     &__image-wrap {
         width: 100%;
         height: 220px;
         overflow: hidden;
         background: linear-gradient(135deg, #ffeedd 0%, #ffd9b8 100%);
         display: flex;
         align-items: center;
         justify-content: center;
     }`;

css = css.replace(oldWrap, newWrap);

// Replace img section  
const oldImg = `     &__img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         object-position: center;
     }`;
const newImg = `     &__img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         object-position: center;
         transition: transform 0.4s ease;
     }

     &:hover &__img {
         transform: scale(1.04);
     }`;
css = css.replace(oldImg, newImg);

// Replace info section
const oldInfo = `     &__info {
         flex: 1;
         display: flex;
         flex-direction: column;
         gap: 8px;
         justify-content: center;
     }`;
const newInfo = `     &__info {
         flex: 1;
         display: flex;
         flex-direction: column;
         gap: 8px;
         justify-content: flex-start;
         padding: 20px;
     }`;
css = css.replace(oldInfo, newInfo);

fs.writeFileSync('src/app/services/submenu.scss', css);

const checks = [
  css.includes('height: 220px') ? 'image-wrap OK' : 'image-wrap FAILED',
  css.includes('transform: scale(1.04)') ? 'img hover OK' : 'img hover FAILED',
  css.includes('justify-content: flex-start;\n         padding: 20px') ? 'info padding OK' : 'info padding FAILED'
];
console.log('Results:', checks.join(' | '));
