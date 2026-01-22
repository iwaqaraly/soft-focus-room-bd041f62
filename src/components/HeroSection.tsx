const HeroSection = () => {
  return (
    <section className="border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <span className="opacity-0 animate-fade-in text-xs font-medium uppercase tracking-[0.2em] text-navy-light mb-6 block">
              Interior Design Journal
            </span>
            <h1 className="opacity-0 animate-fade-in-delay-1 text-5xl md:text-6xl lg:text-7xl font-light text-navy leading-[1.1] tracking-tight mb-8">
              Spaces that
              <br />
              inspire living
            </h1>
            <p className="opacity-0 animate-fade-in-delay-2 text-muted-foreground text-lg md:text-xl font-light max-w-md leading-relaxed">
              Curated articles on creating beautiful, functional spaces for modern life.
            </p>
            <div className="opacity-0 animate-fade-in-delay-3 mt-8 h-px w-16 bg-navy" />
          </div>

          {/* Right: Abstract Composition */}
          <div className="relative h-[400px] md:h-[500px] opacity-0 animate-fade-in-delay-2">
            {/* Navy rectangle - main block */}
            <div className="absolute top-12 right-0 w-48 h-64 md:w-64 md:h-80 bg-navy rounded-sm" />
            
            {/* Cream square overlay */}
            <div className="absolute top-32 right-24 md:right-32 w-40 h-40 md:w-52 md:h-52 bg-cream border border-border" />
            
            {/* Small navy square */}
            <div className="absolute bottom-20 left-8 md:left-16 w-20 h-20 md:w-24 md:h-24 bg-navy" />
            
            {/* Outline rectangle */}
            <div className="absolute top-0 left-20 md:left-28 w-32 h-48 md:w-40 md:h-56 border-2 border-navy/30" />
            
            {/* Accent circle */}
            <div className="absolute bottom-8 right-16 md:right-24 w-12 h-12 rounded-full border-2 border-navy" />
            
            {/* Horizontal line accent */}
            <div className="absolute top-1/2 left-0 w-16 h-0.5 bg-navy/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
