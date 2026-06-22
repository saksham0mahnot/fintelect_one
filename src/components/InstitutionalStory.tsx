import { useRef } from 'react'
import { motion } from 'framer-motion'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institutionalTimeline } from '../data/content'

// gsap.registerPlugin(ScrollTrigger)

const InstitutionalStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  // const panelRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (!sectionRef.current || !panelRef.current) return
  // 
  //   const panels = panelRef.current.querySelectorAll('.story-panel')
  // 
  //   // Horizontal scroll
  //   const totalWidth = (panels.length - 1) * (window.innerWidth * 0.85)
  // 
  //   const ctx = gsap.context(() => {
  //     const scrollTween = gsap.to(panelRef.current, {
  //       x: () => -totalWidth,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top top',
  //         end: () => `+=${totalWidth}`,
  //         pin: true,
  //         scrub: 1,
  //         anticipatePin: 1,
  //       },
  //     })
  // 
  //     // Animate each panel's content
  //     panels.forEach((panel) => {
  //       gsap.fromTo(
  //         panel.querySelectorAll('.panel-content'),
  //         { opacity: 0, y: 30 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.5,
  //           stagger: 0.1,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: panel,
  //             containerAnimation: scrollTween,
  //             start: 'left 60%',
  //             toggleActions: 'play none none reverse',
  //           },
  //         }
  //       )
  //     })
  //   }, sectionRef.current || undefined)
  // 
  //   return () => ctx.revert()
  // }, [])

  // const storyPanels = [
  //   {
  //     label: '01 / Genesis',
  //     title: 'We bring private-equity\nthinking to personal wealth.',
  //     body: 'Most wealth managers sell products. We build portfolios with the same intellectual rigour that PE firms apply to a ₹500Cr investment.',
  //   },
  //   {
  //     label: '02 / Philosophy',
  //     title: 'Research first.\nAlways.',
  //     body: 'Every allocation begins with 12–18 months of thematic research. We anticipate economic cycles — not react to them.',
  //   },
  //   {
  //     label: '03 / Discipline',
  //     title: 'Conviction over\ndiversification.',
  //     body: 'Spreading capital thin is not a strategy — it is a disguise for ignorance. We make concentrated, well-researched bets.',
  //   },
  //   {
  //     label: '04 / Trust',
  //     title: 'No conflicts.\nNo compromises.',
  //     body: 'We are conflict-free. Every recommendation is made solely in your interest — never driven by commissions or product targets.',
  //   },
  //   {
  //     label: '05 / Global',
  //     title: 'Your wealth\nknows no border.',
  //     body: 'From Indian mid-caps to S&P 500 giants to European bonds — we invest where the opportunity is.',
  //   },
  // ]

  return (
    <section ref={sectionRef} id="story" className="overflow-hidden">
      {/* 
      <div ref={panelRef} className="flex" style={{ width: `${storyPanels.length * 85}vw` }}>
        {storyPanels.map((panel, i) => (
          <div
            key={i}
            className="story-panel flex-shrink-0"
            style={{
              width: '85vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              padding: '4rem 6rem',
              borderRight: '1px solid rgba(37,99,235,0.08)',
              background: i % 2 === 0 ? '#F8FAFF' : '#EEF3FF',
            }}
          >
            <div className="max-w-2xl">
              <div className="panel-content section-label mb-8">
                {panel.label}
              </div>
              <h2
                className="panel-content font-serif text-slate-900 mb-8"
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 5rem)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'pre-line',
                }}
              >
                {panel.title}
              </h2>
              <div
                className="panel-content h-px mb-8"
                style={{
                  background: 'linear-gradient(90deg, #2563EB, transparent)',
                  width: '8rem',
                }}
              />
              <p
                className="panel-content text-xl"
                style={{ color: '#475569', lineHeight: '1.75', maxWidth: '45ch' }}
              >
                {panel.body}
              </p>
            </div>

            <div
              className="absolute right-16 bottom-16 font-sans font-black"
              style={{
                fontSize: 'clamp(6rem, 12vw, 14rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(37,99,235,0.07)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
      */}

      {/* Timeline below the scroll */}
      <div
        style={{
          background: '#EEF3FF',
          borderTop: '1px solid rgba(37,99,235,0.1)',
          padding: '5rem 0',
        }}
      >
        <div className="container-premium">
          <div className="section-label mb-12">Track Record</div>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-1.5 left-0 right-0 h-px hidden lg:block"
              style={{ background: 'rgba(37,99,235,0.1)' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {institutionalTimeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="timeline-dot mb-4" />
                  <div
                    className="text-sm font-bold mb-2"
                    style={{ color: '#2563EB', fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.year}
                  </div>
                  <p className="text-sm" style={{ color: '#475569', lineHeight: '1.6' }}>
                    {item.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstitutionalStory
