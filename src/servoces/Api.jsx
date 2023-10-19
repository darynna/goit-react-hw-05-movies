import axios from 'axios';
import {Notify} from 'notiflix';

const KEY = '7767ff949005c6c2b1276d0401107c06';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrandingMovie() {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${KEY}`);
    return data.results;
  } catch (error) {
    return Notify.failure(
      `${error.message}, please try again later`
    );
  }
}

export async function getMoviesByquery(query) {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${KEY}&query=${query}&language=en-US`
    );
    const englishMovies = data.results.filter(
      movie => movie.original_language === 'en'
    );
    return englishMovies;
  } catch (error) {
    return Notify.failure(
      `${error.message}, please try again later`
    );
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${KEY}`);
    return data;
  } catch (error) {
    return Notify.failure(
      `${error.message}, please try again later`
    );
  }
}

export async function getCastById(id) {
  try {
    const { data } = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
    return data;
  } catch (error) {
    return Notify.failure(
      `${error.message}, please try again later`
    );
  }
}

export async function getReviewById(id) {
  try {
    const { data } = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
    return data;
  } catch (error) {
    return Notify.failure(
      `${error.message}, please try again later`
    );
  }
}
