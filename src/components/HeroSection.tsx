import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <WebGLShader />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Content card with subtle border */}
        <div className="relative flex flex-col items-center justify-center border border-muted/30 rounded-lg px-12 py-20 md:px-24 md:py-28 max-w-4xl w-full">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl leading-tight">
            Design is
            <br />
            Everything
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Unleashing creativity through bold visuals, seamless interfaces, and
            limitless possibilities.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-green-400 font-medium">Available for New Projects</span>
          </div>

          <div className="mt-10">
            <LiquidButton size="xxl">Let's Go</LiquidButton>
          </div>
        </div>
      </div>
    </div>
  );
}
