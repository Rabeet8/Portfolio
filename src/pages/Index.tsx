import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import { TimelineSection } from "@/components/TimelineSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { KeyboardSection } from "@/components/KeyboardSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="space-y-0">
      <HamburgerMenu />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="bento"><RuixenBentoCards /></div>
      <div id="timeline"><TimelineSection /></div>
      <div id="tech-stack"><TechStackSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="keyboard"><KeyboardSection /></div>
      <div id="footer"><FooterSection /></div>
    </div>
  );
};

export default Index;
