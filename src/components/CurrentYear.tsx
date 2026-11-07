"use client";
import { useEffect, useState } from "react";

/** Renders the visitor's current year, so the footer never goes stale between deploys. */
export function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
