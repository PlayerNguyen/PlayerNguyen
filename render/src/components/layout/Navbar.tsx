import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-sm text-body-sm transition-colors ${
      isActive
        ? "text-ink-strong bg-ink/5"
        : "text-body hover:text-ink hover:bg-ink/5"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-hairline">
        <div className="max-w-content mx-auto px-gutter h-14 flex items-center justify-between">
          <NavLink to="/" className="text-sm font-semibold text-ink-strong tracking-tight">
            Nguyễn Huỳnh Nguyên
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
          </div>

          <button
            className="md:hidden p-2 text-body hover:text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-canvas pt-14 md:hidden">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses} end={link.path === "/"}>
                {t(link.labelKey)}
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-hairline">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
