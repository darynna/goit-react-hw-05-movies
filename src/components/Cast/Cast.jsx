import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'servoces/Api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import {CastWraper} from './Cast.styled'
import {PlaceholderCast} from 'components/Placeholder/Placeholder';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoader(true);
        const { cast } = await getCastById(movieId);
        setCast(cast);
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
  return (
    <>
      {cast.length > 0 ? (
        <CastWraper>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ?
              <img width='160'
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              /> : <PlaceholderCast/>}
              <p>{actor.name}</p>
            </li>
          ))}
        </CastWraper>
      ) : (
        <div>Sorry, there is no review</div>
      )}
      {loader && <Loader />}
      {error && <Error />}
    </>
  );
}
