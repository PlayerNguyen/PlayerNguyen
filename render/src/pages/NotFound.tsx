import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/shared/SEO";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <SEO titleKey="not_found.title" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">
          {t("not_found.title")}
        </h2>
        <p className="text-zinc-400 mb-8">
          {t("not_found.message")}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
        >
          {t("not_found.back_home")}
        </Link>
      </motion.div>
    </section>
  );
}
