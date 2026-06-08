import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { philosophyPillars } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const InvestmentPhilosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return

    const totalHeight = philosophyPillars.length * window.innerHeight

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${totalHeight}`,
        pin: pinnedRef.current,
        anticipatePin: 1,
      })

      // Update active pillar index on scroll
      philosophyPillars.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: () => `+=${i * window.innerHeight * 0.9}`,
          end: () => `+=${(i + 1) * window.innerHeight * 0.9}`,
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
      })
    }, sectionRef.current || undefined)

    return () => ctx.revert()
  }, [])

  const pillar = philosophyPillars[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      style={{
        height: `${(philosophyPillars.length + 1) * 100}vh`,
        background: '#05070B',
      }}
    >
      <div
        ref={pinnedRef}
        className="h-screen flex items-center"
        style={{ background: '#05070B' }}
      >
        <div className="container-premium w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Static statement */}
            <div>
              <motion.div
                className="section-label mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Investment Philosophy
              </motion.div>

              <h2
                className="font-serif text-white mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                }}
              >
                Four pillars that govern every decision we make.
              </h2>

              <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, #2563EB, transparent)', width: '6rem' }} />

              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '42ch' }}>
                Our investment framework is not a product. It is a system of beliefs built over a decade of institutional investing.
              </p>

              {/* Progress indicators */}
              <div className="flex gap-3 mt-12">
                {philosophyPillars.map((_, i) => (
                  <div
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      height: '2px',
                      width: i === activeIndex ? '3rem' : '1.5rem',
                      background: i === activeIndex ? '#2563EB' : 'rgba(255,255,255,0.12)',
                      borderRadius: '1px',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — Dynamic pillars */}
            <div className="relative min-h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -30, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-premium rounded-sm"
                  style={{ padding: '3rem' }}
                >
                  {/* Roman numeral */}
                  <div
                    style={{
                      fontFamily: 'DM Serif Display, Georgia, serif',
                      fontSize: '4rem',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(37,99,235,0.3)',
                      lineHeight: 1,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {pillar.number}
                  </div>

                  <h3
                    className="font-serif text-white mb-6"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
                  >
                    {pillar.title}
                  </h3>

                  <div
                    className="h-px mb-6"
                    style={{ background: 'linear-gradient(90deg, #2563EB, transparent)' }}
                  />

                  <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.8' }}>
                    {pillar.description}
                  </p>

                  {/* Glow accent */}
                  <div
                    className="absolute -bottom-px left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentPhilosophy
