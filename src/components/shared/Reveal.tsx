import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal = ({ children, delay = 0, className, as: Tag = "div" }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};
