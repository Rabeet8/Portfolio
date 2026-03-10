import { Gravity, MatterBody } from "@/components/ui/gravity";

const techItems = [
  "Next.js",
  "React Native",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material-UI",
  "Expo",
  "Redux",
  "Zustand",
  "Node.js",
  "Express.js",
  "MongoDB",
  "FastAPI",
  "Firebase",
  "Supabase",
  "Git",
  "GitHub",
  "REST API",
  "Postman",
];

export function GravityTechStack() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="relative h-[420px] md:h-[500px] rounded-2xl border border-border/40 overflow-hidden bg-muted/20">
        <Gravity gravity={{ x: 0, y: 1 }} grabCursor={true} resetOnResize={true} addTopWall={false} autoStart={true}>
          {techItems.map((tech, i) => (
            <MatterBody
              key={tech}
              matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
              x={`${10 + (i % 7) * 13}%`}
              y={`${5 + Math.floor(i / 7) * 8}%`}
              angle={Math.random() * 20 - 10}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm md:text-base font-semibold whitespace-nowrap select-none shadow-md">
                {tech}
              </span>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  );
}
