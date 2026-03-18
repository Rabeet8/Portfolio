import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "bento" },
  { label: "Work Process", id: "timeline" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Follow", id: "keyboard" },
  { label: "Contact", id: "footer" },
];

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-xl bg-card/80 backdrop-blur-md border border-border flex items-center justify-center shadow-lg hover:bg-card transition-colors"
        aria-label="Menu"
      >
        {open ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-48 rounded-xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl overflow-hidden"
          >
            {sections.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => handleNav(s.id)}
                className="w-full text-left px-5 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {s.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
