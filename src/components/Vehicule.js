
import React from 'react';
import InfoV from './Data';


const annees = ['Année', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const marques = ['Marque', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda'];
const modeles = ['Modèle', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];
const kmas = ['Km par année', 'moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km']

class Vehicule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoV,
      // annee: '',
      // marque: '',
      // modele: '',
      // kma: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ prenom: event.target.value });
  }

  handleSubmit(event) {
    alert('Année : ' + this.state.annee + '\nMarque : ' + this.state.marque + '\nModèle : ' + this.state.modele + '\nKm/Année : ' + this.state.kma);
    event.preventDefault();
  }

  render() {
    return (

      <div className="container mt-2 d-flex justify-content-center">

        <div className="col-md-6 border rounded py-3">
          <div className="row justify-content-center">
            <h2>Véhicule</h2>
          </div>

          <form className="px-5 mt-2" onSubmit={this.handleSubmit}>

            {/* Annee */}
            {/* <div class="form-group">
              <input
                type="date"
                name="date"
                onChange={event => { this.setState({ annee: event.target.value }) }}
                className="form-control" />
            </div> */}

            {/* Annee */}
            <div class="form-group">
              <select className="form-control" onChange={event => { this.setState({ annee: event.target.value }) }}>
                {annees.map(annee => (
                  <option key={annee} value={annee}>
                    {annee}
                  </option>
                ))}
              </select>
            </div>

            {/* Tranche d'Age */}
            <div class="form-group" onChange={event => { this.setState({ marque: event.target.value }) }}>
              <select className="form-control">
                {marques.map(marque => (
                  <option key={marque} value={marque}>
                    {marque}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience de conduite */}
            <div class="form-group">
              <select className="form-control" onChange={event => { this.setState({ modele: event.target.value }) }}>
                {modeles.map(modele => (
                  <option key={modele} value={modele}>
                    {modele}
                  </option>
                ))}
              </select>
            </div>

            {/* Kilomètres par années */}
            <div class="form-group">
              <select className="col-5. form-control" onChange={event => { this.setState({ kma: event.target.value }) }}>
                {kmas.map(kma => (
                  <option key={kma} value={kma}>
                    {kma}
                  </option>
                ))}
              </select>
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

export default Vehicule;
