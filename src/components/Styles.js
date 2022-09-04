import { Link } from 'react-router-dom'
import styled from 'styled-components'

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
};

const StyledNavBar = styled.div`
    & ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: relative;
        background-color: #03448f;
    }

    & li {
        float: left;
    }

    & li.logo {
        float: right;
        margin-top: 9px;
        margin-right: 9px;
    }

    @media screen and (max-width: ${devices.mobileS}) & li {
        float: none;
        display: block; 
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: 16px 16px;
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
        text-align: center;
    }
`

const Tiles = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Tile = styled.div`
    padding: 10px;
    display: inline-block;
    background-color: #0479cc;

    & h1 {
        font-family: Helvetica;
    }

    & p {
        font-family: Helvetica;
        padding: 5px;
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
