import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { CurrentYear } from "./CurrentYear";

const nav = ["about", "skills", "projects", "experience", "certifications", "achievements", "education", "contact"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/60">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-fg-muted">AI &amp; Data Science student building practical software.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-fg-muted">
          {nav.map((id) => (
            <Link key={id} href={`/#${id}`} className="capitalize transition hover:text-fg">{id}</Link>
          ))}
        </nav>
        <ul className="flex gap-3">
          {profile.github && <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-electric/50"><Github size={18} aria-hidden /></a></li>}
          {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-electric/50"><Linkedin size={18} aria-hidden /></a></li>}
          <li><a href={`mailto:${profile.email}`} aria-label="Send an email" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-electric/50"><Mail size={18} aria-hidden /></a></li>
        </ul>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-fg-dim">
        © <CurrentYear fallback={new Date().getFullYear()} /> {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
