import { useTranslation } from "react-i18next";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const { t } = useTranslation();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto px-gutter py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="mailto:nhnguyen.forwork@gmail.com" className="text-body-sm text-body hover:text-ink transition-colors">
              nhnguyen.forwork@gmail.com
            </a>
            <span className="text-mute text-xs">·</span>
            <a href="https://github.com/PlayerNguyen" target="_blank" rel="noopener noreferrer" className="text-body-sm text-body hover:text-ink transition-colors">
              GitHub
            </a>
            <span className="text-mute text-xs">·</span>
            <a href="https://www.linkedin.com/in/okuranguyen/" target="_blank" rel="noopener noreferrer" className="text-body-sm text-body hover:text-ink transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-body-sm text-mute">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <button
              onClick={scrollToTop}
              className="text-body-sm text-body hover:text-ink transition-colors flex items-center gap-1"
            >
              {t("footer.back_to_top")}
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
