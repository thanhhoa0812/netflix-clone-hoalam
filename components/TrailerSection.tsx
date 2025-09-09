import type { TMDbVideo } from '@/types/tmdb';

export default function TrailerSection({ videos }: { videos: TMDbVideo[] }) {
  const youtube = videos.find((v) => v.site === 'YouTube' && v.type === 'Trailer');
  if (!youtube) return null;
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl font-semibold mb-3">Trailer</h2>
      <div className="aspect-video w-full rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtube.key}`}
          title={youtube.name}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}