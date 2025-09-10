import MovieCard from "./MovieCard";
import type { TMDbMovie } from "@/types/tmdb";

export default function MovieList({
  title,
  movies,
}: {
  title: string;
  movies: TMDbMovie[];
}) {
  return (
    <section id="rows" className="px-4 md:px-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-10 gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {movies.map((m) => (
            <div key={m.id} className="snap-start">
              <MovieCard movie={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
