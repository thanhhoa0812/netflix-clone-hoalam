import MovieList from "@/components/MovieList";

export default async function SeriesPage() {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return <h1 className="text-red-500">Failed to load series</h1>;
  }

  const series = await res.json();

  return (
    <div className="space-y-10 p-6">
      <h1 className="text-3xl font-bold">Popular TV Series</h1>
      <MovieList title="Popular Series" movies={series.results} />
    </div>
  );
}
