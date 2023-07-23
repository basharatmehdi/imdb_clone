export interface TrendingCard {
  poster_path: string;
  id: number;
  title: string;
  overview: string;
  popularity: number;
}

export interface MovieDetail extends TrendingCard {
  backdrop_path: string;
  original_language: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface TrendingMovies {
  results: {
    poster_path: string;
    id: number;
    title: string;
    overview: string;
    popularity: number;
    original_language: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
  }[];
}
