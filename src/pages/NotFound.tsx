import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/shared/Footer";
import { NotFoundContent } from "@/components/error/NotFoundContent";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background">
      <Navigation />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="glass p-12 rounded-lg border border-white/10 shadow-lg max-w-md w-full">
          <NotFoundContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
