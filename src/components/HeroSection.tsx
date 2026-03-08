import { GLSLHills } from "@/components/ui/glsl-hills";

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <GLSLHills />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl leading-tight">
          Software Engineer Building
          <br />
          Scalable Digital Products
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I turn ideas into high-performance digital products using modern
          technologies and clean architecture.
        </p>
      </div>
    </div>
  );
}
