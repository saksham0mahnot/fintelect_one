import { motion } from 'framer-motion'

// Custom 4-pointed sparkle icon matching the reference image's accent points
const SparkleIcon = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
    style={{ fill: color, color }}
    stroke="none"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
)

const FeeStructure = () => {
  return (
    <section id="fees" className="section-padding" style={{ background: '#EEF3FF' }}>
      <div className="container-premium">

        {/* ── Section Header ── */}
        <motion.div
          className="section-label mb-6 text-blue-600 before:bg-blue-600"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Fee Structure
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
          <motion.h2
            className="font-serif text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              maxWidth: '18ch',
            }}
          >
            Transparent pricing. No surprises. No conflicts.
          </motion.h2>
          <motion.p
            className="text-base max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ color: '#475569', lineHeight: '1.75' }}
          >
            All fees are disclosed upfront. We earn when you earn not when you invest.
          </motion.p>
        </div>

        {/* ── Fee Columns Grid (3 Columns Max) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* ┌────────────────────────────────────────┐
              │  COLUMN 1 — Emerging Wealth            │
              └────────────────────────────────────────┘ */}
          <motion.div
            className="bg-white border border-slate-200/80 rounded-[28px] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_45px_rgba(37,99,235,0.04)] hover:border-blue-100 transition-all duration-500 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="text-[10px] md:text-xs font-black tracking-[0.2em] text-blue-600/90 uppercase mb-8">
                Emerging Wealth
              </div>

              {/* Price Display */}
              <div className="flex items-start mb-2 font-serif text-[#0F172A]">
                <span className="text-2xl font-bold mt-2 mr-1 opacity-70">%</span>
                <span className="text-7xl font-bold tracking-tight">1.00</span>
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold mb-8">
                On AUM up to ₹1 Crore
              </div>

              <div className="h-px bg-slate-100 mb-8" />

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'Full portfolio management',
                  'Quarterly portfolio reviews',
                  'Goal planning & scenario maps',
                  'Tax efficiency advisory',
                  'Dedicated relationship manager',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3.5">
                    <SparkleIcon color="#3B82F6" />
                    <span className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs mt-10 text-slate-400 leading-relaxed border-t border-slate-50 pt-6">
              Comprehensive planning. Minimum 1 year engagement tenure.
            </p>
          </motion.div>

          {/* ┌────────────────────────────────────────┐
              │  COLUMN 2 — Established Wealth         │
              └────────────────────────────────────────┘ */}
          <motion.div
            className="bg-white border border-slate-200/80 rounded-[28px] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_45px_rgba(37,99,235,0.04)] hover:border-blue-100 transition-all duration-500 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="text-[10px] md:text-xs font-black tracking-[0.2em] text-blue-600/90 uppercase mb-8">
                Established Wealth
              </div>

              {/* Price Display */}
              <div className="flex items-start mb-2 font-serif text-[#0F172A]">
                <span className="text-2xl font-bold mt-2 mr-1 opacity-70">%</span>
                <span className="text-7xl font-bold tracking-tight">0.75</span>
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold mb-8">
                On AUM ₹1 Crore to ₹5 Crore
              </div>

              <div className="h-px bg-slate-100 mb-8" />

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'Everything in Emerging, plus',
                  'PMS access & curation',
                  'Global investing access',
                  'Bi-annual in-depth reviews',
                  'NRI & cross-border planning',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3.5">
                    <SparkleIcon color="#3B82F6" />
                    <span className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs mt-10 text-slate-400 leading-relaxed border-t border-slate-50 pt-6">
              Full suite asset allocation framework with quarterly reviews.
            </p>
          </motion.div>

          {/* ┌────────────────────────────────────────┐
              │  COLUMN 3 — Significant Wealth          │
              └────────────────────────────────────────┘ */}
          <motion.div
            className="bg-white border border-slate-200/80 rounded-[28px] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12_45px_rgba(37,99,235,0.04)] hover:border-blue-100 transition-all duration-500 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="text-[10px] md:text-xs font-black tracking-[0.2em] text-blue-600/90 uppercase mb-8">
                Significant Wealth
              </div>

              {/* Price Display */}
              <div className="flex items-start mb-2 font-serif text-[#0F172A]">
                <span className="text-2xl font-bold mt-2 mr-1 opacity-70">%</span>
                <span className="text-7xl font-bold tracking-tight">0.50</span>
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold mb-8">
                On AUM above ₹5 Crore
              </div>

              <div className="h-px bg-slate-100 mb-8" />

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'Everything in Established, plus',
                  'Alternative investment access',
                  'Family office services',
                  'Estate & succession planning',
                  'Priority senior advisor access',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3.5">
                    <SparkleIcon color="#3B82F6" />
                    <span className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs mt-10 text-slate-400 leading-relaxed border-t border-slate-50 pt-6">
              Bespoke legal, tax, and trust advisory support. Dedicated CIO access.
            </p>
          </motion.div>

        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center mt-16 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: '#64748B', maxWidth: '60ch', margin: '4rem auto 0' }}
        >
          All fees are negotiable based on portfolio complexity and relationship tenure.
          AMFI-registered distributor. Mutual Fund commissions are disclosed per SEBI regulations.
        </motion.p>
      </div>
    </section>
  )
}

export default FeeStructure
