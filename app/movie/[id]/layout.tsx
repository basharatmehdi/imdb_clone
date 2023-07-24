import { IconSpinner } from "@/components/icons";
import { MovieDetail } from "@/types/interfaces";
import { Metadata } from "next";
import Image from "next/image";

const getData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.AUTH_TOKEN as string,
    },
    next: {
      revalidate: 10 * 60,
    },
  };
  const data = await fetch(url, options);
  return data.json();
};

export const metadata: Metadata = {
  title: "Movie detail",
  description: "imdb Clone created with Next.js",
};
const MovieLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const movieDetail: MovieDetail = await getData(params.id);
  // console.log(movieDetail);
  return (
    <>
      <div>
        <div className="w-full h-52 relative rounded-xl overflow-hidden">
          {movieDetail.backdrop_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
              alt="Backdrop image of movie."
              fill
              className="absolute inset-0 object-center object-cover hover:scale-110 transition duration-300"
            />
          ) : (
            <IconSpinner className="w-11 animate-spin" />
          )}
        </div>
        <div>
          <h2 className="my-4 text-center text-3xl xl:text-4xl font-semibold">
            {movieDetail.title}
          </h2>
          <div className="md:flex gap-5">
            <div className="md:w-1/2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-black">Overview: </span>
                {movieDetail.overview}
              </p>
              <p>
                <span className="font-semibold text-black">Language: </span>
                {movieDetail.original_language}
              </p>
              <p>
                <span className="font-semibold text-black">Release Date: </span>
                {movieDetail.release_date}
              </p>
              <p>
                <span className="font-semibold text-black">Popularity: </span>
                {movieDetail.popularity.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold text-black">
                  Average Rating:{" "}
                </span>
                {movieDetail.vote_average.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold text-black">Total Votes: </span>
                {movieDetail.vote_count}
              </p>
            </div>
            <div className="md:w-1/2 border border-cyan-100 rounded-lg py-5 px-4">
              <h5 className="font-semibold mb-3">Comments</h5>
              <hr />

              <form>
                <textarea
                  name="comment"
                  placeholder="Add a Comment..."
                  className="w-full text-sm mt-6 border border-cyan-400 py-2 px-4 focus:border focus:outline-none focus:border-cyan-600 rounded-lg resize-none"
                ></textarea>
                <button
                  className="px-4 py-1 text-sm bg-teal-200 rounded-md mt-2 mb-4 font-semibold hover:bg-teal-300 transition duration-200"
                  type="submit"
                >
                  Post Comment
                </button>
              </form>
              <hr />
              <div className="bg-teal-100/40 rounded p-2 mt-4">
                This is a comment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieLayout;
