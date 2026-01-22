const HeroSection = () => {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="opacity-0 animate-fade-in text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6 block">
            Interior Design Journal
          </span>
          <h1 className="opacity-0 animate-fade-in-delay-1 text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] tracking-tight mb-8">
            Spaces that
            <br />
            inspire living
          </h1>
          <p className="opacity-0 animate-fade-in-delay-2 text-muted-foreground text-lg md:text-xl font-light max-w-md leading-relaxed">
            Curated articles on creating beautiful, functional spaces for modern life.
          </p>
          <div className="opacity-0 animate-fade-in-delay-3 mt-8 h-px w-16 bg-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
