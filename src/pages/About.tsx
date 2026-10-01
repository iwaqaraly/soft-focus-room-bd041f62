import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-light text-foreground mb-2">About CozzyAbode</h1>
          <p className="text-muted-foreground">A home ideas site, organized room by room</p>
        </header>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>
            CozzyAbode publishes ideas for the rooms people actually live in: apartments, kitchens, bedrooms, home offices, bathrooms, basements and gardens. Each article is a numbered list of ideas with a picture for every one, so you can scan it quickly and keep the ones that suit your space.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">How to use the site</h2>
            <p>
              Pick a room from the menu to see every article on it. Most articles end with a short guide to choosing between the ideas, and a set of questions people commonly ask about the topic.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">A note on the advice</h2>
            <p>
              The articles are general guidance, not professional design, construction or electrical advice. Measure your own space, check your lease before drilling into walls, and hire a licensed professional for anything involving wiring, plumbing or structure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Get in touch</h2>
            <p>
              Corrections, questions and article suggestions are welcome:{" "}
              <a href="mailto:cozyyspace001@gmail.com" className="text-primary hover:underline">
                cozyyspace001@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
