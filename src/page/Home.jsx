import { useEffect, useState } from "react"
import { getTrandingMovie } from "servoces/Api"
import { MoviesList } from "components/MoviesList/MoviesList"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";

export default function Home(){
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
       async function fetchMovies(){
        try{
            setLoader(true)
            const data = await getTrandingMovie()
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
    return(
        <>
        <h1>Trending today:</h1>
        <MoviesList movies={movies}/>
        {loader && <Loader/>}
        {error && <Error/>}
        </>
    )
}