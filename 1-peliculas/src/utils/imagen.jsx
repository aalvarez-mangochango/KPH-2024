import placeholder from "../img/placeholder.png";
export function getIMG(path, width) {
  return path? `https://image.tmdb.org/t/p/w${width}$(path)` :placeholder;
}
//const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;