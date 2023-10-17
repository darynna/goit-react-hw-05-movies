
import { List, Item , ItemTitle, StyledLink} from './MoviesList.styled';

export const MoviesList = ({movies, location}) => {
    return(
        <List>
         {movies && movies.map((movie) => (<Item key={movie.id}><StyledLink to={`/movies/${movie.id}`} state={{from: location}}>
            <img height='300px' width='200px' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
            <ItemTitle>{movie.title}</ItemTitle>
            </StyledLink></Item>))}
        </List>
    )
}