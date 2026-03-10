import { Code2, Database, Wrench } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

type TechItem = {
  name: string;
  icon: string;
  invertDark?: boolean;
};

type TechCategory = {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "FRONTEND",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", invertDark: true },
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
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000", invertDark: true },
    ],
  },
  {
    title: "TOOLS & VERSION CONTROL",
    icon: <Wrench className="w-4 h-4" />,
    items: [
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", invertDark: true },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", invertDark: true },
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
            className="min-h-[14rem] list-none"
          >
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-muted-foreground">{category.icon}</span>
                  <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Tech Items */}
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      {item.invertDark && typeof item.icon === 'string' ? (
                        <>
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-5 h-5 dark:hidden"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                          <img
                            src={item.icon.replace(/000000|181717|2D3748|4479A1/, "ffffff")}
                            alt={item.name}
                            className="w-5 h-5 hidden dark:block"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </>
                      ) : (
                        <img
                          src={item.icon as string}
                          alt={item.name}
                          className="w-5 h-5"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      )}
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
