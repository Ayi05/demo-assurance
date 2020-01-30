import React from 'react';
import Resultat from './Resultat';
import Formulaire from './Formulaire';
import Navbar from './Navbar';

const marques = ['Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda', 'Nissan'];

const chevrolet = ['Blazer', 'Camaro', 'Cruze', 'Equinox', 'Silverado', 'Spark'];
const ford = ['EcoSport', 'Escape', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Fusion', 'Mustang'];
const honda = ['Accord', 'Civic', 'Civic Coupe', 'CR-V', 'HR-V'];
const hyundai = ['Elantra', 'Elantra GT', 'Kona', 'Kona Electric', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'];
const mazda = ['CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'];
const nissan = ['Altima', 'Kicks', 'Micra', 'Murano', 'Quashqai', 'Rogue', 'Versa'];

const annees = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
const kmas = ['moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km'];


export default class Central extends React.Component {

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
        classForm: 'py-3',
        classResult: 'py-3 d-none',
    }

    // HandleSubmit
    handleSubmit = () => {
        this.setState({ classResult: 'py-3', classForm: 'py-3 d-none' })
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
            classResult: 'py-3 d-none',
            classForm: 'py-3',
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
    handleMarque = event => {
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

        return (
            <>
                <Navbar></Navbar>
                <div className="container">

                    <div className="mt-2 d-flex justify-content-center">

                        <div className={this.state.classForm}>
                            <Formulaire
                                ref="form"
                                handleSubmit={this.handleSubmit}
                                genre={this.state.genre}
                                prenom={this.state.prenom}
                                nom={this.state.nom}
                                age={this.state.age}
                                codeP={this.state.codeP}
                                experience={this.state.experience}
                                handleGenre={this.handleGenre}
                                handlePrenom={this.handlePrenom}
                                handleNom={this.handleNom}
                                handleAge={this.handleAge}
                                handleExperience={this.handleExperience}
                                handleCodePostal={this.handleCodePostal}
                                marques={marques}
                                annees={annees}
                                kmas={kmas}
                                marque={this.state.marque}
                                modeles={this.state.modeles}
                                modele={this.state.modele}
                                annee={this.state.annee}
                                kma={this.state.kma}
                                handleMarque={this.handleMarque}
                                handleModele={this.handleModele}
                                handleAnnee={this.handleAnnee}
                                handleKma={this.handleKma}
                            />
                        </div>

                        <div className={this.state.classResult}>
                            <Resultat
                                genre={this.state.genre}
                                prenom={this.state.prenom}
                                nom={this.state.nom}
                                age={this.state.age}
                                experience={this.state.experience}
                                marque={this.state.marque}
                                modele={this.state.modele}
                                annee={this.state.annee}
                                handleReset={this.handleReset}
                            />
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
