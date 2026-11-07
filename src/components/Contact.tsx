import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ButtonLink } from "./ButtonLink";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    profile.linkedin && { label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: profile.linkedin, Icon: Linkedin },
    profile.github && { label: "GitHub", value: profile.github.replace(/^https?:\/\/(www\.)?/, ""), href: profile.github, Icon: Github },
    profile.phone && { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  ].filter(Boolean) as { label: string; value: string; href: string; Icon: typeof Mail }[];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-ink-900/40">
      <div className="container-page">
        <SectionHeading id="contact" title="Let's talk" description="I'm looking for entry-level software development, data analytics and AI/ML roles. Email is the quickest way to reach me." />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col items-start gap-4">
            <ButtonLink variant="primary" href={`mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}`} icon={<Mail size={18} aria-hidden />}>Send an email</ButtonLink>
            <CopyEmail email={profile.email} />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="card divide-y divide-white/10 overflow-hidden">
              {rows.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.05]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-iris/25"><Icon size={18} aria-hidden /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-fg-dim">{label}</span>
                      <span className="block truncate text-fg">{value}</span>
                    </span>
                    <ArrowUpRight size={18} className="text-fg-dim transition group-hover:text-electric-soft" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
