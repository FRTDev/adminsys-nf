
import { User } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const AboutSection = () => {
  return (
    <div className="lg:w-1/2 flex items-center">
      <div className="glass p-8 rounded-lg animate-fadeIn w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <SectionTitle icon={<User className="w-6 h-6 text-white" />} title="À propos de moi" />
        
        <p className="text-lg text-gray-300 leading-relaxed">
          Diplômé d'un BTS SIO spécialité SISR (Solutions d'Infrastructure, Systèmes 
          et Réseaux), je poursuis actuellement un DEC en Techniques de l'informatique 
          au Cégep de La Pocatière au Canada. Passionné par l'administration système 
          et réseau, mon parcours m'a permis de développer des compétences solides en 
          gestion d'infrastructure IT et en sécurité des systèmes d'information.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
