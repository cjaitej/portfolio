/**
 * The green "available" indicator, glowing.
 *
 * A component rather than a repeated span: it appears in both the hero and the
 * contact block, and a status light that is one green in one place and another
 * green elsewhere is worse than no status light. Styling lives in the
 * `.status-dot` class (see index.css) because it is animated and theme-aware.
 *
 * aria-hidden: the dot is decoration for the label beside it, which already
 * says "Available for opportunities" in text.
 */
export default function StatusDot({ className = '' }) {
  return <span aria-hidden="true" className={`status-dot ${className}`.trim()} />
}
