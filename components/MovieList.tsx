import MovieCard from "./MovieCard";
import type { TMDbMovie } from "@/types/tmdb";

function getBackgroundClass(title: string) {
  const bgMap: Record<string, string> = {
    "popular on netflix":
      "bg-gradient-to-r from-purple-900/40 to-purple-700/40",
    "top rated": "bg-gradient-to-r from-yellow-900/40 to-yellow-700/40",
    "now playing": "bg-gradient-to-r from-red-900/40 to-red-700/40",
    "upcoming movies": "bg-gradient-to-r from-green-900/40 to-green-700/40",
    "airing today movies":
      "bg-gradient-to-r from-purple-900/40 to-purple-700/40",
    "popular movies": "bg-gradient-to-r from-yellow-900/40 to-yellow-700/40",
  };

  return bgMap[title.toLowerCase()] ?? "bg-gray-900/20";
}

export default function MovieList({
  title,
  movies,
}: {
  title: string;
  movies: TMDbMovie[];
}) {
  return (
    <section
      id="rows"
      className={`px-4 md:px-10 py-6 rounded-2xl ${getBackgroundClass(title)}`}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {movies.map((m) => (
            <div
              key={m.id}
              className="snap-start shrink-0 w-40 sm:w-48 md:w-52"
            >
              <MovieCard movie={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
