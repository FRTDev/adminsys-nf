
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-dark py-8 mt-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/noah-f-b3a500265/"
            className="text-gray-400 hover:text-white transition-colors p-3 glass-dark rounded-full hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:n.froment37@gmail.com"
            className="text-gray-400 hover:text-white transition-colors p-3 glass-dark rounded-full hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
