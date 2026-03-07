import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";

export function TechStackSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Tools & Technologies
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tech Stack I Use
        </h2>
        <p className="text-muted-foreground mt-3">
          Connect your favourite apps to your workflow.
        </p>
      </div>
      <MultiOrbitSemiCircle />
    </section>
  );
}
