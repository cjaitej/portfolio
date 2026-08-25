/**
 * Scrolls to a section. The whole site is one page, so these links move the
 * viewport rather than navigating — and they leave the hash alone.
 */
export function goToSection(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
