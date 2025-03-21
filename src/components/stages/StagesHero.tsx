
import { Briefcase } from "lucide-react";

export const StagesHero = () => {
  return (
    <section className="relative pt-24 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] z-0 opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="w-28 h-28 rounded-full glass flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Briefcase className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
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
