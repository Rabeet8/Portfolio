import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Circle } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <WebGLShader />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Design is Everything
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Unleashing creativity through bold visuals, seamless interfaces, and
          limitless possibilities.
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Circle className="h-2 w-2 fill-green-500 text-green-500" />
          <Circle className="h-2 w-2 fill-green-500 text-green-500 animate-pulse" />
          <span>Available for New Projects</span>
        </div>

        <div className="mt-10">
          <LiquidButton size="xxl">Let's Go</LiquidButton>
        </div>
      </div>
    </div>
  );
}
