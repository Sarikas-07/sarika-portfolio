import Image from "next/image";
import { BadgeCheck, ExternalLink, FileText } from "lucide-react";
import type { Certification } from "@/lib/types";
import { publicFileExists } from "@/lib/assets";
import { isImagePath } from "@/lib/utils";

export function CertificationCard({ cert }: { cert: Certification }) {
  const hasFile = publicFileExists(cert.file);
  const preview = publicFileExists(cert.previewImage) ? cert.previewImage : hasFile && isImagePath(cert.file) ? cert.file : undefined;
  const dev = process.env.NODE_ENV === "development";

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-ink-800">
        {preview ? (
          <Image src={preview} alt={`Preview of the ${cert.name} certificate`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover object-top" />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(77,141,255,0.25),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(139,108,255,0.25),transparent_55%)]">
            <BadgeCheck size={38} className="text-white/55" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{cert.name}</h3>
        <p className="mt-1 text-sm text-electric-soft">{cert.issuer}</p>
        {cert.description && <p className="mt-3 text-sm leading-relaxed text-fg-muted">{cert.description}</p>}
        <dl className="mt-3 space-y-1 text-sm text-fg-muted">
          {cert.category && <div className="flex gap-2"><dt className="text-fg-dim">Category</dt><dd>{cert.category}</dd></div>}
          {cert.issueDate && <div className="flex gap-2"><dt className="text-fg-dim">Issued</dt><dd>{cert.issueDate}</dd></div>}
          {cert.credentialId && <div className="flex gap-2"><dt className="text-fg-dim">Credential ID</dt><dd className="break-all">{cert.credentialId}</dd></div>}
        </dl>
        {cert.skills && cert.skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Related skills">{cert.skills.map((s) => <li key={s} className="chip !px-2.5 !py-0.5 !text-xs">{s}</li>)}</ul>
        )}
        <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm">
          {hasFile && cert.file && (
            <a href={cert.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-electric-soft hover:underline underline-offset-4">
              <FileText size={15} aria-hidden /> View Certificate
            </a>
          )}
          {cert.verifyUrl && (
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg">
              <ExternalLink size={15} aria-hidden /> Verify
            </a>
          )}
          {dev && !hasFile && <span className="text-xs text-amber-300/80">Dev note: add a file to show “View Certificate”.</span>}
        </div>
      </div>
    </article>
  );
}
