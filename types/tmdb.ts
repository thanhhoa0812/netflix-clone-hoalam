// Minimal TMDb typings used by this project.

export type TMDbMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
};

export type TMDbMovieDetail = TMDbMovie & {
  runtime: number;
  genres: { id: number; name: string }[];
  homepage?: string | null;
  status?: string;
  tagline?: string | null;
};

export type TMDbMovieListResponse = {
  page: number;
  results: TMDbMovie[];
  total_pages: number;
  total_results: number;
};

export type TMDbVideo = {
  id: string;
  key: string; // YouTube key
  name: string;
  site: 'YouTube' | string;
  type: 'Trailer' | 'Teaser' | string;
};

export type TMDbVideoList = {
  id: number;
  results: TMDbVideo[];
};