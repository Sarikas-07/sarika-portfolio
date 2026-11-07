import type { EducationItem } from "@/lib/types";

/** EDUCATION — newest first. Missing fields are hidden. */
export const education: EducationItem[] = [
  {
    id: "btech-aids",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon, Sangli",
    end: "Expected 2027",
    grade: "CGPA 7.73",
    // start: "…",   // not provided, so left out
  },
  {
    id: "diploma-cs",
    degree: "Diploma in Computer Science",
    institution: "Latthe Education Society's Polytechnic, MIDC Kupwad",
    start: "2021",
    end: "2024",
    grade: "82.34%",
  },
];
