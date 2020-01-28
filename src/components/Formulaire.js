import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Resultat from './Resultat';
import Conducteur from './Conducteur';
import Vehicule from './Vehicule';


const marques = ['Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda', 'Nissan'];

const chevrolet = ['Blazer', 'Camaro', 'Cruze', 'Equinox', 'Silverado', 'Spark'];
const ford = ['EcoSport', 'Escape', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Fusion', 'Mustang'];
const honda = ['Accord', 'Civic', 'Civic Coupe', 'CR-V', 'HR-V'];
const hyundai = ['Elantra', 'Elantra GT', 'Kona', 'Kona Electric', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'];
const mazda = ['CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'];
const nissan = ['Altima', 'Kicks', 'Micra', 'Murano', 'Quashqai', 'Rogue', 'Versa'];

const annees = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
const kmas = ['moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km'];


class Formulaire extends React.Component {

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
        classResult: 'col py-3 d-none.',
        classForm: 'col py-3',

    }

    

    // HandleSubmit
    handleSubmit = () => {
        // Affichage des données
        this.setState({ classResult: 'col py-3', classForm: 'col py-3 d-none.'})
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
            classResult: 'col py-3 d-none.',
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
            <div className="container mt-2 d-flex justify-content-center">
                <div className="row">
                    <div className={this.state.classForm}>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >

                            <Conducteur
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
                            />
                            

                            <Vehicule 
                            marques={marques}
                            marque={this.state.marque}
                            modeles={this.state.modeles}
                            modele={this.state.modele}
                            annees={annees}
                            annee={this.state.annee}
                            kmas={kmas}
                            kma={this.state.kma}
                            handleMarque={this.handleMarque}
                            handleModele={this.handleModele}
                            handleAnnee={this.handleAnnee}
                            handleKma={this.handleKma}
                            />

                            
                            <div className="row justify-content-center mt-4">
                                <Button variant="outlined" color="primary" type="submit">SOUMETTRE</Button>
                            </div>

                        </ValidatorForm>

                    </div>

                    <Resultat 
                    classResult={this.state.classResult}
                    genre={this.state.genre} 
                    prenom={this.state.prenom} 
                    nom={this.state.nom}
                    age={this.state.age}
                    experience={this.state.experience}
                    marque={this.state.marque}
                    modele={this.state.modele}
                    annee={this.state.annee}
                    handleReset={this.handleReset}/>

                </div>
            </div >
        );
    }
}

export default Formulaire;