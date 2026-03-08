import React, { useState } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import projectZerowl from "@/assets/project-zerowl.png";
import projectSnapntrade from "@/assets/project-snapntrade.png";
import projectSnapntradeLogin from "@/assets/project-snapntrade-login.png";

interface ProjectImages {
  title: string;
  images: string[];
}

const projectImages: ProjectImages[] = [
  {
    title: "Zerowl - Cyber Security Blog",
    images: [projectZerowl],
  },
  {
    title: "SnapNTrade - Marketplace App",
    images: [projectSnapntrade, projectSnapntradeLogin],
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
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background border-border overflow-hidden [&>button]:hidden">
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
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="max-h-[65vh] w-auto object-contain rounded-md"
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

  const openModal = (projectIndex: number) => {
    if (projectImages[projectIndex]) {
      setSelectedProject(projectImages[projectIndex]);
      setModalOpen(true);
    }
  };

  const content = [
    {
      title: "Zerowl - Cyber Security Blog",
      description:
        "A comprehensive cyber security news and blog platform delivering the latest insights on cyber attacks, data breaches, and vulnerability disclosures. Built with modern web technologies for fast content delivery and SEO optimization.",
      content: (
        <div className="h-full w-full cursor-pointer" onClick={() => openModal(0)}>
          <img
            src={projectZerowl}
            alt="Zerowl Cyber Security Blog"
            className="h-full w-full object-cover object-left-top hover:scale-105 transition-transform duration-300"
          />
        </div>
      ),
    },
    {
      title: "SnapNTrade - Marketplace App",
      description:
        "A mobile-first marketplace application enabling users to buy and sell electronics, gadgets, and more. Features include category browsing, real-time chat, boosted listings, and a clean intuitive UI designed for seamless trading experiences.",
      content: (
        <div className="h-full w-full cursor-pointer" onClick={() => openModal(1)}>
          <img
            src={projectSnapntrade}
            alt="SnapNTrade Marketplace App"
            className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-300"
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

      <ProjectImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
