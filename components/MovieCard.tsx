import { TrendingCard } from "@/types/interfaces";
import Image from "next/image";

const MovieCard = (props: TrendingCard) => {
  const { image, title, desc } = props;
  return (
    <>
      <div className="md:w-[200px] rounded-md overflow-hidden bg-teal-50">
        <div className="h-[150px]">
          <Image src={image} fill alt="movie image" />
        </div>
      </div>
    </>
  );
};
export default MovieCard;
