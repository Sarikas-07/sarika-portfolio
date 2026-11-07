import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main id="main" className="container-page flex min-h-[80vh] flex-col items-start justify-center gap-6 pt-24">
      <p className="font-display text-7xl font-semibold text-gradient">404</p>
      <h1 className="font-display text-3xl font-semibold">This page doesn&apos;t exist.</h1>
      <p className="max-w-md text-fg-muted">The link may be mistyped or the page may have moved. Head back to the portfolio home page.</p>
      <ButtonLink href="/" variant="primary">Back to home</ButtonLink>
    </main>
  );
}
