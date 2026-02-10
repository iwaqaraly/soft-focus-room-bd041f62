import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load route components for code splitting
const Index = lazy(() => import("./pages/Index"));
const Basement = lazy(() => import("./pages/Basement"));
const Bathroom = lazy(() => import("./pages/Bathroom"));
const Bedroom = lazy(() => import("./pages/Bedroom"));
const Garden = lazy(() => import("./pages/Garden"));
const Kitchen = lazy(() => import("./pages/Kitchen"));
const LivingRoom = lazy(() => import("./pages/LivingRoom"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/basement" element={<Basement />} />
            <Route path="/bathroom" element={<Bathroom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
