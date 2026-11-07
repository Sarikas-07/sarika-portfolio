/** Shapes of every content file. If you get a red underline in a data file, it tells you which field is wrong. */

export interface Profile {
  name: string;
  fullLegalName?: string;
  headline: string; // parts separated by " | "
  intro: string;
  metaDescription: string;
  status: { show: boolean; label: string };
  email: string;
  phone?: string; // optional; leave undefined to keep your number off the public site
  linkedin?: string;
  github?: string;
  location?: string;
  languages?: string[];
  photo: string; // path inside /public
  photoAlt: string;
  resume: string; // path inside /public
  siteUrl?: string; // your final Vercel / custom domain URL, used for link previews
}

export interface AboutContent {
  paragraphs: string[];
  interests: string[];
  approach: { title: string; text: string }[];
  goals: string;
}

export type SkillIcon = "code" | "brain" | "chart" | "globe" | "database" | "tools";
export interface SkillCategory {
  id: string;
  title: string;
  icon: SkillIcon;
  skills: string[];
}

export interface DetailSection {
  title: string;
  points: string[];
}
export interface Project {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  summary: string;
  problem?: string;
  features?: string[];
  contribution?: string;
  stack: string[];
  github?: string;
  demo?: string;
  thumbnail?: string; // e.g. "/images/projects/my-project.webp"
  thumbnailAlt?: string; // describes the image for screen readers
  featured?: boolean;
  period?: string;
  details?: DetailSection[]; // extra technical info for the details page
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end?: string;
  duration?: string;
  location?: string;
  responsibilities: string[];
  technologies?: string[];
  link?: string;
  certificateFile?: string; // completion certificate in /public/certificates, shown as a link
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  category?: string; // e.g. "Artificial Intelligence"; shown on the card when set
  credentialId?: string;
  file?: string; // "/certificates/name.pdf" or .png/.jpg
  previewImage?: string; // optional image shown on the card when `file` is a PDF
  verifyUrl?: string;
  description?: string; // one or two short sentences shown on the card
  skills?: string[];
}

export type AchievementType = "publication" | "copyright" | "award" | "competition" | "research" | "other";
export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  date?: string;
  organization?: string;
  description?: string;
  details?: { label: string; value: string }[];
  file?: string; // proof document in /public/certificates or /public/publications
  fileLabel?: string; // button text for `file`, e.g. "View Certificate" (default "View proof")
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution?: string;
  start?: string;
  end?: string;
  grade?: string;
  notes?: string[];
}
