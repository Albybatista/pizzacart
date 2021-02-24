import React from 'react'
import './Navbar.css'
import { Nav, NavLink, NavIcon, MenuIcon } from './NavbarStyles';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={ toggle }>
                    <p>Menu</p>
                    <MenuIcon />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
