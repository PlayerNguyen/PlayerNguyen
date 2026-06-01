import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

interface SectionLink {
  labelKey: string;
  sectionId: string;
}

interface RouteLink {
  labelKey: string;
  path: string;
}

type NavItem = SectionLink | RouteLink;

const sectionIds = ["hero", "projects", "about"];

const navItems: NavItem[] = [
  { labelKey: "nav.home", sectionId: "hero" } as SectionLink,
  { labelKey: "nav.projects", sectionId: "projects" } as SectionLink,
  { labelKey: "nav.about", sectionId: "about" } as SectionLink,
  { labelKey: "nav.blog", path: "/blog" } as RouteLink,
];

function isSectionLink(item: NavItem): item is SectionLink {
  return "sectionId" in item;
}

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track which section is in view
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (item: NavItem): boolean => {
    if (isSectionLink(item)) {
      return location.pathname === "/" && activeSection === item.sectionId;
    }
    return location.pathname === item.path;
  };

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    if (!isSectionLink(item)) return;
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${item.sectionId}`);
      return;
    }
    const el = document.getElementById(item.sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const renderLink = (item: NavItem) => {
    const active = isActive(item);
    const classes = `px-3 py-2 rounded-sm text-body-sm transition-colors ${
      active ? "text-ink-strong bg-ink/5" : "text-body hover:text-ink hover:bg-ink/5"
    }`;

    if (isSectionLink(item)) {
      return (
        <a
          key={item.sectionId}
          href={`/#${item.sectionId}`}
          onClick={(e) => handleClick(e, item)}
          className={classes}
        >
          {t(item.labelKey)}
        </a>
      );
    }
    return (
      <NavLink key={item.path} to={item.path} className={classes} end>
        {t(item.labelKey)}
      </NavLink>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-sm border-b border-hairline">
        <div className="max-w-content mx-auto px-gutter h-14 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm font-semibold text-ink-strong tracking-tight"
          >
            Nguyễn Huỳnh Nguyên
          </a>

          <nav className="hidden md:flex items-center gap-1">{navItems.map(renderLink)}</nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
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
            {navItems.map(renderLink)}
            <div className="pt-4 mt-4 border-t border-hairline">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
