import { profile } from "../../data/profile"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            Systems Engineer, Data Engineer & AI Developer
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {currentYear} {profile.name}. Built with React, Vite, and Tailwind
          CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer