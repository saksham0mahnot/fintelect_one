import { useEffect, useRef, useState } from 'react'
import ReactCountUp from 'react-countup'
const CountUp = (ReactCountUp as any).default || ReactCountUp
import { useInView } from 'react-intersection-observer'

interface Metric {
  label: string
  value: number | string
  prefix?: string
  suffix?: string
  decimals?: number
}

interface TrustBarProps {
  metrics: Metric[]
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

interface ShuffleTextProps {
  text: string
  play: boolean
  delay?: number
}

const ShuffleText = ({ text, play, delay = 0 }: ShuffleTextProps) => {
  const [displayed, setDisplayed] = useState(text)
  const frameRef = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!play) return

    timerRef.current = setTimeout(() => {
      const duration = 1200 // ms total animation
      const staggerPerChar = 80 // ms each char takes to settle
      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const chars = text.split('').map((ch, i) => {
          if (ch === ' ' || ch === '•') return ch
          const settleAt = i * staggerPerChar
          if (elapsed >= settleAt + duration / text.length) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        setDisplayed(chars.join(''))

        const allDone = text.split('').every((ch, i) => {
          if (ch === ' ' || ch === '•') return true
          return elapsed >= i * staggerPerChar + duration / text.length
        })

        if (!allDone) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          setDisplayed(text)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [play, text, delay])

  // Render with blue "•" separators
  return (
    <>
      {displayed.split('•').map((part, idx, arr) => (
        <span key={idx}>
          {part.trim()}
          {idx < arr.length - 1 && (
            <span style={{ color: '#0ea5e9' }}> • </span>
          )}
        </span>
      ))}
    </>
  )
}

const TrustBar = ({ metrics }: TrustBarProps) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div
      ref={ref}
      className="glass border-subtle rounded-sm mt-8"
      style={{
        padding: '1.5rem 2rem',
        display: 'grid',
        gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
        gap: '0',
      }}
    >
      {metrics.map((metric, i) => (
        <div
          key={metric.label}
          className="flex flex-col items-start"
          style={{
            padding: '0.5rem 1.5rem',
            borderRight: i < metrics.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
          }}
        >
          <div className="flex items-baseline gap-1 mb-1">
            {metric.prefix && (
              <span className="text-xl font-semibold text-slate-900">{metric.prefix}</span>
            )}
            <span className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              {typeof metric.value === 'string' ? (
                <ShuffleText
                  text={metric.value}
                  play={inView}
                  delay={i * 200}
                />
              ) : inView ? (
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2}
                  delay={i * 0.2}
                  decimals={metric.decimals || 0}
                  separator=","
                />
              ) : '0'}
            </span>
            {metric.suffix && (
              <span className="text-xl font-semibold text-[#0ea5e9]">{metric.suffix}</span>
            )}
          </div>
          <span className="text-xs tracking-widest uppercase text-slate-500">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TrustBar
