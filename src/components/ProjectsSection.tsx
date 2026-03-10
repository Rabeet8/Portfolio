import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import projectSnapntradeMain from "@/assets/project-snapntrade-main.png";
import pixel8Pro from "@/assets/iMockup - Google Pixel 8 Pro.png";
import pixel9Pro3 from "@/assets/iMockup - Google Pixel 9 Pro (3).png";
import pixel9Pro4 from "@/assets/iMockup - Google Pixel 9 Pro (4).png";
import pixel9Pro5 from "@/assets/iMockup - Google Pixel 9 Pro (5).png";
import pixel9Pro6 from "@/assets/iMockup - Google Pixel 9 Pro (6).png";
import pixel9Pro7 from "@/assets/iMockup - Google Pixel 9 Pro (7).png";
import pixel9Pro12 from "@/assets/iMockup - Google Pixel 9 Pro (12).png";
import projectPromptKitMain from "@/assets/project-promptkit-main.png";
import projectPromptKitLogin from "@/assets/project-promptkit-login.jpg";
import projectPromptKitProfile from "@/assets/project-promptkit-profile.jpg";
import projectPromptKitHome from "@/assets/project-promptkit-home.jpg";
import projectPromptKitToken from "@/assets/project-promptkit-token.jpg";
import projectPromptKitP2 from "@/assets/p-p2 (1).jpg";
import projectPromptKitS from "@/assets/p-s (1).jpg";
import projectPromptKitCost from "@/assets/project-promptkit-cost.jpg";

import projectThriveMain from "@/assets/project-thrive-main.png";
import projectErc20New from "@/assets/project-erc20-new.png";
import projectTokenstashNew from "@/assets/project-tokenstash-new.png";
import projectDocvouchNew from "@/assets/project-docvouch-new.png";

interface ProjectImages {
  title: string;
  images: string[];
}

const projectImages: ProjectImages[] = [
  {
    title: "snapNtrade - Marketplace App",
    images: [projectSnapntradeMain, pixel8Pro, pixel9Pro3, pixel9Pro4, pixel9Pro5, pixel9Pro6, pixel9Pro7, pixel9Pro12],
  },
  {
    title: "PromptKit - AI Utility App",
    images: [projectPromptKitMain, projectPromptKitLogin, projectPromptKitProfile, projectPromptKitCost, projectPromptKitToken, projectPromptKitP2, projectPromptKitS],
  },
  {
    title: "Thrive - Plant Care App",
    images: [projectThriveMain],
  },
  {
    title: "ERC20 Factory - Token Creator",
    images: [projectErc20New],
  },
  {
    title: "TokenStash - DApp for stacking Erc20 tokens",
    images: [projectTokenstashNew],
  },
  {
    title: "DocVouch - Implementation of PoE",
    images: [projectDocvouchNew],
  },
];

function ProjectImageModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: ProjectImages | null;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (open) setCurrentIndex(0);
  }, [open, project]);

  if (!project) return null;

  const totalImages = project.images.length;

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalImages);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background border-border overflow-hidden [&>button]:hidden data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="relative flex items-center justify-center min-h-[50vh] bg-background">
          {totalImages > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-2 z-10 p-2 rounded-full border border-border bg-background/80 text-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="flex items-center justify-center w-full px-12 py-4 h-[65vh]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={project.images[currentIndex]}
                alt={`${project.title} screenshot ${currentIndex + 1}`}
                className="max-h-full w-auto object-contain rounded-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          </div>

          {totalImages > 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 z-10 p-2 rounded-full border border-border bg-background/80 text-foreground hover:bg-accent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {totalImages > 1 && (
          <div className="flex items-center justify-center gap-1 pb-4">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {totalImages}
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectImages | null>(null);

  React.useEffect(() => {
    const images = [
      projectSnapntradeMain, pixel8Pro, pixel9Pro3, pixel9Pro4, pixel9Pro5, pixel9Pro6, pixel9Pro7, pixel9Pro12,
      projectPromptKitMain, projectPromptKitHome, projectPromptKitLogin, projectPromptKitProfile, projectPromptKitCost, projectPromptKitToken, projectPromptKitP2, projectPromptKitS,
      projectThriveMain, projectErc20New, projectTokenstashNew, projectDocvouchNew
    ];

    // Properly preload images so there is no flickering when sliding
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const openModal = (projectIndex: number) => {
    if (projectImages[projectIndex]) {
      setSelectedProject(projectImages[projectIndex]);
      setModalOpen(true);
    }
  };

  const content = [
    {
      title: "SnapNTrade - Marketplace App",
      description:
        "snapNtrade is a trust-first marketplace for buying and selling electronics, built to eliminate fraud and uncertainty. It requires sellers to capture real-time photos inside the app, preventing fake or reused images. AI analyzes listings to provide neutral product condition insights and reduce disputes. Every completed sale generates a digitally verifiable invoice as proof of ownership. With a buyer-first model and privacy-safe location sharing, snapNtrade makes trading safer and more reliable.",
      link: "https://play.google.com/store/apps/details?id=com.snapNtrade",
      badges: ["React Native", "Firebase", "Fast API", "Zustand"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(0)}>
          <img
            src={projectSnapntradeMain}
            alt="snapNtrade Marketplace App"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "PromptKit - AI Utility App",
      description:
        "PromptKit is a powerful all-in-one AI utility app that helps you analyze prompts, generate JSON schemas, estimate token costs, and work faster with LLMs. Everything you need for building with AI.",
      link: "https://promptkit-landing-page.vercel.app/",
      badges: ["React Native", "Expo", "Firebase"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(1)}>
          <img
            src={projectPromptKitMain}
            alt="PromptKit AI Utility App"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "Thrive - Plant Care App",
      description:
        "Thrive is a comprehensive plant care mobile app that helps users track watering schedules and monitor plant growth through visual timelines, ensuring your houseplants remain healthy with timely reminders and easy logging of care activities.",
      link: "https://github.com/Rabeet8/Thrive",
      badges: ["React Native", "Expo", "Supabase"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(2)}>
          <img
            src={projectThriveMain}
            alt="Thrive Plant Care App"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "ERC20 Factory - Token Creator",
      description:
        "This project allows users to quickly create ERC20 tokens without the need for coding. Create, customize, and tokenize — unlocking blockchain potential for everyone.",
      link: "https://github.com/Rabeet8/ERC20Factory",
      badges: ["Solidity", "Ethers.js", "React", "RainbowKit"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(3)}>
          <img
            src={projectErc20New}
            alt="ERC20 Factory Token Creator"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "TokenStash - DApp for stacking Erc20 tokens",
      description:
        "TokenStash is a decentralized application (DApp) for staking ERC20 tokens and earning rewards using smart contracts on the Ethereum blockchain.",
      link: "https://github.com/Rabeet8/TokenStash",
      badges: ["Solidity", "Ethers.js", "React", "RainbowKit"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(4)}>
          <img
            src={projectTokenstashNew}
            alt="TokenStash DApp for stacking Erc20 tokens"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "DocVouch - Implementation of PoE",
      description:
        "DocVouch is a decentralized application and implementation of Proof-Of-Existence (PoE) that securely timestamps and verifies document existence on the blockchain, ensuring immutability, transparency, and privacy without storing the actual document content.",
      link: "https://github.com/Rabeet8/DocVouch",
      badges: ["Solidity", "Ethers.js", "React", "RainbowKit"],
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(5)}>
          <img
            src={projectDocvouchNew}
            alt="DocVouch - Implementation of PoE"
            loading="eager"
            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
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

  return (
    <section className="py-16" style={{ backgroundColor: 'hsl(0 0% 0%)' }}>
      <div className="max-w-5xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          My Projects
        </h2>
      </div>
      <StickyScroll content={content} />

      <ProjectImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
