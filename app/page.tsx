import { AnimatedBackground } from "@/components/shared/animated-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { GitHubSection } from "@/components/sections/github-activity";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <AnimatedBackground>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </AnimatedBackground>
  );
}
