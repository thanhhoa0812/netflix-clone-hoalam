import { getMovieById, getMovieVideos, getRelatedMovies } from "@/lib/tmdb";
import MovieDetail from "@/components/MovieDetail";
import TrailerSection from "@/components/TrailerSection";
import RelatedMovies from "@/components/RelatedMovies";
import type { Metadata } from "next";

export const revalidate = 60 * 60 * 24; // daily

type PageProps = { params: { movieId: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);
  return { title: `${movie.title} – Netflix` };
}

export default async function MoviePage({ params }: PageProps) {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);
  const videos = await getMovieVideos(movieId);
  const related = await getRelatedMovies(movieId);

  return (
    <div className="space-y-10">
      <MovieDetail movie={movie} />
      <TrailerSection videos={videos.results} />
      <RelatedMovies movies={related.results} />
    </div>
  );
}
