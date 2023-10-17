import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById } from 'servoces/Api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import {Reviews} from './Review.styled'

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoader(true);
        const { results } = await getReviewById(movieId);
        setReviews(results);
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
      {reviews.length > 0 ? (
        <Reviews>
          {reviews.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </Reviews>
      ) : (
        <div>Sorry, there is no review</div>
      )}
      {loader && <Loader />}
      {error && <Error />}
    </>
  );
}
