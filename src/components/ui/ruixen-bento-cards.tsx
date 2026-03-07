"use client";

import React from "react";
import { cn } from "@/lib/utils";

const cardContents = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable web applications using React, Next.js, Node.js and modern backend architectures with REST APIs and cloud integrations.",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native and Expo with optimized performance and production-ready builds.",
  },
  {
    title: "Blockchain Engineering",
    description:
      "Designing and testing smart contracts using Solidity, Hardhat, and Ethers.js while ensuring security, automation testing, and Web3 integration.",
  },
  {
    title: "AI & GenAI Integration",
    description:
      "Integrating AI features using OpenAI APIs to power intelligent applications, automation systems, and AI-driven user experiences.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying scalable applications using Firebase, AWS, CI/CD pipelines, monitoring tools, and production infrastructure.",
  },
];

const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-muted-foreground/40 hover:shadow-lg hover:shadow-accent/5",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 flex h-full flex-col justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -left-[7px] -top-[7px] text-muted-foreground/40" />
    <PlusIcon className="absolute -right-[7px] -top-[7px] text-muted-foreground/40" />
    <PlusIcon className="absolute -bottom-[7px] -left-[7px] text-muted-foreground/40" />
    <PlusIcon className="absolute -bottom-[7px] -right-[7px] text-muted-foreground/40" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    className={cn("h-4 w-4", className)}
  >
    <path fill="currentColor" d="M8 0H7v7H0v1h7v7h1V8h7V7H8z" />
  </svg>
);

export default function RuixenBentoCards() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PlusCard
            className="md:col-span-1"
            title={cardContents[0].title}
            description={cardContents[0].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[1].title}
            description={cardContents[1].description}
          />
          <PlusCard
            className="md:col-span-1 lg:row-span-2"
            title={cardContents[2].title}
            description={cardContents[2].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[3].title}
            description={cardContents[3].description}
          />
          <PlusCard
            className="md:col-span-1"
            title={cardContents[4].title}
            description={cardContents[4].description}
          />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Scalable Digital Products
          </h2>
          <p className="text-muted-foreground text-lg">
            I specialize in building modern web and mobile applications,
            integrating AI and blockchain technologies while focusing on
            performance, scalability, and clean architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
