
import React from "react";
import { LucideIcon } from "lucide-react";

interface SkillSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

export const SkillSection = ({ title, icon, skills, delay }: SkillSectionProps) => {
  return (
    <div 
      className="glass p-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300 border border-white/5"
            style={{ animationDelay: `${delay + (skillIndex * 50)}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
