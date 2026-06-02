Next.js Pixel-Perfect Prompt
Social Media Marketing Page — Full Dev Prompt
Copy and paste into Cursor, Claude Code, v0, or any AI coding tool

Copy Full Prompt ↗

### TASK
Build a pixel-perfect, fully responsive Next.js page for the Nooryak Technologies — Social Media Marketing service page. Use Tailwind CSS throughout. Do NOT create a header or footer — the existing global layout already mounts `.custom-header` and `.contact-hero`. Build only the page body content between them.

### DESIGN TOKENS
Primary Orange:       #FF6B2B  (CTAs, icons, highlights, label accents, underline bars)
Orange Hover:         #E55A1A
Soft Orange bg:       #FFF4EE  (icon bg circles, light tints)
Black / Headings:     #0D0D0D
Body Text Gray:       #4A4A4A
Muted Text:           #777777
Background White:     #FFFFFF
Background Off-white: #F8F8F6
Card Border:          #E8E8E8  (1px solid)
Success Green:        #22C55E  (positive delta badges)
Orange delta badge:   #FF6B2B (orange % growth)
Dark CTA strip bg:    #0D0D0D

Font: 'Inter', sans-serif — import via next/font/google
Weights: 400 (body), 500 (nav/labels), 600 (card titles, buttons), 700 (section headings), 800 (hero headline)
Max content width: 1200px — centered, `mx-auto px-6`

### BREADCRUMB
Below the header, full-width, bg #F8F8F6, padding: 12px 0.
Text: "Home › Services › Social Media Marketing" — 13px, color #777777.
"Social Media Marketing" is orange (#FF6B2B).

### SECTION 1 — HERO
Background: #FFFFFF. Padding: 80px 0 60px.
Two-column layout: Left 48% / Right 52%.

LEFT COLUMN:
Small label at top: "SOCIAL MEDIA MARKETING" — 13px, #FF6B2B, 600 weight, letter-spacing: 2px, uppercase.
Below label: orange underline bar — width 40px, height 3px, bg #FF6B2B, margin-top 6px, margin-bottom 20px.

Headline (font-size: 52px, font-weight: 800, line-height: 1.15, color: #0D0D0D):
Line 1: "Social Media Marketing"
Line 2: "That Builds Brands and"
Line 3: "Drives Growth." — "Drives Growth." is orange (#FF6B2B), same size/weight.

Body copy below (max-width: 460px, font-size: 15px, color: #4A4A4A, line-height: 1.7, margin-top: 20px):
"We create data-driven social media strategies that increase visibility, spark engagement, generate quality leads, and convert followers into loyal customers."

Two CTA buttons side by side, margin-top: 32px, gap: 16px:
Button 1 (Primary): "Get Social Media Strategy ↗" — bg #FF6B2B, color #fff, padding 13px 24px, border-radius 6px, font-size 14px, 600 weight, no border.
Button 2 (Ghost): "Let's Talk" — bg transparent, color #0D0D0D, border: 2px solid #0D0D0D, border-radius 6px, padding 12px 24px, font-size 14px, 600 weight.

4 mini stats below buttons, flex row, gap 32px, margin-top 32px. Each stat:
- Orange icon (18px) on left
- Stat value (18px, 700 weight, black)
- Label below (12px, #777777)

Stats:
1. Trend-up icon — "1,200+" — "Campaigns Managed"
2. Star icon — "98%" — "Client Satisfaction"
3. Trend-up icon — "300%+" — "Avg. Engagement Growth"
4. Target/bullseye icon — "ROI" — "Focused Strategy"

RIGHT COLUMN:
Laptop/dashboard mockup. Use a laptop frame SVG (dark grey bezel, screen area inside). Inside the screen render a social analytics dashboard:
  - Top row of 4 metric boxes: "Reach 1.25M +28.4%" / "Engagement 78.6K +34.2%" / "Clicks 23.4K +18.4%" / "Leads 4.2K +29.1%" (each with orange % badge)
  - "Engagement Growth" area: two sparklines — "This Month" (orange line) vs "Last Month" (teal line), x-axis Apr 1→Apr 28.
  - "Engagement Rate" big stat: "5.6%" with "+34.2%" orange badge.
  - "Top Performing Posts" section: 3 post rows with thumbnail placeholder, post title, and number (12.4K / 8.7K / 6.3K).
  - "Platforms" row: Facebook, Instagram, YouTube, LinkedIn, Twitter icons with follower numbers: 245K / 188K / 96K / 74K / 62K, delta badges.
  - "Content Calendar" block: small May calendar grid.
  - "Ad Performance" box top-right: "ROAS 4.6x" / "+42.3%" orange badge / orange sparkline.

To the right of the laptop (absolutely positioned, visible on lg+): vertical stack of 4 social brand icons as pill badges — Facebook (blue #1877F2), Instagram (gradient pill #E1306C), YouTube (red #FF0000), LinkedIn (blue #0A66C2), Twitter/X (black #000000). Each pill: 44px circle, brand color bg, white brand icon, margin-bottom 12px.

Laptop frame: border-radius 12px on screen bezel, dark #1A1A1A. Screen bg #FFFFFF. Overall width ~560px on desktop.

### SECTION 2 — SERVICES (WHAT WE OFFER)
Background: #FFFFFF. Padding: 80px 0.
Section label (centered): "WHAT WE OFFER" — 13px, #FF6B2B, 600 weight, letter-spacing: 2px, uppercase.
Below label: orange underline bar — 40px wide, 3px tall, centered, margin: 8px auto 16px.
Section heading (centered): "Our Social Media Marketing Services" — 36px, 800 weight, #0D0D0D.

7 service cards in a row (desktop 7-col), 4-col (tablet), 2-col (mobile).
Card style: bg #FFFFFF, border: 1px solid #E8E8E8, border-radius: 12px, padding: 24px 16px, text-align: center.
Card hover: border-color #FF6B2B, translateY(-3px), transition 0.2s.

Each card: Large colored social icon (36px, centered, use brand color or orange) / Title (14px, 700 weight, #0D0D0D, margin-top 12px) / Description (12px, #777777, line-height 1.6, margin-top 8px).

Cards:
1. Facebook icon (#1877F2) — "Facebook Marketing" — "Build brand awareness, engage audiences and drive conversions with targeted Facebook strategies."
2. Instagram icon (gradient) — "Instagram Marketing" — "Grow your brand with stunning content, stories, reels and engaging community management."
3. YouTube icon (#FF0000) — "Youtube Marketing" — "Increase visibility and build authority through YouTube content, optimization and channel growth."
4. LinkedIn icon (#0A66C2) — "LinkedIn Marketing" — "Generate B2B leads, build professional connections and position your brand as an industry leader."
5. X/Twitter icon (#000000) — "Twitter Marketing" — "Engage in real-time conversations, build brand voice and drive traffic with smart tweet strategies."
6. Megaphone/bullhorn icon (orange) — "Social Media Advertising" — "Run high-performing paid campaigns that deliver measurable results and higher ROI."
7. Calendar/clock icon (orange) — "Social Media Post Scheduling" — "Plan, schedule and publish content consistently across platforms to maximize engagement."

### SECTION 3 — WHY CHOOSE US
Background: #F8F8F6. Padding: 80px 0.
Section label (centered): "WHY CHOOSE NOORYAK TECHNOLOGIES?" — 13px, #FF6B2B, 600 weight, letter-spacing: 2px.
Below label: orange underline bar centered, 40px × 3px, margin: 8px auto 16px.
Section heading (centered): "Your Growth Partner in Social Media" — 36px, 800 weight, #0D0D0D.

6 items in a row (desktop), 3-col (tablet), 2-col (mobile). No card border — pure icon + text blocks, centered.
Each item: Orange icon inside a 56px circle with bg #FFF4EE (border-radius 50%) / Title (15px, 700 weight, #0D0D0D, margin-top 14px) / Description (13px, #4A4A4A, line-height 1.6, max-width 160px, margin 0 auto, text-align center).

Items:
1. Bar chart icon — "Data-Driven Strategy" — "We use insights and analytics to craft strategies that deliver real results."
2. Grid/brush icon — "Creative Content Planning" — "Engaging content tailored to your audience and brand voice."
3. Money/target icon — "Paid Social Expertise" — "Smart ad targeting to maximize reach, leads and conversions."
4. File/report icon — "Transparent Reporting" — "Detailed reports with clear KPIs so you always know your ROI."
5. Team/people icon — "Dedicated Specialists" — "Experienced social media experts dedicated to your brand's success."
6. Sync/refresh icon — "Brand Consistency" — "We ensure consistent messaging and visual identity across platforms."

### SECTION 4 — PROCESS
Background: #FFFFFF. Padding: 80px 0.
Section label (centered): "OUR PROCESS" — 13px, #FF6B2B, 600 weight, letter-spacing: 2px.
Below label: orange underline bar 40px × 3px, centered.
Section heading (centered): "A Proven Process for Social Success" — 36px, 800 weight, #0D0D0D.

5-step horizontal process row, connected by dashed orange arrows between each step.
Each step container: display flex col, align-items center, text-align center.

Step number badge: Circle 40px diameter, bg #FFF4EE, border: 1.5px solid #FF6B2B, font 16px 700 weight orange. Numbers: "01" "02" "03" "04" "05".
Icon below badge: 28px, dark #0D0D0D, margin-top 12px.
Title: 14px, 700 weight, #0D0D0D, margin-top 10px.
Description: 12px, #777777, max-width 150px, margin 0 auto, margin-top 6px, line-height 1.5.

Steps:
01: Search/audit icon — "Audit & Research" — "We analyze your brand, audience and competitors to find growth opportunities."
02: Map/strategy icon — "Strategy Development" — "We create a customized social media strategy aligned with your goals."
03: Pencil/content icon — "Content Planning" — "We plan engaging content calendars that attract and engage your audience."
04: Rocket/launch icon — "Campaign Launch" — "We execute and manage campaigns across the right platforms."
05: Analytics icon — "Optimization & Reporting" — "We monitor performance, optimize regularly and report results."

Dashed arrows between steps: SVG `` or border-dashed element, orange #FF6B2B, horizontal, centered vertically at the step number circle level. On mobile: rotate to vertical connectors.

### SECTION 5 — RESULTS / PERFORMANCE
Background: #F8F8F6. Padding: 80px 0.
Two-column layout: Left 30% / Right 70%.

LEFT COLUMN:
Small label: "RESULTS THAT MATTER" — 13px, #FF6B2B, 600 weight, uppercase, letter-spacing 1.5px.
Below: orange underline bar 40px × 3px, margin-top 6px.
Heading (36px, 800 weight, #0D0D0D, line-height 1.2): "Real Performance." newline "Real Growth."
Body (14px, #4A4A4A, margin-top 16px, line-height 1.7): "Our strategies are focused on metrics that drive your business forward."
Button below (margin-top 28px): "View Case Studies ↗" — bg #FF6B2B, color #fff, padding 12px 24px, border-radius 6px, 600 weight, 14px.

RIGHT COLUMN — Analytics Dashboard Card:
bg #FFFFFF, border: 1px solid #E8E8E8, border-radius: 16px, padding: 28px.

Top: "Engagement Growth Over Time" (14px, 600 weight, #0D0D0D) + right-side dropdown "This Year ▾" (13px, #777777).
Below: Large SVG area chart — orange area chart (fill: rgba(255,107,43,0.15), stroke: #FF6B2B, stroke-width: 2.5). X-axis months: Jan Feb Mar Apr May Jun Jul Aug. Y-axis: 0 / 25K / 50K / 75K / 100K. Big label inside chart: "+312%" (24px, 800 weight, #FF6B2B) / "Engagement Growth" (12px, #777777).

Right side of dashboard — 2×3 mini KPI grid:
Row 1: "Followers Growth +45.6K ↑32.8%" / "Engagement Rate 6.4% ↑41.3%" / "Reach 2.3M ↑27.8%"
Row 2: "Clicks 120.5K ↑29.1%" / "Leads Generated 8.6K ↑34.7%" / "Cost Per Lead $1.82 ↓23.4%"
Each KPI card: small orange sparkline below value, bg #FAFAFA, border-radius 8px, padding 12px.
Positive badges: green (#22C55E). Negative (Cost Per Lead drop = good): green too with ↓ arrow.

TRUST LOGOS BAR below dashboard:
Full width, centered. Text: "Trusted by 1,000+ brands worldwide" (13px, #777777).
Then 5 partner logo text-marks in a row with icons: Google Partner / Meta Business Partner / HubSpot Partner / Clutch / GoodFirms / Shopify Partners.
All logos in grayscale, displayed inline with 40px gap, font-size 13px, color #999999.

### SECTION 6 — INDUSTRIES (WHO WE SERVE)
Background: #FFFFFF. Padding: 80px 0.
Section label (centered): "WHO WE SERVE" — 13px, #FF6B2B, 600 weight, letter-spacing 2px.
Below: orange underline bar 40px × 3px, centered.
Section heading (centered): "Industries We Help Grow" — 36px, 800 weight, #0D0D0D.

6 industry cards in a row (desktop), 3-col (tablet), 2-col (mobile).
Card style: bg #FFFFFF, border: 1px solid #E8E8E8, border-radius: 12px, padding: 24px 20px, text-align: left.
Card hover: border-color #FF6B2B, translateY(-2px), transition 0.2s.

Each card: Large icon in 48px circle bg #FFF4EE (orange icon inside) / Title (15px, 700 weight, #0D0D0D, margin-top 14px) / Description (13px, #777777, line-height 1.6, margin-top 8px).

Cards:
1. Rocket icon — "Startups" — "Build brand awareness and grow your audiences from the ground up."
2. Shopping cart icon — "eCommerce Brands" — "Drive traffic, sales and customer loyalty with social media."
3. Briefcase icon — "Service Businesses" — "Generate leads and establish trust in your local and global market."
4. Location pin icon — "Local Businesses" — "Increase local visibility and attract more footfall and inquiries."
5. Building/office icon — "B2B Companies" — "Build authority, generate high-quality leads and nurture relationships."

Note: 5 cards (5-col desktop, 3+2 tablet, 1-col mobile).

### SECTION 7 — FAQ
Background: #F8F8F6. Padding: 80px 0.
Two-column layout: Left 35% / Right 65%.

LEFT COLUMN:
Label: "FREQUENTLY ASKED QUESTIONS" — 13px, #FF6B2B, 600 weight, uppercase, letter-spacing 1.5px.
Below: orange underline bar 40px × 3px, margin-top 6px.
Heading (32px, 800 weight, #0D0D0D, line-height 1.3): "Everything You Need" newline "to Know"
Below heading: Orange question-mark illustration / line-art icon — 100px, centered under text, use SVG or emoji-based illustration.

RIGHT COLUMN (accordion):
5 FAQ accordion items. Each item:
- Border-bottom: 1px solid #E8E8E8
- Question row: flex row, question text (15px, 600 weight, #0D0D0D) on left, "+" icon (20px, #FF6B2B) on right.
- Padding: 18px 0
- On click, expand answer (13px, #777777, line-height 1.7, padding-bottom 16px) and change "+" to "−".
- Only one item open at a time.

Questions:
1. "How long does it take to see results from social media marketing?"
   Answer: "Results vary depending on strategy, platform, and goals. Most clients start seeing noticeable engagement improvements within 30–60 days, with significant ROI gains in 3–6 months."
2. "Which social media platforms should my business focus on?"
   Answer: "It depends on your target audience. We analyze your niche, audience demographics, and competitors to recommend the right platforms—whether that's Instagram, LinkedIn, Facebook, or others."
3. "Do you create content for social media?"
   Answer: "Yes! Our team handles complete content creation—including graphics, captions, reels, stories, and video scripts—tailored to your brand voice and audience."
4. "How do you measure the success of social media campaigns?"
   Answer: "We track KPIs like reach, engagement rate, follower growth, click-through rates, leads generated, and ROI. You receive transparent monthly reports with all this data."
5. "Do you run paid ads on social media?"
   Answer: "Absolutely. We manage paid social campaigns on Facebook, Instagram, LinkedIn, and more—handling strategy, creative, targeting, budgeting, and optimization."

FAR RIGHT floating card (beside accordion, appears on lg+ screens):
Card: bg #FFF4EE, border-radius 16px, padding 24px, text-align center, width ~220px, position: relative or grid col.
Orange question-mark circle icon (48px) at top.
Heading: "Have More Questions?" (16px, 700 weight, #0D0D0D, margin-top 12px).
Body: "Our experts are here to help you find the right strategy." (13px, #4A4A4A, margin-top 8px).
Button: "Let's Talk ↗" — bg #FF6B2B, color #fff, padding 10px 20px, border-radius 6px, 13px, 600 weight, margin-top 16px.

### SECTION 8 — CTA BANNER
Background: #0D0D0D. Full width. Padding: 60px 0.
Three-area layout: Left trust / Center text + CTA / Right illustration.

LEFT AREA:
Overlapping avatar circles — 5 circular avatar placeholders (40px each, overlapping by 12px), bg #FF6B2B with white initials, border: 2px solid #0D0D0D.
After the last avatar: orange "+1K" badge pill (bg #FF6B2B, color #fff, font-size 11px, border-radius 20px).
Below avatars (margin-top 10px): "Trusted by 1000+ happy clients worldwide" — 12px, #AAAAAA.

CENTER AREA:
Heading (32px, 700 weight, white): "Ready to Grow Through"
Second line (same size): "Social Media Marketing?" — "Social Media Marketing?" is orange (#FF6B2B).
Body (14px, #AAAAAA, max-width 360px, margin: 12px 0 24px):
"Let's build a strategy that grows your brand, engages your audience and drives meaningful results."
Two buttons stacked (width 280px each):
Button 1: "Get Social Media Strategy ↗" — bg #FF6B2B, color #fff, padding 13px 24px, border-radius 6px, 14px, 600 weight.
Button 2: "Let's Talk" — bg transparent, color #fff, border: 1.5px solid #fff, border-radius 6px, padding 12px 24px, 14px, 600 weight. Margin-top 12px.

RIGHT AREA:
Animated/static orange rocket illustration (SVG) — approximately 130px wide, floating effect using keyframe animation (translateY ±8px, 3s ease-in-out infinite).
Flame trail below rocket in orange.

### ANIMATIONS
Use Intersection Observer API (or framer-motion if already in project):
- Each section fades in: opacity 0 → 1, translateY 24px → 0, duration 0.5s ease-out.
- Cards stagger with 80ms delay per card.
- FAQ accordion: smooth max-height transition 0.3s ease-in-out.
- Rocket in CTA: `@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) }}` 3s infinite.
- Stats counters in hero: count up from 0 on scroll-enter (use requestAnimationFrame, 1.2s duration).

### RESPONSIVE BREAKPOINTS (Tailwind)
Default (< 640px) — mobile:
  - Hero: single column, headline 32px, CTA buttons full-width stacked.
  - Stats row: 2×2 grid.
  - Services: 1-col grid.
  - Why-choose: 2-col grid.
  - Process: vertical stack with vertical dashed connectors.
  - Results: single column (chart below text).
  - Industries: 1-col grid.
  - FAQ: full-width accordion, side card hidden (shown below accordion).
  - CTA banner: stacked vertically, rocket illustration hidden on xs.

sm (640px):
  - Services: 2-col grid.
  - Industries: 2-col grid.

md (768px):
  - Hero: two columns (col-span 5 / col-span 7 in 12-col grid).
  - Services: 3-col, 4-col.
  - Why-choose: 3-col.
  - Industries: 3-col.
  - Stats: 4 in a row.
  - Process: horizontal (overflow-x scroll if needed).

lg (1024px):
  - All desktop multi-column layouts as specified above.
  - Laptop mockup visible in hero.
  - Social icons stack visible beside laptop.

xl (1280px):
  - Max-width 1200px content centered.
  - Hero floating KPI cards visible.
  - All sections full layout.

### ICONS
Use react-icons (ri or fa6 or lucide). Social brand icons: use react-icons/fa (FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaXTwitter). All service icons sized 36px with brand colors. All other icons: 24px, color #FF6B2B.

### FILE STRUCTURE
/app/services/social-media-marketing/page.tsx
/components/social-media/HeroSection.tsx
/components/social-media/ServicesGrid.tsx
/components/social-media/WhyChoose.tsx
/components/social-media/ProcessSteps.tsx
/components/social-media/ResultsDashboard.tsx
/components/social-media/IndustriesGrid.tsx
/components/social-media/FAQSection.tsx
/components/social-media/CTABanner.tsx
/components/social-media/LaptopMockup.tsx
/components/social-media/AreaChart.tsx  (SVG area chart for results section)

### IMPLEMENTATION NOTES
- All section labels: 13px, #FF6B2B, 600 weight, uppercase, letter-spacing 2px, centered. Always followed by a 40px × 3px orange underline bar (margin: 8px auto 16px).
- Charts: Pure SVG — no chart library required. Use `` or `` with smooth bezier curves.
- Dashboard mockup in hero: All fake data rendered as inline HTML/SVG inside a laptop frame div. No images.
- Area chart fill: use `` with stop-opacity 0.3 at bottom, 1 at top, color #FF6B2B.
- Card hover pattern: `hover:border-orange-500 hover:-translate-y-1 transition-all duration-200` (Tailwind).
- Accordion state: manage with React useState, one open index at a time.
- Trust logos: render as styled text with brand logos from react-icons or SVG paths. No external images.
- Laptop frame SVG: create as a thin-border dark rectangle with rounded screen corners. Keep it lightweight — no images.
- All headings use font-weight 800, all card titles 700, all body text 400.
  
