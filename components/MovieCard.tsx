import { TrendingCard } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (props: TrendingCard) => {
  const { poster_path, id, title, overview, popularity } = props;
  return (
    <>
      <div className="md:w-[200px] group rounded-md overflow-hidden bg-teal-50 my-8 border border-slate-300 relative">
        <div className="h-40 relative overflow-hidden">
          <Link href={`/movie/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              fill
              alt="movie image"
              className="absolute object-cover group-hover:scale-110 transition duration-300"
            />
          </Link>
        </div>
        <div className="py-4 px-2">
          <Link
            href={`/movie/${id}`}
            className="font-semibold hover:text-teal-600 transition-colors duration-300"
          >
            {title}
          </Link>
          <p className="text-slate-600 text-sm line-clamp-3">{overview}</p>
        </div>
        <div className="hidden text-xs text-white bg-teal-800 px-2 py-1 rounded-md absolute top-3 left-3 group-hover:block transition duration-300">
          Popularity: <span>{popularity.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
