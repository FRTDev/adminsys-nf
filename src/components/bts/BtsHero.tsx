
import { GraduationCap } from "lucide-react";

export const BtsHero = () => {
  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            BTS SIO
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l'état de niveau Bac+2.
            Il propose deux spécialités distinctes : SISR et SLAM.
          </p>
        </div>
      </div>
    </section>
  );
};
