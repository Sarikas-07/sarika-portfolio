"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Copies the email address. The "Copied" message only appears if the browser really accepted the copy. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2200);
  }
  return (
    <button type="button" onClick={copy} className="btn btn-ghost">
      {state === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
      {state === "copied" ? "Copied" : state === "failed" ? "Copy failed, select the address instead" : "Copy email"}
      <span className="sr-only" role="status">{state === "copied" ? "Email address copied" : ""}</span>
    </button>
  );
}
