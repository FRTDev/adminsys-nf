
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./shared/NavLink";

const NAV_ITEMS = [
  { name: "Accueil", path: "/" },
  { name: "BTS SIO", path: "/bts-sio" },
  { name: "Projets", path: "/projets" },
  { name: "Veille", path: "/veille" },
  { name: "Contact", path: "/contact" },
] as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-white font-semibold text-xl">
                Portfolio
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    isActive={location.pathname === item.path}
                    onClick={handleCloseMenu}
                    isMobile={false}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleToggleMenu}
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-dark animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  isActive={location.pathname === item.path}
                  onClick={handleCloseMenu}
                  isMobile={true}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
