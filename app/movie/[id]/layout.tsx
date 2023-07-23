import { MovieDetail } from "@/types/interfaces";
import Image from "next/image";

const getData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
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
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
            alt="Backdrop image of movie."
            fill
            className="absolute object-center object-cover hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </>
  );
};
export default MovieLayout;
