import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav className="mx-auto">
        <Nav.Link href="#welcome-section">Home</Nav.Link> {/* Alterado */}
        <Nav.Link href="https://github.com/rcknathan" target="_blank">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
