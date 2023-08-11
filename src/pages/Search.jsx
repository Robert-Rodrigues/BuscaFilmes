import { React, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  return (
    <div className='container'>
      <h2 className='title'>Resultados para:<span className="query-text">"{query}"</span></h2>
      <div className="movies-container">
      {mainMovies.length === 0 && <p>Carregando...</p>}
      {mainMovies.length > 0 && mainMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search