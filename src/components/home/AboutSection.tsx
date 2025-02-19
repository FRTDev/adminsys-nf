
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="lg:w-1/2 flex items-center">
      <div className="glass p-8 rounded-lg animate-fadeIn w-full">
        <div className="flex items-center mb-6">
          <User className="w-6 h-6 text-white mr-3" />
          <h2 className="text-2xl font-bold text-white">À propos de moi</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Actuellement en deuxième année de BTS SIO avec une spécialisation en SISR (Solutions d'Infrastructure, Systèmes et Réseaux), 
          je suis passionné par l'administration système et réseau. Mon parcours m'a permis de développer des compétences solides 
          en gestion d'infrastructure IT et en sécurité des systèmes d'information.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
