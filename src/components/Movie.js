const Movie = ({movie}) => {
    return (
        <>
            {movie.title}

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
