import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';


// const genres = ['M.', 'Mme', 'Nb'];
const ages = ['15 à 20', '21 à 25', '26 à 30', '31 à 35', '36 à 40', '41 à 45', '46 à 50', '51 à 55', '56 à 60', '61 à 65', '66 et plus'];
const experiences = ['- de 24 Mois', '2 à 5 ans', '6 à 9 ans', '10 ans +'];

const marques = ['Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda', 'Nissan'];

const chevrolet = ['Blazer', 'Camaro', 'Cruze', 'Equinox', 'Silverado', 'Spark'];
const ford = ['EcoSport', 'Escape', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Fusion', 'Mustang'];
const honda = ['Accord', 'Civic', 'Civic Coupe', 'CR-V', 'HR-V'];
const hyundai = ['Elantra', 'Elantra GT', 'Kona', 'Kona Electric', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'];
const mazda = ['CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'];
const nissan = ['Altima', 'Kicks', 'Micra', 'Murano', 'Quashqai', 'Rogue', 'Versa'];

const annees = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
const kmas = ['moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km'];

// let classResult = "col py-3 d-none";

class Basic extends React.Component {

    state = {
        genre: '',
        prenom: '',
        nom: '',
        age: '',
        experience: '',
        codeP: '',
        marque: '',
        modeles: [],
        modele: '',
        annee: '',
        kma: '',
        classResult: 'col py-3 d-none',
        classForm: 'col py-3',

    }

    

    // HandleSubmit
    handleSubmit = () => {
        // Affichage des données
        this.setState({ classResult: 'col py-3', classForm: 'col py-3 d-none'})
        // alert(this.state.genre + ' ' + this.state.prenom + ' ' + this.state.nom +
        //     '\nTranche d\'Âge : ' + this.state.age +
        //     '\nExpérience de Conduite : ' + this.state.experience +
        //     '\nCode Postal : ' + this.state.codeP +
        //     '\n\n' +
        //     this.state.marque + ' ' + this.state.modele + ' ' + this.state.annee +
        //     '\n' + this.state.kma + ' par année!'
        // );
    }
    handleReset = () => {
        this.setState({
            genre: '',
            prenom: '',
            nom: '',
            age: '',
            experience: '',
            codeP: '',
            marque: '',
            modeles: [],
            modele: '',
            annee: '',
            kma: '',
            classResult: 'col py-3 d-none',
            classForm: 'col py-3',
         })
    }

    // HandleChange Zone
    handleGenre = event => {
        this.setState({ genre: event.target.value });
    };
    handlePrenom = event => {
        const prenom = event.target.value;
        this.setState({ prenom });
    };
    handleNom = event => {
        this.setState({ nom: event.target.value });
    };
    handleAge = event => {
        this.setState({ age: event.target.value });
    };
    handleExperience = event => {
        this.setState({ experience: event.target.value });
    };
    handleCodePostal = event => {
        this.setState({ codeP: event.target.value });
    };
    handleMarques = event => {
        switch (event.target.value) {
            case 'Chevrolet':
                this.setState({ modeles: chevrolet })
                break;

            case 'Ford':
                this.setState({ modeles: ford })
                break;

            case 'Honda':
                this.setState({ modeles: honda })
                break;

            case 'Hyundai':
                this.setState({ modeles: hyundai })
                break;

            case 'Mazda':
                this.setState({ modeles: mazda })
                break;

            case 'Nissan':
                this.setState({ modeles: nissan })
                break;

            default:
                break;
        }
        this.setState({ marque: event.target.value });
    };
    handleModele = event => {
        this.setState({ modele: event.target.value });
    };
    handleAnnee = event => {
        this.setState({ annee: event.target.value });
    };
    handleKma = event => {
        this.setState({ kma: event.target.value });
    };

    render() {
        // const { genre, prenom, nom, codeP, } = this.state;

        return (
            <div className="container mt-2 d-flex justify-content-center">
                <div className="row">
                    <div className={this.state.classForm}>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            {/* CONDUCTEUR */}
                            <div className="border rounded px-4 my-4">
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
                                            // placeholder="M."
                                            name="genre"
                                            variant="outlined"
                                            value={this.state.genre}
                                            onChange={this.handleGenre}
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
                                            value={this.state.prenom}
                                            onChange={this.handlePrenom}
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
                                            value={this.state.nom}
                                            onChange={this.handleNom}
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
                                            value={this.state.age}
                                            onChange={this.handleAge}
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
                                            label="Expérience "
                                            name="experience"
                                            variant="outlined"
                                            value={this.state.experience}
                                            onChange={this.handleExperience}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Experience de Conduite
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

                                    <div className="col">
                                        <TextValidator
                                            className="col"
                                            size="small"
                                            name="codeP"
                                            label="Code Postal"
                                            variant="outlined"
                                            value={this.state.codeP}
                                            placeholder="A1B 2C3"
                                            onChange={this.handleCodePostal}
                                            validators={['required', 'matchRegexp:^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$']}
                                            errorMessages={['Champ Obligatoire!', 'Format Valide: A1B 2C3']} />
                                    </div>

                                    <div className="col">

                                    </div>

                                </div>

                            </div>

                            {/* VÉHICULE */}
                            <div className="border rounded px-4 my-4">
                                <div className="my-3">
                                    <h4 className="text-uppercase d-flex">
                                        <i className="fas fa-user-circle fa-2x my-2 m-0 text-info mr-2"></i>
                                        <span className="align-self-center">Véhicule</span>
                                    </h4>
                                </div>

                                <div className="row form-group justify-content-start">

                                    {/* Marque */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Marque"
                                            name="marque"
                                            variant="outlined"
                                            value={this.state.marque}
                                            onChange={this.handleMarques}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Marque
                                        </MenuItem>
                                            {marques.map(marque => (
                                                <MenuItem key={marque} value={marque}>
                                                    {marque}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                    {/* Expérience de conduite */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Modele"
                                            name="modele"
                                            variant="outlined"
                                            value={this.state.modele}
                                            onChange={this.handleModele}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Modele
                                        </MenuItem>
                                            {this.state.modeles.map(modele => (
                                                <MenuItem key={modele} value={modele}>
                                                    {modele}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                </div>

                                <div className="row form-group justify-content-start">

                                    {/* Année */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Année"
                                            name="annee"
                                            variant="outlined"
                                            value={this.state.annee}
                                            onChange={this.handleAnnee}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Année
                                        </MenuItem>
                                            {annees.map(annee => (
                                                <MenuItem key={annee} value={annee}>
                                                    {annee}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                    {/* Expérience de conduite */}
                                    <div className="col">
                                        <SelectValidator
                                            className="col"
                                            size="small"
                                            label="Km/Année"
                                            name="kma"
                                            variant="outlined"
                                            value={this.state.kma}
                                            onChange={this.handleKma}
                                            validators={['required']} errorMessages={['Champ Obligatoire!']}
                                        >
                                            <MenuItem value="" className="text-primary">
                                                Km/Année
                                        </MenuItem>
                                            {kmas.map(kma => (
                                                <MenuItem key={kma} value={kma}>
                                                    {kma}
                                                </MenuItem>
                                            ))}
                                        </SelectValidator>
                                    </div>

                                </div>

                            </div>

                            {/* SOUMETTRE */}
                            <div className="mt-4">
                                <Button variant="outlined" color="primary" type="submit">SOUMETTRE</Button>
                                {/* <button className="btn btn-outline-info" type="submit">Afficher</button> */}
                            </div>

                        </ValidatorForm>

                    </div>

                    <div className={this.state.classResult}>
                        <div className="border rounded px-4 my-4">
                            <div className="my-3">
                                <h4 className="text-uppercase. d-flex justify-content-center">
                                    <span className="align-self-center.">Votre Soumission</span>
                                </h4>
                            </div>

                            <div class="card bg-light">
                                <div className="card-header">
                                    <h6 className="">{this.state.genre + ' ' + this.state.prenom + ' ' + this.state.nom}</h6>
                                </div>

                            </div>
                            <div className="card. bg-light border-light my-3">
                                <div class="card-header">
                                    <h5><ins>{this.state.marque + ' ' + this.state.modele + ' ' + this.state.annee}</ins></h5>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <p>
                                            <span className="h3">
                                                <strong>110.42 $</strong><span className="text-muted small">/mois</span>
                                            </span>
                                            <span className="text-muted"> (ou 1325.00 $/an).</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card. bg-light border-light my-3">

                                <div class="card-header">
                                    <h4>
                                        Couverture
                                    </h4>
                                </div>
                                <div class="card-body row.">

                                    <div className="col">
                                        <p>
                                            <span>Responsablité Civile :</span><br />
                                            <span><strong>1 Million</strong></span>
                                        </p>
                                    </div>

                                    <div className="col">
                                        <p>
                                            <span>Risques de Collision et de Renversement : </span><br />
                                            <span><strong>Franchise 500 $</strong></span>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            <span>Tous Risques sauf Collision et Renversement : </span><br />
                                            <span><strong>Franchise 250 $</strong></span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* SOUMETTRE */}
                        <div className="mt-4">
                            <Button variant="outlined" color="primary" type="reset" onClick={this.handleReset}>RECOMMENCER</Button>
                            {/* <button className="btn btn-outline-info" type="submit">Afficher</button> */}
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default Basic;