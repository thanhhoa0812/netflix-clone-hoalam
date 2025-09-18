import Image from 'next/image';
import type { TMDbMovieDetail } from '@/types/tmdb';

export default function MovieDetail({ movie }: { movie: TMDbMovieDetail }) {
  const backdrop = movie.backdrop_path || movie.poster_path;
  const img = backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : undefined;

  return (
    <section className="relative min-h-[50vh]">
      {img && <Image src={img} alt={movie.title} fill className="object-cover opacity-60" sizes="100vw" />}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-[200px,1fr] gap-6">
        {movie.poster_path && (
          <div className="relative w-[200px] aspect-[2/3] rounded-xl overflow-hidden bg-black/30">
            <Image src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} fill className="object-cover" sizes="200px" />
          </div>
        )}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold">{movie.title}</h1>
          <p className="text-black/80 font-extrabold">{movie.overview}</p>
          <div className="text-sm text-black/70 flex flex-wrap gap-x-6 gap-y-2 font-extrabold">
            <span>Release: {movie.release_date}</span>
            <span>Runtime: {movie.runtime}m</span>
            <span>Rating: {movie.vote_average?.toFixed(1)}</span>
            <span>Genres: {movie.genres?.map((g) => g.name).join(', ') || '—'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}