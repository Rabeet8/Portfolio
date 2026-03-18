import { motion } from "framer-motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-24 bg-black/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto px-6 text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Testimonials
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Kind words from clients and team members I've had the pleasure of working with.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StaggerTestimonials />
        </motion.div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
};
