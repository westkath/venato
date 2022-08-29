const Show = ({show}) => {
    return (
        <>
            <h1>{show.title}</h1>

            {show.watched
                ? 
                <p>
                    Watched on {show.watched_date}
                    Review:
                    {show.review}
                </p>
                : 
                <p>Remains on the "to-be-watched" list.</p>
            }

            <br/>
        </>
    );
}

export default Show;
