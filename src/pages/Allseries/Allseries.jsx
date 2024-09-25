import { useState, useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard";
import '../../pages/MovieGrid.css'


const Allseries = () => {

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch('https://web-films-api.vercel.app/found/series')
      .then(response => response.json())
      .then(data => setTopMovies(data))
      .catch(error => console.error('Erro ao buscar series:', error));
  }, []);


  return (
    <div className="container">
      <div className="movies-container">
        {topMovies.length === 0 && <p></p>}
        {topMovies.length > 0 && 
        topMovies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Allseries;