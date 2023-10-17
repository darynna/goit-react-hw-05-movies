import { useEffect, useState } from "react"
import { getTrandingMovie } from "servoces/Api"
import { MoviesList } from "components/MoviesList/MoviesList"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";
import { useLocation } from "react-router-dom";

export default function Home(){
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const location = useLocation()

    useEffect(()=>{
       async function fetchMovies(){
        try{
            setLoader(true)
            const data = await getTrandingMovie()
            console.log(data)
            setMovies(data)
            setLoader(false)
        }catch(error){
            setError(true)
            Notify.failure(error.message);
        }finally{
            setLoader(false)
        }
    }
        fetchMovies()
        
       
    }, [])
    console.log(movies)
    return(
        <>
        <MoviesList movies={movies} location={location}/>
        {loader && <Loader/>}
        {error && <Error/>}
        </>
    )
}