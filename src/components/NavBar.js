import React from 'react'
import { StyledNavBar, StyledLink } from './Styles'

const NavBar = () => {
    return (
        <StyledNavBar>
            <ul>
                <li><StyledLink to="/venato">Home</StyledLink></li>
                <li><StyledLink to="/venato/books">Books</StyledLink></li>
                <li><StyledLink to="/venato/shows">Shows</StyledLink></li>
                <li><StyledLink to="/venato/movies">Movies</StyledLink></li>
            </ul>
        </StyledNavBar>
    )
}

export default NavBar;
