import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getIMG } from "../utils/imagen";
import "../pages/Descripcion.css"

export function Descripcion() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
      
    });
  }, [movieId]);
  const imageUrl = getIMG(movie.poster_path, 500);

  return (
    <div className="detailContainer">
      <img src={imageUrl} alt={movie.title} className="col Imagen"/>
      <div className="col movieDetails">
        <p className="title">
          <strong>Titulo: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genero: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
