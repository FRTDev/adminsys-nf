
import { Code, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "@/components/shared/SocialLink";

const HeroSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="glass p-8 rounded-lg animate-fadeIn text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full glass flex items-center justify-center shadow-lg relative bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight">
          Noah F.
        </h1>
        
        <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
          Étudiant en DEC Technique de l'informatique  
        </p>
        
        <div className="flex justify-center space-x-4">
          <SocialLink
            href="https://www.linkedin.com/in/noah-f-b3a500265/"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            isExternal />
          
          
          <SocialLink
            href="mailto:n.froment37@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email" />
          
        </div>
      </div>
    </div>);

};

export default HeroSection;