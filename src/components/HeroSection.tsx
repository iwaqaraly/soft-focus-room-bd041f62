const HeroSection = () => {
  return (
    <section className="border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
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

          {/* Right: Geometric Design */}
          <div className="relative h-[400px] md:h-[500px] opacity-0 animate-fade-in-delay-2">
            {/* Large circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border border-border" />
            
            {/* Medium filled circle */}
            <div className="absolute top-8 right-8 md:right-16 w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted" />
            
            {/* Small accent circle */}
            <div className="absolute bottom-16 left-8 md:left-16 w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground" />
            
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-border" />
            
            {/* Vertical line */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-border" />
            
            {/* Small square */}
            <div className="absolute bottom-24 right-12 md:right-24 w-12 h-12 border border-foreground rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
