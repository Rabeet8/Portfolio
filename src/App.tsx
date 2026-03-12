import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { IntroScreen } from "@/components/IntroScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {showIntro && <IntroScreen onFinished={() => setShowIntro(false)} />}
        </AnimatePresence>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: showIntro ? 0 : 1 }}
           transition={{ 
             opacity: { duration: 0.6, ease: "easeOut" }
           }}
           className={showIntro ? "pointer-events-none" : "min-h-screen"}
        >
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
