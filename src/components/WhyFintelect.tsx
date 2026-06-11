import { motion } from 'framer-motion'

const NAVBAR_H = 72 // px — fixed navbar height

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

const hoverOn = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = '0 14px 40px rgba(37,99,235,0.13), 0 0 0 1.5px rgba(37,99,235,0.18)'
  el.style.transform = 'translateY(-3px)'
}
const hoverOff = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = 'none'
  el.style.transform = 'translateY(0)'
}

const IconBadge = ({ color, bg, size = 18, children }: { color: string; bg: string; size?: number; children: React.ReactNode }) => (
  <div style={{ width: 40, height: 40, borderRadius: 11, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
    <div style={{ width: size, height: size }}>{children}</div>
  </div>
)

const Glow = ({ color, pos }: { color: string; pos: React.CSSProperties }) => (
  <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', background: `radial-gradient(circle, ${color}1e, transparent 70%)`, pointerEvents: 'none', zIndex: 0, ...pos }} />
)

const baseCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(37,99,235,0.09)',
  borderRadius: '18px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: 'none',
  transition: 'box-shadow 0.28s ease, transform 0.28s ease',
  display: 'flex',
  flexDirection: 'column',
}

const pill = (color: string, bg: string, border: string): React.CSSProperties => ({
  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
  background: bg, border: `1px solid ${border}`, borderRadius: 99,
  padding: '0.22rem 0.7rem',
  fontSize: '0.68rem', fontWeight: 600, color, letterSpacing: '0.03em',
  whiteSpace: 'nowrap',
})

const dot = (color: string): React.CSSProperties => ({
  width: 5, height: 5, borderRadius: '50%', background: color, flexShrink: 0,
})

const WhyFintelect = () => {
  return (
    <section
      id="why"
      style={{
        background: '#EEF3FF',
        height: `calc(100vh - ${NAVBAR_H}px)`,
        scrollMarginTop: `${NAVBAR_H}px`,
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 4rem 1.75rem',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >

      {/* ── Compact header ─────────────────────────── */}
      <motion.div style={{ flexShrink: 0, marginBottom: '1.25rem' }} {...fade(0)}>
        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Why Fintelect One</div>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0F172A' }}
        >
          Not a product-pusher.{' '}
          <span style={{ color: '#2563EB' }}>A wealth architect.</span>
        </h2>
      </motion.div>

      {/* ══ BENTO GRID — fills all remaining height ═══════════════ */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr 1fr 1.05fr',
          gridTemplateRows: '0.9fr 1.2fr 0.9fr',
          gap: '0.8rem',
        }}
      >

        {/* ┌──────────────────────────────────┐
            │  1 — Wide hero  col 1–3, row 1   │
            └──────────────────────────────────┘ */}
        <motion.div {...fade(0.06)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '1 / 3', gridRow: '1 / 2', padding: '1.25rem 1.5rem', flexDirection: 'row', alignItems: 'center', gap: '1.25rem' }}>
          <Glow color="#2563EB" pos={{ top: -50, left: -50 }} />

          {/* Big outline number */}
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1.5px rgba(37,99,235,0.14)', letterSpacing: '-0.04em', flexShrink: 0, userSelect: 'none', zIndex: 1 }}>
            01
          </div>

          <div style={{ flex: 1, minWidth: 0, zIndex: 1 }}>
            <IconBadge color="#2563EB" bg="rgba(37,99,235,0.08)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
              </svg>
            </IconBadge>
            <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(0.95rem, 1.35vw, 1.25rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0.55rem 0 0.4rem' }}>
              Institutional insight, personal scale
            </h3>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#64748B', margin: 0 }}>
              Our team operates at the intersection of global private equity and Indian markets — frameworks typically reserved for institutions, now accessible at your level.
            </p>
          </div>
        </motion.div>

        {/* ┌──────────────────────────────────────┐
            │  2 — Tall right  col 3–5, row 1–3   │
            └──────────────────────────────────────┘ */}
        <motion.div {...fade(0.1)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '3 / 5', gridRow: '1 / 3', padding: '1.5rem 1.6rem', justifyContent: 'space-between' }}>
          <Glow color="#0284C7" pos={{ top: -40, right: -40 }} />

          <div style={{ zIndex: 1 }}>
            <IconBadge color="#0284C7" bg="rgba(2,132,199,0.09)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </IconBadge>
            <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(1.1rem, 1.5vw, 1.45rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0.75rem 0 0.55rem' }}>
              Multi-asset, one relationship
            </h3>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: '#64748B', margin: 0 }}>
              Mutual funds, PMS, bonds, direct equities, and global markets managed cohesively. No fragmented advisors or conflicting recommendations.
            </p>

            {/* Checklist of features */}
            <ul style={{ fontSize: '0.65rem', color: '#64748B', listStyleType: 'none', padding: 0, margin: '0.85rem 0 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 'bold' }}>✓</span> Unified family office advisory
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 'bold' }}>✓</span> Conflict-free asset allocation
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#0284C7', fontWeight: 'bold' }}>✓</span> Consolidated portfolio reporting
              </li>
            </ul>

            {/* Asset tags to fill space */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem', marginTop: '0.85rem' }}>
              {['Mutual Funds', 'PMS Advisory', 'Corporate Bonds', 'Direct Stocks', 'Global Markets'].map((asset) => (
                <span key={asset} style={pill('#0284C7', 'rgba(2,132,199,0.07)', 'rgba(2,132,199,0.18)')}>
                  {asset}
                </span>
              ))}
            </div>
          </div>

          {/* Stat block */}
          <div style={{ padding: '1rem 1.25rem', background: 'rgba(2,132,199,0.07)', borderRadius: '14px', border: '1px solid rgba(2,132,199,0.15)', zIndex: 1 }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800, color: '#0369A1', lineHeight: 1, letterSpacing: '-0.03em' }}>5+</div>
            <div style={{ fontSize: '0.7rem', color: '#0284C7', fontWeight: 500, marginTop: '0.25rem', letterSpacing: '0.03em' }}>Asset classes, unified advice</div>
          </div>
        </motion.div>

        {/* ┌──────────────────────────────┐
            │  3 — Small  col 1, row 2    │
            └──────────────────────────────┘ */}
        <motion.div {...fade(0.14)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '1 / 2', gridRow: '2 / 3', padding: '1rem 1.2rem' }}>
          <Glow color="#1E3A8A" pos={{ bottom: -50, right: -50 }} />
          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <IconBadge color="#1D4ED8" bg="rgba(29,78,216,0.09)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </IconBadge>
              <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(0.88rem, 1.2vw, 1.1rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0.6rem 0 0.5rem' }}>
                A decade of market cycles
              </h3>
              <p style={{ fontSize: '0.76rem', lineHeight: 1.6, color: '#64748B', margin: 0 }}>
                Through bull runs, corrections, demonetisation, COVID, rate cycle reversals. Judgment earned navigating real adversity.
              </p>
            </div>
            <div style={{ ...pill('#1D4ED8', 'rgba(29,78,216,0.07)', 'rgba(29,78,216,0.18)'), alignSelf: 'flex-start', marginTop: '0.75rem' }}>
              <div style={dot('#1D4ED8')} />10+ Years
            </div>
          </div>
        </motion.div>

        {/* ┌──────────────────────────────┐
            │  4 — Small  col 2, row 2    │
            └──────────────────────────────┘ */}
        <motion.div {...fade(0.18)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '2 / 3', gridRow: '2 / 3', padding: '1rem 1.2rem' }}>
          <Glow color="#0284C7" pos={{ top: -40, left: -40 }} />
          <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <IconBadge color="#0284C7" bg="rgba(2,132,199,0.09)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </IconBadge>
              <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(0.88rem, 1.2vw, 1.1rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0.6rem 0 0.5rem' }}>
                Early movers in global investing
              </h3>
              <p style={{ fontSize: '0.76rem', lineHeight: 1.6, color: '#64748B', margin: 0 }}>
                Three years of live international portfolio management — generating alpha before it became mainstream.
              </p>
            </div>
            <div style={{ ...pill('#0284C7', 'rgba(2,132,199,0.07)', 'rgba(2,132,199,0.18)'), alignSelf: 'flex-start', marginTop: '0.75rem' }}>
              <div style={dot('#0284C7')} />3 yrs Global Track
            </div>
          </div>
        </motion.div>

        {/* ┌──────────────────────────────────┐
            │  5 — Wide  col 1–3, row 3        │
            └──────────────────────────────────┘ */}
        <motion.div {...fade(0.2)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '1 / 3', gridRow: '3 / 4', padding: '1.25rem 1.5rem', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
          <Glow color="#64748B" pos={{ bottom: -40, left: -30 }} />

          <div style={{ flex: 1, minWidth: 0, zIndex: 1 }}>
            <IconBadge color="#64748B" bg="rgba(100,116,139,0.09)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </IconBadge>
            <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(0.95rem, 1.35vw, 1.25rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.25, letterSpacing: '-0.01em', margin: '0.55rem 0 0.4rem' }}>
              Conflict-aware transparency
            </h3>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: '#64748B', margin: 0 }}>
              Every rupee we earn is disclosed upfront — trail commissions, advisory fees, referral income, all of it. No hidden layers, no misaligned incentives, ever.
            </p>
          </div>

          {/* Fee type tags */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem', flexShrink: 0, zIndex: 1 }}>
            {['Trail Commission', 'Advisory Fees', 'Zero Hidden Charges', 'Full Disclosure'].map((f) => (
              <div key={f} style={pill('#475569', 'rgba(100,116,139,0.07)', 'rgba(100,116,139,0.18)')}>
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ┌──────────────────────────────────┐
            │  6 — col 3–5, row 3              │
            └──────────────────────────────────┘ */}
        <motion.div {...fade(0.24)} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
          style={{ ...baseCard, gridColumn: '3 / 5', gridRow: '3 / 4', padding: '1.25rem 1.5rem', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
          <Glow color="#2563EB" pos={{ top: -40, right: -40 }} />

          <div style={{ flex: 1, minWidth: 0, zIndex: 1 }}>
            <IconBadge color="#2563EB" bg="rgba(37,99,235,0.08)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </IconBadge>
            <h3 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 'clamp(0.95rem, 1.35vw, 1.25rem)', fontWeight: 600, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0.55rem 0 0.4rem' }}>
              CA-led, tax-integrated planning
            </h3>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.65, color: '#64748B', margin: 0 }}>
              Every portfolio decision accounts for LTCG, STCG, and indexation — ensuring the after-tax outcome, the only number that truly matters to you.
            </p>
          </div>

          {/* Tax tags */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem', flexShrink: 0, zIndex: 1 }}>
            {['LTCG Optimised', 'STCG Planning', 'Indexation', 'CA-Certified'].map((tag) => (
              <div key={tag} style={pill('#2563EB', 'rgba(37,99,235,0.07)', 'rgba(37,99,235,0.18)')}>
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Responsive: tablet & mobile fall back to scrollable layout */}
      <style>{`
        @media (max-width: 1024px) {
          #why {
            height: auto !important;
            min-height: unset !important;
            overflow: visible !important;
            padding: 4rem 2rem !important;
          }
          #why > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
            flex: unset !important;
          }
          #why > div:last-child > * {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 600px) {
          #why > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyFintelect
