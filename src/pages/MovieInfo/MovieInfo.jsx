import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import './Movie.css';
import Button from "../../components/Button/Button";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieUrl = `https://web-films-api.vercel.app/${id}`;
    fetch(movieUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar filme');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar filme:', error);
        setLoading(false);
      });
  }, [id]);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div 
        className="poster" 
        style={{ backgroundImage: `url(${movie.poster})`}}>
        <img src={movie.poster} alt="" />
        <div className="movieinfo">
          <h2>{movie.titulo}</h2>
          <p>{movie.lancamento} - {movie.genero}</p>
          <h3><BsHeartFill color="red" />{movie.nota} / 10</h3>
          <div className="overview">
            <h4>Overview:</h4>
            <p>{movie.sinopse}</p>
            <div className="btn">
              <Button movieId={movie._id}>Watch</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
