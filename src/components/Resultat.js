import React from 'react';
import Button from '@material-ui/core/Button';

const Resultat = (props) =>{

  return (

    <div className={props.classResult}>
                        <div className="border rounded px-4 my-4">
                            <div className="my-3">
                                <h4 className="text-uppercase. d-flex justify-content-center">
                                    <span className="align-self-center.">Votre Soumission</span>
                                </h4>
                            </div>

                            <div class="card bg-light">
                                <div className="card-header">
                                    <h6 className="">{props.genre + ' ' + props.prenom + ' ' + props.nom}</h6>
                                </div>

                            </div>
                            <div className="card. bg-light border-light my-3">
                                <div class="card-header">
                                    <h5><ins>{props.marque + ' ' + props.modele + ' ' + props.annee}</ins></h5>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <p>
                                            <span className="h3">
                                                <strong>110.42 $</strong><span className="text-muted small">/mois</span>
                                            </span>
                                            <span className="text-muted"> (ou 1325.00 $/an).</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card. bg-light border-light my-3">

                                <div class="card-header">
                                    <h4>
                                        Couverture
                                    </h4>
                                </div>
                                <div class="card-body row.">

                                    <div className="col">
                                        <p>
                                            <span>Responsablité Civile :</span><br />
                                            <span><strong>1 Million</strong></span>
                                        </p>
                                    </div>

                                    <div className="col">
                                        <p>
                                            <span>Risques de Collision et de Renversement : </span><br />
                                            <span><strong>Franchise 500 $</strong></span>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            <span>Tous Risques sauf Collision et Renversement : </span><br />
                                            <span><strong>Franchise 250 $</strong></span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* SOUMETTRE */}
                        <div className="row justify-content-center mt-4">
                            <Button variant="outlined" color="primary" type="reset" onClick={props.handleReset}>RECOMMENCER</Button>
                            {/* <button className="btn btn-outline-info" type="submit">Afficher</button> */}
                        </div>

    </div>

   ) 
  }

  export default Resultat;