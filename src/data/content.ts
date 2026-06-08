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
  { label: "AUM Managed", value: 500, prefix: "₹", suffix: "Cr+", decimals: 0 },
  { label: "HNI Clients", value: 150, prefix: "", suffix: "+", decimals: 0 },
  { label: "Years Experience", value: 10, prefix: "", suffix: "+", decimals: 0 },
  { label: "Countries Served", value: 5, prefix: "", suffix: "", decimals: 0 },
]

export const differentiators = [
  {
    number: "01",
    title: "Private-Equity Rigour",
    description: "We apply institutional-grade due diligence to every portfolio decision — the same frameworks used by global PE funds, brought to personal wealth management.",
  },
  {
    number: "02",
    title: "Research-Driven Conviction",
    description: "12–18 month thematic research cycles. We don't react to markets — we anticipate them with a structured, independent research process.",
  },
  {
    number: "03",
    title: "Conflict-Free Advisory",
    description: "No product push. No commissions driving recommendations. Our advice is governed entirely by your financial goals.",
  },
  {
    number: "04",
    title: "Global Perspective",
    description: "We invest where the best opportunities are — India, US equities, European bonds, Asia-Pacific, and frontier markets.",
  },
]

export const philosophyPillars = [
  {
    number: "I",
    title: "Capital Preservation First",
    description: "Before seeking returns, we protect what you've built. Asymmetric risk management is the foundation of every portfolio we construct.",
  },
  {
    number: "II",
    title: "Conviction Over Diversification",
    description: "We don't scatter capital across 50 positions. We make concentrated, high-conviction bets backed by deep research and genuine insight.",
  },
  {
    number: "III",
    title: "Long-Duration Thinking",
    description: "We think in decades, not quarters. Compounding works only when you have the discipline to stay invested through short-term volatility.",
  },
  {
    number: "IV",
    title: "Transparency Without Compromise",
    description: "Every fee, every decision, every trade — explained clearly. We believe institutional-grade transparency builds generational trust.",
  },
]

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
  { label: "Global AUM", value: 500, suffix: "Cr+", icon: "TrendingUp", description: "Assets Under Advisory" },
  { label: "AMFI Registered", value: 1, suffix: "", icon: "Shield", description: "ARN Certified Mutual Fund Advisor" },
]

export const founderQuote = {
  quote: "Wealth management is not about picking the right stocks. It is about building the right framework — one that survives every market cycle, protects what matters most, and compounds quietly over decades.",
  attribution: "Lokesh Kumar",
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
