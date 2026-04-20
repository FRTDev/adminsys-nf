import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotFoundContent = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-brand/20 blur-xl animate-glow-pulse" />
          <div className="relative w-20 h-20 rounded-full glass-strong flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-foreground" />
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 text-shimmer">404</h1>

      <p className="text-lg text-muted-foreground mb-8">Cette page n'existe pas</p>

      <Link to="/">
        <Button variant="outline" className="btn-shine border-white/20 hover:bg-white/10 hover:border-brand/40">
          Retour à l'accueil
        </Button>
      </Link>
    </div>
  );
};
