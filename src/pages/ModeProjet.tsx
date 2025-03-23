
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { ModeProjetHero } from "@/components/projet/ModeProjetHero";
import ModeProjetContent from "@/components/projet/ModeProjetContent";

const ModeProjet = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <ModeProjetHero />

      {/* Content Section */}
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
