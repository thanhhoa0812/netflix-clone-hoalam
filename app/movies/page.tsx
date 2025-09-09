import { getCategory } from "@/lib/tmdb";
import MovieList from "@/components/MovieList";

export default async function MoviesPage() {
  const popular = await getCategory("popular");
  const topRated = await getCategory("top_rated");

  return (
    <div className="space-y-10 p-6">
      <h1 className="text-3xl font-bold">Movies</h1>
      <MovieList title="Popular Movies" movies={popular.results} />
      <MovieList title="Top Rated Movies" movies={topRated.results} />
    </div>
  );
}
