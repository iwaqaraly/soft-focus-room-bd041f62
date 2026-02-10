import { Link } from "react-router-dom";
import { useCallback } from "react";
import { Article } from "@/data/articles";
import { routePrefetchMap } from "@/App";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const prefetch = useCallback(() => {
    const loader = routePrefetchMap["/article"];
    if (loader) loader();
  }, []);

  // Use the first section image if available, otherwise fall back to the main article image
  const coverImage = article.sections?.[0]?.image || article.image;

  return (
    <Link to={`/article/${article.slug}`} onMouseEnter={prefetch}>
      <article className="group cursor-pointer hover-lift bg-card rounded-2xl overflow-hidden shadow-warm">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={coverImage}
            srcSet={`${coverImage} 400w, ${coverImage} 600w, ${coverImage} 800w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={article.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 space-y-3">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full">
            {article.category}
          </span>
          <h3 className="text-lg font-display leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;