import { certifications } from "@/data/certifications";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="section">
      <div className="container-page">
        <SectionHeading id="certifications" title="Certifications" description="Internship completion, job simulations and training programmes." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => <Reveal key={c.id} delay={(i % 3) * 0.06}><CertificationCard cert={c} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
