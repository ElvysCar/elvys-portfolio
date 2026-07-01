import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"
import SectionTitle from "../ui/SectionTitle"

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Projects"
          title="Professional case studies based on real technical experience"
          description="These projects highlight my experience building data pipelines, automation processes, API integrations, and AI-ready backend systems while protecting private business information."
        />

        <div className="mt-16 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects