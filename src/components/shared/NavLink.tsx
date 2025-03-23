
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
  const baseClasses = isMobile
    ? "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
    : "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300";
    
  const activeClasses = "text-white bg-white/10 shadow-sm";
  const inactiveClasses = "text-gray-300 hover:text-white hover:bg-white/5";
  
  return (
    <Link
      to={to}
      className={cn(
        baseClasses,
        isActive ? activeClasses : inactiveClasses
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
