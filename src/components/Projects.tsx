import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="container-page">
        <SectionHeading id="projects" title="Projects" description="Applications I've built to solve specific problems. Open any project for the problem, features and stack." />
        <div className="grid gap-6">
          {featured.map((p) => <Reveal key={p.slug}><ProjectCard project={p} large /></Reveal>)}
        </div>
        {others.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p, i) => <Reveal key={p.slug} delay={i * 0.06}><ProjectCard project={p} /></Reveal>)}
          </div>
        )}
      </div>
    </section>
  );
}
