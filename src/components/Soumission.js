
import React from 'react';
import InfoC from './Data';
import InfoV from './Data';


const genres = ['M.', 'Mme', 'Nb'];
const ages = ['Choisir', '15 à 20', '21 à 25', '26 à 30', '31 à 35', '36 à 40', '41 à 45', '46 à 50', '51 à 55', '56 à 60', '61 à 65', '66 et plus'];
const experiences = ['Choisir', '- 24 Mois', '2 à 5 ans', '6 à 9 ans', '10 ans +'];
const sinistres = ['Choisir', '0', '1', '2', '3+'];

const annees = ['Choisir', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const marques = ['Choisir', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda', 'Nissan'];
const kmas = ['Choisir', 'moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km']

const chevrolet = ['Choisir', 'Blazer', 'Camaro', 'Cruze', 'Equinox', 'Silverado'];
const ford =  ['Choisir', 'EcoSport', 'Escape', 'Explorer', 'F-150', 'Fusion', 'Mustang'];
const honda = ['Choisir', 'Accord', 'Civic', 'Civic Coupe', 'CR-V', 'HR-V'];
const hyundai = ['Choisir', 'Elantra', 'Elantra GT', 'Kona', 'Kona Electric', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'];
const mazda = ['Choisir', 'CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'];
const nissan = ['Choisir', 'Altima', 'Kicks', 'Micra', 'Murano', 'Quashqai', 'Rogue', 'Versa'];

const p = 'Prénom';

class Soumission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoC, InfoV,
      modeles: [],
    };

    this.handleMarques = this.handleMarques.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleMarques(event) {
    // if (event.target.value === 'Chevrolet') {
    //   this.setState({modeles: chevrolet})
    // }
    switch (event.target.value) {
      case 'Chevrolet':
        this.setState({modeles: chevrolet})
        break;

      case 'Ford':
        this.setState({modeles: ford})
        break;

      case 'Honda':
        this.setState({modeles: honda})
        break;

      case 'Hyundai':
        this.setState({modeles: hyundai})
        break;

      case 'Mazda':
        this.setState({modeles: mazda})
        break;

      case 'Nissan':
        this.setState({modeles: nissan})
        break;

      default:
        break;
    }
    this.setState({ marque: event.target.value });
  }


  handleSubmit(event) {
    alert('Genre : ' + this.state.genre + '   Prénom : ' + this.state.prenom + '    Nom : ' + this.state.nom + '\nÂge : ' + this.state.age + '\nExpérience : ' + this.state.experience + '\nSinitres : ' + this.state.sinistre + '\nTéléphone : ' + this.state.tel + '\nCode Postal : ' + this.state.cp + '\nMarque : ' + this.state.marque + '\nModèle : ' + this.state.modele + '\nAnnée : ' + this.state.annee  + '\nKm/Année : ' + this.state.kma);
    event.preventDefault();
  }


  render() {
    return (

      <div className="container mt-2 d-flex justify-content-center">

        <div className="col-md-6. py-3">

          <form className="" onSubmit={this.handleSubmit}>
          
              
              <div className="border rounded px-4 mt-2">
                <h3>Conducteur</h3>

                <div className="form-group row justify-content-start"> 

                  <label className="col-2">Civilité
                  <select className="form-control" onChange={event => { this.setState({ genre: event.target.value }) }}>
                    {genres.map(genre => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  </label>

                  <label className="col-5">Prénom
                    <input type="text" placeholder={p} className="form-control" onChange={event => { this.setState({ prenom: event.target.value }) }} />
                  </label>

                  <label className="col-5">Nom
                    <input type="text" placeholder="Nom" className="form-control" onChange={event => { this.setState({ nom: event.target.value }) }} />
                  </label>
                </div>


                  <div className="form-group row justify-content-start">

                    <label className="col">Tranche d'Âge
                      <select className="form-control" onChange={event => { this.setState({ age: event.target.value }) }}>
                        {ages.map(age => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="col">Experience
                      <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                        {experiences.map(experience => (
                          <option key={experience} value={experience}>
                            {experience}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="col">Sinistres
                      <select className="form-control" onChange={event => { this.setState({ sinistre: event.target.value }) }}>
                        {sinistres.map(sinistre => (
                          <option key={sinistre} value={sinistre}>
                            {sinistre}
                          </option>
                        ))}
                      </select>
                    </label>

                  </div>
                    
                <div className="form-group row justify-content-start">

                  <label className="col-4">Code Postal
                    <input type="text" placeholder="A1B C2D" className="form-control" onChange={event => { this.setState({ cp: event.target.value }) }} />
                  </label>

                  <label className="col-4">Telephone
                    <input type="phone" placeholder="123-456-7890" className="form-control" onChange={event => { this.setState({ tel: event.target.value }) }} />
                  </label>

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

              <div className="col-4. border rounded px-4 mt-2">
                <h3>Véhicule</h3>


                <div className="form-group row justify-content-start">

                  <label className="col-5">Marque
                    <select className="form-control" onChange={this.handleMarques}>
                      {marques.map(marque => (
                        <option key={marque} value={marque}>
                          {marque}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="col-5">Modèle
                    <select className="form-control" onChange={event => { this.setState({ modele: event.target.value }) }}>
                      {this.state.modeles.map(modele => (
                        <option key={modele} value={modele}>
                          {modele}
                        </option>
                      ))}
                    </select>
                  </label>

                </div>

                <div className="form-group row justify-content-start">

                  <label className="col-5">Année
                    <select className="form-control" onChange={event => { this.setState({ annee: event.target.value }) }}>
                      {annees.map(annee => (
                        <option key={annee} value={annee}>
                          {annee}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="col-5">Km par Année
                    <select className="form-control" onChange={event => { this.setState({ kma: event.target.value }) }}>
                      {kmas.map(kma => (
                        <option key={kma} value={kma}>
                          {kma}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

              </div>
            
            {/* </div> */}
            
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