import type { Project } from "@/lib/types";

/**
 * PROJECTS — one object per project. Copy an existing object, change the fields, done.
 * Optional fields (github, demo, thumbnail, problem …) simply disappear when left out.
 * Content below comes from your resume only. Add repo links and screenshots when you have them.
 */
export const projects: Project[] = [
  {
    slug: "legal-intelligence-bias-detection",
    title: "Legal Intelligence & Bias Detection System",
    summary:
      "A web application that speeds up the preliminary review of lengthy legal complaints and case text, with summarization, bias screening and IPC/BNS section recommendations.",
    problem: "Reading long legal complaints and case text before any real analysis is slow. This tool gives a first-pass review.",
    features: [
      "PDF and text ingestion with NLP preprocessing, summarization and keyword extraction (NLTK).",
      "Sentiment analysis with TextBlob, plus a rule-based fallback.",
      "Rule-based bias-screening module that scores text from 0 to 100 across categories such as gender bias and aggressive language.",
      "IPC/BNS section recommender that ranks sections from an SQLite dataset by match percentage using TF-IDF and cosine similarity.",
      "Interactive Plotly visualizations.",
    ],
    contribution: "Built the application.",
    stack: ["Python", "Streamlit", "NLTK", "TextBlob", "PyPDF2", "Plotly", "SQLite"],
    thumbnail: "/images/projects/legal-intelligence.webp",
    thumbnailAlt: "Illustration of legal scales on a law book beside an AI head profile and a checked document, for the Legal Intelligence & Bias Detection System",
    featured: true,
    demo: "https://legal-intelligence.streamlit.app/",
    // github: "https://github.com/Sarikas-07/<repo-name>",   // TODO: add repo link
    details: [
      {
        title: "How the pieces fit",
        points: [
          "Input: PDF or pasted text, read with PyPDF2.",
          "Processing: NLP preprocessing, then summarization and keyword extraction with NLTK.",
          "Analysis: sentiment (TextBlob or rule-based fallback) and rule-based bias scoring.",
          "Recommendation: TF-IDF vectors and cosine similarity against an SQLite dataset of IPC/BNS sections.",
        ],
      },
      {
        title: "Scope and limitations",
        points: [
          "Built for educational and research purposes as a first-pass review aid.",
          "It is not legal advice and is not a substitute for a qualified legal professional.",
        ],
      },
      {
        title: "Related publication",
        points: [
          "This work is described in the paper “An Integrated AI-Driven Framework for Legal Document Analysis, Bias Detection and Legal Provision Recommendation”. See the Achievements section.",
        ],
      },
    ],
  },
  {
    slug: "construction-site-management-system",
    title: "Construction Site Management System",
    summary:
      "A co-developed Windows desktop application for managing construction sites, workers, suppliers, materials and payments, replacing manual registers with one central SQL Server database.",
    problem: "Sites, workers, suppliers, materials and payments were tracked in manual registers.",
    features: [
      "Centralized SQL Server database with 13 tables and full CRUD operations.",
      "Admin login.",
      "Purchase orders with GST and discount calculation.",
      "Worker-to-site allocation.",
      "Supplier, worker and customer payment tracking.",
      "Crystal Reports-based reports.",
    ],
    contribution: "Co-developed as a team project; not built by me alone.", // TODO: add the specific modules you personally built
    stack: ["C#", "SQL Server", "Windows Forms", "ADO.NET", "Crystal Reports"],
    thumbnail: "/images/projects/construction-site-management.webp",
    thumbnailAlt: "Illustration of a crane, building frame, hard hat and laptop with a task checklist, for the Construction Site Management System",
    featured: true,
    github: "https://github.com/Sarikas-07/construction_site_management_system",
    details: [
      {
        title: "Intellectual property",
        points: [
          "Registered with the Copyright Office, Government of India as software. Certificate No. SW-2026023910; I am a co-author and co-owner.",
        ],
      },
    ],
  },
  {
    slug: "billsnap",
    title: "BillSnap",
    summary:
      "An AI-powered electricity bill analysis and energy management platform with OCR-based bill extraction, consumption analytics, bill forecasting, appliance monitoring, energy risk analysis and a conversational assistant.",
    features: [
      "OCR-based extraction of data from electricity bills.",
      "Consumption analytics and bill forecasting.",
      "Appliance monitoring and energy risk analysis.",
      "AI-powered conversational assistant.",
      "Modular full-stack architecture.",
    ],
    // contribution: "…",   // TODO: add your role (solo or team, and which parts you built)
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "MongoDB", "Cloudinary"],
    thumbnail: "/images/projects/billsnap.webp",
    thumbnailAlt: "Illustration of a phone scanning a bill with a green check mark, for BillSnap",
    featured: true,
    demo: "https://bill-snap-evr5jhpos-sarika-s.vercel.app/",
    github: "https://github.com/Sarikas-07/BillSnap",
    details: [
      {
        title: "Hackathon",
        points: ["Built during a 36-hour hackathon and recognized as a Top Performer."], // TODO: add hackathon name, organizer and proof to Achievements
      },
    ],
  },
  {
    slug: "peoplebook",
    title: "PeopleBook",
    summary:
      "A secure, admin-only financial records management platform built for Diamond Elite Club, with centralized people and records management, payment tracking and SMS notifications.",
    features: [
      "Centralized people and records management.",
      "Automated payment tracking and balance calculations.",
      "Role-based access control.",
      "Financial reporting.",
      "SMS notification integration (MSG91).",
    ],
    contribution: "Full-stack development.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "MSG91"],
    thumbnail: "/images/projects/peoplebook.webp",
    thumbnailAlt: "Illustration of an address book surrounded by connected people profiles, for PeopleBook",
    featured: true,
    demo: "https://peoplebook-git-branding-diamond-elite-club-sarika-s.vercel.app/login",
    github: "https://github.com/Sarikas-07/peoplebook",
    details: [
      {
        title: "Access",
        points: ["The platform is admin-only, so the live link opens its login page."],
      },
    ],
  },
  {
    slug: "student-result-analyzer",
    title: "Student Result Analyzer",
    summary: "A menu-driven Python application to add student marks, calculate totals and averages, detect pass or fail, and list the top three students.",
    features: [
      "Menu-driven entry of student marks.",
      "Totals and averages.",
      "Pass/fail detection.",
      "Top-three student listing.",
    ],
    stack: ["Python"],
    thumbnail: "/images/projects/students-result-analyser.webp",
    thumbnailAlt: "Illustration of a graduation cap on books beside a bar chart and magnifying glass, for the Student Result Analyzer",
    github: "https://github.com/Sarikas-07/student_result_analyzer",
  },
  {
    slug: "contact-book-cli",
    title: "Contact Book CLI",
    summary: "A command-line contact manager with add, update, search and delete features and persistent file-based storage.",
    features: [
      "Add, update, search and delete contacts from the command line.",
      "Persistent file-based storage.",
    ],
    stack: ["Python"],
    thumbnail: "/images/projects/contact-book.webp",
    thumbnailAlt: "Illustration of a spiral contact book with phone and email icons, for the Contact Book CLI",
    github: "https://github.com/Sarikas-07/contact_book_CLI",
  },

];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
