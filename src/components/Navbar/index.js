import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'> </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/jackets' activeStyle>
            Jackets
          </NavLink>
          <NavLink to='/shirts' activeStyle>
            Shirts
          </NavLink>
          <NavLink to='/accessories' activeStyle>
            Accessories
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/ourpartner' activeStyle>
            Our Partner
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/alennuspäivät'>Alennuspäivät</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Alennuspäivät'>Alennuspäivät</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;