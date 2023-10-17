import { getTrandingMovie } from "servoces/Api";
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "page/Home";
import { Movies } from "page/Movies";
import { MovieDetails } from "page/MovieDetails";

export const App = () => {

  getTrandingMovie()
  return (
  <>
   <Routes>
     <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>

      </Route>
     </Route>
   </Routes>
   </>
  );
};
