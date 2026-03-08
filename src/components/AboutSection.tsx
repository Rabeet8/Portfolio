import { motion } from "framer-motion";
import { LayoutGrid, Monitor, Search, Sparkles, PenTool, Target } from "lucide-react";

const leftPills = [
  { icon: LayoutGrid, label: "Design Systems", color: "hsl(25, 95%, 55%)" },
  { icon: Monitor, label: "UI/UX", color: "hsl(160, 60%, 45%)" },
  { icon: Search, label: "Research", color: "hsl(210, 100%, 55%)" },
];

const rightPills = [
  { icon: Sparkles, label: "Animation", color: "hsl(145, 80%, 50%)" },
  { icon: PenTool, label: "Prototyping", color: "hsl(310, 80%, 60%)" },
  { icon: Target, label: "Strategy", color: "hsl(45, 90%, 55%)" },
];

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="w-full px-6">
        {/* Hello divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-16 bg-muted-foreground/30" />
          <span className="text-muted-foreground italic text-lg">Hello!</span>
          <div className="h-px w-16 bg-muted-foreground/30" />
        </div>

        <div className="flex items-center justify-between w-full">
          {/* Left pills */}
          <div className="hidden md:flex flex-col gap-5 items-end">
            {leftPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-full bg-card border border-border px-5 py-3 shadow-lg"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: pill.color }}
                >
                  <pill.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl"
          >
            <h2 className="text-[28px] md:text-[46px] lg:text-[58px] font-bold text-foreground leading-[1.25] md:leading-[1.25] lg:leading-[1.25] tracking-wide">
              I help startups and enterprise to establish an emotional connection
              between their products and happy engaged customers
            </h2>
          </motion.div>

          {/* Right pills */}
          <div className="hidden md:flex flex-col gap-5 items-start">
            {rightPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-full bg-card border border-border px-5 py-3 shadow-lg"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: pill.color }}
                >
                  <pill.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile pills row */}
        <div className="flex md:hidden flex-wrap justify-center gap-3 mt-10">
          {[...leftPills, ...rightPills].map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-lg"
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ backgroundColor: pill.color }}
              >
                <pill.icon className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-foreground">{pill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
