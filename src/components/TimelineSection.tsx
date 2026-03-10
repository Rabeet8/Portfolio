import { Lightbulb, Palette, Code2, FlaskConical, Rocket, Network } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Ideation",
    date: "Phase 1",
    content:
      "I begin by understanding the product problem and defining the core requirements. Through discussions with stakeholders and analyzing existing solutions, I identify the key features and technical challenges that shape the direction of development.",
    category: "Research",
    icon: Lightbulb,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Architecture",
    date: "Phase 2",
    content:
      "I design the system architecture and plan the technical stack. This includes defining application structure, API communication patterns, database models, and choosing the right frameworks to ensure scalability and maintainability.",
    category: "Planning",
    icon: Network,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Phase 3",
    content:
      "I build scalable web and mobile applications using technologies like React, React Native, and Node.js. I focus on modular architecture, reusable components, and efficient state management while ensuring clean and maintainable code.",
    category: "Engineering",
    icon: Code2,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Phase 4",
    content:
      "I validate the application through functional testing, debugging, and performance checks. Issues are identified early through test-cases and real usage scenarios to ensure the product is stable and reliable.",
    category: "QA",
    icon: FlaskConical,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Deployment",
    date: "Phase 5",
    content:
      "I handle production deployment including build generation, versioning, and release management. Applications are deployed to production environments with monitoring and updates to ensure smooth user experiences.",
    category: "Delivery",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function TimelineSection() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Work Process
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          How I Work
        </h2>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
