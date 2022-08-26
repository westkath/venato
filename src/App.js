import NavBar from './components/NavBar'
import Books from './components/Books'
import Movies from './components/Movies'
import Shows from './components/Shows'
import { useState } from 'react'

const App = () => {
    const [ view, setView ] = useState("Books");

    const changeActiveView = (newView) => setView(newView)

    const displayView = (view) => {
        switch(view) {
            case "Home":
                return <h1>Random Content</h1>
            case "Books":
                return <Books />
            case "Shows":
                return <Shows />
            case "Movies":
                return <Movies />
            default:
                return <h1>Random Content</h1>
        }
    }

    return (
        <>
            <NavBar handler = { changeActiveView }/>

            { displayView(view) }
        </>
    );
}

export default App;
