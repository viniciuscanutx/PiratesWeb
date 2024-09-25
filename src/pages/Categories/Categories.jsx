import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import '../MovieGrid.css';

const Categories = () => {
  const { genero } = useParams(); 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://web-films-api.vercel.app/genero/${genero}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Erro ao buscar filmes:', error));
  }, [genero]);

  return (
    <div className="container">
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando... </p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
