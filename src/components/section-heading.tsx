"use client";

import { FadeUp } from "./fade-up";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <FadeUp className="mb-14 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 opacity-90" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground/90 font-medium">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
