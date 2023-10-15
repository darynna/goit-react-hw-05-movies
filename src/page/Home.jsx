import { useEffect, useState } from "react"
import { getTrandingMovie } from "servoces/Api"
import { MoviesList } from "components/MoviesList/MoviesList"

export function Home(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
       async function fetchMovies(){
        try{
            const data = await getTrandingMovie()
            console.log(data)
            return setMovies(data)
        }catch(er){
            console.log(er)
        }
    }
        fetchMovies()
        
       
    }, [])
    console.log(movies)
    return(
        <MoviesList movies={movies}/>
    )
}