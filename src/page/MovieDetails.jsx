import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieById } from 'servoces/Api';
import { MovieDetailsComp } from 'components/MovieDetails/MovieDetailsComp';
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import {BackButton, AddInfo} from './MovieDetails.styled'

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? './');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoader(true);
        const data = await getMovieById(movieId);
        setMovie(data);
        setLoader(false);
      } catch (error) {
        setError(true);
        Notify.failure(error.message);
      } finally {
        setLoader(false);
      }
    }
    fetchMovies();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;
  const posterPath = poster_path ? poster_path : '';
  const genreNames = genres ? genres.map(genre => genre.name).join(' ') : '';
  return (
    <>  
      <BackButton to={backLink.current}>Go back</BackButton>
      {loader && <Loader/>}
      {error && <Error/>}
      <MovieDetailsComp
        title={title}
        vote_average={vote_average}
        overview={overview}
        genreNames={genreNames}
        posterPath={posterPath}
      />
      
      <h2>Additional Information</h2>
      <AddInfo to="cast">Cast</AddInfo>
      <AddInfo to="review">Review</AddInfo>
      <Outlet />
    </>
  );
}
