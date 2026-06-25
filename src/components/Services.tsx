import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  TrendingUp, BarChart3, Shield, Globe2, Target, Building2, Vault,
  ChevronRight, ArrowUpRight
} from 'lucide-react'
import { services } from '../data/content'
import { getLenis } from '../hooks/useLenis'

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, BarChart3, Shield, Globe2, Target, Building2, Vault,
}

const Services = () => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="services" className="section-padding" style={{ background: '#F8FAFF' }}>
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Our Services
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
              maxWidth: '16ch',
            }}
          >
            Every <span style={{ color: '#083abe', fontStyle: 'italic' }}>service built </span> for institutional grade outcomes.
          </motion.h2>

          <motion.p
            className="text-lg max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#475569', lineHeight: '1.75' }}
          >
            Not products portfolios. Not advice architecture.
          </motion.p>
        </div>

        {/* Service bands */}
        <div style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || TrendingUp
            const isHovered = hovered === service.id
            const isExpanded = expanded === service.id

            return (
              <motion.div
                key={service.id}
                className="service-band"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onHoverStart={() => setHovered(service.id)}
                onHoverEnd={() => setHovered(null)}
              >
                <div
                  className="flex items-center gap-8 py-8 px-2 cursor-pointer"
                  onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                >
                  {/* Number */}
                  <div
                    className="hidden md:block flex-shrink-0 text-right"
                    style={{ width: '2.5rem', color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center"
                    animate={{
                      background: isHovered ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.04)',
                      borderColor: isHovered ? 'rgba(37,99,235,0.4)' : 'rgba(37,99,235,0.12)',
                    }}
                    style={{ border: '1px solid rgba(37,99,235,0.12)' }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="font-sans font-semibold text-lg md:text-xl"
                      animate={{ color: isHovered ? '#1E3A8A' : '#334155' }}
                    >
                      {service.title}
                    </motion.h3>
                    <div className="text-sm hidden md:block" style={{ color: '#64748B' }}>
                      {service.subtitle}
                    </div>
                  </div>

                  {/* Description (desktop) */}
                  <div className="hidden lg:block flex-1 max-w-sm">
                    <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0, color: isHovered ? '#2563EB' : '#94A3B8' }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Expanded detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="px-4 md:px-16 pb-6 md:pb-8 flex flex-col sm:flex-row items-start gap-4 md:gap-8"
                        style={{ borderTop: '1px solid rgba(37,99,235,0.07)' }}
                      >
                        <div className="pt-4 sm:pt-6 flex-1">
                          <p style={{ color: '#475569', lineHeight: '1.8' }}>
                            {service.detail}
                          </p>
                        </div>
                        <button
                          className="mt-2 sm:mt-6 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            const lenis = getLenis()
                            if (lenis) {
                              lenis.scrollTo('#contact')
                            } else {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                        >
                          Enquire <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
