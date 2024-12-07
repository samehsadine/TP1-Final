import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export interface TrierProps {
    ordreTrie: 'asc' | 'desc';
    handleChangeOrdre: (ordere: 'asc' | 'desc') => void;
    handleChangeCritere: (critere: 'titre' | 'artiste' | 'categorie') => void;
}

export function Trier({ ordreTrie, handleChangeOrdre, handleChangeCritere }: TrierProps) {

    return (
        <>
            <div>
                <Form.Label>Ordre</Form.Label>

                <Button
                    variant={ordreTrie === 'asc' ? 'primary' : 'secondary'}
                    onClick={() => handleChangeOrdre('asc')}>
                    Ascendant
                </Button>
                <Button
                    variant={ordreTrie === 'desc' ? 'primary' : 'secondary'}
                    onClick={() => handleChangeOrdre('desc')}>
                    Descendant
                </Button>
            </div>
            <div>
                <Form.Label>Critère</Form.Label>

                <Button onClick={() => handleChangeCritere('titre')}>Titre</Button>
                <Button onClick={() => handleChangeCritere('artiste')}>Artiste</Button>
                <Button onClick={() => handleChangeCritere('categorie')}>Categorie</Button>


            </div>
        </>

    )

}