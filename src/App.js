import NavBar from './components/NavBar'
import Books from './components/Books'
import Movies from './components/Movies'
import Shows from './components/Shows'
import { useState } from 'react'

const App = () => {
    const [ view, setView ] = useState("Books");

    const changeActiveView = (newView) => setView(newView)

    return (
        <>
            <NavBar handler={changeActiveView}/>

            {
                view === "Home" &&
                <h1>Random Content</h1>
            }

            {
                view === "Books" &&
                <Books />
            }

            {
                view === "Shows" &&
                <Shows />
            }

            {
                view === "Movies" &&
                <Movies />
            }
        </>
    );
}

export default App;
