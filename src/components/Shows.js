import Show from './Show'
import shows from '../data/shows.json'

function Shows() {
    return (
        <>
            <h2>Shows</h2>

            {
                shows.map((show) =>
                    <Show show={show} key={show.id} />
                )
            }
        </>
    );
}
  
export default Shows;
