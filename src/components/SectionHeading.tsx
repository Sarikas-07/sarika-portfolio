import { Reveal } from "./Reveal";

export function SectionHeading({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-electric to-iris" aria-hidden />
      <h2 id={`${id}-heading`} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-fg-muted">{description}</p>}
    </Reveal>
  );
}
