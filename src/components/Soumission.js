
import React from 'react';
import InfoC from './Data';
import InfoV from './Data';


const genres = ['M.', 'Mme', 'Nb'];
const ages = ['Choisir', '15 à 20', '21 à 25', '26 à 30', '31 à 35', '36 à 40', '41 à 45', '46 à 50', '51 à 55', '56 à 60', '61 à 65', '66 et plus'];
const experiences = ['Choisir', '- 24 Mois', '2 à 5 ans', '6 à 9 ans', '10 ans +'];
const sinistres = ['Choisir', '0', '1', '2', '3+'];

const annees = ['Année', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const marques = ['Marque', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda'];
const modeles = ['Modèle', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];
const kmas = ['Km par année', 'moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km']


class Soumission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoC, InfoV,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ prenom: event.target.value });
  }

  handleSubmit(event) {
    alert('Genre : ' + this.state.genre + '   Prénom : ' + this.state.prenom + '    Nom : ' + this.state.nom + '\nÂge : ' + this.state.age + '\nExpérience : ' + this.state.experience + '\nSinitres : ' + this.state.sinistres + '\nTéléphone : ' + this.state.tel + '\nCode Postal : ' + this.state.cp + '\nAnnée : ' + this.state.annee + '\nMarque : ' + this.state.marque + '\nModèle : ' + this.state.modele + '\nKm/Année : ' + this.state.kma);
    event.preventDefault();
  }

  render() {
    return (

      <div className="container mt-2 d-flex justify-content-center">

        <div className="col-md-6. py-3">

          <form className="" onSubmit={this.handleSubmit}>
          
            <div className="row justify-content-around">
              
              <div className="col-8 border rounded px-4 mt-2">
                <h3>Conducteur</h3>

                <div className="form-group row justify-content-start"> 

                  <div className="col-2">
                  <label>Civilité</label>
                  <select className="form-control" onChange={event => { this.setState({ genre: event.target.value }) }}>
                    {genres.map(genre => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  </div>

                  <div className="col-5">
                  <label>Prénom</label>
                  <input type="text" placeholder="Prénom" className="form-control" onChange={event => { this.setState({ prenom: event.target.value }) }} />
                  </div>

                  <div className="col-5">
                  <label>Nom</label>
                  <input type="text" placeholder="Nom" className="form-control" onChange={event => { this.setState({ nom: event.target.value }) }} />
                  </div>
                </div>

                {/* <div className="form-group. row. justify-content-start."> */}

                  <div className="form-group row justify-content-start">

                    <div className="col-4">
                      <label>Tranche d'Âge</label>
                      <select className="form-control" onChange={event => { this.setState({ age: event.target.value }) }}>
                        {ages.map(age => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-4">
                      <label>Experience</label>
                      <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                        {experiences.map(experience => (
                          <option key={experience} value={experience}>
                            {experience}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-4">
                      <label>Sinistres</label>
                      <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                        {sinistres.map(sinistre => (
                          <option key={sinistre} value={sinistre}>
                            {sinistre}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>
                {/* </div> */}
                    
                <div className="form-group row justify-content-start">

                  <div className="col-4">
                  <label>Code Postal</label>
                  <input type="text" placeholder="A1B C2D" className="form-control" onChange={event => { this.setState({ cp: event.target.value }) }} />
                  </div>

                  <div className="col-4">
                  <label>Telephone</label>
                  <input type="phone" placeholder="123-456-7890" className="form-control" onChange={event => { this.setState({ tel: event.target.value }) }} />
                  </div>

                </div>

                {/* Code Postal */}
                {/* <div className="form-group row">
                  <input type="phone" placeholder="Telephone" className="form-control col-6" onChange={event => { this.setState({ tel: event.target.value }) }} />
                  <input type="text" placeholder="Code Postal" className="form-control col-6" onChange={event => { this.setState({ cp: event.target.value }) }} />
                </div> */}

                <div className="form-group row">
                  {/* <input type="phone" placeholder="Telephone" className="form-control col-6" onChange={event => { this.setState({ tel: event.target.value }) }} /> */}
                  {/* <input type="text" placeholder="Code Postal" className="form-control col-6" onChange={event => { this.setState({ cp: event.target.value }) }} /> */}
                </div>

              </div>

              <div className="col-4 border rounded px-5 mt-2">
                <h3>Véhicule</h3>
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

              </div>
            
            </div>
              <div className="row justify-content-center mt-5">
                {/* <button class="btn btn-secondary mx-2" type="reset">Effacer</button> */}

                <button class="btn btn-info mx-2" type="submit">Afficher</button>
              </div>

          </form>

        </div>

      </div >
    );
  }
}

export default Soumission;