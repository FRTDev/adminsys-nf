
import { BookText } from "lucide-react";

const SituationsHero = () => {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          <div className="mb-8 flex justify-center">
            <div className="group w-24 h-24 rounded-full glass flex items-center justify-center backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg">
              <div className="relative transition-all duration-500 group-hover:scale-110">
                <BookText className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Situations Professionnelles
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
            Documentation des situations professionnelles réalisées durant ma formation BTS SIO. Ces travaux illustrent les compétences techniques acquises et les projets concrets réalisés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SituationsHero;
