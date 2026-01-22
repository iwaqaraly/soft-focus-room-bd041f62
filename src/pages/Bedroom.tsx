import PageLayout from "@/components/PageLayout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Bedroom = () => {
  const bedroomArticles = articles.filter(
    (article) => article.category === "Bedroom"
  );

  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-light text-foreground mb-2">Bedroom</h1>
          <p className="text-muted-foreground">
            Create your perfect sanctuary for rest and relaxation
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {bedroomArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Bedroom;
