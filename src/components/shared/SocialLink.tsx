
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
      className="text-gray-400 hover:text-white transition-colors p-2.5 glass rounded-full hover:bg-white/10"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      {icon}
    </a>
  );
};
