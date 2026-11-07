import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** One link component for every button. Picks the right element for internal, external, file and mailto links. */
export function ButtonLink({ href, variant = "ghost", icon, download, className, children }: Props) {
  const cls = cn("btn", variant === "primary" ? "btn-primary" : "btn-ghost", className);
  const content = (<>{icon}{children}</>);

  if (href.startsWith("http")) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>;
  }
  if (href.startsWith("/") && !download && !/\.[a-z0-9]{2,4}$/i.test(href)) {
    return <Link href={href} className={cls}>{content}</Link>;
  }
  if (href.startsWith("/") && !download) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>;
  }
  return <a href={href} className={cls} {...(download ? { download: true } : {})}>{content}</a>;
}
