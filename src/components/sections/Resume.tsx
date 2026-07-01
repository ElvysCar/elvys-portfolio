import { profile } from "../../data/profile"
import Button from "../ui/Button"
import SectionTitle from "../ui/SectionTitle"

function Resume() {
  return (
    <section id="resume" className="bg-slate-900 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Resume"
          title="A technical profile focused on data engineering, automation, and AI"
          description="My CV summarizes my professional experience across data analysis, data engineering, AI development, backend automation, cloud services, and business intelligence."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Career Direction
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Data Engineer with growing experience in AI and cloud-based
              automation
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              I am currently focused on growing as a Data Engineer while
              expanding toward Data Science and AI Engineering. My professional
              experience combines SQL, Python, ETL processes, automation,
              dashboards, API integrations, AWS Lambda, and LLM-based workflows.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              This portfolio was built to show not only my technical background,
              but also my ability to learn modern frontend technologies and
              present engineering work in a clear, professional way.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={profile.resume}>View CV</Button>

              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            {profile.experience.map((item) => (
              <div
                key={item.role}
                className="rounded-3xl border border-white/10 bg-slate-950 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-cyan-400">{item.duration}</p>
                  </div>

                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-wider text-slate-400">
                    Experience
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-400">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume