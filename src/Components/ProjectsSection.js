import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function ProjectsSection() {
  return (
    <section id="projects">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Button variant="primary" href="https://github.com/rcknathan/weather-app">GitHub</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Byte Burguer</Card.Title>
            <Button variant="primary" href="https://github.com/rcknathan/byte-burguer">GitHub</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Tube Tool</Card.Title>
            <Button variant="primary" href="https://github.com/rcknathan/tube-tool">GitHub</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default ProjectsSection;