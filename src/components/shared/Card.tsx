import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "default" | "interactive" | "feature";
}

export const Card = ({ children, delay = 0, className, variant = "default" }: CardProps) => {
  return (
    <div
      className={cn(
        "glass p-6 rounded-2xl transition-all duration-500",
        variant === "interactive" && "card-interactive hover-lift",
        variant === "feature" && "glass-strong hover-glow",
        variant === "default" && "hover:bg-white/[0.06]",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
