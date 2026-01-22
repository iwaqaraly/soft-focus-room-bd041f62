import PageLayout from "@/components/PageLayout";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <section className="container mx-auto px-6 py-16">
        <header className="mb-12">
          <h2 className="text-2xl font-light text-foreground mb-2">Latest Articles</h2>
          <p className="text-muted-foreground">Curated inspiration for every room</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
