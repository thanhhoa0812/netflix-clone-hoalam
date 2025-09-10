import { getCategory } from "@/lib/tmdb";
import MovieList from "@/components/MovieList";

export default async function SeriesPage() {
    //const popular = await getTVSeries("popular");
    const upcoming = await getCategory("upcoming");
    const top_rated = await getCategory("top_rated");

  return (
      <div className="space-y-10 p-6">
        <h1 className="px-4 md:px-10 text-3xl font-bold">TV Series</h1>
        {/* <MovieList title="Popular Movies" movies={popular.results} />
        <MovieList title="Airing Today Movies" movies={airing_today.results} /> */}
        <MovieList title="Airing Today Movies" movies={top_rated.results} />
        <MovieList title="Popular Movies" movies={upcoming.results} />
      </div>
    );
}
