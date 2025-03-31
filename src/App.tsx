
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BtsSio from "./pages/BtsSio";
import SituationsProfessionnelles from "./pages/SituationsProfessionnelles";
import Stages from "./pages/Stages";
import ModeProjet from "./pages/ModeProjet";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/shared/ScrollToTop";

// Créer une instance du QueryClient
const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bts-sio" element={<BtsSio />} />
        <Route path="/situations-professionnelles" element={<SituationsProfessionnelles />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/mode-projet" element={<ModeProjet />} />
        <Route path="/veille" element={<Veille />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
