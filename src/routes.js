import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Conditions from './components/Conditions';
import Profil from './components/Profif';
import Vehicul from './components/Vehicule';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Conditions} />
                <Route exact path="/profil" component={Profil} />
                <Route exact path="/vehicul" component={Vehicul} />
                {/* <Route exact path="/protections" component={Protections} /> */}
                {/* <Route component={Erreur} /> */}
            </Switch>
        </Router>
    );
};
