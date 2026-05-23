"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("");
    setGlare({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-200 ease-out",
        className
      )}
      style={{ transform }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(139, 92, 246, 0.06), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
