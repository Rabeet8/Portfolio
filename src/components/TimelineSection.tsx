import { Lightbulb, Palette, Code2, FlaskConical, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Ideation",
    date: "Phase 1",
    content:
      "I start every project by deeply understanding the problem space. Through user interviews, competitive analysis, and stakeholder workshops, I identify core pain points and opportunities that inform the entire product direction.",
    category: "Research",
    icon: Lightbulb,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Phase 2",
    content:
      "I translate research insights into intuitive interfaces. My process includes wireframing, high-fidelity prototyping in Figma, and iterating through design critiques to ensure every pixel serves both aesthetics and usability.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Phase 3",
    content:
      "I build production-grade frontends with React and TypeScript, focusing on component architecture, performance optimization, and accessibility. I write clean, maintainable code with thorough documentation.",
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
      "I validate through a mix of automated tests, usability sessions, and A/B experiments. I measure real user metrics, gather qualitative feedback, and iterate rapidly to close gaps between expectation and experience.",
    category: "QA",
    icon: FlaskConical,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Launch",
    date: "Phase 5",
    content:
      "I coordinate cross-functional releases with CI/CD pipelines, feature flags, and monitoring dashboards. Post-launch, I track adoption metrics and quickly triage issues to ensure a smooth rollout.",
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
      <div className="max-w-5xl mx-auto px-6 text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          How I Work
        </h2>
        <p className="text-muted-foreground text-lg">
          An orbital view of my process — click any node to explore
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
