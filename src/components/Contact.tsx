import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Clock, ArrowUpRight } from 'lucide-react'
import { brand, coverageCountries } from '../data/content'

const Contact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let offset = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const gridSize = 60
      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      offset = (offset + 0.15) % gridSize

      ctx.strokeStyle = 'rgba(37,99,235,0.06)'
      ctx.lineWidth = 0.5

      for (let x = 0; x <= cols; x++) {
        ctx.beginPath()
        ctx.moveTo(x * gridSize - offset, 0)
        ctx.lineTo(x * gridSize - offset, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= rows; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * gridSize - offset)
        ctx.lineTo(canvas.width, y * gridSize - offset)
        ctx.stroke()
      }

      // Glowing dots at intersections
      const dotCount = 12
      for (let i = 0; i < dotCount; i++) {
        const xi = (i * 3) % cols
        const yi = Math.floor(i / cols)
        const x = xi * gridSize - offset
        const y = yi * gridSize - offset
        const alpha = (Math.sin(Date.now() * 0.001 + i) + 1) / 2 * 0.3
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: '#05070B' }}>
      {/* Grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.8 }}
      />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          className="section-label mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left — Info */}
          <div>
            <motion.h2
              className="font-serif text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(2rem, 4vw, 4.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Let's build your wealth framework.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-12"
              style={{ color: '#94A3B8', lineHeight: '1.75', maxWidth: '42ch' }}
            >
              A 45-minute discovery call. No pitch. No obligation.
              Just an honest conversation about your financial future.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: brand.email,
                  href: `mailto:${brand.email}`,
                },
                {
                  icon: Globe,
                  label: 'Coverage',
                  value: coverageCountries.join(' · '),
                },
                {
                  icon: Clock,
                  label: 'Response Time',
                  value: 'Within 24 hours',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(37,99,235,0.08)',
                      border: '1px solid rgba(37,99,235,0.2)',
                    }}
                  >
                    <Icon size={16} strokeWidth={1.5} style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase mb-1" style={{ color: '#475569' }}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-white hover:text-[#38BDF8] transition-colors duration-300"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-white" style={{ fontSize: '0.9375rem' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {submitted ? (
              <div
                className="glass-premium rounded-sm p-12 flex flex-col items-start justify-center h-full"
                style={{ minHeight: '400px' }}
              >
                <div className="text-5xl mb-6">✓</div>
                <h3 className="font-serif text-white text-2xl mb-4">Message received.</h3>
                <p style={{ color: '#94A3B8', lineHeight: '1.75' }}>
                  We'll be in touch within 24 hours to schedule your discovery call.
                  Thank you for choosing Fintelect One.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-premium rounded-sm p-10 space-y-6"
              >
                <div>
                  <label className="text-xs tracking-wider uppercase block mb-2" style={{ color: '#64748B' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-white text-sm outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    placeholder="Your full name"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(37,99,235,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div>
                  <label className="text-xs tracking-wider uppercase block mb-2" style={{ color: '#64748B' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-white text-sm outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    placeholder="your@email.com"
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(37,99,235,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div>
                  <label className="text-xs tracking-wider uppercase block mb-2" style={{ color: '#64748B' }}>
                    Message (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 text-white text-sm outline-none transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    placeholder="Tell us about your goals..."
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(37,99,235,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Schedule a Conversation
                  <ArrowUpRight size={16} />
                </button>

                <p className="text-xs text-center" style={{ color: '#334155' }}>
                  Your data is secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
