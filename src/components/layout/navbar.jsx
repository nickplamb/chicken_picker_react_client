import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export function ChickenNavbar({ logout }){
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>Chicken Picker</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" >Home</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
          <NavDropdown title="Profile" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Favorites</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={()=>logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

ChickenNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
};