import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieById } from "servoces/Api"

export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
  
    useEffect(()=>{
        const fetchhMovie= async()=>{
            console.log(movieId)
            const movieDetails = await getMovieById(movieId)
            console.log(movieDetails)
            setMovie(movieDetails)
        }
        fetchhMovie()
    }, [movieId])

   const {title, vote_average, overview, genres, poster_path} = movie
   const posterPath = poster_path ? poster_path : '';
   const genreNames = genres ? genres.map(genre => genre.name).join(' ') : '';
    return(
        <>
        <button>Go back</button>
        <MovieDetails title = {title}
        vote_average={vote_average} 
        overview={overview} 
        genreNames={genreNames} 
        posterPath={posterPath}/>
        </>

    )
}