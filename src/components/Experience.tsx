import { FileText, MapPin } from "lucide-react";
import { publicFileExists } from "@/lib/assets";
import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeading id="experience" title="Experience" />
        <ol className="relative ml-3 space-y-8 border-l border-white/15 pl-8">
          {experience.map((e) => (
            <li key={e.id} className="relative">
              <span aria-hidden className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-2 border-electric bg-ink-950" />
              <Reveal>
                <div className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                      <p className="mt-1 text-electric-soft">{e.link ? <a href={e.link} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{e.company}</a> : e.company}</p>
                    </div>
                    <p className="text-sm text-fg-muted">{e.start}{e.end && ` – ${e.end}`}{e.duration && ` · ${e.duration}`}</p>
                  </div>
                  {e.location && <p className="mt-2 flex items-center gap-1.5 text-sm text-fg-dim"><MapPin size={14} aria-hidden />{e.location}</p>}
                  <ul className="mt-5 space-y-3 text-fg-muted">
                    {e.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden />{r}</li>
                    ))}
                  </ul>
                  {e.certificateFile && publicFileExists(e.certificateFile) && (
                    <p className="mt-5">
                      <a href={e.certificateFile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-electric-soft underline-offset-4 hover:underline">
                        <FileText size={15} aria-hidden /> View Internship Certificate
                      </a>
                    </p>
                  )}
                  {e.technologies && e.technologies.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{e.technologies.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
