import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Shows from './components/Shows'
import Movies from './components/Movies'

const App = () => {
    return (
        <Routes>
            <Route exact path = "/venato" element = { <Home /> } />
            <Route exact path = "/venato/books" element = { <Books /> } />
            <Route exact path = "/venato/shows" element = { <Shows /> } />
            <Route exact path = "/venato/movies" element = { <Movies /> } />
        </Routes>
    )
}

export default App;
