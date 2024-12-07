import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Container, InputGroup, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearch } from "react-icons/fa";
import { PieceMusicale } from '../TP1/pieces';
import { Triage } from './Triage';
import { Filtrage } from './Filtrage';

export interface AficherPiecesProps {
  pieces: PieceMusicale[];
}

export function AficherPieces({ pieces }: AficherPiecesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">('asc');
  const [sortCriteria, setSortCriteria] = useState<"titre" | "artiste" | "categorie">('titre');

  const [filteredPieces, setFilteredPieces] = useState<PieceMusicale[]>(pieces);

  function normalizeText(text: string) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  const filterPieces = (text: string) => {
    const normalizedSearchTerm = normalizeText(text);
    return pieces.filter(piece =>
      normalizeText(piece.titre).includes(normalizedSearchTerm) ||
      normalizeText(piece.artiste).includes(normalizedSearchTerm) ||
      normalizeText(piece.categorie).includes(normalizedSearchTerm)
    );
  };

  const compare = (a: PieceMusicale, b: PieceMusicale): number => {
    const order = sortDirection === "asc" ? 1 : -1;
    return a[sortCriteria].localeCompare(b[sortCriteria], "fr") * order;
  };

  const sortAndFilterPieces = (searchTerm: string) => {
    const filtered = filterPieces(searchTerm);
    return filtered.sort(compare);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setFilteredPieces(sortAndFilterPieces(value));
  };

  const handleSortChange = (direction: "asc" | "desc") => {
    setSortDirection(direction);
    setFilteredPieces(sortAndFilterPieces(searchTerm));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Filtrage filtre={searchTerm} setFiltre={handleSearchChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Triage
            ordreTrie={sortDirection}
            critereTrie={sortCriteria}
            handleChangeOrdre={handleSortChange}
            handleChangeCritere={setSortCriteria}
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
              {filteredPieces.map((piece: PieceMusicale, index: number) => (
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
  );
}