import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { articles } from "@/data/articles";

import Index from "./pages/Index";
import Basement from "./pages/Basement";
import Bathroom from "./pages/Bathroom";
import Bedroom from "./pages/Bedroom";
import Garden from "./pages/Garden";
import Kitchen from "./pages/Kitchen";
import LivingRoom from "./pages/LivingRoom";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LegacyArticleRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  const categoryPath = article.category.toLowerCase().replace(/ /g, "-");
  return <Navigate to={`/${categoryPath}/${article.slug}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/living-room" element={<LivingRoom />} />

          <Route path="/basement/:slug" element={<ArticlePage />} />
          <Route path="/bathroom/:slug" element={<ArticlePage />} />
          <Route path="/bedroom/:slug" element={<ArticlePage />} />
          <Route path="/garden/:slug" element={<ArticlePage />} />
          <Route path="/kitchen/:slug" element={<ArticlePage />} />
          <Route path="/living-room/:slug" element={<ArticlePage />} />

          {/* Backward compatibility */}
          <Route path="/article/:slug" element={<LegacyArticleRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
