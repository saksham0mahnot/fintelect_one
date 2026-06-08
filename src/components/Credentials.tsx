import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import ReactCountUp from 'react-countup'
const CountUp = (ReactCountUp as any).default || ReactCountUp
import { useInView } from 'react-intersection-observer'
import { Award, GraduationCap, Clock, Building, TrendingUp, Shield } from 'lucide-react'
import { credentials } from '../data/content'

const iconMap: Record<string, LucideIcon> = {
  Award, GraduationCap, Clock, Building, TrendingUp, Shield,
}

const Credentials = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="credentials" className="section-padding" style={{ background: '#05070B' }}>
      <div className="container-premium">
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Credentials & Trust
        </motion.div>

        <motion.h2
          className="font-serif text-white mb-20"
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
          Institutional credentials. Personal accountability.
        </motion.h2>

        {/* Credentials grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-0"
          style={{ border: '1px solid rgba(255,255,255,0.05)' }}
        >
          {credentials.map((cred, i) => {
            const Icon = iconMap[cred.icon] || Award
            const col = i % 3
            const row = Math.floor(i / 3)

            return (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 relative"
                style={{
                  borderRight: col < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  borderBottom: row < 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  background: 'transparent',
                  transition: 'background 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={20} strokeWidth={1.5} style={{ color: '#2563EB' }} />
                </div>

                {/* Value */}
                <div className="flex items-end gap-1 mb-3">
                  {cred.value > 1 ? (
                    <>
                      <span
                        className="text-4xl font-bold text-white"
                        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1 }}
                      >
                        {inView ? (
                          <CountUp start={0} end={cred.value} duration={2} delay={i * 0.1} />
                        ) : '0'}
                      </span>
                      {cred.suffix && (
                        <span className="text-xl font-bold mb-0.5" style={{ color: '#38BDF8' }}>
                          {cred.suffix}
                        </span>
                      )}
                    </>
                  ) : (
                    <span
                      className="text-sm font-bold tracking-wider uppercase"
                      style={{ color: '#38BDF8', fontFamily: 'Inter, sans-serif' }}
                    >
                      ✓ Certified
                    </span>
                  )}
                </div>

                {/* Label */}
                <div className="text-white font-semibold mb-1">{cred.label}</div>
                <div className="text-xs" style={{ color: '#475569' }}>
                  {cred.description}
                </div>

                {/* Bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'rgba(37,99,235,0)', transition: 'background 0.4s ease' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* SEBI / AMFI bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-8 mt-12 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {[
            'SEBI Compliant Advisory',
            'AMFI Registered Distributor',
            'IRDAI Compliant',
            'RBI FEMA Framework',
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563EB' }} />
              <span className="text-xs tracking-wider" style={{ color: '#94A3B8' }}>
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Credentials
