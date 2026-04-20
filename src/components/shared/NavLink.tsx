import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  isMobile: boolean;
}

export const NavLink = ({ to, children, isActive, onClick, isMobile }: NavLinkProps) => {
  if (isMobile) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          "block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300",
          isActive
            ? "text-foreground bg-white/10"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-300 group",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      <span
        className={cn(
          "absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-foreground to-transparent transition-all duration-300 origin-center",
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
        )}
      />
    </Link>
  );
};
