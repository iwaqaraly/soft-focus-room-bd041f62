const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 animate-scale-in">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
          alt="Modern interior design"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <span className="opacity-0 animate-fade-in text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
          Interior Design Journal
        </span>
        <h1 className="opacity-0 animate-fade-in-delay-1 text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
          Spaces that inspire living
        </h1>
        <p className="opacity-0 animate-fade-in-delay-2 text-muted-foreground text-lg font-light max-w-md mx-auto">
          Curated articles on creating beautiful, functional spaces for modern life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
