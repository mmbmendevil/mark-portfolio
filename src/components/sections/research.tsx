"use client";

import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";
import { researchTopics } from "@/data/research-topics";
import { ArrowUpRight } from "lucide-react";

// ─── SVG Diagrams ─────────────────────────────────────────────────────────────

function AdaptiveSystemsDiagram() {
  return (
    <svg viewBox="0 0 300 150" className="w-full h-full" fill="none">
      <defs>
        <marker id="als-a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 2 L 8 5 L 0 8 z" fill="currentColor" />
        </marker>
        <radialGradient id="als-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Engine Glow */}
      <circle cx="150" cy="65" r="36" fill="url(#als-g)" stroke="none" />

      {/* Learner Node */}
      <circle cx="42" cy="75" r="24" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <text x="42" y="71" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.65" textAnchor="middle" stroke="none">Learner</text>
      <text x="42" y="82" fontSize="6.5" fill="currentColor" fillOpacity="0.35" textAnchor="middle" stroke="none">Input</text>

      {/* Engine Node */}
      <circle cx="150" cy="65" r="28" fill="currentColor" fillOpacity="0.05" stroke="#7c3aed" strokeOpacity="0.45" strokeWidth="1.5" />
      <text x="150" y="61" fontSize="8.5" fontWeight="700" fill="#7c3aed" fillOpacity="0.9" textAnchor="middle" stroke="none">Adaptive</text>
      <text x="150" y="73" fontSize="8.5" fontWeight="700" fill="#7c3aed" fillOpacity="0.9" textAnchor="middle" stroke="none">Engine</text>

      {/* Content Node */}
      <circle cx="258" cy="75" r="24" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <text x="258" y="71" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.65" textAnchor="middle" stroke="none">Content</text>
      <text x="258" y="82" fontSize="6.5" fill="currentColor" fillOpacity="0.35" textAnchor="middle" stroke="none">Output</text>

      {/* Forward paths */}
      <path d="M 65 66 Q 105 50 123 58" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" markerEnd="url(#als-a)" fill="none" />
      <path d="M 177 58 Q 207 50 235 67" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" markerEnd="url(#als-a)" fill="none" />

      {/* Feedback path */}
      <path d="M 236 88 Q 194 118 155 105 Q 116 118 64 90" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#als-a)" fill="none" />
      <text x="150" y="124" fontSize="6.5" fill="currentColor" fillOpacity="0.3" textAnchor="middle" stroke="none">Continuous Feedback Loop</text>

      {/* CAT label badge */}
      <rect x="108" y="26" width="84" height="16" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.2" strokeWidth="1" />
      <text x="150" y="37" fontSize="6.5" fontWeight="700" fill="#7c3aed" fillOpacity="0.7" textAnchor="middle" stroke="none">CAT-Driven Progression</text>

      {/* Pulse dot */}
      <circle cx="150" cy="65" r="5" fill="#7c3aed" fillOpacity="0.5" className="animate-ping" stroke="none" />
      <circle cx="150" cy="65" r="3" fill="#7c3aed" stroke="none" />

      {/* Mini bars */}
      <rect x="10" y="114" width="64" height="3" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="none" />
      <rect x="10" y="114" width="42" height="3" rx="1.5" fill="#7c3aed" fillOpacity="0.45" stroke="none" />
      <text x="10" y="126" fontSize="6" fill="currentColor" fillOpacity="0.3" stroke="none">Engagement 66%</text>

      <rect x="226" y="114" width="64" height="3" rx="1.5" fill="currentColor" fillOpacity="0.06" stroke="none" />
      <rect x="226" y="114" width="52" height="3" rx="1.5" fill="#10b981" fillOpacity="0.45" stroke="none" />
      <text x="226" y="126" fontSize="6" fill="currentColor" fillOpacity="0.3" stroke="none">Retention 81%</text>
    </svg>
  );
}

function BKTDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
      <defs>
        <marker id="bkt-a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 2 L 8 5 L 0 8 z" fill="currentColor" />
        </marker>
      </defs>

      {/* L(t-1) */}
      <rect x="14" y="24" width="62" height="34" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <text x="45" y="38" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.65" textAnchor="middle" stroke="none">Knowledge</text>
      <text x="45" y="50" fontSize="7" fill="currentColor" fillOpacity="0.38" textAnchor="middle" stroke="none">L(t−1)</text>

      {/* L(t) */}
      <rect x="164" y="24" width="62" height="34" rx="8" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <text x="195" y="38" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.65" textAnchor="middle" stroke="none">Knowledge</text>
      <text x="195" y="50" fontSize="7" fill="currentColor" fillOpacity="0.38" textAnchor="middle" stroke="none">L(t)</text>

      {/* Transition */}
      <path d="M 76 41 L 164 41" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.3" markerEnd="url(#bkt-a)" />
      <text x="120" y="35" fontSize="7" fill="currentColor" fillOpacity="0.45" textAnchor="middle" stroke="none">p(T) — Learn</text>

      {/* Response node */}
      <circle cx="120" cy="106" r="20" fill="currentColor" fillOpacity="0.04" stroke="#7c3aed" strokeOpacity="0.38" strokeWidth="1.3" />
      <text x="120" y="103" fontSize="7.5" fontWeight="600" fill="currentColor" fillOpacity="0.65" textAnchor="middle" stroke="none">Response</text>
      <text x="120" y="114" fontSize="7" fill="currentColor" fillOpacity="0.38" textAnchor="middle" stroke="none">O(t)</text>

      {/* Pulse ring */}
      <circle cx="120" cy="106" r="25" fill="none" stroke="#7c3aed" strokeOpacity="0.15" strokeWidth="1" className="animate-ping" />

      {/* Emission arrows */}
      <path d="M 45 58 Q 62 82 102 93" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#bkt-a)" />
      <path d="M 195 58 Q 178 82 138 93" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#bkt-a)" />

      <text x="58" y="80" fontSize="6.5" fill="currentColor" fillOpacity="0.35" textAnchor="middle" stroke="none">p(S) Slip</text>
      <text x="182" y="80" fontSize="6.5" fill="currentColor" fillOpacity="0.35" textAnchor="middle" stroke="none">p(G) Guess</text>

      {/* Pulse dot on L(t) */}
      <circle cx="195" cy="41" r="3.5" fill="#7c3aed" stroke="none" className="animate-ping" fillOpacity="0.5" />
      <circle cx="195" cy="41" r="2" fill="#7c3aed" stroke="none" />
    </svg>
  );
}

function IRTDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="irt-c" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Axes */}
      <line x1="28" y1="112" x2="212" y2="112" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="28" y1="20" x2="28" y2="112" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />

      {/* Tick marks */}
      {[70, 112, 154, 196].map(x => (
        <line key={x} x1={x} y1="112" x2={x} y2="116" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      ))}

      {/* ICC Curve */}
      <path d="M 28 108 C 70 108 115 96 128 76 C 141 54 160 30 212 26"
        stroke="url(#irt-c)" strokeWidth="2.2" fill="none" />

      {/* Difficulty drop line */}
      <line x1="128" y1="112" x2="128" y2="76" stroke="#7c3aed" strokeOpacity="0.38" strokeDasharray="3 2" strokeWidth="1" />

      {/* Key inflection point */}
      <circle cx="128" cy="76" r="4.5" fill="#7c3aed" stroke="none" />
      <circle cx="128" cy="76" r="9" fill="#7c3aed" fillOpacity="0.2" stroke="none" className="animate-ping" />

      {/* Annotations */}
      <text x="212" y="122" fontSize="7" fill="currentColor" fillOpacity="0.38" textAnchor="middle" stroke="none">Ability θ →</text>
      <text x="20" y="18" fontSize="7" fill="currentColor" fillOpacity="0.38" textAnchor="middle" stroke="none">P(θ)</text>
      <text x="128" y="126" fontSize="6.5" fill="currentColor" fillOpacity="0.35" textAnchor="middle" stroke="none">b = difficulty</text>

      {/* Discrimination slope indicator */}
      <path d="M 100 94 L 154 58" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 2" />
      <text x="164" y="54" fontSize="6.5" fill="currentColor" fillOpacity="0.32" stroke="none">a = slope</text>

      {/* Ability range brackets */}
      <text x="60" y="126" fontSize="6" fill="currentColor" fillOpacity="0.28" textAnchor="middle" stroke="none">Low θ</text>
      <text x="185" y="126" fontSize="6" fill="currentColor" fillOpacity="0.28" textAnchor="middle" stroke="none">High θ</text>

      {/* CAT label */}
      <rect x="60" y="16" width="74" height="14" rx="7" fill="#7c3aed" fillOpacity="0.07" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" />
      <text x="97" y="26" fontSize="6.5" fontWeight="700" fill="#7c3aed" fillOpacity="0.65" textAnchor="middle" stroke="none">Adaptive Testing</text>
    </svg>
  );
}

function CDMDiagram() {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
      {/* Matrix border */}
      <rect x="22" y="20" width="196" height="98" rx="10" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* Column dividers */}
      <line x1="87" y1="20" x2="87" y2="118" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="152" y1="20" x2="152" y2="118" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* Row dividers */}
      <line x1="22" y1="48" x2="218" y2="48" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="22" y1="76" x2="218" y2="76" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="22" y1="104" x2="218" y2="104" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* Header row */}
      <text x="55" y="14" fontSize="7" fontWeight="600" fill="currentColor" fillOpacity="0.4" textAnchor="middle" stroke="none">Skill α₁</text>
      <text x="120" y="14" fontSize="7" fontWeight="600" fill="currentColor" fillOpacity="0.4" textAnchor="middle" stroke="none">Skill α₂</text>
      <text x="185" y="14" fontSize="7" fontWeight="600" fill="currentColor" fillOpacity="0.4" textAnchor="middle" stroke="none">Skill α₃</text>

      {/* Row labels */}
      <text x="16" y="37" fontSize="6.5" fill="currentColor" fillOpacity="0.32" textAnchor="end" stroke="none">Item 1</text>
      <text x="16" y="65" fontSize="6.5" fill="currentColor" fillOpacity="0.32" textAnchor="end" stroke="none">Item 2</text>
      <text x="16" y="93" fontSize="6.5" fill="currentColor" fillOpacity="0.32" textAnchor="end" stroke="none">Item 3</text>

      {/* Row 1 */}
      <circle cx="55" cy="34" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />
      <circle cx="120" cy="34" r="5.5" fill="#ef4444" fillOpacity="0.55" stroke="none" />
      <circle cx="185" cy="34" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />

      {/* Row 2 — highlighted (active) */}
      <rect x="23" y="49" width="194" height="26" rx="4" fill="#7c3aed" fillOpacity="0.04" stroke="none" />
      <circle cx="55" cy="62" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />
      <circle cx="120" cy="62" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />
      <circle cx="185" cy="62" r="5.5" fill="#ef4444" fillOpacity="0.55" stroke="none" />
      {/* Highlight border on active row */}
      <rect x="23" y="49" width="194" height="26" rx="4" fill="none" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" />

      {/* Row 3 */}
      <circle cx="55" cy="90" r="5.5" fill="#ef4444" fillOpacity="0.55" stroke="none" />
      <circle cx="120" cy="90" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />
      <circle cx="185" cy="90" r="5.5" fill="#10b981" fillOpacity="0.65" stroke="none" />

      {/* Legend */}
      <circle cx="50" cy="126" r="4" fill="#10b981" fillOpacity="0.65" stroke="none" />
      <text x="59" y="130" fontSize="6.5" fill="currentColor" fillOpacity="0.32" stroke="none">Mastered</text>
      <circle cx="118" cy="126" r="4" fill="#ef4444" fillOpacity="0.55" stroke="none" />
      <text x="127" y="130" fontSize="6.5" fill="currentColor" fillOpacity="0.32" stroke="none">Not Mastered</text>
    </svg>
  );
}

function PLSDiagram() {
  return (
    <svg viewBox="0 0 300 130" className="w-full h-full" fill="none">
      <defs>
        <marker id="pls-a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 2 L 8 5 L 0 8 z" fill="currentColor" />
        </marker>
        <radialGradient id="pls-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Goal node glow */}
      <circle cx="262" cy="65" r="30" fill="url(#pls-g)" stroke="none" />

      {/* Start */}
      <circle cx="24" cy="65" r="11" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
      <text x="24" y="69" fontSize="9" fontWeight="700" fill="currentColor" fillOpacity="0.6" textAnchor="middle" stroke="none">S</text>

      {/* Mid A */}
      <circle cx="98" cy="35" r="11" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
      <text x="98" y="39" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.6" textAnchor="middle" stroke="none">A1</text>
      <circle cx="98" cy="95" r="11" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <text x="98" y="99" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.45" textAnchor="middle" stroke="none">A2</text>

      {/* Mid B */}
      <circle cx="180" cy="35" r="11" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2" />
      <text x="180" y="39" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.6" textAnchor="middle" stroke="none">B1</text>
      <circle cx="180" cy="95" r="11" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <text x="180" y="99" fontSize="8" fontWeight="600" fill="currentColor" fillOpacity="0.45" textAnchor="middle" stroke="none">B2</text>

      {/* Goal */}
      <circle cx="262" cy="65" r="14" fill="#7c3aed" fillOpacity="0.12" stroke="#7c3aed" strokeOpacity="0.55" strokeWidth="1.5" />
      <text x="262" y="69" fontSize="9" fontWeight="700" fill="#7c3aed" fillOpacity="0.9" textAnchor="middle" stroke="none">G</text>
      <circle cx="262" cy="65" r="19" fill="none" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" className="animate-ping" />

      {/* Inactive paths */}
      <path d="M 34 70 L 87 92" stroke="currentColor" strokeOpacity="0.13" strokeDasharray="3 2" strokeWidth="1" markerEnd="url(#pls-a)" />
      <path d="M 109 92 L 169 92" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1" markerEnd="url(#pls-a)" />
      <path d="M 191 90 L 250 72" stroke="currentColor" strokeOpacity="0.13" strokeWidth="1" markerEnd="url(#pls-a)" />

      {/* Active optimal path */}
      <path d="M 34 59 L 87 38" stroke="#7c3aed" strokeOpacity="0.55" strokeWidth="2" markerEnd="url(#pls-a)" />
      <path d="M 109 35 L 169 35" stroke="#7c3aed" strokeOpacity="0.55" strokeWidth="2" markerEnd="url(#pls-a)" />
      <path d="M 191 42 L 249 58" stroke="#7c3aed" strokeOpacity="0.55" strokeWidth="2" markerEnd="url(#pls-a)" />

      {/* Glow rings on active nodes */}
      <circle cx="98" cy="35" r="15" fill="none" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="180" cy="35" r="15" fill="none" stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" />

      <text x="150" y="122" fontSize="6.5" fill="currentColor" fillOpacity="0.28" textAnchor="middle" stroke="none">Precision-Optimal Path to Mastery</text>
    </svg>
  );
}

// ─── Shared Card ──────────────────────────────────────────────────────────────

interface CardProps {
  topic: { title: string; badge: string; description: string; tags: string[] };
  graphHeight?: string;
  titleSize?: string;
  descSize?: string;
  horizontal?: boolean;
  featured?: boolean;
}

function ResearchCard({ topic, graphHeight = "h-40", titleSize = "text-xl", descSize = "text-[13px]", horizontal = false, featured = false }: CardProps) {
  const diagrams: Record<string, React.ReactNode> = {
    "Adaptive Learning Systems": <AdaptiveSystemsDiagram />,
    "Bayesian Knowledge Tracing": <BKTDiagram />,
    "Item Response Theory": <IRTDiagram />,
    "Cognitive Diagnostic Models": <CDMDiagram />,
    "Personalized Learning Sequence": <PLSDiagram />,
  };

  return (
    <div className={`group relative h-full overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:border-primary/10 dark:hover:border-primary/[0.12] ${featured ? "bg-white/60 dark:bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.2)]" : "bg-white/45 dark:bg-white/[0.028] shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.15)]"} ${horizontal ? "flex flex-col sm:flex-row items-center gap-0 sm:gap-0 p-0" : "flex flex-col p-7"}`}>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-primary/[0.1]" />

      {horizontal ? (
        <>
          {/* Graph panel */}
          <div className={`relative shrink-0 flex items-center justify-center text-primary/60 dark:text-primary/50 w-full sm:w-[42%] ${graphHeight} p-6 transition-transform duration-500 group-hover:scale-[1.01]`}>
            {diagrams[topic.title]}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-black/5 dark:bg-white/5 my-6" />

          {/* Content panel */}
          <div className="flex flex-col flex-1 min-w-0 p-7">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/[0.08] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                {topic.badge}
              </span>
              <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-70" />
            </div>
            <h3 className={`font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary mb-2 ${titleSize}`}>
              {topic.title}
            </h3>
            <p className={`leading-relaxed text-muted-foreground/70 font-medium ${descSize}`}>
              {topic.description}
            </p>
            {topic.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-black/[0.05] dark:border-white/[0.05]">
                {topic.tags.map(t => (
                  <span key={t} className="rounded-md border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.03] dark:bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground/80 transition-colors group-hover:text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Graph */}
          <div className={`relative flex items-center justify-center text-primary/60 dark:text-primary/50 w-full ${graphHeight} mb-6 transition-transform duration-500 group-hover:scale-[1.01]`}>
            {diagrams[topic.title]}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/[0.08] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                {topic.badge}
              </span>
              <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-70" />
            </div>
            <h3 className={`font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary mb-2 ${titleSize}`}>
              {topic.title}
            </h3>
            <p className={`leading-relaxed text-muted-foreground/70 font-medium ${descSize}`}>
              {topic.description}
            </p>
            {topic.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-black/[0.05] dark:border-white/[0.05] mt-5">
                {topic.tags.map(t => (
                  <span key={t} className="rounded-md border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.03] dark:bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground/80 transition-colors group-hover:text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ResearchSection() {
  const byTitle = Object.fromEntries(researchTopics.map(t => [t.title, t]));
  const als = byTitle["Adaptive Learning Systems"];
  const bkt = byTitle["Bayesian Knowledge Tracing"];
  const irt = byTitle["Item Response Theory"];
  const cdm = byTitle["Cognitive Diagnostic Models"];
  const pls = byTitle["Personalized Learning Sequence"];

  return (
    <section id="research" className="relative px-6 py-24 sm:py-32 overflow-hidden">

      {/* ── Atmospheric Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Radial blooms */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/[0.045] blur-[130px]" />
        <div className="absolute right-0 bottom-1/3 h-[350px] w-[350px] rounded-full bg-violet-400/[0.02] blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-500/[0.02] blur-[90px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeading
          title="AI Specialization & Research"
          subtitle="Advanced AI research showcase – adaptive learning, psychometrics, and computational intelligence."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* ── Row 1: three balanced cards ── */}
          <FadeUp delay={0} className="col-span-1 lg:col-span-4">
            <ResearchCard
              topic={als}
              graphHeight="h-56"
              titleSize="text-2xl"
              descSize="text-[14px]"
              featured
            />
          </FadeUp>

          <FadeUp delay={0.1} className="col-span-1 lg:col-span-4">
            <ResearchCard
              topic={bkt}
              graphHeight="h-48"
              titleSize="text-xl"
              descSize="text-[13px]"
            />
          </FadeUp>

          <FadeUp delay={0.2} className="col-span-1 lg:col-span-4">
            <ResearchCard
              topic={irt}
              graphHeight="h-44"
              titleSize="text-xl"
              descSize="text-[13px]"
            />
          </FadeUp>

          {/* ── Row 2: two wider cards ── */}
          <FadeUp delay={0.3} className="col-span-1 lg:col-span-6">
            <ResearchCard
              topic={cdm}
              graphHeight="h-48"
              titleSize="text-xl"
              descSize="text-[13px]"
              horizontal
            />
          </FadeUp>

          <FadeUp delay={0.4} className="col-span-1 lg:col-span-6">
            <ResearchCard
              topic={pls}
              graphHeight="h-48"
              titleSize="text-xl"
              descSize="text-[14px]"
              horizontal
            />
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
