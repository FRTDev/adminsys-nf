
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Card = ({ children, delay = 0, className }: CardProps) => {
  return (
    <div 
      className={cn(
        "glass p-6 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 border border-white/5",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
