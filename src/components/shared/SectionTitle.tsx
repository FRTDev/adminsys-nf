import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const SectionTitle = ({ icon, title, className }: SectionTitleProps) => {
  return (
    <div className={cn("flex items-center mb-8", className)}>
      <div className="relative mr-4">
        <div className="absolute inset-0 rounded-xl bg-brand/20 blur-md opacity-60" />
        <div className="relative p-3 rounded-xl glass-strong border border-white/10">
          {icon}
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold gradient-text tracking-tight">
        {title}
      </h2>
    </div>
  );
};
