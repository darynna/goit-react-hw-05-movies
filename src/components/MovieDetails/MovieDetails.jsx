export function MovieDetails({title, vote_average, overview, genreNames, posterPath}){
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />
            <h1>{title}</h1>
            <p>User score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genreNames}</p>
        </div>
    )
}