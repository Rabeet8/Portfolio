import { HeroSection } from "@/components/HeroSection";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { TimelineSection } from "@/components/TimelineSection";

const Index = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ScrollShowcase />
      <TimelineSection />
    </div>
  );
};

export default Index;
