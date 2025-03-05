
import { Linkedin, Mail } from "lucide-react";
import { SocialLink } from "./SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-dark py-8 mt-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
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
        
        <div className="mt-4 text-center text-gray-400 text-sm">
          © {currentYear} Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
