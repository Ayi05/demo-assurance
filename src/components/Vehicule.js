import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectValidator } from 'react-material-ui-form-validator';


const Vehicule = (props) => {


    return (

        <div className="card border-info rounded my-4 shadow">

            {/* VEHICULE */}
            <div className="card-header">
                <h4 className="text-uppercase d-flex">
                    <i className="fas fa-car fa-2x text-info mr-2"></i>
                    <span className="align-self-center">Véhicule</span>
                </h4>
            </div>

            <div className="p-4">
                <div className="row justify-content-start">

                    <div className="col-10 col-md my-2">
                        <SelectValidator
                            className="col"
                            size="small"
                            label="Marque"
                            name="marque"
                            variant="outlined"
                            value={props.marque}
                            onChange={props.handleMarque}
                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                        >
                            <MenuItem value="" className="text-primary">
                                Marque
                        </MenuItem>
                            {props.marques.map(marque => (
                                <MenuItem key={marque} value={marque}>
                                    {marque}
                                </MenuItem>
                            ))}
                        </SelectValidator>
                    </div>

                    <div className="col-10 col-md my-2">
                        <SelectValidator
                            className="col"
                            size="small"
                            label="Modele"
                            name="modele"
                            variant="outlined"
                            value={props.modele}
                            onChange={props.handleModele}
                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                        >
                            <MenuItem value="" className="text-primary">
                                Modele
                        </MenuItem>
                            {props.modeles.map(modele => (
                                <MenuItem key={modele} value={modele}>
                                    {modele}
                                </MenuItem>
                            ))}
                        </SelectValidator>
                    </div>

                </div>

                <div className="row justify-content-start">

                    <div className="col-10 col-md my-2">
                        <SelectValidator
                            className="col"
                            size="small"
                            label="Année"
                            name="annee"
                            variant="outlined"
                            value={props.annee}
                            onChange={props.handleAnnee}
                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                        >
                            <MenuItem value="" className="text-primary">
                                Année
                        </MenuItem>
                            {props.annees.map(annee => (
                                <MenuItem key={annee} value={annee}>
                                    {annee}
                                </MenuItem>
                            ))}
                        </SelectValidator>
                    </div>

                    <div className="col-10 col-md mt-2 mb-4">
                        <SelectValidator
                            className="col"
                            size="small"
                            label="Km/Année"
                            name="kma"
                            variant="outlined"
                            value={props.kma}
                            onChange={props.handleKma}
                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                        >
                            <MenuItem value="" className="text-primary">
                                Km/Année
                        </MenuItem>
                            {props.kmas.map(kma => (
                                <MenuItem key={kma} value={kma}>
                                    {kma}
                                </MenuItem>
                            ))}
                        </SelectValidator>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Vehicule;