import { Property, SoldProperty, JournalArticle, ServiceItem, Testimonial } from './types';

// Hardcoded Pexels URLs strictly as provided by the user
export const HERO_IMAGE = "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg";
export const ABOUT_IMAGE = "https://images.pexels.com/photos/209656/pexels-photo-209656.jpeg";

// Sold property images
const IMAGE_BROCKS_GAP = "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg";
const IMAGE_FINKS_HIDEAWAY = "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg";
const IMAGE_PARKWOOD_SQUARE = "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg";

// Journal images
const IMAGE_JOURNAL_SHOPPING = "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg";
const IMAGE_JOURNAL_STRIP = "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg";

export const PROPERTIES: Property[] = [
  {
    id: "bridwell-center",
    slug: "bridwell-center",
    title: "Bridwell Center",
    location: "Canton, TX",
    price: "$4,200,000",
    image: HERO_IMAGE,
    description: "Bridwell Center is a premier retail strip center positioned within Canton's primary retail corridor. The property enjoys excellent visibility and stable long-term net leases with top national brands.",
    sqFt: "24,500 Sq Ft",
    tenantCount: 8,
    anchorTenant: "Dollar Tree",
    yearBuilt: 2018,
    gallery: [HERO_IMAGE, IMAGE_BROCKS_GAP, IMAGE_PARKWOOD_SQUARE]
  },
  {
    id: "the-village-at-brocks-gap",
    slug: "the-village-at-brocks-gap",
    title: "The Village at Brock's Gap",
    location: "Hoover, AL",
    price: "$8,500,000",
    image: IMAGE_BROCKS_GAP,
    description: "The Village at Brock's Gap features elegant southern architectural elements in a highly affluent residential growth zone. This premier shopping plaza serves as the key focal point of community retail commerce.",
    sqFt: "42,000 Sq Ft",
    tenantCount: 14,
    anchorTenant: "Fresh Market",
    yearBuilt: 2021,
    gallery: [IMAGE_BROCKS_GAP, IMAGE_FINKS_HIDEAWAY, IMAGE_PARKWOOD_SQUARE]
  },
  {
    id: "finks-hideaway-center",
    slug: "finks-hideaway-center",
    title: "Finks Hideaway Center",
    location: "Monroe, LA",
    price: "$3,100,000",
    image: IMAGE_FINKS_HIDEAWAY,
    description: "Finks Hideaway Center delivers solid, recurring cash flows from a durable mix of convenience-focused retailers. The high-traffic intersection placement ensures permanent tenant demand.",
    sqFt: "18,200 Sq Ft",
    tenantCount: 6,
    anchorTenant: "Walgreens",
    yearBuilt: 2015,
    gallery: [IMAGE_FINKS_HIDEAWAY, HERO_IMAGE, IMAGE_PARKWOOD_SQUARE]
  },
  {
    id: "parkwood-square",
    slug: "parkwood-square",
    title: "Parkwood Square",
    location: "Huntsville, TX",
    price: "$5,600,000",
    image: IMAGE_PARKWOOD_SQUARE,
    description: "Parkwood Square is a modern outdoor shopping destination positioned adjacent to a major university campus. This central placement secures exceptional daily visitor frequency.",
    sqFt: "31,000 Sq Ft",
    tenantCount: 11,
    anchorTenant: "Planet Fitness",
    yearBuilt: 2019,
    gallery: [IMAGE_PARKWOOD_SQUARE, IMAGE_BROCKS_GAP, IMAGE_FINKS_HIDEAWAY]
  },
  {
    id: "northwest-junction",
    slug: "northwest-junction",
    title: "Northwest Junction",
    location: "Dallas, TX",
    price: "$12,400,000",
    image: ABOUT_IMAGE,
    description: "Northwest Junction is a core high-end retail plaza positioned in one of Dallas's most affluent submarkets. This high-density commercial asset contains top tier, investment grade tenants.",
    sqFt: "58,000 Sq Ft",
    tenantCount: 18,
    anchorTenant: "Whole Foods Market",
    yearBuilt: 2022,
    gallery: [ABOUT_IMAGE, IMAGE_FINKS_HIDEAWAY, IMAGE_PARKWOOD_SQUARE]
  },
  {
    id: "st-michaels-center",
    slug: "st-michaels-center",
    title: "St. Michael's Center",
    location: "Arlington, TX",
    price: "$7,800,000",
    image: IMAGE_JOURNAL_STRIP,
    description: "St. Michael's Center features spectacular street-front visibility and a modern design that attracts regional shoppers. Fully leased to credit tenants with stable rent escalation structures.",
    sqFt: "38,500 Sq Ft",
    tenantCount: 12,
    anchorTenant: "Petco",
    yearBuilt: 2020,
    gallery: [IMAGE_JOURNAL_STRIP, HERO_IMAGE, IMAGE_BROCKS_GAP]
  }
];

export const SOLD_PROPERTIES: SoldProperty[] = [
  { id: "s1", title: "The Village at Brock's Gap", location: "Hoover, AL", image: IMAGE_BROCKS_GAP },
  { id: "s2", title: "Finks Hideaway Center", location: "Monroe, LA", image: IMAGE_FINKS_HIDEAWAY },
  { id: "s3", title: "Parkwood Square", location: "Huntsville, TX", image: IMAGE_PARKWOOD_SQUARE },
  { id: "s4", title: "Northwest Junction", location: "Dallas, TX", image: HERO_IMAGE },
  { id: "s5", title: "St. Michael's Center", location: "Arlington, TX", image: ABOUT_IMAGE },
  { id: "s6", title: "Central Park Center", location: "Irving, TX", image: IMAGE_BROCKS_GAP },
  { id: "s7", title: "The Centre", location: "Marble Falls, TX", image: IMAGE_JOURNAL_STRIP },
  { id: "s8", title: "Famsa Plaza", location: "Austin, TX", image: IMAGE_FINKS_HIDEAWAY },
  { id: "s9", title: "Cooper Oaks Crossing", location: "Arlington, TX", image: IMAGE_PARKWOOD_SQUARE },
  { id: "s10", title: "Victory Shops", location: "Flower Mound, TX", image: HERO_IMAGE },
  { id: "s11", title: "Grand Central Crossing", location: "Grand Prairie, TX", image: ABOUT_IMAGE },
  { id: "s12", title: "Park Mall Plaza", location: "Plano, TX", image: IMAGE_JOURNAL_SHOPPING }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "brokerage",
    title: "Brokerage",
    image: HERO_IMAGE,
    description: "We represent buyers and sellers in the disposition and acquisition of retail shopping centers nationwide."
  },
  {
    id: "disposition",
    title: "Disposition",
    image: IMAGE_BROCKS_GAP,
    description: "We market and sell properties to maximize exposure and attain competitive value for each asset."
  },
  {
    id: "acquisition",
    title: "Acquisition",
    image: ABOUT_IMAGE,
    description: "We identify and acquire premier retail assets that meet our clients' investment criteria."
  }
];

export const ARTICLES: JournalArticle[] = [
  {
    id: "future-of-open-air",
    category: "Retail Trends",
    title: "The Future of Open-Air Shopping Centers",
    date: "August 14, 2026",
    readTime: "5 min read",
    image: IMAGE_JOURNAL_SHOPPING,
    summary: "Open-air centers are outpacing enclosed malls. Investor demand is shifting toward walkable, experience-driven retail.",
    content: "Open-air shopping centers continue to show strong performance indicators across major suburban markets in the United States. Modern institutional investors increasingly favor highly walkable retail environments that focus on consumer experience over standard indoor department stores. These open-air configurations attract high-density traffic by integrating outdoor social green spaces, high-quality outdoor dining, and wellness tenants.\n\nFurthermore, vacancy rates for these outdoor plazas remain historically low compared to traditional enclosed shopping centers. This structural migration towards outdoor centers has redefined retail capital allocation strategies for the decade."
  },
  {
    id: "retail-cap-rates",
    category: "Market Analysis",
    title: "Retail Cap Rates: What Buyers Should Know",
    date: "August 7, 2026",
    readTime: "6 min read",
    image: IMAGE_JOURNAL_STRIP,
    summary: "Cap rates are stabilizing across the Sunbelt. We break down the current numbers and what they mean for deals.",
    content: "Retail capitalization rates are demonstrating reliable stabilization, specifically in the high-growth Sunbelt markets. Although interest rate variations created initial transaction friction, the robust demand for retail centers has created a solid floor for valuation yields. Strategic institutional buyers are capitalising on this predictability by locking in favorable long-term financing before further market compression.\n\nAnalyzing local demographic data confirms that population inflows directly protect property yields. We anticipate continued transaction velocity as buyers identify stable, yield-producing retail assets to shield their capital."
  },
  {
    id: "single-vs-multi-tenant",
    category: "Investment Strategy",
    title: "Single-Tenant vs. Multi-Tenant: Risk and Reward",
    date: "July 28, 2026",
    readTime: "7 min read",
    image: HERO_IMAGE,
    summary: "Single-tenant assets offer lower risk but lower upside. Multi-tenant centers require more management but offer better yields.",
    content: "Choosing between single-tenant net-lease properties and multi-tenant commercial shopping plazas is a foundational decision for real estate allocators. Single-tenant assets provide reliable, hands-free yield structures often backed by multi-decade corporate guarantees. However, these single-user setups lack the organic rental expansion potential and tenant diversification that multi-tenant centers naturally possess.\n\nMulti-tenant retail centers require more intensive management oversight but deliver higher absolute returns. By spacing lease expirations and implementing escalations, operators can drive net operating income upward during inflationary cycles."
  },
  {
    id: "due-diligence-checklist",
    category: "Due Diligence",
    title: "The 10-Step Checklist for Buying a Shopping Center",
    date: "July 15, 2026",
    readTime: "8 min read",
    image: IMAGE_BROCKS_GAP,
    summary: "We walk you through the critical steps. From title review to tenant audits, here is what you need to avoid costly mistakes.",
    content: "Acquiring a retail shopping plaza requires a highly structured, step-by-step due diligence methodology to safeguard investor equity. Beyond standard physical inspections of roofing and paving, prospective buyers must analyze individual tenant lease details, focusing on co-tenancy clauses and termination rights. Verifying historical utility records and common area maintenance reimbursements is also critical to confirming true net operating income.\n\nAdditionally, buyers should conduct comprehensive credit audits on anchor tenants to gauge bankruptcy protection risks. This thorough investigation prevents unforeseen cash flow reductions and ensures transaction success."
  },
  {
    id: "evaluate-trade-area",
    category: "Location Intelligence",
    title: "How to Evaluate a Retail Site's Trade Area",
    date: "July 2, 2026",
    readTime: "5 min read",
    image: ABOUT_IMAGE,
    summary: "Population density alone isn't enough. We show you how to properly analyze traffic counts and spending patterns.",
    content: "Assessing a commercial retail location involves looking far beyond simple regional headcount metrics. Strategic site evaluation requires mapping actual drive-time contours, daytime employment concentrations, and historical traffic patterns. Modern analysis shows that physical geographical barriers and highway exit access play a massive role in actual consumer destination choice.\n\nInvestors must also analyze consumer spending habits and household income ranges within a five-mile zone. Aligning your property's tenant profile with the regional budget matches tenant supply with consumer demand, ensuring perpetual rental gains."
  },
  {
    id: "grocery-anchored-centers",
    category: "Industry Insight",
    title: "Grocery-Anchored Centers: The Safer Bet",
    date: "June 20, 2026",
    readTime: "6 min read",
    image: IMAGE_JOURNAL_SHOPPING,
    summary: "Grocery anchors remain the most stable retail asset class. Here’s why institutional investors are continuing to buy them.",
    content: "Grocery-anchored retail complexes are widely considered the most resilient asset class in commercial real estate. Because grocery shopping is an essential, non-discretionary consumer activity, these properties maintain steady foot traffic through all economic cycles. This dependable guest frequency benefits surrounding service-oriented inline retail space, keeping tenant sales high and vacancies low.\n\nInstitutional capital allocators prioritize grocery-anchored centers for their defensive properties. Buying these premier centers ensures consistent, inflation-indexed cash flows even during wider economic adjustments."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Byrne Company executed our disposition program with incredible precision, achieving pricing metrics that surpassed our original expectations.",
    author: "Managing Director, Walton Pacific Capital"
  },
  {
    id: "t2",
    quote: "Their deep knowledge of regional retail centers and commitment to absolute transaction execution made them our trusted brokerage partner.",
    author: "Senior Portfolio Manager, Vanguard Crest Properties"
  },
  {
    id: "t3",
    quote: "They consistently identify off-market, high-quality shopping center assets that align perfectly with our long-term yield strategies.",
    author: "Chief Investment Officer, Ascent Retail Trust"
  }
];
