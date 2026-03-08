import React, { useState } from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import projectSnapntradeMain from "@/assets/project-snapntrade-main.png";
import projectSnapntrade from "@/assets/project-snapntrade.png";
import projectSnapntradeLogin from "@/assets/project-snapntrade-login.png";
import projectPromptKitMain from "@/assets/project-promptkit-main.png";
import projectPromptKitHome from "@/assets/project-promptkit-home.jpg";
import projectPromptKitLogin from "@/assets/project-promptkit-login.jpg";
import projectPromptKitProfile from "@/assets/project-promptkit-profile.jpg";
import projectPromptKitCost from "@/assets/project-promptkit-cost.jpg";
import projectPromptKitToken from "@/assets/project-promptkit-token.jpg";

interface ProjectImages {
  title: string;
  images: string[];
}

const projectImages: ProjectImages[] = [
  {
    title: "SnapNTrade - Marketplace App",
    images: [projectSnapntradeMain, projectSnapntrade, projectSnapntradeLogin],
  },
  {
    title: "PromptKit - AI Utility App",
    images: [projectPromptKitMain, projectPromptKitHome, projectPromptKitLogin, projectPromptKitProfile, projectPromptKitCost, projectPromptKitToken],
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

          <div className="flex items-center justify-center w-full px-12 py-4">
            <motion.img
              key={currentIndex}
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="max-h-[65vh] w-auto object-contain rounded-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
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
    const images = [projectSnapntradeMain, projectSnapntrade, projectSnapntradeLogin, projectPromptKitMain, projectPromptKitHome, projectPromptKitLogin, projectPromptKitProfile, projectPromptKitCost, projectPromptKitToken];
    images.forEach((src) => {
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
        "A mobile-first marketplace application enabling users to buy and sell electronics, gadgets, and more. Features include category browsing, real-time chat, boosted listings, and a clean intuitive UI designed for seamless trading experiences.",
      link: "https://play.google.com/store/apps/details?id=com.snapNtrade",
      content: (
        <div className="h-full w-full cursor-pointer flex items-center justify-center" onClick={() => openModal(0)}>
          <img
            src={projectSnapntradeMain}
            alt="SnapNTrade Marketplace App"
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
