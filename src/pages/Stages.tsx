
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { StagesHero } from "@/components/stages/StagesHero";
import StagesContent from "@/components/stages/StagesContent";
import { Briefcase } from "lucide-react";

const Stages = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <StagesHero />

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-slideInUp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              <span className="flex items-center justify-center gap-2">
                <Briefcase className="h-6 w-6" />
                <span>Expériences Professionnelles</span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Découvrez mes stages et expériences professionnelles qui ont façonné mon parcours en BTS SIO SISR.
            </p>
          </div>
          <StagesContent />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stages;
