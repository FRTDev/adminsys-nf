
import { Code, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "@/components/shared/SocialLink";

const HeroSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="glass p-8 rounded-xl animate-fadeIn text-center shadow-lg border border-white/5 transition-all duration-300 hover:bg-white/10">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full glass flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
            <Code className="w-12 h-12 text-white/80" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-medium text-gradient mb-4 tracking-tight">
          Noah F.
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Étudiant en BTS SIO SISR
        </p>
        
        <div className="flex justify-center space-x-4">
          <SocialLink 
            href="https://www.linkedin.com/in/noah-f-b3a500265/" 
            icon={<Linkedin className="w-5 h-5" />} 
            label="LinkedIn" 
            isExternal
          />
          
          <SocialLink 
            href="mailto:n.froment37@gmail.com" 
            icon={<Mail className="w-5 h-5" />} 
            label="Email" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
