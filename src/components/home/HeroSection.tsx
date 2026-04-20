import { Code, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "@/components/shared/SocialLink";

const HeroSection = () => {
  return (
    <div className="lg:w-1/2">
      <div className="glass-strong p-8 sm:p-10 rounded-2xl text-center hover-glow transition-all duration-500 animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Conic ring */}
            <div className="absolute -inset-1 rounded-full opacity-70" style={{
              background: "conic-gradient(from 0deg, hsl(var(--brand) / 0.6), transparent 35%, transparent 65%, hsl(var(--brand) / 0.6))",
              animation: "spin-slow 10s linear infinite",
            }} />
            <div className="absolute inset-0 rounded-full bg-brand/30 blur-2xl animate-glow-pulse" />
            <div className="relative w-32 h-32 rounded-full glass-strong flex items-center justify-center">
              <Code className="w-14 h-14 text-foreground" />
            </div>
          </div>
        </div>

        <h1 className="text-display font-bold text-shimmer mb-4">
          Noah F.
        </h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Étudiant en DEC Technique de l'informatique
        </p>

        <div className="flex justify-center gap-3">
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
