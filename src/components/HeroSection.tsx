import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles, Article } from "@/data/articles";

const articlePath = (article: Article) =>
  `/${article.category.toLowerCase().replace(/ /g, "-")}/${article.slug}`;

const coverOf = (article: Article) => article.sections?.[0]?.image || article.image;

interface FeatureCardProps {
  article: Article;
  className?: string;
  priority?: boolean;
}

const FeatureCard = ({ article, className = "", priority = false }: FeatureCardProps) => (
  <Link
    to={articlePath(article)}
    className={`group relative block overflow-hidden rounded-2xl bg-muted shadow-warm hover-lift ${className}`}
  >
    <img
      src={coverOf(article)}
      alt={article.title}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-x-3 bottom-3 rounded-xl bg-card/95 p-4 backdrop-blur-sm">
      <span className="text-[0.65rem] font-medium uppercase tracking-wider text-primary">
        {article.category}
      </span>
      <h3 className="mt-1 text-sm font-display leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
        {article.title}
      </h3>
    </div>
  </Link>
);

const HeroSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const [first, second, third] = articles.slice(-3).reverse();
  const roomCount = new Set(articles.map((a) => a.category)).size;

  return (
    <section ref={ref} className="bg-background">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: text */}
          <div className="lg:col-span-5 opacity-0 animate-fade-in">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary/80 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              Home &amp; Interior Ideas
            </span>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-[1.1] tracking-tight mb-6">
              Home ideas
              <br />
              <span className="text-primary">you can actually use</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light max-w-md leading-relaxed mb-8">
              Room-by-room ideas, buying guides and small fixes for apartments,
              kitchens, bedrooms and everything in between.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#latest"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm-lg"
              >
                Read the latest
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#rooms"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm"
              >
                Browse by room
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="h-px w-12 bg-primary/40 rounded-full" />
              <span>
                {articles.length} articles across {roomCount} rooms
              </span>
            </div>
          </div>

          {/* Right: newest articles */}
          <div className="lg:col-span-7 opacity-0 animate-fade-in-delay-1">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:h-[520px]">
              <FeatureCard
                article={first}
                priority
                className="col-span-2 h-72 sm:h-96 lg:col-span-3 lg:row-span-2 lg:h-auto"
              />
              <FeatureCard article={second} className="h-56 lg:col-span-2 lg:h-auto" />
              <FeatureCard article={third} className="h-56 lg:col-span-2 lg:h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
