import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { publicFileExists } from "@/lib/assets";
import { ButtonLink } from "@/components/ButtonLink";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasThumb = publicFileExists(project.thumbnail);
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="container-page max-w-4xl pb-24 pt-28 sm:pt-36">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-fg-muted transition hover:text-fg">
        <ArrowLeft size={16} aria-hidden /> All projects
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && <ButtonLink href={project.github} variant="primary" icon={<Github size={16} aria-hidden />}>View on GitHub</ButtonLink>}
          {project.demo && <ButtonLink href={project.demo} variant="ghost" icon={<ExternalLink size={16} aria-hidden />}>Live demo</ButtonLink>}
        </div>
      )}

      {hasThumb && project.thumbnail && (
        <div className="card relative mt-10 aspect-[4/3] max-w-2xl overflow-hidden">
          <Image src={project.thumbnail} alt={project.thumbnailAlt ?? `Preview image for ${project.title}`} fill sizes="(min-width:768px) 672px, 100vw" className="object-cover" />
        </div>
      )}

      <div className="mt-12 grid gap-6">
        {project.problem && (
          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">The problem</h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.problem}</p>
          </section>
        )}
        {project.features && project.features.length > 0 && (
          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">Key features</h2>
            <ul className="mt-4 space-y-3 text-fg-muted">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden />{f}</li>
              ))}
            </ul>
          </section>
        )}
        {project.contribution && (
          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">My contribution</h2>
            <p className="mt-3 leading-relaxed text-fg-muted">{project.contribution}</p>
          </section>
        )}
        {project.details?.map((d) => (
          <section key={d.title} className="card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">{d.title}</h2>
            <ul className="mt-4 space-y-3 text-fg-muted">
              {d.points.map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iris" aria-hidden />{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <nav aria-label="Next project" className="mt-14 border-t border-white/10 pt-8">
        <Link href={`/projects/${next.slug}`} className="group block">
          <span className="text-sm text-fg-dim">Next project</span>
          <span className="mt-1 block font-display text-2xl font-semibold transition group-hover:text-electric-soft">{next.title}</span>
        </Link>
      </nav>
    </main>
  );
}
