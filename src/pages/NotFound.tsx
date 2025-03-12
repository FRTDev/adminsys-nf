
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/shared/Footer";
import { NotFoundContent } from "@/components/error/NotFoundContent";

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
        <NotFoundContent />
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
