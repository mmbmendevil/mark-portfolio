import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const TechIcons: Record<string, (props: IconProps) => React.ReactNode> = {
  React: (props) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  TypeScript: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#3178c6" rx="15" />
      <text x="90" y="85" fill="#ffffff" fontSize="38" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">
        TS
      </text>
    </svg>
  ),
  "Next.js": (props) => (
    <svg viewBox="0 0 180 180" width="100%" height="100%" {...props}>
      <circle cx="90" cy="90" r="90" fill="#000000" className="dark:fill-white" />
      <path
        d="M149.508 157.52L69.142 54H54v72h12.18V71.82l68.324 88.08c5.204-4.836 9.948-10.236 15.004-15.58zM114 126h12V54h-12v72z"
        fill="#ffffff"
        className="dark:fill-black"
      />
    </svg>
  ),
  Vite: (props) => (
    <svg viewBox="0 0 410 410" width="100%" height="100%" {...props}>
      <defs>
        <linearGradient id="vite-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4158D0" />
          <stop offset="50%" stopColor="#C850C0" />
          <stop offset="100%" stopColor="#FFCC70" />
        </linearGradient>
        <linearGradient id="vite-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8008" />
          <stop offset="100%" stopColor="#FFC837" />
        </linearGradient>
      </defs>
      <path d="M321.39 56.44L205 323.56 88.61 56.44h232.78z" fill="url(#vite-grad-1)" />
      <path d="M228.27 22l-98.39 184h65.81l-47.69 182 179-224h-71.07z" fill="url(#vite-grad-2)" />
    </svg>
  ),
  "Tailwind CSS": (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <path
        d="M25 45c0-8.5 6-13.5 18-15 11 16.5-1.5 25-11 25.5C21.5 56 16.5 66 17 75c0 8.5 6 13.5 18 15 11-16.5-1.5-25-11-25.5 10.5-.5 15.5-10.5 11-19.5z"
        fill="#38bdf8"
      />
      <path
        d="M57 20c0-8.5 6-13.5 18-15 11 16.5-1.5 25-11 25.5C53.5 31 48.5 41 49 50c0 8.5 6 13.5 18 15 11-16.5-1.5-25-11-25.5 10.5-.5 15.5-10.5 11-19.5z"
        fill="#0ea5e9"
      />
    </svg>
  ),
  HTML5: (props) => (
    <svg viewBox="0 0 512 512" width="100%" height="100%" {...props}>
      <path d="M108.4 0h295.2l-26.6 448.2L256 512 135 448.2z" fill="#e34f26" />
      <path d="M256 478v-437h119.4l-22.4 378z" fill="#f16529" />
      <path d="M168 152h176l-6.2 62H168zm0 104h168l-15.6 156-64.4 32-64.4-32-6.2-76h54.8l2.8 30 13 6 13-6 2.8-30H168z" fill="#ffffff" />
    </svg>
  ),
  CSS3: (props) => (
    <svg viewBox="0 0 512 512" width="100%" height="100%" {...props}>
      <path d="M108.4 0h295.2l-26.6 448.2L256 512 135 448.2z" fill="#1572b6" />
      <path d="M256 478v-437h119.4l-22.4 378z" fill="#33a9dc" />
      <path d="M168 152h176l-6.2 62H168zm0 104h168l-15.6 156-64.4 32-64.4-32-6.2-76h54.8l2.8 30 13 6 13-6 2.8-30H168z" fill="#ffffff" />
    </svg>
  ),
  JavaScript: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#f7df1e" rx="15" />
      <text x="85" y="85" fill="#000000" fontSize="38" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">
        JS
      </text>
    </svg>
  ),
  "Node.js": (props) => (
    <svg viewBox="0 0 256 256" width="100%" height="100%" {...props}>
      <path d="M128 0L24 60v120l104 60 104-60V60z" fill="#339933" />
      <path d="M128 20v216l86-50V70z" fill="#43853d" />
      <path d="M128 75v106l-46-27V102z" fill="#ffffff" />
    </svg>
  ),
  "Express.js": (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#2d3748" rx="15" />
      <text x="50" y="60" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
        ex
      </text>
    </svg>
  ),
  Firebase: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <path d="M18.8 77.2L50 8l31.2 69.2L50 92z" fill="#ffa611" />
      <path d="M50 8l31.2 69.2L50 92z" fill="#f58220" />
      <path d="M50 28.5L68 62.4z" fill="#f25c22" />
    </svg>
  ),
  MongoDB: (props) => (
    <svg viewBox="0 0 256 256" width="100%" height="100%" {...props}>
      <path d="M174.5 124.2c-5.8-21.7-18-47.3-33-72.3-4.5-7.5-9.3-15-13.5-21.9-4.2 6.9-9 14.4-13.5 21.9-15 25-27.2 50.6-33 72.3-7.5 28-3 51 12 67.5 11.2 12.3 24.3 18.3 34.5 20.3v30c0 4.5 3.5 8 8 8s8-3.5 8-8v-30c10.2-2 23.3-8 34.5-20.3 15-16.5 19.5-39.5 12-67.5z" fill="#47a248" />
      <path d="M128 30v210c4.5-.8 9-2.2 13-4.5 9-5.2 16.5-12.8 21.5-22.3 12-22.5 14-49.5 8-77-5.8-26.2-18-54-33.5-81.2l-9-25z" fill="#589636" />
      <path d="M128 75c-4.2-10-8.5-20-12.5-30-2.5 15-6 30-10.5 45v45h23z" fill="#ffffff" opacity="0.2" />
    </svg>
  ),
  MySQL: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#00758f" rx="15" />
      <path d="M50 18c-12 0-21 9-21 21 0 18 21 43 21 43s21-25 21-43c0-12-9-21-21-21zm0 30c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" fill="#f29111" />
    </svg>
  ),
  Kotlin: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <defs>
        <linearGradient id="kot-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0095D5" />
          <stop offset="50%" stopColor="#806EE3" />
          <stop offset="100%" stopColor="#E2445C" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#kot-grad)" rx="15" />
      <path d="M15 15h35L15 50zm70 0H50L15 50v35zm0 70V50L50 85z" fill="#ffffff" opacity="0.15" />
    </svg>
  ),
  "Android Studio": (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#3ddc84" rx="15" />
      <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm-8 45l-8-8 8-8 8 8-8 8zm16 0l-8-8 8-8 8 8-8 8z" fill="#073042" />
    </svg>
  ),
  Git: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#f05032" rx="15" />
      <path d="M65 35L35 65M35 35l12.5 12.5M65 65L52.5 52.5" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
      <circle cx="35" cy="35" r="8" fill="#ffffff" />
      <circle cx="65" cy="35" r="8" fill="#ffffff" />
      <circle cx="35" cy="65" r="8" fill="#ffffff" />
      <circle cx="65" cy="65" r="8" fill="#ffffff" />
    </svg>
  ),
  GitHub: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#181717" rx="15" />
      <path
        d="M50 15c-19.3 0-35 15.7-35 35 0 15.5 10 28.6 24 33.3 1.8.3 2.4-.8 2.4-1.7 0-.8 0-3.1-.1-6.1-9.7 2.1-11.8-4.7-11.8-4.7-1.6-4-3.9-5-3.9-5-3.2-2.2.2-2.2.2-2.2 3.5.2 5.4 3.6 5.4 3.6 3.1 5.3 8.2 3.8 10.2 2.9.3-2.3 1.2-3.8 2.2-4.7-7.8-.9-15.9-3.9-15.9-17.3 0-3.8 1.4-6.9 3.6-9.3-.4-.9-1.6-4.4.3-9.1 0 0 2.9-.9 9.6 3.6 2.8-.8 5.7-1.2 8.7-1.2s5.9.4 8.7 1.2c6.7-4.5 9.6-3.6 9.6-3.6 1.9 4.7.7 8.2.3 9.1 2.2 2.4 3.6 5.5 3.6 9.3 0 13.4-8.2 16.4-15.9 17.2 1.2 1.1 2.4 3.2 2.4 6.5 0 4.7-.1 8.5-.1 9.6 0 .9.6 2 2.4 1.7 14-4.7 24-17.8 24-33.3 0-19.3-15.7-35-35-35z"
        fill="#ffffff"
      />
    </svg>
  ),
  "VS Code": (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#007acc" rx="15" />
      <path d="M25 35l15-15 35 30-35 30-15-15z" fill="#ffffff" opacity="0.2" />
      <path d="M75 50L40 20v60z" fill="#ffffff" opacity="0.3" />
      <path d="M25 35l25 15-25 15z" fill="#ffffff" />
    </svg>
  ),
  Figma: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#1e1e1e" rx="15" />
      <circle cx="40" cy="30" r="12" fill="#f24e1e" />
      <circle cx="60" cy="30" r="12" fill="#ff7262" />
      <circle cx="60" cy="50" r="12" fill="#1abc9c" />
      <circle cx="40" cy="50" r="12" fill="#a259ff" />
      <path d="M40 70c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12c-6.6 0-12-5.4-12-12z" fill="#0acf83" />
      <circle cx="40" cy="70" r="12" fill="#0acf83" />
    </svg>
  ),
  Postman: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#ff6c37" rx="15" />
      <path d="M30 70l20-40 20 40H30z" fill="#ffffff" />
      <circle cx="50" cy="45" r="8" fill="#ff6c37" />
    </svg>
  ),
  Vercel: (props) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" {...props}>
      <rect width="100" height="100" fill="#000000" className="dark:fill-white" rx="15" />
      <path d="M50 25L80 75H20Z" fill="#ffffff" className="dark:fill-black" />
    </svg>
  ),
  "Adaptive Learning Systems": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 4.5V20" />
    </svg>
  ),
  "Bayesian Knowledge Tracing": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="20" x2="18" y2="16" />
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="6" y1="20" x2="6" y2="4" />
      <path d="M4 20h16" />
      <path d="M6 4c6 0 9 6 12 12" strokeDasharray="3 3" />
    </svg>
  ),
  "Item Response Theory": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 18c3-1 6-5 9-9 3-4 6-6 9-6" />
      <path d="M3 21h18" />
      <path d="M3 3v18" />
      <circle cx="12" cy="9" r="2" fill="currentColor" />
    </svg>
  ),
  "Cognitive Diagnostic Models": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" fillOpacity="0.05" />
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  "Personalized Learning Sequence": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.05" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
    </svg>
  ),
  "Computerized Adaptive Testing": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
};
