import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './MovieCard.css';
import MovieCard from "../../components/MovieCard/MovieCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Erro ao buscar filmes");
      }
      const data = await res.json();
      setMovies(data || []); 
    } catch (error) {
      console.error(error.message);
      setMovies([]); 
    }
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `https://web-films-api.vercel.app/search?titulo=${query}`;
      console.log(searchWithQueryURL);
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando... </p>}
        {movies.length > 0 && 
         movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
