import Icon from './Icon'
import SectionLink from './SectionLink'
import StatusDot from './StatusDot'
import { hero, profile } from '../data/site'

/**
 * The whole introduction, in one screen: role, headline, two sentences, two
 * links, and a strip of facts.
 *
 * There is no separate About section any more. The old one carried an intro
 * paragraph plus three labelled "chapters" of prose below the fold, which
 * restated the hero and the experience list at length. What survives is the
 * lead sentence here and the facts strip - the parts that said something the
 * rest of the page does not.
 *
 * Motion here is on load rather than on scroll: this is the first thing on
 * screen, so a scroll observer would have nothing to wait for. The sequence
 * runs eyebrow -> headline lines -> lead -> links -> facts, each entry offset
 * from the last, so the page assembles in reading order.
 */

/* One place to keep the running order, so adjusting the pace is a matter of
   changing numbers here rather than hunting delays through the JSX. */
const T = {
  eyebrow: 80,
  title: 200,
  titleStep: 95,
  lead: 620,
  links: 720,
  now: 560,
  facts: 820,
  factStep: 70,
}

export default function Hero() {
  return (
    <section
      className="shell pt-[clamp(2.5rem,8vw,5.5rem)] pb-[clamp(2rem,4vw,3rem)]"
      id="home"
      data-nav-section="home"
      aria-labelledby="hero-title"
    >
      <p className="label enter mb-[clamp(2rem,5vw,3.5rem)]" style={{ animationDelay: `${T.eyebrow}ms` }}>
        {profile.role} — {profile.location}
      </p>

      {/* Two columns for the whole hero, rather than a full-width headline
          with everything tucked under it. The headline's own line lengths
          left a large void to its right on any wide screen and a matching one
          under it on the left; giving the row a second column puts the
          standing information in the first void and the lead in the second,
          so the block is full at every width instead of at one. */}
      <div className="grid grid-cols-[minmax(0,1fr)] gap-x-[clamp(2rem,5vw,4.5rem)] gap-y-[clamp(2.5rem,5vw,3.5rem)] min-[900px]:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <div>
          {/* The one piece of type on the site allowed to be large. Set at 500
              weight: at this size a bold grotesk reads as a shout, and the
              size is already carrying the emphasis. leading under 1 knits the
              three lines into a single block rather than a stack.

              Each line sits in its own clipping box and rises out of it, which
              is why the lines are authored as separate strings in site.js
              rather than left to wrap: a masked reveal needs to know where the
              breaks are. */}
          <h1
            id="hero-title"
            className="text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[0.97] tracking-[-0.045em]"
          >
            {hero.title.map((line, i) => (
              <span className="rise-mask" key={line}>
                <span style={{ animationDelay: `${T.title + i * T.titleStep}ms` }}>{line}</span>
              </span>
            ))}
          </h1>

          <p
            className="enter mt-[clamp(2rem,3.5vw,2.75rem)] max-w-[52ch] text-[clamp(0.95rem,1.15vw,1.05rem)] leading-[1.7] text-ink-2"
            style={{ animationDelay: `${T.lead}ms` }}
          >
            {hero.lead}
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-x-8 gap-y-3"
            style={{ animationDelay: `${T.links}ms` }}
          >
            <SectionLink
              id="work"
              className="underline-grow group inline-flex items-center gap-2 pb-0.75 text-[0.9rem] text-ink"
            >
              Selected work
              <Icon
                name="arrow-up-right"
                size={14}
                className="transition-transform duration-400 ease-brand group-hover:translate-x-px group-hover:-translate-y-px"
              />
            </SectionLink>

            <a
              className="underline-grow group inline-flex items-center gap-2 pb-0.75 text-[0.9rem] text-muted transition-colors duration-300 ease-brand hover:text-ink"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              {/* arrow-up-right, not arrow-down: this opens the resume in
                  Drive in a new tab, and a download glyph would promise a file
                  that never arrives. */}
              <Icon
                name="arrow-up-right"
                size={14}
                className="transition-transform duration-400 ease-brand group-hover:translate-x-px group-hover:-translate-y-px"
              />
            </a>
          </div>
        </div>

        {/* The standing column. justify-between rather than a plain stack, so
            the block reaches the full height of the headline beside it instead
            of sitting in a short clump at the top of a tall cell. The left
            hairline is what ties it to the headline as a second column - the
            same device the facts strip below uses between its cells. */}
        <div
          className="enter flex flex-col justify-between gap-8 min-[900px]:border-l min-[900px]:border-line min-[900px]:pl-[clamp(1.5rem,2.5vw,2.5rem)]"
          style={{ animationDelay: `${T.now}ms` }}
        >
          {/* Divided by a hairline rather than spaced apart, so the two read
              as one list of positions instead of two loose blocks. */}
          <div className="flex flex-col gap-6">
            {hero.roles.map((item) => (
              <div key={item.label} className="not-first:border-t not-first:border-line not-first:pt-6">
                <h2 className="label">{item.label}</h2>
                <p className="mt-3 text-[0.95rem] leading-[1.45] tracking-[-0.02em]">
                  {item.role}
                </p>
                <p className="mt-1 text-[0.85rem] text-ink-2">{item.org}</p>
                <p className="mt-2.5 max-w-[34ch] text-[0.8rem] leading-[1.6] text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div>
            {profile.available && (
              <p className="flex items-center gap-[0.6rem] text-[0.85rem] text-ink-2">
                <StatusDot />
                Available for opportunities
              </p>
            )}

            <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    className="underline-grow pb-0.5 text-[0.82rem] text-muted transition-colors duration-300 ease-brand hover:text-ink"
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Four facts on one hairline-separated row. This replaces both the
          bordered "About" card and the row of icon chips that used to sit
          beside the headline. */}
      <dl className="mt-[clamp(3.5rem,8vw,6rem)] grid grid-cols-2 border-t border-line min-[900px]:grid-cols-4">
        {hero.facts.map((fact, i) => (
          <div
            key={fact.label}
            // border-r on all but the last, so the columns are divided without
            // a trailing rule hanging off the right edge of the row.
            className="enter border-b border-line py-5 pr-6 min-[900px]:border-b-0 min-[900px]:border-r min-[900px]:last:border-r-0 min-[900px]:not-first:pl-6"
            style={{ animationDelay: `${T.facts + i * T.factStep}ms` }}
          >
            <dt className="label">{fact.label}</dt>
            <dd className="m-0 mt-2 text-[0.85rem] leading-[1.5] text-ink-2">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
