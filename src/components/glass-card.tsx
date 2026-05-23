import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm",
        hover && "transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
