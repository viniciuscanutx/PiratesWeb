import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './top10.css';

function Top10({ showLink = true }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchTop10Movies = async () => {
      try {
        const response = await fetch('https://web-films-api.vercel.app/found');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    fetchTop10Movies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardClick = (id) => {
    navigate(`/${id}`); 
  };

  return (
    <section className="top10">
      <div className="carousel-container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="top10-item"
              onClick={() => handleCardClick(movie._id)} 
            >
              <img src={movie.poster} alt={movie.title} />
              {showLink && (
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Top10;
