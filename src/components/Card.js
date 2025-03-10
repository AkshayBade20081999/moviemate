import backupPosterImage from "../assets/backup-poster-image.jpg";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path, title } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backupPosterImage;
  const imageAlt = title ? `${title} poster image` : "No Poster Found";

  return (
    <div className="max-w-sm m-2.5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg w-full" src={image} alt={imageAlt} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
