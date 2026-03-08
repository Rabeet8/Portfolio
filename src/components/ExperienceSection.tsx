import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "2024",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
          Technyx System
        </h3>
        <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground text-sm md:text-base font-normal mb-4">
          <li>Developed and optimized mobile applications using React Native CLI, delivering performant UI screens and improving overall app stability and user experience.</li>
          <li>Engineered a multi-layer interactive SVG map system using react-native-svg, MaskedView, and Reanimated, implementing dynamic region highlighting, coordinate transformation logic, and animated zoom interactions while maintaining high rendering performance.</li>
          <li>Collaborated closely with Product Managers and QA teams to identify, debug, and resolve critical issues, ensuring timely and high-quality releases.</li>
          <li>Implemented new features and refined existing functionalities based on client feedback, aligning product improvements with user and business requirements.</li>
          <li>Managed the complete release pipeline including build generation, store submission, versioning, and production rollout for iOS and Android apps.</li>
        </ul>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">React Native</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">TypeScript</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">Reanimated</span>
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1">SVG</span>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
          Freelance Developer
        </h3>
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
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
          Junior Developer & Designer
        </h3>
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
