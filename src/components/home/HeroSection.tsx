
import { Code } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="glass p-8 rounded-lg animate-fadeIn text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full glass flex items-center justify-center">
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Noah F.
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Étudiant en BTS SIO SISR
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/noah-f-b3a500265/"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:n.froment37@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
