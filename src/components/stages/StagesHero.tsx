
import { Briefcase } from "lucide-react";

export const StagesHero = () => {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] z-0 opacity-10"></div>
        
        {/* Subtle gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/5 shadow-lg">
              <Briefcase className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium mb-4 tracking-tight animate-fadeIn text-gradient">
            Mes Stages
          </h1>
        </div>
      </div>
    </section>
  );
};
