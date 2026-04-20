import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/shared/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const BtsSio = lazy(() => import("./pages/BtsSio"));
const SituationsProfessionnelles = lazy(() => import("./pages/SituationsProfessionnelles"));
const Stages = lazy(() => import("./pages/Stages"));
const ModeProjet = lazy(() => import("./pages/ModeProjet"));
const Veille = lazy(() => import("./pages/Veille"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-brand animate-spin" />
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
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
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
