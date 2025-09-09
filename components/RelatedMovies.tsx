import MovieList from "./MovieList";
import type { TMDbMovie } from "@/types/tmdb";

export default function RelatedMovies({ movies }: { movies: TMDbMovie[] }) {
  if (!movies?.length) return null;
  return <MovieList title="Related" movies={movies} />;
}
