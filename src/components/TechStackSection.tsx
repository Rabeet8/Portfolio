import { LogoCloud } from "@/components/ui/logo-cloud-4";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
];

export function TechStackSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Tools & Technologies
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tech Stack I Use
        </h2>
      </div>
      <LogoCloud logos={logos} />
    </section>
  );
}
