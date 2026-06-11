import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { philosophyPillars } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const InvestmentPhilosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return

    const totalHeight = philosophyPillars.length * window.innerHeight

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.philosophy-card')
      const progressFills = gsap.utils.toArray<HTMLElement>('.progress-fill')
      const indicators = gsap.utils.toArray<HTMLElement>('.progress-indicator-container')

      // Initial state
      gsap.set(cards, { opacity: 0, y: 30, x: 15, pointerEvents: 'none' })
      gsap.set(cards[0], { opacity: 1, y: 0, x: 0, pointerEvents: 'auto' })
      gsap.set(progressFills, { width: '0%' })
      gsap.set(indicators, { width: '1.5rem' })
      gsap.set(indicators[0], { width: '3rem' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalHeight}`,
          pin: pinnedRef.current,
          scrub: 1,
          anticipatePin: 1,
        }
      })

      philosophyPillars.forEach((_, i) => {
        // 1. Fill current progress bar
        tl.to(progressFills[i], { width: '100%', ease: 'none', duration: 1 })

        // 2. Transition to next card (if not the last one)
        if (i < philosophyPillars.length - 1) {
          tl.to(cards[i], { opacity: 0, y: -30, x: -15, pointerEvents: 'none', duration: 0.3 }, '+=0.1')
            .to(cards[i + 1], { opacity: 1, y: 0, x: 0, pointerEvents: 'auto', duration: 0.3 }, '<')
            .to(indicators[i], { width: '1.5rem', duration: 0.3 }, '<')
            .to(indicators[i + 1], { width: '3rem', duration: 0.3 }, '<')
        }
      })
    }, sectionRef.current || undefined)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      style={{
        height: `${(philosophyPillars.length + 1) * 100}vh`,
        background: '#F8FAFF',
      }}
    >
      <div
        ref={pinnedRef}
        className="h-screen flex items-center"
        style={{ background: '#F8FAFF' }}
      >
        <div className="container-premium w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Static statement */}
            <div>
              <div className="section-label mb-8">
                Investment Philosophy
              </div>

              <h2
                className="font-serif text-slate-900 mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                }}
              >
                We do not chase returns.<br /><span style={{ color: '#2563EB', fontStyle: 'italic' }}>We engineer them</span>
              </h2>

              <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, #2563EB, transparent)', width: '6rem' }} />

              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '42ch' }}>
                Our investment framework is not a product. It is a system of beliefs built over a decade of institutional investing.
              </p>

              {/* Progress indicators */}
              <div className="flex gap-3 mt-12">
                {philosophyPillars.map((_, i) => (
                  <div
                    key={i}
                    className="progress-indicator-container relative"
                    style={{
                      height: '2px',
                      background: 'rgba(37,99,235,0.15)',
                      borderRadius: '1px',
                      overflow: 'hidden',
                      width: i === 0 ? '3rem' : '1.5rem',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <div
                      className="progress-fill absolute left-0 top-0 h-full"
                      style={{
                        background: '#2563EB',
                        width: '0%',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dynamic pillars */}
            <div className="relative min-h-[400px] w-full flex items-center">
              {philosophyPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="philosophy-card glass-premium rounded-sm absolute left-0 right-0"
                  style={{
                    padding: '3rem',
                    boxSizing: 'border-box',
                  }}
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
                    className="font-serif text-slate-900 mb-6"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
                  >
                    {pillar.title}
                  </h3>

                  <div
                    className="h-px mb-6"
                    style={{ background: 'linear-gradient(90deg, #2563EB, transparent)' }}
                  />

                  <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', margin: 0 }}>
                    {pillar.description}
                  </p>

                  {/* Glow accent */}
                  <div
                    className="absolute -bottom-px left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentPhilosophy
