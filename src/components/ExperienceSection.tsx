import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-normal mb-4">
          Led the frontend architecture for a SaaS platform serving 50K+ users. Built a design system from scratch with React, TypeScript, and Tailwind CSS that reduced development time by 40%.
        </p>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-4">
          Implemented complex data visualizations, real-time collaboration features, and optimized Core Web Vitals scores across the entire application.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">React</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">TypeScript</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Tailwind CSS</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Framer Motion</span>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-normal mb-4">
          Designed and developed responsive web applications for multiple clients across fintech, health-tech, and e-commerce. Focused on accessibility and performance optimization.
        </p>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-4">
          Introduced component-driven development workflows and automated testing pipelines that improved code quality and deployment confidence.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Next.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Figma</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Node.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">PostgreSQL</span>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-foreground text-sm md:text-base font-normal mb-4">
          Started freelancing as a UI/UX designer and frontend developer. Built portfolio projects and contributed to open-source design systems.
        </p>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-4">
          Completed certifications in advanced CSS animations, Three.js, and interaction design. Won a local hackathon with a real-time collaboration tool.
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">JavaScript</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Three.js</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">GSAP</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">CSS</span>
        </div>
      </div>
    ),
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Career Journey
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          My Experience
        </h2>
      </div>
      <Timeline data={experienceData} />
    </section>
  );
}
