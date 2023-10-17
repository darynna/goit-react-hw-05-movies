import { Form } from "components/Form/Form";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMoviesByquery } from "servoces/Api";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Error } from "components/Error/Error";
import { Loader } from "components/Loader/Loader";

export default function Movies(){
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    
    useEffect(()=>{
        const query = searchParams.get('query')
        setMovies([])
        if(query){
         const fetchMovie= async ()=>{
            try{    
            setLoader(true)
            const fetchedData = await getMoviesByquery(query)
            setMovies(fetchedData)
            setLoader(false)
            }catch(error){
                setError(true)
                Notify.failure(error.message);
            }finally{
                setLoader(false)
            }
         }
        fetchMovie()}
    }, [searchParams])

    return(
        <>
    <Form setSearchParams={setSearchParams}/>
    {loader && <Loader/>}
    {movies.length > 0 && movies.length > 0 && <MoviesList movies={movies} location={location} />}
    {error && <Error/>}
    </>
    )
}