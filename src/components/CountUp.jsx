import { useEffect, useRef, useState } from 'react'

/**
 * Counts a figure up to its value the first time it scrolls into view.
 *
 * Takes the display string straight from the data ("598K", "3.58m") rather
 * than a number plus a separate unit, so site.js stays readable and there is
 * only one place a figure is written down. The leading number is animated and
 * whatever trails it is passed through untouched.
 *
 * The decimal count is taken from the source string, so "3.58m" counts through
 * two decimal places the whole way up. Deriving it per frame instead would let
 * the width jitter as values like 3.5 and 3.58 alternate.
 */

/* Fast at the start, long tail - the figure is legible almost immediately and
   the motion settles rather than stopping dead. */
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export default function CountUp({ value, duration = 1500, className = '' }) {
  // The digit group accepts thousands separators, so "4,361" counts to 4361
  // rather than stopping at 4 and carrying ",361" along as a suffix.
  const match = /^(\d[\d,]*(?:\.\d+)?)(.*)$/s.exec(value)
  const raw = match ? match[1] : ''
  const target = match ? Number(raw.replace(/,/g, '')) : null
  const suffix = match ? match[2] : ''
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  // Separators are re-applied on the way out only if the source had them, so
  // "4,361" counts up grouped and "598" (or a year) never gains a comma.
  const grouped = raw.includes(',')

  const format = (n) =>
    grouped
      ? n.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : n.toFixed(decimals)

  const ref = useRef(null)
  const [display, setDisplay] = useState(target)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Nothing numeric to animate, or the visitor has asked for less motion:
    // the resting value is already in state, so there is nothing to do.
    if (target == null) return
    if (
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    setDisplay(0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  useEffect(() => {
    if (!started || target == null) return

    let frame
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setDisplay(target * easeOutExpo(t))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, duration])

  if (target == null) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {format(display)}
      {suffix}
    </span>
  )
}
