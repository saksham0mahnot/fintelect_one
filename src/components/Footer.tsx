import { brand } from '../data/content'

const Footer = () => {
  const year = new Date().getFullYear()

  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Global', href: '#global' },
    { label: 'NRI Advisory', href: '#nri' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer
      style={{
        background: '#030508',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="container-premium py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>

          {/* Brand */}
          <div className="max-w-sm">
            <div
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              Fintelect One
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569' }}>
              Institutional discipline. Personal trust. Serving HNIs and NRI families across 5 geographies.
            </p>
            <div className="text-xs" style={{ color: '#334155' }}>
              {brand.email}
            </div>
          </div>

          {/* Nav */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-300 hover:text-white"
                style={{ color: '#475569' }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-xs" style={{ color: '#334155' }}>
            © {year} {brand.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-6">
            {['SEBI Compliant', 'AMFI Registered', 'FEMA Framework'].map((badge) => (
              <span
                key={badge}
                className="text-xs tracking-wider"
                style={{ color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.08em' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div
          className="mt-8 pt-8 text-xs leading-relaxed"
          style={{
            color: '#1e293b',
            borderTop: '1px solid rgba(255,255,255,0.03)',
            maxWidth: '80ch',
          }}
        >
          Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.
          Past performance is not indicative of future results. Fintelect One is an AMFI-registered mutual fund distributor.
          All advisory services are provided in compliance with SEBI regulations. Investments in securities market are subject to market risk,
          read all the related documents carefully before investing.
        </div>
      </div>
    </footer>
  )
}

export default Footer
