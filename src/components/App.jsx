import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';


const Home = lazy(() => import('page/Home'))
const Movies = lazy(() => import('page/Movies'))
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'))
const MovieDetails = lazy(() => import('page/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Review = lazy(() => import('./Review/Review'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </>
  );
};
