import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/shared/SEO";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas flex items-center justify-center">
      <SEO titleKey="not_found.title" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-display-xl text-primary font-mono mb-4">
          404
        </h1>
        <h2 className="text-display-md text-ink-strong mb-4">
          {t("not_found.title")}
        </h2>
        <p className="text-body-lg text-body mb-8">
          {t("not_found.message")}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-primary text-canvas font-sans text-button-md border border-primary transition-all duration-200 active:scale-[0.98]"
        >
          {t("not_found.back_home")}
        </Link>
      </motion.div>
    </section>
  );
}
