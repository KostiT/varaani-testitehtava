import React, { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
export const NavBar: FC = () => {

  return ( 
    <Navbar className = 'topnav' collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/next">Next</Nav.Link>
            <Nav.Link href="http://varaani.com/">Varaani</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
