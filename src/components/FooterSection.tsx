import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { DotText } from "@/components/ui/dot-text";

const socialLinks = [
  { icon: Github, href: "https://github.com/Rabeet8", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/syedrabeet/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/CuriousRabeet", label: "Twitter" },
  { icon: Mail, href: "mailto:syedrabeet2002@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "tech-stack" },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top section */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Let's work together
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Have a project in mind? Let's create something extraordinary.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="mailto:syedrabeet2002@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-muted-foreground"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-border" />

        {/* Bottom section */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          © {currentYear} All rights reserved.
        </motion.p>
      </div>

      {/* Dot text banner */}
      <div className="w-full h-40 md:h-56 lg:h-72 overflow-hidden">
        <DotText text="Syed Rabeet" />
      </div>
    </footer>
  );
}
