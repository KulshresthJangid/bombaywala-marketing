// ============================================================
// SITE CONFIGURATION — edit this file to update all site content
// ============================================================

export const siteConfig = {
  name: "Bombaywala Marketing",
  legalName: "Tushita Bombaywala Marketing LLP",
  tagline: "We Don't Do Marketing. We Drive Results.",
  description:
    "Jaipur's performance-first digital marketing & tech agency. E-commerce growth, paid ads, SEO, social media, and full-stack development.",
  url: "https://www.bombaywalamarketing.com",

  contact: {
    phone: "+91 9892907955",
    email: "bombaywalamarketing@gmail.com",
    address: "G7, Tamanna Tower, Vaishali Nagar, Jaipur, Rajasthan 302021",
    addressShort: "Vaishali Nagar, Jaipur",
    googleMapsUrl: "https://maps.google.com/?q=G7+Tamanna+Tower+Vaishali+Nagar+Jaipur+Rajasthan+302021",
  },

  email: {
    fromAddress: "noreply@bombaywalamarketing.com",
    toAddress: "bombaywalamarketing@gmail.com",
  },

  social: {
    instagram: "https://instagram.com/bombaywala_marketing/",
    facebook: "https://facebook.com/p/Bombaywala-Digital-Marketing-Agency-61555082440013/",
    linkedin: "https://linkedin.com/company/bombaywala-digital-marketing-agency/",
  },

  stats: [
    { value: 10, suffix: "+", label: "Brands Scaled" },
    { value: 54, suffix: "x", label: "Peak ROAS Achieved" },
    { value: 10, suffix: "L+", label: "Revenue Generated (₹)" },
    { value: 1500, suffix: "+", label: "Leads Delivered" },
    { value: 400, suffix: "K+", label: "Social Reach" },
    { value: 5000, suffix: "+", label: "Event Attendees" },
  ],
};

// ── Case Studies ─────────────────────────────────────────────
export const caseStudies = [
  {
    id: "siddhohum",
    client: "Siddhohum",
    industry: "Women's Clothing",
    services: ["Shopify Development", "Branding", "Product Photography", "Meta Ads"],
    challenge: "Brand lacked premium positioning and scalable e-commerce infrastructure.",
    result: "200+ orders in month two",
    metrics: [
      { label: "Orders (Month 1)", value: "108+" },
      { label: "Orders (Month 2)", value: "200+" },
      { label: "ROAS", value: "3–4x" },
    ],
    accentColor: "#FF5500",
    tags: ["E-commerce", "Meta Ads", "Shopify"],
  },
  {
    id: "diya-seating",
    client: "Diya Seating Chair",
    industry: "Café & Restaurant Furniture",
    services: ["Shopify Development", "Performance Marketing", "Meta Ads"],
    challenge: "Needed consistent online sales from a digital channel, zero prior ad history.",
    result: "40+ ROAS consistently",
    metrics: [
      { label: "Average ROAS", value: "40x+" },
      { label: "Relationship", value: "Long-term" },
    ],
    accentColor: "#FF5500",
    tags: ["E-commerce", "Meta Ads"],
  },
  {
    id: "newturn-furniture",
    client: "Newturn Furniture",
    industry: "Office Furniture",
    services: ["Meta Ads", "Performance Marketing"],
    challenge: "Poor ROAS and profitability from existing Meta advertising.",
    result: "54x ROAS — 99 purchases",
    metrics: [
      { label: "ROAS", value: "54x" },
      { label: "Purchases", value: "99" },
      { label: "Add-to-Carts", value: "551" },
      { label: "Initiate Checkouts", value: "367" },
    ],
    accentColor: "#FF5500",
    tags: ["Meta Ads", "Performance"],
    featured: true,
  },
  {
    id: "poshpankh",
    client: "Poshpankh",
    industry: "Women's Ethnic Wear",
    services: ["Influencer Marketing", "Meta Ads", "Social Media Marketing"],
    challenge: "Limited budget, needed rapid revenue growth from scratch.",
    result: "₹1.6 lakh sales in one month",
    metrics: [
      { label: "Sales (Week 1)", value: "₹12,000" },
      { label: "Sales (March)", value: "₹40,000" },
      { label: "Sales (April)", value: "₹1,60,000" },
      { label: "ROAS", value: "~4x" },
    ],
    accentColor: "#FF5500",
    tags: ["Influencer", "Meta Ads", "SMM"],
    featured: true,
  },
  {
    id: "tanya-dance",
    client: "Tanya Dance & Music School",
    industry: "Education",
    services: ["Branding", "Social Media Marketing", "Meta Ads", "PR Support"],
    challenge: "No cohesive brand identity, poor social engagement, previous agencies failed.",
    result: "400K+ reach · IIT Roorkee collaboration",
    metrics: [
      { label: "Follower Growth", value: "1K → 5.5K+" },
      { label: "Facebook Followers", value: "+18,000" },
      { label: "Social Reach", value: "400K+" },
      { label: "Viral Reels", value: "100K+ views" },
    ],
    accentColor: "#00B4FF",
    tags: ["Branding", "SMM", "Meta Ads"],
    featured: true,
  },
  {
    id: "ramkishan-agri",
    client: "Ramkishan Agri Innovates",
    industry: "Agriculture",
    services: ["Lead Generation", "Meta Ads"],
    challenge: "Generate qualified dealer and farmer leads across Rajasthan.",
    result: "1,500 qualified leads",
    metrics: [
      { label: "Leads Generated", value: "1,000–1,500" },
      { label: "Channels", value: "WhatsApp Funnels" },
    ],
    accentColor: "#FF5500",
    tags: ["Lead Gen", "Meta Ads"],
  },
  {
    id: "ds-pet",
    client: "DS Pet Care",
    industry: "Pet Food & Care Products",
    services: ["SEO", "Facebook Ads"],
    challenge: "Low search visibility, minimal organic traffic, no prior ad campaigns.",
    result: "₹10 lakh total revenue",
    metrics: [
      { label: "Organic Revenue (SEO)", value: "₹9,00,000" },
      { label: "Paid Revenue (FB)", value: "₹1,00,000" },
      { label: "Facebook ROAS", value: "10x" },
      { label: "Keywords Ranked", value: "25+" },
    ],
    accentColor: "#FF5500",
    tags: ["SEO", "Facebook Ads"],
    featured: true,
  },
  {
    id: "mrc-chair",
    client: "MRC Chair",
    industry: "Office Furniture",
    services: ["SEO", "Meta Ads"],
    challenge: "Low search visibility, poor keyword targeting, no advertising history.",
    result: "₹2.48 lakh revenue on ₹9,730 ad spend",
    metrics: [
      { label: "SEO Revenue", value: "₹1,50,000" },
      { label: "Meta Ads Revenue", value: "₹98,000" },
      { label: "Ad Spend", value: "₹9,730" },
      { label: "ROAS", value: "10x+" },
    ],
    accentColor: "#FF5500",
    tags: ["SEO", "Meta Ads"],
  },
  {
    id: "tejaji-mahakumbh",
    client: "Tejaji Mahakumbh Campaign",
    industry: "Event & Community",
    services: ["Event Promotion", "Social Media Marketing"],
    challenge: "Drive awareness and physical event participation from zero digital presence.",
    result: "5,000+ event attendees",
    metrics: [
      { label: "Followers in 15 Days", value: "1,000" },
      { label: "Event Attendees", value: "5,000+" },
      { label: "Content", value: "Multiple viral reels" },
    ],
    accentColor: "#00B4FF",
    tags: ["Event", "SMM"],
  },
  {
    id: "renatus",
    client: "Deepak Dhama – Renatus",
    industry: "Nutrition & Wellness Supplements",
    services: ["Facebook Lead Generation", "Meta Ads"],
    challenge: "Prior agencies wasted budgets, client had lost faith in digital advertising.",
    result: "586 leads at ₹12/lead",
    metrics: [
      { label: "Total Leads", value: "586" },
      { label: "Cost Per Lead", value: "₹12" },
      { label: "Lead Quality", value: "85% qualified" },
    ],
    accentColor: "#FF5500",
    tags: ["Lead Gen", "Meta Ads"],
  },
  {
    id: "wood-item-wala",
    client: "Wood Item Wala",
    industry: "Home Décor & Woodwork",
    services: ["Product Photography", "Creative Direction"],
    challenge: "Needed premium visual identity to compete in an increasingly visual market.",
    result: "Premium content assets delivered",
    metrics: [
      { label: "Deliverable", value: "Full product shoot" },
      { label: "Outcome", value: "Stronger brand perception" },
    ],
    accentColor: "#FF5500",
    tags: ["Branding", "Photography"],
  },
];

// ── Marketing Services ───────────────────────────────────────
export const marketingServices = [
  {
    id: "ecommerce-marketing",
    title: "E-Commerce Marketing",
    slug: "/services/ecommerce-marketing",
    icon: "ShoppingCart",
    tagline: "Full-funnel growth for your online store",
    description:
      "Data-driven strategies for D2C brands across Shopify, WooCommerce, Amazon & Flipkart. From SEO to performance ads — we own your growth.",
    subServices: [
      "E-Commerce SEO",
      "Performance Marketing (Meta + Google)",
      "Email & WhatsApp Automation",
      "Marketplace Management (Amazon, Flipkart, Meesho)",
      "Social Media Marketing",
      "E-Commerce Content Creation",
    ],
    timeline: "First results in 15–45 days",
  },
  {
    id: "ppc",
    title: "PPC / Paid Ads",
    slug: "/services/ppc",
    icon: "TrendingUp",
    tagline: "Instant traffic. Measurable ROI.",
    description:
      "Google Ads, Meta Ads, and remarketing campaigns built to convert. We've delivered 54x ROAS. Your budget works harder with us.",
    subServices: [
      "Google Search & Display Ads",
      "Google Shopping & Performance Max",
      "Meta (Facebook & Instagram) Ads",
      "YouTube Ads",
      "Remarketing Campaigns",
      "Local PPC (Jaipur & beyond)",
    ],
    timeline: "Results visible within hours",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    slug: "/services/smm",
    icon: "Share2",
    tagline: "Real enquiries, not just likes",
    description:
      "Content strategy, Reels, carousels, influencer collabs — built for Jaipur's audience and beyond. We grew a school to 18K Facebook followers.",
    subServices: [
      "Platform Strategy (Instagram, Facebook, LinkedIn, YouTube)",
      "Content Creation (Reels, Carousels, Stories)",
      "Community Management",
      "Influencer Collaborations",
      "Paid Social Campaigns",
      "Monthly Performance Reports",
    ],
    timeline: "Engagement improvement within 30 days",
  },
  {
    id: "smo",
    title: "Social Media Optimization",
    slug: "/services/smo",
    icon: "Zap",
    tagline: "Organic growth that compounds",
    description:
      "Profile optimization, hashtag strategy, SEO-integrated content, and community building to grow your reach without burning ad budget.",
    subServices: [
      "Profile & Bio Optimization",
      "Content & Hashtag Strategy",
      "Community Building",
      "Competitor Audit",
      "SEO + Social Signal Integration",
      "Monthly Reporting",
    ],
    timeline: "Noticeable growth in 2–3 months",
  },
  {
    id: "seo",
    title: "SEO",
    slug: "/services/seo",
    icon: "Search",
    tagline: "Rank higher. Get found. Grow.",
    description:
      "White-hat SEO that ranks you on page 1. We ranked DS Pet for 25+ keywords and drove ₹9L in organic revenue. Your turn.",
    subServices: [
      "On-Page SEO & Technical Audits",
      "Local SEO & Google Business Profile",
      "Off-Page & Link Building",
      "E-Commerce SEO",
      "SEO Content Writing",
      "Monthly Rank Tracking",
    ],
    timeline: "Rankings in 2–3 months; strong authority in 4–6",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    slug: "/services/smm",
    icon: "Users",
    tagline: "Authentic reach through real voices",
    description:
      "Jaipur-based and national influencer collaborations, UGC content, and creator partnerships that drove Poshpankh to ₹1.6L in a month.",
    subServices: [
      "Influencer Identification & Outreach",
      "UGC Content Strategy",
      "Campaign Brief & Creative Direction",
      "Performance Tracking",
    ],
    timeline: "Campaign launch in 7–14 days",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    slug: "/services/marketing",
    icon: "Camera",
    tagline: "Visuals that sell",
    description:
      "Studio and lifestyle product shoots for e-commerce, ads, and social — like the work we did for Siddhohum and Wood Item Wala.",
    subServices: [
      "Studio Product Photography",
      "Lifestyle & Context Shoots",
      "Creative Direction",
      "Post-Production & Editing",
    ],
    timeline: "Delivery in 5–7 days",
  },
];

// ── Tech Services ────────────────────────────────────────────
export const techServices = [
  {
    id: "shopify",
    title: "Shopify Development",
    icon: "Store",
    tagline: "Custom stores that convert",
    description:
      "Full Shopify builds from scratch — theme customization, product setup, payment gateways, and performance optimization. We built Siddhohum's store that hit 200+ orders in month two.",
    features: [
      "Custom Theme Development",
      "Product & Collection Setup",
      "Payment Gateway Integration",
      "Speed & SEO Optimization",
      "App Integration",
      "Post-Launch Support",
    ],
  },
  {
    id: "web-dev",
    title: "Website Development",
    icon: "Globe",
    tagline: "Fast, modern, built to rank",
    description:
      "Business websites, portfolios, landing pages — built on WordPress, Next.js, or custom stacks. SEO-ready, mobile-first, delivered in 7–15 days.",
    features: [
      "WordPress / Next.js / Custom",
      "Mobile-Responsive Design",
      "SEO-Optimized Structure",
      "Contact & Lead Forms",
      "Google Analytics Integration",
      "Hosting Setup & Domain Config",
    ],
  },
  {
    id: "app-dev",
    title: "App Development",
    icon: "Smartphone",
    tagline: "Mobile apps for Android & iOS",
    description:
      "React Native and Flutter apps for startups and businesses — from MVP to production-ready. Clean UI, smooth UX, built fast.",
    features: [
      "React Native / Flutter",
      "Android & iOS (Cross-Platform)",
      "UI/UX Design Included",
      "API Integration",
      "App Store Submission",
      "Post-Launch Support",
    ],
  },
  {
    id: "maintenance",
    title: "Tech Maintenance & Support",
    icon: "Wrench",
    tagline: "Your tech, always running",
    description:
      "Monthly retainer support for websites, apps, and e-commerce stores — bug fixes, updates, security patches, performance monitoring.",
    features: [
      "Bug Fixes & Updates",
      "Security Patches",
      "Performance Monitoring",
      "Hosting & Domain Management",
      "Content Updates",
      "Priority Response SLA",
    ],
  },
  {
    id: "freelance",
    title: "Freelance & Custom Projects",
    icon: "Code2",
    tagline: "End-to-end software, built your way",
    description:
      "Custom software, MVPs, APIs, automation scripts, integrations — whatever your project needs. Scoped, priced, and delivered on time.",
    features: [
      "Custom Web Applications",
      "MVP Development",
      "API Development & Integration",
      "Automation & Scripting",
      "CRM / ERP Integrations",
      "Third-Party API Connections",
    ],
  },
];

// ── Clients ──────────────────────────────────────────────────
export const clients = [
  "Siddhohum",
  "Diya Seating Chair",
  "Newturn Furniture",
  "Poshpankh",
  "Tanya Dance & Music School",
  "Ramkishan Agri Innovates",
  "DS Pet Care",
  "MRC Chair",
  "Tejaji Mahakumbh",
  "Renatus / Deepak Dhama",
  "Wood Item Wala",
  "Blue Wing",
  "Himashi",
  "Liceria Co",
  "Lava",
  "Ganpat Gurukul",
  "Rinipo",
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    quote: "Significant sales growth — our revenue went from near-zero to over ₹10 lakhs in organic sales alone. Highly recommend.",
    client: "DS Pet Care",
    industry: "Pet Food",
  },
  {
    quote: "Viral reels, 18K Facebook followers, and real students walking through the door. The team understood our vision completely.",
    client: "Tanya Dance & Music School",
    industry: "Education",
  },
  {
    quote: "₹12 per lead and 85% qualified. We'd lost faith in digital marketing before — Bombaywala restored it.",
    client: "Deepak Dhama, Renatus",
    industry: "Nutrition & Wellness",
  },
  {
    quote: "₹2.48 lakh in revenue on less than ₹10K ad spend. The ROAS speaks for itself.",
    client: "MRC Chair",
    industry: "Office Furniture",
  },
];

// ── About ────────────────────────────────────────────────────
export const aboutContent = {
  story:
    "Tushita Bombaywala Marketing LLP was built with one belief — every brand has a story worth telling, and every rupee of marketing budget deserves a measurable return.",
  mission:
    "To be the growth partner that e-commerce brands and businesses in India trust to drive real, compounding results — not vanity metrics.",
  values: [
    {
      title: "Results First",
      description: "We optimize for revenue, leads, and ROAS — not impressions or followers.",
    },
    {
      title: "Radical Transparency",
      description: "Monthly reports that tell you exactly what worked, what didn't, and what's next.",
    },
    {
      title: "Full Ownership",
      description: "We treat your brand like ours — strategy, execution, and results all under one roof.",
    },
    {
      title: "Built for India",
      description: "Deep understanding of Indian consumer behaviour, Jaipur's market, and Tier 1–2 city audiences.",
    },
  ],
};
