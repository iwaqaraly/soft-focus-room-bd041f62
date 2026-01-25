import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <PageLayout>
        <section className="container mx-auto px-6 py-12">
          <p className="text-muted-foreground">Article not found.</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            ← Back to Home
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          to={`/${article.category.toLowerCase().replace(" ", "-")}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {article.category}
        </Link>

        <header className="mb-12">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-light text-foreground mt-2 mb-6">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        <div className="aspect-[16/9] overflow-hidden mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {article.sections && article.sections.length > 0 && (
          <div className="space-y-12">
            {article.sections.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-medium text-foreground">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        )}
      </article>
    </PageLayout>
  );
};

export default ArticlePage;
