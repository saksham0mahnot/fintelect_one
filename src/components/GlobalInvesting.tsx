import { motion } from 'framer-motion'
import GlobalMap from './GlobalMap'

const GlobalInvesting = () => {
  return (
    <section id="global" className="section-padding" style={{ background: '#EEF3FF' }}>
      {/* Header */}
      <div className="container-premium mb-16">
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Global Investing
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
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
              maxWidth: '16ch',
            }}
          >
            Your wealth belongs in the <span style={{ fontStyle: 'italic', color: '#083abe' }}>world's best</span> markets.
          </motion.h2>

          <motion.p
            className="text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ color: '#475569', lineHeight: '1.75' }}
          >
            We invest across 7 global regions using institutional research,
            thematic conviction, and LRS-compliant execution.
          </motion.p>
        </div>
      </div>

      {/* Map */}
      <GlobalMap />
    </section>
  )
}

export default GlobalInvesting
