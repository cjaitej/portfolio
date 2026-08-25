import { useEffect, useRef, useState } from 'react'

/**
 * Animates its children in the first time they scroll into view.
 * Falls back to visible when IntersectionObserver is unavailable.
 *
 * `motion` picks which resting state to animate out of:
 *   'fade' — opacity + a short lift (the default, used for blocks of content)
 *   'rule' — a horizontal scale from the left, for the hairlines that open
 *            each section
 *
 * The observer disconnects on first intersection, so a reveal happens once per
 * page load rather than replaying every time a section scrolls back past.
 */
export default function Reveal({
  as: Tag = 'div',
  motion = 'fade',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        // A 'rule' starts at scaleX(0), which makes its bounding box zero-area
        // and pins intersectionRatio at 0 - a ratio threshold it can never
        // cross, so it would sit invisible forever. Threshold 0 fires on the
        // isIntersecting edge instead, which zero-area targets still report.
        threshold: motion === 'rule' ? 0 : 0.12,
        rootMargin: '0px 0px -60px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [motion])

  const base = motion === 'rule' ? 'reveal-rule' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
