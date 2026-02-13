import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  return (
    <section ref={ref} className="bg-background">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl order-2 lg:order-1 opacity-0 animate-fade-in">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-primary/80 mb-6 px-4 py-2 bg-primary/10 rounded-full">
              Interior Design Journal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-[1.15] tracking-tight mb-6">
              Create spaces
              <br />
              <span className="text-primary">that feel like home</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light max-w-md leading-relaxed mb-10">
              Discover curated inspiration and practical ideas for crafting warm,
              inviting spaces that reflect your personal style.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-primary/40 rounded-full" />
              <span className="text-sm text-muted-foreground italic">Explore our latest ideas</span>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-delay-1">
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[380px] md:h-[480px]">
              <div className="col-span-8 row-span-6 overflow-hidden rounded-2xl shadow-warm-lg hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75&fm=webp"
                  srcSet="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=75&fm=webp 400w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75&fm=webp 600w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75&fm=webp 800w"
                  sizes="(max-width: 768px) 60vw, 40vw"
                  alt="Elegant warm-toned living room with natural light"
                  loading="eager"
                  decoding="async"
                  // @ts-expect-error - fetchpriority is valid HTML but React types don't support it yet
                  fetchpriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top right image */}
              <div className="col-span-4 row-span-3 overflow-hidden rounded-xl shadow-warm hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&q=75&fm=webp"
                  srcSet="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=200&q=75&fm=webp 200w, https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&q=75&fm=webp 300w"
                  sizes="(max-width: 768px) 30vw, 20vw"
                  alt="Cozy bedroom with earth tone decor"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom right image */}
              <div className="col-span-4 row-span-3 overflow-hidden rounded-xl shadow-warm hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&q=75&fm=webp"
                  srcSet="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&q=75&fm=webp 200w, https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=300&q=75&fm=webp 300w"
                  sizes="(max-width: 768px) 30vw, 20vw"
                  alt="Stylish kitchen with warm wood accents"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;