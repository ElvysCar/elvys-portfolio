import { profile } from "../../data/profile"
import Button from "../ui/Button"
import SectionTitle from "../ui/SectionTitle"

function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: "Best option for direct professional contact.",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.linkedin,
      description: "View my professional background and career updates.",
      external: true,
    },
    {
      label: "GitHub",
      value: "View my repositories",
      href: profile.github,
      description: "Explore my code, learning projects, and technical work.",
      external: true,
    },
  ]

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Contact"
          title="Let’s build something valuable"
          description="I am open to opportunities where I can contribute as a Data Engineer, AI Developer, or automation-focused technical professional."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Career Focus
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Data Engineering, AI, and automation-driven solutions
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              My main professional goal is to grow as a Data Engineer while
              continuing to expand into AI, cloud services, and data science. I
              enjoy building solutions that connect data pipelines, backend
              logic, APIs, automation, and business intelligence.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              If your team needs someone who can understand business problems,
              work with data, automate processes, and learn fast, I would be
              happy to connect.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={`mailto:${profile.email}`}>Send Email</Button>

              <Button href={profile.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {link.label}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-white">
                      {link.value}
                    </h3>
                  </div>

                  <span className="text-2xl text-slate-500 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact