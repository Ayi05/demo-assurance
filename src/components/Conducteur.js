import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';

const ages = ['16 à 20', '21 à 24', '25 à 29', '30 à 44', '45 à 64', '65 à 74', '75 et plus'];
const experiences = ['0', '1', '2', '3 et +'];


const Conducteur = (props) =>{

    return(
        


                            
                            <div className="border rounded px-4 my-4">
                                {
                                    /* CONDUCTEUR */ }
                                <div className="my-3">
                                    <h4 className="text-uppercase d-flex">
                                        <i className="fas fa-user-circle fa-2x my-2 m-0 text-info mr-2"></i>
                                        <span className="align-self-center">Conducteur</span>
                                    </h4>
                                </div>

                                <div className="row form-group justify-content-start">

                                    {/* Genre */}
                                    <div className="col-3">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Genre"
                                            name="genre"
                                            variant="outlined"
                                            value={props.genre}
                                            onChange={props.handleGenre}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}>
                                            <MenuItem value="">
                                                <em>Choisir</em>
                                            </MenuItem>
                                            <MenuItem value="M.">Homme</MenuItem>
                                            <MenuItem value="Mme">Femme</MenuItem>
                                        </SelectValidator>
                                    </div>
                                </div>

                                <div className="row form-group justify-content-start">

                                    {/* Prénom */}
                                    <div className="col">
                                        <TextValidator
                                            className="col"
                                            size="small"
                                            label="Prénom"
                                            placeholder="Prénom"
                                            name="prenom"
                                            variant="outlined"
                                            value={props.prenom}
                                            onChange={props.handlePrenom}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']} />
                                    </div>

                                    {/* Nom */}
                                    <div className="col">
                                        <TextValidator
                                            className="col"
                                            size="small"
                                            label="Nom"
                                            name="nom"
                                            variant="outlined"
                                            value={props.nom}
                                            onChange={props.handleNom}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']} />
                                    </div>
                                </div>

                                <div className="row form-group justify-content-start">

                                    {/* Tranche d'Âge */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Tranche d'âge"
                                            name="age"
                                            variant="outlined"
                                            value={props.age}
                                            onChange={props.handleAge}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Tranche d'âge
                                        </MenuItem>
                                            {ages.map(age => (
                                                <MenuItem key={age} value={age}>
                                                    {age}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                    {/* Expérience de conduite */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Sinistres en 3 ans"
                                            name="experience"
                                            variant="outlined"
                                            value={props.experience}
                                            onChange={props.handleExperience}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Sinistres des 3 dernières années
                                            </MenuItem>
                                            {experiences.map(experience => (
                                                <MenuItem key={experience} value={experience}>
                                                    {experience}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                </div>

                                <div className="row form-group justify-content-start">
                                    {/* Code Postal */}
                                    <div className="col">
                                        <TextValidator
                                            className="col"
                                            size="small"
                                            name="codeP"
                                            label="Code Postal"
                                            variant="outlined"
                                            value={props.codeP}
                                            placeholder="A1B 2C3"
                                            onChange={props.handleCodePostal}
                                            validators={['required', 'matchRegexp:^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$']}
                                            errorMessages={['Champ Obligatoire!', 'Format Valide: A1B 2C3']} />
                                    </div>

                                    <div className="col">

                                    </div>

                                </div>

                            </div>



    )
}

export default Conducteur;