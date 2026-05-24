"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/fade-up";
import { Mail, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

// ─── SVG Icons ────────────────────────────────────────────
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Contact Links Config ─────────────────────────────────
const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mmbmendevil",
    handle: "@mmbmendevil",
    description: "Explore my code and open-source projects.",
    icon: GitHubIcon,
    color: "from-zinc-500/10 to-zinc-400/5",
    borderHover: "hover:border-zinc-300 dark:hover:border-zinc-400/30",
    iconColor: "text-zinc-700 dark:text-zinc-400",
    glowColor: "group-hover:shadow-[0_14px_40px_rgba(39,39,42,0.08)] dark:group-hover:shadow-[0_0_30px_rgba(161,161,170,0.08)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-benison-mendevil-0a26473b3/",
    handle: "Mark Benison Mendevil",
    description: "Connect with me professionally.",
    icon: LinkedInIcon,
    color: "from-blue-500/10 to-blue-400/5",
    borderHover: "hover:border-blue-300 dark:hover:border-blue-400/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    glowColor: "group-hover:shadow-[0_14px_40px_rgba(37,99,235,0.10)] dark:group-hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]",
  },
  {
    label: "Email",
    href: "mailto:mmbmendevil@gmail.com",
    handle: "mmbmendevil@gmail.com",
    description: "Send me a message directly.",
    icon: Mail,
    color: "from-violet-500/10 to-violet-400/5",
    borderHover: "hover:border-violet-300 dark:hover:border-violet-400/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    glowColor: "group-hover:shadow-[0_14px_40px_rgba(124,58,237,0.12)] dark:group-hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    handle: "Download PDF",
    description: "View my full experience and skills.",
    icon: FileText,
    color: "from-emerald-500/10 to-emerald-400/5",
    borderHover: "hover:border-emerald-300 dark:hover:border-emerald-400/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "group-hover:shadow-[0_14px_40px_rgba(16,185,129,0.10)] dark:group-hover:shadow-[0_0_30px_rgba(16,185,129,0.10)]",
  },
];

// Generates stable parameters for animated floating particles to prevent hydration errors
const staticParticles = [
  { left: "12%", top: "25%", size: 3, duration: 18, delay: 0 },
  { left: "85%", top: "15%", size: 4, duration: 22, delay: 2 },
  { left: "45%", top: "75%", size: 3, duration: 25, delay: 1 },
  { left: "22%", top: "60%", size: 5, duration: 20, delay: 3 },
  { left: "73%", top: "50%", size: 3, duration: 15, delay: 4 },
  { left: "60%", top: "30%", size: 4, duration: 28, delay: 1.5 },
  { left: "30%", top: "85%", size: 3, duration: 21, delay: 5 },
  { left: "90%", top: "70%", size: 5, duration: 17, delay: 2.5 },
];

// ─── Ambient living backdrop ──────────────────────────────
function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Centered soft radial glow */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)]" />
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,11,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,9,11,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]" />
      
      {/* Living floating particle nodes */}
      {staticParticles.map((pt, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 blur-[1px]"
          style={{
            width: pt.size,
            height: pt.size,
            left: pt.left,
            top: pt.top,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: pt.duration,
            delay: pt.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Availability Badge ───────────────────────────────────
function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 select-none dark:bg-emerald-500/5"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        Open to Opportunities
      </span>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/60 bg-background px-6 py-24 font-sans sm:py-32 dark:border-white/5 dark:bg-black/10"
    >
      <BackgroundGrid />

      <div className="relative mx-auto max-w-5xl z-10">
        {/* ── Header Area ── */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeUp>
            <AvailabilityBadge />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="relative inline-block">
              {/* Subtle ambient lighting behind text */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 opacity-30 blur-3xl rounded-full scale-110 pointer-events-none" />
              
              <h2 className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mx-auto">
                Interested in building{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  impactful AI-powered
                </span>{" "}
                systems together?
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              Open to opportunities, collaborations, and software engineering roles.
              I build systems that are thoughtful, performant, and designed to matter.
            </p>
          </FadeUp>

          {/* Premium Double CTA Button Group */}
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:mmbmendevil@gmail.com"
                className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] active:scale-95 shadow-md shadow-violet-500/10"
              >
                Let&apos;s Build Together
                <span className="absolute -inset-px rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-surface px-8 text-sm font-bold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-foreground/20 hover:bg-border/50 active:scale-95 sm:w-auto dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
              >
                Download Resume
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* ── Contact Cards Grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, i) => {
            const isExternal = !link.href.startsWith("mailto");
            return (
              <FadeUp key={link.label} delay={0.06 * i}>
                <Link
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-surface/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-surface ${link.borderHover} ${link.glowColor} dark:border-white/5 dark:bg-black/40 dark:hover:bg-black/40`}
                >
                  {/* Subtle animated card spotlight glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Icon Panel */}
                  <div className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/70 ${link.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:bg-background dark:border-white/5 dark:bg-white/[0.02] dark:group-hover:bg-white/[0.04]`}>
                    <link.icon className="h-5 w-5" />
                  </div>

                  {/* Core Typography Block */}
                  <div className="relative z-10 flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-foreground tracking-tight">{link.label}</p>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground/80 mt-0.5">{link.handle}</p>
                    <p className="mt-3 text-[11px] font-medium leading-relaxed text-muted-foreground/80">{link.description}</p>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        {/* ── Center-Glow Divider ── */}
        <FadeUp delay={0.3}>
          <div className="mt-28 relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent dark:via-white/10" />
            </div>
            <div className="relative rounded-full border border-border/60 bg-background p-2.5 shadow-md shadow-black/5 backdrop-blur-md dark:border-white/5 dark:bg-[#030712] dark:shadow-black/20">
              <Sparkles className="h-4 w-4 text-primary/60 animate-pulse" />
            </div>
          </div>
        </FadeUp>

        {/* ── Footer ── */}
        <FadeUp delay={0.36}>
          <footer className="mt-10 flex flex-col items-center gap-4 text-center">
            {/* Availability Indicator */}
            <p className="max-w-md rounded-full border border-border/60 bg-surface/70 px-5 py-2 text-xs font-medium leading-relaxed text-muted-foreground shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400/80">
              Currently open for <span className="text-primary font-semibold">internships</span>, <span className="text-primary font-semibold">freelance</span>, and <span className="text-primary font-semibold">software engineering</span> opportunities.
            </p>
            
            <div className="flex flex-col gap-1.5 mt-2">
              <p className="text-sm font-bold text-foreground tracking-wide">
                Mark Benison Mendevil
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                Full-Stack Developer · AI &amp; Adaptive Learning Researcher
              </p>
            </div>
            
            <div className="flex flex-col gap-1.5 mt-4">
              <p className="text-[11px] text-muted-foreground/50">
                © {new Date().getFullYear()} · All rights reserved.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 select-none dark:text-slate-500">
                Designed &amp; engineered with precision.
              </p>
            </div>
          </footer>
        </FadeUp>
      </div>
    </section>
  );
}
