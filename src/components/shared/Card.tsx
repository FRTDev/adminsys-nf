
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
        "glass p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.01] hover:bg-white/15 border border-white/10",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
