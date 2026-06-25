import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { LucideIcon } from 'lucide-react'
import { MessageCircle, Search, FileText, CheckCircle, RefreshCw } from 'lucide-react'
import { processSteps } from '../data/content'
import { getLenis } from '../hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, Search, FileText, CheckCircle, RefreshCw,
}

const Process = () => {
  const pathRef = useRef<SVGPathElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!pathRef.current || !sectionRef.current) return

    const path = pathRef.current
    const totalLength = path.getTotalLength()

    gsap.set(path, { strokeDasharray: totalLength, strokeDashoffset: totalLength })

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 1,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} id="process" className="section-padding" style={{ background: '#F8FAFF' }}>
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.div>

        <motion.h2
          className="font-serif text-slate-900 mb-20"
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
          A 5 Step journey<span style={{ fontStyle: 'italic', color: '#083abe' }}> from conversation </span> to stewardship.
        </motion.h2>

        {/* Process steps */}
        <div className="relative">
          {/* Animated SVG connecting path (desktop) */}
          <div className="hidden lg:block absolute inset-x-0 top-4 pointer-events-none" style={{ overflow: 'visible', height: '0' }}>
            <svg
              viewBox="0 0 1000 20"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '2px', overflow: 'visible' }}
            >
              <path
                ref={pathRef}
                d="M 0 1 H 1000"
                fill="none"
                stroke="#2563EB"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || MessageCircle

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col"
                >
                  {/* Step number with dot */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'white',
                        border: '1px solid rgba(37,99,235,0.5)',
                        boxShadow: '0 0 20px rgba(37,99,235,0.2)',
                      }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: '#2563EB' }}
                      />
                    </div>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: '#2563EB', fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#64748B' }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-slate-900 font-semibold text-lg mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569' }}>
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div
                    className="mt-4 text-xs tracking-wider font-medium"
                    style={{
                      color: '#2563EB',
                      fontFamily: 'Inter, sans-serif',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(37,99,235,0.1)',
                    }}
                  >
                    {step.duration}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="mb-8 text-lg" style={{ color: '#475569' }}>
            Ready to begin your journey?
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              const lenis = getLenis()
              if (lenis) {
                lenis.scrollTo('#contact')
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Start with a Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
