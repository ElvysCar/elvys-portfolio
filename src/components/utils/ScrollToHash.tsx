import { useEffect } from "react"
import { useLocation } from "react-router"

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToSection = () => {
      if (hash) {
        const sectionId = hash.replace("#", "")
        const section = document.getElementById(sectionId)

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }

        return
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    const timeoutId = window.setTimeout(scrollToSection, 100)

    return () => window.clearTimeout(timeoutId)
  }, [pathname, hash])

  return null
}

export default ScrollToHash