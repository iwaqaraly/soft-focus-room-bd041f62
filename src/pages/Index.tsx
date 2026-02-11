import PageLayout from "@/components/PageLayout";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      
      {/* Latest Articles Section */}
      <section className="container mx-auto px-6 py-20">
        <header className="mb-14 text-center opacity-0 animate-fade-in">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary/80 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            Latest Inspiration
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            Fresh Ideas for Your Home
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Curated inspiration and practical tips for every room in your home
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(-5).reverse().map((article, index) => (
            <div 
              key={`${article.id}-${article.slug}`}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </section>

      {/* Warm decorative section */}
      <section className="warm-gradient py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              Find Your Style
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for minimalist elegance, cozy comfort, or bold statements—
              we have inspiration for every taste and every space.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {["Living Room", "Bedroom", "Kitchen", "Bathroom", "Garden", "Basement"].map((room) => (
                <span 
                  key={room}
                  className="px-5 py-2.5 bg-card rounded-full text-sm font-medium text-foreground shadow-warm hover:shadow-warm-lg transition-shadow duration-300 cursor-pointer hover:-translate-y-0.5"
                >
                  {room}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;