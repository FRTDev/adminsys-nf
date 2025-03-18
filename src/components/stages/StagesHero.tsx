
import { Briefcase } from "lucide-react";

export const StagesHero = () => {
  return (
    <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] z-0 opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/10">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Mes Stages
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes expériences professionnelles dans le cadre de mon BTS SIO SISR.
            Ces stages représentent des étapes cruciales dans mon parcours de formation.
          </p>
        </div>
      </div>
    </section>
  );
};
