"use client";

import React from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  BrainCircuit,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   Animation primitives
───────────────────────────────────────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ─────────────────────────────────────────────────────────────
   Two-line floating badge  (matches reference: icon + title + subtitle)
───────────────────────────────────────────────────────────── */
function Badge({
  icon: Icon,
  title,
  subtitle,
  iconBg,
  iconColor,
  floatDuration,
  floatOffset,
  entranceDelay,
  className = "",
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  floatDuration: number;
  floatOffset: number;
  entranceDelay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: entranceDelay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-30 hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, floatOffset, 0] }}
        transition={{ delay: entranceDelay + 0.4, duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl border border-border/40 bg-surface/80 px-3.5 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/5 dark:bg-black/20"
      >
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <div>
          <p className="text-xs font-bold leading-tight text-foreground">{title}</p>
          <p className="text-[10px] leading-tight text-muted-foreground">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Portrait card  — gradient border frame + mouse parallax
───────────────────────────────────────────────────────────── */
function PortraitCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 22 });
  const sy = useSpring(my, { stiffness: 90, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    /*
      Wrapper — this is the badge anchor.
      px-[8.5rem] on each side = 136px room for badges that are
      positioned with -left-[8rem] / -right-[7.5rem].
      lg:px-0 resets padding; badges then rely on parent right-col padding.
    */
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[370px]"
    >
      {/* ── Open to Opportunities — above card, right-aligned ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-11 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-500/15 bg-emerald-500/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
          Open to Opportunities
        </span>
      </motion.div>

      {/* ── Full-Stack badge — upper-left, overlaps card left edge ── */}
      <Badge
        icon={Code2}
        title="Full-Stack"
        subtitle="Developer"
        iconBg="bg-primary/10"
        iconColor="text-primary"
        floatDuration={4.8}
        floatOffset={-8}
        entranceDelay={0.75}
        className="-left-[8.5rem] top-14"
      />

      {/* ── AI Research badge — mid-right, overlaps card right edge ── */}
      <Badge
        icon={BrainCircuit}
        title="AI Research"
        subtitle="Focus"
        iconBg="bg-blue-500/10"
        iconColor="text-blue-500"
        floatDuration={5.4}
        floatOffset={7}
        entranceDelay={0.85}
        className="-right-[7.5rem] top-[30%]"
      />

      {/* ── Android Dev badge — lower-left, overlaps card left edge ── */}
      <Badge
        icon={Smartphone}
        title="Android Dev"
        subtitle="Mobile Developer"
        iconBg="bg-indigo-500/10"
        iconColor="text-indigo-400"
        floatDuration={6.1}
        floatOffset={-7}
        entranceDelay={0.95}
        className="-left-[8.5rem] bottom-[28%]"
      />

      {/* ── Ambient glow behind card — subtle and restrained ── */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 -z-10 rounded-[2.8rem] bg-gradient-to-br from-primary/15 via-blue-500/10 to-transparent blur-[40px]"
      />

      {/*
        ── Gradient border card ──
        Outer wrapper: p-[2px] with gradient bg → creates the glowing border.
        Shadow gives the large outer bloom visible in the reference.
      */}
      <div
        className="relative rounded-3xl p-[1px]"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.5) 0%, rgba(59,130,246,0.3) 50%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4), 0 0 30px rgba(124,58,237,0.1)",
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden z-10"
          aria-hidden="true"
        >
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Inner card — deep dark bg matches reference */}
        <div
          className="relative overflow-hidden bg-[#050816]"
          style={{ borderRadius: "calc(1.5rem - 1px)" }}
        >
          {/*
            Image container with fixed width + aspect-[3/4].
            `fill` makes the image cover the full container perfectly
            (exactly like the reference's full-bleed portrait frame).
          */}
          <div className="relative w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[370px] aspect-[3/4]">
            <Image
              src="/mark.png"
              alt="Mark Benison Mendevil — Software Engineer"
              fill
              sizes="(min-width: 1280px) 370px, (min-width: 1024px) 350px, (min-width: 640px) 320px, 280px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              priority
            />
            {/* Bottom gradient — only covers lower 35% so face stays fully visible */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(to top, #050816 0%, rgba(5,8,22,0.55) 28%, transparent 50%)" }}
            />
            {/* Hover sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom identity strip — sits below image in document flow, never covers face */}
          <div className="border-t border-white/[0.07] bg-[#09102A] px-4 py-3.5">
            <div className="mb-1.5 flex items-center gap-1.5">
              <Sparkles className="h-2.5 w-2.5 text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">
                2+ Major Projects
              </span>
            </div>
            <p className="text-[13px] font-bold leading-snug text-white">Software Engineer</p>
            <p className="mt-0.5 text-[11px] text-white/50">Adaptive Systems • Modern SaaS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Decorative dot grid  (bottom-left corner, like the reference)
───────────────────────────────────────────────────────────── */
function DotGrid() {
  const dots: React.ReactElement[] = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 8; c++) {
      dots.push(
        <div
          key={`${r}-${c}`}
          className="h-0.5 w-0.5 rounded-full bg-foreground/15 dark:bg-white/10"
        />
      );
    }
  }
  return (
    <div className="pointer-events-none absolute bottom-16 left-8 z-0 grid grid-cols-8 gap-2.5 select-none" aria-hidden="true">
      {dots}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero section
───────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pt-24 pb-20"
    >
      {/* ── Cinematic background lighting — soft and intentional ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-[10%] top-[5%] h-[600px] w-[600px] rounded-full bg-primary/[0.04] dark:bg-primary/[0.03] blur-[120px]" />
        <div className="absolute right-[0%] top-[10%] h-[520px] w-[520px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.02] blur-[120px]" />
        <div className="absolute left-[35%] top-[40%] h-[320px] w-[320px] rounded-full bg-violet-500/[0.02] dark:bg-violet-500/[0.015] blur-[80px]" />
      </div>

      {/* Subtle line grid */}
      <AnimatedGrid className="opacity-[0.18] dark:opacity-[0.10]" />

      {/* Decorative dot cluster */}
      <DotGrid />

      {/* ═══════════════════════════════════════════════════════
          Main two-column layout
      ═══════════════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">

        {/* ════ LEFT — Text content ════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 min-w-0 text-center lg:text-left"
        >
          {/* Status label */}
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Full-Stack Developer &amp; AI Researcher
            </span>
          </motion.div>

          {/* "Hi, I'm" intro */}
          <motion.p
            variants={item}
            className="mt-7 text-base font-medium text-muted-foreground sm:text-lg"
          >
            Hi, I&apos;m
          </motion.p>

          {/* ── DOMINANT NAME ── */}
          <motion.h1
            variants={item}
            className="mt-1 text-[3.2rem] font-black leading-[0.93] tracking-tighter text-foreground sm:text-[4.2rem] lg:text-[4.8rem] xl:text-[5.5rem]"
          >
            Mark Benison
            <br />
            Mendevil
            <span className="text-primary">.</span>
          </motion.h1>

          {/* Accent underline */}
          <motion.div
            variants={item}
            className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-primary to-blue-500 lg:mx-0 mx-auto"
          />

          {/* Secondary headline */}
          <motion.h2
            variants={item}
            className="mt-5 text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-[1.6rem]"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-violet-400 via-primary to-blue-400 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Learning Experiences
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-4 max-w-[30rem] text-sm leading-relaxed text-muted-foreground sm:text-base mx-auto lg:mx-0"
          >
            Focused on adaptive learning systems, AI-assisted education,
            scalable web applications, and modern developer experiences.
          </motion.p>

          {/* ── CTA cluster ── */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {/* Primary — gradient fill */}
            <Link
              href="#projects"
              className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-[0_8px_16px_-4px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_20px_-4px_rgba(124,58,237,0.4)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-1.5">
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            {/* Secondary — glass outline */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-border/50 hover:border-foreground/20 hover:scale-[1.03] active:scale-[0.97]"
            >
              <FileText className="h-4 w-4 text-muted-foreground" />
              Resume
            </a>

            {/* Circular icon socials */}
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/mmbmendevil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-sm backdrop-blur-sm transition-all hover:border-foreground/20 hover:bg-border/50 hover:text-foreground hover:scale-[1.05] active:scale-[0.97]"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mark-benison-mendevil-0a26473b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-sm backdrop-blur-sm transition-all hover:border-foreground/20 hover:bg-border/50 hover:text-foreground hover:scale-[1.05] active:scale-[0.97]"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* ════ RIGHT — Portrait card ════
            The extra horizontal padding on this wrapper gives left/right
            badges the room they need without a fixed-size stage.
            Badges at -left-[8.5rem] sit within the 136px left pad.
            Badges at -right-[7.5rem] sit within the 120px right pad.
        */}
        <div className="flex flex-shrink-0 items-center justify-center mt-10 lg:mt-0">
          <div className="px-[8.5rem] sm:px-36 lg:px-[8.5rem] xl:px-36">
            <PortraitCard />
          </div>
        </div>
      </div>

      {/* ── Scroll to explore ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-border/50 p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
