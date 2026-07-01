import { skillGroups } from "../../data/skills"
import SectionTitle from "../ui/SectionTitle"

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Technical Skills"
          title="A hybrid profile across data, backend, AI, and frontend"
          description="My skill set is focused on building complete technical solutions: from data extraction and processing to APIs, dashboards, automation, and user-facing interfaces."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
            >
              <h3 className="text-2xl font-bold text-white">
                {group.category}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills