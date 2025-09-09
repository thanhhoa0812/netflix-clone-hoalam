import 'server-only';
import type { TMDbMovieListResponse, TMDbMovieDetail, TMDbVideoList } from '@/types/tmdb';

const TMDB_BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  console.warn('[TMDb] Missing TMDB_API_KEY. Add it to .env.local');
}

// Generic fetch wrapper used by server components (SSR/SSG)
async function tmdb<T>(path: string, init?: RequestInit): Promise<T> {
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('include_adult', 'false');

  const res = await fetch(url.toString(), {
    ...init,
    headers: {
      ...(init?.headers || {}),
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8'
    },
    // Cache-friendly defaults; callers can override using Next.js fetch options
    next: { revalidate: 60 * 60 }
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`TMDb ${path} failed: ${res.status} ${res.statusText} — ${body}`);
  }
  return res.json() as Promise<T>;
}

export async function getCategory(category: 'popular' | 'now_playing' | 'top_rated' | 'upcoming'): Promise<TMDbMovieListResponse> {
  return tmdb(`/movie/${category}`);
}

export async function getMovieById(id: string | number): Promise<TMDbMovieDetail> {
  return tmdb(`/movie/${id}`);
}

export async function getMovieVideos(id: string | number): Promise<TMDbVideoList> {
  return tmdb(`/movie/${id}/videos`);
}

export async function getRelatedMovies(id: string | number): Promise<TMDbMovieListResponse> {
  return tmdb(`/movie/${id}/recommendations`);
}

export async function getTVSeries(series: 'popular' | 'airing_today' ): Promise<TMDbMovieListResponse> {
  return tmdb(`/tv/${series}`);
}

export async function getPerson(person: 'popular' ): Promise<TMDbMovieListResponse> {
  return tmdb(`/person/${person}`);
}