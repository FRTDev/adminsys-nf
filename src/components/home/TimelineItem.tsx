import React from "react";
import { Reveal } from "@/components/shared/Reveal";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay: number;
  link?: string;
}

export const TimelineItem = ({ icon, title, subtitle, description, delay, link }: TimelineItemProps) => {
  const Inner = (
    <div className="glass p-4 sm:p-6 rounded-2xl card-interactive hover-lift transition-all duration-500">
      <h4 className="text-base sm:text-xl font-semibold text-foreground flex items-start gap-2 tracking-tight">
        <span className="shrink-0 mt-1">{icon}</span>
        <span className="break-words">{title}</span>
      </h4>
      <p className="text-sm text-muted-foreground italic mt-1 break-words">{subtitle}</p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-3" />
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  return (
    <Reveal delay={delay}>
      <div className="relative ml-12 sm:ml-16">
        <div className="absolute -left-[2.05rem] sm:-left-[2.65rem] top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand/30 border-2 border-brand/60 z-10 shadow-[0_0_15px_hsl(var(--glow)/0.5)]" />
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            {Inner}
          </a>
        ) : (
          Inner
        )}
      </div>
    </Reveal>
  );
};
