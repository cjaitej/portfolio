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

/* A project with a `demo` gets two links, but a row is only ever one <a> deep
   - browsers un-nest anchors, so a link inside a link silently breaks. The fix
   is the "stretched link" pattern: the row becomes a plain (group) box, an
   invisible anchor covers it edge to edge as the primary link (the repo -
   clicking anywhere on the row goes there, same as before `demo` existed),
   and the real, visible "Live Demo" link sits in a later, stacked-above layer
   so it still intercepts its own clicks instead of the overlay eating them.

   z-1 rather than z-0: the row's title and blurb/tags each slide on hover
   (`group-hover:translate-x-1.25`), and any non-zero `transform` promotes an
   element into its own stacking context - at z-0 those blocks would tie with
   this overlay and win on DOM order the moment you actually hover them, which
   is exactly when a click needs to land. A positive z-index puts the overlay
   in the tier above z-0/auto contexts unconditionally, so hovering the row
   can never steal the click. DemoLink (`z-10`, see below) sits as a sibling
   of those sliding blocks rather than inside either one, for the same reason
   - a positioned descendant only outranks the elements it shares a stacking
   context with, so nested inside a block that itself becomes a context on
   hover, its z-index would only win locally and the whole block would still
   rank by that block's own (z-0/auto) level from the row's point of view.

   `isolate` on the row/card itself (below) is the belt to this braces: it
   pins the row as its own permanent stacking context so this internal
   ordering is decided entirely among the row's own children, never perturbed
   by an ancestor - such as the one-time Reveal fade-and-slide-in each row
   plays on first scroll into view, which for its ~0.8s duration is itself a
   transform and therefore a stacking context too. */
function StretchedLink({ href }) {
  return (
    <a
      className="absolute inset-0 z-1"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

/* Sized and tracked like the period beside it, in --muted rather than
   --faint: that grey is for de-emphasis, and this is a link that needs to be
   found, not hidden.

   `slide` re-adds the row's hover motion that DemoLink otherwise sits outside
   of (see the note above StretchedLink) - it's a class on DemoLink itself
   rather than a shared wrapper, so it rides along visually without going back
   to being a descendant of one. Only ProjectRow asks for it: its title and
   blurb both slide, so a still Live Demo stood out as the one thing in the
   row not moving. FeaturedProject's meta row doesn't slide anything else, so
   Live Demo there stays still to match its own neighbours. */
function DemoLink({ href, slide = false }) {
  return (
    <a
      className={`underline-grow relative z-10 whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted hover:text-ink ${
        slide
          ? 'transition-[transform,color] duration-500 ease-brand group-hover:translate-x-1.25'
          : 'transition-colors duration-300 ease-brand'
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>
  )
}

function FeaturedProject({ project, index }) {
  return (
    <div
      className={`group relative isolate block border-b border-line pt-1 pb-[clamp(2rem,3.5vw,2.75rem)] ${HOVER_RULE}`}
    >
      <StretchedLink href={project.href} />

      <div className="flex items-baseline justify-between gap-4">
        <span className="label tabular-nums">
          {String(index + 1).padStart(2, '0')} — Featured
        </span>
        <div className="flex items-baseline gap-4">
          {project.demo && <DemoLink href={project.demo} />}
          <span className="label tabular-nums whitespace-nowrap">{project.period}</span>
        </div>
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
    </div>
  )
}

function ProjectRow({ project, index }) {
  return (
    <div
      className={`group relative isolate grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline gap-x-[clamp(0.75rem,2.5vw,2rem)] border-b border-line py-6 max-[640px]:grid-cols-[1.5rem_minmax(0,1fr)] ${HOVER_RULE}`}
    >
      <StretchedLink href={project.href} />

      <span className="label tabular-nums transition-colors duration-400 ease-brand group-hover:text-ink">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* div/h3/p rather than nested spans: <a> takes flow content, but a
          <span> may only contain phrasing content, so an <h3> inside one is
          invalid nesting that browsers merely tolerate.

          The slide-on-hover transform lives on two inner wrappers now, not on
          this outer one - `transform` promotes whatever it's on into its own
          stacking context, and DemoLink needs to sit outside that (a sibling,
          not a descendant) or its z-index only ever wins locally, inside a
          box that itself paints below the row's overlay link. Splitting the
          transform in two keeps the title and the blurb/tags each sliding as
          before, with DemoLink between them, untouched by either. */}
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 transition-transform duration-500 ease-brand group-hover:translate-x-1.25">
            <h3 className="text-[clamp(1.1rem,1.9vw,1.45rem)] tracking-[-0.035em]">
              {project.title}
            </h3>
            <Icon
              name="arrow-up-right"
              size={15}
              className="flex-none translate-y-px text-faint transition-[transform,color] duration-400 ease-brand group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-ink"
            />
          </div>
          {project.demo && <DemoLink href={project.demo} slide />}
        </div>

        <div className="transition-transform duration-500 ease-brand group-hover:translate-x-1.25">
          <p className="mt-[0.6rem] max-w-[62ch] text-[0.875rem] leading-[1.65] text-muted">
            {project.blurb}
          </p>

          <p className="mt-[0.7rem] text-[0.75rem] tracking-[0.02em] text-faint">
            {project.tags.join('  ·  ')}
          </p>
        </div>
      </div>

      {/* whitespace-nowrap so a "Jun 2026 — Aug 2026" range keeps to one line
          and the auto-sized column stays a predictable width down the list. */}
      <span className="label tabular-nums whitespace-nowrap max-[640px]:hidden">
        {project.period}
      </span>
    </div>
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
