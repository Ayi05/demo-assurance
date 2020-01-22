import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import { Formik } from 'formik';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 90,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Test = () => {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [nom, setNom] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleGenre = event => {
    setGenre(event.target.value);
  };
  const handlePrenom = event => {
    setPrenom(event.target.value);
  };
  const handleNom = event => {
    setNom(event.target.value);
  };

  //Affichage
  const handleSubmit = event => {
    alert(genre + ' ' + prenom + ' ' + nom);
    event.preventDefault();
  };


  return (
    <div className="container mt-5 pt-5">

      <ValidatorForm>

        <div className="col-5 row">
          <FormControl variant="outlined" size="small" name="genre" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">Civilité</InputLabel>
            <Select value={genre} onChange={handleGenre} labelWidth={labelWidth} >
              <MenuItem value="">
                <em>Choisir</em>
              </MenuItem>
              <MenuItem value="M.">M.</MenuItem>
              <MenuItem value="Mme">Mme</MenuItem>
            </Select>
          </FormControl>
          <div className="col">
            <TextValidator size="small" label="Prénom" name="prenom" variant="outlined" onChange={handlePrenom}
              validators={['required']} errorMessages={['Champ Obligatoire!']} />
          </div>
          <div className="col">
            <TextField size="small" label="Nom" name="nom" variant="outlined" onChange={handleNom} />
          </div>

        </div>
        <div>
          <Button variant="outlined" color="primary" className="mt-3" type="submit" onClick={handleSubmit}>Afficher</Button>
        </div>

      </ValidatorForm>

    </div>
  );
}
export default Test;