"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft glow + ring that follow the mouse on desktop only.
 * The normal cursor stays visible, nothing blocks clicks (pointer-events: none),
 * and it is disabled on touch devices and for reduced-motion users.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [overLink, setOverLink] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 500, damping: 38, mass: 0.2 });
  const ringY = useSpring(y, { stiffness: 500, damping: 38, mass: 0.2 });
  const glowX = useSpring(x, { stiffness: 90, damping: 22 });
  const glowY = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    const ok =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setOverLink(!!t?.closest("a, button, [role='button'], input, textarea, summary"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-[200px] -mt-[200px] h-[400px] w-[400px] rounded-full"
        style={{ x: glowX, y: glowY, background: "radial-gradient(circle, rgba(77,141,255,0.13) 0%, rgba(139,108,255,0.06) 40%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-3.5 -mt-3.5 h-7 w-7 rounded-full border border-electric-soft/70"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: overLink ? 1.7 : 1, backgroundColor: overLink ? "rgba(77,141,255,0.12)" : "rgba(77,141,255,0)" }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
