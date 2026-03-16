import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
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
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
