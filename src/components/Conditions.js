import React from "react";

const condMessage =
  "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d 'humour ou de mots aléatoires qui ne ressemblent...";

const Conditions = props => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-6 border rounded p-5">
        <div className="row justify-content-center">
          <h3>Conditions d'utilisation</h3>
          <p className="text-justify">{condMessage}</p>
        </div>
        <div className="row justify-content-center">
          {/* <button type="button" class="btn btn-outline-secondary btn-sm mx-2">
            Refuser
          </button> */}
          <a href="/TestForm">
            <button type="button" class="btn btn-info btn-sm mx-2 text-uppercase">
              TestForm
            </button>
          </a>
          <a href="/Test">
            <button type="button" class="btn btn-info btn-sm mx-2 text-uppercase">
              Test
            </button>
          </a>
          <a href="/Soumission">
            <button type="button" class="btn btn-info btn-sm mx-2 text-uppercase">
              Soumission
            </button>
          </a>
          <a href="/Formika">
            <button type="button" class="btn btn-info btn-sm mx-2 text-uppercase">
              Formik
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
