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
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors border border-zinc-600"
      aria-label="Switch language"
    >
      {current === "en" ? "VI" : "EN"}
    </button>
  );
}
