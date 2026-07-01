import { profile } from "../../data/profile"
import Button from "../ui/Button"

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-6 pt-32 text-white">
      <div className="animate-slow-pulse absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="animate-slow-pulse absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-200 md:text-3xl">
            {profile.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {profile.shortIntro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects">View Projects</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-6">
          <div className="rounded-2xl bg-slate-900/90 p-6">
            <p className="text-sm text-slate-400">Current Focus</p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Building AI, data, and automation solutions
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              I focus on building data pipelines, automation workflows, API
              integrations, and AI-powered systems that help companies transform
              raw information into reliable business decisions.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-400">SQL</p>
                <p className="mt-1 text-sm text-slate-400">Data Engineering</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-400">AI</p>
                <p className="mt-1 text-sm text-slate-400">Automation</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-400">React</p>
                <p className="mt-1 text-sm text-slate-400">Frontend</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-400">Python</p>
                <p className="mt-1 text-sm text-slate-400">Backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero