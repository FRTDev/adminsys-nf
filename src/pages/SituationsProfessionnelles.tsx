
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import SituationsHero from "@/components/situations/SituationsHero";
import SituationsContent from "@/components/situations/SituationsContent";

const SituationsProfessionnelles = () => {
  useEffect(() => {
    document.title = "Situations Professionnelles | Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SituationsHero />
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
