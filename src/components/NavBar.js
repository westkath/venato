const NavBar = ({handler}) => {
    return <div>
        <ul>
            <li><button onClick={() => handler("Home")}>Home</button></li>
            <li><button onClick={() => handler("Books")}>Books</button></li>
            <li><button onClick={() => handler("Shows")}>Shows</button></li>
            <li><button onClick={() => handler("Movies")}>Movies</button></li>
        </ul>
    </div>
}

export default NavBar;
