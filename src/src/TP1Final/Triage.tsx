import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button"

export interface TriageProps {
    handleChangeOrdre: (ordere: 'asc' | 'desc') => void;
    handleChangeCritere: (critere: 'titre' | 'artiste' | 'categorie') => void;
}
export function Triage({ handleChangeOrdre, handleChangeCritere }: TriageProps) {
    return (
        <>
            <div>
                <Row>
                    <Col xl={12}>
                        <Form.Label>Ordre:</Form.Label>
                    </Col>
                    <Col xs={6}>
                        <Button
                            variant="primary"
                            className='w-100'
                            onClick={() => handleChangeOrdre('asc')}>
                            <span>
                                <FaArrowUp />
                            </span>
                            Ascendant
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button
                            variant="secondary"
                            className='w-100'
                            onClick={() => handleChangeOrdre('desc')}>
                            <span>
                                <FaArrowDown />
                            </span>
                            Descendant
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Label>Critère:</Form.Label>
                    </Col>
                    <Col xs={4}>
                        <Button
                            variant="success"
                            className='w-100'
                            onClick={() => handleChangeCritere('titre')}>
                            Titre
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <Button
                            variant="info"
                            className='w-100'
                            onClick={() => handleChangeCritere('artiste')}>
                            Artiste
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <Button
                            variant="warning"
                            className='w-100'
                            onClick={() => handleChangeCritere('categorie')}>
                            Catégorie
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
}
