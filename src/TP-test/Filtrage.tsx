import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

// Define a more specific type if you know the format of the search term
export interface FiltrageProps {
  filtre: string;
  setFiltre: (filtre: string) => void;
}

export function Filtrage({ filtre, setFiltre }: FiltrageProps) {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <Form.Label>Recherche</Form.Label>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Form.Control
            type="text"
            placeholder="Recherche par titre, artiste ou catégorie..."
            value={filtre}
            autoFocus
            onChange={(event) => setFiltre(event.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
}