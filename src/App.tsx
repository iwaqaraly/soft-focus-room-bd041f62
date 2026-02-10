import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Lazy-loaded route factories (exported for preloading on hover)
export const routeImports = {
  index: () => import("./pages/Index"),
  basement: () => import("./pages/Basement"),
  bathroom: () => import("./pages/Bathroom"),
  bedroom: () => import("./pages/Bedroom"),
  garden: () => import("./pages/Garden"),
  kitchen: () => import("./pages/Kitchen"),
  livingRoom: () => import("./pages/LivingRoom"),
  article: () => import("./pages/ArticlePage"),
  notFound: () => import("./pages/NotFound"),
} as const;

const Index = lazy(routeImports.index);
const Basement = lazy(routeImports.basement);
const Bathroom = lazy(routeImports.bathroom);
const Bedroom = lazy(routeImports.bedroom);
const Garden = lazy(routeImports.garden);
const Kitchen = lazy(routeImports.kitchen);
const LivingRoom = lazy(routeImports.livingRoom);
const ArticlePage = lazy(routeImports.article);
const NotFound = lazy(routeImports.notFound);

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
