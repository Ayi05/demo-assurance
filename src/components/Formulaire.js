import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Conducteur from './Conducteur';
import Vehicule from './Vehicule';


const Formulaire = (props) => {

    return (

        <div className="container mt-2 d-flex justify-content-center">

            <ValidatorForm
                // ref="form"
                onSubmit={props.handleSubmit}
                onError={errors => console.log(errors)}
            >

                <Conducteur
                    genre={props.genre}
                    prenom={props.prenom}
                    nom={props.nom}
                    age={props.age}
                    codeP={props.codeP}
                    experience={props.experience}
                    handleGenre={props.handleGenre}
                    handlePrenom={props.handlePrenom}
                    handleNom={props.handleNom}
                    handleAge={props.handleAge}
                    handleExperience={props.handleExperience}
                    handleCodePostal={props.handleCodePostal}
                />

                <Vehicule
                    marques={props.marques}
                    marque={props.marque}
                    modeles={props.modeles}
                    modele={props.modele}
                    annees={props.annees}
                    annee={props.annee}
                    kmas={props.kmas}
                    kma={props.kma}
                    handleMarque={props.handleMarque}
                    handleModele={props.handleModele}
                    handleAnnee={props.handleAnnee}
                    handleKma={props.handleKma}
                />

                <div className="row justify-content-center mt-4">
                    <Button variant="outlined" color="primary" type="submit">SOUMETTRE</Button>
                </div>

            </ValidatorForm>

        </div>
    )
}

export default Formulaire;