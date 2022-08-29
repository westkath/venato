import Movie from './Movie'
import movies from '../data/movies.json'
import NavBar from './NavBar'
import { Heading, Tiles, Tile } from './Styles'

function Movies() {
    return (
        <>
            <NavBar />

            <Heading><h1>Movies</h1></Heading>

            <Tiles>
                {movies.map(movie => {
                    return (
                        <Tile>
                            <Movie movie={movie} key={movie.id} />
                        </Tile>
                    )
                })}
            </Tiles>
        </>
    );
}

export default Movies;
