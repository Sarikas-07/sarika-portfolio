import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-page">
        <SectionHeading id="education" title="Education" />
        <ol className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <li key={e.id}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="card card-hover h-full p-6 sm:p-7">
                  <GraduationCap className="text-electric-soft" size={22} aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{e.degree}</h3>
                  {e.institution && <p className="mt-2 text-fg-muted">{e.institution}</p>}
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-fg-dim">
                    {(e.start || e.end) && <span>{[e.start, e.end].filter(Boolean).join(" – ")}</span>}
                    {e.grade && <span className="font-medium text-iris-soft">{e.grade}</span>}
                  </p>
                  {e.notes && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg-muted">{e.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
