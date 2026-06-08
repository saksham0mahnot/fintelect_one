import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { feeStructure } from '../data/content'

const FeeStructure = () => {
  return (
    <section id="fees" className="section-padding" style={{ background: '#0F172A' }}>
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Fee Structure
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
          <motion.h2
            className="font-serif text-white"
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
            style={{ color: '#94A3B8', lineHeight: '1.75' }}
          >
            All fees are disclosed upfront. We earn when you earn — not when you invest.
          </motion.p>
        </div>

        {/* Fee columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {feeStructure.map((tier, i) => (
            <motion.div
              key={tier.tier}
              className="fee-column rounded-sm relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: tier.featured ? 'rgba(37,99,235,0.06)' : '#05070B',
                border: tier.featured
                  ? '1px solid rgba(37,99,235,0.4)'
                  : '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wider px-3 py-1"
                  style={{
                    background: '#2563EB',
                    color: '#fff',
                    borderRadius: '2px',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col h-full">
                {/* Tier color accent */}
                <div
                  className="w-8 h-0.5 mb-6"
                  style={{ background: tier.color }}
                />

                <div
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: tier.color }}
                >
                  {tier.subtitle}
                </div>

                <h3
                  className="font-sans font-bold text-white text-lg mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {tier.tier}
                </h3>

                <div
                  className="text-xs mb-8"
                  style={{ color: '#475569' }}
                >
                  {tier.aumRange}
                </div>

                {/* Fee */}
                <div className="mb-6">
                  <div
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: tier.featured ? '#38BDF8' : '#FFFFFF',
                    }}
                  >
                    {tier.fee}
                  </div>
                  {tier.fee !== 'Trail commission from AMC' && (
                    <div className="text-xs mt-1" style={{ color: '#475569' }}>
                      per annum, on AUM
                    </div>
                  )}
                </div>

                <div
                  className="h-px mb-6"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {[
                    'Conflict-free advisory',
                    'Quarterly portfolio review',
                    'Research reports',
                    'Direct line access',
                  ].slice(0, tier.featured ? 4 : 3).map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check
                        size={13}
                        strokeWidth={2.5}
                        style={{ color: tier.featured ? '#38BDF8' : '#2563EB', marginTop: '2px', flexShrink: 0 }}
                      />
                      <span className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs mt-6" style={{ color: '#334155', lineHeight: '1.6' }}>
                  {tier.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center mt-12 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: '#334155', maxWidth: '60ch', margin: '3rem auto 0' }}
        >
          All fees are negotiable based on portfolio complexity and relationship tenure.
          AMFI-registered distributor. Mutual Fund commissions are disclosed per SEBI regulations.
        </motion.p>
      </div>
    </section>
  )
}

export default FeeStructure
