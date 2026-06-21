import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { philosophyPillars } from '../data/content'
import WorldPaths from './WorldPaths'

gsap.registerPlugin(ScrollTrigger)

const InvestmentPhilosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinnedRef = useRef<HTMLDivElement>(null)
  const mapGroupRef = useRef<SVGGElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !pinnedRef.current) return

    const totalHeight = philosophyPillars.length * window.innerHeight

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.philosophy-card')
      const progressFills = gsap.utils.toArray<HTMLElement>('.progress-fill')
      const indicators = gsap.utils.toArray<HTMLElement>('.progress-indicator-container')

      // Initial state of cards for cross-fade transition
      gsap.set(cards, {
        opacity: 0,
        pointerEvents: 'none'
      })
      gsap.set(cards[0], {
        opacity: 1,
        pointerEvents: 'auto'
      })
      gsap.set(progressFills, { width: '0%' })
      gsap.set(indicators, { width: '1.5rem' })
      gsap.set(indicators[0], { width: '3rem' })

      // Initial state of map - higher starting opacity for visibility
      gsap.set(mapGroupRef.current, { scale: 1.1, x: 0, y: 0, opacity: 0.1, transformOrigin: 'center center' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalHeight}`,
          pin: pinnedRef.current,
          scrub: 1.8, // Smooth scroll lag
          anticipatePin: 1,
        }
      })

      philosophyPillars.forEach((_, i) => {
        // 1. Fill current progress bar
        tl.to(progressFills[i], { width: '100%', ease: 'none', duration: 1 })

        // 2. Transition to next card (if not the last one) and animate background map
        if (i < philosophyPillars.length - 1) {
          // Map animations matching transitions
          let mapX = 0
          let mapY = 0
          let mapScale = 1.1
          let mapOpacity = 0.15

          if (i === 0) {
            // Transition from Pillar 1 to 2 (Asia Focus)
            mapX = -150
            mapY = 30
            mapScale = 1.45
            mapOpacity = 0.2
          } else if (i === 1) {
            // Transition from Pillar 2 to 3 (Americas Focus)
            mapX = 250
            mapY = -50
            mapScale = 1.55
            mapOpacity = 0.2
          } else if (i === 2) {
            // Transition from Pillar 3 to 4 (Global Focus - Zoom Out)
            mapX = 0
            mapY = 0
            mapScale = 0.95
            mapOpacity = 0.3
          }

          tl.to(cards[i], {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.35
          }, '+=0.1')
            .to(cards[i + 1], {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.35
            }, '<')
            .to(indicators[i], { width: '1.5rem', duration: 0.3 }, '<')
            .to(indicators[i + 1], { width: '3rem', duration: 0.3 }, '<')
            .to(mapGroupRef.current, {
              x: mapX,
              y: mapY,
              scale: mapScale,
              opacity: mapOpacity,
              duration: 0.9,
              ease: 'power2.out'
            }, '<')
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
        background: '#1C2B4A', // Pproposal-aligned deep navy background
      }}
    >
      <div
        ref={pinnedRef}
        className="h-screen flex items-center relative overflow-hidden"
        style={{ background: '#1C2B4A' }}
      >
        {/* ── Background Dotted World Map & Grid ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 960 500"
            className="w-full h-full object-cover"
          >
            <defs>
              <pattern
                id="philosophyDotPattern"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                {/* Denser and bright cyan dots for high visibility on dark blue */}
                <circle cx="2" cy="2" r="0.9" fill="rgba(56, 189, 248, 1)" />
              </pattern>
            </defs>

            {/* Latitude and Longitude lines */}
            <g className="grid-lines" opacity="0.3">
              {/* Latitudes */}
              {[100, 200, 300, 400].map((y) => (
                <line
                  key={y}
                  x1={0} y1={y} x2={960} y2={y}
                  stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.5"
                />
              ))}
              {/* Longitudes */}
              {[160, 320, 480, 640, 800].map((x) => (
                <line
                  key={x}
                  x1={x} y1={0} x2={x} y2={500}
                  stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.5"
                />
              ))}
            </g>

            {/* Dotted Map Group - Stroke is set to none for maximum smoothness */}
            <g
              ref={mapGroupRef}
              transform="translate(-37.67, -263.38) scale(1.22437, 1.09021)"
              style={{ transformOrigin: '480px 250px' }}
              stroke="none"
            >
              <WorldPaths fill="url(#philosophyDotPattern)" />
            </g>
          </svg>
        </div>

        <div className="container-premium w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Static statement */}
            <div>
              <div
                className="section-label mb-8 text-sky-400"
                style={{ color: '#38BDF8', '--accent-blue': '#38BDF8' } as React.CSSProperties}
              >
                Investment Philosophy
              </div>

              <h2
                className="font-serif text-white mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 5rem)',
                  lineHeight: '1.08',
                  letterSpacing: '-0.02em',
                }}
              >
                We do not chase returns.<br />
                <span style={{ color: '#38BDF8', fontStyle: 'italic' }}>We engineer them</span>
              </h2>

              <div
                className="h-px mb-8"
                style={{ background: 'linear-gradient(90deg, #38BDF8, transparent)', width: '6rem' }}
              />

              <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '42ch' }}>
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
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '1px',
                      overflow: 'hidden',
                      width: i === 0 ? '3rem' : '1.5rem',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <div
                      className="progress-fill absolute left-0 top-0 h-full"
                      style={{
                        background: '#38BDF8',
                        width: '0%',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dynamic pillars */}
            <div
              className="relative min-h-[400px] w-full flex items-center"
            >
              {philosophyPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="philosophy-card bg-white border border-white/50 rounded-3xl absolute left-0 right-0 shadow-2xl"
                  style={{
                    padding: '3rem',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Roman numeral - Deep Navy */}
                  <div
                    style={{
                      fontFamily: 'DM Serif Display, Georgia, serif',
                      fontSize: '4.5rem',
                      color: '#1C2B4A',
                      lineHeight: 1,
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                    }}
                  >
                    {pillar.number}
                  </div>

                  <h3
                    className="font-serif text-[#1C2B4A] mb-6 font-bold"
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
