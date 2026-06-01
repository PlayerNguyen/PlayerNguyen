import SEO from "@/components/shared/SEO";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SEO description="Nguyễn Huỳnh Nguyên - Software Engineer portfolio" />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
