const Book = ({book}) => {
    return (
        <>
            {book.title} by {book.author}

            {book.read
                ? 
                <p>
                    Read on {book.read_date}
                    Review:
                    {book.review}
                </p>
                : 
                <p>Remains on the "to-be-read" pile.</p>
            }

            <br/>
        </>
    );
}

export default Book;
