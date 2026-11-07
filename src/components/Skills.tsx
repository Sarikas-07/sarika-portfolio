import { BarChart3, Brain, Code2, Database, Globe, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { SkillIcon } from "@/lib/types";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<SkillIcon, LucideIcon> = { code: Code2, brain: Brain, chart: BarChart3, globe: Globe, database: Database, tools: Wrench };

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeading id="skills" title="Skills" description="The languages, libraries and tools I've used in my projects and internship." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal key={cat.id} delay={(i % 3) * 0.06}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-iris/25"><Icon size={19} aria-hidden /></span>
                    <h3 className="font-display text-lg font-semibold leading-snug">{cat.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => <li key={s} className="chip">{s}</li>)}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
