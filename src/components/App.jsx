import { getTrandingMovie } from "servoces/Api";
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "page/Home";
import { Movies } from "page/Movies";

export const App = () => {

  getTrandingMovie()
  return (
  <>
   <Routes>
     <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
     </Route>
   </Routes>
   </>
  );
};
