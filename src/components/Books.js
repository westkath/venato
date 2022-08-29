import Book from './Book'
import books from '../data/books.json'
import NavBar from './NavBar'
import { Heading, Tiles, Tile } from './Styles'

function Books() {
    return (
        <>
            <NavBar />

            <Heading><h1>Books</h1></Heading>

            <Tiles>
                {books.map(book => {
                    return (
                        <Tile>
                            <Book book={book} key={book.id} />
                        </Tile>
                    )
                })}
            </Tiles>
        </>
    );
}

export default Books;
