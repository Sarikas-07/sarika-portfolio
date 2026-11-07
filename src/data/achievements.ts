import type { Achievement } from "@/lib/types";

/**
 * ACHIEVEMENTS & PUBLICATIONS — add awards, competitions, papers, copyrights.
 * `type` picks the label/icon: "publication" | "copyright" | "award" | "competition" | "research" | "other"
 */
export const achievements: Achievement[] = [
  {
    id: "journal-of-informetrics-paper",
    type: "publication",
    title: "An Integrated AI-Driven Framework for Legal Document Analysis, Bias Detection and Legal Provision Recommendation",
    date: "2026",
    organization: "Journal of Informetrics",
    description: "Co-authored paper, listed as published in the Journal of Informetrics according to the publication certificate. I have not independently verified the journal listing.",
    details: [
      { label: "Authors", value: "S. S. Sawant, S. D. Ghorpade, A. G. Chendke, G. M. Chendke" },
      { label: "Volume / Issue", value: "Vol. 20, Issue 4, 2026" },
      { label: "Article ID", value: "JOI/2816" },
      { label: "ISSN (as listed)", value: "1875-5879" },
      { label: "Status (as stated)", value: "Published, per the publication certificate" },
      { label: "Verification", value: "Not independently verified; no proof document or paper URL attached yet" },
    ],
    // file: "/certificates/publication-certificate.pdf",   // TODO: add proof
    // link: "https://…",                                    // TODO: add the paper URL if one exists
  },
  {
    id: "ncetet-2025-conference-paper",
    type: "publication",
    title: "Construction Site Management System (conference paper)",
    date: "17 April 2025",
    organization: "Bharati Vidyapeeth's College of Engineering, Kolhapur",
    description:
      "Certificate acknowledging the publishing of a paper on the Construction Site Management System at the 11th National Conference on Emerging Trends in Engineering & Technology (NCETET 2025).",
    details: [
      { label: "Conference", value: "11th NCETET 2025" },
      { label: "Paper ID", value: "GRD-UG-4" },
      { label: "Certificate ID", value: "8f89f222-383a-4e97-ac6e-2dff8fc30099" },
      { label: "Conference ISBN (as printed)", value: "978-93-48954-45-9" },
    ],
    file: "/publications/ncetet-2025-conference-paper-certificate.pdf",
    fileLabel: "View Certificate",
  },
  {
    id: "copyright-construction-site-management",
    type: "copyright",
    title: "Copyright Registration: Construction Site Management System (software)",
    date: "Issued 19 Oct 2026",
    organization: "Copyright Office, Government of India",
    description: "Copyright registration for the software work “Construction Site Management System”. This is a copyright registration, not a patent or an award.",
    details: [
      { label: "My role", value: "Co-author and co-owner" },
      { label: "Certificate No.", value: "SW-2026023910" },
      { label: "Application No.", value: "SW-27767/2026-CO" },
      { label: "Filed", value: "12 Jun 2026" },
    ],
    // file: "/certificates/copyright-certificate.pdf",     // TODO: add proof
  },
  {
    id: "aideas-miniproject-poster-presentation-2025",
    type: "competition",
    title: "Winner: Mini-Project Poster Presentation",
    date: "6 Nov 2025",
    organization: "AIDEAS, Dept. of CSE (AI & DS), PVPIT Budhgaon",
    description:
      "Certificate of Appreciation as 1st Winner in the Mini-Project Poster Presentation, held in academic year 2025–2026 (class TY).",
    file: "/certificates/aideas-miniproject-poster-presentation-2025.pdf",
    fileLabel: "View Certificate",
  },
  {
    id: "cognizant-technoverse-hackathon-2026",
    type: "competition",
    title: "Cognizant Technoverse Hackathon 2026 (participation)",
    organization: "Cognizant",
    description: "Certificate of Appreciation in recognition of participation in the Cognizant Technoverse Hackathon 2026.",
    details: [{ label: "Certificate ID", value: "SUPERSET-22F63-7A010" }],
    file: "/certificates/cognizant-technoverse-hackathon-2026.pdf",
    fileLabel: "View Certificate",
  },
];
