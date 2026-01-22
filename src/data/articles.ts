export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Minimalist Bedroom Design",
    excerpt: "Discover how less can truly be more when creating a serene sleeping space that promotes rest and relaxation.",
    category: "Bedroom",
    author: "Emma Chen",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
  },
  {
    id: "2",
    title: "Scandinavian Living Room Ideas",
    excerpt: "Embrace the hygge lifestyle with these cozy yet functional Scandinavian-inspired living room concepts.",
    category: "Living Room",
    author: "Lars Andersen",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
  },
  {
    id: "3",
    title: "Creating the Perfect Sleep Sanctuary",
    excerpt: "Transform your bedroom into a haven of tranquility with these expert tips on color, lighting, and textiles.",
    category: "Bedroom",
    author: "Sofia Martinez",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
  },
  {
    id: "4",
    title: "Modern Kitchen Essentials",
    excerpt: "The must-have elements for a contemporary kitchen that balances beauty with functionality.",
    category: "Kitchen",
    author: "James Wilson",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
  },
  {
    id: "5",
    title: "Bedroom Lighting That Sets the Mood",
    excerpt: "From ambient to task lighting, learn how to layer light sources for a bedroom that adapts to your needs.",
    category: "Bedroom",
    author: "Mia Thompson",
    date: "Jan 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
  },
  {
    id: "6",
    title: "Small Space Living Solutions",
    excerpt: "Clever design strategies to maximize every square foot of your compact living space.",
    category: "Living Room",
    author: "Alex Kim",
    date: "Jan 3, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
  }
];
