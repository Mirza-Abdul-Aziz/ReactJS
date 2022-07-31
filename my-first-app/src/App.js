import { getByTestId } from "@testing-library/react";
import { useEffect } from "react";

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
            <h1>Abdul Aziz</h1>
        </>
    );
};

export default App;
