import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import MovieCard from '../components/MovieCard';
import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL);
  }, [])

  return (
    <div className='movie-page'>{movie && (
    <>
      <MovieCard movie={movie} showLink={false} />
      <p className="tagline">{movie.tagline}</p>
      <div className='info'>
        <h3>
          <BsWallet2 /> Custo do filme:
        </h3>
        <p>
          {formatCurrency(movie.budget)}
        </p>
      </div>
      <div className='info'>
        <h3>
          <BsGraphUp /> Receita:
        </h3>
        <p>
          {formatCurrency(movie.revenue)}
        </p>
      </div>
      <div className='info'>
        <h3>
          <BsHourglassSplit /> Duração do filme:
        </h3>
        <p>
          {movie.runtime} min
        </p>
      </div>
      <div className='info'>
        <h3>
          <BsFillFileEarmarkTextFill /> Sinopse:
        </h3>
        <p className='description'>
          {movie.overview}
        </p>
      </div>
    </>
    )}
    </div>
  );
};

export default Movie