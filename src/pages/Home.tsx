import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Resume from "../components/sections/Resume"
import Certifications from "../components/sections/Certifications"
import Contact from "../components/sections/Contact"
import Reveal from "../components/ui/Reveal"

function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Resume />
      </Reveal>

      <Reveal>
        <Certifications />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  )
}

export default Home