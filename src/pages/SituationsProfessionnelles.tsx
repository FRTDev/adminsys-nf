
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import SituationsHero from "@/components/situations/SituationsHero";
import SituationsContent from "@/components/situations/SituationsContent";
import Footer from "@/components/shared/Footer";

const SituationsProfessionnelles = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-background to-background/70">
      <Helmet>
        <title>Situations Professionnelles | Portfolio</title>
        <meta name="description" content="Mes situations professionnelles durant le BTS SIO" />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-10">
        <SituationsHero />
        <SituationsContent />
      </div>
      
      <Footer />
    </div>
  );
};

export default SituationsProfessionnelles;
