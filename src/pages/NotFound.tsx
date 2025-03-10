
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/shared/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-400 mb-4">Cette page n'existe pas</p>
          <a href="/" className="text-blue-500 hover:text-blue-400 underline">
            Retour à l'accueil
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
