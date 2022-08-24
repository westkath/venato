import Book from '../components/Book'
import books from '../data/books.json'

function Books() {
    return (
        <>
            <h2>Books</h2>

            {
                books.map((book) =>
                    <Book book={book} key={book.id} />
                )
            }
        </>
    );
}
  
export default Books;
