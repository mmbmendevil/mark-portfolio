"use client";

import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/data/tech-stack";
import { TechIcons } from "@/components/tech-icons";

const glowColors: Record<string, string> = {
  React: "group-hover/item:border-cyan-500/30 group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover/item:bg-cyan-500/[0.02]",
  TypeScript: "group-hover/item:border-blue-500/30 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover/item:bg-blue-500/[0.02]",
  "Next.js": "group-hover/item:border-neutral-500/30 group-hover/item:shadow-[0_0_15px_rgba(115,115,115,0.15)] group-hover/item:bg-neutral-500/[0.02]",
  Vite: "group-hover/item:border-purple-500/30 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover/item:bg-purple-500/[0.02]",
  "Tailwind CSS": "group-hover/item:border-sky-400/30 group-hover/item:shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover/item:bg-sky-400/[0.02]",
  HTML5: "group-hover/item:border-orange-500/30 group-hover/item:shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover/item:bg-orange-500/[0.02]",
  CSS3: "group-hover/item:border-blue-600/30 group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.15)] group-hover/item:bg-blue-600/[0.02]",
  JavaScript: "group-hover/item:border-yellow-500/30 group-hover/item:shadow-[0_0_15px_rgba(234,179,8,0.15)] group-hover/item:bg-yellow-500/[0.02]",
  "Node.js": "group-hover/item:border-green-500/30 group-hover/item:shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover/item:bg-green-500/[0.02]",
  "Express.js": "group-hover/item:border-gray-400/30 group-hover/item:shadow-[0_0_15px_rgba(156,163,175,0.15)] group-hover/item:bg-gray-400/[0.02]",
  Firebase: "group-hover/item:border-amber-500/30 group-hover/item:shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover/item:bg-amber-500/[0.02]",
  MongoDB: "group-hover/item:border-emerald-600/30 group-hover/item:shadow-[0_0_15px_rgba(5,150,105,0.15)] group-hover/item:bg-emerald-600/[0.02]",
  MySQL: "group-hover/item:border-cyan-600/30 group-hover/item:shadow-[0_0_15px_rgba(8,145,178,0.15)] group-hover/item:bg-cyan-600/[0.02]",
  Kotlin: "group-hover/item:border-violet-600/30 group-hover/item:shadow-[0_0_15px_rgba(124,58,237,0.15)] group-hover/item:bg-violet-600/[0.02]",
  "Android Studio": "group-hover/item:border-emerald-400/30 group-hover/item:shadow-[0_0_15px_rgba(52,211,153,0.15)] group-hover/item:bg-emerald-400/[0.02]",
  Git: "group-hover/item:border-red-500/30 group-hover/item:shadow-[0_0_15px_rgba(239,68,68,0.15)] group-hover/item:bg-red-500/[0.02]",
  GitHub: "group-hover/item:border-neutral-400/30 group-hover/item:shadow-[0_0_15px_rgba(163,163,163,0.15)] group-hover/item:bg-neutral-400/[0.02]",
  "VS Code": "group-hover/item:border-blue-500/30 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover/item:bg-blue-500/[0.02]",
  Figma: "group-hover/item:border-pink-500/30 group-hover/item:shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover/item:bg-pink-500/[0.02]",
  Postman: "group-hover/item:border-orange-500/30 group-hover/item:shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover/item:bg-orange-500/[0.02]",
  Vercel: "group-hover/item:border-neutral-500/30 group-hover/item:shadow-[0_0_15px_rgba(115,115,115,0.15)] group-hover/item:bg-neutral-500/[0.02]",
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Tech Stack" subtitle="A curated collection of modern technologies and methodologies I specialize in." />

        <div className="flex flex-col gap-6 mt-16">
          
          {/* ════ 1. FEATURED AI SECTION (Full Width) ════ */}
          <FadeUp>
            <div className="group/panel relative overflow-hidden rounded-[2rem] border border-border/40 bg-surface/30 p-8 sm:p-10 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-primary/30 hover:bg-surface/50 hover:shadow-md">
              <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none transition-opacity duration-500 group-hover/panel:opacity-100 opacity-50" />
              
              <div className="mb-8 max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    Research & AI Specialization
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                  </h3>
                </div>
                <p className="text-[15px] text-muted-foreground/90 font-medium leading-relaxed">
                  Advanced AI learning and assessment models. Designing educational platforms that adapt dynamically to cognitive patterns.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack.find((cat) => cat.title === "Research & AI Specialization")?.items.map((tech) => {
                  const Icon = TechIcons[tech.icon];
                  return (
                    <div key={tech.name} className="group/item relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-black/20 dark:bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.04] hover:shadow-[0_8px_24px_-8px_rgba(124,58,237,0.2)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/40 shadow-sm transition-colors duration-300 group-hover/item:border-primary/30 group-hover/item:bg-primary/10 text-foreground/70 group-hover/item:text-primary">
                          {Icon ? <Icon className="h-5 w-5 object-contain" /> : <span>🧠</span>}
                        </div>
                        <h4 className="text-sm font-bold text-foreground/90 transition-colors group-hover/item:text-foreground">
                          {tech.name}
                        </h4>
                      </div>
                      <p className="text-[11px] font-medium leading-relaxed text-muted-foreground/80">
                        {tech.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeUp>

          {/* ════ 2. FRONTEND & BACKEND (2 Columns) ════ */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Frontend */}
            <FadeUp delay={0.1}>
              <div className="group/panel h-full rounded-[2rem] border border-border/40 bg-surface/30 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-foreground/10 hover:bg-surface/50">
                <div className="mb-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-1.5">Frontend Systems</h3>
                  <p className="text-sm text-muted-foreground/80 font-medium">Crafting scalable and performant interfaces.</p>
                </div>
                <div className="grid gap-3 grid-cols-2">
                  {techStack.find((cat) => cat.title === "Frontend")?.items.map((tech) => {
                    const Icon = TechIcons[tech.icon];
                    const glowClass = glowColors[tech.icon] || "group-hover/item:border-primary/20 group-hover/item:shadow-sm group-hover/item:bg-primary/[0.02]";
                    return (
                      <div key={tech.name} className={`group/item flex items-center gap-3.5 rounded-2xl border border-white/5 bg-black/[0.03] dark:bg-white/[0.02] p-3 transition-all duration-300 hover:scale-[1.02] ${glowClass}`}>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/40 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover/item:scale-105">
                          {Icon ? <Icon className="h-5 w-5 object-contain" /> : <span>⚛️</span>}
                        </div>
                        <span className="text-xs font-bold text-foreground/80 transition-colors group-hover/item:text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            {/* Backend */}
            <FadeUp delay={0.15}>
              <div className="group/panel h-full rounded-[2rem] border border-border/40 bg-surface/30 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-foreground/10 hover:bg-surface/50">
                <div className="mb-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-1.5">Backend Infrastructure</h3>
                  <p className="text-sm text-muted-foreground/80 font-medium">Building reliable APIs and server architectures.</p>
                </div>
                <div className="grid gap-3 grid-cols-2">
                  {techStack.find((cat) => cat.title === "Backend")?.items.map((tech) => {
                    const Icon = TechIcons[tech.icon];
                    const glowClass = glowColors[tech.icon] || "group-hover/item:border-primary/20 group-hover/item:shadow-sm group-hover/item:bg-primary/[0.02]";
                    return (
                      <div key={tech.name} className={`group/item flex items-center gap-3.5 rounded-2xl border border-white/5 bg-black/[0.03] dark:bg-white/[0.02] p-3 transition-all duration-300 hover:scale-[1.02] ${glowClass}`}>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/40 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover/item:scale-105">
                          {Icon ? <Icon className="h-5 w-5 object-contain" /> : <span>🟢</span>}
                        </div>
                        <span className="text-xs font-bold text-foreground/80 transition-colors group-hover/item:text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ════ 3. MOBILE & TOOLS (2 Columns) ════ */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mobile */}
            <FadeUp delay={0.2}>
              <div className="group/panel h-full rounded-[2rem] border border-border/40 bg-surface/30 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-foreground/10 hover:bg-surface/50">
                <div className="mb-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-1.5">Mobile Ecosystem</h3>
                  <p className="text-sm text-muted-foreground/80 font-medium">Native apps with offline-first capabilities.</p>
                </div>
                <div className="grid gap-3 grid-cols-2">
                  {techStack.find((cat) => cat.title === "Mobile")?.items.map((tech) => {
                    const Icon = TechIcons[tech.icon];
                    const glowClass = glowColors[tech.icon] || "group-hover/item:border-primary/20 group-hover/item:shadow-sm group-hover/item:bg-primary/[0.02]";
                    return (
                      <div key={tech.name} className={`group/item flex items-center gap-3.5 rounded-2xl border border-white/5 bg-black/[0.03] dark:bg-white/[0.02] p-3 transition-all duration-300 hover:scale-[1.02] ${glowClass}`}>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface border border-border/40 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover/item:scale-105">
                          {Icon ? <Icon className="h-5 w-5 object-contain" /> : <span>📱</span>}
                        </div>
                        <span className="text-xs font-bold text-foreground/80 transition-colors group-hover/item:text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            {/* Tools */}
            <FadeUp delay={0.25}>
              <div className="group/panel h-full rounded-[2rem] border border-border/40 bg-surface/30 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-foreground/10 hover:bg-surface/50">
                <div className="mb-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-1.5">Development Workflow</h3>
                  <p className="text-sm text-muted-foreground/80 font-medium">Modern tooling for rapid iteration.</p>
                </div>
                <div className="grid gap-3 grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                  {techStack.find((cat) => cat.title === "Tools")?.items.map((tech) => {
                    const Icon = TechIcons[tech.icon];
                    const glowClass = glowColors[tech.icon] || "group-hover/item:border-primary/20 group-hover/item:shadow-sm group-hover/item:bg-primary/[0.02]";
                    return (
                      <div key={tech.name} className={`group/item flex h-12 w-full items-center justify-center rounded-xl border border-white/5 bg-black/[0.03] dark:bg-white/[0.02] p-2.5 transition-all duration-300 hover:-translate-y-0.5 ${glowClass}`} title={tech.name}>
                        <div className="flex h-full w-full items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                          {Icon ? <Icon className="h-full w-full object-contain" /> : <span>🛠️</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
