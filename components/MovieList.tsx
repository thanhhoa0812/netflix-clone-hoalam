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
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
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
