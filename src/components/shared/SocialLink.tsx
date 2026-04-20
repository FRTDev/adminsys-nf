import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isExternal?: boolean;
}

export const SocialLink = ({ href, icon, label, isExternal = false }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="group relative text-muted-foreground hover:text-foreground p-3 glass rounded-full hover-lift hover:bg-white/10 transition-all duration-300"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">
        {icon}
      </span>
    </a>
  );
};
