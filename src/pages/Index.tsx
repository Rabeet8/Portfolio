import { useState, useEffect } from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!showHero) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <GooeyText
          texts={["Product Engineer", "Researcher", "Community Builder"]}
          morphTime={1.5}
          cooldownTime={0.5}
          textClassName="text-4xl md:text-7xl font-bold text-foreground"
        />
      </div>
    );
  }

  return <HeroSection />;
};

export default Index;
