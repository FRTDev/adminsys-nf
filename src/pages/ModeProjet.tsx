
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { ModeProjetHero } from "@/components/projet/ModeProjetHero";
import { ModeProjetContent } from "@/components/projet/ModeProjetContent";
import Footer from "@/components/shared/Footer";

const ModeProjet = () => {
  useEffect(() => {
    document.title = "Mode Projet | Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ModeProjetHero />
      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn animation-delay-300">
        <div className="max-w-7xl mx-auto">
          <ModeProjetContent />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ModeProjet;
