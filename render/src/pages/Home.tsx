import SEO from "@/components/shared/SEO";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <SEO description="Nguyễn Huỳnh Nguyên - Software Engineer portfolio" />
      <HeroSection />
      <SkillsSection />
    </>
  );
}
