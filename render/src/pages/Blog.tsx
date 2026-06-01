import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import PageContainer from "@/components/shared/PageContainer";
import SEO from "@/components/shared/SEO";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas flex items-center justify-center">
      <PageContainer>
        <SEO titleKey="blog.title" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <FiClock className="text-6xl text-primary mx-auto mb-6" />
          <h1 className="text-display-lg text-ink-strong mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-body-lg text-body max-w-md mx-auto">
            Coming soon — I'm working on some interesting posts. Stay tuned!
          </p>
        </motion.div>
      </PageContainer>
    </section>
  );
}
