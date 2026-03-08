import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LocationMap } from "@/components/ui/expand-map";
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
      <HeroSection />
      <AboutSection />
      <section className="py-16 bg-background flex flex-col items-center justify-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Current Location</p>
        <LocationMap location="Karachi, Pakistan" coordinates="24.8607° lat, 67.0011° long" />
      </section>
      <RuixenBentoCards />
      <TimelineSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <KeyboardSection />
      <FooterSection />
    </div>
  );
};

export default Index;
