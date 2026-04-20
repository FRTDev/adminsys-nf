import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./shared/NavLink";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Accueil", path: "/" },
  { name: "BTS SIO", path: "/bts-sio" },
  { name: "Situations Pro.", path: "/situations-professionnelles" },
  { name: "Stages", path: "/stages" },
  { name: "Mode Projet", path: "/mode-projet" },
  { name: "Veille", path: "/veille" },
  { name: "Contact", path: "/contact" },
] as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "glass-dark shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="group text-foreground font-semibold text-lg tracking-tight flex items-center gap-2"
          >
            <span className="relative">
              <span className="absolute inset-0 bg-brand/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative">Portfolio</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                isActive={location.pathname === item.path}
                isMobile={false}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out glass-dark",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-3 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsOpen(false)}
              isMobile
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
