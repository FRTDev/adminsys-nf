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
    <div className="glass p-6 rounded-2xl card-interactive hover-lift transition-all duration-500">
      <h4 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2 tracking-tight">
        {icon}
        {title}
      </h4>
      <p className="text-sm text-muted-foreground italic mt-1">{subtitle}</p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-3" />
      <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  return (
    <Reveal delay={delay}>
      <div className="relative ml-16">
        <div className="absolute -left-[4.4rem] top-4 w-4 h-4 rounded-full bg-brand/30 border-2 border-brand/60 z-10 shadow-[0_0_15px_hsl(var(--glow)/0.5)]" />
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
