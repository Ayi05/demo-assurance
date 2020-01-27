import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Conditions from './components/Conditions';
import Formulaire from './components/Formulaire';


export default function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Conditions} />
                <Route path="/Soumission" component={Formulaire} />
                {/* <Route component={Erreur} /> */}
            </Switch>
        </Router>
    );
};
