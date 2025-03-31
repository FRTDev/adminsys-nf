
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import SituationsHero from "@/components/situations/SituationsHero";
import SituationsContent from "@/components/situations/SituationsContent";
import { Helmet } from "react-helmet";

const SituationsProfessionnelles = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Situations Professionnelles | Portfolio</title>
        <meta name="description" content="Mes situations professionnelles durant le BTS SIO" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <SituationsHero />

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn animation-delay-300">
        <div className="max-w-7xl mx-auto">
          <SituationsContent />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SituationsProfessionnelles;
