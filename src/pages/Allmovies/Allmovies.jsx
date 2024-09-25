import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import '../../pages/MovieGrid.css';

const AllMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch('https://web-films-api.vercel.app/found')
      .then(response => response.json())
      .then(data => {
        setTopMovies(data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
    <div className="container">
      <div className="movies-container">
        {topMovies.length === 0 ? (
          <p>Nenhum filme encontrado.</p>
        ) : (
          topMovies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        )}
      </div>
    </div>
    </>
  );
}

export default AllMovies;
