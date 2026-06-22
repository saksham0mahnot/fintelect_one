import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { globalRegions } from '../data/content'
import WorldPaths from './WorldPaths'

// Latitude/longitude to SVG position on a Mercator projection
const toSVGPos = (lat: number, lng: number, w: number, _h: number) => {
  const x = ((lng + 180) / 360) * w
  const latRad = (lat * Math.PI) / 180
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  const y = 293.93 - 152.49 * mercN
  return { x, y }
}

const SVG_W = 960
const SVG_H = 500

const GlobalMap = () => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState<string>('india')

  const regions = globalRegions
  const activeRegion = regions.find((r) => r.id === active) || regions[0]

  // India center (source of connections)
  const india = toSVGPos(20.59, 78.96, SVG_W, SVG_H)

  return (
    <div className="relative" style={{ background: '#EEF3FF' }}>
      {/* SVG World Map */}
      <div className="hidden lg:block relative overflow-hidden" style={{ height: '55vh', minHeight: '400px' }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full h-full"
          style={{ opacity: 0.9 }}
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.1" fill="rgba(37, 99, 235, 0.15)" />
            </pattern>
          </defs>

          {/* Background rectangle */}
          <rect width={SVG_W} height={SVG_H} fill="#EEF3FF" />

          {/* Dotted World Map Background */}
          <g transform="translate(-37.67, -263.38) scale(1.22437, 1.09021)">
            <WorldPaths fill="url(#dotPattern)" />
          </g>

          {/* Latitude grid lines */}
          {[-60, -30, 0, 30, 60].map((lat) => {
            const { y } = toSVGPos(lat, 0, SVG_W, SVG_H)
            return (
              <line
                key={lat}
                x1={0} y1={y} x2={SVG_W} y2={y}
                stroke="rgba(37,99,235,0.08)" strokeWidth="0.5"
              />
            )
          })}

          {/* Longitude grid lines */}
          {[-120, -60, 0, 60, 120].map((lng) => {
            const { x } = toSVGPos(0, lng, SVG_W, SVG_H)
            return (
              <line
                key={lng}
                x1={x} y1={0} x2={x} y2={SVG_H}
                stroke="rgba(37,99,235,0.08)" strokeWidth="0.5"
              />
            )
          })}

          {/* Connection arcs from India to each region */}
          {regions.filter((r) => r.id !== 'india').map((region) => {
            const target = toSVGPos(region.lat, region.lng, SVG_W, SVG_H)
            const midX = (india.x + target.x) / 2
            const midY = Math.min(india.y, target.y) - 80
            const isActive = active === region.id || hovered === region.id

            return (
              <g key={region.id}>
                <path
                  d={`M ${india.x} ${india.y} Q ${midX} ${midY} ${target.x} ${target.y}`}
                  fill="none"
                  stroke={isActive ? '#2563EB' : 'rgba(37,99,235,0.15)'}
                  strokeWidth={isActive ? 1.5 : 0.8}
                  strokeDasharray="4 4"
                  style={{ transition: 'stroke 0.4s ease, stroke-width 0.4s ease' }}
                />
                {/* Animated dot along the arc */}
                {isActive && (
                  <circle r="3" fill="#38BDF8" opacity="0.8">
                    <animateMotion
                      path={`M ${india.x} ${india.y} Q ${midX} ${midY} ${target.x} ${target.y}`}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            )
          })}

          {/* Region dots */}
          {regions.map((region) => {
            const pos = toSVGPos(region.lat, region.lng, SVG_W, SVG_H)
            const isHovered = hovered === region.id
            const isActive = active === region.id
            const isIndia = region.id === 'india'

            return (
              <g
                key={region.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(region.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(region.id)}
              >
                {/* Pulse ring */}
                {(isActive || isIndia) && (
                  <circle
                    r="16"
                    fill="none"
                    stroke={isIndia ? '#38BDF8' : '#2563EB'}
                    strokeWidth="0.5"
                    opacity="0.3"
                  >
                    <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Main dot */}
                <circle
                  r={isIndia ? 6 : isHovered || isActive ? 5 : 3.5}
                  fill={isIndia ? '#38BDF8' : isActive ? '#2563EB' : '#64748B'}
                  style={{ transition: 'all 0.3s ease' }}
                />

                {/* Label */}
                <text
                  x="0"
                  y={isIndia ? -14 : -10}
                  textAnchor="middle"
                  fill={isIndia ? '#0284C7' : isActive || isHovered ? '#1E3A8A' : '#94A3B8'}
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  letterSpacing="0.05em"
                  style={{ transition: 'fill 0.3s ease' }}
                >
                  {region.name}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EEF3FF] to-transparent" />
      </div>

      {/* Region info panel */}
      <div className="container-premium py-12 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Region nav */}
          <div>
            <div className="section-label mb-8">Select Market</div>
            <div className="space-y-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActive(region.id)}
                  className="w-full text-left flex items-center gap-4 px-4 py-3 transition-all duration-300"
                  style={{
                    background: active === region.id ? 'rgba(37,99,235,0.08)' : 'transparent',
                    border: active === region.id ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: active === region.id ? '#2563EB' : '#334155' }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: active === region.id ? '#1E3A8A' : '#64748B' }}
                  >
                    {region.name}
                  </span>
                  <span className="text-xs ml-auto" style={{ color: '#475569' }}>
                    {region.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active region detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-premium rounded-sm p-8"
            >
              <div className="section-label mb-6">{activeRegion.name}</div>
              <h3 className="font-serif text-slate-900 text-2xl mb-4">{activeRegion.description}</h3>
              <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, #2563EB, transparent)' }} />
              <div className="flex flex-wrap gap-3">
                {activeRegion.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs font-mono tracking-wider px-3 py-1.5"
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.2)',
                      color: '#475569',
                      borderRadius: '2px',
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Institutional indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12" style={{ borderTop: '1px solid rgba(37,99,235,0.1)' }}>
          {[
            { label: 'Active Since', value: '2022' },
            { label: 'Track Record', value: '3+ Year' },
            { label: 'Research Cycle', value: '12-18 Months' },
            { label: 'Markets Covered', value: '5+ Regions' },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-sm p-6"
            >
              <div className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: '#64748B' }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GlobalMap
