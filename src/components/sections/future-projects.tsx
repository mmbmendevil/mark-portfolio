"use client";

import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";

// Data definition for future products
interface FutureProduct {
  title: string;
  description: string;
  tags: string[];
  status: string; // e.g., "Building in Public"
}

// Three premium flagship startup products
const futureProducts: FutureProduct[] = [
  {
    title: "AI Caption Generator",
    description: "AI‑powered caption platform that crafts engaging social‑media copy with real‑time NLP generation and adaptive tone controls.",
    tags: ["NLP", "AI Content", "Caption Intelligence", "Social Media AI"],
    status: "Building in Public",
  },
  {
    title: "OnlyFunds",
    description: "Student‑first fintech dashboard that visualises budgeting, savings analytics and personal finance goals with a calm green‑blue aesthetic.",
    tags: ["FinTech", "Budget Tracking", "Student Finance", "Analytics"],
    status: "In Active Development",
  },
  {
    title: "PulseChat",
    description: "Realtime collaboration suite with live typing indicators, presence avatars and websocket‑driven messaging built for modern teams.",
    tags: ["Realtime", "Messaging", "WebSockets", "Collaboration"],
    status: "MVP in Progress",
  },
];

// Minimalist AI Copy Prompt Mockup for AI Caption Generator
function AICaptionMockup() {
  return (
    <div className="relative w-full h-full bg-[#070E1B] overflow-hidden flex flex-col justify-between p-5 select-none font-sans">
      {/* Background Neon Glowing Spot */}
      <div className="absolute top-1/3 left-1/3 h-36 w-36 rounded-full bg-purple-500/[0.08] blur-[40px]" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Header bar */}
      <div className="relative flex items-center justify-between border-b border-white/5 pb-3 z-10">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <span className="text-[9px] font-bold tracking-widest text-purple-400 uppercase bg-purple-500/5 border border-purple-500/10 px-2.5 py-0.5 rounded-full">
          AI Engine Active
        </span>
      </div>

      {/* Primary visual UI editor element */}
      <div className="relative flex-1 flex flex-col justify-center gap-3.5 z-10 py-2">
        {/* Minimal prompt bar */}
        <div className="flex items-center justify-between bg-white/[0.02] border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2 max-w-[70%]">
            <span className="text-[10px] text-purple-400 font-bold">✨ AI:</span>
            <span className="text-[9px] text-slate-400 truncate">Write a thread about developer flow...</span>
          </div>
          <span className="text-[8px] font-bold text-white uppercase bg-purple-600 px-2 py-1 rounded-md shadow-lg shadow-purple-500/10">
            Generate
          </span>
        </div>

        {/* Output simulator */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 backdrop-blur-sm flex flex-col gap-2">
          {/* Skeleton copy blocks */}
          <div className="w-full h-1.5 bg-slate-700/40 rounded-full" />
          <div className="w-[85%] h-1.5 bg-slate-700/40 rounded-full" />
          <div className="w-[92%] h-1.5 bg-slate-700/40 rounded-full flex items-center">
            <span className="animate-pulse bg-purple-400 w-1 h-3 ml-1 rounded-full shadow-[0_0_8px_#c084fc]" />
          </div>
        </div>
      </div>

      {/* Clean Bottom status */}
      <div className="relative border-t border-white/5 pt-2 flex items-center justify-between z-10 text-[8px] font-semibold text-slate-500 uppercase tracking-widest">
        <span>NLP Engine V2</span>
        <span className="text-purple-400/80"># Content Automation</span>
      </div>
    </div>
  );
}

// Calm, Minimalist Finance Screen Mockup for OnlyFunds
function OnlyFundsMockup() {
  return (
    <div className="relative w-full h-full bg-[#060C16] overflow-hidden flex flex-col justify-between p-5 select-none font-sans">
      {/* Background Neon Glowing Spot */}
      <div className="absolute bottom-1/3 right-1/3 h-36 w-36 rounded-full bg-emerald-500/[0.06] blur-[40px]" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Header bar */}
      <div className="relative flex items-center justify-between border-b border-white/5 pb-3 z-10">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-0.5 rounded-full">
          Secure Live Sync
        </span>
      </div>

      {/* Single focal analytics chart element */}
      <div className="relative flex-1 flex flex-col justify-center gap-3 z-10 py-1">
        <div className="flex items-baseline justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Total Budget Remaining</span>
            <span className="text-2xl font-bold tracking-tight text-white">$12,450.00</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            +14.8%
          </span>
        </div>

        {/* Dynamic clean SVG sparkline */}
        <div className="w-full h-12 flex items-end">
          <svg className="w-full h-10 text-emerald-500/80" viewBox="0 0 100 30" fill="none">
            <path d="M0,25 Q15,20 30,10 T60,18 T90,5 L100,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0,25 Q15,20 30,10 T60,18 T90,5 L100,2 L100,30 L0,30 Z" fill="url(#emerald-glow)" opacity="0.1" />
            <defs>
              <linearGradient id="emerald-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(16,185,129)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Minimal progress tracker */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-wide">
            <span>Savings Target Reach</span>
            <span>82%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[82%]" />
          </div>
        </div>
      </div>

      {/* Clean Bottom status */}
      <div className="relative border-t border-white/5 pt-2 flex items-center justify-between z-10 text-[8px] font-semibold text-slate-500 uppercase tracking-widest">
        <span>Student Finance Hub</span>
        <span className="text-emerald-400/80"># Smart Budgeting</span>
      </div>
    </div>
  );
}

// Slack/Discord/Linear Hybrid Minimalist Messaging Mockup for PulseChat
function PulseChatMockup() {
  return (
    <div className="relative w-full h-full bg-[#070E1B] overflow-hidden flex flex-col justify-between p-5 select-none font-sans">
      {/* Background Neon Glowing Spot */}
      <div className="absolute top-1/4 left-1/4 h-36 w-36 rounded-full bg-cyan-500/[0.06] blur-[40px]" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Header bar */}
      <div className="relative flex items-center justify-between border-b border-white/5 pb-3 z-10">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <span className="text-[9px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-0.5 rounded-full">
          WS Connected
        </span>
      </div>

      {/* Hyper-clean conversation thread */}
      <div className="relative flex-1 flex flex-col justify-end gap-3 z-10 py-1">
        {/* Simplified User Message Card */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3 flex gap-2.5 items-start backdrop-blur-md">
          {/* Avatar sphere */}
          <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex-shrink-0 flex items-center justify-center text-[9px] font-black text-white">
            MA
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#070E1B]" />
          </div>
          
          <div className="flex flex-col gap-0.5 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-slate-200">mark_sys</span>
              <span className="text-[7px] text-slate-500">Live Sync</span>
            </div>
            <p className="text-[9.5px] text-slate-300 leading-snug font-medium">
              WebSocket sync is online. Latency is sub-10ms. ⚡
            </p>
          </div>
        </div>

        {/* Subtle Typing indicators */}
        <div className="flex items-center gap-2 px-1">
          <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider">alex is typing</span>
          <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded-full">
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Clean Bottom status */}
      <div className="relative border-t border-white/5 pt-2 flex items-center justify-between z-10 text-[8px] font-semibold text-slate-500 uppercase tracking-widest">
        <span>Collab-Core V1</span>
        <span className="text-cyan-400/80"># Realtime Engine</span>
      </div>
    </div>
  );
}

// Reusable card component with premium glassmorphism & micro‑interactions
function ProductCard({ product }: { product: FutureProduct }) {
  const containerClasses = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:bg-surface hover:shadow-[0_18px_45px_rgba(124,58,237,0.12)] dark:border-white/5 dark:bg-black/40 dark:hover:bg-white/[0.04] dark:hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]`;
  
  const statusPill = (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[11px] font-semibold text-primary transition-all duration-300 group-hover:bg-primary/20 backdrop-blur-md">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
      </span>
      {product.status}
    </span>
  );

  return (
    <FadeUp delay={0.1} className="h-full">
      <div className={containerClasses}>
        {/* Glow spotlight background */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Image / Live UI Graphic Mockup */}
        <div className="relative w-full aspect-[16/10] min-h-[220px] sm:min-h-[260px] overflow-hidden rounded-t-2xl bg-muted/20 border-b border-border/60 dark:border-white/5">
          {product.title === "AI Caption Generator" ? (
            <AICaptionMockup />
          ) : product.title === "OnlyFunds" ? (
            <OnlyFundsMockup />
          ) : (
            <PulseChatMockup />
          )}
          {/* Edge shadow and dark bottom fade to make title pop and blend with the dark themed card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Content Box */}
        <div className="relative flex flex-col flex-1 p-6 z-20 font-sans">
          <div className="flex items-center justify-between mb-4">
            {statusPill}
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-1">
            {product.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[10px] font-semibold text-muted-foreground shadow-sm backdrop-blur-md transition-colors group-hover:border-primary/25 group-hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button Row */}
          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 font-medium dark:border-white/5">
            <span className="text-xs text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
              Pipeline Case Study
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary-light transition-all duration-300">
              Explore Roadmap
              <svg className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function FutureProjectsSection() {
  return (
    <section id="future-projects" className="relative bg-background px-6 py-24 sm:py-32">
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px] dark:bg-primary/5" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px] dark:bg-purple-200/5" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10 font-sans">
        <SectionHeading
          title="Future Product Pipeline"
          subtitle="Roadmap of ambitious AI, fintech and realtime solutions in development."
        />

        {/* 3-Column Premium Startup Grid Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {futureProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
