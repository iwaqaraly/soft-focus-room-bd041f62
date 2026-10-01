# CozzyAbode

An interior design inspiration site built with Vite, React, TypeScript, Tailwind CSS and shadcn-ui.

## Running locally

```sh
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm test`.

## Adding an article

1. Add images to `public/assets/` as `.webp`, named `topic-name-01.webp`, `topic-name-02.webp`, and so on.
2. Add an entry to `src/data/articles.ts`. Each article needs an `id`, `slug`, `title`, `excerpt`, `category`, `image`, `sections` and `faqs`.
3. Number the title of each section that has an image ("1. Soft Beige Sofa"). Closing sections, such as "Final Thoughts", have no number and no image.
4. Use one of the existing categories (Apartment, Basement, Bathroom, Bedroom, Garden, Home Office, Kitchen, Living Room) so the article shows up on its category page.
