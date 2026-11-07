import { Award, BookOpenText, ExternalLink, FileText, Scale, Trophy, type LucideIcon } from "lucide-react";
import { achievements } from "@/data/achievements";
import { publicFileExists } from "@/lib/assets";
import type { AchievementType } from "@/lib/types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const meta: Record<AchievementType, { label: string; Icon: LucideIcon }> = {
  publication: { label: "Publication", Icon: BookOpenText },
  research: { label: "Research", Icon: BookOpenText },
  copyright: { label: "Copyright registration", Icon: Scale },
  award: { label: "Award", Icon: Award },
  competition: { label: "Competition", Icon: Trophy },
  other: { label: "Achievement", Icon: Award },
};

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeading id="achievements" title="Achievements & publications" description="Published research and registered intellectual property." />
        <div className="grid gap-5 lg:grid-cols-2">
          {achievements.map((a, i) => {
            const { label, Icon } = meta[a.type];
            const hasFile = publicFileExists(a.file);
            return (
              <Reveal key={a.id} delay={(i % 2) * 0.06}>
                <article className="card card-hover h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-sm text-iris-soft">
                    <Icon size={18} aria-hidden /> <span>{label}</span>
                    {a.date && <span className="ml-auto text-fg-dim">{a.date}</span>}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{a.title}</h3>
                  {a.organization && <p className="mt-2 text-sm text-electric-soft">{a.organization}</p>}
                  {a.description && <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{a.description}</p>}
                  {a.details && a.details.length > 0 && (
                    <dl className="mt-4 grid gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-sm sm:grid-cols-[auto_1fr]">
                      {a.details.map((d) => (
                        <div key={d.label} className="contents">
                          <dt className="text-fg-dim">{d.label}</dt>
                          <dd className="text-fg-muted">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {(hasFile || a.link) && (
                    <div className="mt-5 flex flex-wrap gap-4 text-sm">
                      {hasFile && a.file && <a href={a.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-electric-soft hover:underline underline-offset-4"><FileText size={15} aria-hidden /> {a.fileLabel ?? "View proof"}</a>}
                      {a.link && <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg"><ExternalLink size={15} aria-hidden /> Open link</a>}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
