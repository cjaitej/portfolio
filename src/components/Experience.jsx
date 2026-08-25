import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { education, experience, skills } from '../data/site'

/**
 * Experience, Education and Skills — three stacked blocks of hairline rows.
 *
 * The two lists used to run side by side in a CSS subgrid, so that a taller
 * item on the left kept the dividers level with the right. Entries are one
 * line each now, which makes every row the same height on its own and the
 * subgrid (and the --track-rows count feeding it from JS) unnecessary.
 */
function TrackList({ title, items }) {
  return (
    <div>
      <h3 className="label mb-1">{title}</h3>
      <ol className="m-0 list-none p-0">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.role + item.org}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-5 last:border-b-0"
            delay={Math.min(i, 3) * 60}
          >
            <h4 className="text-[0.98rem] font-medium tracking-[-0.02em]">{item.role}</h4>
            <span className="label tabular-nums whitespace-nowrap">{item.period}</span>

            {/* col-span-2 so the blurb runs the full width under both the role
                and the period, rather than being squeezed into the first
                column's share of the row. */}
            <p className="col-span-2 max-w-[58ch] text-[0.83rem] leading-[1.6] text-muted">
              <span className="text-ink-2">{item.org}</span>
              {' — '}
              {item.blurb}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section" id="experience" data-nav-section="experience">
      <div className="shell">
        <SectionHead title="Experience" />

        <div className="grid grid-cols-1 gap-x-[clamp(2rem,6vw,5rem)] gap-y-[clamp(2.5rem,5vw,3.5rem)] min-[860px]:grid-cols-2">
          <TrackList title="Work" items={experience} />
          <TrackList title="Education" items={education} />
        </div>

        {/* Grouped text, not a grid of coloured tiles. Each group is one line
            that wraps; the dot separators keep it readable as a list without
            giving every item a border and a background of its own. */}
        <Reveal className="mt-[clamp(3rem,6vw,4.5rem)] border-t border-line pt-8">
          <dl className="grid grid-cols-1 gap-y-5">
            {skills.map((group) => (
              <div
                key={group.group}
                className="grid grid-cols-1 gap-y-2 min-[640px]:grid-cols-[8rem_minmax(0,1fr)] min-[640px]:gap-x-6"
              >
                <dt className="label pt-[3px]">{group.group}</dt>
                <dd className="m-0 text-[0.875rem] leading-[1.7] text-ink-2">
                  {group.items.join('  ·  ')}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
