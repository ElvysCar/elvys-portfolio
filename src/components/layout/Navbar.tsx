import { useState } from "react"
import { profile } from "../../data/profile"

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-bold text-white transition hover:text-cyan-400"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
        >
          <span className="sr-only">Open menu</span>

          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              onClick={closeMenu}
              className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar