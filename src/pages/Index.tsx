import { HeroSection } from "@/components/HeroSection";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { TimelineSection } from "@/components/TimelineSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ScrollShowcase />
      <TimelineSection />
      <TechStackSection />
      <ExperienceSection />
    </div>
  );
};

export default Index;
