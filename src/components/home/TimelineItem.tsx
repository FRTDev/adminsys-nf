
import React from "react";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay: number;
  link?: string;
}

export const TimelineItem = ({ icon, title, subtitle, description, delay, link }: TimelineItemProps) => {
  const CardContent = () => (
    <>
      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <p className="text-sm text-gray-400 italic">{subtitle}</p>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
      <p className="text-base text-gray-300">{description}</p>
    </>
  );

  if (link) {
    return (
      <div 
        className="relative ml-16 animate-fadeIn" 
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/15 border border-white/10 cursor-pointer">
            <CardContent />
          </div>
        </a>
      </div>
    );
  }

  return (
    <div 
      className="relative ml-16 animate-fadeIn" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -left-20 top-3 w-4 h-4 rounded-full bg-white/20 border-2 border-white/40 z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
      <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/15 border border-white/10">
        <CardContent />
      </div>
    </div>
  );
};
