import { useFetch, useTitle } from "../hooks";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-center flex-wrap gap-1 xl:justify-start">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
