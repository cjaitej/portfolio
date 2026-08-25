import Reveal from './Reveal'

/**
 * The rule-and-label header every section opens with:
 *
 *   ──────────────────────────────────────────────
 *   SELECTED WORK                            (07)
 *
 * The hairline above the label is what separates one section from the next -
 * there are no section numbers in the nav any more for a heading to mirror,
 * and no card edges to do the dividing. `count` is optional; where a section
 * has a countable number of items, showing it is more useful than a subtitle
 * restating what the heading already says.
 */
export default function SectionHead({ title, count }) {
  return (
    <header className="mb-[clamp(2.5rem,5vw,4rem)]">
      {/* The rule draws first, the label follows it in — so the section reads
          as being ruled off and then titled, rather than both arriving at once. */}
      <Reveal as="hr" motion="rule" className="rule mb-4" />
      <Reveal delay={220} className="flex items-baseline justify-between gap-4">
        <h2 className="label">{title}</h2>
        {count != null && (
          <span className="label tabular-nums">{String(count).padStart(2, '0')}</span>
        )}
      </Reveal>
    </header>
  )
}
