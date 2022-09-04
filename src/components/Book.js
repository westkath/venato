const Book = ({book}) => {
    return (
        <>
            <h1>{book.title} by {book.author}</h1>

            {book.read
                ? 
                <>
                    <p>Read on {book.readDate}</p>
                    <p>Review: {book.review}</p>
                </>
                : 
                <p>Remains on the "to-be-read" pile.</p>
            }

            <br/>
        </>
    );
}

export default Book;
