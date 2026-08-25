import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import ResearchSection from '../components/ResearchSection'
import SelectedWork from '../components/SelectedWork'

export default function Home() {
  return (
    <>
      {/* Hero carries the bio too - see the note in Hero.jsx. */}
      <Hero />
      <SelectedWork />
      <ResearchSection />
      <Experience />
      <Contact />
    </>
  )
}
