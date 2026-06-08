import { useRef } from 'react'
import { motion } from 'framer-motion'
import { differentiators } from '../data/content'

const WhyFintelect = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="why" className="section-padding" style={{ background: '#05070B' }}>
      <div className="container-premium">
        {/* Section header */}
        <div className="mb-20">
          <motion.div
            className="section-label mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Fintelect One
          </motion.div>
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
              maxWidth: '20ch',
            }}
          >
            Not a product-pusher. A wealth architect.
          </motion.h2>
        </div>

        {/* Differentiators — alternating editorial layout */}
        <div ref={containerRef} className="space-y-0">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="flex flex-col md:flex-row items-start gap-12 py-16"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Large number */}
                <div className="flex-shrink-0" style={{ width: '200px' }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(4rem, 8vw, 9rem)',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {item.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  {/* Animated line */}
                  <motion.div
                    className="h-px mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    style={{
                      background: 'linear-gradient(90deg, #2563EB, rgba(37,99,235,0.1))',
                      transformOrigin: 'left',
                      width: '100%',
                    }}
                  />

                  <motion.h3
                    className="font-serif text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    style={{ color: '#94A3B8', maxWidth: '52ch' }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyFintelect
