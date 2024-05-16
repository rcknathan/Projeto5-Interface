import React from 'react';
import { Container } from 'react-bootstrap';

function Header() {
  return (
    <Container fluid id="welcome-section" className="text-center">
      <h1>Welcome</h1>
      <p>Personal Portfolio</p>
    </Container>
  );
}

export default Header;