import { useParams, Link, useLocation } from "react-router-dom";
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

  const isSquareLayout = article.imageAspectRatio === "1:1";

  return (
    <PageLayout>
      <article className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/${article.category.toLowerCase().replace(" ", "-")}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {article.category}
          </Link>

          <header className="mb-16">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-light text-foreground mt-2 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          </header>
        </div>

        {/* Sections */}
        {article.sections && article.sections.length > 0 && (
          <div className={isSquareLayout ? "max-w-6xl mx-auto" : "max-w-4xl mx-auto"}>
            {isSquareLayout ? (
              // Card Grid Layout for Square Images - Alternating Left/Right
              <div className="grid gap-8 md:gap-12">
                {article.sections.map((section, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className="group grid md:grid-cols-2 gap-6 md:gap-10 items-center"
                    >
                      {/* Content */}
                      <div className={`flex flex-col justify-center py-4 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {index + 1}
                          </span>
                          <h2 className="text-xl md:text-2xl font-medium text-foreground leading-tight">
                            {section.title.replace(/^\d+\.\s*/, '')}
                          </h2>
                        </div>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-[52px]">
                          {section.content}
                        </div>
                      </div>

                      {/* Image */}
                      {section.image && (
                        <div className={`relative overflow-hidden rounded-2xl bg-muted/30 shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                          <div className="aspect-square">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              // Standard Vertical Layout for Wide Images
              <div className="space-y-12">
                {article.sections.map((section, index) => (
                  <section key={index} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">
                      {section.title}
                    </h2>
                    {section.image && (
                      <div className="overflow-hidden rounded-lg aspect-[16/9]">
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
          </div>
        )}

        {/* FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              Frequently Asked Questions
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
