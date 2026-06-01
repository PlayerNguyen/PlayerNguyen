import { useTranslation } from "react-i18next";
import { FiArrowUp } from "react-icons/fi";
import SocialLinks from "@/components/shared/SocialLinks";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const { t } = useTranslation();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <SocialLinks links={socialLinks} size="sm" />

          <p className="text-sm text-zinc-500">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            aria-label={t("footer.back_to_top")}
          >
            {t("footer.back_to_top")}
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
