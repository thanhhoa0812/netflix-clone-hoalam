import { getCategory } from "@/lib/tmdb";
import MovieList from "@/components/MovieList";

export default async function MoviesPage() {
  const popular = await getCategory("popular");
  const topRated = await getCategory("top_rated");
  const upcoming = await getCategory("upcoming");

  return (
    <div className="space-y-10 p-6">
      <h1 className="px-4 md:px-10 text-3xl font-bold">Movies</h1>
      <MovieList title="Popular Movies" movies={popular.results} />
      <MovieList title="Upcoming Movies" movies={upcoming.results} />
      <MovieList title="Top Rated Movies" movies={topRated.results} />
    </div>
  );
}
