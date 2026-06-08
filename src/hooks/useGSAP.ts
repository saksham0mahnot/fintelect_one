import { useEffect } from 'react'
import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: {
    y?: number
    opacity?: number
    duration?: number
    delay?: number
    stagger?: number
    trigger?: string
    start?: string
    markers?: boolean
  } = {}
) {
  useEffect(() => {
    if (!ref.current) return

    const {
      y = 40,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      trigger = ref.current as unknown as string,
      start = 'top 85%',
      markers = false,
    } = options

    const elements = ref.current.querySelectorAll('[data-reveal]')
    const targets = elements.length > 0 ? elements : [ref.current]

    gsap.fromTo(
      targets,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger,
          start,
          markers,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed: number = 0.3
) {
  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [speed])
}
