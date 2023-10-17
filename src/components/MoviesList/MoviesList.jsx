import { Link} from 'react-router-dom';

export const MoviesList = ({movies}) => {
    return(
        <ul>
         {movies && movies.map((movie) => (<li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>))}
        </ul>
    )
}