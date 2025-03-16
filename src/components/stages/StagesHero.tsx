
import { Briefcase } from "lucide-react";

export const StagesHero = () => {
  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
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
