import React from "react";

interface SkillSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

export const SkillSection = ({ title, icon, skills, delay }: SkillSectionProps) => {
  return (
    <div
      className="glass p-5 rounded-xl card-interactive hover-lift transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <span className="mr-2 text-foreground">{icon}</span>
        <h3 className="text-lg font-semibold text-foreground tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-white/[0.06] rounded-full text-sm text-muted-foreground border border-white/[0.08] hover:bg-white/10 hover:text-foreground hover:border-brand/40 transition-all duration-300"
            style={{ animationDelay: `${delay + i * 40}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
