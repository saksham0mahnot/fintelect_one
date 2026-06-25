import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function useLenis() {
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (lenisInstance) return

    lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    if (typeof window !== 'undefined') {
      (window as any).__lenisInstance = lenisInstance
    }

    function raf(time: number) {
      lenisInstance?.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenisInstance?.destroy()
      if (typeof window !== 'undefined') {
        delete (window as any).__lenisInstance
      }
      lenisInstance = null
    }
  }, [])

  return lenisInstance
}

export function getLenis() {
  if (typeof window !== 'undefined') {
    return lenisInstance || (window as any).__lenisInstance || null
  }
  return lenisInstance
}
