import { GravityTechStack } from "@/components/GravityTechStack";

export function TechStackSection() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Tech Stack
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tools & Technologies
        </h2>
      </div>
      <GravityTechStack />
    </section>
  );
}
