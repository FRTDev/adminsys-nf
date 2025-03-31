
import React from "react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const SectionTitle = ({ icon, title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`flex items-center mb-6 ${className}`}>
      <div className="mr-3 p-3 rounded-full bg-white/5 border border-white/10">{icon}</div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  );
};
