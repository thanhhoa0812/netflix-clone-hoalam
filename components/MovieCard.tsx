import Image from 'next/image';
import Link from 'next/link';
import type { TMDbMovie } from '@/types/tmdb';

export default function MovieCard({ movie }: { movie: TMDbMovie }) {
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : undefined;
  return (
    <Link  href={{ pathname: `/${movie.id}` }} className="group w-36 md:w-44 lg:w-56 shrink-0" title={movie.title}>
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-black/30">
        {poster && (
          <Image
            src={poster}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 14vw"
          />
        )}
      </div>
      <div className="mt-2 space-y-1">
        <p className="text-sm md:text-base font-medium line-clamp-1">{movie.title}</p>
        <p className="text-xs text-white/60">⭐ ⭐ {movie.vote_average?.toFixed(1) ?? 'N/A'}</p>
      </div>
    </Link>
  );
}