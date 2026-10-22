export interface ArticleSection {
  title: string;
  content: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Lightweight listing data. `image` is the card/cover image. The heavy body
// (intro, sections, faqs) lives in src/data/content/<slug>.json and is loaded
// on demand so it stays out of the main bundle.
export interface Article {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAspectRatio?: "16:9" | "1:1";
}

export interface ArticleContent {
  intro?: string;
  sections?: ArticleSection[];
  faqs?: FAQ[];
}

const contentModules = import.meta.glob<ArticleContent>("./content/*.json", {
  import: "default",
});

export const loadArticleContent = async (slug: string): Promise<ArticleContent> => {
  const load = contentModules[`./content/${slug}.json`];
  return load ? load() : {};
};

export const articles: Article[] = [
  {
    id: "7",
    slug: "king-size-bed-guide-dimensions",
    date: "2026-01-25",
    title: "King Size Bed Guide: 21 Dimensions & Benefits",
    excerpt: "Explore the complete guide to king size beds including standard, California, split, European, and custom options for every bedroom.",
    category: "Bedroom",
    image: "/assets/king-bed-01.webp"
  },
  {
    id: "13",
    slug: "best-jacuzzi-ideas-backyard",
    date: "2026-01-25",
    title: "Best Jacuzzi Ideas for Your Backyard: 24 Ways",
    excerpt: "Transform your outdoor space into a luxurious retreat with these inspiring jacuzzi designs, from modern minimalist to tropical paradise.",
    category: "Garden",
    image: "/assets/jacuzzi-01.webp"
  },
  {
    id: "14",
    slug: "bedroom-earth-tones-neutral-ideas",
    date: "2026-01-25",
    title: "Bedroom Earth Tones: 22 Cozy Neutral Ideas",
    excerpt: "Discover warm, grounding color palettes that transform your bedroom into a peaceful retreat with timeless earth-inspired neutrals.",
    category: "Bedroom",
    image: "/assets/earth-tone-01.webp"
  },
  {
    id: "15",
    slug: "romantic-moody-bedroom-tips-design-ideas",
    date: "2026-01-27",
    title: "Romantic Moody Bedroom Tips: 25 Design Ideas",
    excerpt: "Create an intimate and cozy retreat with deep tones, soft textures, and warm lighting for the ultimate romantic bedroom atmosphere.",
    category: "Bedroom",
    image: "/assets/moody-bedroom-01.webp"
  },
  {
    id: "16",
    slug: "modern-living-room-ideas-2026-trends",
    date: "2026-01-27",
    title: "Modern Living Room Ideas 2026: 21 Trends",
    excerpt: "Discover the top living room trends for 2026, from warm neutrals and curved furniture to layered textures and timeless modern comfort.",
    category: "Living Room",
    image: "/assets/living-room-2026-01.webp"
  },
  {
    id: "18",
    slug: "small-room-bedroom-ideas-easy-tips",
    date: "2026-01-29",
    title: "Small Room Bedroom Ideas: 23 Easy Tips",
    excerpt: "Discover 23 practical tips to maximize space, style, and functionality in small bedrooms without sacrificing comfort.",
    category: "Bedroom",
    image: "/assets/small-room-bedroom-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "21",
    slug: "diy-wall-decor-easy-budget-projects",
    date: "2026-01-29",
    title: "DIY Wall Decor: 23 Easy Budget Projects",
    excerpt: "Discover 23 affordable and creative DIY wall décor ideas to transform blank walls without breaking the bank.",
    category: "Living Room",
    image: "/assets/diy-wall-decor-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "22",
    slug: "home-gym-inspiration-easy-space-ideas",
    date: "2026-01-29",
    title: "Home Gym Inspiration: 24 Easy Space Ideas",
    excerpt: "Discover 24 smart ideas to create an efficient home gym in any space, from compact corners to multi-purpose rooms.",
    category: "Living Room",
    image: "/assets/home-gym-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "23",
    slug: "room-decor-diy-easy-project-ideas",
    date: "2026-01-29",
    title: "Room Decor DIY: 20 Easy Project Ideas",
    excerpt: "Discover 20 creative and budget-friendly DIY décor projects to personalize any room with style and charm.",
    category: "Living Room",
    image: "/assets/room-decor-diy-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "24",
    slug: "kitchen-counter-decor-ideas-transform-space",
    date: "2026-01-29",
    title: "Kitchen Counter Decor: 21 Ideas to Transform Your Space",
    excerpt: "Discover 21 stylish and functional ideas to elevate your kitchen countertops with décor that balances beauty and practicality.",
    category: "Kitchen",
    image: "/assets/kitchen-counter-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "25",
    slug: "modern-farmhouse-kitchen-ideas",
    date: "2026-01-29",
    title: "Modern Farmhouse Kitchen 2026: 23 Ideas",
    excerpt: "Discover 23 inspiring ideas to create a modern farmhouse kitchen that blends rustic charm with contemporary functionality.",
    category: "Kitchen",
    image: "/assets/modern-farmhouse-kitchen-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "26",
    slug: "small-kitchen-decor-maximize-space",
    date: "2026-01-29",
    title: "Small Kitchen Decor: 20 Ways to Maximize Space",
    excerpt: "Discover 20 smart décor ideas to make the most of your small kitchen with style, organization, and efficiency.",
    category: "Kitchen",
    image: "/assets/small-kitchen-01.webp"
  },
  {
    id: "30",
    slug: "finished-basement-ideas",
    date: "2026-02-02",
    title: "Finished Basement Ideas: 18 Add Style & Value",
    excerpt: "Transform your basement into a stylish and functional space that adds real value to your home with these 18 inspiring design ideas.",
    category: "Basement",
    image: "/assets/basement-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "27",
    slug: "luxury-master-bathroom-spa-ideas",
    date: "2026-02-02",
    title: "Luxury Master Bathroom: 17 Spa-Like Ideas",
    excerpt: "Transform your master bathroom into a personal spa retreat with these 17 luxurious design ideas that blend comfort, elegance, and timeless style.",
    category: "Bathroom",
    image: "/assets/luxury-master-bathroom-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "28",
    slug: "floating-nightstand-ideas-small-room",
    date: "2026-02-03",
    title: "Floating Nightstand Ideas 2026: 20 Small Room Solutions",
    excerpt: "Discover 20 space-saving floating nightstand ideas perfect for small bedrooms. From minimal wood shelves to built-in charging stations.",
    category: "Bedroom",
    image: "/assets/floating-nightstand-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "29",
    slug: "boho-gallery-wall-decor-ideas",
    date: "2026-09-25",
    title: "Boho Gallery Wall Decor: 15 Ideas for a Stylish Home",
    excerpt: "Learn how to build an effortless, collected-over-years boho gallery wall with 15 ideas that layer texture, shape, and natural materials.",
    category: "Living Room",
    image: "/assets/boho-gallery-wall-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "30",
    slug: "home-office-ideas-stylish-productive-space",
    date: "2026-09-25",
    title: "17 Home Office Ideas for a Stylish and Productive Space",
    excerpt: "Working from home is easier when your space feels good. Explore 17 home office ideas covering desks, lighting, storage, and decor for any size of space.",
    category: "Home Office",
    image: "/assets/home-office-01.webp"
  },
  {
    id: "31",
    slug: "small-apartment-ideas-make-the-most-of-your-space",
    date: "2026-09-27",
    title: "19 Small Apartment Ideas to Make the Most of Your Space",
    excerpt: "Living in a small apartment doesn't mean sacrificing comfort or style. Explore 19 small apartment ideas covering furniture, storage, layout, and decor to help every square foot work harder.",
    category: "Living Room",
    image: "/assets/small-apartment-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "32",
    slug: "trendy-apartment-decor-ideas-this-year",
    date: "2026-09-27",
    title: "15 Trendy Apartment Decor Ideas to Try This Year",
    excerpt: "Refresh your space with these 15 apartment decor ideas for this year, from warm color palettes to curved furniture, arched mirrors, and renter friendly upgrades.",
    category: "Living Room",
    image: "/assets/trendy-apartment-decor-01.webp"
  },
  {
    id: "33",
    slug: "first-apartment-tips-everyone-should-know",
    date: "2026-09-28",
    title: "16 First Apartment Tips Everyone Should Know",
    excerpt: "Practical, no-fuss advice for moving into your first apartment, from measuring furniture to setting up storage and feeling at home faster.",
    category: "Apartment",
    image: "/assets/apartment-tips-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "34",
    slug: "first-apartment-essentials-list",
    date: "2026-09-28",
    title: "The Ultimate 17 Item First Apartment Essentials List",
    excerpt: "A practical shopping checklist covering the bedroom, kitchen, bathroom, and storage items every first apartment actually needs.",
    category: "Apartment",
    image: "/assets/apartment-essentials-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "35",
    slug: "eucalyptus-vase-decor-ideas",
    date: "2026-09-29",
    title: "18 Eucalyptus Vase Decor Ideas for a Fresh, Natural Look",
    excerpt: "Bring a fresh, natural feel into your home with these simple eucalyptus arrangement ideas for every room and style.",
    category: "Living Room",
    image: "/assets/eucalyptus-vase-decor-01.webp"
  },
  {
    id: "36",
    slug: "kitchen-organization-ideas-functional-space",
    date: "2026-09-29",
    title: "16 Kitchen Organization Ideas for a More Functional Space",
    excerpt: "Simple, practical ways to organize drawers, cabinets, and countertops so your kitchen is easier to use every day.",
    category: "Kitchen",
    image: "/assets/kitchen-organization-01.webp"
  },
  {
    id: "37",
    slug: "cloffice-ideas-home-office",
    date: "2026-09-30",
    title: "13 Cloffice Ideas to Inspire Your Home Office",
    excerpt: "Turn an unused closet into a functional home office with these desk, lighting, storage, and decor ideas for compact workspaces.",
    category: "Home Office",
    image: "/assets/cloffice-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "38",
    slug: "affordable-apartment-essentials-worth-buying",
    date: "2026-09-30",
    title: "21 Affordable Apartment Essentials Worth Buying",
    excerpt: "Practical, budget-friendly picks for storage, the kitchen, cleaning, and everyday comfort that make a new apartment feel like home.",
    category: "Apartment",
    image: "/assets/affordable-apartment-essentials-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "39",
    slug: "small-space-pantry-ideas",
    date: "2026-10-01",
    title: "13 Pantry Ideas for Small Spaces",
    excerpt: "Clever ways to turn narrow cabinets, empty walls, and awkward corners into organized pantry storage for a small kitchen.",
    category: "Kitchen",
    image: "/assets/small-space-pantry-ideas-01.webp"
  },
  {
    id: "40",
    slug: "affordable-couches-stylish-living-room",
    date: "2026-10-01",
    title: "12 Best Affordable Couches for Stylish Living Rooms",
    excerpt: "Budget-friendly couch ideas in versatile colors and shapes that make a living room feel stylish without a big furniture bill.",
    category: "Living Room",
    image: "/assets/affordable-couches-living-room-01.webp"
  },
  {
    id: "41",
    slug: "small-studio-apartment-ideas",
    date: "2026-10-02",
    title: "14 Small Studio Apartment Ideas for Smart Living",
    excerpt: "Fourteen ways to zone, store and style a studio apartment so every square foot feels organized, bright and comfortable.",
    category: "Apartment",
    image: "/assets/small-studio-apartment-ideas-01.webp"
  },
  {
    id: "42",
    slug: "small-closet-organization-ideas",
    date: "2026-10-02",
    title: "18 Small Closet Organization Ideas That Save Space",
    excerpt: "Eighteen simple ways to get more out of a small closet, from a second hanging rod to door organizers and clear storage boxes.",
    category: "Bedroom",
    image: "/assets/small-closet-organization-ideas-01.webp"
  },
  {
    id: "43",
    slug: "neutral-living-room-decor-ideas",
    date: "2026-10-04",
    title: "19 Neutral Living Room Decor Ideas for a Warm and Serene Space",
    excerpt: "Nineteen ways to build a warm, serene neutral living room with layered beiges, natural wood, linen, woven textures and soft accents.",
    category: "Living Room",
    image: "/assets/neutral-living-room-decor-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "44",
    slug: "bathroom-closet-organization-ideas",
    date: "2026-10-04",
    title: "17 Bathroom Closet Organization Ideas for a More Functional Space",
    excerpt: "Seventeen simple ways to organize a bathroom closet, from matching bins and rolled towels to shelf risers, door organizers and a restock basket.",
    category: "Bathroom",
    image: "/assets/bathroom-closet-organization-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "45",
    slug: "bedroom-curtains-ideas",
    date: "2026-10-05",
    title: "19 Bedroom Curtains Ideas for a Beautiful and Cozy Room",
    excerpt: "Nineteen bedroom curtain ideas, from soft white linen and sheers to blackout panels, velvet and layered window treatments.",
    category: "Bedroom",
    image: "/assets/bedroom-curtains-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "46",
    slug: "bathroom-decor-ideas",
    date: "2026-10-05",
    title: "15 Bathroom Decor Ideas for a Stylish Refresh",
    excerpt: "Fifteen bathroom decor ideas for a stylish refresh, from framed mirrors and natural wood to wall sconces, woven baskets and layered textures.",
    category: "Bathroom",
    image: "/assets/bathroom-decor-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "47",
    slug: "cozy-living-room-ideas",
    date: "2026-10-06",
    title: "11 Cozy Living Room Ideas for a Warm and Inviting Home",
    excerpt: "Eleven cozy living room ideas, from layered textures and warm lighting to natural wood, large rugs and personal decor.",
    category: "Living Room",
    image: "/assets/cozy-living-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "48",
    slug: "cozy-bedroom-ideas",
    date: "2026-10-06",
    title: "16 Cozy Bedroom Ideas for a Warm and Inviting Space",
    excerpt: "Sixteen cozy bedroom ideas, from layered bedding and warm lighting to natural wood, soft textiles and a clutter-free layout.",
    category: "Bedroom",
    image: "/assets/cozy-bedroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "49",
    slug: "kitchen-counter-styling-ideas",
    date: "2026-10-07",
    title: "12 Kitchen Counter Styling Ideas for a Clean and Beautiful Kitchen",
    excerpt: "Twelve kitchen counter styling ideas, from wooden cutting boards and coffee stations to fresh greenery and a counter area left completely clear.",
    category: "Kitchen",
    image: "/assets/kitchen-counter-styling-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "50",
    slug: "entryway-table-decor-ideas",
    date: "2026-10-07",
    title: "17 Entryway Table Decor Ideas for a Stylish and Welcoming Home",
    excerpt: "Seventeen entryway table decor ideas, from mirrors and table lamps to greenery, baskets and layered heights for a welcoming first impression.",
    category: "Living Room",
    image: "/assets/entryway-table-decor-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "51",
    slug: "cozy-minimalist-bedroom-ideas",
    date: "2026-10-08",
    title: "17 Cozy Minimalist Bedroom Ideas for a Calm and Beautiful Space",
    excerpt: "Seventeen cozy minimalist bedroom ideas, from soft neutral palettes and layered bedding to warm lighting, natural wood and clear surfaces.",
    category: "Bedroom",
    image: "/assets/cozy-minimalist-bedroom-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "52",
    slug: "room-inspo-aesthetic-ideas",
    date: "2026-10-08",
    title: "19 Room Inspo Aesthetic Ideas for a Stylish and Cozy Home",
    excerpt: "Nineteen room inspo aesthetic ideas, from soft neutral bedrooms and warm lighting to natural wood, mixed textures and a cozy evening atmosphere.",
    category: "Living Room",
    image: "/assets/room-inspo-aesthetic-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "53",
    slug: "minimalist-bedroom-ideas",
    date: "2026-10-10",
    title: "14 Minimalist Bedroom Ideas for a Calm and Clutter Free Space",
    excerpt: "Fourteen minimalist bedroom ideas, from soft neutral palettes and low profile beds to floating nightstands, built in storage and a simple daily reset.",
    category: "Bedroom",
    image: "/assets/minimalist-bedroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "54",
    slug: "living-room-inspo-ideas",
    date: "2026-10-10",
    title: "13 Living Room Inspo Ideas for a Stylish and Cozy Home",
    excerpt: "Thirteen living room inspo ideas, from warm neutral palettes and cozy sectionals to layered lighting, gallery walls, earthy colors and reading corners.",
    category: "Living Room",
    image: "/assets/living-room-inspo-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "55",
    slug: "cozy-reading-chairs",
    date: "2026-10-11",
    title: "13 Cozy Reading Chairs for the Perfect Reading Corner",
    excerpt: "Thirteen cozy reading chair ideas, from oversized upholstered armchairs and boucle to wingbacks, rattan and leather, plus tips for choosing the right one.",
    category: "Living Room",
    image: "/assets/cozy-reading-chairs-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "56",
    slug: "minimalist-living-room-ideas",
    date: "2026-10-11",
    title: "15 Minimalist Living Room Ideas for a Clean and Timeless Look",
    excerpt: "Fifteen minimalist living room ideas using neutral colors, natural wood, layered lighting and hidden storage for a clean, warm and timeless look.",
    category: "Living Room",
    image: "/assets/minimalist-living-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "57",
    slug: "minimalist-cozy-decor-ideas",
    date: "2026-10-12",
    title: "16 Minimalist Cozy Decor Ideas for a Beautiful Home",
    excerpt: "Sixteen minimalist cozy decor ideas using warm neutrals, natural wood, soft textiles and layered lighting to make a simple home feel inviting.",
    category: "Living Room",
    image: "/assets/minimalist-cozy-decor-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "58",
    slug: "contemporary-living-room-ideas",
    date: "2026-10-12",
    title: "18 Contemporary Living Room Ideas for a Modern and Elegant Home",
    excerpt: "Explore 18 contemporary living room ideas featuring neutral colors, modern furniture, natural materials, statement lighting, and elegant decor.",
    category: "Living Room",
    image: "/assets/contemporary-living-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "59",
    slug: "vintage-bathroom-ideas",
    date: "2026-10-13",
    title: "19 Vintage Bathroom Ideas for a Timeless and Charming Space",
    excerpt: "Nineteen vintage bathroom ideas featuring clawfoot tubs, pedestal sinks, patterned tiles, brass fixtures and floral wallpaper for a timeless look.",
    category: "Bathroom",
    image: "/assets/vintage-bathroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "60",
    slug: "southwestern-bathroom-ideas",
    date: "2026-10-13",
    title: "20 Southwestern Bathroom Ideas for a Warm and Rustic Look",
    excerpt: "Twenty Southwestern bathroom ideas using terracotta tiles, natural stone, rustic wood, copper fixtures and Talavera tile for a warm desert look.",
    category: "Bathroom",
    image: "/assets/southwestern-bathroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "61",
    slug: "vintage-bedroom-ideas",
    date: "2026-10-14",
    title: "20 Vintage Bedroom Ideas for a Cozy Old World Charm",
    excerpt: "Twenty vintage bedroom ideas featuring floral bedding, antique wooden frames, brass details, canopy beds and soft pastels for cozy old world charm.",
    category: "Bedroom",
    image: "/assets/vintage-bedroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "62",
    slug: "bedding-set-ideas",
    date: "2026-10-14",
    title: "17 Bedding Set Ideas for a Stylish and Cozy Bedroom",
    excerpt: "Seventeen bedding set ideas, from classic white and linen to floral, terracotta and textured neutrals, for a stylish and cozy bedroom.",
    category: "Bedroom",
    image: "/assets/bedding-set-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "63",
    slug: "green-bedroom-ideas",
    date: "2026-10-15",
    title: "15 Green Bedroom Ideas for a Fresh and Relaxing Space",
    excerpt: "Fifteen green bedroom ideas, from sage and mint to olive, forest and emerald, with natural wood, plants, rattan and warm lighting for a fresh and relaxing space.",
    category: "Bedroom",
    image: "/assets/green-bedroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "64",
    slug: "dorm-room-ideas",
    date: "2026-10-15",
    title: "17 Dorm Room Ideas to Make Your Space Feel Like Home",
    excerpt: "Seventeen dorm room ideas covering layered bedding, warm lighting, smart storage, wall art and personal details to make a small college room feel like home.",
    category: "Bedroom",
    image: "/assets/dorm-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "65",
    slug: "small-coffee-bar-ideas",
    date: "2026-10-16",
    title: "19 Small Coffee Bar Ideas for Stylish Spaces",
    excerpt: "Nineteen small coffee bar ideas, from kitchen counters and console tables to bar carts, corner cabinets and floating shelves, plus tips for keeping a compact coffee station organized.",
    category: "Kitchen",
    image: "/assets/small-coffee-bar-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "66",
    slug: "apartment-inspiration-ideas",
    date: "2026-10-16",
    title: "18 Apartment Inspiration Ideas for a Stylish and Cozy Home",
    excerpt: "Eighteen apartment inspiration ideas covering cozy neutral living rooms, small-space tricks, lighting, plants, storage, rental-friendly decor and a minimalist yet cozy style.",
    category: "Apartment",
    image: "/assets/apartment-inspiration-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "67",
    slug: "coffee-table-decor-ideas",
    date: "2026-10-17",
    title: "15 Simple Coffee Table Decor Ideas for an Elegant Look",
    excerpt: "Fifteen simple coffee table decor ideas, from decorative trays and fresh flowers to stacked books, candles, natural wood and a single statement piece.",
    category: "Living Room",
    image: "/assets/coffee-table-decor-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "68",
    slug: "wall-decor-ideas",
    date: "2026-10-17",
    title: "16 Wall Decor Ideas for a Stylish and Cozy Home",
    excerpt: "Sixteen wall decor ideas, from gallery walls and statement mirrors to floating shelves, textured panels, macrame and floating plant walls.",
    category: "Living Room",
    image: "/assets/wall-decor-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "69",
    slug: "bathroom-remodel-ideas",
    date: "2026-10-18",
    title: "13 Bathroom Remodel Ideas for a Stylish and Modern Space",
    excerpt: "Thirteen bathroom remodel ideas, from spa inspired retreats and walk in showers to floating vanities, large format tiles, wood accents and matte black fixtures.",
    category: "Bathroom",
    image: "/assets/bathroom-remodel-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "70",
    slug: "easy-ways-to-decorate-a-coffee-table",
    date: "2026-10-19",
    title: "14 Easy Ways to Decorate a Coffee Table",
    excerpt: "Fourteen easy ways to decorate a coffee table, from book stacks, trays and fresh flowers to sculptural objects, seasonal accents and keeping space free for everyday use.",
    category: "Living Room",
    image: "/assets/easy-ways-to-decorate-a-coffee-table-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "71",
    slug: "high-end-laundry-room-ideas",
    date: "2026-10-19",
    title: "17 Laundry Room Ideas Inspired by High End Interior Design",
    excerpt: "Seventeen laundry room ideas inspired by high end design, from custom cabinetry and natural stone to dark moody palettes, layered lighting and compact hotel style layouts.",
    category: "Bathroom",
    image: "/assets/high-end-laundry-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "72",
    slug: "apartment-laundry-room-ideas",
    date: "2026-10-20",
    title: "15 Apartment Laundry Room Ideas for a Clean and Modern Look",
    excerpt: "Fifteen apartment laundry room ideas for small spaces, from white and wood cabinets and stacked machines to folding countertops, vertical storage, smart lighting and renter friendly upgrades.",
    category: "Apartment",
    image: "/assets/apartment-laundry-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "73",
    slug: "small-bedroom-layout-ideas",
    date: "2026-10-22",
    title: "19 Small Bedroom Layout Ideas That Make Every Inch Count",
    excerpt: "Nineteen small bedroom layout ideas that make every inch count, from corner and under-window bed placements to loft, Murphy, and two-zone layouts with real measurements for walkways, wardrobes, desks, and shared rooms.",
    category: "Bedroom",
    image: "/assets/small-bedroom-layout-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "74",
    slug: "small-entryway-ideas",
    date: "2026-10-22",
    title: "21 Small Entryway Ideas That Make a Big Impact",
    excerpt: "Twenty-one small entryway ideas for homes without a foyer, from slim console tables and narrow shoe cabinets to wall-mounted drop zones, storage benches, mirrors, and renter-friendly no-drill setups.",
    category: "Living Room",
    image: "/assets/small-entryway-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "75",
    slug: "renter-friendly-decor-ideas",
    date: "2026-10-22",
    title: "21 Renter Friendly Decor Ideas That Won't Damage Your Walls",
    excerpt: "Twenty-one renter friendly decor ideas that prove you don't need to drill, paint, or risk your deposit to make a rental feel like home, from peel-and-stick wallpaper to leaning mirrors and plug-in sconces.",
    category: "Apartment",
    image: "/assets/renter-friendly-decor-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "76",
    slug: "small-space-storage-ideas",
    date: "2026-10-22",
    title: "20 Small Space Storage Ideas That Maximize Every Inch",
    excerpt: "Twenty small space storage ideas that use walls, height and hidden gaps, from floor-to-ceiling shelving and under-bed drawers to slim rolling carts, pegboards and labeled baskets on high shelves.",
    category: "Apartment",
    image: "/assets/small-space-storage-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "77",
    slug: "greenery-bedroom-ideas",
    date: "2026-10-22",
    title: "17 Greenery Bedroom Ideas for a Fresh, Plant-Filled Space",
    excerpt: "Seventeen greenery bedroom ideas for a fresh and relaxing space, from a tall corner plant and trailing pothos to hanging planters, terrariums, snake plants and realistic faux greenery for darker rooms.",
    category: "Bedroom",
    image: "/assets/greenery-bedroom-ideas-01.webp",
    imageAspectRatio: "1:1"
  },
  {
    id: "78",
    slug: "narrow-laundry-room-ideas",
    date: "2026-10-22",
    title: "18 Narrow Laundry Room Ideas for a Clean and Organized Space",
    excerpt: "Eighteen narrow laundry room ideas for tight galley spaces, from stacking machines and pocket doors to ceiling high cabinets, slim carts, fold down counters and lighting that makes a small room feel wider every day.",
    category: "Apartment",
    image: "/assets/narrow-laundry-room-ideas-01.webp",
    imageAspectRatio: "1:1"
  }
];
