import type { Project } from "../../data/projects"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <span className="w-fit rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
          Case Study
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-bold text-white">Problem</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {project.problem}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-bold text-white">Solution</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {project.solution}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-bold text-white">Impact</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard