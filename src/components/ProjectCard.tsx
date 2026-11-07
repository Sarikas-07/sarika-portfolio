import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Layers } from "lucide-react";
import type { Project } from "@/lib/types";
import { publicFileExists } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const hasThumb = publicFileExists(project.thumbnail);
  return (
    <article className={cn("card card-hover group relative flex h-full flex-col overflow-hidden", large && "lg:flex-row")}>
      <div className={cn("relative aspect-[4/3] w-full overflow-hidden bg-ink-800", large && "lg:w-2/5 lg:shrink-0")}>
        {hasThumb && project.thumbnail ? (
          <Image src={project.thumbnail} alt={project.thumbnailAlt ?? `Preview image for ${project.title}`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(77,141,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(139,108,255,0.35),transparent_55%)]">
            <Layers size={40} className="text-white/60" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>

        {project.features && project.features.length > 0 && large && (
          <ul className="mt-4 hidden space-y-1.5 text-sm text-fg-muted sm:block">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex gap-2.5"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" aria-hidden />{f}</li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.stack.map((t) => <li key={t} className="chip !px-2.5 !py-0.5 !text-xs">{t}</li>)}
        </ul>

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm">
          <span className="inline-flex items-center gap-1 font-medium text-electric-soft">View details <ArrowUpRight size={15} aria-hidden /></span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg-muted transition hover:text-fg">
              <Github size={15} aria-hidden /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg-muted transition hover:text-fg">
              <ExternalLink size={15} aria-hidden /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
