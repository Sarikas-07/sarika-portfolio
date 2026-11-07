"use client";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Download, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { AIBackground } from "./AIBackground";
import { ButtonLink } from "./ButtonLink";
import { Magnetic } from "./Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay, reduce }: { children: React.ReactNode; delay: number; reduce: boolean }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero({ hasPhoto, hasResume }: { hasPhoto: boolean; hasResume: boolean }) {
  const reduce = !!useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140]);
  const portraitY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -50]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 110, damping: 18 });
  const sry = useSpring(ry, { stiffness: 110, damping: 18 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 9);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 9);
  }
  function onLeave() { rx.set(0); ry.set(0); }

  const [first, ...rest] = profile.name.split(" ");
  const headlineParts = profile.headline.split("|").map((s) => s.trim());
  const initials = profile.name.split(" ").map((p) => p[0]).join("");

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  }) as const;

  return (
    <section id="home" aria-label="Introduction" className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10"><AIBackground /></motion.div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="min-w-0">
          {profile.status.show && (
            <motion.p {...fade(0.1)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-sm text-fg-muted backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.status.label}
            </motion.p>
          )}

          <h1 className="font-display text-[clamp(3.25rem,9vw,6.75rem)] font-semibold leading-[0.95] tracking-tight">
            <Line delay={0.15} reduce={reduce}>{first}</Line>
            <Line delay={0.28} reduce={reduce}><span className="text-gradient">{rest.join(" ")}</span></Line>
          </h1>

          <motion.ul {...fade(0.55)} aria-label="Roles" className="mt-7 flex flex-wrap gap-x-3 gap-y-1 font-display text-lg text-fg sm:text-xl">
            {headlineParts.map((part, i) => (
              <li key={part} className="flex items-center gap-3">
                {part}
                {i < headlineParts.length - 1 && <span aria-hidden className="h-1 w-1 rounded-full bg-iris" />}
              </li>
            ))}
          </motion.ul>

          <motion.p {...fade(0.68)} className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{profile.intro}</motion.p>

          <motion.div {...fade(0.8)} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink href="/#projects" variant="primary" icon={<FolderOpen size={18} aria-hidden />}>Explore My Projects</ButtonLink>
            </Magnetic>
            {hasResume && (
              <Magnetic>
                <ButtonLink href={profile.resume} variant="ghost" download icon={<Download size={18} aria-hidden />}>Download Resume</ButtonLink>
              </Magnetic>
            )}
          </motion.div>

          <motion.ul {...fade(0.92)} className="mt-8 flex items-center gap-3" aria-label="Social links">
            {profile.github && (
              <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition hover:border-electric/60 hover:bg-white/[0.09]"><Github size={19} aria-hidden /></a></li>
            )}
            {profile.linkedin && (
              <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition hover:border-electric/60 hover:bg-white/[0.09]"><Linkedin size={19} aria-hidden /></a></li>
            )}
            <li><a href={`mailto:${profile.email}`} aria-label="Send an email" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition hover:border-electric/60 hover:bg-white/[0.09]"><Mail size={19} aria-hidden /></a></li>
          </motion.ul>
        </div>

        {/* Portrait: large, uncropped, nothing overlaid on the photo */}
        <motion.div style={{ y: portraitY }} className="mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:ml-auto lg:mr-0 lg:max-w-[560px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="relative"
          >
            <motion.div style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100 }} className="relative">
              {/* soft glow sits BEHIND the photo */}
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-electric/25 via-transparent to-iris/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-ink-800 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
                {hasPhoto ? (
                  <Image
                    src={profile.photo}
                    alt={profile.photoAlt}
                    width={1024}
                    height={1280}
                    priority
                    sizes="(min-width: 1024px) 45vw, (min-width: 640px) 440px, 340px"
                    className="block h-auto w-full"
                  />
                ) : (
                  <div className="grid aspect-[4/5] place-items-center text-center text-fg-muted">
                    <div>
                      <p className="font-display text-7xl text-gradient">{initials}</p>
                      <p className="mt-3 px-8 text-sm">Add your photo at <code className="text-fg">public/images/profile.jpg</code></p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
