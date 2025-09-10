import Image from "next/image";
import Link from "next/link";
import type { TMDbMovie } from "@/types/tmdb";

export default function MovieCard({ movie }: { movie: TMDbMovie }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : undefined;
  const votePercent = Math.round(movie.vote_average * 10);
  const getVoteColor = (percent: number) => {
    if (percent >= 70) return "bg-emerald-500";
    if (percent >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };
  return (
    <Link
      href={{ pathname: `/${movie.id}` }}
      className="group w-36 md:w-44 lg:w-56 shrink-0"
      title={movie.title}
    >
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
        <p className="text-sm md:text-base font-medium line-clamp-1">
          {movie.title}
        </p>
        <div
          className={`-top-2 -left-2 ${getVoteColor(
            votePercent
          )} text-white text-xs font-bold rounded-full w-10 h-7 flex items-center justify-center shadow-md`}
        >
          {votePercent}%
        </div>
        
      </div>
    </Link>
  );
}
