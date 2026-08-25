/**
 * Every icon on the site, as stroked 24x24 paths.
 * Usage: <Icon name="arrow-up-right" size={16} />
 *
 * Trimmed to what the design actually renders. The previous set carried ~20
 * "skill glyphs" (atom, flame, hexagon, matrix...) for a grid of coloured
 * technology tiles; skills are plain grouped text now, so those are gone.
 */

const paths = {
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  'arrow-down': <path d="M12 4v14M6 13l6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,

  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.2-6-2.6m12 5.2v-3.4c0-1 .1-1.4-.5-2 2.3-.3 4.5-1.2 4.5-5a4 4 0 0 0-1.1-2.7 3.7 3.7 0 0 0-.1-2.8s-.9-.3-3 1.1a10.4 10.4 0 0 0-5.5 0C7.2 5.4 6.3 5.7 6.3 5.7a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 5 11.2c0 3.8 2.2 4.7 4.5 5-.6.6-.6 1.2-.5 2v3.4" />
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </>
  ),
}

export default function Icon({ name, size = 18, className = '', ...rest }) {
  const path = paths[name]
  if (!path) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
