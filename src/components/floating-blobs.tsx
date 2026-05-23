"use client";

export function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 -top-40 h-80 w-80 animate-blob rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -right-40 -top-20 h-80 w-80 animate-blob animation-delay-2000 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/2 h-80 w-80 animate-blob animation-delay-4000 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}
