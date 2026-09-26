import ContactForm from "@/components/sections/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-section-y px-gutter bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto">
        <SectionHeading titleKey="contact.title" subtitleKey="contact.subtitle" />

        <div className="grid md:grid-cols-5 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
