import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button"

export interface FiltrageProps {
    searchMusique: string;
    onChangeFiltre: (value: string) => void
}
export function Filtrage({ searchMusique, onChangeFiltre }: FiltrageProps) {
    return (
        <>
            <Container>
                <Row>
                    <Form.Label>Mot Clé:</Form.Label>
                </Row>
                <Row>
                    <Col>
                        <InputGroup>
                            <Form.Control
                                type='text'
                                placeholder='Rechercher par titre , artiste ou catégorie...'
                                value={searchMusique}
                                onChange={(event) => onChangeFiltre(event.target.value)} />
                            <Button variant='outline-secondary'>
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
