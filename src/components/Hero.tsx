import { useRef, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { trustMetrics } from '../data/content'
import TrustBar from './TrustBar'

// Lazy load heavy 3D component
const GlobeCanvas = lazy(() => import('./GlobeCanvas'))

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      opacity: number; size: number; text: string; life: number; maxLife: number
    }> = []

    const financialTexts = [
      '₹', '$', '€', '£', '%', 'NAV', 'IRR', 'CAGR', 'P/E',
      'AUM', 'PMS', 'MF', 'IPO', 'ETF', '+2.4%', '-0.8%', '+18%',
      '7.2%', '12.5%', 'AAA', 'AA+', 'Nifty', 'S&P'
    ]

    const spawnParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        opacity: 0,
        size: 9 + Math.random() * 5,
        text: financialTexts[Math.floor(Math.random() * financialTexts.length)],
        life: 0,
        maxLife: 200 + Math.random() * 150,
      })
    }

    let frame = 0
    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      if (frame % 12 === 0 && particles.length < 60) spawnParticle()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        p.x += p.vx
        p.y += p.vy

        const halfLife = p.maxLife / 2
        if (p.life < halfLife) {
          p.opacity = (p.life / halfLife) * 0.15
        } else {
          p.opacity = ((p.maxLife - p.life) / halfLife) * 0.15
        }

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = Math.random() > 0.7 ? '#0284c7' : '#94a3b8'
        ctx.font = `${p.size}px "Inter", monospace`
        ctx.fillText(p.text, p.x, p.y)
        ctx.restore()
      }

      // Draw subtle connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 120) * 0.03
            ctx.strokeStyle = '#2563EB'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // GSAP text reveal
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      tl.fromTo(words,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, stagger: 0.12, ease: 'power4.out' }
      )
    }

    if (subRef.current) {
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
    }

    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const headline = "Institutional discipline. Personal trust."
  const words = headline.split(' ')

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* 3D Globe */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none z-0 opacity-60">
        <Suspense fallback={null}>
          <GlobeCanvas />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#FFFFFF] opacity-80 z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FFFFFF] to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 container-premium pt-24 pb-16 md:pt-36 lg:pt-44 md:pb-20">
        {/* Label */}
        {/* <motion.div
          className="section-label mb-10 mt-14"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {brand.name}
        </motion.div> */}

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-slate-900 mb-8"
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 7rem)',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            maxWidth: '14ch',
          }}
        >
          {words.map((word, i) => {
            const cleanWord = word.replace(/[.,]/g, '').toLowerCase()
            const isHighlighted = cleanWord === 'discipline' || cleanWord === 'trust'
            return (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <span
                  className="word inline-block"
                  style={isHighlighted ? { fontStyle: 'italic', color: '#2563EB' } : {}}
                >
                  {word}
                </span>
              </span>
            )
          })}
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-lg md:text-xl max-w-2xl mb-12"
          style={{ color: '#475569', lineHeight: '1.7', opacity: 0 }}
        >
          We bring private equity thinking to personal wealth serving discerning investors
          and NRI families across India, UK, UAE, USA, and Singapore.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <button
            className="btn-primary btn-magnetic"
            onClick={() => scrollToSection('services')}
          >
            Explore Services
          </button>
          <button
            className="btn-outline btn-magnetic"
            onClick={() => scrollToSection('contact')}
          >
            Start a Conversation
          </button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 container-premium pb-16">
        <TrustBar metrics={trustMetrics} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {/* <span className="text-xs tracking-widest text-slate-500 uppercase">Scroll</span> */}
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#2563EB] to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
