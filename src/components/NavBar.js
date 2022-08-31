import React from 'react'
import { StyledNavBar, StyledLink } from './Styles'
import logo from '../data/logo.png'

const NavBar = () => {
    return (
        <StyledNavBar>
            <ul>
                <li><StyledLink to="/venato">Home</StyledLink></li>
                <li><StyledLink to="/venato/books">Books</StyledLink></li>
                <li><StyledLink to="/venato/shows">Shows</StyledLink></li>
                <li><StyledLink to="/venato/movies">Movies</StyledLink></li>
                <li className="logo"><img src={logo} alt="venato logo" /></li>
            </ul>
        </StyledNavBar>
    )
}

export default NavBar;
