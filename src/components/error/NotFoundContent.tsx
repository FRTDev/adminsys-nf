
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotFoundContent = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full glass flex items-center justify-center bg-white/5 border border-white/10">
          <AlertCircle className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
        404
      </h1>
      
      <p className="text-xl text-gray-400 mb-8">
        Cette page n'existe pas
      </p>
      
      <Link to="/">
        <Button variant="outline" className="border-white/20 hover:bg-white/10">
          Retour à l'accueil
        </Button>
      </Link>
    </div>
  );
};
