import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import whyFintelectImg from '../assets/whyfintelect_img.jpeg'

const NAVBAR_H = 72 // px — fixed navbar height

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

const points = [
  {
    title: 'Institutional insight, personal scale',
    description: 'Our team operates at the intersection of global private equity and Indian markets frameworks typically reserved for institutions, now accessible at your level.',
    color: '#2563EB',
  },
  {
    title: 'Conflict aware transparency',
    description: 'We openly disclose how we earn trail commissions, advisory fees, all of it. You always know what we make and why we recommend what we recommend.',
    color: '#64748B',
  },
  {
    title: 'A decade of market cycles',
    description: 'Through bull runs, corrections, demonetisation, COVID, rate cycle reversals. Judgment earned by navigating real adversity with real client portfolios.',
    color: '#64748B',
  },
  {
    title: 'Early movers in global investing',
    description: 'Three years of live international portfolio management already generating alpha for clients who moved early, before it became a mainstream conversation.',
    color: '#0284C7',
  },
  {
    title: 'Multi-asset, one relationship',
    description: 'Mutual funds, PMS, bonds, direct equities, global markets managed cohesively. No fragmented advisors, no conflicting recommendations, no information gaps.',
    color: '#0284C7',
  },
  {
    title: 'CA-led, tax integrated planning',
    description: 'Every portfolio decision accounts for LTCG, STCG, and indexation ensuring the after tax outcome, which is the only number that truly matters to you.',
    color: '#2563EB',
  },
]

const WhyFintelect = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // targets the center of the viewport
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
          setActiveIdx(index)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const targets = document.querySelectorAll('.why-point-card')
    targets.forEach((target) => observer.observe(target))

    return () => {
      targets.forEach((target) => observer.unobserve(target))
    }
  }, [])

  return (
    <section
      id="why"
      style={{
        background: '#FFFFFF',
        minHeight: '100vh',
        scrollMarginTop: `${NAVBAR_H}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 0',
        boxSizing: 'border-box',
      }}
    >
      <div className="container-premium" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', width: '100%' }}>

        {/* ── Section Header ─────────────────────────── */}
        <motion.div style={{ flexShrink: 0 }} {...fade(0)}>
          <div className="section-label" style={{ marginBottom: '0.5rem' }}>Why Fintelect One</div>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0F172A' }}
          >
            Not a product pusher.{' '}
            <span style={{ color: '#2563EB' }}><span style={{ fontStyle: 'italic' }}>a wealth architect.</span></span>
          </h2>
          <br />
          <h4>A different kind of wealth relationship.. <br />
            Most advisors sell products. We build portfolios. There is a profound difference one that compounds over years, not just months.</h4>
        </motion.div>

        {/* ── Content Wrapper ─────────────────────────── */}
        <div className="why-content-wrapper">

          {/* Left Side: Sticky Visual Box */}
          <div className="why-left-sticky">
            <div className="yacht-image-container">
              <img
                src={whyFintelectImg}
                alt="Strategy & Wealth Advisory"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Right Side: Scrollable Points */}
          <div className="why-right-scroll">
            {points.map((pt, i) => {
              const isSelected = activeIdx === i
              const cardColor = pt.color
              return (
                <div
                  key={pt.title}
                  data-index={i}
                  className="why-point-card"
                  style={{
                    opacity: isSelected ? 1 : 0.3,
                    transform: isSelected ? 'translateX(20px)' : 'translateX(0px)',
                    borderBottomColor: isSelected ? `${cardColor}44` : 'rgba(37, 99, 235, 0.08)',
                  }}
                >
                  <h3
                    className="why-point-title font-display"
                    style={{
                      color: isSelected ? cardColor : '#0F172A',
                    }}
                  >
                    {pt.title}
                  </h3>
                  <p className="why-point-description">
                    {pt.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        .why-content-wrapper {
          display: flex;
          gap: 6rem;
          align-items: flex-start;
          width: 100%;
        }

        .why-left-sticky {
          position: sticky;
          top: 150px;
          align-self: start;
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .yacht-image-container {
          width: 100%;
          max-width: 480px;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(37, 99, 235, 0.05);
        }

        .why-right-scroll {
          flex: 1.25;
          display: flex;
          flex-direction: column;
          padding: 10vh 0; /* adds breathing room for scrolling elements */
        }

        .why-point-card {
          padding: 3.5rem 0;
          border-bottom: 1px solid rgba(37, 99, 235, 0.08);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, border-color 0.6s ease;
          cursor: default;
        }

        .why-point-card:first-child {
          padding-top: 0;
        }

        .why-point-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .why-point-title {
          font-size: clamp(1.4rem, 2vw, 1.85rem);
          font-weight: 500;
          margin-bottom: 0.75rem;
          letter-spacing: -0.015em;
          transition: color 0.6s ease;
        }

        .why-point-description {
          font-size: clamp(0.9rem, 1.05vw, 1.05rem);
          line-height: 1.65;
          color: #475569;
          margin: 0;
        }

        @media (max-width: 1024px) {
          #why {
            padding: 4rem 0 !important;
          }
          .why-content-wrapper {
            flex-direction: column;
            gap: 3.5rem;
          }
          .why-left-sticky {
            position: relative;
            top: 0;
            width: 100%;
            height: 400px;
            max-height: unset;
            min-height: unset;
            display: block;
          }
          .yacht-image-container {
            max-width: 100%;
            height: 100%;
          }
          .why-right-scroll {
            width: 100%;
            padding: 0;
          }
          .why-point-card {
            padding: 2.2rem 0;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyFintelect
