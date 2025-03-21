
import { GraduationCap } from "lucide-react";

export const BtsHero = () => {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-gradient mb-4 tracking-tight">
            BTS SIO
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'état de niveau Bac+2.
            Il propose deux spécialités distinctes : SISR et SLAM.
          </p>
        </div>
      </div>
    </section>
  );
};
