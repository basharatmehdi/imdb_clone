import MovieCard from "@/components/MovieCard";
import { TrendingMovies } from "@/types/interfaces";

const getData = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.AUTH_TOKEN as string,
    },
  };
  const data = await fetch(url, options);
  return data.json();
};

export default async function Home() {
  const trendingMovies: TrendingMovies = await getData();
  // console.log(trendingMovies);

  return (
    <>
      <div className="min-h-screen">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
          Top Trending Movies
        </h2>
        <div className="grid md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6 xl:gap-5 my-6">
          {trendingMovies.results.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </>
  );
}
