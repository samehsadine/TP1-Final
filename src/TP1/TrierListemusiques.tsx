/* mport React from 'react';
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap
import { Form } from 'react-bootstrap';
import { Button, Container, InputGroup, } from 'react-bootstrap';

interface TrierProps {
  ordreTrie: 'asc' | 'desc';
  critereTrie: 'titre' | 'artiste' | 'categorie';
  handleChangeOrdre: (ordre: 'asc' | 'desc') => void;
  handleChangeCritere: (critere: 'titre' | 'artiste' | 'categorie') => void;
}

export function Trier({ ordreTrie, critereTrie, handleChangeOrdre, handleChangeCritere }: TrierProps) {
  return (
    <>
      <div>
        <Form.Label>Ordre</Form.Label>
        <ToggleButtonGroup type="radio" name="order" defaultValue={ordreTrie}>
          <ToggleButton value="asc" onClick={() => handleChangeOrdre('asc')}>
            Ascendant
          </ToggleButton>
          <ToggleButton value="desc" onClick={() => handleChangeOrdre('desc')}>
            Descendant
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <Form.Label>Critère</Form.Label>
        <ButtonGroup>
          <Button variant={critereTrie === 'titre' ? 'primary' : 'secondary'} onClick={() => handleChangeCritere('titre')}>
            Titre
          </Button>
          <Button variant={critereTrie === 'artiste' ? 'primary' : 'secondary'} onClick={() => handleChangeCritere('artiste')}>
            Artiste
          </Button>
          <Button variant={critereTrie === 'categorie' ? 'primary' : 'secondary'} onClick={() => handleChangeCritere('categorie')}>
            Catégorie
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
} */