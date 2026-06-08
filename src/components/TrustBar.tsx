import ReactCountUp from 'react-countup'
const CountUp = (ReactCountUp as any).default || ReactCountUp
import { useInView } from 'react-intersection-observer'

interface Metric {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

interface TrustBarProps {
  metrics: Metric[]
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
            borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}
        >
          <div className="flex items-baseline gap-1 mb-1">
            {metric.prefix && (
              <span className="text-xl font-semibold text-white">{metric.prefix}</span>
            )}
            <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              {inView ? (
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
              <span className="text-xl font-semibold text-[#38BDF8]">{metric.suffix}</span>
            )}
          </div>
          <span className="text-xs tracking-widest uppercase text-[#94A3B8]">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TrustBar
