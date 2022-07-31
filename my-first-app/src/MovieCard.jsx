import React from "react";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436",
};

const MovieCard = () => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img src={movie1.Poster} alt="poster" />
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
