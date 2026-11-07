import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = `${profile.name} | AI & Data Science Student`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl ?? "http://localhost:3000"),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.metaDescription,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title,
    description: profile.metaDescription,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: profile.photo, alt: profile.photoAlt }],
  },
  twitter: { card: "summary", title, description: profile.metaDescription, images: [profile.photo] },
};

export const viewport: Viewport = { themeColor: "#070A13", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
