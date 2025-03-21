
import { Briefcase, GraduationCap } from "lucide-react";

export const StagesHero = () => {
  return (
    <section className="relative pt-28 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] z-0 opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-10 flex justify-center">
            <div className="group w-28 h-28 rounded-full glass flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg transition-all duration-500 hover:shadow-purple-500/20 hover:border-white/20 overflow-hidden">
              <div className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Briefcase className="w-14 h-14 text-white group-hover:opacity-0 absolute inset-0 m-auto transition-opacity duration-300" />
                <GraduationCap className="w-14 h-14 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tight animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-200">
              Mes Stages
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slideInUp">
            Découvrez mes expériences professionnelles dans le cadre de mon BTS SIO SISR.
          </p>
        </div>
      </div>
    </section>
  );
};
