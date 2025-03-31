
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import ModeProjetHero from "@/components/projet/ModeProjetHero";
import { ModeProjetContent } from "@/components/projet/ModeProjetContent";
import Footer from "@/components/shared/Footer";

const ModeProjet = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-background to-background/70">
      <Helmet>
        <title>Mode Projet | Portfolio</title>
        <meta name="description" content="Gestion de projet et méthodologie" />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-10">
        <ModeProjetHero />
        <ModeProjetContent />
      </div>
      
      <Footer />
    </div>
  );
};

export default ModeProjet;
