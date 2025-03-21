
import React from "react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-3 p-2 rounded-full bg-black/20 border border-white/5">{icon}</div>
      <h2 className="text-2xl font-medium text-gradient">
        {title}
      </h2>
    </div>
  );
};
