import CountUp from './CountUp'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { projects } from '../data/site'

/**
 * Projects as a numbered index, led by one featured entry.
 *
 * Every project used to be a bordered, shadowed card topped with a generated
 * SVG illustration. The illustrations are gone (they were the single most
 * dated thing on the site) and with no image to hold, a card is just a box
 * around a paragraph - so the box went too. What is left is a row per project:
 * index, name, one line, stack, period.
 *
 * The flagship gets a block of its own above that list. Pinning it to the top
 * of the index made it first but not different - at one line and one type size
 * it read exactly like the six below it. Here it gets the lead sentence and
 * the figures a single row has no room for, in the same shape the Research
 * section uses, so "featured" is carried by the layout rather than a badge.
 */

/* Shared by both treatments: an ink hairline that draws along the element's
   bottom rule on hover. A surface fill was the first attempt and it is only
   8/255 from the page background - real on a colour picker, invisible to a
   reader. Drawing a line also matches the motion language already in use:
   section rules draw, link underlines grow, so a project underlines itself. */
const HOVER_RULE =
  "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 after:ease-brand after:content-[''] hover:after:scale-x-100"

function FeaturedProject({ project, index }) {
  return (
    <a
      className={`group relative block border-b border-line pt-1 pb-[clamp(2rem,3.5vw,2.75rem)] ${HOVER_RULE}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="label tabular-nums">
          {String(index + 1).padStart(2, '0')} — Featured
        </span>
        <span className="label tabular-nums whitespace-nowrap">{project.period}</span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <h3 className="text-[clamp(1.75rem,4vw,2.85rem)] leading-[1.05] tracking-[-0.04em]">
          {project.title}
        </h3>
        <Icon
          name="arrow-up-right"
          size={22}
          className="flex-none translate-y-[2px] text-faint transition-[transform,color] duration-400 ease-brand group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-ink"
        />
      </div>

      <p className="mt-5 max-w-[58ch] text-[0.95rem] leading-[1.7] text-ink-2">{project.lead}</p>

      {/* Same figure treatment as the Research section, so the two "this is
          the important one" blocks on the page read as one pattern. */}
      <dl className="mt-[clamp(2rem,3.5vw,2.75rem)] grid grid-cols-1 border-t border-line min-[760px]:grid-cols-3">
        {project.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-line py-5 pr-6 min-[760px]:border-b-0 min-[760px]:border-r min-[760px]:last:border-r-0 min-[760px]:not-first:pl-6"
          >
            <dt className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium tracking-[-0.045em] tabular-nums">
              <CountUp value={stat.value} />
            </dt>
            <dd className="m-0 mt-2 max-w-[24ch] text-[0.78rem] leading-[1.5] text-muted">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-[0.75rem] tracking-[0.02em] text-faint">
        {project.tags.join('  ·  ')}
      </p>
    </a>
  )
}

function ProjectRow({ project, index }) {
  return (
    <a
      className={`group relative grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline gap-x-[clamp(0.75rem,2.5vw,2rem)] border-b border-line py-6 max-[640px]:grid-cols-[1.5rem_minmax(0,1fr)] ${HOVER_RULE}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="label tabular-nums transition-colors duration-400 ease-brand group-hover:text-ink">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* div/h3/p rather than nested spans: <a> takes flow content, but a
          <span> may only contain phrasing content, so an <h3> inside one is
          invalid nesting that browsers merely tolerate. */}
      <div className="min-w-0 transition-transform duration-500 ease-brand group-hover:translate-x-1.25">
        <div className="flex items-center gap-2">
          <h3 className="text-[clamp(1.1rem,1.9vw,1.45rem)] tracking-[-0.035em]">
            {project.title}
          </h3>
          <Icon
            name="arrow-up-right"
            size={15}
            className="flex-none translate-y-px text-faint transition-[transform,color] duration-400 ease-brand group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-ink"
          />
        </div>

        <p className="mt-[0.6rem] max-w-[62ch] text-[0.875rem] leading-[1.65] text-muted">
          {project.blurb}
        </p>

        <p className="mt-[0.7rem] text-[0.75rem] tracking-[0.02em] text-faint">
          {project.tags.join('  ·  ')}
        </p>
      </div>

      {/* whitespace-nowrap so a "Jun 2026 — Aug 2026" range keeps to one line
          and the auto-sized column stays a predictable width down the list. */}
      <span className="label tabular-nums whitespace-nowrap max-[640px]:hidden">
        {project.period}
      </span>
    </a>
  )
}

export default function SelectedWork() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="work" data-nav-section="work">
      <div className="shell">
        <SectionHead title="Selected Work" count={projects.length} />

        {featured && (
          <Reveal className="mb-[clamp(2.5rem,4.5vw,3.5rem)]">
            <FeaturedProject project={featured} index={projects.indexOf(featured)} />
          </Reveal>
        )}

        {/* border-t on the list, border-b on each row: that way the first row
            gets a rule above it without every row needing both and doubling up
            between neighbours. Indices come from the full projects array, not
            this filtered one, so the numbering continues past the featured
            entry rather than restarting at 01. */}
        <div className="border-t border-line">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 4) * 60}>
              <ProjectRow project={project} index={projects.indexOf(project)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
