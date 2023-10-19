import {ContentBox} from './MovieDetailsComp.styled'
import {Placeholder} from 'components/Placeholder/Placeholder';
export function MovieDetailsComp({
  title,
  vote_average,
  overview,
  genreNames,
  posterPath,
}) {
  return (
    <ContentBox>
      <div>
      {posterPath ? <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />: <Placeholder/>}</div>
      <div><h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genreNames}</p></div>
    </ContentBox>
  );
}
