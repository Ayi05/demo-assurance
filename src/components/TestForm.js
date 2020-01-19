
import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import '../index.css';
import InfoC from './Data';
import InfoV from './Data';


const genres = ['M.', 'Mme'];
const ages = ['Tranche d\'Âge', '15 à 20', '21 à 25', '26 à 30', '31 à 35', '36 à 40', '41 à 45', '46 à 50', '51 à 55', '56 à 60', '61 à 65', '66 et plus'];
const experiences = ['Experience', '- 24 Mois', '2 à 5 ans', '6 à 9 ans', '10 ans +'];
// const sinistres = ['Choisir', '0', '1', '2', '3+'];

const annees = ['Choisir', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const marques = ['Choisir', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Mazda', 'Nissan'];
const kmas = ['Choisir', 'moins de 10 000 km', '10 001 à 20 000 km', '20 001 à 35 000 km', 'plus de 35 000 km']

const chevrolet = ['Choisir', 'Blazer', 'Camaro', 'Cruze', 'Equinox', 'Silverado', 'Spark'];
const ford =  ['Choisir', 'EcoSport', 'Escape', 'Explorer', 'F-150', 'Fusion', 'Mustang'];
const honda = ['Choisir', 'Accord', 'Civic', 'Civic Coupe', 'CR-V', 'HR-V'];
const hyundai = ['Choisir', 'Elantra', 'Elantra GT', 'Kona', 'Kona Electric', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'];
const mazda = ['Choisir', 'CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'];
const nissan = ['Choisir', 'Altima', 'Kicks', 'Micra', 'Murano', 'Quashqai', 'Rogue', 'Versa'];

// const p = 'Prénom';

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
    alert('Genre : ' + this.state.genre + '   Prénom : ' + this.state.prenom + '    Nom : ' + this.state.nom + '\nÂge : ' + this.state.age + '\nExpérience : ' + this.state.experience + '\nTéléphone : ' + this.state.tel + '\nCode Postal : ' + this.state.cp + '\nMarque : ' + this.state.marque + '\nModèle : ' + this.state.modele + '\nAnnée : ' + this.state.annee  + '\nKm/Année : ' + this.state.kma);
    event.preventDefault();
  }


  render() {
    return (

      <div className="container mt-2 d-flex justify-content-center">

        <div className="py-3">

          <form className="" onSubmit={this.handleSubmit}>
          
            <div>
              <div className="border rounded px-4 my-4">
                <div className="my-3">
                  <h4 className="text-uppercase d-flex">
                    <i className="fas fa-user-circle fa-2x my-2 m-0 text-info mr-2"></i>                    
                    <span className="align-self-center">Conducteur</span>
                  </h4>
                </div>
                
                <div className="form-group row justify-content-start">

                  <div className="col">
                    <select className="form-control" onChange={event => { this.setState({ genre: event.target.value }) }}>
                      {genres.map(genre => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <FormControl size="small" variant="outlined">
                    <Select onChange={event => { this.setState({ genre: event.target.value }) }}>
                      {genres.map(genre => (
                        <MenuItem key={genre} value={genre}>
                          {genre}
                        </MenuItem>
                      ))}                      
                    </Select>
                  </FormControl> */}

                  <div className="col">
                    <TextField size="small" label="Prénom" variant="outlined" onChange={event => { this.setState({ prenom: event.target.value }) }} />
                  </div>

                  <div className="col">
                    <TextField size="small" label="Nom" variant="outlined" onChange={event => { this.setState({ nom: event.target.value }) }} />
                  </div>                  
                </div>

                  <div className="form-group row justify-content-start">

                    <div className="col-4">
                      <select className="form-control" onChange={event => { this.setState({ age: event.target.value }) }}>
                        {ages.map(age => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* <FormControl className="col-4" size="small">
                      <Select variant="outlined" onChange={event => { this.setState({ age: event.target.value }) }}>
                        {ages.map(age => (
                          <MenuItem key={age} value={age}>
                            {age}
                          </MenuItem>
                        ))}                      
                      </Select>
                    </FormControl> */}

                    <div className="col-4">
                      <select className="form-control" onChange={event => { this.setState({ experience: event.target.value }) }}>
                        {experiences.map(experience => (
                          <option key={experience} value={experience}>
                            {experience}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>
                    
                <div className="form-group row justify-content-start">

                  {/* <label className="col-4">Code Postal
                    <input type="text" placeholder="A1B C2D" className="form-control" onChange={event => { this.setState({ cp: event.target.value }) }} />
                  </label> */}
                  <div className="col-4">
                    <TextField size="small" label="Code Postal" variant="outlined" placeholder="A1B C2D" onChange={event => { this.setState({ cp: event.target.value }) }} />
                  </div>                  

                  {/* <label className="col-4">Telephone
                    <input type="phone" placeholder="123-456-7890" className="form-control" onChange={event => { this.setState({ tel: event.target.value }) }} />
                  </label> */}
                  <div className="col-4">
                    <TextField size="small" label="Téléphone" variant="outlined" placeholder="(123)-456-7890" onChange={event => { this.setState({ tel: event.target.value }) }} />
                  </div>                  

                </div>

              </div>

              <div className="border rounded px-4 my-4">
                <div className="mt-3">
                  <h4 className="text-uppercase d-flex">
                    <i className="fas fa-car fa-2x my-2 m-0 text-info mr-2"></i>                    
                    <span className="align-self-center">Véhicule</span>
                  </h4>
                </div>
                

                <div className="form-group row justify-content-start mt-4">

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
            </div>
            
            <div className="row justify-content-center">
              {/* <button class="btn btn-secondary mx-2" type="reset">Effacer</button> */}
              <button className="btn btn-info mx-2" type="submit">Afficher</button>
            </div>

          </form>

        </div>

      </div >
    );
  }
}

export default Soumission;