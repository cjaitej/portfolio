import CountUp from './CountUp'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { research } from '../data/site'

/**
 * The thesis, as one block: title, provenance, a sentence, three figures.
 *
 * Previously this was a single card in a three-column grid, which needed a
 * `has-[.paper:only-child]` rule to stop one card stretching across a row
 * built for three, plus a "Read Paper" disclosure toggle and a "view all"
 * control that revealed nothing. With one entry and no expandable prose, none
 * of that machinery is needed - the entry is just laid out at the size it
 * actually is.
 */
export default function ResearchSection() {
  return (
    <section className="section" id="research" data-nav-section="research">
      <div className="shell">
        <SectionHead title="Research" />

        <Reveal>
          <p className="label mb-5">{research.meta}</p>

          <h3 className="max-w-[20ch] text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.08] tracking-[-0.04em]">
            {research.title}
          </h3>

          <p className="mt-7 max-w-[58ch] text-[0.95rem] leading-[1.7] text-ink-2">
            {research.blurb}
          </p>
        </Reveal>

        {/* The numbers are the result, so they are set at display size and
            given the whole width. Each label carries its own comparison
            ("7.7x smaller than...") rather than leaving the figure to be read
            without a baseline. */}
        <Reveal delay={120}>
          <dl className="mt-[clamp(3rem,6vw,4.5rem)] grid grid-cols-1 border-t border-line min-[760px]:grid-cols-3">
            {research.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-line py-6 pr-6 min-[760px]:border-b-0 min-[760px]:border-r min-[760px]:last:border-r-0 min-[760px]:not-first:pl-6"
              >
                {/* tabular-nums matters here: without fixed-width digits the
                    figure visibly reflows on every frame of the count. */}
                <dt className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-[-0.045em] tabular-nums">
                  <CountUp value={stat.value} />
                </dt>
                <dd className="m-0 mt-2 max-w-[26ch] text-[0.8rem] leading-[1.5] text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
