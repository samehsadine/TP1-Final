import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface FiltrerProps {
    filtre: string;
    setFiltre: (filtre: string) => void;
}
export function Filtrer({ filtre, setFiltre }: FiltrerProps) {
    return (
        <Container >
            <Row className="d-flex justify-content-end">
                <Form.Label>Recherche </Form.Label>
            </Row>
            <Col className="d-flex justify-content-end">
                <Form.Control
                    type="text"
                    placeholder='Recherche par titre,artiste ou catégorie..'
                    value={filtre}
                    autoFocus
                    onChange={(event) => setFiltre(event.target.value)}
                />
            </Col>
        </Container>
    );
}