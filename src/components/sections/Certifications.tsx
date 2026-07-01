import { certifications } from "../../data/certifications"
import SectionTitle from "../ui/SectionTitle"

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Certifications"
          title="Continuous learning and technical growth"
          description="These certifications support my professional development across data, programming, cloud, automation, and AI-related technologies."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {certification.category}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {certification.name}
              </h3>

              <div className="mt-5 space-y-2 text-slate-400">
                <p>
                  <span className="font-semibold text-slate-300">Issuer:</span>{" "}
                  {certification.issuer}
                </p>

                <p>
                  <span className="font-semibold text-slate-300">Year:</span>{" "}
                  {certification.year}
                </p>
              </div>

              <a
                href={certification.file}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications