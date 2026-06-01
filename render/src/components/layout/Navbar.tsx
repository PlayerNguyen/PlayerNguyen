import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { labelKey: "nav.home", path: "/" },
  { labelKey: "nav.projects", path: "/projects" },
  { labelKey: "nav.about", path: "/about" },
  { labelKey: "nav.blog", path: "/blog" },
  { labelKey: "nav.contact", path: "/contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "text-white bg-zinc-700/50"
        : "text-zinc-400 hover:text-white hover:bg-zinc-700/30"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Player Nguyen
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses} end={link.path === "/"}>
                {t(link.labelKey)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-900/98 backdrop-blur-sm border-t border-zinc-800">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses} end={link.path === "/"}>
                {t(link.labelKey)}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800 mt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
