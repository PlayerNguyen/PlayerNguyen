import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const next = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(next);
  }

  const current = i18n.language;

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-sm text-body-sm text-body hover:text-ink border border-hairline hover:border-ink transition-colors"
      aria-label="Switch language"
    >
      {current === "en" ? "VI" : "EN"}
    </button>
  );
}
