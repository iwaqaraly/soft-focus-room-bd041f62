import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Route chunk imports for lazy loading & prefetching
const indexImport = () => import("./pages/Index");
const basementImport = () => import("./pages/Basement");
const bathroomImport = () => import("./pages/Bathroom");
const bedroomImport = () => import("./pages/Bedroom");
const gardenImport = () => import("./pages/Garden");
const kitchenImport = () => import("./pages/Kitchen");
const livingRoomImport = () => import("./pages/LivingRoom");
const articlePageImport = () => import("./pages/ArticlePage");
const notFoundImport = () => import("./pages/NotFound");

const Index = lazy(indexImport);
const Basement = lazy(basementImport);
const Bathroom = lazy(bathroomImport);
const Bedroom = lazy(bedroomImport);
const Garden = lazy(gardenImport);
const Kitchen = lazy(kitchenImport);
const LivingRoom = lazy(livingRoomImport);
const ArticlePage = lazy(articlePageImport);
const NotFound = lazy(notFoundImport);

// Prefetch map for route-based prefetching
export const routePrefetchMap: Record<string, () => Promise<unknown>> = {
  "/": indexImport,
  "/basement": basementImport,
  "/bathroom": bathroomImport,
  "/bedroom": bedroomImport,
  "/garden": gardenImport,
  "/kitchen": kitchenImport,
  "/living-room": livingRoomImport,
  "/article": articlePageImport,
};

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
  </ThemeProvider>
);

export default App;
