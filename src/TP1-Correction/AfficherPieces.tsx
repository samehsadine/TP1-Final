import React from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap'
import { Button, Container, InputGroup, } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import { PieceMusicale } from '../src/TP1Final/pieces';
import { Trier } from './Trier';
import { Filtrer } from './Filtrer';

export interface AficherPiecesProps {
    pieces: PieceMusicale[];
}
export function AficherPieces({pieces}:AficherPiecesProps){
    const [chercherMusique, setCherchermusique] = useState('');
    const [ordreTrie, setOrdreTrie] = useState<'asc' |'desc'>('asc');
    const [critereTrie, setCritereTrie] = useState<'titre' |'artiste'|'categorie'>('titre');

    const [piecesFiltrees, setPiecesFiltrees] = useState<PieceMusicale[]>(pieces);

    function normalizeText(text: string) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    const filtrerPiecesMusicales = (text: string) => {

        const textAChercher = normalizeText(text);
        return pieces.filter(piece =>
            normalizeText(piece.titre).includes(textAChercher) ||
            normalizeText(piece.artiste).includes(textAChercher) ||
            normalizeText(piece.categorie).includes(textAChercher)
        )
    }
        const comparer = (a: PieceMusicale, b: PieceMusicale): number => {
            const ordre = ordreTrie === "asc" ? 1 : -1;
            return a[critereTrie].localeCompare(b[critereTrie], "fr") * ordre;
          };
        const trierPieces = (piecesFiltrees:PieceMusicale[]) => {
         return [...piecesFiltrees].sort(comparer);
          };
          const rechercheChange = (valeur:string) => {
            setCherchermusique(valeur);
            const piecesFiltrées = filtrerPiecesMusicales(valeur);
            setPiecesFiltrees(trierPieces(piecesFiltrées));
        }
        const handleChangerOrdre = (ordre:"asc" |"desc") => {
            setOrdreTrie(ordre);
            setPiecesFiltrees(trierPieces(piecesFiltrees));
          };
        return(
            <Container>
                <Row>
                    <Col>
                    <Filtrer filtre={chercherMusique} setFiltre={rechercheChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Trier ordreTrie={ordreTrie} 
                    handleChangeOrdre={handleChangerOrdre} 
                    handleChangeCritere={setCritereTrie}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Artiste</th>
                        <th>Categorie</th>
                    </tr>
                </thead>
                <tbody>
                    {piecesFiltrees.map((piece:PieceMusicale,index:number) => (
                        <tr key={index}>
                            <td>{piece.titre}</td>
                            <td>{piece.artiste}</td>
                            <td>{piece.categorie}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                    </Col>
                </Row>
            </Container>

        )
  

}