import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import projectZerowl from "@/assets/project-zerowl.png";
import projectSnapntrade from "@/assets/project-snapntrade.png";

const content = [
  {
    title: "Zerowl - Cyber Security Blog",
    description:
      "A comprehensive cyber security news and blog platform delivering the latest insights on cyber attacks, data breaches, and vulnerability disclosures. Built with modern web technologies for fast content delivery and SEO optimization.",
    content: (
      <img
        src={projectZerowl}
        alt="Zerowl Cyber Security Blog"
        className="h-full w-full object-cover object-left-top"
      />
    ),
  },
  {
    title: "SnapNTrade - Marketplace App",
    description:
      "A mobile-first marketplace application enabling users to buy and sell electronics, gadgets, and more. Features include category browsing, real-time chat, boosted listings, and a clean intuitive UI designed for seamless trading experiences.",
    content: (
      <img
        src={projectSnapntrade}
        alt="SnapNTrade Marketplace App"
        className="h-full w-full object-cover object-top"
      />
    ),
  },
  {
    title: "More Projects Coming Soon",
    description:
      "I'm constantly building and experimenting with new technologies. Stay tuned for more exciting projects spanning Web3, AI integrations, and full-stack applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-2xl font-bold text-foreground">🚀 Stay Tuned</p>
      </div>
    ),
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          My Projects
        </h2>
      </div>
      <StickyScroll content={content} />
    </section>
  );
}
