import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { getLenis } from '../hooks/useLenis'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Global', href: '#global' },
  { label: 'NRI', href: '#nri' },
  { label: 'Process', href: '#process' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const lenis = getLenis()
      if (lenis) {
        lenis.scrollTo(href)
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(248,250,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(37,99,235,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(37,99,235,0.07)' : 'none',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-premium flex items-center justify-between py-5">
          {/* Logo */}
          <a
            href="#"
            className={`font-bold text-lg transition-colors duration-300 text-slate-900`}
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Fintelect<span style={{ color: '#2563EB' }}>.</span>One
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600`}
                style={{ color: '#64748B', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              className="btn-primary text-xs mt-2 mb-2"
              onClick={() => scrollTo('#contact')}
            >
              Schedule a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 text-slate-900`}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center"
            style={{ background: 'rgba(248,250,255,0.98)', backdropFilter: 'blur(40px)', borderBottom: '1px solid rgba(37,99,235,0.1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-premium">
              <div className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="text-3xl font-serif text-slate-800 block hover:text-blue-600 transition-colors"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-8"
                >
                  <button
                    className="btn-primary"
                    onClick={() => scrollTo('#contact')}
                  >
                    Schedule a Call
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
