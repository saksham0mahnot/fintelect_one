// ============================================================
// FINTELECT ONE — CONTENT DATA
// All copy, metrics, and configuration in one place
// ============================================================

export const brand = {
  name: "Fintelect One",
  tagline: "Institutional discipline. Personal trust.",
  description: "We bring private-equity thinking to personal wealth.",
  email: "connect@fintelect.one",
  phone: "+91 98765 43210",
  founded: 2022,
}

export const trustMetrics = [
  { label: "Years in markets", value: 10, prefix: "", suffix: "+", decimals: 0 },
  { label: "Qualified team", value: "CA • MBA", prefix: "", suffix: "", decimals: 0 },
  { label: "Asset classes ", value: 4, prefix: "", suffix: "+", decimals: 0 },
  { label: "Global track record", value: 3, prefix: "", suffix: "yrs", decimals: 0 },
]

export const differentiators = [
  {
    number: "01",
    title: "Institutional insight, personal scale",
    description: "Our team operates at the intersection of global private equity and Indian markets — frameworks typically reserved for institutions, now accessible at your level.",
  },
  {
    number: "02",
    title: "Conflict-aware transparency",
    description: "We openly disclose how we earn — trail commissions, advisory fees, all of it. You always know what we make and why we recommend what we recommend.",
  },
  {
    number: "03",
    title: "A decade of market cycles",
    description: "Through bull runs, corrections, demonetisation, COVID, rate cycle reversals. Judgment earned by navigating real adversity with real client portfolios.",
  },
  {
    number: "04",
    title: "Early movers in global investing",
    description: "Three years of live international portfolio management — already generating alpha for clients who moved early, before it became a mainstream conversation.",
  },
  {
    number: "05",
    title: "Multi-asset, one relationship",
    description: "Mutual funds, PMS, bonds, direct equities, global markets — managed cohesively. No fragmented advisors, no conflicting recommendations, no information gaps.",
  },
  {
    number: "06",
    title: "CA-led, tax-integrated planning",
    description: "Every portfolio decision accounts for LTCG, STCG, and indexation — ensuring the after-tax outcome, which is the only number that truly matters to you.",
  },
]

export const philosophyPillars = [
  {
    number: "I",
    title: "Capital Preservation First",
    description:
      "Growth means little if it cannot survive adversity. Every portfolio is stress-tested against drawdowns, liquidity events, and market uncertainty before seeking returns.",
  },
  {
    number: "II",
    title: "Asset Allocation Drives Outcomes",
    description:
      "Long-term performance is shaped more by portfolio architecture than individual security selection. We focus on building resilient allocations, not chasing market noise.",
  },
  {
    number: "III",
    title: "Behaviour Management Is Alpha",
    description:
      "The greatest threat to investment success is often emotional decision-making. We help clients remain disciplined when markets test conviction and patience.",
  },
  {
    number: "IV",
    title: "Global Diversification Is Essential",
    description:
      "Concentrating wealth in a single market creates unnecessary risk. A modern portfolio should capture opportunities across geographies, sectors, and economic cycles.",
  },
];

export const globalRegions = [
  {
    id: "india",
    name: "India",
    description: "Domestic equities, PMS, MF advisory",
    lat: 20.5937,
    lng: 78.9629,
    stats: ["Nifty 50", "Mid & Small Cap", "Sectoral Themes"],
  },
  {
    id: "usa",
    name: "United States",
    description: "S&P 500, NASDAQ, ETF exposure",
    lat: 37.0902,
    lng: -95.7129,
    stats: ["S&P 500", "Tech Themes", "USD Bonds"],
  },
  {
    id: "europe",
    name: "Europe",
    description: "European equities, Euro bonds",
    lat: 51.1657,
    lng: 10.4515,
    stats: ["MSCI Europe", "EUR Bonds", "Dividend Focus"],
  },
  {
    id: "apac",
    name: "Asia-Pacific",
    description: "APAC equities, EM exposure",
    lat: 34.0479,
    lng: 100.6197,
    stats: ["Japan", "Korea", "ASEAN Growth"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    description: "GCC Equities, Fixed Income",
    lat: 23.4241,
    lng: 53.8478,
    stats: ["UAE", "Saudi Arabia", "Qatar"],
  },
  {
    id: "australia",
    name: "Australia",
    description: "Australian Equities, Fixed Income",
    lat: -25.2744,
    lng: 133.7751,
    stats: ["ASX 200", "Australian Bonds", "ETF exposure"],
  },
  {
    id: "emerging",
    name: "Emerging Markets",
    description: "High-growth frontier opportunities",
    lat: -14.2350,
    lng: -51.9253,
    stats: ["Brazil", "Indonesia", "Vietnam"],
  },
]

export const nriCountries = [
  {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    tagline: "Cross-border tax efficiency for UK residents",
    services: ["DTAA Planning", "Remittance Advisory", "UK-India Portfolio Bridge"],
    color: "#1D4ED8",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai",
    tagline: "Tax-free wealth structuring for UAE-based NRIs",
    services: ["NRE/NRO Advisory", "UAE-India Flows", "Offshore Structuring"],
    color: "#059669",
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    city: "New York",
    tagline: "FEMA-compliant US-India wealth management",
    services: ["PFIC Compliance", "Remittance Planning", "US-India Dual Portfolio"],
    color: "#7C3AED",
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    city: "Singapore",
    tagline: "APAC wealth hub for Singapore-based HNIs",
    services: ["SGD-INR Advisory", "Asia-India Flows", "Family Office Support"],
    color: "#DC2626",
  },
]

export const services = [
  {
    id: "mutual-fund",
    title: "Mutual Fund Advisory",
    subtitle: "Research-driven fund selection",
    description: "Curated fund portfolios across equity, debt, and hybrid categories. We research and recommend; you grow.",
    icon: "TrendingUp",
    detail: "Independent, commission-transparent advisory across 40+ AMCs.",
  },
  {
    id: "pms",
    title: "PMS Distribution",
    subtitle: "Professional portfolio management",
    description: "Access India's top portfolio management services — vetted, monitored, and aligned to your risk profile.",
    icon: "BarChart3",
    detail: "Due diligence across 100+ PMS strategies. Only the best make it to our clients.",
  },
  {
    id: "bonds",
    title: "Bond Portfolio Management",
    subtitle: "Fixed income with institutional discipline",
    description: "Corporate bonds, G-Secs, and structured debt instruments. Predictable income. Institutional credit analysis.",
    icon: "Shield",
    detail: "AAA to investment-grade. Duration management. Yield curve positioning.",
  },
  {
    id: "global",
    title: "Global Investing",
    subtitle: "World-class market access",
    description: "US equities, international ETFs, and global thematic funds. Build true geographical diversification.",
    icon: "Globe2",
    detail: "LRS-compliant. $250,000 annual remittance framework. Real-time execution.",
  },
  {
    id: "equities",
    title: "Direct Equities",
    subtitle: "Concentrated high-conviction portfolios",
    description: "15–20 stock portfolios built on 12–18 month thematic research. PE-style diligence. Long-term compounding.",
    icon: "Target",
    detail: "Fundamental research. Sectoral rotation. Bottom-up stock selection.",
  },
  {
    id: "nri",
    title: "Wealth Structuring & NRI Advisory",
    subtitle: "Cross-border wealth architecture",
    description: "NRE/NRO planning, DTAA benefits, FEMA compliance, and international remittance advisory for globally mobile HNIs.",
    icon: "Building2",
    detail: "Serving UK, UAE, USA, Singapore. Tax-efficient. Fully compliant.",
  },
  {
    id: "AIF",
    title: "AIF incomplete",
    subtitle: "Cross-border wealth architecture",
    description: "NRE/NRO planning, DTAA benefits, FEMA compliance, and international remittance advisory for globally mobile HNIs.",
    icon: "Building2",
    detail: "Serving UK, UAE, USA, Singapore. Tax-efficient. Fully compliant.",
  },

]

export const feeStructure = [
  {
    tier: "Mutual Fund",
    subtitle: "Distribution",
    aumRange: "Any AUM",
    fee: "Trail commission from AMC",
    note: "Transparent. No direct charges.",
    featured: false,
    color: "#64748B",
  },
  {
    tier: "Emerging Wealth",
    subtitle: "Advisory",
    aumRange: "₹25L – ₹1Cr",
    fee: "1.5% p.a.",
    note: "Comprehensive advisory. Minimum 1-year engagement.",
    featured: false,
    color: "#2563EB",
  },
  {
    tier: "Established Wealth",
    subtitle: "Advisory",
    aumRange: "₹1Cr – ₹5Cr",
    fee: "1.0% p.a.",
    note: "Full-suite advisory with quarterly reviews.",
    featured: true,
    color: "#38BDF8",
  },
  {
    tier: "Significant Wealth",
    subtitle: "Family Office",
    aumRange: "₹5Cr+",
    fee: "0.75% p.a.",
    note: "Dedicated relationship manager. Bespoke structuring.",
    featured: false,
    color: "#CBD5E1",
  },
  {
    tier: "Bond Portfolio",
    subtitle: "Management",
    aumRange: "₹50L+",
    fee: "0.5% p.a.",
    note: "Fixed income specialist management.",
    featured: false,
    color: "#64748B",
  },
]

export const credentials = [
  { label: "CA Qualified", value: 1, suffix: "", icon: "Award", description: "Institute of Chartered Accountants of India" },
  { label: "CFA Qualified", value: 1, suffix: "", icon: "GraduationCap", description: "CFA Institute, USA" },
  { label: "Years Experience", value: 10, suffix: "+", icon: "Clock", description: "Across PE, Asset Management & Wealth" },
  { label: "PE Experience", value: 1, suffix: "", icon: "Building", description: "Private Equity Investment Analysis" },
  { label: "Global AUM", value: 5, suffix: "Cr+", icon: "TrendingUp", description: "Assets Under Advisory" },
  { label: "AMFI Registered", value: 1, suffix: "", icon: "Shield", description: "ARN Certified Mutual Fund Advisor" },
]

export const founderQuote = {
  quote: "Wealth management is not about picking the right stocks. It is about building the right framework — one that survives every market cycle, protects what matters most, and compounds quietly over decades.",
  attribution: "",
  title: "Founder & Chief Investment Officer, Fintelect One",
  credentials: "CA | CFA | 10+ Years",
}

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "A confidential 45-minute conversation to understand your financial goals, current portfolio, and global lifestyle.",
    duration: "45 minutes",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Financial Diagnosis",
    description: "Comprehensive analysis of your existing portfolio, tax structure, risk exposure, and alignment gaps.",
    duration: "3–5 days",
    icon: "Search",
  },
  {
    number: "03",
    title: "Portfolio Blueprint",
    description: "A bespoke investment policy statement and portfolio architecture — built specifically for your goals.",
    duration: "1–2 weeks",
    icon: "FileText",
  },
  {
    number: "04",
    title: "Seamless Onboarding",
    description: "KYC, account setup, and portfolio implementation. Managed entirely by our team with minimal disruption.",
    duration: "2–5 days",
    icon: "CheckCircle",
  },
  {
    number: "05",
    title: "Ongoing Stewardship",
    description: "Quarterly reviews, annual rebalancing, and continuous monitoring. We never stop working for you.",
    duration: "Perpetual",
    icon: "RefreshCw",
  },
]

export const coverageCountries = ["India", "United Kingdom", "United Arab Emirates", "United States", "Singapore"]

export const institutionalTimeline = [
  { year: "2022", event: "Founded with PE-backed investment philosophy" },
  { year: "2023", event: "Achieved AMFI registration. Launched direct equity advisory." },
  { year: "2024", event: "Crossed ₹100Cr AUM. Launched Global Investing desk." },
  { year: "2025", event: "Expanded to NRI advisory across 4 countries." },
  { year: "2026", event: "₹500Cr+ AUM. 150+ HNI families. 5 geographies." },
]
