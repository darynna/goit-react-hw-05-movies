
import Placeholder from 'components/Placeholder/Placeholder';
import { List, Item , ItemTitle, StyledLink} from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({movies}) => {
   const location = useLocation()
    return(
        <List>
         {movies && movies.map((movie) => (<Item key={movie.id}><StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
           {movie.poster_path!== null ? <img height='300px' width='200px' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="poster" /> : <Placeholder/>}
            <ItemTitle>{movie.title}</ItemTitle>
            </StyledLink></Item>))}
        </List>
    )
}