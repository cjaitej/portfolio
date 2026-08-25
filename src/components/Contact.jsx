import Icon from './Icon'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import StatusDot from './StatusDot'
import { profile } from '../data/site'

/**
 * A statement, the address, and the links.
 *
 * The contact form is gone. It had four fields and a submit button, but no
 * backend: submitting assembled a `mailto:` URL from the values and clicked a
 * synthetic anchor, handing off to the visitor's mail client. A plain mailto
 * link does exactly that, minus the validation, the error states, the "sent"
 * status line and the dark panel they all sat in - so nothing that actually
 * happened when you pressed Send has been lost here.
 */
export default function Contact() {
  return (
    <section className="section" id="contact" data-nav-section="contact">
      <div className="shell">
        <SectionHead title="Contact" />

        <Reveal>
          <h3 className="max-w-[16ch] text-[clamp(1.9rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.045em]">
            Have something worth building?
          </h3>

          {/* The address is the call to action, so it is set as one - large,
              in ink, with the underline growing on hover like every other link
              on the site. break-all guards against a long address forcing the
              page into a horizontal scroll on a narrow phone. */}
          <a
            className="underline-grow mt-[clamp(2rem,4vw,3rem)] inline-block pb-1 text-[clamp(1.05rem,2.6vw,1.75rem)] tracking-[-0.03em] break-all"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-[clamp(3rem,6vw,4.5rem)] flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-line pt-7">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    className="inline-flex items-center gap-2 text-[0.85rem] text-muted transition-colors duration-300 ease-brand hover:text-ink"
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <Icon name={s.icon} size={15} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            {profile.available && (
              <p className="flex items-center gap-[0.6rem] text-[0.85rem] text-muted">
                <StatusDot />
                Available for opportunities
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
