import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Triage } from './Triage';
import { Filtrage } from './Filtrage';
import { PieceMusicale } from './pieces';

export interface PieceMusicalesProps {
    pieces: PieceMusicale[];
}

export function PieceMusicales({ pieces }: PieceMusicalesProps) {

    const [searchMusic, setSearchMusic] = useState('');
    const [orderTry, setOrderTry] = useState<string>('asc');
    const [screamTry, setScreamTry] = useState<'titre' | 'artiste' | 'categorie'>('titre');
    const [messageTry, setMessageTry] = useState<string>('');

    function normalizeText(text: string) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    const filtrerPiecesMusicales = () => {

        const textAChercher = normalizeText(searchMusic);
        return pieces.filter(piece =>
            normalizeText(piece.titre).includes(textAChercher) ||
            normalizeText(piece.artiste).includes(textAChercher) ||
            normalizeText(piece.categorie).includes(textAChercher)
        )
    }
    const compare = (a: PieceMusicale, b: PieceMusicale): number => {
        const order = orderTry === "asc" ? 1 : -1;
        return a[screamTry].localeCompare(b[screamTry], "fr") * order;
    };

    const handelChangeSearch = (value: string) => {
        setSearchMusic(value);
    }
    const handelScreamChange = (newScream: 'titre' | 'artiste' | 'categorie') => {
        setScreamTry(newScream);
        setMessageTry(
            `Affichage trié ${orderTry === 'asc' ? "ascendant" : "descendant"} par ${newScream}`
        )
    };
    const handelOrderChange = (orderClick: string) => {
        const newOrder = orderClick;
        setOrderTry(newOrder);
        setMessageTry(
            `Affichage trié ${newOrder === 'asc' ? "ascendant" : "descendant"} par ${screamTry}`
        )
    }
    const piecesTriees = () => {
        return filtrerPiecesMusicales().sort(compare);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Liste de musiques</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <strong>{messageTry}</strong>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Artiste</th>
                                <th>Categorie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {piecesTriees().map((piece: PieceMusicale, index: number) => (
                                <tr key={index}>
                                    <td>{piece.titre}</td>
                                    <td>{piece.artiste}</td>
                                    <td>{piece.categorie}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col className='mt-5'>
                    <Row>
                        <strong> Personnaliser votre recherche :</strong>
                    </Row>
                    <Row>
                        <Filtrage searchMusique={searchMusic} onChangeFiltre={handelChangeSearch} />
                    </Row>
                    <div className='d-flex justify-content-between'>
                        <Row>
                            <Triage handleChangeOrdre={handelOrderChange} handleChangeCritere={handelScreamChange} />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}