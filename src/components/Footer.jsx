import SectionLink from './SectionLink'
import { profile } from '../data/site'

/**
 * A single hairline-topped row. The old footer was a dark slab stacked
 * directly under an equally dark contact block, which read as one large
 * unexplained black area at the foot of the page; on the same paper as
 * everything above it, it just ends the page.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="shell">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line py-8">
        <SectionLink
          id="home"
          className="underline-grow text-[0.83rem] text-muted transition-colors duration-300 ease-brand hover:text-ink"
          aria-label={`${profile.name} — back to top`}
        >
          Back to top
        </SectionLink>

        <p className="text-[0.8rem] text-faint">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
