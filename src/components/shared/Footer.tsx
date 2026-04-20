import { Linkedin, Mail } from "lucide-react";
import { SocialLink } from "./SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
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
          <div className="text-center text-muted-foreground text-sm">
            © {currentYear} Portfolio. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
