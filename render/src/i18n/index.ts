import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

async function loadResources() {
  const [en, vi] = await Promise.all([
    fetch("/i18n/en.json").then((r) => r.json()),
    fetch("/i18n/vi.json").then((r) => r.json()),
  ]);

  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        vi: { translation: vi },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    });
}

export const i18nReady = loadResources();

export default i18n;
