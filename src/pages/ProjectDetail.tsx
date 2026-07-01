import { Link, Navigate, useParams } from "react-router"
import { getProjectBySlug } from "../data/projects"

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-6xl pb-24">
        <Link
          to="/#projects"
          className="inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Problem
            </p>
            <p className="mt-4 leading-7 text-slate-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Solution
            </p>
            <p className="mt-4 leading-7 text-slate-300">{project.solution}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Impact
            </p>
            <p className="mt-4 leading-7 text-slate-300">{project.impact}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold text-white">
              Technical Responsibilities
            </h2>

            <ul className="mt-6 space-y-4">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold text-white">
              Architecture Overview
            </h2>

            <div className="mt-6 grid gap-3">
              {project.architecture.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900 p-4"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                    {index + 1}
                  </span>

                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold text-white">What I Learned</h2>

            <ul className="mt-6 space-y-4">
              {project.lessons.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail