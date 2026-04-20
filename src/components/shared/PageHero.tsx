import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHero = ({ icon, title, subtitle, className }: PageHeroProps) => {
  return (
    <section className={cn("relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden", className)}>
      {/* Ambient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand/10 blur-3xl animate-aurora opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand/5 blur-3xl animate-pulse opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center animate-fade-in-scale">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-2xl animate-glow-pulse" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full glass-strong flex items-center justify-center hover-glow transition-transform duration-500 hover:scale-110">
              <div className="text-foreground [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12">
                {icon}
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-hero font-bold mb-5 tracking-tight animate-fade-in-up">
          <span className="text-shimmer">{title}</span>
        </h1>

        {subtitle && (
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "150ms", opacity: 0, animationFillMode: "forwards" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
