# Architecture & Components

This project uses **Next.js App Router** with **server components** for data fetching and **client components** for interactivity.

## Data Flow
- Server components call TMDb via small helpers in `lib/tmdb.ts`.
- Listing pages use **SSG with ISR** (`export const revalidate`) for fast initial loads.
- Detail pages also use SSG with a longer revalidate window.

## Components
- **Header**: Fixed top navigation; responsive; minimal interactions.
- **HeroSection**: Uses `next/image` to render a prominent backdrop; CTA links to detail page.
- **MovieList**: Horizontal scroll list with snap behavior; mobile-friendly.
- **MovieCard**: Optimized poster image; rating; links using dynamic routes.
- **MovieDetail**: Rich details (title, overview, release, runtime, genres) with a backdrop.
- **TrailerSection**: Embeds YouTube trailer from TMDb videos (first `site=YouTube` + `type=Trailer`).
- **RelatedMovies**: Reuses MovieList for recommendations.

## Styling
- **Tailwind** utility classes + a small brand palette.
- Responsive sizes for cards and hero.

## Performance
- **`next/image`** for automatic image optimization.
- Server-side data fetching to improve TTFB and SEO.
- **ISR** for freshness without high latency.

## Type Safety
- `types/tmdb.ts` defines narrow, practical types used across components.

## Future Improvements
- Pagination & infinite scroll per row
- Search & filter
- Authentication & user lists
- Skeleton loading states
- Error boundaries & retry logic