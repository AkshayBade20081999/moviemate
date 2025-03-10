import { useTitle } from "../hooks";
import { Link } from "react-router-dom";
import PageNotFoundimg from "../assets/page-not-found.png";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <h1 className="text-7xl text-gray-700 font-bold dark:text-white my-10">
            404
          </h1>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundimg}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              BACK TO HOME
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
