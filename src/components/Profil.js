
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

const genres = ['Genre', 'Homme', 'Femme', 'Autre'];
const ages = ['Àge', '15-20', '21-25', '26-30', '31-35', '36-40', '41-55', '56-70', '71+'];
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
      tel: '',
      cp: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ prenom: event.target.value });
  }

  handleSubmit(event) {
    alert('Prénom : ' + this.state.prenom + '\nNom : ' + this.state.nom + '\nGenre : ' + this.state.genre + '\nÂge : ' + this.state.age + '\nExpérience : ' + this.state.experience + '\nSinitres : ' + this.state.sinistres + '\nTéléphone : ' + this.state.tel + '\nCode Postal : ' + this.state.cp);
    event.preventDefault();
  }

  render() {
    return (

      <div className="container mt-2 d-flex justify-content-center">

        <div className="col-md-6 border rounded py-3">
          <div className="row justify-content-center">
            <h2>Conducteur</h2>
          </div>

          <form className="px-5 mt-2" onSubmit={this.handleSubmit}>

            <div class="form-group row justify-content-around">
              {/* Prenom */}
              {/* <TextField id="standard-basic" label="Prénom" onChange={event => { this.setState({ prenom: event.target.value }) }} /> */}
              <input type="text" placeholder="Prénom" className="form-control col-6" onChange={event => { this.setState({ prenom: event.target.value }) }} />

              {/* Nom */}
              {/* <TextField id="standard-basic" label="Nom" onChange={event => { this.setState({ nom: event.target.value }) }} /> */}
              <input type="text" placeholder="Nom" className="form-control col-6" onChange={event => { this.setState({ nom: event.target.value }) }} />
            </div>

            <div class="form-group row justify-content-between">
              {/* Genre */}
              <select className="form-control col-6" onChange={event => { this.setState({ genre: event.target.value }) }}>
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>

              {/* Tranche d'Age */}
              <select className="form-control col-6" onChange={event => { this.setState({ age: event.target.value }) }}>
                {ages.map(age => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience de conduite */}
            <div class="form-group row justify-content-between">
              <select className="form-control col-6" onChange={event => { this.setState({ experience: event.target.value }) }}>
                {experiences.map(experience => (
                  <option key={experience} value={experience}>
                    {experience}
                  </option>
                ))}
              </select>

              {/* Sinistres aucours des 5 dernières années */}
              <select className="form-control col-6" onChange={event => { this.setState({ sinistres: event.target.value }) }}>
                {sinistres.map(sinistre => (
                  <option key={sinistre} value={sinistre}>
                    {sinistre}
                  </option>
                ))}
              </select>
            </div>

            {/* Code Postal */}
            <div class="form-group row">
              {/* <TextField id="standard-basic" label="Code Postal" onChange={event => { this.setState({ cp: event.target.value }) }} /> */}
              <input type="phone" placeholder="Telephone" className="form-control col-6" onChange={event => { this.setState({ tel: event.target.value }) }} />
              <input type="text" placeholder="Code Postal" className="form-control col-6" onChange={event => { this.setState({ cp: event.target.value }) }} />
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