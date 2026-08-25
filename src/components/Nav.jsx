import { useEffect, useState } from 'react'
import Icon from './Icon'
import SectionLink from './SectionLink'
import { navLinks, profile } from '../data/site'

/**
 * Sticky top bar: wordmark, section links, theme toggle.
 *
 * Replaces the old fixed 168px left rail. The rail numbered its own items
 * ("01 Home, 02 Work") and cost the page a permanent column of chrome; a thin
 * bar gives the content the full width back and lets the centred column be
 * genuinely centred rather than offset by a rail.
 *
 * The bottom hairline is absent at the top of the page and fades in once the
 * page scrolls, so the bar reads as part of the hero until there is actually
 * content passing underneath it.
 */
export default function Nav({ activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)

      // Guarded because the divisor is zero on a page shorter than the
      // viewport, which would put the bar at NaN and blank it out entirely.
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // The drawer covers the page, so the page behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] backdrop-blur-[10px] backdrop-saturate-150 transition-[border-color] duration-500 ease-brand ${
          scrolled ? 'border-b border-line' : 'border-b border-transparent'
        }`}
      >
      <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
        <SectionLink
          id="home"
          className="text-[0.95rem] font-medium tracking-[-0.02em] whitespace-nowrap"
          aria-label={`${profile.name} — top of page`}
        >
          {profile.wordmark}
        </SectionLink>

        <div className="flex items-center gap-1">
          <nav
            className="flex items-center gap-7 max-[720px]:hidden"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = link.section === activeSection
              return (
                <SectionLink
                  key={link.label}
                  id={link.section}
                  // underline-grow is skipped while active: the active item
                  // already carries a persistent underline below, and running
                  // both would animate a line that is meant to be static.
                  className={`text-[0.83rem] transition-colors duration-300 ease-brand ${
                    active
                      ? 'border-b border-ink pb-[2px] text-ink'
                      : 'underline-grow pb-[2px] text-muted hover:text-ink'
                  }`}
                  aria-current={active ? 'true' : undefined}
                >
                  {link.label}
                </SectionLink>
              )
            })}
          </nav>

          <button
            type="button"
            className="ml-4 grid h-9 w-9 place-items-center text-muted transition-colors duration-300 ease-brand hover:text-ink max-[720px]:ml-0"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>

          <button
            type="button"
            className="hidden text-ink max-[720px]:grid max-[720px]:h-9 max-[720px]:w-9 max-[720px]:place-items-center"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
        </div>

        {/* Reading progress, drawn on top of the bar's own bottom hairline.
            No transition: this is driven directly by scroll position, and
            easing it would make the bar lag behind the page it is reporting
            on. Hidden from assistive tech - it duplicates information the
            scrollbar already conveys. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-ink"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Mobile drawer. Full-height and opaque rather than a slide-down panel:
          with only four links there is no reason to make it feel like a
          submenu hanging off the bar.

          A sibling of <header>, not a child of it. The header sets
          backdrop-filter, and a backdrop-filter establishes a containing block
          for fixed-position descendants - nested inside, this panel would
          resolve inset-0 against the 4.5rem-tall bar instead of the viewport
          and collapse to nothing. */}
      {open && (
        <nav
          className="fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 hidden bg-bg max-[720px]:block"
          aria-label="Primary"
        >
          <div className="shell flex flex-col pt-4">
            {navLinks.map((link) => (
              <SectionLink
                key={link.label}
                id={link.section}
                className="border-b border-line py-5 text-[1.4rem] tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </SectionLink>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}
