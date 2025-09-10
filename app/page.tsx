import { getCategory } from "@/lib/tmdb";
import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";

export const revalidate = 3600;

export default async function HomePage() {
  const [popular, nowPlaying, topRated] = await Promise.all([
    getCategory("popular"),
    getCategory("now_playing"),
    getCategory("top_rated"),
  ]);

  const heroMovie =
    popular.results[0] ?? nowPlaying.results[0] ?? topRated.results[0];

  return (
    <div className="space-y-8">
      <HeroSection movie={heroMovie} />
      <section className="space-y-10">
        <MovieList title="Popular on Netflix" movies={popular.results} />
        <MovieList title="Now Playing" movies={nowPlaying.results} />
        <MovieList title="Top Rated" movies={topRated.results} />
      </section>
    </div>
  );
}
