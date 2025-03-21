
import { User } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const AboutSection = () => {
  return (
    <div className="lg:w-1/2 flex items-center">
      <div className="glass p-8 rounded-lg animate-fadeIn w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <SectionTitle icon={<User className="w-6 h-6 text-white" />} title="À propos de moi" />
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Actuellement en deuxième année de BTS SIO avec une spécialisation en SISR 
          (Solutions d'Infrastructure, Systèmes et Réseaux), je suis passionné par 
          l'administration système et réseau. Mon parcours m'a permis de développer 
          des compétences solides en gestion d'infrastructure IT et en sécurité des 
          systèmes d'information.
        </p>
        
        <div className="mt-4 w-full h-1 bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-full"></div>
      </div>
    </div>
  );
};

export default AboutSection;
