import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { nriCountries } from '../data/content'

const NRIWealth = () => {
  const [active, setActive] = useState(0)

  const country = nriCountries[active]

  return (
    <section id="nri" className="section-padding" style={{ background: '#EEF3FF' }}>
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          NRI Wealth Management
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end gap-12 mb-20">
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
            Wealth management that follows you across borders.
          </motion.h2>

          <motion.p
            className="text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#475569', lineHeight: '1.75' }}
          >
            Whether you live in London, Dubai, New York, or Singapore —
            your Indian wealth is managed with precision, compliance, and care.
          </motion.p>
        </div>

        {/* Country selector + panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Country tabs (left) */}
          <div className="flex flex-row lg:flex-col gap-0 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(37,99,235,0.15)' }}>
            {nriCountries.map((c, i) => (
              <button
                key={c.code}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 py-6 px-8 text-left w-full transition-all duration-300 relative"
                style={{
                  background: active === i ? 'rgba(37,99,235,0.06)' : 'transparent',
                  borderBottom: i < nriCountries.length - 1 ? '1px solid rgba(37,99,235,0.1)' : 'none',
                }}
              >
                {/* Active indicator */}
                {active === i && (
                  <motion.div
                    layoutId="country-indicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5"
                    style={{ background: '#2563EB' }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  />
                )}

                <span style={{ fontSize: '1.75rem' }}>{c.flag}</span>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: active === i ? '#1E3A8A' : '#64748B' }}
                  >
                    {c.name}
                  </div>
                  <div className="text-xs" style={{ color: '#94A3B8' }}>
                    {c.city}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel (right) */}
          <div className="lg:col-span-2 p-10 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={country.code}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Flag large */}
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                  {country.flag}
                </div>

                <div
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: '#2563EB' }}
                >
                  {country.name}
                </div>

                <h3
                  className="font-serif text-slate-900 mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    lineHeight: '1.25',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {country.tagline}
                </h3>

                <div
                  className="h-px mb-8"
                  style={{ background: `linear-gradient(90deg, ${country.color}, transparent)` }}
                />

                {/* Services */}
                <div className="space-y-4">
                  {country.services.map((service, i) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: country.color }}
                      />
                      <span style={{ color: '#475569', fontSize: '1rem' }}>{service}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="btn-outline mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Speak to an NRI Specialist
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global features row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-20 pt-12"
          style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}
        >
          {[
            { title: 'DTAA Expertise', desc: 'Navigate double taxation agreements across jurisdictions to maximize your post-tax returns.' },
            { title: 'FEMA Compliance', desc: 'Fully compliant cross-border remittances under LRS and NRE/NRO frameworks.' },
            { title: 'Global Portfolio Bridge', desc: 'Seamlessly link your India portfolio with international investments under one advisory framework.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-8"
              style={{ borderRight: i < 2 ? '1px solid rgba(37,99,235,0.1)' : 'none' }}
            >
              <h4 className="text-slate-900 font-semibold mb-3 text-lg">{f.title}</h4>
              <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '0.9rem' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NRIWealth
