// src/Components/ProjectsSection.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Card className="project-card">
          <Card.Body className="project-card-body">
            <Card.Title className="project-card-title">Weather App</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/rcknathan/weather-app"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <Card.Body className="project-card-body">
            <Card.Title className="project-card-title">Byte Burguer</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/rcknathan/byte-burguer"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <Card.Body className="project-card-body">
            <Card.Title className="project-card-title">Tube Tool</Card.Title>
            <Button
              variant="primary"
              href="https://github.com/rcknathan/tube-tool"
            >
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default ProjectsSection;
