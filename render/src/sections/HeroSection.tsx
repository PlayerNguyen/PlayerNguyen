import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiGithub,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/shared/SocialLinks";
import { socialLinks } from "@/data/social";

const floatingIcons = [
  { Icon: SiReact, left: "3%", top: "15%", size: "text-4xl lg:text-5xl", color: "text-primary/40" },
  { Icon: SiTypescript, left: "88%", top: "18%", size: "text-3xl lg:text-4xl", color: "text-primary/40" },
  { Icon: SiGithub, left: "2%", top: "75%", size: "text-4xl lg:text-5xl", color: "text-ink/30" },
  { Icon: SiGit, left: "90%", top: "72%", size: "text-3xl lg:text-4xl", color: "text-primary/40" },
  { Icon: SiDocker, left: "48%", top: "5%", size: "text-3xl lg:text-4xl", color: "text-ink/30" },
  { Icon: SiNodedotjs, left: "5%", top: "48%", size: "text-3xl lg:text-4xl", color: "text-primary/40" },
  { Icon: SiSpringboot, left: "78%", top: "45%", size: "text-2xl lg:text-3xl", color: "text-primary/40" },
  { Icon: SiPostgresql, left: "45%", top: "88%", size: "text-2xl lg:text-3xl", color: "text-ink/30" },
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center bg-canvas pt-14">
      {/* Floating icons — only in hero section */}
      <div className="absolute inset-0 z-0">
        {floatingIcons.map(({ Icon, left, top, size, color }, i) => (
          <motion.div
            key={i}
            className={`absolute ${size} ${color}`}
            style={{ left, top }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 0.4,
              y: [0, -10, 0, 8, 0],
            }}
            whileHover={{
              opacity: 1,
              scale: 1.2,
              color: "#00d992",
              transition: { duration: 0.3 },
            }}
            transition={{
              opacity: { duration: 0.8, delay: i * 0.12 },
              y: {
                duration: 5 + (i % 3) * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              },
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-content mx-auto px-gutter">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-eyebrow-mono text-primary tracking-[2.52px] mb-4">
              {t("hero.subtitle").toUpperCase()}
            </h3>
            <h1 className="text-display-xl text-ink-strong font-sans">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-body-lg text-body max-w-xl lg:max-w-none">
              {t("hero.bio")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <Button variant="primary">{t("hero.cta_projects")}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">{t("hero.cta_contact")}</Button>
              </Link>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <SocialLinks links={socialLinks} size="md" />
            </div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center mt-12 lg:mt-0"
          >
            <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-2 border-hairline">
              <picture>
                <source srcSet="/avatar.webp" type="image/webp" />
                <img
                  src="/avatar.jpg"
                  alt="Nguyễn Huỳnh Nguyên"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
