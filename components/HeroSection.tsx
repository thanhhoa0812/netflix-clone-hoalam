import Image from "next/image";
import Link from "next/link";
import type { TMDbMovie } from "@/types/tmdb";

export default function HeroSection({ movie }: { movie?: TMDbMovie }) {
  if (!movie) return null;
  const backdrop = movie.backdrop_path || movie.poster_path;
  const img = backdrop
    ? `https://image.tmdb.org/t/p/original${backdrop}`
    : undefined;

  return (
    <section className="relative h-[65vh] md:h-[75vh] w-full">
      {img && (
        <Image
          src={img}
          alt={movie.title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent" />
      <div className="absolute bottom-10 left-4 md:left-10 max-w-2xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="hidden md:block text-black/80 font-extrabold line-clamp-3">
          {movie.overview}
        </p>
        <div className="flex gap-3">
          <Link
            href={`/${movie.id}`}
            className="bg-white text-black rounded-md px-4 py-2 font-semibold hover:bg-white/90"
          >
            More Info
          </Link>
          <a
            href="#rows"
            className="bg-white/20 text-white rounded-md px-4 py-2 font-medium hover:bg-white/30"
          >
            Browse
          </a>
        </div>
      </div>
    </section>
  );
}
