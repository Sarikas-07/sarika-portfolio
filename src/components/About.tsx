import { Compass, Target } from "lucide-react";
import { about } from "@/data/about";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-page">
        <SectionHeading id="about" title="About me" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-fg-muted">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="card flex gap-4 p-5">
              <Target className="mt-1 shrink-0 text-iris-soft" size={20} aria-hidden />
              <div>
                <h3 className="font-display text-base font-semibold text-fg">Where I&apos;m headed</h3>
                <p className="mt-1 text-base">{about.goals}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold">Technical interests</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((i) => <li key={i} className="chip">{i}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Compass size={18} className="text-electric-soft" aria-hidden />How I work</h3>
              <ul className="mt-3 space-y-3">
                {about.approach.map((a) => (
                  <li key={a.title} className="card p-4">
                    <p className="font-medium">{a.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{a.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            {profile.languages && <p className="text-sm text-fg-dim">Languages: {profile.languages.join(", ")}</p>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
