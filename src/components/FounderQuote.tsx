import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { founderQuote } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const FounderQuote = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!quoteRef.current || !sectionRef.current) return

    // Split text into lines for animation
    const lines = quoteRef.current.querySelectorAll('.quote-line')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { y: '110%', opacity: 0, rotateX: -15 },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        }
      )

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        )
      }
    }, sectionRef.current || undefined)

    return () => ctx.revert()
  }, [])

  // Split quote into lines manually
  const quoteLines = [
    'Wealth management is not',
    'about picking the right stocks.',
    'It is about building the',
    'right framework one that',
    'survives every market cycle.',
  ]

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="section-padding"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid rgba(37,99,235,0.1)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
      }}
    >
      <div className="container-premium">
        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <motion.div
            className="section-label mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Founder's Philosophy
          </motion.div>

          {/* Quote */}
          <div
            ref={quoteRef}
            style={{ perspective: '800px' }}
          >
            {quoteLines.map((line, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ marginBottom: i < quoteLines.length - 1 ? '0' : '0' }}
              >
                <div
                  className="quote-line founder-quote text-slate-900"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 5.5rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    display: 'block',
                    willChange: 'transform',
                  }}
                >
                  {line}
                  {/* Highlight key phrase */}
                  {i === 2 && (
                    <span className="text-gradient-blue" style={{ fontStyle: "italic" }}> right framework</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Accent line */}
          <div
            ref={lineRef}
            className="h-px mt-12 mb-10"
            style={{
              background: 'linear-gradient(90deg, #2563EB, rgba(56,189,248,0.4), transparent)',
              transformOrigin: 'left',
              maxWidth: '20rem',
            }}
          />

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-slate-900 font-semibold text-lg mb-1">
              {founderQuote.attribution}
            </div>
            <div className="text-sm mb-0.5" style={{ color: '#475569' }}>
              {founderQuote.title}
            </div>
            <div className="text-xs tracking-wider" style={{ color: '#64748B' }}>
              {founderQuote.credentials}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderQuote
