import { profile } from "../../data/profile"
import SectionTitle from "../ui/SectionTitle"

function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="About Me"
          title="Engineering solutions with data, automation, and AI"
          description="My professional background combines technical execution, analytical thinking, and business-oriented problem solving."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-2xl font-bold text-white">
              {profile.about.headline}
            </h3>

            <div className="mt-6 space-y-5">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>

                <p className="mt-3 text-xl font-bold text-cyan-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About