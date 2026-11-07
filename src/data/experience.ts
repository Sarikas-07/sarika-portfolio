import type { ExperienceItem } from "@/lib/types";

/** EXPERIENCE — newest first. Only add roles you can verify. */
export const experience: ExperienceItem[] = [
  {
    id: "imergene-software-intern",
    company: "IMERGENE",
    role: "Software Development Intern",
    start: "13 August 2026",
    end: "11 October 2026",
    duration: "60 days",
    location: "Remote, Sangli, Maharashtra, India",
    responsibilities: [
      "Designed and refined the final UI for the Blue Portal, focusing on usability, visual consistency and user experience.",
      "Tested Blue VS Code Extension functionality and workflows across different use cases to identify issues.",
      "Used the Blue AI Coding Agent to generate websites from requirements, exploring AI-assisted development workflows.",
      "Used Git and GitHub for cloning, pulling, pushing, branch management and collaboration in the project repository.",
    ],
    technologies: ["Git", "GitHub", "VS Code"],
    certificateFile: "/certificates/imergene-internship-completion.pdf",
  },
];
