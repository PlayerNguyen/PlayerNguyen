import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { timelineEvents } from "@/data/timeline";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-section-y px-gutter bg-canvas border-t border-hairline">
      <div className="max-w-content mx-auto">
        <SectionHeading titleKey="about.title" subtitleKey="about.subtitle" />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card>
            <p className="text-body-md text-body leading-relaxed">{t("about.bio")}</p>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-display-lg text-center mb-8 text-ink-strong">
            {t("about.experience")} & {t("about.education")}
          </h3>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-hairline -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                    className={`relative flex items-start gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 mt-6" />

                    <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {event.type === "education" ? (
                          <FiBookOpen className="text-light-signal-orange" />
                        ) : (
                          <FiBriefcase className="text-light-signal-orange" />
                        )}
                        <span className="text-sm text-slate-gray">{t(event.dateKey)}</span>
                      </div>
                      <Card>
                        <h4 className="text-display-sm text-ink-strong">{t(event.titleKey)}</h4>
                        <p className="text-body-sm text-body mt-1">{event.institution}</p>
                        <p className="text-body-sm text-mute mt-2">{t(event.descriptionKey)}</p>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
