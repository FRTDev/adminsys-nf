
import React from "react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center mb-6">
      <div className="mr-3">{icon}</div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  );
};
