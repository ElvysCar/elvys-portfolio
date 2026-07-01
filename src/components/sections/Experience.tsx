import { experiences } from "../../data/experience"
import SectionTitle from "../ui/SectionTitle"

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Experience"
          title="A career path built around data, automation, and AI"
          description="My professional growth has moved from analytics and reporting into data engineering, backend automation, cloud services, and AI-powered systems."
        />

        <div className="mt-16 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.35fr_1fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {experience.type}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 text-slate-400">{experience.duration}</p>
              </div>

              <div>
                <p className="leading-7 text-slate-300">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 leading-7 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience