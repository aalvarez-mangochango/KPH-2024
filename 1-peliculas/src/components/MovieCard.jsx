import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.moviecard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imagenUrl}
          alt={movie.title}
          className="imagenes"
        />
      </Link>
      <div className={styles.title}>{movie.title}</div>
    </li>
  );
}
