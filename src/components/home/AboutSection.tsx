import { User } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const AboutSection = () => {
  return (
    <div className="lg:w-1/2 flex items-center">
      <div className="glass p-6 sm:p-10 rounded-2xl w-full hover-lift transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "120ms", opacity: 0, animationFillMode: "forwards" }}>
        <SectionTitle icon={<User className="w-6 h-6 text-foreground" />} title="À propos de moi" />

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Après un BTS SIO SISR et un DEC en Techniques de l'informatique au Canada,
          je poursuis mon parcours en <span className="text-foreground font-medium">Bachelor 3 Cybersécurité à l'École 2600</span>,
          orienté Red Team avec une forte appétence pour l'<span className="text-foreground font-medium">OSINT, le Forensic et les CTF</span>.
          Je m'intéresse particulièrement à la sécurisation des systèmes et des réseaux,
          à l'administration des infrastructures IT et aux bonnes pratiques de hardening.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
          Curieux, rigoureux et motivé, je suis actuellement{" "}
          <span className="text-foreground font-medium">en recherche d'une alternance d'un an en cybersécurité</span>{" "}
          (Tours ou Île-de-France) pour la rentrée 2026-2027.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
