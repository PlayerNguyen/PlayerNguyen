import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/shared/SocialLinks";
import { socialLinks } from "@/data/social";
import ContactForm from "@/sections/ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen pt-20 pb-20 px-gutter bg-canvas">
      <div className="max-w-content mx-auto">
        <SEO titleKey="contact.title" description="Contact Nguyễn Huỳnh Nguyên" />
        <SectionHeading titleKey="contact.title" subtitleKey="contact.subtitle" />

        <div className="grid md:grid-cols-5 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="bg-canvas border border-hairline rounded-md p-6">
              <h3 className="text-display-sm text-ink-strong mb-4">{t("contact.info_title")}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nhnguyen.forwork@gmail.com"
                  className="flex items-center gap-3 text-body hover:text-ink transition-colors"
                >
                  <FiMail className="text-primary" />
                  nhnguyen.forwork@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-canvas border border-hairline rounded-md p-6">
              <h3 className="text-display-sm text-ink-strong mb-4">{t("contact.social_title")}</h3>
              <SocialLinks links={socialLinks} size="lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
