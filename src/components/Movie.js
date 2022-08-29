const Movie = ({movie}) => {
    return (
        <>
            <h1>{movie.title}</h1>

            {movie.watched
                ? 
                <p>
                    Watched on {movie.watched_date}
                    Review:
                    {movie.review}
                </p>
                : 
                <p>Remains on the "to-be-watched" list.</p>
            }

            <br/>
        </>
    );
}

export default Movie;
