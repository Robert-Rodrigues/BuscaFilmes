import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const formatRate = (text) => {
  const roundedRate = parseFloat(text).toFixed(1);
  return roundedRate;
};

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className='movie-card'>
     <img src={imageUrl + movie.poster_path} alt={movie.title} />
     <h2>{movie.title}</h2>
     <p className='vote-average'>
        <FaStar /> {formatRate(movie.vote_average)}
     </p>
     {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
};

export default MovieCard