import { goToSection } from '../utils/nav'

/** Anchor that smooth-scrolls to a section of the home page. */
export default function SectionLink({ id, children, onClick, ...rest }) {
  const handleClick = (event) => {
    event.preventDefault()
    onClick?.(event)
    goToSection(id)
  }

  return (
    <a href={`#${id}`} {...rest} onClick={handleClick}>
      {children}
    </a>
  )
}
