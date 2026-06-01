import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading titleKey="skills.title" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={itemVariants}
              className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6 hover:border-zinc-500/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                {t(`skills.${cat.key}`)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-700/50 text-sm text-zinc-300"
                  >
                    <skill.icon className="text-lg" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
