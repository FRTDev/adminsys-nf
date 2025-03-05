
import { Code } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="glass p-8 rounded-lg animate-fadeIn text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full glass flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight">
          Noah F.
        </h1>
        <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
          Étudiant en BTS SIO SISR
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/noah-f-b3a500265/"
            className="text-gray-400 hover:text-white transition-colors p-3 glass rounded-full hover:bg-white/15"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:n.froment37@gmail.com"
            className="text-gray-400 hover:text-white transition-colors p-3 glass rounded-full hover:bg-white/15"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
