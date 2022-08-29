const Book = ({book}) => {
    return (
        <>
            <h1>{book.title} by {book.author}</h1>

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
