export interface ArticleSection {
  title: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  sections?: ArticleSection[];
  faqs?: FAQ[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Minimalist Bedroom Design",
    excerpt: "Discover how less can truly be more when creating a serene sleeping space that promotes rest and relaxation.",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80"
  },
  {
    id: "2",
    title: "Scandinavian Living Room Ideas",
    excerpt: "Embrace the hygge lifestyle with these cozy yet functional Scandinavian-inspired living room concepts.",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
  },
  {
    id: "3",
    title: "Creating the Perfect Sleep Sanctuary",
    excerpt: "Transform your bedroom into a haven of tranquility with these expert tips on color, lighting, and textiles.",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
  },
  {
    id: "4",
    title: "Modern Kitchen Essentials",
    excerpt: "The must-have elements for a contemporary kitchen that balances beauty with functionality.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
  },
  {
    id: "5",
    title: "Bedroom Lighting That Sets the Mood",
    excerpt: "From ambient to task lighting, learn how to layer light sources for a bedroom that adapts to your needs.",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
  },
  {
    id: "6",
    title: "Small Space Living Solutions",
    excerpt: "Clever design strategies to maximize every square foot of your compact living space.",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
  },
  {
    id: "7",
    title: "King Size Bed Guide: 21 Dimensions & Benefits",
    excerpt: "Explore the complete guide to king size beds including standard, California, split, European, and custom options for every bedroom.",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    sections: [
      {
        title: "1. Standard King Bed (US King)",
        content: "The Standard King bed is one of the most popular luxury bed sizes, offering generous sleeping space for couples. It's ideal for master bedrooms where comfort is a priority. With ample width, it allows both sleepers to stretch freely without disturbing each other, making it perfect for light sleepers.\n\nThis size works best in medium-to-large bedrooms and pairs beautifully with statement headboards. It's also great for parents who occasionally co-sleep with kids. If you value personal space and a premium bedroom feel, this king size is a reliable and timeless choice."
      },
      {
        title: "2. California King Bed",
        content: "The California King bed is designed for people who need extra length rather than extra width. Taller sleepers often prefer this option because it provides better legroom without compromising comfort. It's a smart choice for narrow but long bedrooms.\n\nThis bed size adds a sleek, upscale look to the room and is commonly seen in luxury homes and hotels. While slightly narrower than a standard king, it still feels spacious. If height is your main concern, the California King offers both comfort and refined aesthetics."
      },
      {
        title: "3. Split King Bed",
        content: "A Split King bed is essentially two twin XL mattresses placed side by side. This design allows couples to customize firmness on each side, making it ideal for different sleep preferences. It's especially popular with adjustable bed frames.\n\nThis option is excellent for people with back pain or differing sleep schedules. Motion isolation is a major benefit, as movement on one side doesn't affect the other. If flexibility and personalized comfort matter most, a split king setup is worth considering."
      },
      {
        title: "4. European King Bed",
        content: "European King beds are slightly different in proportions compared to US kings, offering a balanced mix of width and comfort. They're commonly used in upscale apartments and contemporary homes across Europe and Asia.\n\nThis size fits well in modern interiors where space planning matters. It provides enough room for couples while maintaining a sleek, minimalist look. If you prefer international design standards or imported furniture, a European King bed can be a stylish and practical option."
      },
      {
        title: "5. UK Super King Bed",
        content: "The UK Super King is larger than a standard UK king, making it one of the most spacious options available. It's perfect for those who want maximum sleeping space without compromise.\n\nThis bed size is ideal for large master bedrooms and luxury homes. It creates a hotel-like experience and allows complete freedom of movement during sleep. If you prioritize comfort, space, and a premium lifestyle, the Super King is an excellent upgrade."
      },
      {
        title: "6. Texas King Bed",
        content: "The Texas King bed is designed for extra-large bedrooms and tall individuals. It offers impressive length, making it suitable for people over six feet tall who want unrestricted comfort.\n\nThis bed size is often custom-made and adds a bold, statement feel to any bedroom. It's not ideal for smaller spaces but shines in large homes. If you want a unique, oversized bed that stands out, the Texas King delivers both comfort and wow factor."
      },
      {
        title: "7. Wyoming King Bed",
        content: "The Wyoming King bed provides equal emphasis on width and length, making it perfect for families who co-sleep or pet owners. It offers a square-like sleeping surface that feels expansive.\n\nThis bed is best suited for very large rooms and custom interiors. It delivers unmatched comfort and freedom of movement. If you want a bed that truly feels unlimited in space, the Wyoming King is one of the most generous options available."
      },
      {
        title: "8. Alaska King Bed",
        content: "The Alaska King bed is one of the largest mattress sizes in the world. It's designed for people who want absolute maximum space, whether for family sleeping or luxury comfort.\n\nThis size requires a custom bedroom layout and special bedding. It's not practical for most homes but perfect for villas or luxury retreats. If space is not a limitation and comfort is non-negotiable, the Alaska King is unmatched."
      },
      {
        title: "9. Asian King Bed",
        content: "Asian King beds are often slightly more compact than Western kings, making them suitable for apartments and urban homes. They balance comfort with space efficiency.\n\nThis size works well in modern Asian interiors where room sizes are optimized. It still offers enough space for couples while fitting neatly into smaller layouts. If you want king-level comfort without overwhelming the room, this is a smart choice."
      },
      {
        title: "10. Custom King Bed",
        content: "A custom king bed allows you to define your own dimensions based on room size and personal needs. It's perfect for unique layouts or non-standard bedrooms.\n\nThis option offers complete freedom in design, materials, and comfort. While it may cost more, the result is a bed tailored exactly to your lifestyle. If standard sizes don't work for you, custom is the ultimate solution."
      },
      {
        title: "11. Adjustable King Bed",
        content: "An adjustable king bed focuses on ergonomic support and lifestyle comfort. It allows you to raise or lower different sections for sleeping, reading, or relaxation.\n\nThis type is ideal for people with health concerns, back pain, or those who enjoy multifunctional furniture. It combines luxury with practicality. If comfort and functionality are priorities, an adjustable king bed is a modern must-have."
      },
      {
        title: "12. Hotel King Bed",
        content: "Hotel king beds are designed for universal comfort and durability. They focus on medium firmness, plush layering, and long-term support.\n\nThis style brings a five-star sleeping experience into your home. It's ideal for guest rooms or master bedrooms where comfort matters most. If you love hotel-style sleep, this king bed type is worth replicating."
      },
      {
        title: "13. Storage King Bed",
        content: "A storage king bed combines spacious sleeping with practical under-bed storage. It's perfect for homes where maximizing space is important.\n\nThis design is especially useful in apartments or smaller houses. You can store bedding, clothes, or seasonal items discreetly. If functionality matters as much as comfort, a storage king bed is a smart investment."
      },
      {
        title: "14. Platform King Bed",
        content: "Platform king beds feature a low-profile design and modern aesthetics. They don't require box springs, making them sleek and minimal.\n\nThis style suits contemporary homes and minimalist interiors. It provides strong support while enhancing the room's visual appeal. If you prefer clean lines and modern design, a platform king bed fits perfectly."
      },
      {
        title: "15. Canopy King Bed",
        content: "Canopy king beds add drama and elegance to a bedroom. With tall posts and optional drapes, they create a luxurious atmosphere.\n\nThis style works best in rooms with high ceilings. It's perfect for classic or romantic interiors. If you want your bed to be a statement piece, a canopy king delivers timeless charm."
      },
      {
        title: "16. Upholstered King Bed",
        content: "Upholstered king beds focus on comfort and softness, especially around the headboard. They add warmth and texture to the room.\n\nThis style is great for cozy interiors and modern homes alike. It offers both visual appeal and practical comfort for sitting up in bed. If softness and style matter, upholstered kings are a popular choice."
      },
      {
        title: "17. Wooden King Bed",
        content: "Wooden king beds are durable, timeless, and versatile. They suit both traditional and modern interiors depending on the finish.\n\nThis option offers strong structural support and long-term reliability. If you value natural materials and classic design, a wooden king bed is always a safe choice."
      },
      {
        title: "18. Metal Frame King Bed",
        content: "Metal king beds are lightweight, durable, and stylish. They often feature sleek or vintage-inspired designs.\n\nThis type is easy to maintain and fits well in industrial or minimalist spaces. If you want a sturdy yet visually light bed frame, metal king beds are a great option."
      },
      {
        title: "19. Minimalist King Bed",
        content: "Minimalist king beds focus on simplicity, clean lines, and clutter-free design. They emphasize function over decoration.\n\nThis style works perfectly in modern homes and small spaces. It creates a calm and organized sleeping environment. If you love simplicity and visual balance, minimalist kings are ideal."
      },
      {
        title: "20. Budget-Friendly King Bed",
        content: "Budget king beds provide essential comfort without extra cost. They focus on value and practicality.\n\nThis option is ideal for first homes or guest rooms. If affordability matters, you can still enjoy king-size comfort without overspending."
      },
      {
        title: "21. Family-Friendly King Bed",
        content: "Family-friendly king beds are designed for shared sleeping with kids or pets. They emphasize durability and space.\n\nThis bed supports modern family lifestyles where flexibility matters. If co-sleeping is common, this king size offers peace of mind and comfort."
      }
    ],
    faqs: [
      {
        question: "What are the standard dimensions of a king size bed?",
        answer: "A standard US king size bed typically measures 76 inches wide by 80 inches long. It is wider than it is long, making it ideal for couples who want more personal sleeping space. However, dimensions can vary slightly depending on country, manufacturer, and bed frame style, so it's always recommended to double-check exact measurements before purchasing."
      },
      {
        question: "What is the difference between a King and a California King bed?",
        answer: "The main difference lies in width and length. A standard King bed is wider, while a California King is longer but slightly narrower. California Kings are especially suitable for taller individuals, whereas standard Kings are better for couples who prefer extra width and side-to-side space while sleeping."
      },
      {
        question: "Is a king size bed suitable for small bedrooms?",
        answer: "A king size bed generally requires a medium to large bedroom to maintain comfortable walking space around it. While it can fit in smaller rooms, it may make the space feel cramped. Minimalist furniture, wall-mounted storage, and lighter color schemes can help make a king bed work in tighter layouts."
      },
      {
        question: "What is the best king size bed for couples?",
        answer: "For couples, the best king size bed depends on sleep preferences. Standard King beds offer balanced width and comfort, while Split King beds are ideal for partners with different firmness or adjustable needs. Couples who value motion isolation often prefer split or hybrid king mattress setups."
      },
      {
        question: "Are king size beds good for families and co-sleeping?",
        answer: "Yes, king size beds are excellent for families who co-sleep or households with pets. Larger options like Wyoming King or Alaska King provide even more space. A standard King already offers enough room for occasional co-sleeping, making it a popular family-friendly choice."
      },
      {
        question: "What type of mattress works best with a king size bed?",
        answer: "King size beds support various mattress types, including memory foam, hybrid, latex, and innerspring. Memory foam is popular for motion isolation, while hybrids offer better airflow and support. The best choice depends on body weight, sleeping position, and temperature preferences."
      },
      {
        question: "Do king size beds require special bedding?",
        answer: "Yes, king size beds require king-specific sheets, comforters, and mattress protectors. Oversized or custom king beds may need specialty bedding. Always check mattress depth and exact dimensions to ensure a proper fit, especially for deep-pocket sheets or adjustable beds."
      },
      {
        question: "Are custom king size beds worth it?",
        answer: "Custom king beds are worth considering if your bedroom has non-standard dimensions or if you want a unique design. They allow flexibility in size, materials, and features like storage or upholstery. While they cost more, they offer tailored comfort and better space utilization."
      },
      {
        question: "What is the largest king size bed available?",
        answer: "The Alaska King bed is among the largest commonly known mattress sizes, offering exceptional width and length. It's ideal for very large rooms, families, or luxury homes. However, it requires custom bedding and significant floor space, making it unsuitable for average-sized bedrooms."
      },
      {
        question: "How do I choose the right king size bed for my home?",
        answer: "To choose the right king size bed, consider room size, sleeper height, sleeping habits, budget, and design preferences. Measure your space carefully, account for walkways, and think about long-term comfort. The best king bed balances functionality, comfort, and aesthetics."
      }
    ]
  }
];
