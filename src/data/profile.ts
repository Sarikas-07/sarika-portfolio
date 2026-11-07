import type { Profile } from "@/lib/types";

/**
 * PROFILE — your name, intro, contact links, photo and resume.
 * Source: your resume. Anything you remove (set to undefined) is hidden automatically.
 */
export const profile: Profile = {
  name: "Sarika Ghorpade",
  fullLegalName: "Sarika Dhanaji Ghorpade",
  headline: "AI & Data Science Student | AI/ML Developer | Software Engineering Enthusiast",
  intro:
    "I'm a B.Tech student in AI & Data Science who builds practical software, including an NLP application for first-pass legal text review and a SQL Server desktop system for construction sites. I completed a 60-day software development internship at IMERGENE and am looking for entry-level software, data analytics or AI/ML roles.",
  metaDescription:
    "Portfolio of Sarika Ghorpade, B.Tech AI & Data Science student building NLP, data and software applications with Python, C# and SQL.",

  // Set show: false to hide the status pill in the hero.
  status: { show: true, label: "Open to entry-level software, data and AI/ML roles" },

  email: "sarikas9266@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarika-ghorpade-3a234930a",
  github: "https://github.com/Sarikas-07",
  // phone: "+91 …",       // your resume lists a number; add it here only if you want it public
  languages: ["English", "Hindi", "Marathi"],

  photo: "/images/profile.jpg",
  photoAlt: "Portrait of Sarika Ghorpade in a navy blazer and white shirt",
  resume: "/resume/Sarika_Ghorpade_Resume_final.pdf",

  // TODO: after your first Vercel deploy, paste your live URL here (e.g. "https://sarika-ghorpade.vercel.app")
  siteUrl: undefined,
};
