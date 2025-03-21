
import { Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Guide de Veille Technologique : Vulnérabilités et Méthodes d'Attaque
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
