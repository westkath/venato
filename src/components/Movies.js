import Movie from './Movie'
import movies from '../data/movies.json'

function Movies() {
    return (
        <>
            <h2>Movies</h2>

            {
                movies.map((movie) =>
                    <Movie movie={movie} key={movie.id} />
                )
            }
        </>
    );
}

export default Movies;
