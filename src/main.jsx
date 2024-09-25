import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Movie from './pages/MovieInfo/MovieInfo';
import Player from './pages/Player/Player';
import Search from './pages/Search/Search';
import AllMovies from './pages/Allmovies/Allmovies';
import Allseries from './pages/Allseries/Allseries';
import Categories from './pages/Categories/Categories';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Movie />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="search" element={<Search />} />
          <Route path="/allmovies" element={<AllMovies />} />
          <Route path="/allseries" element={<Allseries />} />
          <Route path="/genero/:genero" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
