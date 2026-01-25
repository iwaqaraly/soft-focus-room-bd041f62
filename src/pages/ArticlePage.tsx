import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

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
                {section.image && (
                  <div className="w-[80%] aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        )}

        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              Frequently Asked Questions About King Size Beds
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {article.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </article>
    </PageLayout>
  );
};

export default ArticlePage;
