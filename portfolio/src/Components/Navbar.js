import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#welcome-section">Home</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="https://github.com/rcknathan" target="_blank">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;