
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ModeProjetHero } from "@/components/projet/ModeProjetHero";
import { ModeProjetContent } from "@/components/projet/ModeProjetContent";
import Footer from "@/components/shared/Footer";

const ModeProjet = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mode Projet | Portfolio</title>
        <meta name="description" content="Gestion de projet et méthodologie" />
      </Helmet>
      
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
