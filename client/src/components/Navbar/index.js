import React from 'react'
import './Navbar.css'
import { Nav, NavLink, NavIcon, MenuIcon } from './NavbarStyles';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Hello World</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <MenuIcon />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
