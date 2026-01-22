const HeroSection = () => {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl order-2 lg:order-1">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy-light mb-6 block">
              Interior Design Journal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.1] tracking-tight mb-6">
              Spaces that
              <br />
              inspire living
            </h1>
            <p className="text-muted-foreground text-lg font-light max-w-md leading-relaxed mb-8">
              Curated articles on creating beautiful, functional spaces for modern life.
            </p>
            <div className="h-px w-16 bg-navy" />
          </div>

          {/* Right: Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[350px] md:h-[450px]">
              {/* Main large image */}
              <div className="col-span-8 row-span-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Modern living room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Top right image */}
              <div className="col-span-4 row-span-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80"
                  alt="Minimalist bedroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Bottom right image */}
              <div className="col-span-4 row-span-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80"
                  alt="Cozy interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
