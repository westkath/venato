const Show = ({show}) => {
    return (
        <>
            {show.title}

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
