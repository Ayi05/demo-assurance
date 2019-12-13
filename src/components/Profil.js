
import React from 'react';

const genres = ['Genre', 'Homme', 'Femme', 'Autre'];
const ages = ['Tranche d\'âge', '15-20', '21-25', '26-30', '31-35', '36-40', '41-55', '56-70', '71+'];
const experiences = ['Experience de conduite', '- 24 Mois', '2 à 5 ans', '6 à 9 ans', '10 ans +'];
const sinistres = ['Sinistres aucours des 5 dernières années', '0', '1', '2', '3+']

class Profil extends React.Component {
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

      <div className="container mt-5 d-flex justify-content-center">

        <div className="col-md-6 border rounded py-5">
          <div className="row justify-content-center">
            <h2>Votre Profil</h2>
          </div>

          <form className="px-5 mt-5" onSubmit={this.handleSubmit}>

            {/* Prenom */}
            <div class="form-group">
              <input
                type="text"
                name="prenom"
                onChange={event => { this.setState({ prenom: event.target.value }) }}
                placeholder="Prenom" className="form-control" />
            </div>

            {/* Nom */}
            <div class="form-group">
              <input
                type="text"
                name="nom"
                onChange={event => { this.setState({ nom: event.target.value }) }}
                placeholder="Nom" className="form-control" />
            </div>

            {/* Genre */}
            <div class="form-group">
              <select className="form-control" onChange={event => { this.setState({ genre: event.target.value }) }}>
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Tranche d'Age */}
            <div class="form-group" onChange={event => { this.setState({ age: event.target.value }) }}>
              <select className="form-control">
                {ages.map(age => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience de conduite */}
            <div class="form-group">
              <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                {experiences.map(experience => (
                  <option key={experience} value={experience}>
                    {experience}
                  </option>
                ))}
              </select>
            </div>

            {/* Sinistres aucours des 5 dernières années */}
            <div class="form-group">
              <select className="form-control" onChange={event => { this.setState({ sinistres: event.target.value }) }}>
                {sinistres.map(sinistre => (
                  <option key={sinistre} value={sinistre}>
                    {sinistre}
                  </option>
                ))}
              </select>
            </div>

            {/* Code Postal */}
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

export default Profil;