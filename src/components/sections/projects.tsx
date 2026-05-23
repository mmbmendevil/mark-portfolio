"use client";

import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { ExternalLink, Check, Smartphone, Monitor } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

interface DeviceFrameProps {
  type: "mobile" | "browser";
  src: string;
  alt: string;
}

function DeviceMockup({ type, src, alt }: DeviceFrameProps) {
  // Since the uploaded images are already pre-rendered promotional mockups (containing their own device frames/graphics),
  // we remove the artificial CSS phone notches and browser headers.
  // We instead wrap them in a premium, floating glassmorphism presentation.

  const isMobile = type === "mobile";

  return (
    <div 
      className={`relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-surface shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)] group/mockup ${
        isMobile ? "max-w-sm mx-auto aspect-[4/5]" : "aspect-[16/10]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover scale-100 group-hover/mockup:scale-[1.02] transition-transform duration-1000 ease-out ${
          isMobile ? "object-center" : "object-top"
        }`}
        sizes={isMobile ? "(max-w-768px) 100vw, 400px" : "(max-w-1024px) 100vw, 600px"}
        priority
      />
      {/* Subtle Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32 bg-white/[0.01]">
      {/* Refined Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[30%] h-[600px] w-[600px] rounded-full bg-primary/[0.02] blur-[140px]" />
        <div className="absolute right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.02] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading title="Featured Showcase" subtitle="Real-world products engineered for scale, usability, and adaptive intelligence." />

        <div className="mt-24 space-y-32 sm:space-y-40">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const isMobile = project.title.toLowerCase().includes("app") || project.title.toLowerCase().includes("mate");
            
            return (
              <div 
                key={project.title}
                className={`flex flex-col gap-12 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Visual Side (Dominant Mockup - 55%) */}
                <div className="w-full lg:w-[55%] flex justify-center">
                  <FadeUp delay={0.1} className="w-full flex justify-center">
                    <div className="relative w-full max-w-2xl group transition-all duration-700 hover:-translate-y-2">
                      {/* Premium Ambient Glow Behind Mockup */}
                      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-primary/10 to-blue-500/10 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
                      
                      <DeviceMockup
                        type={isMobile ? "mobile" : "browser"}
                        src={project.image || "/cempls.png"}
                        alt={project.title}
                      />
                    </div>
                  </FadeUp>
                </div>

                {/* Content Side (Details / Specs - 45%) */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <FadeUp delay={0.2} className="space-y-8">
                    
                    {/* Header Group */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                          {isMobile ? <Smartphone className="h-3.5 w-3.5" /> : <Monitor className="h-3.5 w-3.5" />}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                          {isMobile ? "Mobile Application Case Study" : "Web Platform Case Study"}
                        </span>
                      </div>

                      <h3 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                        {project.metadata}
                      </p>
                    </div>

                    {/* Problem / Solution Structure */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Challenge</h4>
                        <p className="text-[15px] leading-relaxed text-muted-foreground/80 font-medium">
                          {project.challenge}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Solution</h4>
                        <p className="text-[15px] leading-relaxed text-foreground/90 font-medium">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Innovations */}
                    <div className="space-y-3 pt-2 border-t border-border/40">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground mt-6">Key Innovations</h4>
                      <ul className="grid gap-2.5 sm:grid-cols-1 text-sm text-muted-foreground/90 font-medium">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 border border-primary/20">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Premium Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1.5 text-[11px] font-semibold text-foreground/80 shadow-sm backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4 pt-4">
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-[13px] font-bold text-background transition-all hover:scale-105 active:scale-95 shadow-md shadow-foreground/5"
                      >
                        <GitHubLogoIcon className="h-4 w-4" /> Source Code
                      </Link>
                      
                      {project.demo !== undefined && (
                        project.demoDisabled ? (
                          <span className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-6 text-[13px] font-semibold text-muted-foreground/50 select-none">
                            Demo Offline
                          </span>
                        ) : (
                          <Link 
                            href={project.demo} 
                            target="_blank" 
                            className="inline-flex h-11 items-center gap-2 rounded-full border border-border/60 bg-surface/40 hover:bg-surface px-6 text-[13px] font-bold text-foreground transition-all hover:scale-105 active:scale-95 shadow-sm backdrop-blur-sm"
                          >
                            <ExternalLink className="h-4 w-4 text-muted-foreground" /> Live Demo
                          </Link>
                        )
                      )}
                    </div>

                  </FadeUp>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
