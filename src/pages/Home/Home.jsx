import { useState, useEffect } from "react";
import Top10 from '../../components/Top10/top10';
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import './Home.css';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const banners = [
    {
      image: 'https://m.media-amazon.com/images/M/MV5BY2IwNDAzMTctMzIzNi00Y2Y1LTgxM2MtNDg3ZDE4ZWZjNzM4XkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg',
      title: 'Homem-Aranha: Através do Aranhaverso',
      description: 'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso...',
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BZTQxYTAzNjktZGQ2MC00ZDIzLThmMzAtOTRlNzZmYzUwNmJhXkEyXkFqcGc@._V1_FMjpg_UX2160_.jpg',
      title: 'The Batman',
      description: 'Quando um serial killer sádico começa a assassinar figuras políticas importantes em Gotham, Batman é forçado a investigar a corrupção oculta da cidade e a questionar o envolvimento de sua própria família.',
    },
  ];

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
    <div className="grade">
      <div className="banner-slider">
        <BannerSlider banners={banners} />
      </div>
      <h3 id="healms">Keep watching</h3>
      <Top10 />
      <div className="container">
        <div className="movies-container">
          {topMovies.length === 0 && <p>Nenhum filme encontrado.</p>}
        </div>
      </div>
      <h3 id="healms"> All Movies</h3>
      <Top10 />
      <div className="container">
        <div className="movies-container">
          {topMovies.length === 0 && <p>Nenhum filme encontrado.</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
