import { Code2, Database, Wrench } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import nextjsIcon from "@/assets/icons8-nextjs-48.png";

type TechItem = {
  name: string;
  icon: string | React.ReactNode;
  invertDark?: boolean;
};

type TechCategory = {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);



const ExpressIcon = () => (
  <span className="font-bold text-lg leading-none tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
    ex
  </span>
);

const techCategories: TechCategory[] = [
  {
    title: "FRONTEND",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { name: "Next.js", icon: nextjsIcon, invertDark: true },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Zustand", icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/favicon.ico" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
      { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
    ],
  },
  {
    title: "BACKEND & DATA",
    icon: <Database className="w-4 h-4" />,
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
      { name: "Express.js", icon: <ExpressIcon /> },
    ],
  },
  {
    title: "TOOLS & VERSION CONTROL",
    icon: <Wrench className="w-4 h-4" />,
    items: [
      { name: "GitHub", icon: <GithubIcon /> },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Vercel", icon: <VercelIcon /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotate mapping - max 4 degrees of rotation feeling perfectly polished
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 group hover:shadow-xl transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
};

export function TechStackSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Tech Stack
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Tools & Technologies I Work With
        </h2>
      </div>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {techCategories.map((category) => (
          <motion.li
            key={category.title}
            variants={itemVariants}
            className="min-h-[14rem] list-none perspective-[1000px]"
          >
            <TiltCard>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div
                className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 transition-all duration-300 pointer-events-none"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2 pointer-events-auto">
                  <span className="text-muted-foreground">{category.icon}</span>
                  <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Tech Items */}
                <div className="space-y-4 pointer-events-auto">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      {typeof item.icon === 'string' ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className={`w-5 h-5 ${item.invertDark ? 'dark:invert dark:brightness-200' : ''}`}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center text-foreground shrink-0">
                          {item.icon}
                        </div>
                      )}
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
