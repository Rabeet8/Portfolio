import { GravityTechStack } from "@/components/GravityTechStack";

export function TechStackSection() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tools & Technologies
        </h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          Technologies and tools I work with to build modern, scalable applications.
        </p>
      </div>
      <GravityTechStack />
    </section>
  );
}
