import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import useTheme from './hooks/useTheme'
import Home from './pages/Home'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  // Highlight the nav item for whichever section is crossing the viewport.
  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-section]')
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.navSection)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Focuses main without touching the hash. */}
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          const main = document.getElementById('main')
          main?.focus()
          main?.scrollIntoView()
        }}
      >
        Skip to content
      </a>

      <Nav activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main" tabIndex={-1}>
        <Home />
      </main>
      <Footer />
    </>
  )
}
