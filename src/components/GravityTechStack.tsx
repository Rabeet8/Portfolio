import { Gravity, MatterBody } from "@/components/ui/gravity";

const techItems: { name: string; color: string; textColor: string }[] = [
  { name: "Next.js", color: "hsl(0 0% 15%)", textColor: "hsl(0 0% 100%)" },
  { name: "React Native", color: "hsl(193 95% 68%)", textColor: "hsl(210 15% 15%)" },
  { name: "JavaScript", color: "hsl(50 90% 55%)", textColor: "hsl(0 0% 10%)" },
  { name: "TypeScript", color: "hsl(211 60% 48%)", textColor: "hsl(0 0% 100%)" },
  { name: "HTML5", color: "hsl(14 80% 55%)", textColor: "hsl(0 0% 100%)" },
  { name: "CSS3", color: "hsl(228 70% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Tailwind CSS", color: "hsl(189 94% 43%)", textColor: "hsl(0 0% 100%)" },
  { name: "Material-UI", color: "hsl(210 100% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Expo", color: "hsl(248 82% 55%)", textColor: "hsl(0 0% 100%)" },
  { name: "Redux", color: "hsl(268 60% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Zustand", color: "hsl(30 80% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Node.js", color: "hsl(120 48% 40%)", textColor: "hsl(0 0% 100%)" },
  { name: "Express.js", color: "hsl(0 0% 22%)", textColor: "hsl(0 0% 100%)" },
  { name: "MongoDB", color: "hsl(140 55% 42%)", textColor: "hsl(0 0% 100%)" },
  { name: "FastAPI", color: "hsl(174 100% 29%)", textColor: "hsl(0 0% 100%)" },
  { name: "Firebase", color: "hsl(40 95% 55%)", textColor: "hsl(0 0% 10%)" },
  { name: "Supabase", color: "hsl(153 60% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Git", color: "hsl(10 90% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "GitHub", color: "hsl(0 0% 20%)", textColor: "hsl(0 0% 100%)" },
  { name: "REST API", color: "hsl(320 70% 50%)", textColor: "hsl(0 0% 100%)" },
  { name: "Postman", color: "hsl(20 100% 60%)", textColor: "hsl(0 0% 100%)" },
];

export function GravityTechStack() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="relative h-[210px] md:h-[250px] rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden bg-muted/20">
        <Gravity key="gravity-section" gravity={{ x: 0, y: 1 }} grabCursor={true} resetOnResize={true} addTopWall={false} autoStart={true}>
          {techItems.map((tech, i) => (
            <MatterBody
              key={tech.name}
              matterBodyOptions={{ friction: 0.5, restitution: 0.3, density: 0.002 }}
              x={`${10 + (i % 7) * 13}%`}
              y={`${5 + Math.floor(i / 7) * 8}%`}
              angle={Math.random() * 20 - 10}
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm md:text-base font-semibold whitespace-nowrap select-none shadow-md pointer-events-none"
                style={{ backgroundColor: tech.color, color: tech.textColor }}
              >
                {tech.name}
              </span>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  );
}
