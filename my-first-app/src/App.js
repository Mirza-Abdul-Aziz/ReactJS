import { getByTestId } from "@testing-library/react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// bd513f5d

const API_URL = "http://www.omdbapi.com?apikey=bd513f5d";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  });
  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>

        <div className="search">
          <input placeholder="Search for movies" value="" onChange={() => {}} />
          <img src={SearchIcon} alt="search" onClick={() => {}} />
        </div>

        <div className="container">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default App;
