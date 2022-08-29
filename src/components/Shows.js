import Show from './Show'
import shows from '../data/shows.json'
import NavBar from './NavBar'
import { Heading, Tiles, Tile } from './Styles'

function Shows() {
    return (
        <>
            <NavBar />

            <Heading><h1>Shows</h1></Heading>

            <Tiles>
                {shows.map(show => {
                    return (
                        <Tile>
                            <Show show={show} key={show.id} />
                        </Tile>
                    )
                })}
            </Tiles>
        </>
    );
}

export default Shows;
