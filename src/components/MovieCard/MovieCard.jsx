import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={movie.poster} alt={movie.titulo}/>
        <h2>{movie.titulo}</h2>
        <p>
        <FaStar /> {movie.nota}
        </p>
        {showLink && <Link to={`/${movie._id}`}>Detalhes</Link>}
    </div>
  )
}


export default MovieCard;