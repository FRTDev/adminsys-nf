
import { BookText } from "lucide-react";

const SituationsHero = () => {
  return (
    <div className="mb-8 animate-fadeIn">
      <div className="glass p-8 rounded-lg border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="p-4 rounded-full bg-white/5 border border-white/10">
            <BookText className="w-10 h-10 text-white" />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-2">
              Situations Professionnelles
            </h1>
            <p className="text-gray-400 max-w-3xl animate-fadeIn opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              Analyse détaillée des situations professionnelles significatives réalisées durant ma formation. Ces travaux illustrent les compétences acquises et les projets concrets menés en entreprise et en formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SituationsHero;
