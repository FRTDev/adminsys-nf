
import { Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
              <Shield className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-gradient mb-4 tracking-tight">
            Veille Technologique
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Un guide complet pour suivre et comprendre les vulnérabilités récentes et méthodes d'attaque en cybersécurité
          </p>
          <p className="text-gray-500 mt-4">
            Par Noah F. - 21/02/2025
          </p>
        </div>
      </div>
    </section>
  );
};
