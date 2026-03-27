import { GLSLHills } from "@/components/ui/glsl-hills";
import { Download } from "lucide-react";

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

        <p className="mt-6 mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I turn ideas into high-performance digital products using modern
          technologies and clean architecture.
        </p>

        <a
          href="https://drive.google.com/file/d/1zbAaJBz_4bbqc7MSH6abC8DRY1jcK2zA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 font-semibold text-background transition-transform active:scale-95 hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-foreground/20 blur-md transition-all group-hover:bg-foreground/40 group-hover:blur-xl font-medium tracking-wide"></span>
          <span className="relative flex items-center gap-2">
            Download Resume
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </span>
        </a>
      </div>
    </div>
  );
}
