import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/shared/SocialLinks";
import { socialLinks } from "@/data/social";
import ContactForm from "@/sections/ContactForm";

export default function Contact() {

  return (
    <section className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SEO titleKey="contact.title" description="Contact Player Nguyen" />
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
            <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nhnguyen.forwork@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <FiMail className="text-purple-400" />
                  nhnguyen.forwork@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
              <SocialLinks links={socialLinks} size="lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
