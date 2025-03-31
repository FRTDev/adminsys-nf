
import React from "react";

interface SituationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export const SituationCard: React.FC<SituationCardProps> = ({
  title,
  description,
  icon,
  link
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
};
