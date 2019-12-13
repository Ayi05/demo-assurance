
import React from 'react';
// import Profil from './Profif';


class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            genre: '',
            age: '',
            experience: '',
            sinistres: '',
            cp: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ prenom: event.target.value });
    }

    handleSubmit(event) {
        alert('Prénom : ' + this.state.prenom + '\nNom : ' + this.state.nom + '\nGenre : ' + this.state.genre + '\nÂge : ' + this.state.age + '\nExpérience : ' + this.state.experience + '\nSinitres : ' + this.state.sinistres + '\nCode Postal : ' + this.state.cp);
        event.preventDefault();
    }

    render() {
        return (
            // <Profil></Profil>
            <div className="container mt-5 d-flex justify-content-center">

                <div className="col-md-6 border rounded py-5">
                    <div className="row justify-content-center">
                        <h2>Votre Profil</h2>
                    </div>

                    <form className="px-5 mt-5" onSubmit={this.handleSubmit}>

                        <div class="form-group row. justify-content-between.">
                            <input
                                type="text"
                                name="prenom"
                                onChange={event => { this.setState({ prenom: event.target.value }) }}
                                placeholder="Prenom" className="form-control" />
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                name="nom"
                                onChange={event => { this.setState({ nom: event.target.value }) }}
                                placeholder="Nom" className="form-control" />
                        </div>

                        <div class="form-group">
                            <select className="form-control" onChange={event => { this.setState({ genre: event.target.value }) }}>
                                <option value="0">Genre</option>
                                <option value="1">Homme</option>
                                <option value="2">Femme</option>
                                <option value="3">Autre</option>
                            </select>
                        </div>

                        <div class="form-group" onChange={event => { this.setState({ age: event.target.value }) }}>
                            <select className="form-control">
                                <option value="0">Tranche d'âge</option>
                                <option value="1">15-20</option>
                                <option value="2">21-25</option>
                                <option value="3">26-30</option>
                                <option value="4">31-35</option>
                                <option value="5">36-40</option>
                                <option value="6">41-55</option>
                                <option value="7">56-70</option>
                                <option value="8">71+</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                                <option value="0">Experience de conduite</option>
                                <option value="1">- 24 Mois</option>
                                <option value="2">2 à 5 ans</option>
                                <option value="3">6 à 9 ans</option>
                                <option value="4">10 ans +</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <select className="col-5. form-control" onChange={event => { this.setState({ sinistres: event.target.value }) }}>
                                <option value="0">Sinistres aucours des 5 dernières années</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3+</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <input
                                type="text"
                                onChange={event => { this.setState({ cp: event.target.value }) }}
                                className="form-control form-control-md" placeholder="Code Postal" />
                        </div>

                        <div className="row justify-content-center mt-5">
                            <button class="btn btn-secondary mx-2" type="reset">Effacer</button>

                            <button class="btn btn-info mx-2" type="submit">Afficher</button>
                        </div>

                    </form>

                </div>

            </div >
        );
    }
}

export default Basic;