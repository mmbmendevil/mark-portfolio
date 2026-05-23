"use client";

import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";
import { Code2, BrainCircuit, Smartphone, ArrowUpRight, Zap, Target, BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpecializationCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  featured?: boolean;
}

function SpecializationCard({ icon: Icon, title, desc, tags, color, featured }: SpecializationCardProps) {
  return (
    <div className={cn(
      "group relative rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md",
      featured 
        ? "border-primary/25 bg-primary/[0.03] dark:bg-primary/[0.02]" 
        : "border-border/40 bg-surface/40 hover:bg-surface/60 hover:border-border/70"
    )}>
      {/* Featured ambient glow */}
      {featured && (
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/[0.02] blur-xl" />
      )}
      
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-colors",
          featured ? "border-primary/20 bg-primary/10" : "border-border/50 bg-surface group-hover:bg-foreground/5"
        )}>
          <Icon className={cn("h-5 w-5 transition-colors", featured ? "text-primary" : "text-foreground/70 group-hover:text-foreground")} />
        </div>
        <div className="space-y-2">
          <h4 className="text-[15px] font-bold text-foreground tracking-tight transition-colors flex items-center gap-1.5">
            {title}
            {featured && <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0.5 text-primary ml-auto" />
          </h4>
          <p className="text-xs leading-relaxed text-muted-foreground/90 font-medium">{desc}</p>
          <div className="flex flex-wrap gap-1.5 pt-2.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 px-2.5 py-0.5 text-[10px] font-medium text-foreground/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const specs = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      desc: "Architecting high-performance systems with Next.js and TypeScript. Focused on scalable APIs and pristine UI.",
      tags: ["Next.js", "TypeScript", "Node.js"],
      color: "bg-violet-500",
    },
    {
      icon: BrainCircuit,
      title: "AI & Adaptive Learning Research",
      desc: "Modeling student cognition via Bayesian Knowledge Tracing and Cognitive Diagnostic Models to build adaptive education.",
      tags: ["BKT / IRT", "EdTech AI", "Adaptive"],
      color: "bg-blue-500",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Architectures",
      desc: "Engineering memory-efficient, offline-first native Android apps with Kotlin and modern SDKs.",
      tags: ["Kotlin", "Android SDK", "UX"],
      color: "bg-indigo-500",
    },
  ];

  const timeline = [
    {
      period: "Present",
      role: "Adaptive Systems & EdTech Researcher",
      org: "Educational Tech Innovation",
      desc: "Modeling student cognition to develop personalized pathways, optimizing dynamic question delivery and learning retention.",
    },
    {
      period: "Graduate",
      role: "Bachelor of Science in Computer Science",
      org: "Systems & Algorithms Focus",
      desc: "Completed core studies in distributed architectures, data analytics, and computational modeling.",
    },
  ];

  const strengths = [
    { icon: Zap, label: "High-Performance Code", desc: "Optimizing render trees and bundle weights." },
    { icon: Target, label: "Data-Driven Decisions", desc: "Leveraging empirical research to build adaptive algorithms." },
    { icon: BookOpen, label: "EdTech Engineering Focus", desc: "Empowering education through modular and accessible systems." },
  ];

  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Bridging the gap between software engineering and academic research." />

        {/* Asymmetrical Story & Specialization Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start mt-14">
          
          {/* Left Column — The Human Story & Timeline (Col span 7) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Story Card */}
            <FadeUp delay={0.1}>
              <div className="relative rounded-2xl border border-border/50 bg-surface/40 p-8 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-blue-500" />
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-4">My Philosophy</h3>
                
                <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground/90">
                  <p>
                    I engineer systems that <span className="text-foreground font-semibold">adapt directly to their users</span>. My work lives at the intersection of scalable software architecture and computational psychology.
                  </p>
                  <p>
                    Instead of generic platforms, I build systems driven by <span className="text-primary font-semibold">intelligent student modeling</span>. By leveraging psychometrics, I aim to make digital education highly responsive and accessible.
                  </p>
                  <p>
                    From pristine React frontends to robust Kotlin mobile apps and microservices, I prioritize scalable types, memory efficiency, and uncompromising visual quality.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Timeline / Journey Section */}
            <FadeUp delay={0.2} className="space-y-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight pl-2">Professional Journey</h3>
              
              <div className="relative pl-7 border-l border-border/30 space-y-10 ml-2">
                {timeline.map((item) => (
                  <div key={item.role} className="relative group">
                    {/* Premium Timeline Node */}
                    <div className="absolute -left-[35px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-border/50 bg-background transition-colors group-hover:border-primary/50 shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-primary" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">{item.period}</span>
                        <h4 className="text-[15px] font-bold text-foreground tracking-tight">{item.role}</h4>
                      </div>
                      <p className="text-xs font-semibold text-muted-foreground/80">{item.org}</p>
                      <p className="text-[13px] text-muted-foreground/70 leading-relaxed pt-1.5 max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Column — Specializations & Core Strengths (Col span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Specialization Cards */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-foreground tracking-tight pl-2">Core Specialization</h3>
              
              {specs.map((spec, i) => (
                <FadeUp key={spec.title} delay={0.2 + i * 0.1}>
                  <SpecializationCard {...spec} />
                </FadeUp>
              ))}
            </div>

            {/* Core Strengths Glass Card */}
            <FadeUp delay={0.5}>
              <div className="rounded-2xl border border-border/50 bg-surface/40 p-6 backdrop-blur-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Strengths & Priorities</h4>
                <div className="space-y-4">
                  {strengths.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">{item.label}</p>
                        <p className="text-[11px] text-muted-foreground leading-normal font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>

        </div>
      </div>
    </section>
  );
}
