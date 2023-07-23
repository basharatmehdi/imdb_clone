import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <h2 className="text-3xl xl:text-4xl font-semibold text-center">
          Movie Card
        </h2>
        <div className="grid">
          <MovieCard />
        </div>
      </div>
    </>
  );
}
