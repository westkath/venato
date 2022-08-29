import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.div`
    & ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #03448f;
    }

    & li {
        float: left;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 14px 16px;
    color: white;
    display: block;
    font-family: helvetica;

    &:hover {
        background-color: #045bbf;
    }
`

const Heading = styled.div`
    & h1 {
        font-family: Helvetica;
        margin: 10px;
    }
`

const Tiles = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`

const Tile = styled.div`
    width: 20%;
    margin: 10px;
    padding: 10px;
    display: inline-block;
    background-color: #0479cc;

    & h1 {
        font-family: Helvetica;
    }

    &:hover {
        background-color: #045bbf;
    }
`

export {
    Heading,
    StyledNavBar,
    StyledLink,
    Tiles,
    Tile
}
