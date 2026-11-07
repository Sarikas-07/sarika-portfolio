import type { Certification } from "@/lib/types";

/**
 * CERTIFICATIONS — to add one: put the PDF/image in /public/certificates/,
 * then add an object here with `file: "/certificates/<filename>"`.
 * Until a `file` exists, the "View Certificate" button stays hidden (no broken links).
 *
 * The IMERGENE internship completion certificate is linked from the Experience section
 * (src/data/experience.ts), so it is intentionally not repeated here.
 * Details below were read from the certificates themselves.
 */
export const certifications: Certification[] = [
  {
    id: "gradguru-career-guidance-session",
    name: "Career Guidance Session",
    issuer: "GradGuru Innovations",
    issueDate: "19 Jul 2026",
    category: "Career Guidance",
    file: "/certificates/gradguru-career-guidance-session-2026.pdf",
    description: "Certificate of Participation. Attended the Career Guidance Session to gain career-related insights and professional guidance.",
  },
  {
    id: "deloitte-forage-data-analytics",
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    issueDate: "25 Jan 2026",
    file: "/certificates/deloitte-data-analytics-job-simulation.pdf",
    description: "Certificate of Completion for a virtual job simulation, with practical tasks in data analysis and forensic technology.",
    skills: ["Data Analysis", "Forensic Technology"],
  },
  {
    id: "power-bi-micro-course",
    name: "Power BI Micro Course",
    issuer: "Skill Course",
    issueDate: "10 Jan 2026",
    credentialId: "SC-3B3231D772",
    file: "/certificates/power-bi-micro-course.png",
    skills: ["Power BI"],
  },
  {
    id: "freedom-with-ai-masterclass",
    name: "Freedom with AI Masterclass",
    issuer: "Freedom with AI",
    issueDate: "2025", // certificate prints 04/10/2025; day/month order to be confirmed
    file: "/certificates/freedom-with-ai-masterclass.pdf",
    description: "Certificate of Completion for the Freedom with AI Masterclass.",
  },
  {
    id: "future-proof-india-build-ai-applications",
    name: "How to Build AI Applications",
    issuer: "Future Proof India",
    issueDate: "4 Oct 2025",
    category: "Artificial Intelligence",
    file: "/certificates/how-to-build-ai-applications.pdf",
    description: "Certificate of Participation for the live workshop “How to build AI applications”, conducted by Future Proof India.",
  },

  {
    id: "amiee-student-chapter-membership",
    name: "AMIEE Student Chapter Membership",
    issuer: "AMIEE Association",
    issueDate: "20 Jun 2025",
    credentialId: "AMIEE242/1577",
    file: "AIMEE-certificate.pdf",  // held back: shows college roll number, awaiting your approval
    description: "Student chapter membership granted by the AMIEE Association for the Department of CSE (AI & Data Science), PVPIT.",
  },
  {
    id: "guvi-career-in-data-science",
    name: "A Guide to a Career in Data Science: Tools, Skills, and Career Fundamentals",
    issuer: "GUVI",
    issueDate: "22 Mar 2025",
    file: "/certificates/guvi-career-in-data-science.jpeg",
    description: "Certificate of Participation in this GUVI event, held on 22 March 2025.",
  },
  {
    id: "outskill-generative-ai-mastermind",
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    file: "/certificates/outskill-generative-ai-mastermind.pdf",
    description: "Certificate of Completion presented by Outskill (shown with Moneycontrol on the certificate).",
  },
  {
    id: "web-development-training",
    name: "Web Development Industrial Training",
    issuer: "Compcare Software Programming Training Institute, Sangli",
    issueDate: "Jul 2023",
    category: "Web Development",
    file: "/certificates/web-development-compcare-2023.pdf",
    previewImage: "/certificates/web-development-compcare-2023-preview.jpg",
    description: "Certificate of Completion for the Web Development course, conducted June–July 2023, with grade A+.",
  },
];
