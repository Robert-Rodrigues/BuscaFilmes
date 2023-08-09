import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [mainMovies, setMainMovies] = useState([])

  const getMainRatedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setMainMovies(data.results);
  };
  
  useEffect(() => {

    const mainRatedMoviesURL = `${moviesURL}top_rated?${apiKey}`;
    getMainRatedMovies(mainRatedMoviesURL)
  }, [])
  return (
    <div className='container'>
      <h2 className='title'>Filmes mais bem avaliados:</h2>
      <div className="movies-container">
      {mainMovies.length === 0 && <p>Carregando...</p>}
      {mainMovies.length > 0 && mainMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home